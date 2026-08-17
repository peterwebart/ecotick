# Go-live checklist

The build is finished and passing. Work through this in order — step 2 is the
one that can cost you traffic if skipped.

---

## 1. Point the environment at the real domain

In Coolify → Environment Variables:

| Key | Value | Build variable? |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.eco-ticksolutions.ca` | **Yes** |
| `NEXT_PUBLIC_GA4_ID` | your GA4 measurement ID, or blank | **Yes** |
| `GOOGLE_PLACES_API_KEY` | Places API (New) key, IP-restricted | No |

`NEXT_PUBLIC_*` must be ticked as build variables or every canonical URL and
sitemap entry points at the wrong domain. Redeploy after changing them.

---

## 2. Redirects — do this BEFORE the domain switches

`next.config.ts` has an empty `redirects()`. Right now that is correct, because
nothing has moved yet. The moment this site replaces the current
eco-ticksolutions.ca, every URL Google already has indexed that does not exist
here will start returning 404, and those rankings go with it.

**What to do:**

1. Google Search Console → the existing property → **Indexing → Pages** →
   export the indexed URL list. Also worth pulling **Performance → Pages**
   sorted by clicks, so you know which ones actually matter.
2. For each old URL, decide the closest equivalent here. Most will map cleanly:
   an old "tick control" page → `/residential-tick-control`, an old "about"
   → `/about`, and so on.
3. Add them to `next.config.ts`:

```ts
async redirects() {
  return [
    { source: "/old-path", destination: "/residential-tick-control", permanent: true },
    // one line per old URL
  ];
},
```

`permanent: true` emits a 308, which passes ranking signal. Anything with no
sensible equivalent can point at `/` — a redirect to the homepage beats a 404.

4. Deploy the redirects in the **same** release as the domain switch, not after.

If the current site has no meaningful search traffic, skip this. Check first
rather than assume.

---

## 3. Post-launch, same day

- Search Console → add the property → **submit `/sitemap.xml`** (24 URLs).
- Spot-check `https://www.eco-ticksolutions.ca/sitemap.xml` renders and every
  URL uses the real domain, not the Coolify preview host.
- Walk the quote form end to end on a real phone and confirm the lead arrives.
- Click a `tel:` link on a phone and confirm it dials **(613) 539-1472**.
- Run Lighthouse on the live homepage. Fix real findings; ignore score-chasing.

---

## 4. Known items, none blocking

**Quote submissions currently only log.** `app/api/quote/route.ts` validates and
writes to the server log — it does not yet email or persist. **Wire this before
you drive traffic**, or leads are silently lost. `QUOTE_NOTIFY_EMAIL` is already
in `.env.example` for it.

**Truck photography shows 613-371-3785.** Five of seven images have the old
number on the wrap. The two where it is not legible hold the biggest slots;
regenerating the other five with the correct number is a drop-in swap.

**Founder photo is 330x328.** Fine as the inset it currently is. A camera
original would let it carry the About page properly.

**No review stars in search results.** `AggregateRating` schema needs your
Google Business Profile review count and average, with ratings visible on the
page. Worth doing — star ratings measurably lift click-through.

**Privacy and terms** are factually accurate to what the site does, but worth
ten minutes of your lawyer's time before launch.

---

## 5. Every deploy from here

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
pnpm audit:site
git add . && git commit -m "..." && git push
```

`pnpm audit:site` gates on accessibility, metadata and structured data across
every prerendered page. It already caught a duplicated title suffix that would
have shipped on 25 pages. Keep it in the loop.
