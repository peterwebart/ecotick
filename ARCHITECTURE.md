# Eco-Tick Solutions — Architecture & Implementation Plan

**Status:** Pre-implementation. Written without repository access, so every
"existing" fact below is an assumption to verify in step 0.

**Stack (from CLAUDE.md):** Next.js 15 App Router · TypeScript strict · Tailwind
CSS 4 · Payload CMS · PostgreSQL · pnpm · Coolify auto-deploy on `main`.

---

## 0. Audit — must run against the repo first

None of this can be done from a chat session. Run it before writing code, and
write the findings into this file before touching anything else.

```bash
# framework + versions
cat package.json && cat next.config.* && cat tsconfig.json

# route inventory
find src/app -name "page.tsx" -o -name "route.ts" | sort

# what Payload already models
find src -path "*collections*" -name "*.ts" | sort
cat src/payload.config.ts

# existing metadata + schema
grep -rn "generateMetadata\|export const metadata\|application/ld+json" src/

# forms, analytics, integrations
grep -rn "gtag\|dataLayer\|GA_\|fbq\|resend\|nodemailer\|onSubmit" src/

# baseline health
pnpm install && pnpm lint && pnpm build
```

**Also required, and only obtainable outside the repo:**

- Live URL inventory + which pages currently rank — Search Console *Pages* report,
  export last 12 months. This is the input to the redirect map (§42 of the brief).
  Without it, URL changes destroy ranking pages silently.
- Current GA4 / GSC property IDs.
- Existing DNS + domain config in Coolify (read only — do not touch).

---

## 1. Route map

Phase column drives shipping order. Only build a route when its content source
is resolved — the brief forbids thin doorway pages (§7, §24).

| Route | Type | Search intent | Primary keyword | Schema | Phase | Content source |
|---|---|---|---|---|---|---|
| `/` | Landing | Brand + triage | tick control ontario | Organization, WebSite, LocalBusiness | 1 | Mockup (approved) |
| `/get-a-quote` | Funnel | Transactional | — | — (noindex the success state) | 1 | Spec'd in §23 |
| `/contact` | Utility | Navigational | — | LocalBusiness | 1 | **Needs client** |
| `/services` | Hub | Commercial investigation | tick control service | Service | 2 | Derived |
| `/residential-tick-control` | Money | Commercial | residential tick control, backyard tick control | Service, FAQPage | 2 | Brief §8 |
| `/commercial-tick-control` | Money | B2B commercial | commercial tick control | Service, FAQPage | 2 | Brief §9 |
| `/large-property-tick-control` | Money | B2B commercial | large property tick control | Service | 2 | Brief §10 |
| `/mosquito-control` | Money | Commercial | mosquito control | Service | 3 | Derived |
| `/tick-mosquito-control` | Money | Commercial | mosquito and tick control | Service | 3 | Brief §12 |
| `/natural-garlic-spray` | Differentiator | Investigational | garlic tick spray | Service, FAQPage | 2 | **Needs client — product facts** |
| `/how-it-works` | Support | Investigational | how does tick spraying work | HowTo | 3 | Mockup + §6 |
| `/safety-environment` | Trust | Investigational | is tick spray safe for pets | — | 2 | **Needs client — blocking** |
| `/about` | Trust | Navigational | — | AboutPage | 3 | **Needs client** |
| `/who-we-serve` | Hub | Investigational | — | — | 3 | Derived |
| `/industries/[slug]` | B2B landing | Commercial | campground tick control, golf course tick control | Service | 4 | Per-industry, gated |
| `/service-areas` | Local hub | Local | tick control near me | — | 4 | **Needs client — territory** |
| `/service-areas/[slug]` | Local | Local | tick control [city] | LocalBusiness | 5 | Gated on unique content |
| `/resources` | Hub | Informational | — | CollectionPage | 3 | Derived |
| `/tick-control-guide` | Pillar | Informational | ontario tick control guide | Article | 4 | 4–6k words, write properly |
| `/tick-identification`, `/tick-prevention`, `/tick-season`, `/lyme-disease` | Cluster | Informational | when is tick season in ontario | Article | 4 | Needs citations |
| `/blog`, `/blog/[slug]` | Publishing | Informational | — | Article, BreadcrumbList | 3 | Payload-driven |
| `/faq` | Support | Informational | — | FAQPage | 3 | Reusable component |

**Mosquito split (§11):** ship `/mosquito-control` alone in phase 3. Only split
into residential/commercial/large-property variants once each has genuinely
distinct content — otherwise it's three near-duplicates of one page.

**Redirects:** every route change lands in `next.config.ts` `redirects()` as a
permanent 308, sourced from the Search Console export. Ship redirects in the
*same* deploy as the URL change, never after.

---

## 2. Payload collections

```
Collections
  Services          slug, title, tier(res|comm|large), pest(tick|mosquito|both),
                    hero, nabc{need,approach,benefits,alternatives}, sections[],
                    faqs → FAQs, relatedServices → Services, seo
  Industries        slug, title, hero, painPoints[], service → Services, faqs, seo
  Locations         slug, city, region, territoryNotes, localConditions,
                    propertyTypes[], services → Services, faqs, seo
                    ⚠ publish gate: require localConditions ≥ 150 words
  Articles          slug, title, excerpt, body(lexical), category, author → Team,
                    publishedAt, references[], relatedArticles, seo
  Guides            slug, title, chapters[], downloadable, gatedForm, seo
  FAQs              question, answer, topics[]  ← shared, embedded by reference
  CaseStudies       property, challenge, approach, program, result,
                    clientFeedback, gallery   (template only, no fabricated data)
  Testimonials      quote, attribution, source, verifiedAt  ⚠ required: source
  Team              name, role, bio, photo, credentials

Globals
  SiteSettings      phone, email, serviceArea, hours, socials, legalName
  Navigation        header[], footer[]
  ClaimsRegister    see §4 — every efficacy claim + its substantiation
```

`seo` is one shared field group: `title`, `description`, `ogImage`,
`canonicalOverride`, `noindex`. One implementation, every collection.

---

## 3. Component inventory

Build in this order — later components compose earlier ones.

**Primitives:** `Button` (variants: primary/secondary/tier-large, the last using
`clay-600` not `clay-500`), `Container`, `Section` (bg: bone-50 | bone-200 |
forest-900), `Eyebrow`, `Prose`.

**Global:** `Header` (desktop nav + phone), `MobileBar` (Call / Get Quote / Menu,
sticky), `Footer`, `Breadcrumbs`, `SkipLink`.

**Blocks:** `Hero`, `TrustBar`, `ServiceTierCards`, `ProcessSteps`,
`GarlicSolutionPanel`, `SeasonalStrip`, `DifferenceGrid`, `KnowledgeHub`,
`TestimonialBlock`, `FinalCTA`, `FAQAccordion`, `ServiceAreaMap`, `NABCSection`.

**Funnel:** `QuoteWizard` (6 steps, branches B2C/B2B at step 1), `QuoteStep`,
`FormField`, `SuccessState`.

**Quote form notes:** server actions with Zod validation, honeypot + Cloudflare
Turnstile, rate limit by IP. Persist submissions to Payload *and* email — do not
rely on email alone. Fire `quote_started` on step 1 interaction and
`quote_submitted` on server-confirmed write, not on click.

---

## 4. Claims register — the blocking item

Brief §30 forbids unsubstantiated claims. The approved mockup currently contains
several that need documentation before they can ship:

| Claim in mockup | Status | Needed |
|---|---|---|
| "Safe for Families & Pets*" | ⚠ Asterisked but still a safety claim | Label/SDS wording; consider "Applied by trained technicians following label directions" |
| "Effective & Long Lasting" | ⚠ Efficacy claim | Efficacy data, or reframe to duration only |
| "Effective against ticks & mosquitoes" | ⚠ Efficacy claim | PCP registration or manufacturer data |
| "Plant-derived active ingredients" | ⚠ Verifiable but unverified | Product label |
| "Long-lasting residual protection" | ⚠ | Reapplication interval from label |
| "We stand behind our work" | OK | — |
| Testimonial "Sarah J., Cottage Owner" | ⚠ Likely placeholder | Real, attributable review or remove |

**In Canada this is not just brand risk.** Any product making a pest-control
claim is regulated under the *Pest Control Products Act* (PMRA). Claims must
match the registered label. Get the PCP registration number and the product
label from the client, and mirror the label's own language. I'm not a lawyer —
have the client's counsel or the product manufacturer review the final claim set.

Build `ClaimsRegister` as a Payload global so every claim on the site has a
recorded source. Anything without one doesn't ship.

---

## 5. Other blockers requiring client input

1. **Phone number.** Mockup shows `(705) 123-4567` — a placeholder. Also note
   705 is Central/Northeastern Ontario (Barrie, Muskoka, Peterborough, Sudbury),
   while the brief's entity map (§33) names **Kingston / Eastern Ontario**, which
   is 613. These conflict. Resolve before building `/service-areas`.
2. **Actual service territory** — the exact list of communities served. Gates all
   local pages. No invented cities (§24).
3. **Product facts** — name, PCP number, active ingredients, application method,
   reapplication interval, re-entry interval, weather constraints.
4. **Business identity** — legal name, address (or service-area-business status
   for LocalBusiness schema), hours, applicator licensing.
5. **Real reviews** — Google Business Profile URL. AggregateRating schema
   requires genuine, on-page-visible ratings.
6. **Photography** — the mockup imagery appears to be stock or generated. Real
   technician and property photos materially outperform it, and §34 requires it.
7. **Footer says © 2024** — make it dynamic.

---

## 6. Accessibility findings from the mockup

- `clay-500` (#A98B63) with white text = **3.2:1**, fails AA for normal text.
  The "Large Property Services" button label is small — use `clay-600`
  (#8A6E45, 4.85:1). Token file already encodes this.
- Hero H1 sits directly on photography. Contrast varies per pixel; add a
  gradient scrim (`forest-950` at 45% → transparent) behind the text column.
- The trust-bar asterisk footnote is `ink-500` at ~12px — verify ≥ 4.5:1 on
  `bone-50` at final size, or bump to `ink-700`.
- Seasonal strip encodes meaning in colour (spring/summer/fall). Icons plus text
  labels are present in the mockup — keep both.

---

## 7. Phasing

`CLAUDE.md` requires one feature at a time with lint + build + commit between
each. That conflicts with the brief's "implement everything" framing. Resolve in
favour of `CLAUDE.md` — ship in deployable increments:

| Phase | Ships | Gate |
|---|---|---|
| 0 | Audit, design tokens, redirect map | Search Console export in hand |
| 1 | Layout, header/footer, homepage, quote funnel, contact | Real phone number |
| 2 | Three money pages, `/natural-garlic-spray`, `/safety-environment` | Claims register signed off |
| 3 | Mosquito, how-it-works, resources hub, blog, FAQ | — |
| 4 | Pillar guide, article cluster, industry pages | Content written, not stubbed |
| 5 | Location pages | Territory confirmed, unique content per page |
| 6 | Schema, perf pass, a11y audit, analytics verification | Lighthouse ≥ 90 |

Phase 1 alone is a viable launch — it replaces the current site with something
that converts. Phases 4–5 are where the organic traffic actually comes from, and
they're content work, not engineering.

---

## 8. Definition of done, per phase

```bash
pnpm lint          # zero warnings
pnpm exec tsc --noEmit   # strict, no `any`
pnpm build         # zero warnings
```

Plus: keyboard-only pass on new routes, mobile viewport check at 375px, and every
new page has unique `title` + `description` + canonical. Schema validated against
Google's Rich Results Test — and only emitted where the markup matches visible
content (§25).
