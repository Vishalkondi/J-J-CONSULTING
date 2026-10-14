# J & J Consulting — website

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion

## Quick start

```bash
cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL etc.
npm install
npm run dev
# then open http://localhost:3000 in your browser
npm run verify                 # typecheck + lint + content checks + production build
```

| Script                                  | Purpose                                                                                                                                |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run typecheck` / `lint` / `format` | TypeScript, ESLint (next/core-web-vitals), Prettier                                                                                    |
| `npm run check:content`                 | Blocks outcome wording on evaluation-only case studies, unverified claims, and lists missing asset slots (`-- --strict` fails on them) |
| `npm run verify`                        | Everything CI runs (`.github/workflows/ci.yml`)                                                                                        |
| `npm run gen:map`                       | Regenerates the dotted world map (`data/world-dots.ts`)                                                                                |

## Visual QA

Automated checks (typecheck, lint, content rules, production build) run in this environment and pass — see `VISUAL_QA.md`
for the current status. Actual browser rendering has **not** been verified here (no browser is available in this sandbox).
`VISUAL_QA.md` has a checklist and required viewport sizes for whoever does that pass.

## Structure

`app/` routes & metadata · `components/` (shared, plus a per-case-study folder where one needed bespoke
sections: `axaxl/`, `brit/`, `hastings/`, `home/`, `howden/`, `marketing/`, `metlife/`, `regulatory/`) ·
`data/` **all copy and facts** · `lib/` · `scripts/` · `assets-source/` (not served — original AI-generated
source graphics kept for reference; only cropped/text-free/fact-checked derivatives are published)

## Content rules (enforced by `check:content`)

Only supplied facts are used — no invented client counts, offices, awards, partnerships or results.
RenaissanceRe and Beazley are evaluation/programme engagements: wording stays _identified, documented, assessed, recommended, planned_.
Microsoft/AWS appear as "Technology Ecosystem", not partners, until confirmed. Open items live in `pending` at the bottom of `data/site.ts`.

## Assets (all have on-brand fallbacks until supplied)

Run `npm run check:content` any time — it lists exactly which of the below are still missing.

- **Hero video:** `public/videos/hero-video-01.mp4` (present, watermarked — pending a clean regenerate). For the crossfade, add a clean `hero-video-02.mp4` and set `NEXT_PUBLIC_HERO_VIDEO_2=1`. See `VISUAL_QA.md`'s notes on the validation any replacement clip needs before it goes in.
- **Brand:** `public/brand/` (`jj-mark.svg`, `jj-consulting.png`, `jj-consulting-light.png`); favicon is `app/icon.svg`. Replace the PNGs with true SVGs when available.
- **Client logos:** most are supplied (Ascot, AXA, Beazley, BRIT, Collinson, Hastings Direct, Howden's assets, MetLife, MS Amlin, RenaissanceRe, XL). Still outstanding: **Westfield Specialty** and **Liberty Specialty Markets** (logo only — Liberty's site link is already in). Set `logo` per organisation in `data/site.ts → insuranceExperience`; files go in `public/images/clients/`.
- **Still-pending images:** `public/images/renaissance-re-project.jpg`, `renaissance-re-editorial.jpg`, `westfield-specialty-logo.png`, `liberty-specialty-markets-logo.png`, `london-financial-district.jpg`.
- **City hub imagery:** `public/images/cities/<slug>.jpg` (optional `.mp4` too) — none supplied yet for any of the seven cities (London, Frankfurt, Paris, Zurich, Geneva, Dublin, Amsterdam); each falls back to a plain gradient with a dev-mode filename label.
- `assets-source/*-collage-source.*` are intentionally **not** published — each is an AI-generated reference image that contained imitation client branding, invented figures, or fabricated slogans. Only cropped, fact-checked, text-free derivatives (if any) were published from each; see the file's own note in `assets-source/README.txt` for specifics.

## Before launch

1. Set `NEXT_PUBLIC_SITE_URL` (canonical URLs, sitemap, Open Graph).
2. Set `CONTACT_WEBHOOK_URL`; the contact API validates, honeypots and rate-limits (in-memory — use a shared store or WAF on multi-instance hosting).
3. Add phone/email in `data/site.ts` only when confirmed; add real Privacy, Cookie and Terms text (`app/legal/[slug]`).
4. Replace `[TO BE CONFIRMED]` items listed in `pending`.

## Security & quality notes

- Security headers + a conservative CSP are set in `next.config.mjs` (YouTube is embedded click-to-play via `youtube-nocookie.com`). If you add analytics or third-party embeds, extend the CSP.
- `npm audit` reports a PostCSS advisory inside Next 15's bundled build tooling; it concerns processing untrusted CSS at build time and does not affect this site. Upgrade Next when a patched 15.x is released.
- Accessibility: skip link, semantic landmarks, keyboard-trapped mobile menu (Esc closes, focus returns), reduced-motion respected (hero video, marquee, reveals).
