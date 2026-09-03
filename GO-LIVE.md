# Go-live checklist

The build is finished and passing. Work through this in order — step 2 is the
one that can cost you traffic if skipped.

---

## 1. Point the environment at the real domain

In Coolify → Environment Variables:

| Key | Value | Build variable? |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://eco-ticksolutions.ca` — **no www** | **Yes** |
| `NEXT_PUBLIC_GA4_ID` | your GA4 measurement ID, or blank | **Yes** |
| `GOOGLE_PLACES_API_KEY` | Places API (New) key, IP-restricted | No |
| `SMTP_HOST` | `smtp.gmail.com` | No |
| `SMTP_PORT` | `465` | No |
| `SMTP_USER` | `info@eco-ticksolutions.ca` | No |
| `SMTP_PASS` | Google **App Password** — see below | No |
| `QUOTE_NOTIFY_EMAIL` | `info@…,shawn@…,admin@eco-ticksolutions.ca` | No |
| `QUOTE_FROM_EMAIL` | `info@eco-ticksolutions.ca` | No |

`NEXT_PUBLIC_*` must be ticked as build variables or every canonical URL and
sitemap entry points at the wrong domain. Redeploy after changing them.

---

## 1b. Domain and TLS

Canonical host is **`https://eco-ticksolutions.ca`** — no www. `src/middleware.ts`
issues 308 redirects for www and for http, so all four combinations land on one
URL. Verified: www→non-www, http→https, both-wrong→correct, and paths with query
strings preserved.

**In Coolify:**

- Add **both** `eco-ticksolutions.ca` and `www.eco-ticksolutions.ca` as domains.
  The app can only redirect www if the proxy actually accepts it — if www is not
  configured there, visitors get a certificate error before Node sees anything.
- Enable **Force HTTPS** / **Redirect to HTTPS**. The middleware is a safety net;
  TLS should terminate at the proxy so the first request never travels in clear.
- Make sure the TLS certificate covers both hosts.

DNS: an A record for the apex and a CNAME for www, both pointing at the server.

`Strict-Transport-Security` is set with a two-year max-age. Once a browser has
seen it, http is not attempted again for that host.

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
- Walk the quote form end to end on a real phone. Confirm the email arrives at
  `info@`, that the subject carries the reference, and that hitting **Reply**
  addresses the customer rather than the website.
- Note the reference on the thank-you page and check it matches the email
  subject.
- In GA4, set `/thank-you` as a conversion destination — it is a distinct URL
  precisely so it can be used that way.
- Click a `tel:` link on a phone and confirm it dials **(613) 539-1472**.
- Run Lighthouse on the live homepage. Fix real findings; ignore score-chasing.

---

## 4. Known items, none blocking

**Quote emails go to three mailboxes** — `info@`, `shawn@` and `admin@` — set in
`QUOTE_NOTIFY_EMAIL` as a comma-separated list. Reply-to is the customer, so
Reply in Gmail addresses them.

**Set the SMTP credentials before driving traffic.** Quote submissions email
`info@eco-ticksolutions.ca`, with reply-to set to the customer — so hitting
Reply in Gmail goes to them, not back to the website.

Because Eco-Tick email is on Google, use the SMTP route:

1. The Google account for `info@eco-ticksolutions.ca` needs **2-step
   verification** enabled.
2. Go to **myaccount.google.com → Security → App passwords** and generate one.
3. Put that 16-character value in `SMTP_PASS`. It is not the account password,
   and the account password will not work here.
4. Redeploy and submit a test enquiry.

Google Workspace allows roughly 2,000 messages a day on this route, far beyond
what a quote form will produce. If you would rather not manage SMTP credentials,
set `RESEND_API_KEY` instead and leave the `SMTP_*` values blank — the code
picks whichever is configured.

With neither set, the lead is still validated, given a reference and written to
the server log, so nothing is lost — but nobody is notified.

**Truck photography still shows 613-371-3785 in four images.** The large tailgate
shot was retouched successfully and now reads 1-888-912-5152; it holds the Fleet
section's main tile. Two more attempts were reverted for looking worse than the
originals. See `IMAGE-BRIEF.md` for exactly what to request as replacements.

**Founder photo is 330x328.** Fine as the inset it currently is. A camera
original would let it carry the About page properly.

**No review stars in search results.** `AggregateRating` schema needs your
Google Business Profile review count and average, with ratings visible on the
page. Worth doing — star ratings measurably lift click-through.

**Privacy and terms** are factually accurate to what the site does, but worth
ten minutes of your lawyer's time before launch.

---

## 4b. If something is not working

**Autocomplete shows no suggestions.** Check the Coolify logs — the route now
prints Google's own response. Two usual causes: the Cloud project has the older
**Places API** enabled instead of **Places API (New)**, which returns 403; or the
key carries an HTTP-referrer restriction, which cannot work because the call is
made server to server with no referrer. Restrict by **IP address** instead.

**Quote form hangs on "Sending…".** It cannot any more — mail is dispatched
without blocking the response, which now returns in around 100ms regardless of
whether SMTP is reachable. If mail is not arriving, `grep "\[mail\]"` in the
logs gives the reason. `Invalid login` almost always means an account password
was used where an App Password is required.

**`TypeError: Cannot read properties of undefined (reading 'b')`.** This was
nodemailer being processed by the bundler. `serverExternalPackages` in
`next.config.ts` fixes it; if it reappears, confirm that line survived.

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
