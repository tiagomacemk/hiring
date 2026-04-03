# Macedo Marketing Brand Design System

## Colors
- Primary accent: #F26745 (orange/coral)
- Dark background: #363636
- Deeper dark: #2F2F2F
- Darkest: #0D0D0D
- Light background: #F8F8F8
- Text primary (on dark): #FFFFFF
- Text secondary (on dark): #929292
- Text primary (on light): #1a1a1a
- Text secondary (on light): #3C3A3A / #777
- Warning yellow: #FFD230
- Success green: use sparingly

## Typography
- Font family: Nunito Sans (Google Fonts)
- Weights: 200 (light decorative), 400 (body), 600 (semi-bold), 700 (bold headings), 800 (hero headlines)
- Hero H1: 48-52px, weight 800, letter-spacing -0.5px to -1px
- Section H2: 28-32px, weight 700
- Card H3/H4: 16px, weight 700
- Body: 16px, weight 400, line-height 1.6
- Small/labels: 13-14px, weight 700, uppercase, letter-spacing 2-3px

## Components

### Buttons (Primary CTA)
- Background: #F26745
- Text: white, uppercase, 700 weight, letter-spacing 1-1.5px
- Padding: 16-18px vertical, 40-56px horizontal
- Border-radius: 8-10px
- Box-shadow: 0 4px 25px rgba(242, 103, 69, 0.3)
- Hover: translateY(-2px), deeper shadow, slightly darker background (#e05535)
- Optional: pulse glow animation on primary CTA

### Cards
- Background: rgba(255,255,255,0.03) on dark, #fff on light
- Border: 1px solid rgba(255,255,255,0.06) on dark, 1px solid #eee on light
- Border-radius: 12-14px
- Padding: 24-28px
- Hover: translateY(-4px), border-color shifts to orange, subtle shadow

### Badge/Pill
- Background: rgba(242, 103, 69, 0.12)
- Border: 1px solid rgba(242, 103, 69, 0.25)
- Text: #F26745, 13px, 700 weight, uppercase, letter-spacing 2px
- Border-radius: 50px
- Padding: 8px 20px

### Section Dividers
- 1px height
- Background: linear-gradient(90deg, transparent, rgba(242,103,69,0.2), transparent)
- Max-width: 600px, centered

### Video Embeds
- Border-radius: 14-16px
- Box-shadow: 0 10-12px 40-50px rgba(0,0,0,0.3)
- Border: 1px solid rgba(255,255,255,0.06)
- 16:9 aspect ratio (padding-bottom: 56.25%)

## Background Effects
- Floating orbs: radial gradient circles, blurred (120px), low opacity (0.1-0.15), slow float animation (18-25s)
- Colors: #F26745 primary, #FFD230 accent
- Max 2-3 orbs per page

## Logo
- Use logo-mm-icon-white.png on dark backgrounds (stacked MM with text, 640x640 source)
- Display height: 70px header, 40px footer
- Never use low-res logos at large display sizes

## Anti-Patterns (Never Do)
- Purple/blue AI gradients
- Inter font or system defaults
- Cards inside cards
- Generic stock photos
- Emoji icons in professional sections (except values/culture)
- Overcrowded layouts without whitespace
- Default CSS shadows (use subtle, colored shadows)
