import type { Article } from "@/content/types";

export const professionalSpraying: Article = {
  slug: "how-professional-tick-spraying-works",
  path: "/blog/how-professional-tick-spraying-works",
  kind: "article",
  h1: "How Professional Tick Spraying Works",
  excerpt:
    "Professional tick treatment is less about the product than about placement and timing. Here is what actually happens on a visit, and what separates it from a hose-end bottle from the hardware store.",
  metaTitle: "How Professional Tick Spraying Works",
  metaDescription:
    "What happens during a professional tick treatment: assessment, zone mapping, targeted application, and why timing matters more than product choice.",
  publishedAt: "2026-04-06",
  author: "The Eco-Tick team",
  takeaways: [
    "Treatment is applied to habitat zones, not sprayed uniformly across a property.",
    "The assessment is the part that determines whether the treatment does anything.",
    "Timing across the season matters as much as the application itself.",
    "No outdoor treatment eliminates a tick population permanently.",
  ],
  related: [
    { label: "When is tick season in Ontario?", href: "/tick-season" },
    { label: "How to prevent ticks in your yard", href: "/tick-prevention" },
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "Our natural garlic-based solution", href: "/natural-garlic-spray" },
  ],
  blocks: [
    {
      type: "prose",
      heading: "The assessment does most of the work",
      body: [
        "The most common misconception about professional tick treatment is that the value sits in the product. It mostly does not. It sits in knowing where to put it.",
        "Ticks occupy a small and predictable fraction of a typical property: shaded borders, leaf litter, tall grass along fences, the transition where lawn meets woods. A treatment applied evenly across an entire property spends most of its effort on open lawn, where ticks were unlikely to survive anyway, while potentially under-treating the metre of hedge line that carries most of the pressure.",
        "So a visit starts with a walk. A technician is looking at vegetation type, shade, moisture, wildlife signs, and, critically, which parts of the property the household actually uses. A treeline nobody goes near is a different priority from a treeline the dog patrols twice a day.",
      ],
    },
    {
      type: "steps",
      heading: "What happens on a visit",
      steps: [
        {
          n: "01",
          title: "Walk and map",
          body: "The technician walks the property and identifies treatment zones, priority areas and anywhere that should be excluded, such as vegetable gardens, ponds, beehives or well heads.",
        },
        {
          n: "02",
          title: "Confirm the plan with you",
          body: "You should know which zones are being treated and which are not before anything is applied. If a homeowner cannot describe where the treatment went, something has gone wrong.",
        },
        {
          n: "03",
          title: "Targeted application",
          body: "Product is applied to the identified zones according to its label, using equipment that reaches into the vegetation layer rather than misting the surface.",
        },
        {
          n: "04",
          title: "Re-entry guidance",
          body: "The technician tells you what applies for re-entry timing before leaving. This comes from the product label, not from a general rule of thumb.",
        },
        {
          n: "05",
          title: "Schedule the next visit",
          body: "Because tick activity has two adult peaks and a summer nymph peak, the schedule is set across the season rather than left open.",
        },
      ],
    },
    {
      type: "table",
      heading: "Professional treatment compared with DIY",
      intro:
        "The honest version of this comparison. DIY products are not useless, and the gap is narrower than most marketing suggests, but it is real and it is mostly about placement and timing.",
      columns: ["", "Retail hose-end product", "Professional treatment"],
      rows: [
        [
          "Placement",
          "Applied by the homeowner, usually across open lawn where ticks are least likely to be",
          "Applied to mapped habitat zones after an assessment",
        ],
        [
          "Coverage into vegetation",
          "Surface-level; hose-end pressure struggles to reach the litter layer",
          "Equipment designed to penetrate the vegetation and litter layer",
        ],
        [
          "Timing",
          "Usually applied once, in summer, after ticks have been noticed",
          "Scheduled across the spring, summer and fall activity windows",
        ],
        [
          "Exclusion zones",
          "Left to the homeowner to judge on the day",
          "Identified and recorded before application",
        ],
        [
          "Cost",
          "Low per application",
          "Higher per visit, lower per unit of actual coverage",
        ],
      ],
    },
    {
      type: "prose",
      heading: "What treatment does not do",
      body: [
        "It does not eliminate a tick population permanently. Ticks arrive on hosts that cross property lines, so any property adjacent to woodland, field or a neighbour's untreated yard is being continually resupplied. Anyone promising a tick-free property is overselling.",
        "It also does not replace personal precautions. Tick checks after time outdoors remain the single most reliable protection available to a household, and they cost nothing. Treatment reduces the pressure in the areas you use. Checks handle what gets through.",
        "Finally, it is not a substitute for habitat management. A property where leaf litter is never cleared and the woodpile sits against the deck is asking treatment to work against conditions that could be changed for free.",
      ],
    },
    {
      type: "faq",
      heading: "Common questions",
      faqs: [
        {
          q: "How long does a treatment visit take?",
          a: "PLACEHOLDER — requires Eco-Tick's typical visit duration by property size.",
        },
        {
          q: "Do I need to be home during the treatment?",
          a: "PLACEHOLDER — requires Eco-Tick's policy on unattended access.",
        },
        {
          q: "How soon can we use the yard afterwards?",
          a: "Re-entry timing is set by the product label, and your technician will confirm what applies to your treatment before leaving.",
        },
        {
          q: "Is the whole property sprayed?",
          a: "No. Treatment is applied to the habitat zones identified during the assessment. Open, sunlit lawn is generally not treated, because it is poor tick habitat to begin with.",
        },
      ],
    },
  ],
};
