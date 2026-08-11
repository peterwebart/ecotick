import type { ServicePage } from "@/content/types";

export const largeProperty: ServicePage = {
  slug: "large-property-tick-control",
  audience: "large-property",
  h1: "Large-Property Tick & Mosquito Control",
  answer:
    "Large-property tick and mosquito control treats acreage by zone rather than uniformly. Because treating a hundred acres end to end is neither practical nor useful, Eco-Tick maps a large site into used, transitional and untouched areas, and concentrates treatment where people actually are.",
  metaTitle: "Large-Property Tick & Mosquito Control",
  metaDescription:
    "Zone-based tick and mosquito programmes for farms, estates, parks, sports fields, municipal grounds and corporate campuses across Ontario.",
  ctaHeading: "Tell us about the property.",
  ctaBody:
    "Acreage, usage and current conditions. We will design a zoned programme and quote it.",
  ctaLabel: "Request a large-property assessment",
  related: [
    { label: "Commercial tick control", href: "/commercial-tick-control" },
    { label: "Our natural garlic-based solution", href: "/natural-garlic-spray" },
    { label: "Safety & environment", href: "/safety-environment" },
    { label: "Residential tick control", href: "/residential-tick-control" },
  ],
  blocks: [
    {
      type: "list",
      heading: "Property types",
      items: [
        "Farms and agricultural properties",
        "Large private estates",
        "Public parks and green space",
        "Sports fields and athletic complexes",
        "Corporate campuses",
        "Municipal grounds",
        "Industrial sites with outdoor working areas",
        "Recreational and tourism properties",
      ],
    },
    {
      type: "prose",
      heading: "Why acreage changes the approach",
      body: [
        "On a quarter-acre lot, the difference between treating the habitat zones and treating everything is small enough that the distinction barely matters. At forty acres it is the entire question.",
        "Large properties are almost never uniformly used. A corporate campus might have three hundred metres of walking trail, two outdoor seating areas and a great deal of land that nobody sets foot on from one year to the next. A sports complex has fields, spectator areas and margins, each with different pressure and different consequences if pressure goes unmanaged. Treating all of it identically wastes money on the parts nobody uses and under-serves the parts they do.",
        "So the first job on a large property is not treatment. It is deciding what to treat, and being honest about what should be left alone.",
      ],
    },
    {
      type: "steps",
      heading: "Zoning a large property",
      intro:
        "Every large-property programme starts by dividing the site into three categories.",
      steps: [
        {
          n: "01",
          title: "Used zones",
          body: "Where people are: seating areas, trails, fields, entrances, work areas, gathering points and the ground immediately around buildings. These get priority and the highest treatment frequency.",
        },
        {
          n: "02",
          title: "Transition zones",
          body: "The margins between used areas and everything else. Treelines, field edges, drainage corridors and the strip of vegetation people brush past on the way somewhere. This is where most tick pressure on a large site actually lives, and it is the zone most often overlooked.",
        },
        {
          n: "03",
          title: "Untreated zones",
          body: "Interior woodland, unused pasture, wetland buffers and anywhere treatment would be neither useful nor appropriate. Recording these explicitly matters as much as recording the ones we do treat.",
        },
      ],
    },
    {
      type: "list",
      heading: "What a large-property programme includes",
      columns: 2,
      items: [
        "Full site walk and zone mapping",
        "Written treatment plan by zone",
        "Frequency set per zone rather than site-wide",
        "Access and equipment planning",
        "Coordination with grounds or facilities staff",
        "Documented visit records",
        "Defined exclusion and buffer areas",
        "Seasonal review against actual usage",
      ],
    },
    {
      type: "callout",
      heading: "Waterways, wells and buffers",
      body: "Large properties frequently include drainage features, wells, ponds or watercourses. Buffer distances are set by the product label and applicable regulation, and are agreed and recorded before the first application rather than judged on the day.",
    },
    {
      type: "nabc",
      need: "On a large property, outdoor pest pressure concentrates exactly where the land is used, and the sheer scale makes the reflexive answer, treat everything, both unaffordable and ineffective. Facilities and grounds managers need to know which parts of the site are being covered and why.",
      approach:
        "A full site walk produces a zone map dividing the property into used, transitional and untreated areas, with treatment frequency set per zone and reviewed across the season.",
      benefits: [
        "Budget concentrated where people actually are",
        "Explicit, written record of what is and is not treated",
        "Frequency varied by zone rather than flattened site-wide",
        "Buffers and exclusions agreed before the first visit",
        "A natural-oriented approach",
        "Seasonal review against how the site gets used",
      ],
      alternatives: [
        {
          label: "Habitat management alone",
          body: "On acreage, mowing regimes, edge management, drainage and brush control do a great deal of work and scale better than treatment does. For many large sites this should be the first investment, with treatment layered onto the used zones.",
        },
        {
          label: "Blanket application",
          body: "Treating an entire large property uniformly is expensive, applies product where it serves no purpose, and still under-treats the transition zones that carry the most pressure.",
        },
        {
          label: "Treating only after complaints",
          body: "Reactive treatment on a large site tends to chase the last complaint rather than address where pressure builds. It also leaves nothing to show a board, a council or a head office.",
        },
      ],
    },
    {
      type: "faq",
      heading: "Large-property FAQs",
      faqs: [
        {
          q: "What size property do you consider large?",
          a: "PLACEHOLDER — requires Eco-Tick's actual acreage thresholds and where large-property pricing begins.",
        },
        {
          q: "Do you treat the entire property?",
          a: "No. Large properties are treated by zone. Interior woodland, unused land and buffer areas are deliberately left untreated, and are recorded as such in the treatment plan.",
        },
        {
          q: "How do you handle waterways, wells and drainage features?",
          a: "Buffer distances follow the product label and applicable regulation. These are identified during the site walk and recorded in the plan before any application.",
        },
        {
          q: "Can you work around a farming or grounds-maintenance schedule?",
          a: "Yes. Application timing is set during programme design against your operating calendar, whether that is cutting schedules, field bookings, harvest or public access.",
        },
        {
          q: "What equipment do you use on large sites?",
          a: "PLACEHOLDER — requires confirmation of Eco-Tick's equipment capability and maximum practical treatment area per visit.",
        },
      ],
    },
  ],
};
