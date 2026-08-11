# Eco-Tick Solutions

Next.js 15 · TypeScript (strict) · Tailwind CSS 4 · pnpm · deployed via Coolify.

```bash
pnpm install
pnpm approve-builds   # one-time: approves sharp + unrs-resolver native builds
pnpm dev
```

## What is here

Phases 1 and 2 of the plan in `ARCHITECTURE.md`.

**Phase 1** — global layout, homepage, quote funnel.
**Phase 2** — services hub, the three money pages, the two trust pages.
**Phase 3** — mosquito + combined pages, how-it-works, who-we-serve, resources
hub, blog architecture, aggregated FAQ, contact, and two evergreen guides.
**Phase 4 (partial)** — the pillar guide at `/tick-control-guide`, an
auto-derived table of contents for long-form, and env-gated GA4.
**Phase 6 (partial)** — a post-build audit script, plus the fixes it surfaced.

## Post-build audit

```bash
pnpm build && pnpm audit:site
```

`scripts/audit.mjs` parses every prerendered page and checks accessibility
basics (single h1, heading order, alt text, form labels, landmarks, duplicate
ids, vague link text), metadata hygiene (title and description length,
uniqueness, canonicals) and structured data (valid JSON-LD, required fields per
type, no rich-result schema on noindex pages). It exits non-zero on findings, so
it can gate a deploy.

It earned its place on the first run by catching a bug that would otherwise have
shipped on all 25 pages: every child route rendered
`… | Eco-Tick Solutions | Eco-Tick Solutions`, because the content strings
carried the suffix and the layout's title template appended it again. Next's
template does not apply to the segment that defines it, so the homepage looked
correct and hid the problem.

Current status: 25 pages audited, 0 issues across all three categories.

Service pages render from a block model (`src/content/types.ts`) that is shaped
like a Payload `blocks` field, so phase 3 is a fetch swap rather than a rewrite.
Adding a block variant to the union produces a type error in
`components/service/Blocks.tsx` until it is handled.

`/natural-garlic-spray` and `/safety-environment` are built but **noindexed and
excluded from the sitemap**, because every substantive statement on them is a
product fact only Eco-Tick can supply. They render `SourceNeeded` blocks listing
exactly what is outstanding. Fill those in, delete `noindex: true` from
`content/services/trust.ts`, and both pages enter the sitemap automatically.

```
src/
  app/            routes, metadata, sitemap, robots, /api/quote
  components/
    ui/           Button, Container, Section, Eyebrow, ImageSlot
    layout/       Header, Footer, MobileBar, Logo
    home/         the ten homepage sections
    quote/        QuoteWizard
  content/        typed content, shaped to mirror future Payload collections
  lib/            seo.ts, schema.ts, analytics.ts
```

## Why Payload is not wired yet

Payload needs a live Postgres connection at build time, which would make
`pnpm build` fail on any machine without the database. Content lives in
`src/content/*.ts` as typed modules shaped exactly like the Payload collections
in `ARCHITECTURE.md` §2, so phase 2 is a fetch swap rather than a rewrite.

## Verified

```
tsc --noEmit    PASS
eslint .        PASS — 0 errors, 0 warnings
next build      PASS — 30 routes, all prerendered except /api/quote
audit:site      PASS — 25 pages, 0 a11y / 0 meta / 0 schema issues
```

Sitemap verified at 17 URLs. Every gated page returns `noindex, follow` and is
absent from the sitemap. Every internal link resolves to a real route.

First Load JS sits between 102 and 109 kB across every route.

## Gated pages

Seven routes are built but `noindex, follow` and excluded from the sitemap,
because their substance depends on facts only Eco-Tick can supply. Each renders
a `SourceNeeded` block listing exactly what is outstanding.

| Route | Blocked on |
|---|---|
| `/natural-garlic-spray` | PCP number, active ingredients, application detail |
| `/safety-environment` | Label, SDS, re-entry interval, buffers, licensing |
| `/privacy`, `/terms` | Legal drafting and PIPEDA review |

Fill the content, delete `noindex: true`, and each enters the sitemap
automatically.

## Content backlog

The pillar guide is published. Tick identification, a standalone Lyme page,
industry pages and the seasonal checklists remain outstanding, and are listed as
a visible backlog on `/resources` rather than published as thin stubs.

**The pillar guide needs review before it goes live.** Its Lyme disease section
is written as education, makes no prevention claim, and points readers to health
authorities — but it should still be read by a clinician or checked against
Public Health Ontario. Every reference on every article is listed in a visible
Sources block and needs its exact URL verified by hand.

## Analytics

`components/analytics/GoogleAnalytics.tsx` renders nothing unless
`NEXT_PUBLIC_GA4_ID` is set. Verified both ways. Custom events
(`quote_started`, `quote_submitted`, `phone_clicked`, `email_clicked`,
`service_cta_clicked`) push to `dataLayer`; register them as conversions in the
GA4 UI.

One caveat on the build: it was verified in a sandbox without access to Google
Fonts, so the two `next/font/google` calls in `app/layout.tsx` were stubbed for
that run. Everything else compiled. Run `pnpm build` locally once to confirm the
font fetch — it is standard `next/font` usage and needs no changes.

## Business data — resolved 2026-08

Real NAP is in `src/content/site.ts` and drives LocalBusiness schema:
3192 Creekford Road, Kingston, Ontario K7P 2Z6 · 613-539-1472 ·
ecoticksolutions@gmail.com. The 705 area code in the original mockup was a
placeholder; Eco-Tick is 613 / Eastern Ontario.

`/about`, `/contact` and `/service-areas` are un-gated and indexed.

## Hero treatment

The homepage hero uses two different treatments because the constraint differs
by size, and a single scrim cannot serve both.

**Desktop** — copy sits in the left column over the photograph. The scrim holds
~80% opacity out to 42% of the frame, which is where the headline and lead
actually end, then falls away to nothing by 72%. The family occupies roughly
45–80% across, so it reads warm rather than washed green. Measured against the
composite: worst-case pixel under the copy is 4.64:1 with white text, mean 13:1.

**Below `lg`** — there is no horizontal room to put copy beside anything, so
darkening the whole frame enough for legible text also erases the subject. The
photograph instead drops to its own unscrimmed 4:3 band below the copy, which
sits on solid `forest-950`. The photo is the reason a visitor believes the
pitch; it should be legible, not atmospheric.

The three audience cards moved out of the hero into `TierStrip`, directly
below. That keeps the hero from stacking ~700px of content over the image on a
phone, and gives the triage links their own scannable row.

## Image system

`public/images/eco-tick/` — six photographs as WebP (max 1800px), and 18 icons
sliced from the supplied sheet to a uniform 256×256 transparent canvas.

Photos are static-imported through `src/content/images.ts`, which pairs each
with its alt text so image SEO lives in one place. Static imports carry
intrinsic dimensions, so `next/image` reserves the right box and CLS stays at
zero. `next.config.ts` serves AVIF then WebP; `priority` is set on the homepage
hero only.

`public/images/eco-tick/brand/` holds the one genuine Eco-Tick photograph
supplied so far: founder Edward Chodowski on a tractor-mounted tank sprayer
during a spring application, confirmed by the client. It is 330×328, so it is
capped at that width on `/about` via the `figure` block's `maxWidth` and never
upscaled. Ask for the camera original; a phone photo would be 3–12 megapixels
and could carry a hero.

`/about` emits `Person` schema for Edward and deliberately does **not** emit
`Service` schema — an about page is not a service. `ServicePageTemplate` takes
`emitServiceSchema={false}` for pages in that category.

**Everything else is illustrative library imagery, not documentary photographs
of Eco-Tick.** Alt text is written so it never implies otherwise — "a technician",
never "our technician". Two things to note: the commercial photo carries a
fictional "Lakeside Resort & Spa" sign, which may read as a real client; and the
technician shown is not Eco-Tick staff. Replace both with real photography when
available and rewrite the alt text.

## Claims

See `CLAIMS-REGISTER.md`. The supplied copy contains safety and efficacy claims
("non-toxic", "not harmful to animals and humans", "controls ticks and
mosquitoes for weeks", "protect… from ticks that can cause Lyme disease") that
are held pending the product label. That file lists each one, why it is held,
and a publishable alternative.

## Before launch — blocking

1. **Phone number.** `src/content/site.ts` holds a placeholder. The mockup's
   `(705) 123-4567` was fake, and 705 (Central/Northeastern Ontario) conflicts
   with the brief's Kingston/Eastern Ontario entity map (613).
2. **Claims register.** The trust bar, garlic panel and FAQ deliberately omit
   the mockup's efficacy and safety claims. See `ARCHITECTURE.md` §4 — these are
   regulated under the *Pest Control Products Act* and must match the registered
   PMRA label. Get the label and PCP number, then restore the exact wording.
3. **Quote submissions go nowhere.** `app/api/quote/route.ts` validates and logs
   but does not persist or notify. Wire Payload or email before launch.
4. **Photography.** Every `<ImageSlot>` is a placeholder with a brief describing
   the shot needed. Replace with `next/image`.
5. **Testimonials.** `testimonials` in `content/home.ts` is empty on purpose —
   `SocialProof` renders nothing rather than ship the mockup's invented review.
6. **Redirects.** `next.config.ts` `redirects()` is empty. Populate from the
   Search Console page export before the first production deploy.
