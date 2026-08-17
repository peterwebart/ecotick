import type { Article } from "@/content/types";

export const tickPrevention: Article = {
  slug: "tick-prevention",
  path: "/tick-prevention",
  kind: "guide",
  h1: "How to Prevent Ticks in Your Yard",
  excerpt:
    "Most tick pressure on a residential property sits in a small fraction of its area. Changing the conditions in those zones is the highest-value thing a homeowner can do, and much of it costs nothing.",
  metaTitle: "How to Prevent Ticks in Your Yard",
  metaDescription:
    "Practical landscaping and habit changes that reduce tick pressure on a residential property in Ontario, plus what to do when you find one.",
  publishedAt: "2026-03-16",
  author: "The Eco-Tick team",
  takeaways: [
    "Ticks need humidity and shade. Sunlit, mown lawn is hostile to them.",
    "The treeline transition is where most yard tick pressure lives.",
    "Woodpiles and bird feeders attract the rodents that carry ticks.",
    "Habitat management and treatment work together; neither replaces the other.",
  ],
  related: [
    { label: "When is tick season in Ontario?", href: "/tick-season" },
    { label: "How professional tick spraying works", href: "/blog/how-professional-tick-spraying-works" },
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "All resources", href: "/resources" },
  ],
  references: [
    {
      label: "US Centers for Disease Control and Prevention",
      note: "Tick habitat modification, yard guidance and clothing dryer recommendations.",
    },
    {
      label: "Public Health Ontario",
      note: "Tick removal guidance and Ontario risk areas.",
    },
  ],
  blocks: [
    {
      type: "prose",
      heading: "Start with where they actually are",
      body: [
        "Ticks dry out. That single physiological fact explains most of what follows. A tick sitting in open sun on a mown lawn is losing moisture it cannot easily replace, which is why the middle of a maintained lawn is one of the least likely places on a property to encounter one.",
        "What ticks need is humidity, shade and something to climb. That combination lives at the margins: leaf litter under a hedge, the long grass behind the shed, the first few metres of woodland past the property line, dense ground cover in a shaded bed.",
        "So the useful question is not how to make a whole property tick-free. It is which specific zones on this property provide that combination, and what can be changed about them.",
      ],
    },
    {
      type: "checklist",
      heading: "Landscaping changes that reduce habitat",
      intro:
        "Roughly in order of value for effort. None of these eliminates ticks, but together they make a property meaningfully less hospitable.",
      items: [
        "Mow regularly and keep grass short, particularly along edges and fence lines",
        "Clear leaf litter, especially the accumulation left over winter",
        "Create a defined transition of wood chips or gravel, around a metre wide, where lawn meets woods",
        "Move woodpiles away from the house and stack them off the ground in the sun",
        "Relocate bird feeders away from seating and play areas, or remove them during peak season",
        "Trim shrubs and low branches to let sunlight reach the ground",
        "Site play equipment, seating and sandboxes in full sun, away from the woodland edge",
        "Keep paths through longer vegetation wide and mown",
        "Discourage deer where practical, through fencing or planting choices",
      ],
    },
    {
      type: "prose",
      heading: "Why woodpiles and bird feeders matter",
      body: [
        "This one surprises people, so it is worth spelling out. Ticks do not generate themselves. They arrive on hosts, and the small mammals that shelter in woodpiles, stone walls and beneath bird feeders are among the most significant hosts for immature ticks.",
        "A woodpile stacked against the back of the house is a rodent habitat placed directly against the area your family uses most. Moving it thirty metres away and into the sun does two things at once: it removes the shelter, and it moves the associated tick pressure away from where you sit.",
      ],
    },
    {
      type: "list",
      heading: "Habits that reduce exposure",
      intro:
        "Habitat work reduces the population. These reduce your contact with what remains.",
      items: [
        "Check yourself, children and pets after time in the yard, particularly around ears, hairline, waistband, armpits and behind knees",
        "Shower reasonably soon after coming in from long grass or wooded areas",
        "Tumble dry outdoor clothing on high heat, which kills ticks on dry fabric",
        "Wear light-coloured clothing so ticks are easier to spot",
        "Tuck trousers into socks when working along edges or in tall grass",
        "Use an appropriate insect repellent according to its label",
        "Talk to your veterinarian about tick preventatives for dogs",
        "Keep to the middle of mown paths rather than brushing vegetation",
      ],
    },
    {
      type: "prose",
      heading: "If you find an attached tick",
      body: [
        "Remove it promptly with fine-tipped tweezers. Grasp as close to the skin as you can, pull straight upward with steady pressure, and avoid twisting or crushing the body. Clean the area afterwards.",
        "Note the date and, if you can, keep the tick. If you develop a rash, fever, headache, fatigue or joint pain in the weeks that follow, contact a health care provider and tell them about the bite and the date. We are not clinicians and this is not medical advice; your health care provider or your local public health unit is the right source for anything beyond removal.",
      ],
    },
    {
      type: "nabc",
      need: "A property with the right conditions will hold ticks year after year, and the zones they favour are frequently the ones a household most wants to use.",
      approach:
        "Habitat management reduces the conditions ticks need. Targeted seasonal treatment addresses the population in the zones you use. The two are complementary.",
      benefits: [
        "Less suitable habitat in the areas you occupy",
        "Reduced contact through better paths and siting",
        "Treatment focused where it does the most work",
        "Coverage across both the spring and fall adult peaks",
      ],
      alternatives: [
        {
          label: "Habitat management alone",
          body: "Genuinely effective and the cheapest intervention available. It has a ceiling, particularly on wooded or waterfront properties where the surrounding habitat is outside your control.",
        },
        {
          label: "Treatment alone",
          body: "Addresses the population without changing the conditions that keep drawing it back. It works, but it works harder than it needs to on a property where the leaf litter has never been cleared.",
        },
      ],
    },
    {
      type: "faq",
      heading: "Common questions",
      faqs: [
        {
          q: "Do ticks live in mown grass?",
          a: "They can cross it, but short, sunlit lawn is poor tick habitat because it offers no humidity or shade. Pressure concentrates at the edges, not the middle.",
        },
        {
          q: "Can my dog bring ticks into the house?",
          a: "Yes, and this is one of the more common routes indoors. Dogs range through exactly the edge habitat ticks prefer. Check your dog when it comes in, paying attention to ears, neck, armpits and between the toes.",
        },
        {
          q: "Does a wood-chip barrier actually work?",
          a: "A dry, defined transition between lawn and woodland is a long-standing public health recommendation. It reduces tick movement into the maintained area and, just as usefully, marks a visible line so people know when they are entering higher-risk ground.",
        },
        {
          q: "Should I remove all the leaf litter on my property?",
          a: "Focus on the areas you use and their margins. Leaf litter in interior woodland has ecological value and is unlikely to be worth clearing; leaf litter banked against the patio is a different matter.",
        },
      ],
    },
  ],
};
