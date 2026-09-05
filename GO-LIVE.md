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

**Use Resend, not SMTP.** Hetzner blocks outbound SMTP ports (25, 465, 587) by
default, which is why an App Password produced `Connection timeout` rather than
an authentication error — the connection never opened, so the credentials were
never tested. No credential change fixes a filtered port.

Two ways forward:

1. **Set `RESEND_API_KEY`** (recommended). Resend sends over HTTPS on 443, which
   no host blocks. Sign up, verify `eco-ticksolutions.ca` as a sending domain by
   adding the DNS records they give you, and set the key. **This does not move
   your mailboxes off Google** — receiving stays exactly where it is and your MX
   records are untouched. Only the outbound path changes.
2. **Ask Hetzner to unblock outbound SMTP**, then keep the `SMTP_*` values. They
   usually grant this after the account has some history.

Whichever you choose, run this on the server to confirm before testing the form:

```bash
pnpm mail:test you@example.com
```

It reports which transport is configured, probes ports 465, 587 and 25, and
sends one real message if the path is open. It also flags an `SMTP_PASS` that is
not 16 characters, since a Google App Password always is.

**Set the credentials before driving traffic.** Quote submissions email
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

**Autocomplete shows no suggestions.** Check the Coolify logs — the route prints
Google's own response, which names the actual problem. Known causes:

- `400 INVALID_ARGUMENT: Invalid circle.radius` — the location bias exceeded
  Google's 50,000m maximum. Fixed, and now asserted at boot so it cannot recur
  silently.
- `403` — the Cloud project has the older **Places API** enabled instead of
  **Places API (New)**.
- `403` with no detail — the key carries an **HTTP-referrer** restriction. That
  cannot work: the call is server to server and sends no referrer. Restrict by
  **IP address** instead.

**`Internal: NoFallbackError` on /blog/[slug].** Was `dynamicParams = false`,
which left Next with no fallback when a crawler requested a stale blog URL, so
it returned 500 instead of 404. Fixed — unknown slugs now render the real 404.

**Customer did not get a confirmation.** Two emails now go out per submission:
one to the office with reply-to set to the customer, and one to the customer
with their reference and what happens next. Both are logged separately —
`grep "customer mail"` and `grep "office mail"` to see each outcome. If both say
`logged`, no transport is configured; if both say `failed`, see the SMTP note
above.

**Stale-deployment errors after a redeploy.** `Failed to find Server Action`,
`Unexpected end of form`, or `Cannot read properties of undefined (reading 'aa')`
appear when a browser tab is still running JavaScript from the previous build
and posts to chunk names that no longer exist. Harmless, and a hard refresh
clears it. If you see it during testing, reload before concluding something is
broken.

**Quote form hangs on "Sending…".** It cannot any more — mail is dispatched
without blocking the response, which now returns in around 100ms regardless of
whether SMTP is reachable. If mail is not arriving, `grep "\[mail\]"` in the
logs gives the reason. `Invalid login` almost always means an account password
was used where an App Password is required.

**`TypeError: Cannot read properties of undefined (reading 'b')`.** This was
nodemailer being processed by the bundler. `serverExternalPackages` in
`next.config.ts` fixes it; if it reappears, confirm that line survived.

## 4c. Consent

The "Stay connected with Eco-Tick Solutions" checkbox is **required** — the form
will not advance without it, and `/api/quote` returns 422 if it is missing or
false. It is unchecked by default, and the value is stored on every lead as the
record of agreement.

One thing worth knowing: the message bundles service updates and appointment
reminders together with promotional offers. Those are treated differently under
CASL — a customer who asked you for a quote can be contacted about that quote
regardless, whereas promotional messages need express consent. Splitting them
into a required service-contact tick and an optional offers tick would keep the
hard requirement you want on the part that justifies it. Say the word and it is
a small change.

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
