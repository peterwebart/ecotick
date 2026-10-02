# GTM container setup

Code alone does not fix conversion tracking. This is the container side.

Container `GTM-5G97FBRL`.

---

## 1. Create four Data Layer Variables

**Variables → New → Data Layer Variable.** Name each one exactly as below; the
Data Layer Variable Name must match the key the site pushes.

| Variable name | Data Layer Variable Name |
|---|---|
| `DLV - page_path` | `page_path` |
| `DLV - page_location` | `page_location` |
| `DLV - page_title` | `page_title` |
| `DLV - page_referrer` | `page_referrer` |

Leave Version as 2 and Default Value empty.

**Use these, not the built-in Page variables.** GTM's built-in Page Title reads
`document.title` at tag fire time, which on a History Change is the title of the
page the visitor just left — the exact bug this work exists to fix. Reading the
data layer gets the value the site captured after the new metadata applied.

Built-in **Page URL** is fine on History Change, since it reads
`document.location` live. It is Page Title that goes stale. The variables above
are used for all four anyway, so the tag has one consistent source.

---

## 2. Trigger for client-side pageviews

**Triggers → New → Custom Event.**

| Field | Value |
|---|---|
| Name | `CE - route_change` |
| Event name | `route_change` |
| This trigger fires on | All Custom Events |

Do **not** use the History Change trigger. It fires the instant the URL changes,
before Next has applied the new route's metadata, so the title is stale again.
The site pushes `route_change` only once the title has settled.

---

## 3. GA4 tag for client-side pageviews

**Tags → New → Google Analytics: GA4 Event.**

| Field | Value |
|---|---|
| Name | `GA4 - Pageview (route change)` |
| Measurement ID | your GA4 ID (or a Google Tag referenced here) |
| Event Name | `page_view` |
| Trigger | `CE - route_change` |

**Event Parameters:**

| Parameter | Value |
|---|---|
| `page_path` | `{{DLV - page_path}}` |
| `page_location` | `{{DLV - page_location}}` |
| `page_title` | `{{DLV - page_title}}` |
| `page_referrer` | `{{DLV - page_referrer}}` |

Your existing container-load Page View tag stays exactly as it is. This tag is
additive and covers only client-side navigation.

---

## 4. Conversion tag

The quote submission is a **real document load**, so the destination page fires
the normal container-load pageview. You can key the conversion either way:

**On the event (preferred).** Trigger: Custom Event, event name `quote_submitted`.
The site pushes it with `propertyType`, `preferredContact` and `reference`, and
waits for GTM's `eventCallback` before navigating — so the tag fires before the
document is torn down.

**On the URL.** Trigger: Page View with Page URL contains `/thank-you`. This
works now that the navigation is a genuine load. `/thank-you` is `noindex` and
out of the sitemap, so it cannot be reached without submitting.

Mark `quote_submitted` as a Key Event in GA4 (Admin → Events).

---

## 5. Other events already in the data layer

No extra code needed; build Custom Event triggers on these:

| Event | Parameters |
|---|---|
| `quote_started` | — |
| `quote_submitted` | `propertyType`, `preferredContact`, `reference` |
| `phone_clicked` | `location` |
| `service_cta_clicked` | `location` |

`email_clicked` is defined in the code's event type but **never fired**, despite
seven `mailto:` links on the site. Wiring it up is a small change — say the word.

---

## 6. Verify in Preview

**Preview → enter the site URL → Connect.**

### Landing on the homepage

1. `Container Loaded` — `gtm.js`
2. `DOM Ready` — `gtm.dom`
3. `Window Loaded` — `gtm.load`
4. **No `route_change`.** The tracker skips the first run on purpose, because
   the container-load pageview has already covered the entry page. If you see
   `route_change` here, every entry page is being counted twice.

### Clicking through to a service page

5. `route_change` appears. Select it, open the **Data Layer** tab, and check
   `page_title`.

**Correct:** the title of the page you just arrived on —
`Residential Tick Control & Yard Spray | Eco-Tick Solutions`.

**Stale:** the title of the page you just left. If you see this, raise
`TITLE_SETTLE_TIMEOUT_MS` in `src/components/analytics/RouteChangeTracker.tsx`;
the metadata is resolving more slowly than the ceiling allows.

Also confirm `page_referrer` holds the URL you came from, and `page_path`
includes the query string if there was one.

### Submitting the quote form

6. `quote_started` on first interaction with the form.
7. `quote_submitted` with `reference` populated.
8. The page reloads — **the Preview panel restarts** at `Container Loaded` for
   `/thank-you`. That restart is the proof the navigation is a real document
   load rather than a History change.

---

## 7. Reading the failure modes

**Conversion event but no pageview on `/thank-you`.** The navigation reverted to
client-side routing. Check that `QuoteWizard` still calls `trackThenNavigate`
and not `router.push`.

**Pageview on `/thank-you` but no conversion event.** GTM fired the destination
pageview but the `quote_submitted` tag did not complete before unload. The site
waits for `eventCallback` with a 1200 ms ceiling; if a slow tag is overrunning
it, raise `timeoutMs` in `trackThenNavigate`. If you also key the conversion on
the `/thank-you` URL you are covered either way, which is a reason to do both.

**`route_change` firing but GA4 shows nothing.** The tag is bound to the wrong
trigger, or the Measurement ID is missing. Check the tag fired in Preview before
looking at GA4 — realtime reporting lags a few minutes.

**Every pageview counted twice.** GA4 is configured in two places — a GA4 tag in
this container *and* `NEXT_PUBLIC_GA4_ID` set on the site, loading gtag directly.
Pick one. The site logs a warning to the server log when it sees both.
