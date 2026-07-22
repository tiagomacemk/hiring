import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const baseUrl = process.env.QA_BASE_URL || 'http://127.0.0.1:3000';
const outDir = resolve('qa-booking-thank-you');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const results = {
  baseUrl,
  capturedAt: new Date().toISOString(),
  views: {},
};

async function capture(name, width, height) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  const failedRequests = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('requestfailed', (request) => failedRequests.push({ url: request.url(), failure: request.failure()?.errorText || 'unknown' }));
  const url = `${baseUrl}/thank-you-for-booking?name=Tiago&event_start_time=2026-07-24T15:30:00%2B02:00&meeting=https%3A%2F%2Fmeet.google.com%2Fdemo&reschedule_url=https%3A%2F%2Fcalendly.com%2Freschedule-demo`;
  const response = await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: true });
  const data = await page.evaluate(() => {
    const text = document.body.innerText;
    const brokenVisibleImages = Array.from(document.images)
      .filter((img) => img.getBoundingClientRect().width > 0 && img.getBoundingClientRect().height > 0 && img.naturalWidth === 0)
      .map((img) => img.getAttribute('src'));
    const lightSections = Array.from(document.querySelectorAll('section')).filter((section) => {
      const bg = getComputedStyle(section).backgroundColor;
      const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return false;
      const [, r, g, b] = match.map(Number);
      return (r + g + b) / 3 > 190;
    }).map((section) => ({ id: section.id, className: section.className, heading: section.querySelector('h1,h2,h3')?.innerText || '' }));
    return {
      title: document.title,
      pathAfterSanitize: location.pathname + location.search,
      h1: document.querySelector('h1')?.innerText || '',
      helloLine: document.querySelector('#helloLine')?.innerText || '',
      eventTime: document.querySelector('#eventTime')?.innerText || '',
      eventPlace: document.querySelector('#eventPlace')?.innerText || '',
      dataLayer: window.dataLayer || [],
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      overflowPx: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
      imageCount: document.images.length,
      brokenVisibleImages,
      lightSections,
      bookAgainHits: (text.match(/book again|book a call|schedule another/gi) || []).length,
      guaranteeHits: (text.match(/guarantee/gi) || []).length,
      hasConfirmRouteText: text.includes('Your strategy call is confirmed.'),
    };
  });
  results.views[name] = {
    url,
    status: response?.status(),
    screenshot: resolve(`${outDir}/${name}.png`),
    errors,
    failedRequests,
    ...data,
  };
  await page.close();
}

await capture('desktop-1440', 1440, 1200);
await capture('mobile-390', 390, 844);
await browser.close();

const failures = [];
for (const [name, view] of Object.entries(results.views)) {
  if (view.status !== 200) failures.push(`${name}: HTTP ${view.status}`);
  if (view.errors.length) failures.push(`${name}: page/console errors ${view.errors.join('; ')}`);
  if (view.overflowPx !== 0) failures.push(`${name}: horizontal overflow ${view.overflowPx}px`);
  if (view.brokenVisibleImages.length) failures.push(`${name}: broken visible images ${view.brokenVisibleImages.join(', ')}`);
  if (!view.pathAfterSanitize.startsWith('/thank-you-for-booking') || view.pathAfterSanitize.includes('?')) failures.push(`${name}: query string was not sanitized (${view.pathAfterSanitize})`);
  if (view.bookAgainHits > 0) failures.push(`${name}: possible duplicate booking CTA copy hit`);
}
writeFileSync(`${outDir}/results.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify({ ok: failures.length === 0, failures, resultsPath: resolve(`${outDir}/results.json`), screenshots: Object.fromEntries(Object.entries(results.views).map(([k,v]) => [k, v.screenshot])) }, null, 2));
if (failures.length) process.exit(1);
