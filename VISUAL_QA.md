# Visual QA — AXA XL / XL Group / Catlin Group case study

**Automated status (verified by running the commands, not assumed):**

| Check                        | Result                    |
| ---------------------------- | ------------------------- |
| `npm run typecheck`          | PASS                      |
| `npm run lint`               | PASS                      |
| `npm run check:content`      | PASS                      |
| `npm run build` (production) | PASS — 45 pages generated |

**Visual status: NOT VERIFIED.** This environment has no browser (a headless-browser install was attempted and failed — the download and its system dependencies are blocked by this sandbox's network allowlist). Every row below is blank until someone opens the page in a real browser and checks it. Nothing here should be read as "passed."

## How to run locally

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:3000`) in Chrome or Edge, then navigate to:

```
/case-studies/axa-xl
```

### Optional: Playwright for automated screenshots

Playwright is **not installed** in this project. If you'd like scripted screenshots across the viewports below instead of (or alongside) manual inspection, install it yourself first:

```bash
npm install -D playwright
npx playwright install chromium
```

Then, as one example script:

```bash
npx playwright screenshot --viewport-size=390,844 http://localhost:3000/case-studies/axa-xl axa-xl-390x844.png
```

Repeat per viewport below. This is optional — do not install it unless you intend to use it.

## Checklist

Fill in **PASS / FAIL / NEEDS REVIEW** per cell after actually looking at the page. Leave a cell blank rather than guessing.

Viewports (width × height): **320×800 · 375×812 · 390×844 · 430×932 · 768×1024 · 1024×768 · 1440×900 · 1920×1080**

| #   | Item                                                                          | 320×800 | 375×812 | 390×844 | 430×932 | 768×1024 | 1024×768 | 1440×900 | 1920×1080 |
| --- | ----------------------------------------------------------------------------- | ------- | ------- | ------- | ------- | -------- | -------- | -------- | --------- |
| 1   | Hero composition (headline hierarchy, no text/image overlap)                  |         |         |         |         |          |          |          |           |
| 2   | AXA / XL logo proportions (sharp, not stretched, correct sizing)              |         |         |         |         |          |          |          |           |
| 3   | Brand-history panel (visible, subtle, not misread as AXA XL owning 2010–2014) |         |         |         |         |          |          |          |           |
| 4   | Project cards (all 3 — value/team/dates render correctly, no overlap)         |         |         |         |         |          |          |          |           |
| 5   | Data-flow diagrams (arrows, spacing, alignment, mobile stacking)              |         |         |         |         |          |          |          |           |
| 6   | Technology stack (pills wrap correctly, no overflow)                          |         |         |         |         |          |          |          |           |
| 7   | Business-domain cards (all 8, grid reflows cleanly)                           |         |         |         |         |          |          |          |           |
| 8   | Regulatory section (terms legible, groundwork wording intact)                 |         |         |         |         |          |          |          |           |
| 9   | Delivery lifecycle timeline (stages readable, no clipping)                    |         |         |         |         |          |          |          |           |
| 10  | Responsive behaviour (no horizontal scroll, no broken grids)                  |         |         |         |         |          |          |          |           |
| 11  | Image cropping (skyline hero image, correct object-position, sharp)           |         |         |         |         |          |          |          |           |
| 12  | Typography (no oversized/clipped headings, comfortable line length)           |         |         |         |         |          |          |          |           |
| 13  | Animation (smooth, no layout shift, respects reduced-motion)                  |         |         |         |         |          |          |          |           |
| 14  | Accessibility (visible focus states, contrast, tab order)                     |         |         |         |         |          |          |          |           |
| 15  | Console errors (DevTools console clean on load + scroll)                      |         |         |         |         |          |          |          |           |

## Rules for filling this in

- Mark a cell only after actually viewing that item at that viewport. An empty cell is honest; a guessed PASS is not.
- **FAIL** → note the specific problem next to the cell (or in a follow-up message using the `Page / Viewport / Element / Issue` format already used elsewhere in this project) so it can be fixed precisely.
- **NEEDS REVIEW** → for anything ambiguous (e.g. a design judgement call, not a clear break).
- Do not use this checklist as a substitute for opening the page — it's the record of having done so.
