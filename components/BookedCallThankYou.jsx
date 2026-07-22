"use client";

import { useEffect, useRef } from "react";

const pageMarkup = `
<header class="topbar"><div class="shell"><img class="logo" src="/booking-thank-you-assets/01-mm-newsletter-logo-svg-3.svg" alt="Macedo Marketing"></div></header>
<main>
<section class="hero research-hero" id="top"><div class="shell">
  <div class="confirm-card"><div class="confirm-status"><i>✓</i><div><strong id="helloLine">Your strategy call is confirmed.</strong><span>Your booking is saved.</span></div></div><div class="confirm-time"><strong id="eventTime">The date and time are in your calendar.</strong><p id="eventPlace">The video link is inside the invite.</p></div><a class="reschedule is-fallback" id="rescheduleLink" href="#">Use the invite to reschedule</a></div>
  <h1>Your call is booked. Here’s everything worth knowing <span class="gradient">before we speak.</span></h1>
  <p class="hero-lede">The work, the system, what is included, and what we expect from the companies we take on.</p>
  <div class="video-wrap signature-video research-film"><div class="video-poster"><button class="play js-outline" data-topic="research" aria-label="Open pre-call video outline"></button><div class="video-copy"><small>VIDEO TO RECORD · 6 TO 8 MINUTES</small><h2>How we work, what we expect, and whether there is a strong fit.</h2><p>This answers the questions that do not need to take up the call.</p></div></div><div class="chapters"><button class="chapter js-outline" data-topic="research"><time>00:00</time>Who we take on</button><button class="chapter js-outline" data-topic="research"><time>01:20</time>The system</button><button class="chapter js-outline" data-topic="research"><time>03:00</time>What is included</button><button class="chapter js-outline" data-topic="research"><time>04:40</time>What results require</button><button class="chapter js-outline" data-topic="research"><time>06:20</time>If there is a fit</button></div></div>
  <div class="research-links"><span>Verify the work yourself:</span><a href="https://macedomarketing.com/portfolio/" target="_blank" rel="noopener">Public portfolio ↗</a><a href="https://www.youtube.com/@macedomarketing" target="_blank" rel="noopener">YouTube ↗</a><a href="https://www.linkedin.com/company/macedo-marketing/" target="_blank" rel="noopener">LinkedIn ↗</a></div>
</div></section>

<section class="section objections" id="questions"><div class="shell"><div class="section-head wide-head"><h2>Questions we can answer <span class="coral-text">before the call.</span></h2><p>Each recording gives the complete answer in the first minute, with chapters for anyone who wants the details.</p></div>
<div class="objection-grid">
  <button class="objection-video js-outline" data-topic="fit"><span class="objection-poster q1"><span class="record-pill">VIDEO TO RECORD · 3 MIN</span><i class="mini-play"></i></span><span class="objection-copy"><small>01</small><strong>Who do you work best with?</strong><span>The businesses we can help most, and the situations we decline.</span><b>60-second answer + 3 chapters</b></span></button>
  <button class="objection-video js-outline" data-topic="included"><span class="objection-poster q2"><span class="record-pill">VIDEO TO RECORD · 4 MIN</span><i class="mini-play"></i></span><span class="objection-copy"><small>02</small><strong>What exactly is included?</strong><span>Media buying, creative, testing, reporting, and senior decision support.</span><b>60-second answer + 4 chapters</b></span></button>
  <button class="objection-video js-outline" data-topic="first90"><span class="objection-poster q3"><span class="record-pill">VIDEO TO RECORD · 4 MIN</span><i class="mini-play"></i></span><span class="objection-copy"><small>03</small><strong>What happens in the first 90 days?</strong><span>Diagnosis, early tests, what we validate, and when scaling begins.</span><b>60-second answer + 4 chapters</b></span></button>
  <button class="objection-video js-outline" data-topic="scope"><span class="objection-poster q4"><span class="record-pill">VIDEO TO RECORD · 3 MIN</span><i class="mini-play"></i></span><span class="objection-copy"><small>04</small><strong>How do you determine the right scope?</strong><span>What changes based on channels, creative needs, and the level of ownership required.</span><b>60-second answer + 3 chapters</b></span></button>
</div></div></section>

<section class="section offer-system" id="system"><div class="shell"><div class="system-intro"><h2>The Macedo system connects what most agencies <span class="gradient">manage separately.</span></h2><p>The order can change by account. The principle does not: solve the constraint before pushing more spend.</p></div>
<div class="growth-system"><article><small>01</small><strong>Diagnosis</strong><span>Economics, account history, offer, funnel, and the actual constraint.</span></article><i>→</i><article><small>02</small><strong>Compliance</strong><span>Remove avoidable platform or claim risk when it is limiting growth.</span></article><i>→</i><article><small>03</small><strong>Tracking</strong><span>Make sure the signal is useful enough to guide decisions.</span></article><i>→</i><article><small>04</small><strong>Offer</strong><span>Check whether the value, positioning, and purchase path can support scale.</span></article><i>→</i><article><small>05</small><strong>Creative</strong><span>Turn customer insight into ads that answer specific questions.</span></article><i>→</i><article><small>06</small><strong>Media &amp; Scale</strong><span>Move spend behind validated winners and keep learning as conditions change.</span></article></div>
<div class="inclusions"><div class="inclusions-lead"><h3>What the engagement can include</h3><p>The exact scope depends on the channels, creative needs, and how much ownership the business needs from us. We make one recommendation on the call rather than forcing every company into the same package.</p></div><div class="inclusion-grid"><article><strong>Paid acquisition ownership</strong><span>Meta campaign management, testing, scaling, and ongoing optimization. Google Ads where it supports the wider acquisition plan.</span></article><article><strong>Creative strategy and production</strong><span>Customer research, angles, concepts, scripts, static and video direction, production, and feedback.</span></article><article><strong>Testing and learning system</strong><span>A clear roadmap for what is being tested, why it matters, what won, and what happens next.</span></article><article><strong>Measurement and reporting</strong><span>Tracking diagnosis, weekly performance reporting, and the metrics that determine profitable decisions.</span></article><article><strong>Senior strategic support</strong><span>Direct senior involvement, Slack communication, and regular strategy calls so decisions do not disappear between teams.</span></article></div></div>
</div></section>

<section class="section why-system"><div class="shell"><div class="why-layout"><div><h2>Why the process works when isolated tactics do not.</h2></div><div class="why-list"><article><b>01</b><div><strong>It starts with the economics.</strong><p>More spend is not the goal if the offer cannot support the acquisition cost. We establish what profitable growth has to look like first.</p></div></article><article><b>02</b><div><strong>Creative and media work as one feedback loop.</strong><p>Campaign data shapes the next creative question. New creative gives media buying better signal. Neither team works blind.</p></div></article><article><b>03</b><div><strong>Scale follows evidence.</strong><p>We do not push budget because the calendar says it is time. Spend moves when the market gives us a reason.</p></div></article></div></div></div></section>

<section class="section work-vault" id="work"><div class="shell"><div class="vault-head"><div><h2>This is what the system produces.</h2><p>Public creative from Macedo’s portfolio, not stock mockups.</p></div><a href="https://macedomarketing.com/portfolio/" target="_blank" rel="noopener">Open the full portfolio ↗</a></div></div>
<div class="vault-rail" aria-label="Selected public Macedo Marketing creative work">
  <figure><img src="/booking-thank-you-assets/02-mm-cafely-tofu-toggle-button-v1.webp" alt="Cafely static ad creative"></figure>
  <figure><img src="/booking-thank-you-assets/03-pp-c4-gift-25-1203-v3.webp" alt="Poppy's Patina static ad creative"></figure>
  <figure><img src="/booking-thank-you-assets/04-mm-mimy-c1-v3.webp" alt="Mi and My static ad creative"></figure>
  <figure><img src="/booking-thank-you-assets/05-mm-rifruf-creative-1-headline-v1b.webp" alt="RIFRUF static ad creative"></figure>
  <figure><img src="/booking-thank-you-assets/06-mm-respira-tof-bundle-e1-01-eng.webp" alt="Respira static ad creative"></figure>
  <figure><img src="/booking-thank-you-assets/07-mm-es-tof-win-c1-01.jpg" alt="Ecommerce static ad creative"></figure>
  <figure><img src="/booking-thank-you-assets/08-mm-v2cloud-tof-caveman-v3.webp" alt="V2Cloud static ad creative"></figure>
  <figure><img src="/booking-thank-you-assets/09-htk-programs-01.webp" alt="Hard To Kill static ad creative"></figure>
</div></section>


<section class="section social-proof" id="proof"><div class="shell"><div class="proof-heading"><h2>Then look at the evidence, <span class="gradient">not the pitch.</span></h2><p>These are public client interviews and case-study assets. Click any one to watch.</p></div>
<div class="testimonial-grid">
<article class="testimonial-card"><button class="testimonial-media js-proof-video" data-provider="vimeo" data-video="1054419360" aria-label="Play Sofia Alonso client interview"><img src="/booking-thank-you-assets/10-1979780722-8fe6d264214c2a5a6db9326aa73148bb74e2b6f.jpg" alt="Sofia Alonso testimonial"><span class="client-play"></span></button><div class="testimonial-copy"><strong>CAC fell from $200 to $60.70</strong><p>Tracking, compliant creative, and the purchase journey were rebuilt together.</p><span>Sofia Alonso · Elara</span></div></article>
<article class="testimonial-card"><button class="testimonial-media js-proof-video" data-provider="vimeo" data-video="1145606092" aria-label="Play Vijay Singh client interview"><img src="/booking-thank-you-assets/11-2094644543-2532bd6bec5c6576cb2e408d93959e92dfea412.jpg" alt="Vijay Singh testimonial"><span class="client-play"></span></button><div class="testimonial-copy"><strong>Booked calls grew from 66 to 363</strong><p>Attribution was rebuilt and winning formats moved into a webinar funnel.</p><span>Vijay Singh · Talking Houses</span></div></article>
<article class="testimonial-card"><button class="testimonial-media js-proof-video" data-provider="vimeo" data-video="980526506" aria-label="Play Rory Tonkin client interview"><img src="/booking-thank-you-assets/12-1895661480-6700790ec5a941093fbdde7251b24d470264b6b.jpg" alt="Rory Tonkin testimonial"><span class="client-play"></span></button><div class="testimonial-copy"><strong>CPA fell 54%</strong><p>Creative testing was separated from scaling and retargeting was rebuilt.</p><span>Rory Tonkin · Hard To Kill Fitness</span></div></article>
</div>
<div class="evidence-grid"><div><strong>$28M+</strong><span>Revenue generated</span></div><div><strong>100+</strong><span>Clients supported</span></div><div><strong>15.91x</strong><span>Featured client ROAS</span></div><div><strong>$282K+</strong><span>Monthly revenue by month three</span></div><div><strong>£100K+</strong><span>Monthly revenue within six months</span></div><div><strong>$106K</strong><span>Generated in 90 days</span></div></div>
<div class="case-film"><button class="case-film-media js-proof-video" data-provider="youtube" data-video="kQFPTff-gMY" aria-label="Play anonymous DTC case study"><img src="/booking-thank-you-assets/13-maxresdefault.jpg" alt="Anonymous DTC case study"><span class="client-play"></span></button><div class="case-film-copy"><span>ANONYMOUS DTC CASE BREAKDOWN</span><h3>$176K to $616K per month in 76 days</h3><p>Review mining exposed the angles to expand. UGC and static volume increased, then Advantage+ scaled the winners while ROAS reached 2.17.</p><button class="text-play js-proof-video" data-provider="youtube" data-video="kQFPTff-gMY">Watch the breakdown →</button></div></div>
</div></section>

<section class="section relationship" id="fit"><div class="shell"><div class="fit-research"><div><h2>We do not take every company <span class="coral-text">that books a call.</span></h2><p>The strongest engagements start with a validated offer, useful performance data, a decisive team, and enough patience to test before scaling.</p></div><div class="fit-stack"><article class="fit-card"><h3>We should keep the call if…</h3><ul><li>Your offer already converts and has real demand.</li><li>Paid acquisition is active or strategically important.</li><li>You can share the economics and account context.</li><li>The people needed to approve a decision can join the conversation.</li></ul></article><article class="fit-card not"><h3>This is unlikely to work if…</h3><ul><li>You are still validating the product.</li><li>You want the cheapest provider or a one-month trial.</li><li>You expect guaranteed or instant results.</li><li>Every meaningful decision gets delayed by committee.</li></ul></article></div></div>
<div class="qualification-bar"><strong>Come prepared to make the call useful.</strong><span>Bring monthly revenue, ad spend, CAC or CPA, the main growth constraint, and every decision-maker who needs to understand the recommendation.</span></div>
<div class="tiago-note founder-note"><img src="/booking-thank-you-assets/14-02a7f5b6ca11d73d391545b830cb3b7b.jpg" alt="Tiago Macedo"><div><h3>Senior judgment stays involved.</h3><p>I stay close to the decisions that affect economics, creative direction, and media strategy. If the fit is strong, I will explain what I believe we should own, what your team should keep, and why.</p><strong>Tiago Macedo</strong></div></div>
</div></section>

<section class="section faq-section" id="faq"><div class="shell"><div class="faq-layout"><div><h2>Anything else before we speak?</h2><p>The standard questions are answered here so the call can stay focused on your business.</p></div><div class="faq-grid"><details class="faq"><summary>What will we actually do in 30 minutes?</summary><p>We will work through the business context, your economics, the current creative and account signal, and the decision that appears most important. If we do not see a strong fit, we will say so.</p></details><details class="faq"><summary>Can you work with our internal team?</summary><p>Yes. The useful question is where ownership should sit so decisions do not disappear between internal and external teams.</p></details><details class="faq"><summary>How is the scope and investment determined?</summary><p>It depends on the channels, creative production needs, account complexity, and how much ownership you need from us. If the fit is strong, we will make one clear recommendation on the call rather than force you into a generic package.</p></details><details class="faq"><summary>What if we have been burned by an agency before?</summary><p>Bring the history. We will separate what was actually broken from what was simply reported badly, then decide whether another external partner makes sense.</p></details><details class="faq"><summary>Are results guaranteed?</summary><p>No. The results shown are verified historical outcomes. They are evidence of past work, not promises about future performance.</p></details></div></div></div></section>

<section class="final"><div class="shell"><div class="final-card"><h2>See you on the call.</h2><p>Your confirmation and meeting link are in the Calendly email. Have monthly revenue, ad spend, and your main acquisition cost nearby if possible.</p><div class="final-actions"><button class="btn js-scroll" data-target="#top">Review the research video</button><a class="btn secondary" href="mailto:tiago@macedomarketing.com">Send context beforehand</a></div><p class="contactline">If plans change, reschedule from the calendar invite.</p></div></div></section>
</main>
<footer class="footer"><img src="/booking-thank-you-assets/01-mm-newsletter-logo-svg-3.svg" alt="Macedo Marketing"><p>© 2026 Macedo Marketing. All rights reserved.</p><div class="footer-links"><a href="https://macedomarketing.com/privacy-policy/">Privacy Policy</a><span>|</span><a href="https://macedomarketing.com/terms-conditions/">Terms &amp; Conditions</a><span>|</span><a href="https://macedomarketing.com/">macedomarketing.com</a></div><small>Client results shown are verified historical outcomes, not guarantees of future performance.</small></footer>
<div class="modal" id="contentModal" aria-hidden="true"><div class="modal-card" id="modalCard"><button class="modal-close" id="modalClose" aria-label="Close">×</button><div id="modalBody"></div></div></div>
`;

const topics = {
  research: { title: "What to know before the call", time: "6–8 minute pre-call video", intro: "This prepares the prospect, establishes the standard for working together, and lets the call focus on their business rather than repeat basic offer information.", points: ["Open with who Macedo works best with and why the agency stays selective.", "Explain the Macedo system and why economics, creative, media, and measurement cannot be managed as separate problems.", "Show the areas an engagement can include and why the exact scope depends on the business.", "Walk through the public work, client interviews, and case studies. Explain what strong results require without making guarantees.", "Close with the mutual-fit standard, what to bring to the call, and what happens if both sides want to move forward."] },
  fit: { title: "Who do you work best with?", time: "3-minute breakout video", intro: "Qualify the prospect directly and reinforce that Macedo does not take every business that books.", points: ["00:00 : The 60-second fit summary.", "01:00 : Business readiness, economics, and existing demand.", "02:00 : Decision speed, access to data, and willingness to test.", "End with the situations Macedo normally declines."] },
  included: { title: "What exactly is included?", time: "4-minute breakout video", intro: "Explain the operating model without pretending every company receives an identical scope.", points: ["00:00 : The 60-second engagement summary.", "01:00 : Paid acquisition and media ownership.", "02:00 : Creative strategy, production, and testing.", "03:00 : Reporting, communication, and senior involvement.", "Confirm the current standard scope before recording."] },
  first90: { title: "What happens in the first 90 days?", time: "4-minute breakout video", intro: "Explain the progression without promising a rigid timeline or guaranteed result.", points: ["00:00 : The 60-second first-90-day summary.", "01:00 : Diagnosis, access, measurement, and economics.", "02:00 : First creative and media tests.", "03:00 : Validation, iteration, and when scaling becomes responsible."] },
  scope: { title: "How do you determine the right scope?", time: "3-minute breakout video", intro: "Explain the commercial logic without publishing a generic price list.", points: ["00:00 : The factors that determine scope.", "01:00 : Channels, creative production, account complexity, and ownership.", "02:00 : Why Macedo makes one recommendation instead of offering a menu.", "Leave the exact investment and terms for the mutual-fit conversation."] }
};

function formatEventTime(value) {
  const d = new Date(value);
  if (Number.isNaN(d.valueOf())) return "";
  return new Intl.DateTimeFormat(undefined, { weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(d);
}

export default function BookedCallThankYou() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const params = new URLSearchParams(window.location.search);
    const bookingData = {
      name: params.get("name") || "",
      start: params.get("event_start_time") || params.get("start_time") || "",
      meeting: params.get("meeting") || params.get("location") || "",
      reschedule: params.get("reschedule_url") || ""
    };
    if (window.location.search) window.history.replaceState(null, "", window.location.pathname + window.location.hash);
    const modal = root.querySelector("#contentModal");
    const body = root.querySelector("#modalBody");
    const modalCard = root.querySelector("#modalCard");
    const open = (html, wide = false) => {
      if (!modal || !body || !modalCard) return;
      body.innerHTML = html;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      modalCard.classList.toggle("proof-player", wide);
    };
    const close = () => {
      if (!modal || !body || !modalCard) return;
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      body.innerHTML = "";
      modalCard.classList.remove("proof-player");
    };
    const listeners = [];
    const on = (el, event, fn) => { el.addEventListener(event, fn); listeners.push([el, event, fn]); };
    root.querySelectorAll(".js-outline").forEach((button) => on(button, "click", () => {
      const topic = topics[button.dataset.topic];
      if (!topic) return;
      open(`<div class="outline-head"><span>RECORDING BLUEPRINT · ${topic.time}</span><h2>${topic.title}</h2><p>${topic.intro}</p></div><ol class="outline-list">${topic.points.map((x) => `<li>${x}</li>`).join("")}</ol>`);
    }));
    root.querySelectorAll(".js-proof-video").forEach((button) => on(button, "click", () => {
      const id = button.dataset.video;
      const src = button.dataset.provider === "vimeo" ? `https://player.vimeo.com/video/${id}?autoplay=1` : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      open(`<iframe src="${src}" title="Client proof video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`, true);
    }));
    const closeButton = root.querySelector("#modalClose");
    if (closeButton) on(closeButton, "click", close);
    if (modal) on(modal, "click", (event) => { if (event.target === modal) close(); });
    const keyHandler = (event) => { if (event.key === "Escape") close(); };
    document.addEventListener("keydown", keyHandler);
    root.querySelectorAll(".js-scroll").forEach((button) => on(button, "click", () => root.querySelector(button.dataset.target)?.scrollIntoView({ behavior: "smooth" })));
    const helloLine = root.querySelector("#helloLine");
    const eventTime = root.querySelector("#eventTime");
    const eventPlace = root.querySelector("#eventPlace");
    const rescheduleLink = root.querySelector("#rescheduleLink");
    if (bookingData.name && helloLine) helloLine.textContent = `Booked for ${bookingData.name}.`;
    const formatted = bookingData.start ? formatEventTime(bookingData.start) : "";
    if (formatted && eventTime) eventTime.textContent = formatted;
    if (bookingData.meeting && eventPlace) eventPlace.textContent = bookingData.meeting;
    if (bookingData.reschedule && /^https:\/\//.test(bookingData.reschedule) && rescheduleLink) {
      rescheduleLink.href = bookingData.reschedule;
      rescheduleLink.textContent = "Reschedule";
      rescheduleLink.classList.remove("is-fallback");
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "confirmation_page_view", page_type: "booked_call_thank_you" });
    return () => {
      listeners.forEach(([el, event, fn]) => el.removeEventListener(event, fn));
      document.removeEventListener("keydown", keyHandler);
      document.body.style.overflow = "";
    };
  }, []);
  return <div ref={rootRef} className="booked-call-thank-you" dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
