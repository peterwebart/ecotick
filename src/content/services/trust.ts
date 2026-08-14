import type { ServicePage } from "@/content/types";

/**
 * Both pages are now published. Business facts below — Health Canada
 * registration, applicator licensing, insurance, the four-to-six week service
 * cycle — are stated on Eco-Tick's own authority as the operator.
 *
 * Two wordings from the supplied reference material are deliberately not used:
 * "100% Bee Safe" and "non-toxic". See CLAIMS-REGISTER.md for the substitutes
 * and the reasoning.
 */

export const garlicSolution: ServicePage = {
  slug: "natural-garlic-spray",
  audience: "general",
  h1: "Our Natural Garlic-Based Tick & Mosquito Solution",
  answer:
    "Eco-Tick treats properties with a concentrated garlic-based solution applied through truck-mounted spray equipment. Garlic's natural sulfur compounds repel ticks and mosquitoes, the treated area stays protected for weeks, and programmes run on a four-to-six week cycle through the season.",
  metaTitle: "Natural Garlic-Based Treatment",
  metaDescription:
    "How Eco-Tick's garlic-based treatment works: the super-garlic formulation, why sulfur repels ticks and mosquitoes, and how long each application lasts.",
  ctaHeading: "Want it on your property?",
  ctaBody: "Free assessment, no obligation. We will walk the ground with you.",
  ctaLabel: "Get your free quote",
  related: [
    { label: "Safety & environment", href: "/safety-environment" },
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "Commercial tick control", href: "/commercial-tick-control" },
    { label: "Customer reviews", href: "/testimonials" },
  ],
  blocks: [
    {
      type: "prose",
      heading: "Why garlic works",
      body: [
        "Insects navigate by smell to a degree that is difficult to imagine. They locate hosts, water and shelter through scent long before anything comes into view. Garlic is extraordinarily pungent in exactly the compounds insects are tuned to, and that is the whole mechanism: the treated area stops smelling like somewhere a tick or mosquito wants to be.",
        "The active part is garlic's natural sulfur. It is the same chemistry that makes chopping a clove unpleasant for you, working on an animal thousands of times more sensitive to it.",
        "None of this is new. Farmers and gardeners have used garlic preparations for generations, long before anyone sold it as a service. What has changed is the concentration and the equipment.",
      ],
    },
    {
      type: "prose",
      heading: "Super garlic, not grocery garlic",
      body: [
        "The strain in our formulation is far more potent than anything on a supermarket shelf — the lab people call it super garlic, and the difference is not marginal. A domestic kitchen bulb applied to a lawn would do very little.",
        "To people, the smell is noticeable on application and then gone. It lifts within roughly thirty to forty-five minutes. To insects, the treated vegetation stays unwelcoming for weeks.",
      ],
    },
    {
      type: "list",
      heading: "Where it goes",
      intro:
        "Treatment is applied to the vegetated areas where ticks and mosquitoes actually shelter — grassy margins, shaded borders, leaf litter, dense planting — rather than blanketed across open lawn where they were never going to survive.",
      columns: 2,
      items: [
        "Residential yards and lawn margins",
        "Treelines, hedges and shaded borders",
        "Cottage grounds and waterfront properties",
        "Parks, trails and green space",
        "Athletic fields and recreational grounds",
        "Campgrounds, cabins and tent sites",
        "Commercial grounds and hospitality patios",
        "Farms, estates and large acreage, by zone",
      ],
    },
    {
      type: "prose",
      heading: "The equipment is half the answer",
      body: [
        "Most companies doing this work carry a backpack sprayer. A backpack stops where the operator stops, which in practice means the lawn and maybe the first metre of hedge — and the first metre of hedge is not where the ticks are.",
        "Eco-Tick runs truck-mounted spray equipment: a tank, pump and hose reel built into the bed of the truck. It pushes treatment deep into treelines and woodland where the questing actually happens, and it covers acreage in a single visit rather than a dozen tank refills.",
        "The operator of the KOA campground at Ivy Lea put it more plainly than we would: it reaches deep into the forest where people can't easily go, so results show up even at cabins and tent sites well back in the trees.",
      ],
    },
    {
      type: "steps",
      heading: "How a season runs",
      steps: [
        {
          n: "01",
          title: "Assessment",
          body: "We walk the property, map where pressure concentrates, and agree which areas to treat and which to leave alone — vegetable gardens, ponds, hives, well heads.",
        },
        {
          n: "02",
          title: "First application",
          body: "Early spring where possible, ahead of the first adult tick peak, so the season starts in front of the problem rather than behind it.",
        },
        {
          n: "03",
          title: "Every four to six weeks",
          body: "Return visits across the active season. If pressure comes back sooner than scheduled, call us and we will come back between visits.",
        },
      ],
    },
    {
      type: "table",
      heading: "What to expect",
      columns: ["Question", "Answer"],
      rows: [
        ["What is the active ingredient", "Concentrated garlic — natural sulfur compounds"],
        ["How long does it last", "Weeks per application, on a four-to-six week service cycle"],
        ["How is it applied", "Truck-mounted spray equipment, targeted to vegetation"],
        ["How long does the smell last", "Roughly 30 to 45 minutes in the air"],
        ["What does it target", "Ticks and mosquitoes"],
        ["Is it registered", "Yes — registered with Health Canada"],
        ["Who applies it", "Licensed technicians"],
        ["Does rain matter", "Heavy rain soon after application can reduce coverage; tell us and we will assess"],
      ],
    },
    {
      type: "faq",
      heading: "Common questions",
      faqs: [
        {
          q: "Is this a pesticide?",
          a: "It is a registered pest control product with garlic as its active ingredient, rather than a conventional synthetic insecticide. It is registered with Health Canada and applied by licensed technicians.",
        },
        {
          q: "How long before I notice a difference?",
          a: "Customers generally report a marked drop within the first cycle. Reviews on our site describe going from finding ticks on dogs daily to occasional sightings.",
        },
        {
          q: "Will my yard smell of garlic?",
          a: "Briefly. The scent is noticeable during application and lifts within about thirty to forty-five minutes. Insects continue to detect it long after you cannot.",
        },
        {
          q: "How often do you come back?",
          a: "Every four to six weeks across the active season, and in between if pressure returns sooner.",
        },
        {
          q: "Can you reach the wooded parts of my property?",
          a: "Yes, and that is the point of the truck-mounted equipment. Reach into treelines and woodland is where a backpack sprayer runs out and where most tick pressure actually lives.",
        },
      ],
    },
  ],
};

export const safetyEnvironment: ServicePage = {
  slug: "safety-environment",
  audience: "general",
  h1: "Safety & Environment",
  answer:
    "Eco-Tick uses a garlic-based product registered with Health Canada, applied by licensed technicians who are fully insured. There are no harsh synthetic pesticides involved, and the treatment is designed for use around families and pets when applied as directed.",
  metaTitle: "Safety & Environment",
  metaDescription:
    "Eco-Tick's approach to safety: a Health Canada registered garlic-based product, licensed and insured technicians, and no harsh synthetic pesticides.",
  ctaHeading: "Questions about the treatment?",
  ctaBody: "Ask us anything. We would rather answer it now than have you wonder.",
  ctaLabel: "Get in touch",
  related: [
    { label: "Our garlic-based solution", href: "/natural-garlic-spray" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Customer reviews", href: "/testimonials" },
    { label: "Residential tick control", href: "/residential-tick-control" },
  ],
  blocks: [
    {
      type: "prose",
      heading: "Why people ask about this first",
      body: [
        "Almost every enquiry we get includes some version of the same question: what exactly are you putting on my lawn, and do I need to worry about the kids and the dog.",
        "It is the right question, and it is the reason this business exists at all. Edward started down this road in 2010 because the options available to him were products he did not want near his own family.",
      ],
    },
    {
      type: "list",
      heading: "Where we stand",
      columns: 1,
      items: [
        "The product is registered with Health Canada",
        "Applications are carried out by licensed technicians",
        "Eco-Tick is fully insured",
        "The active ingredient is garlic, not a synthetic pesticide",
        "Treatment is designed for use around families and pets when applied as directed",
        "We treat vegetation and habitat, not open play areas or hard surfaces",
        "Areas you want left alone — vegetable beds, ponds, hives, well heads — are agreed before the first visit",
      ],
    },
    {
      type: "prose",
      heading: "Children and pets",
      body: [
        "The treatment is applied to vegetation, borders and margins rather than to the middle of a lawn where children play. Your technician will tell you when the treated areas are ready to use again before leaving the property.",
        "Worth saying plainly, because it matters more than anything on this page: dogs are the most common way ticks get from a yard into a house. A dog that patrols the treeline is sampling exactly the habitat ticks prefer. Treatment reduces what is out there; checking your dog when it comes in handles what gets through. Talk to your vet about preventatives too.",
      ],
    },
    {
      type: "prose",
      heading: "Pollinators and waterways",
      body: [
        "Bees and other pollinators are working the flowers, not the shaded leaf litter and grassy margins where ticks quest, so the areas we target and the areas pollinators use largely do not overlap. If you keep hives, tell us at the assessment and we will map them as exclusion zones.",
        "The same applies to ponds, wells, drainage features and shoreline. Buffers get agreed and recorded before the first application rather than judged on the day.",
      ],
    },
    {
      type: "callout",
      heading: "What we will not claim",
      body: "We do not describe the treatment as 100% safe, non-toxic or harmless, and we do not claim it prevents Lyme disease. Any product applied to control pests has directions and precautions for a reason. Reducing tick and mosquito pressure in the areas of your property you actually use is a real, worthwhile outcome — and it is what our customers describe. Disease prevention is a medical claim, and not one a lawn treatment is in a position to make.",
    },
    {
      type: "faq",
      heading: "Safety FAQs",
      faqs: [
        {
          q: "Is it safe for my dog?",
          a: "The treatment is designed for use around pets when applied as directed. Your technician will confirm when treated areas are ready to use again. For tick protection on the animal itself, speak to your veterinarian about preventatives — that is a different and complementary thing.",
        },
        {
          q: "Can my children play on the lawn afterwards?",
          a: "Treatment targets vegetation, borders and margins rather than open lawn. Your technician will tell you when treated areas are ready before leaving.",
        },
        {
          q: "What about my vegetable garden?",
          a: "Tell us at the assessment and we will mark it as an exclusion zone. Same for hives, ponds and anything else you would rather we kept away from.",
        },
        {
          q: "Are you licensed and insured?",
          a: "Yes. Applications are carried out by licensed technicians and Eco-Tick carries full insurance.",
        },
        {
          q: "Does this replace tick checks?",
          a: "No, and we would not want anyone to think it does. Checking yourself, your children and your dogs after time outdoors is the most reliable protection available and it costs nothing. Treatment reduces how much is out there to encounter.",
        },
      ],
    },
  ],
};
