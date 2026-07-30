# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies (Node >=22.13.0 required)
npm run dev       # start dev server at http://localhost:3000
npm run build     # production build
npm start         # run production build
npm run lint      # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite/runner in this repo. There is no `tsc` script; type checking happens implicitly via `next build` (`noEmit: true` in tsconfig). Verification for any change is therefore `npm run lint && npm run build`. Deployment target is Netlify (`netlify.toml`: `npm run build`, publish `.next`, Node 22).

## Architecture

Forty Pixels is a marketing site for a design/dev agency, built on Next.js App Router (Next 16, React 19). It has no database, no API routes, no CMS, and no backend — every page is a static server component reading from inline data. The only two external services are third-party and client-side (see "External services").

### Routing (`app/`)

- `/` (`app/page.tsx`), `/about`, `/services`, `/contact`, `/pricing`, `/portfolio`, `/portfolio/[slug]` (case studies, statically generated via `generateStaticParams`).
- **`CONTENT_INDEX.md` at the repo root is stale** — it documents an older route set (`/work`, `/enterprise`) from before the "rename work to portfolio, remove enterprise" commit. Don't trust it for current routes/copy; treat `app/` as the source of truth.
- Pages are server components by default; the client boundary is pushed down into a few leaf components (`app/contact/ContactForm.tsx`, `app/pricing/PricingClient.tsx`, `app/components/FaqAccordion.tsx`, plus `SiteFrame` itself). Keep new interactive bits in their own `"use client"` leaf rather than converting a page.
- `app/pricing/PricingClient.tsx` holds the full package/price table inline (`groups`, with USD/EUR/LKR prices per package and a currency toggle) — pricing copy is edited there, not in `app/pricing/page.tsx`.
- `app/components/OfferVisual.tsx` renders the three `.offer-demo` markup trees (`launch`/`commerce`/`systems`); the GSAP timelines that animate that markup live in `SiteFrame`. Changing a demo's DOM means checking the matching timeline.

### Shared shell — `app/components/SiteFrame.tsx`

This one client-component file (`"use client"`) drives nearly all cross-page behavior:
- **`SiteFrame`** wraps every page (mounted from `app/layout.tsx`) and owns: Lenis smooth scrolling wired to GSAP `ScrollTrigger`, a preloader shown once per session (`sessionStorage` key `fp-preloader`), and page-load reveal animations driven by data attributes (see below).
- **Client-side route transitions**: `TransitionLink`/the internal `go()` function intercept plain `<a>` clicks, play a full-bleed curtain animation, then do a real `window.location.assign(href)` (a hard navigation, not client-side SPA routing) once the curtain covers the screen. Any new internal link should use `TransitionLink` (re-exported from `app/components/Sections.tsx`) instead of `next/link`, or the curtain effect won't fire.
- **`Navigation`** and **`Footer`** are defined here too. Nav theme (light/dark/lime/hero) is driven by `data-nav-theme` attributes on page sections and swapped via `ScrollTrigger` as sections cross the viewport.
- **Declarative animation hooks** — sections opt into motion purely via data attributes, wired up in `SiteFrame`'s effect:
  - `data-reveal` — fade/slide up on scroll into view
  - `data-words` (paired with the `<Words>` helper in `Sections.tsx`) — per-word reveal/mask animation
  - `data-fill` — scrub-based text fill/highlight tied to scroll position
  - `data-parallax` — scroll-scrubbed parallax offset (used on background videos)
  - `data-count` — animated count-up (reads target from `data-count` value)
  - `data-nav-fade` — used inside the nav/footer for staggered menu-open reveals
  - `.offer-demo` sections (`data-demo="launch"|"commerce"|"systems"`) — bespoke looping GSAP timelines (`launchDemo`, `commerceDemo`, `systemsDemo`) that build once and replay in a `ScrollTrigger`-gated loop
  - All motion respects `prefers-reduced-motion` (checked once via `matchMedia` in the effect, and via a global CSS media query).

### Shared content/UI — `app/components/Sections.tsx`

- `projectData` is the single source of truth for portfolio/case-study content (per-project name, tag, url, logo, tone, summary, challenge, solution, metrics). Both `app/portfolio/page.tsx`'s cards and `app/portfolio/[slug]/page.tsx`'s case study pull from this object — add new projects here, not by hand-rolling a new page.
- `ProjectCard`, `VideoHero`, `ContactBand`, `Arrow`, `Words` are the reusable building blocks pages compose into. Most pages follow the same shape: a `VideoHero`, then a stack of `<section data-nav-theme="...">` blocks, ending in `<ContactBand>`.
- `Eyebrow` is currently a no-op that renders `null` (section eyebrow/index labels were removed but the call sites and prop shape were kept) — don't assume passing `index`/`label` renders anything.

### External services

- **Calendly** — the widget CSS/JS is loaded globally from `app/layout.tsx` (`<link>` in `<head>` + `next/script` with `strategy="lazyOnload"`). `CalendlyLink` in `SiteFrame.tsx` opens the popup (`CALENDLY_URL`, falling back to a normal `<a href>`); use it for any "book a call" CTA.
- **Web3Forms** — `app/contact/ContactForm.tsx` POSTs the form directly to `https://api.web3forms.com/submit` with `process.env.NEXT_PUBLIC_WEB3FORMS_KEY`. That env var is not in the repo (no `.env*` committed); without it locally the form renders and submits but errors out. Set it in Netlify env / a local `.env.local` when working on the form.
- **GA4** — `app/components/Analytics.tsx` (mounted in `layout.tsx`) loads gtag only when `NEXT_PUBLIC_GA_ID` is set, so local and preview builds send nothing. Fire events through `track()` in `app/lib/analytics.ts`; it no-ops without the key. Conversions already wired: `generate_lead` on contact-form success and on Calendly's `calendly.event_scheduled` postMessage, `schedule_click` on popup open, `form_error` on failure. Route changes are hard navigations, so GA4's automatic `page_view` covers every route — don't add manual pageview tracking.

### Styling

All CSS lives in one file: `app/globals.css`. It's organized as a sequence of per-section blocks (nav, hero, editorial intro, offer preview, services, work/portfolio, about, contact, case studies, footer) followed by a long tail of responsive breakpoints at the bottom (`900px`, `560px`, `1800px+`, `1200px`, `720px`, `480px`, `340px`, landscape/hover media queries). When touching a section's look, search for its existing block rather than adding a parallel one, and check the breakpoint tail for existing overrides of the same class.

Design tokens are CSS custom properties on `:root` in `globals.css` (`--lime`, `--ink`, `--dark`, `--paper`, `--white`, `--line`, `--pad`, `--nav`). Fonts are self-hosted Geist Sans/Mono via `next/font/local` (`app/layout.tsx`), exposed as `--font-sans`/`--font-mono`.

Tailwind v4 is installed and `globals.css` starts with `@import "tailwindcss"` (via the `@tailwindcss/postcss` plugin), but the site is styled entirely with hand-written semantic classes. Don't introduce utility-class markup — follow the existing per-section CSS.

### SEO state

`docs/seo/` (untracked) holds the SEO plan — start with `SEO-STRATEGY.md`, then `SITE-STRUCTURE.md` (target URLs + schema per page type), `IMPLEMENTATION-ROADMAP.md` (phased, file-level tasks), `COMPETITOR-ANALYSIS.md`, and `CONTENT-CALENDAR.md`. `SEO-CONTEXT.md` is the superseded earlier audit.

Current state: metadata/OG are set in `app/layout.tsx`, but there is no `app/robots.ts`, no `app/sitemap.ts`, no JSON-LD, and no per-page `alternates.canonical` (`/robots.txt` and `/sitemap.xml` both 404 live). Settled decisions worth not re-litigating: no `FAQPage` schema (Google retired FAQ rich results in May 2026 — `FaqAccordion` is UI-only), and pricing `Offer` schema is deliberately held until the pricing page is repositioned.

### Code style in this repo

Existing source files (components, pages, `globals.css`) are written extremely dense — minimal whitespace, many statements per line, no line-per-declaration formatting. This is the established style; match it when editing these files rather than reformatting to a more conventional spread-out style. Line counts are misleading as a result (`SiteFrame.tsx` is 220 lines but ~19KB).

`AGENTS.md` at the repo root covers the same ground at a higher level (structure, commands, commit/PR conventions: short imperative subjects, occasional Conventional Commit prefixes, PRs list verification commands and include screenshots for visual changes). Keep the two in sync if conventions change.
