# Implementation Roadmap — Forty Pixels

**Created:** 2026-07-29
Four phases, file-level tasks against this repo. Verification for every code change: `npm run lint && npm run build`.

---

## Phase 0 — Homepage title (resolved 2026-07-29)

Originally flagged as a possible stale-deploy problem. **It isn't** — building this repo locally produces exactly the live title, so the deploy is current.

The cause is Next.js behaviour: `title.template` does **not** apply to a page in the *same* route segment as the layout that defines it. `app/page.tsx` sits in the root segment with `app/layout.tsx`, so `%s | Forty Pixels` is skipped on the homepage and applied everywhere else (`About | Forty Pixels` builds correctly).

- [x] Confirmed live output matches the repo — no deploy issue
- [ ] **Still worth fixing:** the homepage title contains no brand token at all. Given the brand-collision problem, set it explicitly, e.g. `title:{absolute:"Forty Pixels | Digital experiences built to move business forward"}`
- [ ] Google's indexed title is a third, older variant ("Forty Pixels | Premium web design & development agency") — index lag or a Google rewrite. Re-check after the sitemap is submitted

---

## Phase 1 — Foundation (weeks 1–4)

Cheap, entirely technical, all currently missing.

### Measurement (week 1 — blocks the KPI table)
- [x] **Analytics code shipped 2026-07-29** — `app/lib/analytics.ts` + `app/components/Analytics.tsx`, mounted in `layout.tsx`. Gated on `NEXT_PUBLIC_GA_ID`: with no key set, nothing loads and nothing is sent
- [x] Conversion events wired: `generate_lead` (contact form success, tagged with the selected service), `generate_lead`/`method:calendly` (booking completed — via Calendly's `postMessage`), `schedule_click` (Calendly popup opened), `form_error`
- [ ] **Create the GA4 property and set `NEXT_PUBLIC_GA_ID` in Netlify env** — needs your Google account; nothing tracks until this exists
- [ ] In GA4, mark `generate_lead` as a key event so it reports as a conversion
- [ ] Verify `fortypixels.com` in Google Search Console (DNS TXT via the domain registrar)
- [ ] Verify in Bing Webmaster Tools (free backlink data, and it feeds ChatGPT search)
- [ ] Record real baselines into `SEO-STRATEGY.md` — the table there is directional until this is done

### Crawlability — **shipped 2026-07-29**
- [x] `app/robots.ts` — allows all, declares sitemap + host
- [x] `app/sitemap.ts` — 5 static routes + `Object.keys(projectData)`, so new case studies self-register. `/pricing` excluded (it is `noindex`)
- [x] `alternates:{canonical}` on all 5 indexable static pages + `generateMetadata` in `app/portfolio/[slug]/page.tsx`
- [ ] Submit the sitemap in GSC; request indexing on all URLs *(needs GSC verification first)*
- [ ] Check Next/Netlify trailing-slash consistency once the sitemap is live

### Schema — **shipped 2026-07-29** (`app/lib/schema.tsx`)
- [x] `Organization` + `WebSite` + `ProfessionalService` (`areaServed`: Sri Lanka + remote) on `/`, as a single `@graph`
- [x] `CreativeWork` + `BreadcrumbList` on `/portfolio/[slug]`, generated from `projectData`
- [ ] **`SAME_AS` is deliberately empty** — fill it in `app/lib/schema.tsx` once each profile is confirmed to be *this* Forty Pixels. This is the brand-disambiguation fix and the highest-value item in Phase 1; it is not done until this array is populated
- [x] No pricing schema (page is `noindex`), no `FAQPage` anywhere
- [ ] Validate `/` and one case study in Google's Rich Results Test after deploy

### Entity and local basics
- [ ] **Google Business Profile — CONDITIONAL, do not create by default.** Google's guidelines bar online-only businesses; service-area businesses qualify without a storefront, but only where in-person service genuinely happens, and verification needs a real operating address (no PO boxes, no virtual offices). **Create it only if you actually meet clients face-to-face in Colombo** — register the real working address, hide it, set the service area. If you don't meet clients in person, skip it: a suspended profile is worse than no profile, and the map pack isn't winnable for a fully remote studio
- [ ] If GBP is skipped, put that effort into directory profiles and `sameAs` instead — they carry the local signal without the eligibility risk
- [ ] Publish a consistent NAP *to the extent you have one*. The contact page shows only an email; the footer says "Colombo, Sri Lanka" with no address. A remote studio can run on locality + country + email, but it must be identical everywhere
- [ ] Claim profiles: Clutch, Sortlist, DesignRush, TechBehemoths, GoodFirms. Identical NAP and description on each; add each URL to `sameAs`
- [ ] Ensure the LinkedIn company page exists and is linked

### Performance baseline
- [ ] Pull CrUX field data (`/seo google`). Traffic may be too low for field data — if so, run lab tests on throttled mobile
- [ ] Specifically measure LCP on `/` — multiple autoplaying background videos plus GSAP + Lenis on every route is a real risk over LK mobile connections
- [ ] If LCP is poor: add poster frames, drop `preload="auto"` on non-hero video, consider a static hero image on mobile

**Phase 1 exit criteria:** GSC verified with real baselines recorded, sitemap + robots live and fetched, Organization/CreativeWork schema validating, GBP live, 5 directory profiles claimed, CWV measured.

---

## Phase 2 — Expansion and repositioning (weeks 5–12)

Where the upmarket goal is actually executed.

### Repositioning (do before amplifying traffic)
- [ ] Reorder `groups` in `app/pricing/PricingClient.tsx` so Systems / Custom Platform leads and Launch Page does not anchor the page at $199
- [ ] Convert entry tiers to "from" pricing; add a genuine upper tier or a stated typical-engagement band
- [ ] Rewrite pricing copy around outcomes and scope, not deliverable counts
- [ ] **Only then** add `OfferCatalog`/`Offer` schema, and consider marking up upper tiers only

### New pages (respect the ≥800-word + case-study quality gate in `SITE-STRUCTURE.md`)
- [ ] `/about/team` — named people, photos, bios, `Person` schema with LinkedIn `sameAs`
- [ ] `/services/landing-pages`, `/services/websites`, `/services/stores`, `/services/systems` — each with `Service` schema and 2–3 linked case studies
- [ ] Convert `/services` into a hub that links the four
- [ ] `/process` — promote the existing 6-step section in `app/services/page.tsx` to its own URL

### Case study depth
- [ ] Verify/source the existing `metrics` in `projectData` (already populated — make each defensible, with method and period)
- [ ] Expand each case study to ≥1,000 words per the standard in `CONTENT-CALENDAR.md`
- [ ] Get attributed client quotes (name + company) to replace the anonymous testimonial
- [ ] Add a related-projects module to `/portfolio/[slug]` — case studies are currently dead ends

### Internal linking
- [ ] Homepage offer cards → specific service pages, not `/services`
- [ ] Each case study → the service that delivered it
- [ ] Keyword-bearing anchor text throughout; all internal links via `TransitionLink`

**Phase 2 exit criteria:** 4 service pages + team page live and indexed, pricing repositioned, all case studies at depth with real metrics, first Colombo commercial terms appearing in GSC.

---

## Phase 3 — Scale (weeks 13–24)

- [ ] Launch `/insights` with `BlogPosting` schema and named authors; publish per `CONTENT-CALENDAR.md` (Q2/Q3)
- [ ] Ship the original research piece (**The Sri Lankan business web report**) — the primary link-acquisition asset; budget real time
- [ ] Outreach: LK tech/startup press, client cross-links (5 live client sites are natural link sources — ask), Behance/Awwwards/Dribbble portfolio presence, design-gallery submissions
- [ ] Run `/seo backlinks` to replace the estimated authority figures in `COMPETITOR-ANALYSIS.md` with measured data
- [ ] GEO: quarterly checks of ChatGPT / Perplexity / AI Overviews for "web design agency Colombo" and "Next.js agency Sri Lanka"; fix entity inconsistencies found
- [ ] Performance pass on real field data now that traffic exists
- [ ] Decide on `/web-design-colombo` — build **only** if GSC shows real Colombo-qualified impressions
- [ ] Quarterly review: re-rank the content backlog against actual query data

**Phase 3 exit criteria:** 6–8 posts live, 3–5 earned editorial links, 3–5 commercial terms in top 10, measured backlink baseline.

---

## Phase 4 — Authority (months 7–12)

- [ ] Sustain 1–2 posts/month; every new client project ships as a full case study
- [ ] Repeat/extend the original research annually — build it into a recognisable series
- [ ] Speaking, podcasts, LK tech community presence → `Person.sameAs` grows per team member
- [ ] Collect reviews on Google, Clutch, Trustpilot (Sphiria has Trustpilot; you have none)
- [ ] Advanced schema: `Review`/`AggregateRating` once real reviews exist, `VideoObject` for case-study video
- [ ] Apply the kill rule: any post with zero impressions after 90 days gets rewritten or unpublished
- [ ] Re-run a full `/seo audit https://fortypixels.com` and rewrite this roadmap against 12 months of real data

**Phase 4 exit criteria:** brand SERP owned (top 3 + knowledge panel eligible), 6–10 commercial terms in top 10, measurably higher average inbound project value.

---

## Dependency notes

- Phase 0 blocks everything.
- GSC verification (Phase 1) blocks all real prioritisation — every keyword judgement in these docs is inference until it exists.
- Pricing repositioning blocks pricing schema **and** blocks the cost article in `CONTENT-CALENDAR.md`.
- Team page blocks author schema, which blocks the blog's E-E-A-T value.
- Service pages block most internal linking and give the blog somewhere to route.

## Effort estimate

| Phase | Dev | Content/ops |
|---|---|---|
| 0 | 1 hr | — |
| 1 | 8–12 hrs | 4–6 hrs (profiles, GBP) |
| 2 | 12–16 hrs | 25–35 hrs (5 pages + 5 rewrites) |
| 3 | 4–6 hrs | 40–50 hrs (posts + research + outreach) |
| 4 | 4–8 hrs | ongoing, ~8–12 hrs/mo |

Phases 1 and 2 are where nearly all the return sits, and Phase 1 is almost entirely code you can ship in a week.
