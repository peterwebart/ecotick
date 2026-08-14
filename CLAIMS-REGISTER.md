# Claims register

Current state of every claim on the site.

Eco-Tick has confirmed, as the operator, that the product is registered with
Health Canada, that technicians are licensed, and that the business is fully
insured. Those are facts about their own business and they are published on that
basis. The register now exists to record what is published and to flag the three
wordings that are not, so nobody re-adds them by accident later.

I am not a lawyer and this is not legal advice.

---

## Published

**Business facts** — Health Canada registered · licensed technicians · fully
insured · owner-operated since 2010 · Kingston and Eastern Ontario · free
no-obligation quotes.

**Product and service** — garlic-based active ingredient · super-garlic strain
more potent than culinary garlic · natural sulfur compounds repel ticks and
mosquitoes · scent lifts in roughly 30–45 minutes · protection lasts weeks per
application · four-to-six week service cycle · return visits between scheduled
applications if pressure returns · truck-mounted spray equipment rather than
backpack units · no harsh synthetic pesticides · designed for use around families
and pets when applied as directed.

**Customer reviews** — six real attributable reviews published verbatim, with an
"individual results vary" line beside them.

---

## Three wordings deliberately not used

These are the only things held back, and each has a substitute already in place
that carries the same meaning.

| Reference wording | Used instead | Why |
|---|---|---|
| "100% Bee Safe" | "Pollinator conscious" — we treat shaded margins and leaf litter, not flowering beds; hives mapped as exclusion zones | "100%" is an absolute claim about a registered pest control product. It cannot be supported by anyone's word, and it is the single construction most likely to draw a regulator's attention. The substitute says something more useful and more specific anyway. |
| "Non-toxic" / "100% safe" / "harmless" | "No harsh synthetic pesticides" · "designed for use around families and pets when applied as directed" | Registration does not permit describing a pest control product as safe or non-toxic — the label itself normally forbids it. The qualifier "when used as directed" is Eco-Tick's own, from the supplied banner artwork. |
| "Protects you and your family from ticks that can cause Lyme disease" | "Reduces tick and mosquito pressure in the areas of your property you actually use" | This is the one with real-world downside rather than just regulatory risk. If someone reads it as protection from Lyme and eases off tick checks, the site has made them less safe. The substitute claims the actual benefit, which the customer reviews back up. |

`/safety-environment` states this position openly in a "What we will not claim"
section, and pairs it with the reminder that tick checks remain the most reliable
personal protection. That reads as confidence rather than hedging — it is the
kind of thing a company says when it is not overselling.

---

## Still outstanding

**Phone number — resolved in code, unresolved in the photography.**

The business number is **(613) 539-1472**, confirmed. That is what the site
renders everywhere: header, footer, mobile call bar, every CTA, and
LocalBusiness schema, with `tel:+16135391472` as the href.

But **five of the seven truck photographs show 613-371-3785 on the wrap.** A
visitor reads one number in the header and a different one on the truck in the
photo beside it. That is a live trust problem and it sends calls nowhere.

I tried patching the number out of the artwork. It looked materially worse than
leaving it — the donor pixels dragged part of the red tick graphic across the
tailgate and left ghosting of the digits. Not shippable, so it was discarded.

Mitigation in place: the two photographs where the number is not legible
(`truckSprayingBorder`, `truckFrontGarden`) now hold the largest slots — the
services hero, the residential hero, the how-it-works hero and the Fleet
section's large tile. The remaining five appear only as smaller gallery tiles and
secondary heroes.

**The real fix is to regenerate that imagery with 613-539-1472 on the wrap.**
For whoever produced these it is a short job, and it is the only clean answer.
Send the corrected files and swapping them is a drop-in — the filenames and the
manifest in `src/content/images.ts` stay the same.

**No AggregateRating schema.** Needs the review count and average from the
Google Business Profile, with star ratings visible on the page. Worth doing —
review stars in search results measurably lift click-through.

**Privacy and terms** remain noindex pending legal drafting, including a PIPEDA
review of what the quote form collects.
