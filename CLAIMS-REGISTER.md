# Claims register

Every efficacy, safety or factual claim proposed for the Eco-Tick website, with
its source and its status. Nothing marked **HOLD** is published.

**Why this file exists.** In Canada, a product sold to control pests is a pest
control product under the *Pest Control Products Act*, registered with the PMRA
and carrying a registered label. Section 6(5) of the Act prohibits packaging,
labelling or **advertising** a pest control product in a way that is false,
misleading, or likely to create an erroneous impression about its character,
value, quantity, composition, safety or registration. In practice this means
website copy has to stay consistent with what the label actually says.

I am not a lawyer and this is not legal advice. This register is a working
document to take to the product manufacturer and to Eco-Tick's counsel — not a
compliance sign-off.

---

## Status key

| Status | Meaning |
|---|---|
| **LIVE** | Published. Factual, non-regulated, or attributable to Eco-Tick's own account. |
| **HOLD** | Not published. Needs the product label or documentary evidence first. |
| **SOURCE** | Not published. Factual claim needing a citation, not a regulatory issue. |

---

## 1. Safety claims — all HOLD

These are the highest-exposure items. PMRA guidance on pesticide advertising
treats unqualified safety language as misleading, because no pest control
product is safe in all circumstances — that is precisely why labels carry
directions and precautions.

| Proposed wording | Source | Status | Note |
|---|---|---|---|
| "Garlic spray is not harmful to animals and humans" | Client copy | **HOLD** | Unqualified safety claim. |
| "The products used are non-toxic" | Client copy | **HOLD** | "Non-toxic" is the specific term regulators single out. |
| "do not harm family, friends, pets, the earth" | Client copy | **HOLD** | Four safety claims in one clause. |
| "safe, natural, effective tick repellent" | Client copy | **HOLD** | "Safe" and "effective" both need label support. |
| "a better and safer system than chemicals" | Client copy | **HOLD** | Comparative safety claim against a whole product category. |

**Publishable alternative, available today without any documentation:**

> Applied by trained technicians in accordance with the product label. Your
> technician will confirm re-entry timing before leaving the property.

That is concrete, verifiable, and reassures more than "non-toxic" does, because
it tells the customer what actually happens.

---

## 2. Efficacy and duration claims — all HOLD

| Proposed wording | Source | Status | Needs |
|---|---|---|---|
| "controls ticks and mosquitoes for weeks after application" | Client copy | **HOLD** | The label's stated duration and reapplication interval. |
| "effective against ticks, mosquitoes… repelled and not able to breed in the treated area" | Client copy | **HOLD** | Efficacy data. The breeding-suppression claim is separate and needs its own support. |
| "We spray a natural product and stand by its effectiveness" | Client copy | **HOLD** | Softer, but still an efficacy claim. |
| "garlic's natural sulfur… repels ticks, mosquitoes" | Client copy | **HOLD** | Mechanism claim; acceptable if the label says it. |

---

## 3. Disease claims — HOLD, highest risk

| Proposed wording | Source | Status |
|---|---|---|
| "Eco-Tick Solutions is here to help protect you, your family and your pets from ticks that can cause Lyme disease. We have you covered." | Client copy | **HOLD** |

This is the one I would flag hardest. Read plainly, it offers protection from
the ticks that cause Lyme disease. That is a health-protection claim, and a
customer who contracts Lyme after treatment would read it the same way.

**Publishable alternative:**

> Reducing tick pressure in the areas of your property you actually use, so
> there is less to encounter in the first place. Tick checks after time
> outdoors remain the most reliable personal protection, whatever else you do.

Same customer benefit, no health claim. This is what the site currently says.

---

## 4. Factual claims needing a source — SOURCE

Not regulatory problems. They are simply assertions that a reader could check.

| Claim | Issue |
|---|---|
| "Most insects have sensitivity to smells at a factor of 10,000 times our own" | A specific quantitative claim with no citation. Either source it or drop the number and say insects rely heavily on olfaction. |
| "the scent only lingers in the air for 30–45 minutes" | Needs the manufacturer's data. |
| "lab professionals refer to it as 'super garlic'" | Which lab? Is it a trade term or a product designation? |
| "the Queen of England sprays her gardens with a garlic powder" | Unsourced, and now factually stale — Elizabeth II died in 2022. Recommend cutting it entirely; it adds no credibility a Canadian homeowner would weigh. |

---

## 5. Competitor claims — reworded

| Proposed wording | Status |
|---|---|
| "All of these sprays and services caused more harm than good" | **Reworded.** The brief itself says never attack competitors. Published as Edward's own experience — he tried the alternatives and they did not give him what he wanted — rather than as a claim about their products. |

---

## 6. Published as-is — LIVE

Eco-Tick's own history is Eco-Tick's to tell, and none of it is regulated.

- Edward Chodowski, CEO and Founder; began treating his own property in 2010
- The origin story: his mother's misting bottle, the family asking around, garlic
- Garlic preparations have a long history of use by farmers and gardeners
- The strain used is more potent than culinary garlic
- Application areas: yards, parks, athletic fields, cottage grounds, trails
- Full NAP: 3192 Creekford Road, Kingston, Ontario K7P 2Z6 · 613-539-1472
- Hours, service region, free no-obligation quotes

---

## What unblocks the rest

One document clears almost everything above:

1. **The product label** — trade name, PCP registration number, active
   ingredient and concentration, registered target pests, application rate,
   reapplication interval, re-entry interval, rainfastness, buffer distances.
2. **The Safety Data Sheet** — handling, storage, first aid.
3. **Written confirmation from the manufacturer** of which claims Eco-Tick is
   licensed to repeat.

With those, `/natural-garlic-spray` and `/safety-environment` become the two
strongest pages on the site rather than the two gated ones — because specifics
persuade and adjectives do not.

## Suggested order of operations

1. Get the label and PCP number from the supplier.
2. Draft the claim set using the label's own wording.
3. Have Eco-Tick's counsel or the manufacturer confirm it.
4. Update this register, remove `noindex: true` from
   `src/content/services/trust.ts`, and both pages enter the sitemap
   automatically.
