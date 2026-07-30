# SEO Context — Forty Pixels

> **Superseded 2026-07-29** by `SEO-STRATEGY.md` and its companion docs
> (`COMPETITOR-ANALYSIS.md`, `SITE-STRUCTURE.md`, `CONTENT-CALENDAR.md`,
> `IMPLEMENTATION-ROADMAP.md`), which are based on live-site checks and
> real SERP research rather than the grep-based findings below. The
> technical gaps listed here were re-confirmed against the live site and
> remain accurate; the strategic sections are superseded. Kept for history.

Carried over from an earlier planning session done against a different,
earlier-stage copy of this site (`Projects/forty-pixels`, framer-motion,
no real domain, no real case studies yet). This repo is the further-along,
actually-deployed build (`forty-pixels-agency`, fortypixels.com, Netlify,
GSAP/Lenis) — re-verified against its real state below rather than
copied as-is, since a lot of what the earlier plan flagged as missing
already exists here.

## What's already solved here (was missing in the earlier build)

- **Real domain + `metadataBase`** — `https://fortypixels.com` set in
  `app/layout.tsx`
- **OG/Twitter metadata** — real `og.png` (1792×912), title template
  (`%s | Forty Pixels`), description set
- **Real case studies** — `/portfolio` lists 5 real projects (oyo-eats,
  taanz, nuzii, noora, forte), not placeholders
- **`/about`, `/contact`, `/portfolio`, `/portfolio/[slug]`** all built —
  the earlier repo's biggest gap (404s in nav) doesn't apply here
- **Real brand assets** in `public/` — logos, case-study media, videos

## Still open (confirmed missing in this repo too)

1. **No `robots.ts` or `sitemap.ts`** — no `app/robots.ts` /
   `app/sitemap.ts` file convention present. Sitemap should include the
   5 static routes plus each `portfolio/[slug]`.
2. **No JSON-LD schema anywhere** — grepped for
   `application/ld+json`/`schema.org` across `app/`, zero matches.
   Recommended, same as before:
   - `Organization` on `/` (or `ProfessionalService` if a physical
     address/service area should be declared)
   - `CreativeWork`/`Article` per case study in `/portfolio/[slug]`
   - `Offer`/`PriceSpecification` on `/pricing` tiers — still the
     highest-leverage schema given pricing is public where most
     competitors gate it behind a form
3. **No canonical URLs set per page** (`alternates.canonical`) — only
   `metadataBase` is set; per-page canonicals aren't declared explicitly.
4. **No FAQ schema present** — correct, leave it that way. Google retired
   FAQ rich results for all sites (May 2026); don't add `FAQPage` even
   though `FaqAccordion.tsx` exists as a component — that's a UI pattern,
   not a schema signal, and should stay that way.

## What changed the strategic picture

Because this site is live at a real domain, the earlier plan's guesswork
sections are now supersedable by real data:

- `/seo audit https://fortypixels.com` can now run for real (technical,
  content, schema, sitemap, performance, GEO) instead of the pre-launch
  guesses in the old plan
- `/seo google` can pull real CrUX/GSC/GA4 numbers once Search Console is
  verified for this domain — replace the placeholder KPI table from the
  old plan with real baselines the first time this runs
- Real competitors can now be identified by what actually ranks for
  "web design Sri Lanka" / "app development Sri Lanka" etc., rather than
  the empty competitor template from the old plan

## Deferred, same reasoning as before

- Blog/`/insights` — no publishing-cadence signal for a 3-person studio;
  not present in this repo either, and that's fine
- `/industries` vertical pages — no evidence of vertical-specific demand
- Backlink outreach — now has real content worth linking to
  (case studies exist), so this is closer to viable than it was in the
  earlier plan, but still secondary to fixing sitemap/schema/robots first

## Recommended next action

Run a real `/seo audit https://fortypixels.com` (or `/seo technical` +
`/seo schema` individually) against the live site to replace this
context doc's manual grep-based findings with actual crawl data, then
prioritize: sitemap + robots + schema first (all missing, all cheap),
before touching content strategy.
