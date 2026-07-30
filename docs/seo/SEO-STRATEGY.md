# SEO Strategy — Forty Pixels

**Created:** 2026-07-29
**Site:** https://fortypixels.com (Next.js 16 App Router, Netlify)
**Business type:** Design & development agency (3-person studio, Colombo, Sri Lanka)
**Template applied:** `agency.md`

## Inputs that shaped this plan

| Decision | Answer |
|---|---|
| Primary market | Sri Lanka / Colombo core, plus global long-tail |
| Content capacity | ~1–2 posts per month |
| 6-month definition of success | Move upmarket (larger budgets than current tiers) |

## The central tension — read this first

The stated goal is to move upmarket. The site's public pricing starts at **$199 / LKR 30,000** and tops out at **$1,099 / LKR 170,000** for a productised tier.

Competitor research puts that squarely in Sri Lanka's commodity band: [webslk](https://www.webslk.com/web-design-pricing/) advertises one-pagers from LKR 18,500, [web-dev.lk](https://www.web-dev.lk/web-design-price-list-sri-lanka/) publishes Basic/Professional/Premium at LKR 80,000 / 130,000 / 150,000, and [Lexiata](https://lexiata.lk/website-price-in-sri-lanka/) frames the market as LKR 25,000 to 1,000,000+. Forty Pixels' entire published ladder sits below the *middle* of that range.

**Correction to the first version of this doc:** `/pricing` already sets `robots:{index:false,follow:false}`, so it cannot rank and is excluded from the sitemap. Someone already saw this risk. That removes the *search* half of the problem entirely — no pricing schema question, no risk of ranking for "cheap web design Sri Lanka."

What remains is a conversion problem, not an SEO one: the page is still linked in the nav, so every organic visitor SEO brings can reach it, and it still anchors them at $199 before they see a case study. Ranking better therefore delivers more traffic to an unchanged downmarket anchor. Pillar 3 is about the anchor, not the indexing.

Public pricing is also a genuine differentiator (most LK competitors gate it behind a form). The recommendation is to reframe it, not delete it — and if it were ever un-noindexed, the schema warning in `SITE-STRUCTURE.md` applies.

## Current state (verified 2026-07-29)

**Live checks:**
- `https://fortypixels.com/` → 200
- `https://fortypixels.com/robots.txt` → **404**
- `https://fortypixels.com/sitemap.xml` → **404**
- Live `<title>` is `Digital experiences built to move business forward` — **no brand token at all**. Not a deploy problem (verified: the repo builds the identical title); Next.js simply doesn't apply a layout's `title.template` to a page in the same route segment, so the root page skips `%s | Forty Pixels` while every other route gets it. Worth fixing explicitly given the brand-collision problem below.
- Google's indexed title for the homepage reads "Forty Pixels | Premium web design & development agency" — an older variant. Index lag or a Google rewrite; re-check after the sitemap is submitted.
- **`/pricing` is already `noindex,nofollow`** (set in `app/pricing/page.tsx`). It is not in the sitemap and cannot rank — see the tension section for what this does and doesn't solve.

**Already solved:** real domain + `metadataBase`, OG/Twitter metadata with a real 1792×912 `og.png`, five real case studies, all nav routes built, self-hosted fonts, no render-blocking CDN CSS except the Calendly widget stylesheet.

**Missing:** `robots.ts`, `sitemap.ts`, all JSON-LD, per-page canonicals, any team/author identity, any indexable content beyond the 5 routes + 5 case studies (~10 URLs total).

## Brand-entity problem (new finding, high priority)

A brand search for "Forty Pixels" returns a crowded, ambiguous SERP: **Forty Eight Pixels** (North Wales), **44 Pixels**, **Fifty Pixels**, **FORTYPIXEL** (Kiel, Germany), and a generic "Pixels Agency". Google's own summary of the brand conflated Forty Pixels with an unrelated freelancer marketplace.

For an agency whose sales motion is word-of-mouth referral ("Forty Pixels wasn't the plan. It started with word of mouth" — the studio's own Instagram post), a muddled brand SERP is an active revenue leak: referred prospects who search the name land on competitors or can't confirm the studio is real.

This makes `Organization` schema with a complete `sameAs` array the highest-ROI single change on the site — higher than any keyword work. Known profiles to claim and link: Facebook (`/FortyPixels`), Instagram, LinkedIn.

## Strategic pillars

### Pillar 1 — Be indexable and be a legible entity (weeks 1–4)

The whole technical foundation is missing and all of it is cheap. `robots.ts`, `sitemap.ts`, per-page canonicals, `Organization` + `sameAs`, `Service`, `CreativeWork` per case study, `Offer` on pricing, `BreadcrumbList` on case studies. No `FAQPage` — Google retired FAQ rich results for all sites in May 2026; the existing `FaqAccordion` stays a UI pattern only.

This pillar alone should take indexed pages from an unverified ~10 to a clean, complete ~10 that Google can actually enumerate, and fix the brand SERP.

### Pillar 2 — Rank locally for commercial intent (weeks 5–12)

"Web design Colombo / Sri Lanka" style terms are winnable and convert. Two structural blockers:

1. **Directories own the SERP.** Clutch, Sortlist, DesignRush, TechBehemoths, and GoodFirms occupy most of page one for every LK agency term. You cannot outrank all of them — so *join* them. Directory profiles are also disproportionately what AI search engines cite when asked to recommend an agency. Claiming and completing these profiles is content work that ranks without living on your site.
2. **No service-level pages.** `/services` is a single page covering three offers. Landing Pages, Stores, and Systems each deserve their own indexable URL with its own `Service` schema, its own case studies, and its own commercial keyword target.

Local signals needed: Google Business Profile (none evident), consistent NAP, `ProfessionalService` schema with `areaServed`. The footer says "Colombo, Sri Lanka" but the contact page publishes no address or phone — that has to change for local SEO to function at all.

### Pillar 3 — Reposition the commercial signal (weeks 5–12, runs alongside Pillar 2)

Concrete changes that serve both the upmarket goal and SEO:

- Lead the pricing page with **Systems / Custom Platform**, not Launch Page. Current order anchors every visitor at $199.
- Convert entry tiers to "from" pricing and add a genuine upper tier or an explicit "typical engagement" band. Ranking for "affordable web design Sri Lanka" is a trap; ranking for "custom web platform development Sri Lanka" is the goal.
- Add outcome metrics to every case study. `/portfolio/[slug]` already has a `metrics` field in `projectData` — populate it with real, specific, citable numbers. This is the single strongest E-E-A-T and AI-citation asset an agency can build.
- Add a real team page with named people, photos, and `Person` schema. "Direct collaboration with the people doing the work" is the studio's stated value proposition and there is currently not one human name on the site. Anonymous agencies do not win five-figure engagements.

### Pillar 4 — Global long-tail via technical authority (weeks 13+)

At 1–2 posts/month, generic "web design tips" content is unwinnable and worthless. The only defensible global angle is technical specificity where the studio has real experience: Next.js App Router, GSAP/Lenis motion work, Shopify-vs-custom decisions, performance. Low volume, low competition, and exactly the kind of passage AI engines cite.

Target the buyer's decision moment, not the top of funnel. "How much should a custom website cost" outranks "10 web design trends" for revenue every time.

## KPI targets

Baselines are **unknown** — Search Console is not verified for this domain and no analytics data was available. Establishing real baselines is a week-1 task; these targets are directional until then.

| Metric | Baseline (2026-07-29) | 3 Month | 6 Month | 12 Month |
|---|---|---|---|---|
| Indexed pages | ~10, unverified (no sitemap) | 18–22 | 26–32 | 40–50 |
| Organic sessions/mo | Unknown — establish in week 1 | +40% over baseline | 2–3× baseline | 4–6× baseline |
| Ranking keywords (top 20) | Likely brand-only | 15–25 | 40–60 | 100–150 |
| Colombo/LK commercial terms in top 10 | 0 | 1–2 | 3–5 | 6–10 |
| Organic → contact form / Calendly | Unknown — not tracked | Tracked + 3–5/mo | 6–10/mo | 12–20/mo |
| Avg. inbound project value | Current tier mix | — | +50% | 2× |
| Directory profiles live & complete | 0 | 5 | 8 | 10 |
| Core Web Vitals (CrUX, mobile) | No field data (low traffic) | Pass LCP/CLS/INP | Hold | Hold |
| Brand SERP owned (top 3 + knowledge panel) | No | Top 3 | Panel eligible | Panel |

**Caveat on CWV:** the site autoplays multiple background videos and loads GSAP + Lenis on every route. It may well pass lab tests and still struggle on LCP over Sri Lankan mobile connections. Measure with real field data before assuming it's fine.

## Risks

| Risk | Mitigation |
|---|---|
| Upmarket goal vs. published entry pricing | Pillar 3 — reframe pricing before amplifying traffic to it |
| Deploy pipeline is stale (live ≠ repo) | Verify Netlify build before any audit; add deploy check to release routine |
| 1–2 posts/mo can't sustain a content war | Compete on technical specificity + case studies, not volume |
| Brand-name collision with 5+ similar agencies | `Organization` + `sameAs`, directory consistency, own the brand SERP first |
| No named humans on site caps E-E-A-T | Team page with `Person` schema in Phase 2 |
| Video-heavy hero vs. Core Web Vitals | Field-data measurement in Phase 1, poster frames + `preload` tuning if needed |
| Thin-content risk from new service/location pages | Quality gate: no new page ships under 800 words with a real case study attached |

## Companion documents

- `COMPETITOR-ANALYSIS.md` — who actually ranks, and where the gaps are
- `SITE-STRUCTURE.md` — target URL hierarchy, schema per page type, internal linking
- `CONTENT-CALENDAR.md` — 12 months at 1–2 posts/month
- `IMPLEMENTATION-ROADMAP.md` — 4 phases with concrete file-level tasks
- `SEO-CONTEXT.md` — prior audit notes (superseded by this plan where they conflict)
