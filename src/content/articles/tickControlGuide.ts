import type { Article } from "@/content/types";

/**
 * The pillar page. Brief section 18 targets 4,000-6,000 words, but section 31
 * forbids filler, and the two pull against each other. This is written to the
 * length the material actually supports and will grow as Eco-Tick supplies
 * product specifics and local data, rather than being padded to hit a count.
 *
 * REVIEW REQUIRED before publication:
 *   - The Lyme disease section should be reviewed by a qualified clinician or
 *     public health source. It is written as education, makes no prevention
 *     claim, and directs readers to health authorities.
 *   - Every reference below needs its exact URL verified by hand.
 */
export const tickControlGuide: Article = {
  slug: "tick-control-guide",
  path: "/tick-control-guide",
  kind: "guide",
  h1: "The Ontario Tick Control Guide",
  excerpt:
    "Everything a property owner in Ontario needs to know about ticks: which species matter, when they are active, where they live on a property, what reduces their numbers, and where professional treatment fits.",
  metaTitle: "The Ontario Tick Control Guide",
  metaDescription:
    "A complete guide to ticks on Ontario properties: species, life cycle, season, habitat, prevention, landscaping, pets, Lyme disease and professional treatment.",
  publishedAt: "2026-04-20",
  author: "The Eco-Tick team",
  takeaways: [
    "Two tick species matter for most Ontario properties, and only one is the Lyme vector.",
    "Activity runs from roughly March to November, with peaks in spring and fall.",
    "Most tick pressure on a property sits in a small fraction of its area: shaded, humid margins.",
    "Habitat management, personal checks and treatment each do something the others do not.",
  ],
  related: [
    { label: "When is tick season in Ontario?", href: "/tick-season" },
    { label: "How to prevent ticks in your yard", href: "/tick-prevention" },
    { label: "How professional tick spraying works", href: "/blog/how-professional-tick-spraying-works" },
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "Commercial tick control", href: "/commercial-tick-control" },
    { label: "Large-property tick control", href: "/large-property-tick-control" },
  ],
  references: [
    {
      label: "Public Health Ontario",
      note: "Ontario tick surveillance, blacklegged tick distribution and estimated risk areas. Verify the current page URL and publication year.",
    },
    {
      label: "Government of Canada",
      note: "National Lyme disease surveillance and tick risk area maps. Verify the current page URL.",
    },
    {
      label: "US Centers for Disease Control and Prevention",
      note: "Blacklegged tick life cycle, habitat modification guidance and the dryer-heat recommendation. Verify applicability to Ontario before citing.",
    },
    {
      label: "eTick / Public health tick identification services",
      note: "Photo-based tick identification. Confirm which service is currently operating in Ontario and whether it is free.",
    },
  ],
  blocks: [
    {
      type: "prose",
      heading: "What ticks are, and which ones matter here",
      body: [
        "Ticks are arachnids, not insects. They are more closely related to spiders and mites than to mosquitoes, which explains a great deal about their behaviour: eight legs as adults, no wings, no ability to jump, and a slow life cycle measured in years rather than weeks.",
        "Dozens of tick species exist in Canada, but for most Ontario property owners the practical list is short. The blacklegged tick, sometimes called the deer tick, is the species associated with Lyme disease transmission in this province, and it is the reason most people start looking into tick control at all. The American dog tick is also widespread across Ontario, is noticeably larger, and is not considered a Lyme vector.",
        "That distinction is worth internalising early, because it changes how you should react to finding one. Not every tick is a blacklegged tick, and not every blacklegged tick is carrying anything. Identification matters, which is why photo-based identification services exist and are worth using.",
      ],
    },
    {
      type: "table",
      heading: "The two species most Ontario properties encounter",
      columns: ["", "Blacklegged tick", "American dog tick"],
      rows: [
        [
          "Adult size",
          "Roughly sesame-seed sized, smaller than most people expect",
          "Noticeably larger, closer to an apple seed",
        ],
        [
          "Appearance",
          "Dark legs and dark shield, reddish-brown body in females",
          "Brown with distinctive pale or mottled markings on the shield",
        ],
        [
          "Lyme vector",
          "Yes, this is the species of concern in Ontario",
          "No",
        ],
        [
          "Peak activity",
          "Spring and fall for adults, summer for nymphs",
          "Spring into early summer",
        ],
        [
          "Preferred habitat",
          "Wooded areas, woodland edges, leaf litter",
          "More tolerant of open grassland and trail edges",
        ],
      ],
    },
    {
      type: "prose",
      heading: "The blacklegged tick life cycle",
      body: [
        "A blacklegged tick moves through four stages across roughly two years: egg, larva, nymph, adult. It takes a single blood meal at each of the three active stages, and between meals it does nothing but wait.",
        "Larvae hatch in late summer. They are extremely small and, importantly, are generally not carrying pathogens when they emerge, because they have not fed on anything yet. A larva acquires whatever its first host is carrying, which is usually a small mammal such as a mouse.",
        "The following spring and summer, those larvae have moulted into nymphs. This is the stage that matters most from a human perspective, and not because nymphs are more dangerous individually. It is because a nymph is about the size of a poppy seed and peaks in activity precisely when people are outdoors in shorts. A nymph attached behind a knee is genuinely easy to miss for days.",
        "By fall, surviving nymphs have moulted into adults. Adults quest through autumn, overwinter in leaf litter if they have not fed, and resume in spring. Adults are larger and easier to find, which makes them less likely to go unnoticed despite being the stage most likely to be carrying something.",
      ],
    },
    {
      type: "prose",
      heading: "When ticks are active in Ontario",
      body: [
        "The single most useful correction to make is that tick season is not summer. It is roughly March through November, and the driver is temperature rather than calendar date. Adults will quest whenever the air is above approximately 4°C and the ground is not under snow.",
        "This produces a two-peak pattern. Adults peak in spring as they resume from overwintering, and again in fall as the year's nymphs mature. Nymphs fill the middle, peaking from late spring through summer. The result is that there is no month between March and November where a property owner in a risk area can reasonably assume ticks are absent.",
        "The fall peak is the one that catches households out. By late September the mental link between ticks and summer has faded, but the ticks have not. A dog running a treeline in October is doing exactly what it was doing in May, into a population that is just as active.",
      ],
    },
    {
      type: "prose",
      heading: "Where ticks live on a property",
      body: [
        "Ticks dehydrate. That one fact explains most of their distribution, and it is the reason tick pressure on a typical property is concentrated rather than spread evenly.",
        "A tick sitting in open sun on short, mown lawn is losing moisture it cannot easily replace. It has no shade, nothing to climb, and no litter layer to retreat into. The middle of a maintained lawn is one of the least likely places on a property to encounter one.",
        "What ticks need is the opposite: humidity, shade, and vegetation to climb so they can quest. That combination lives at the margins. The leaf litter banked under a hedge. The strip of long grass behind the shed that the mower never quite reaches. The first several metres of woodland past the property line. Dense ground cover in a shaded bed. Stone walls and woodpiles, which shelter the small mammals that carry immature ticks.",
        "The practical consequence is that a property owner asking how to make an entire property tick-free is asking the wrong question. The better question is which specific zones provide humidity, shade and structure, and what can be changed about them.",
      ],
    },
    {
      type: "list",
      heading: "The zones worth checking first",
      intro:
        "In rough order of likelihood. These are also the zones a technician looks at during an assessment.",
      columns: 2,
      items: [
        "The transition where lawn meets woodland or field",
        "Leaf litter, particularly overwintered accumulation",
        "Unmown grass along fences, sheds and boundaries",
        "Shaded ornamental beds and dense ground cover",
        "Stone walls, rock piles and retaining walls",
        "Woodpiles, especially those stacked in shade",
        "Beneath bird feeders, which concentrate rodents",
        "Overgrown shrub borders and low hedge interiors",
        "Paths cut through longer vegetation",
        "Damp, shaded ground that stays humid at midday",
      ],
    },
    {
      type: "prose",
      heading: "How ticks arrive in the first place",
      body: [
        "Ticks do not travel far under their own power. A questing tick moves metres in its lifetime, not kilometres. Everything else is transport.",
        "Deer are the host most associated with adult blacklegged ticks and are a significant factor in how populations spread across a landscape. But the more relevant hosts for a residential property are often smaller: mice, voles, chipmunks, squirrels and ground-feeding birds, which are the primary hosts for larvae and nymphs.",
        "This is why woodpiles and bird feeders matter more than people expect. A woodpile stacked against the back of the house is rodent habitat placed directly against the area the family uses most. Moving it thirty metres away and into the sun removes the shelter and relocates the associated tick pressure at the same time.",
        "Pets are the other significant vector, and the one that brings ticks indoors. A dog that patrols the treeline twice a day is sampling exactly the habitat ticks prefer, then carrying the results into the house.",
      ],
    },
    {
      type: "checklist",
      heading: "Landscaping changes that reduce tick habitat",
      intro:
        "Roughly ordered by value for effort. None of these eliminates ticks, and together they will not make a property tick-free. What they do is make it materially less hospitable, for free.",
      items: [
        "Mow regularly and keep grass short, especially along edges and fence lines",
        "Clear leaf litter from beds, fence lines and anywhere near used areas",
        "Create a defined transition of wood chips or gravel, around a metre wide, where lawn meets woodland",
        "Move woodpiles away from the house, stack them off the ground and in sun",
        "Relocate bird feeders away from seating and play areas, or remove them in peak season",
        "Trim shrubs and low branches so sunlight reaches the ground",
        "Site play equipment, seating and sandboxes in full sun, away from edges",
        "Keep paths through longer vegetation wide and mown",
        "Discourage deer where practical, through fencing or planting choices",
        "Clear the base of stone walls and retaining walls",
      ],
    },
    {
      type: "prose",
      heading: "Tick checks and personal precautions",
      body: [
        "Habitat management reduces the population. Personal precautions handle what remains, and they are the single most reliable protection available to a household because they cost nothing and work regardless of what is happening on the property.",
        "Check after any time spent in longer vegetation or wooded areas, paying attention to the places a small tick can go unnoticed: behind and around the ears, along the hairline, the back of the neck, under the arms, the waistband, the groin, and behind the knees. Children should be checked by an adult rather than asked to check themselves.",
        "Showering reasonably soon after coming in helps, both because it washes off unattached ticks and because it prompts a check. Outdoor clothing put through a tumble dryer on high heat will kill ticks on dry fabric, which is a more reliable step than washing.",
        "If you find an attached tick, remove it promptly with fine-tipped tweezers. Grasp as close to the skin as possible, pull straight upward with steady pressure, and avoid twisting or crushing the body. Clean the area afterwards, note the date, and keep the tick if you can.",
      ],
    },
    {
      type: "prose",
      heading: "Pets",
      body: [
        "Dogs are both at risk themselves and the most common route by which ticks enter a house. Check after every walk in longer vegetation, paying attention to ears, the neck and collar area, under the front legs, the groin and between the toes.",
        "Tick preventatives for dogs are a veterinary question, not one for a pest control company. Products vary in what they cover and how they work, and the right choice depends on the animal. Speak to your veterinarian, particularly if you are in an established risk area.",
        "Cats that go outdoors carry ticks too, and are frequently harder to check thoroughly. Some products that are safe for dogs are dangerous for cats, which is another reason this belongs with your vet rather than with general advice.",
      ],
    },
    {
      type: "prose",
      heading: "Lyme disease and tick-borne illness",
      body: [
        "Lyme disease is the tick-borne illness most people in Ontario have heard of. It is transmitted by blacklegged ticks, not by dog ticks, and not every blacklegged tick carries it. Transmission risk is also related to how long a tick has been attached, which is the practical reason prompt removal matters.",
        "Reported symptoms can include an expanding rash, fever, headache, fatigue and joint or muscle pain, though presentation varies considerably and a rash is not always present. Blacklegged ticks in Ontario can also carry other pathogens beyond the Lyme bacterium.",
        "We are a pest control company, not a medical provider, and this section is education rather than advice. If you have been bitten, develop symptoms, or are uncertain, contact a health care provider or your local public health unit and tell them about the bite and the date. Public Health Ontario and the Government of Canada publish current risk-area information, which is more useful for your specific address than any general statement we could make.",
        "One thing we will not claim, here or anywhere on this site, is that treating a property prevents Lyme disease. Reducing tick pressure in the areas you use is a real and worthwhile outcome. Disease prevention is a medical claim, and not one a treatment programme is in a position to make.",
      ],
    },
    {
      type: "table",
      heading: "DIY, landscaping and professional treatment compared",
      intro:
        "The honest version. These are complements, not competitors, and the right answer for most properties involves more than one of them.",
      columns: ["Approach", "What it does well", "Where it stops"],
      rows: [
        [
          "Habitat management",
          "Removes the conditions ticks need. Costs nothing but labour and is the cheapest intervention available.",
          "Only covers your own land, and has a ceiling on wooded or waterfront properties where the surrounding habitat is not yours.",
        ],
        [
          "Personal checks and repellent",
          "The most reliable protection for the individual. Works regardless of property conditions.",
          "Does nothing to the population living on the property, and depends on being done consistently.",
        ],
        [
          "Retail hose-end products",
          "Low cost per application, immediately available.",
          "Coverage tends to be uneven, applied to open lawn where ticks are least likely, and usually mistimed relative to the life cycle.",
        ],
        [
          "Professional treatment",
          "Placement informed by an assessment, equipment that reaches the litter layer, scheduling across the season.",
          "Higher cost per visit, and it does not eliminate a population that is continually resupplied from surrounding land.",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Natural and garlic-based treatment",
      body: [
        "Garlic-based formulations are a recognised category within outdoor pest management, and they are the basis of Eco-Tick's programmes. Interest in them generally comes from property owners who want treatment but would prefer a natural-oriented approach over a conventional broad-spectrum product.",
        "The specifics of what is applied, at what rate, how long it lasts and under what conditions belong on the product page rather than in a general guide, because they come from the product label rather than from anything we should be paraphrasing. Our natural solution page carries that detail.",
        "What is worth saying here is a caution that applies to any treatment, natural or otherwise: be sceptical of anyone describing an outdoor pest product as completely safe, non-toxic or guaranteed. Products applied to control pests have labels, and those labels have directions and precautions for a reason.",
      ],
    },
    {
      type: "prose",
      heading: "Why programmes are seasonal rather than single visits",
      body: [
        "If tick pressure were confined to a single month, one well-timed treatment would be a defensible strategy. Because activity has two adult peaks separated by a nymph peak, a single visit necessarily leaves most of the season unaddressed.",
        "A seasonal programme starts in early spring, targeting the first adult peak before it produces the next generation. It continues through the summer nymph period, when outdoor use is highest and the ticks are hardest to spot. It finishes in fall, covering the peak most households have stopped thinking about.",
        "This is also why timing matters more than most property owners assume. A treatment applied in July to a property where the spring peak went unaddressed is doing catch-up work.",
      ],
    },
    {
      type: "prose",
      heading: "Different properties, different problems",
      body: [
        "A suburban lot with a fenced lawn and one hedge line has a small, well-defined tick problem. The zones are obvious, the treatment area is modest, and habitat management is straightforward.",
        "A cottage or rural property changes all three variables. There is far more woodland edge relative to open space, the surrounding habitat is outside anyone's control, and the property is often used in concentrated bursts rather than continuously. Scheduling around occupancy matters more here than anywhere else.",
        "A commercial property adds the complication that the person paying is not the person walking the grounds. Coverage has to reach where guests actually go, timing has to work around trading, and the work needs to be documented so it can be reported internally.",
        "A large property makes the zoning question dominant. On forty acres, deciding what to treat matters far more than the treatment itself: used zones get priority, transition zones carry most of the pressure, and interior woodland is generally left alone. Treating all of it identically wastes money on land nobody walks and under-serves the margins people brush past daily.",
      ],
    },
    {
      type: "faq",
      heading: "Frequently asked questions",
      faqs: [
        {
          q: "Do ticks live in grass?",
          a: "In long grass, yes. Short, sunlit, mown lawn is poor tick habitat because it offers no humidity or shade. Pressure concentrates at edges and margins rather than in the middle of a maintained lawn.",
        },
        {
          q: "Do ticks drop out of trees?",
          a: "No. This is one of the most persistent tick myths. Ticks climb low vegetation and wait with their front legs extended, a behaviour called questing. A tick found on a scalp almost certainly climbed there.",
        },
        {
          q: "Do ticks survive the Ontario winter?",
          a: "Yes. Blacklegged ticks overwinter in leaf litter beneath snow cover rather than dying off. A mild winter does not clear a population, and a winter thaw can produce active adults.",
        },
        {
          q: "Can ticks live inside a house?",
          a: "Blacklegged ticks need high humidity and do not establish indoors the way some household pests do. They can be carried in on people or pets and can survive for a period, which is why checking pets and tumble-drying outdoor clothing matters.",
        },
        {
          q: "How long does a tick need to be attached to transmit Lyme disease?",
          a: "Transmission risk is understood to increase with attachment time, which is why prompt removal is emphasised. For guidance specific to your situation, contact a health care provider or your local public health unit rather than relying on a general figure.",
        },
        {
          q: "Are ticks worse in some parts of Ontario than others?",
          a: "Yes. Blacklegged tick distribution is not uniform and has been expanding. Public Health Ontario publishes current estimated risk areas, which is a better guide for a specific address than any general statement.",
        },
        {
          q: "Will professional treatment make my property tick-free?",
          a: "No, and anyone promising that is overselling. Ticks arrive on hosts crossing property lines, so any property near woodland, field or an untreated neighbour is continually resupplied. Treatment reduces pressure in the areas you use; checks and habitat work handle the rest.",
        },
        {
          q: "When should I start treatment for the season?",
          a: "Generally early spring, before the first adult peak has run its course. Waiting until ticks have been noticed usually means waiting until after that peak.",
        },
      ],
    },
  ],
};
