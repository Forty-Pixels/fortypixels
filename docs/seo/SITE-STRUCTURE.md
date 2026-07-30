# Site Structure — Forty Pixels

**Created:** 2026-07-29
Target information architecture, schema per page type, and internal linking. Written against this repo's actual conventions (App Router, `TransitionLink`, `projectData` in `app/components/Sections.tsx`).

## Current structure (~10 URLs)

```
/                          app/page.tsx
/about                     app/about/page.tsx
/services                  app/services/page.tsx        ← 3 offers on one page
/pricing                   app/pricing/page.tsx + PricingClient.tsx
/contact                   app/contact/page.tsx + ContactForm.tsx
/portfolio                 app/portfolio/page.tsx
/portfolio/[slug]          × 5 (oyo-eats, taanz, nuzii, noora, forte)
```

No `robots.txt`, no `sitemap.xml` (both 404 live).

## Target structure — 12 months (~45 URLs)

```
/                                        Organization + WebSite + ProfessionalService
├── /services                            Service hub (existing page, becomes an index)
│   ├── /services/landing-pages          NEW  Service
│   ├── /services/websites               NEW  Service
│   ├── /services/stores                 NEW  Service         ← ecommerce keywords
│   └── /services/systems                NEW  Service         ← highest-value keywords
├── /portfolio                           CollectionPage
│   └── /portfolio/[slug]                CreativeWork + BreadcrumbList  (5 → 8-10)
├── /about                               AboutPage
│   └── /about/team                      NEW  ProfilePage + Person[]   ← E-E-A-T unlock
├── /process                             NEW  (promote existing /services section)
├── /pricing                             Offer[] / PriceSpecification
├── /insights                            NEW  Blog                     ← Phase 2
│   └── /insights/[slug]                 NEW  BlogPosting + Person author
├── /contact                             ContactPage
├── /web-design-colombo                  NEW  Phase 2, conditional — see gate below
├── /robots.txt                          app/robots.ts
└── /sitemap.xml                         app/sitemap.ts
```

### Why service pages split this way

`/services` currently covers Landing Pages, Stores, and Systems in one document. Each targets a different buyer with different search behaviour and different economics, and one URL can only rank for one primary intent.

Splitting also lets **/services/systems** carry the upmarket keyword set (`custom web platform development`, `web application development sri lanka`) without the $199 Launch Page tier sitting next to it on the same page.

A fourth page, `/services/websites`, is added because "website design" is the highest-volume LK commercial term and currently has no dedicated target — the existing page mixes it into "Systems."

### Quality gate on new pages

**No new page ships unless it has:** ≥800 words of non-boilerplate copy, at least one linked case study, a distinct primary keyword no other page targets, and its own schema block. Thin service or location pages actively harm a 10-page site — index bloat is a real risk at this scale, not a theoretical one.

**`/web-design-colombo` is conditional.** Build it only if Phase 1 GSC data shows real Colombo-qualified impressions. A single location page for a single-location studio is often better served by strengthening the homepage's local signals plus a Google Business Profile. Do not build a location-page cluster — there is one office.

## Schema plan

| URL | Schema types | Notes |
|---|---|---|
| `/` | `Organization`, `WebSite`, `ProfessionalService` | **Highest priority.** `sameAs` must list Facebook, Instagram, LinkedIn, and every directory profile — this is the brand-disambiguation fix |
| `/services` | `ItemList` of `Service` | Hub |
| `/services/[slug]` | `Service`, `ProfessionalService` | `provider` → Organization, `areaServed` → LK + remote |
| `/portfolio` | `CollectionPage` | |
| `/portfolio/[slug]` | `CreativeWork`, `BreadcrumbList` | Generate from `projectData` — it already holds name, tag, url, summary, challenge, solution, metrics |
| `/pricing` | `OfferCatalog` with `Offer` + `PriceSpecification` | Generate from `groups` in `PricingClient.tsx`. See warning below |
| `/about`, `/about/team` | `AboutPage`, `ProfilePage`, `Person[]` | `Person.sameAs` → LinkedIn per person |
| `/insights/[slug]` | `BlogPosting`, `Person` author | |
| `/contact` | `ContactPage`, `LocalBusiness` | Requires publishing a real address — currently only "Colombo, Sri Lanka" in the footer |
| **Nowhere** | ~~`FAQPage`~~ | Google retired FAQ rich results for all sites (May 2026). `FaqAccordion` stays UI-only |

**Pricing schema warning:** marking up `Offer`/`PriceSpecification` makes the $199 tier machine-readable and eligible to surface in AI answers as "Forty Pixels' price." That is the opposite of moving upmarket. Either reposition the pricing page first (see `SEO-STRATEGY.md`, Pillar 3), or mark up only the upper tiers and leave entry tiers as unpriced `Service` entries. Do not ship pricing schema and an upmarket repositioning out of order.

### Implementation notes for this repo

- Pages are server components — emit JSON-LD as `<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(x)}}/>` directly in the page body. No client component, no `next/script` needed.
- Put schema builders in a new `app/lib/schema.ts` so `/portfolio/[slug]` and `/pricing` can generate from `projectData` and `groups` rather than hand-maintaining duplicated JSON.
- `app/robots.ts` and `app/sitemap.ts` use the Next file conventions; the sitemap should enumerate static routes plus `Object.keys(projectData)` so new case studies appear automatically.
- Add `alternates:{canonical:"/path"}` to each page's exported `metadata`. `metadataBase` is already set, so relative paths resolve.
- Match the repo's dense formatting style (see `CLAUDE.md`).

## Internal linking

Current linking is shallow: nav, footer, and a few `line-link` CTAs. Every internal link must use `TransitionLink` (from `app/components/Sections.tsx`), not `next/link`, or the curtain transition breaks.

**Target link flows:**

```
/                → /services/[each]      (offer cards link to specific service, not /services)
/services/[slug] → /portfolio/[slug]     (each service links its 2-3 proof cases)
/portfolio/[slug]→ /services/[slug]      (each case study links the service that delivered it)
/portfolio/[slug]→ /portfolio/[next]     (related-projects module — none exists today)
/insights/[slug] → /services/[slug]      (every post routes to one commercial page)
/about/team      → /portfolio/[slug]     (people ↔ work they did)
all pages        → /contact              (ContactBand already does this globally)
```

Two structural gaps worth fixing early: **case studies are currently dead ends** (no related-work, no service link), and **the homepage offer cards point at `/services` generically** instead of the specific service page. Both are one-line changes once service pages exist, and both push authority toward commercial URLs.

**Anchor text:** use the target's primary keyword, not "learn more" / "view all." `<TransitionLink href="/services/systems">custom platform development</TransitionLink>`.

## Crawl and indexing rules

- `robots.ts`: allow all, declare sitemap. Nothing needs blocking — no search pages, no filters, no params.
- All routes are static and prerendered; `/portfolio/[slug]` already uses `generateStaticParams`. Keep it that way — no ISR complexity for ~45 URLs.
- Case-study media in `public/case-studies/` should not be blocked; image indexing is upside for a design studio.
- Watch trailing-slash consistency between Next and Netlify — mismatch creates duplicate URLs. Verify after the first sitemap ships.
