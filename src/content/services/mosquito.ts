import type { ServicePage } from "@/content/types";

export const mosquitoControl: ServicePage = {
  slug: "mosquito-control",
  audience: "general",
  h1: "Mosquito Control for Ontario Properties",
  answer:
    "Mosquito control on a property works on two fronts: reducing the standing water where mosquitoes breed, and treating the shaded resting areas where adults shelter during the day. Eco-Tick assesses both, then treats the resting habitat with a garlic-based solution across the season.",
  metaTitle: "Mosquito Control for Homes & Businesses",
  metaDescription:
    "Professional mosquito control for Ontario yards, cottages and commercial properties. Breeding-site reduction plus targeted treatment of adult resting areas.",
  ctaHeading: "Get the property assessed.",
  ctaBody: "Mosquito pressure is very site-specific. A walk-through tells us where yours comes from.",
  ctaLabel: "Get your free quote",
  related: [
    { label: "Tick & mosquito programmes", href: "/tick-mosquito-control" },
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "Commercial tick control", href: "/commercial-tick-control" },
    { label: "Our natural garlic-based solution", href: "/natural-garlic-spray" },
  ],
  blocks: [
    {
      type: "prose",
      heading: "Where mosquitoes actually come from",
      body: [
        "Most mosquitoes on a property did not travel far to get there. Many common species breed within a short distance of where they emerge, which means the water producing your mosquito problem is frequently on your own land or immediately next to it.",
        "The amount of water required is smaller than people expect. A saucer under a plant pot, a clogged eavestrough, a tarp with a fold in it, a wheelbarrow left out after rain, a tyre swing, a bird bath that has not been emptied in a fortnight. Each of these is capable of producing mosquitoes.",
        "Adults then spend the heat of the day resting somewhere shaded and humid: under decks, in dense shrubs, in tall grass, beneath overhanging vegetation. That resting habitat is what treatment targets, because that is where the adults are when they are not biting you.",
      ],
    },
    {
      type: "checklist",
      heading: "Breeding sites worth eliminating first",
      intro:
        "This costs nothing and is genuinely the highest-value mosquito intervention available on most properties. We will point these out during the assessment, but you do not need us to start.",
      items: [
        "Empty and refill bird baths weekly",
        "Clear eavestroughs and check for pooling at downpipes",
        "Turn over or store wheelbarrows, buckets, bins and toys",
        "Drain saucers under plant pots after rain",
        "Check tarps, covers and boat covers for folds holding water",
        "Remove or drill drainage holes in old tyres",
        "Fix low spots in the lawn that hold water for more than a few days",
        "Keep pool covers taut and drained, and pools circulating",
        "Check tree hollows and blocked drains",
      ],
    },
    {
      type: "list",
      heading: "Where adults rest during the day",
      intro: "These are the zones treatment focuses on.",
      columns: 2,
      items: [
        "Under decks and porches",
        "Dense shrub and hedge interiors",
        "Tall grass and unmown margins",
        "Shaded ornamental beds",
        "Beneath overhanging trees",
        "Along fence lines and behind outbuildings",
        "Woodland edges near seating areas",
        "Damp, shaded ground cover",
      ],
    },
    {
      type: "prose",
      heading: "Waterfront and cottage properties",
      body: [
        "Properties on water present an obvious complication: the largest body of standing water nearby cannot be drained, and treatment near a shoreline carries buffer requirements set by the product label and applicable regulation.",
        "In practice this shifts the emphasis. Treatment concentrates on the resting habitat around the used areas of the property, the deck, the fire pit, the path to the dock, while shoreline buffers are respected. Habitat work matters more here, not less, and so does timing applications around when the property is occupied.",
      ],
    },
    {
      type: "nabc",
      need: "Mosquito pressure decides whether an outdoor space gets used at the exact times people most want to use it, which is early evening on still summer nights. For a business with a patio or a campground, that translates directly into revenue.",
      approach:
        "An assessment covering both breeding sites and adult resting habitat, followed by targeted seasonal treatment of the resting zones with a garlic-based solution.",
      benefits: [
        "Breeding-site reduction identified specifically for your property",
        "Treatment focused on adult resting habitat, not open air",
        "Applications scheduled across the season",
        "Buffers around water agreed in advance",
        "A natural-oriented approach",
      ],
      alternatives: [
        {
          label: "Source reduction alone",
          body: "Eliminating standing water is the single most effective mosquito measure available and costs nothing. Its limit is that it only covers your own property, and mosquitoes from a neighbouring ditch do not respect the boundary.",
        },
        {
          label: "Traps and zappers",
          body: "Effectiveness varies widely by device and species. Light-based zappers in particular kill large numbers of non-target insects while catching relatively few mosquitoes.",
        },
        {
          label: "Personal repellent alone",
          body: "Effective for the person wearing it, according to the product label, and worth using regardless. It does nothing about the population on the property.",
        },
      ],
    },
    {
      type: "faq",
      heading: "Mosquito control FAQs",
      faqs: [
        {
          q: "How long does mosquito treatment last?",
          a: "Weeks per application. Programmes run on a four-to-six week cycle across the active season.",
        },
        {
          q: "Can you treat near a lake or river?",
          a: "Treatment near water follows buffer distances set by the product label and applicable regulation. These are identified during the assessment and recorded before any application.",
        },
        {
          q: "Will this get rid of every mosquito?",
          a: "No. Mosquitoes fly in from surrounding land, so a property is continually resupplied. The goal is reducing pressure in the areas you use during the hours you use them.",
        },
        {
          q: "Do you treat for mosquitoes and ticks at the same time?",
          a: "Yes. Most properties with both problems are better served by a combined seasonal programme than by two separate schedules.",
        },
      ],
    },
  ],
};

export const tickMosquito: ServicePage = {
  slug: "tick-mosquito-control",
  audience: "general",
  h1: "Professional Tick & Mosquito Control Services",
  answer:
    "A combined tick and mosquito programme treats both pests on one seasonal schedule. Because the two occupy overlapping habitat, shaded margins, tall grass and dense vegetation, most properties with one problem have the other, and a single programme covers both more efficiently than two.",
  metaTitle: "Tick & Mosquito Control Programmes",
  metaDescription:
    "Combined seasonal tick and mosquito control for Ontario homes, cottages, businesses and large properties. One assessment, one schedule, both pests.",
  ctaHeading: "One programme, both pests.",
  ctaBody: "Tell us about the property and we will scope a combined seasonal plan.",
  ctaLabel: "Get your free quote",
  related: [
    { label: "Mosquito control", href: "/mosquito-control" },
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "Commercial tick control", href: "/commercial-tick-control" },
    { label: "Large-property tick control", href: "/large-property-tick-control" },
  ],
  blocks: [
    {
      type: "prose",
      heading: "Why they go together",
      body: [
        "Ticks and mosquitoes are different animals with different life cycles, but they want similar things from a property: shade, humidity and vegetation to shelter in. The strip of dense shrub along a fence line is prime tick questing habitat and prime mosquito resting habitat at the same time.",
        "That overlap is why combined programmes make sense. The assessment covers the same ground either way. The treatment zones largely coincide. Running two separate schedules means paying twice for a site walk that only needed doing once.",
        "Where they differ is timing. Tick activity peaks in spring and again in fall; mosquito pressure peaks in midsummer. A combined programme is built around both curves rather than averaging them.",
      ],
    },
    {
      type: "table",
      heading: "Which programme fits your situation",
      columns: ["If this is your situation", "What generally fits"],
      rows: [
        [
          "Ticks are the concern, wooded or rural property",
          "Tick-focused programme weighted toward the spring and fall adult peaks",
        ],
        [
          "Mosquitoes are the concern, waterfront or low-lying land",
          "Mosquito-focused programme weighted to midsummer, with breeding-site reduction",
        ],
        [
          "Both, and the property gets used all season",
          "Combined seasonal programme covering spring through fall",
        ],
        [
          "Commercial site with guests or customers outdoors",
          "Combined programme scheduled around your operating calendar",
        ],
        [
          "Acreage where usage is concentrated in a few areas",
          "Zoned combined programme, treatment frequency varied by zone",
        ],
        [
          "Not sure yet",
          "Start with an assessment; the property usually answers the question",
        ],
      ],
    },
    {
      type: "steps",
      heading: "How a combined season runs",
      steps: [
        {
          n: "01",
          title: "Early spring",
          body: "Treatment weighted toward tick habitat, targeting the first adult peak before it produces the next generation.",
        },
        {
          n: "02",
          title: "Late spring into summer",
          body: "Emphasis shifts as nymph activity rises and mosquito pressure builds. Breeding-site issues identified in the assessment should be resolved by this point.",
        },
        {
          n: "03",
          title: "Midsummer",
          body: "Peak mosquito coverage across resting habitat around the areas of the property actually in use.",
        },
        {
          n: "04",
          title: "Fall",
          body: "Weighting returns to ticks for the second adult peak, which is the one most households forget about.",
        },
      ],
    },
    {
      type: "faq",
      heading: "Combined programme FAQs",
      faqs: [
        {
          q: "Is a combined programme cheaper than two separate ones?",
          a: "A combined programme is one assessment and one schedule rather than two, so it works out better than buying the services separately. Ask for a quote on the property and we will price both ways.",
        },
        {
          q: "Can I start with one and add the other later?",
          a: "Yes. Plenty of customers start with ticks and add mosquito coverage once they see how much outdoor time they are getting back.",
        },
        {
          q: "Are the treatment areas the same for both?",
          a: "Largely, but not entirely. Tick treatment concentrates on questing habitat along edges and in leaf litter, while mosquito treatment targets shaded adult resting areas such as under decks and inside dense shrubs. The zones overlap substantially on most properties.",
        },
        {
          q: "How many visits does a season involve?",
          a: "A full season on a four-to-six week cycle generally works out to four or five visits from spring through fall, depending on when you start and how the season runs.",
        },
      ],
    },
  ],
};
