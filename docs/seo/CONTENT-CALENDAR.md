# Content Calendar — Forty Pixels

**Created:** 2026-07-29
**Cadence:** 1–2 posts/month (~18 posts in 12 months) + 3–5 new case studies + 5 new service/team pages
**Bias:** decision-stage over awareness-stage. At this cadence, top-of-funnel volume content loses. Every piece targets someone who is already deciding whether to hire someone, and routes to a commercial page.

## Priorities before any blog post

Publishing order matters more than the calendar. **Do not start `/insights` until these ship** — they are worth more per hour than any article:

| Priority | Asset | Why first |
|---|---|---|
| P0 | **Verify and source** the `metrics` on all 5 case studies | Correction: these are already populated ("45% increase in orders", "120% sales increase", "98% customer satisfaction"). But round, unattributed numbers read as decoration. Tie each to a measurement method and period, or replace it with a number you can defend — schema and AI citations make these machine-readable and quotable |
| P0 | `/about/team` with named people + `Person` schema | Zero human names on the site today; blocks upmarket trust and E-E-A-T entirely |
| P1 | 4 service pages (`landing-pages`, `websites`, `stores`, `systems`) | Carry the commercial keywords; every post will link to them |
| P1 | Directory profiles (Clutch, Sortlist, DesignRush, TechBehemoths, GoodFirms) | Ranks without living on your site; also what AI engines cite |
| P2 | Rewrite the 5 case studies to ≥1,000 words | Currently summary-length; depth is the studio's genuine competitive edge |

## Case study standard (applies to all, new and existing)

Every `/portfolio/[slug]` should contain: client + industry, the business problem in the client's terms, constraints (budget/timeline/legacy), approach and key decisions with rationale, **specific measurable outcomes**, technical detail (stack, integrations, performance numbers), an attributed client quote, and a link to the service that delivered it.

The existing quote — *"A clear process, thoughtful details and a digital result that finally feels like the business we are becoming"* — is unattributed. An unattributed testimonial carries close to zero trust weight and no schema value. Get names and companies on the record.

## 12-month calendar

### Q1 (Aug–Oct 2026) — foundation, no blog yet

Content work is pages and case studies, not posts.

| Month | Deliverables |
|---|---|
| Aug | Metrics added to all 5 case studies; `/about/team` written and shipped |
| Sep | 4 service pages (800–1,200 words each) with case-study proof attached |
| Oct | Rewrite oyo-eats + nuzii to full 1,000+ word depth; claim all directory profiles |

### Q2 (Nov 2026 – Jan 2027) — `/insights` launches

| Month | Post | Primary target | Routes to |
|---|---|---|---|
| Nov | **What a custom website actually costs — and what changes at each budget** | `website cost sri lanka`, `custom website price` | `/pricing`, `/services/websites` |
| Nov | Case study: newest client project | brand + vertical terms | `/services/[relevant]` |
| Dec | **Shopify vs a custom storefront: how to decide** | `shopify alternative`, `custom store vs shopify` | `/services/stores` |
| Jan | **How to brief a web design agency (with the questions we ask)** | `how to brief a web agency`, `web design brief` | `/contact` |
| Jan | **Why we build on Next.js** — stack rationale, performance, tradeoffs | `next.js agency`, `next.js marketing site` | `/services/systems` |

Q2 note: the cost article is the highest-leverage piece on this calendar **and the most dangerous**. Written as a price list, it wins LKR 40,000 leads. Written as a "here is what actually drives cost, and here is what you get at each level" explainer that anchors on outcomes, it wins the upmarket buyer and pre-qualifies out the rest. Write it second, after the pricing page repositioning lands.

### Q3 (Feb–Apr 2027) — technical authority + local

| Month | Post | Primary target |
|---|---|---|
| Feb | **Scroll-driven motion without wrecking performance** (GSAP/Lenis, real numbers from live builds) | `gsap scroll animation`, `smooth scroll performance` |
| Feb | Case study: newest project | vertical terms |
| Mar | **Web design in Sri Lanka: what changed in 2027** — market/quality commentary, positioning piece | `web design sri lanka` (informational) |
| Mar | **Core Web Vitals for video-heavy marketing sites** — from your own optimization work | `core web vitals video`, `lcp background video` |
| Apr | **From LKR 50,000 to a real platform: when to stop patching** | `custom web platform sri lanka` — upmarket keyword, upmarket argument |

### Q4 (May–Jul 2027) — authority and original data

| Month | Post | Primary target |
|---|---|---|
| May | **The Sri Lankan business web report** — original survey/audit of ~50 LK business sites (speed, mobile, accessibility) | Original research; link and citation magnet |
| May | Case study | vertical terms |
| Jun | **Headless commerce for small catalogs: worth it?** | `headless commerce small business` |
| Jun | **What we learned rebuilding a clinical lab's site** (fortecl.ae) — deep technical retro | `healthcare website redesign`, UAE terms |
| Jul | **Design systems for teams of three** | `design system small team` |

The May original-research piece is the single best link-acquisition asset on this calendar. Nothing else here earns editorial links from LK tech press or gets cited by AI assistants the way primary data does. Budget real time for it — it can replace two months of ordinary posts.

## Format standard

- **Length:** 1,200–2,000 words. Long enough to be substantive, short enough to sustain at this cadence.
- **Structure:** answer the title question in the first 100 words, then expand. This is what gets extracted into AI answers and featured snippets.
- **Headings:** phrase H2s as the questions people actually ask — those become the citable passages.
- **Every post:** named author with `Person` schema and a LinkedIn `sameAs`, a real example from your own work, and one clear link to a commercial page.
- **Never:** generic listicles, AI-written filler, "top 10 trends," or anything that could have been written by an agency that hasn't built anything.

## GEO / AI-citation notes

At 1–2 posts/month you will not out-volume anyone, so optimise for being *quotable*:

- Specific numbers beat adjectives. "Cut LCP from 4.1s to 1.3s" is citable; "blazing fast" is not.
- Publish original data nobody else has (the May report; per-project metrics).
- Keep `Organization` and `Person` entity data consistent everywhere — AI answers assemble from entity graphs, and the brand-collision problem (Forty Eight Pixels, 44 Pixels, Fifty Pixels, FORTYPIXEL Kiel) actively works against you here.
- Get listed in the directories AI engines cite for "best agency in Colombo" — that's Clutch, Sortlist, DesignRush, TechBehemoths, GoodFirms.
- Track brand mentions in ChatGPT / Perplexity / Google AI Overviews quarterly for "web design agency Colombo" and "Next.js agency Sri Lanka."

## Review cadence

- **Monthly:** publish on schedule; check GSC for new queries; update any post whose target query shifted.
- **Quarterly:** re-rank the backlog against real GSC data. This calendar is a hypothesis — three months of query data beats it and should replace it.
- **Kill rule:** any post with zero impressions after 90 days gets rewritten or unpublished. A 20-page site cannot carry dead weight.
