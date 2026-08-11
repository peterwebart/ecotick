/**
 * Homepage content. Shaped to mirror the future Payload collections in
 * ARCHITECTURE.md section 2, so migrating to the CMS is a fetch swap.
 *
 * CLAIMS DISCIPLINE (brief section 30 + ARCHITECTURE.md section 4): every
 * string here is either a factual description of the service or a customer
 * outcome. Efficacy and safety claims ("effective", "safe for pets", "long
 * lasting") are deliberately absent until the PMRA product label supports them.
 */

export type ServiceTier = {
  slug: string;
  eyebrow: string;
  title: string;
  promise: string;
  items: readonly string[];
  href: string;
  accent: "forest" | "moss" | "clay";
};

export const serviceTiers: readonly ServiceTier[] = [
  {
    slug: "residential",
    eyebrow: "For homes & cottages",
    title: "Residential",
    promise: "Protect your backyard, your family and your pets.",
    items: [
      "Residential tick control",
      "Mosquito control",
      "Cottage treatment",
      "Yard treatment",
      "Seasonal programs",
    ],
    href: "/residential-tick-control",
    accent: "forest",
  },
  {
    slug: "commercial",
    eyebrow: "For business",
    title: "Commercial",
    promise: "Keep guests, customers and staff comfortable outdoors.",
    items: [
      "Commercial tick control",
      "Commercial mosquito control",
      "Property management programs",
      "Hospitality & recreation",
      "Recurring seasonal service",
    ],
    href: "/commercial-tick-control",
    accent: "moss",
  },
  {
    slug: "large-property",
    eyebrow: "For acreage",
    title: "Large Properties",
    promise: "Outdoor pest protection built for expansive grounds.",
    items: [
      "Farms & estates",
      "Sports fields & parks",
      "Corporate campuses",
      "Municipal properties",
      "Custom program design",
    ],
    href: "/large-property-tick-control",
    accent: "clay",
  },
];

export const trustPoints = [
  "Garlic-based formulation",
  "Applied by trained technicians",
  "Seasonal programs",
  "Residential & commercial",
  "Large-property capability",
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Assess",
    body: "We walk the property and identify where ticks and mosquitoes are most likely to be active: treelines, tall grass, leaf litter, shaded borders and standing water.",
  },
  {
    n: "02",
    title: "Treat",
    body: "We apply our garlic-based solution to the targeted outdoor areas identified in the assessment, following the product label.",
  },
  {
    n: "03",
    title: "Maintain",
    body: "Return visits are scheduled across the active season so protection is renewed as conditions change.",
  },
] as const;

export const seasons = [
  {
    season: "Spring",
    label: "Early season",
    body: "Ticks become active as soon as temperatures rise above freezing. Early treatment targets them before populations build.",
  },
  {
    season: "Summer",
    label: "Peak season",
    body: "Mosquito pressure peaks and outdoor use is highest. Applications focus on the areas your property actually gets used.",
  },
  {
    season: "Fall",
    label: "Late season",
    body: "Adult blacklegged ticks stay active well into fall, often after most people have stopped thinking about them.",
  },
] as const;

export const differences = [
  {
    title: "A natural-oriented approach",
    body: "Our programs are built around a garlic-based outdoor treatment rather than a conventional broad-spectrum approach.",
  },
  {
    title: "Professional application",
    body: "Structured treatment by trained technicians, not a hardware-store product applied by guesswork.",
  },
  {
    title: "Programs, not one-offs",
    body: "Tick and mosquito activity shifts through the season. Our programs are scheduled around it.",
  },
  {
    title: "Outdoor-only specialists",
    body: "We are not a general exterminator. Ticks and mosquitoes on outdoor property is the whole job.",
  },
  {
    title: "Homes through to acreage",
    body: "The same team handles a suburban backyard, a lakefront cottage and a hundred-acre corporate campus.",
  },
  {
    title: "Straight answers",
    body: "We tell you what the treatment does, what it does not do, and what to expect between visits.",
  },
] as const;

export const knowledgeArticles = [
  {
    title: "The Ontario Tick Control Guide",
    excerpt: "Species, season, habitat, and what actually reduces tick pressure on a property.",
    href: "/tick-control-guide",
  },
  {
    title: "When is tick season in Ontario?",
    excerpt: "Why the season starts earlier and ends later than most people expect.",
    href: "/tick-season",
  },
  {
    title: "Where do ticks hide in a yard?",
    excerpt: "The specific zones worth checking, and the landscaping changes that help.",
    href: "/tick-prevention",
  },
  {
    title: "Mosquito control",
    excerpt: "Breeding sites, resting habitat, and what to eliminate before we arrive.",
    href: "/mosquito-control",
  },
] as const;

export const homeFaqs = [
  {
    q: "How does professional tick spraying work?",
    a: "A technician assesses the property to find where ticks are most likely to be active, then applies treatment to those targeted outdoor zones rather than the entire property. Treatment is repeated across the season because tick activity changes from spring through fall.",
  },
  {
    q: "Is the treatment garlic-based?",
    a: "Yes. Eco-Tick's programs are built around a garlic-based outdoor solution. Full product details are on our natural solution page.",
  },
  {
    q: "How often should treatments be applied?",
    a: "PLACEHOLDER - requires the product label reapplication interval. See ARCHITECTURE.md section 5.",
  },
  {
    q: "When should I start treatment?",
    a: "Ticks become active once temperatures rise above freezing, which in Ontario can mean early spring. Starting before peak outdoor season is generally preferable to starting after you have noticed a problem.",
  },
  {
    q: "Do you treat cottages and large properties?",
    a: "Yes. We service residential yards, cottage and rural properties, commercial grounds, and large properties such as farms, campuses, parks and sports fields.",
  },
] as const;

/**
 * INTENTIONALLY EMPTY. The mockup carried "Sarah J., Cottage Owner", which
 * appears to be placeholder copy. Brief section 30 forbids fabricated
 * testimonials, so the SocialProof section renders nothing until real,
 * attributable reviews are supplied. Do not populate with invented quotes.
 */
export const testimonials: readonly {
  quote: string;
  name: string;
  context: string;
  source: string;
}[] = [];
