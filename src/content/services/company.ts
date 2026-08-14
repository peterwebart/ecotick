import type { ServicePage } from "@/content/types";

export const howItWorks: ServicePage = {
  slug: "how-it-works",
  audience: "general",
  h1: "How Our Tick & Mosquito Treatment Works",
  answer:
    "Every Eco-Tick programme follows the same three stages: assess the property to find where pest pressure actually sits, treat those zones with a garlic-based solution, and return across the season as activity shifts. The assessment is what makes the treatment worth applying.",
  metaTitle: "How It Works",
  metaDescription:
    "What happens on an Eco-Tick visit: property assessment, zone mapping, targeted treatment and seasonal scheduling.",
  ctaHeading: "Start with an assessment.",
  ctaBody: "It is free, and it tells you where the pressure on your property actually is.",
  ctaLabel: "Book an assessment",
  related: [
    { label: "How professional tick spraying works", href: "/blog/how-professional-tick-spraying-works" },
    { label: "Our natural garlic-based solution", href: "/natural-garlic-spray" },
    { label: "Safety & environment", href: "/safety-environment" },
    { label: "Residential tick control", href: "/residential-tick-control" },
  ],
  blocks: [
    {
      type: "steps",
      heading: "The three stages",
      steps: [
        {
          n: "01",
          title: "Assess",
          body: "A technician walks the property looking at vegetation, shade, moisture, wildlife signs and standing water, and asks how you actually use the space. The output is a map of treatment zones, priority areas and exclusions.",
        },
        {
          n: "02",
          title: "Treat",
          body: "The garlic-based solution is applied to the mapped zones according to the product label. Open, sunlit lawn is generally not treated, because it is poor habitat to begin with.",
        },
        {
          n: "03",
          title: "Maintain",
          body: "Return visits are scheduled across the season. Tick activity peaks in spring and fall, mosquito pressure peaks in midsummer, and a programme is built around both curves.",
        },
      ],
    },
    {
      type: "list",
      heading: "What we look at during an assessment",
      columns: 2,
      items: [
        "Where lawn transitions to woodland or field",
        "Leaf litter depth and distribution",
        "Shaded, humid zones that stay damp through the day",
        "Standing water and drainage",
        "Vegetation density along fences and boundaries",
        "Woodpiles, stone walls and rodent shelter",
        "How and where the property is actually used",
        "Areas to exclude: gardens, ponds, hives, wells",
      ],
    },
    {
      type: "prose",
      heading: "What you should expect from us",
      body: [
        "You should know which zones are being treated and which are not before anything is applied. If a treatment happens and you cannot describe where it went, that is a failure on our part, not a detail you were not entitled to.",
        "You should also get straight answers about limits. No outdoor treatment eliminates a tick or mosquito population permanently, because both arrive from surrounding land. What a programme does is reduce pressure in the areas you use, across the months you use them.",
      ],
    },
    {
      type: "faq",
      heading: "Process FAQs",
      faqs: [
        {
          q: "Is the assessment free?",
          a: "Yes. Quotes and assessments are free and carry no obligation, residential or commercial.",
        },
        {
          q: "Do I need to be home?",
          a: "No. Plenty of customers are at work when we visit. We just need gate access and pets indoors.",
        },
        {
          q: "How far in advance do you schedule?",
          a: "Call 613-539-1472 and we will tell you the next available dates. Spring fills up fastest.",
        },
        {
          q: "What happens if it rains on the day?",
          a: "We do not spray in heavy rain or high wind. If weather closes in we reschedule, and if rain arrives shortly after an application we will assess whether it needs repeating.",
        },
      ],
    },
  ],
};

export const whoWeServe: ServicePage = {
  slug: "who-we-serve",
  audience: "general",
  h1: "Who We Serve",
  answer:
    "Eco-Tick works with residential properties, commercial sites and large properties measured in acres. What links them is that the outdoor space matters to someone, whether that is a family using a backyard or an operator whose guests review the grounds.",
  metaTitle: "Who We Serve",
  metaDescription:
    "Homeowners, cottage owners, property managers, campgrounds, resorts, golf courses, sports facilities, farms and large properties across Ontario.",
  ctaHeading: "Not sure where you fit?",
  ctaBody: "Tell us about the property and we will point you at the right programme.",
  ctaLabel: "Get your free quote",
  related: [
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "Commercial tick control", href: "/commercial-tick-control" },
    { label: "Large-property tick control", href: "/large-property-tick-control" },
    { label: "All services", href: "/services" },
  ],
  blocks: [
    {
      type: "list",
      heading: "Residential",
      intro: "Where the outdoor space is somewhere a household lives rather than a place of business.",
      columns: 2,
      items: [
        "Homeowners with wooded or bordered lots",
        "Cottage and seasonal property owners",
        "Rural and acreage properties",
        "Families with young children",
        "Dog owners",
        "Pool and patio owners",
        "Gardeners and outdoor hobbyists",
        "Properties adjacent to conservation land",
      ],
    },
    {
      type: "list",
      heading: "Commercial",
      intro:
        "Where outdoor pest pressure becomes a complaint, a review, or a guest who does not come back.",
      columns: 2,
      items: [
        "Resorts and lodges",
        "Campgrounds and RV parks",
        "Golf courses and country clubs",
        "Restaurants and bars with patios",
        "Event and wedding venues",
        "Sports facilities",
        "Property management portfolios",
        "Retirement and residential communities",
      ],
    },
    {
      type: "list",
      heading: "Large properties",
      intro:
        "Where the site is big enough that deciding what to treat matters more than the treatment itself.",
      columns: 2,
      items: [
        "Farms and agricultural land",
        "Large private estates",
        "Public parks and green space",
        "Athletic complexes and sports fields",
        "Corporate campuses",
        "Municipal grounds",
        "Industrial sites with outdoor work areas",
        "Tourism and recreation properties",
      ],
    },
    {
      type: "callout",
      heading: "Industry pages",
      body: "Dedicated pages for campgrounds, resorts, golf courses, sports facilities and property managers are planned for a later phase. They will only be published where there is genuinely distinct content for each, rather than the same page with the industry name swapped in.",
    },
  ],
};

export const about: ServicePage = {
  slug: "about",
  audience: "general",
  h1: "About Eco-Tick Solutions",
  answer:
    "Eco-Tick Solutions is a Kingston-based outdoor pest control company founded by Edward Chodowski. It provides garlic-based tick and mosquito treatment for residential, commercial and large properties across Eastern Ontario.",
  metaTitle: "About Eco-Tick Solutions",
  metaDescription:
    "How Eco-Tick Solutions began: founder Edward Chodowski, a childhood memory of garlic spray, and why the company treats outdoor properties the way it does.",
  ctaHeading: "Come and see for yourself.",
  ctaBody: "Book a free property assessment and we will walk the ground with you.",
  ctaLabel: "Book an assessment",
  related: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Our natural garlic-based solution", href: "/natural-garlic-spray" },
    { label: "Safety & environment", href: "/safety-environment" },
    { label: "Contact", href: "/contact" },
  ],
  blocks: [
    {
      type: "prose",
      heading: "It started with one backyard",
      body: [
        "In 2010, Edward Chodowski got tired of being driven indoors. Canadian summers are short, and his own yard had become somewhere the family retreated from rather than spent time in.",
        "He worked through what was available: retail repellents, and treatments from conventional pest control companies. None of it gave him what he was after.",
        "What eventually changed the direction was a memory rather than a product. He recalled his mother going round their backyard with a misting bottle when he was a child, and how the whole garden ended up smelling faintly of barbecue. Asking around the family produced a few different versions of the story, but they all came back to the same ingredient: garlic.",
        "He started treating his own property with a garlic-based product. Neighbours began asking what he was doing, and their reasons echoed his own. They wanted to be outside, and they wanted it to work around their children, their pets and their gardens. That question, asked often enough, turned into a business.",
      ],
    },
    {
      type: "figure",
      imageKey: "founderAtWork",
      maxWidth: 330,
      caption:
        "Edward on a spring application, on a property backing onto open water. Eco-Tick runs truck-mounted spray equipment rather than backpack units, which is what lets a single visit reach treelines and woodland edges instead of stopping at the lawn.",
    },
    {
      type: "callout",
      heading: "In Edward's words",
      body: "I am proud to own Eco-Tick Solutions. Don't stay out just until the mosquitoes start biting. Stay out until it's time to go to bed.",
    },
    {
      type: "prose",
      heading: "Why garlic",
      body: [
        "Garlic is not a new idea in outdoor pest management. Farmers and gardeners have used garlic preparations for generations, and the practice long predates the product Eco-Tick uses today.",
        "The strain in our formulation is considerably more potent than culinary garlic. Applications go onto the grassy and vegetated areas where ticks and mosquitoes shelter: yards, parks, athletic fields, cottage grounds and trails.",
        "Full product detail, including registration and label information, is set out on our natural solution page.",
      ],
    },
    {
      type: "list",
      heading: "What we do",
      columns: 2,
      items: [
        "Residential tick and mosquito treatment",
        "Cottage and rural property treatment",
        "Commercial and hospitality grounds",
        "Campgrounds, parks and athletic fields",
        "Large properties, farms and estates",
        "Seasonal programmes across spring, summer and fall",
      ],
    },
    {
      type: "sourceNeeded",
      heading: "Still to confirm before this page is complete",
      needs: [
        "The year Eco-Tick Solutions Inc. was incorporated (2010 is when Edward began treating his own property, which is not the same thing)",
        "Ontario pesticide applicator licence class and number",
        "Insurance coverage details",
        "Team size and roles beyond the founder",
        "The camera original of the photograph above - the supplied file is 330x328, inset-sized only",
        "More real photography: the imagery elsewhere on this site is illustrative, not documentary",
        "Any industry association memberships",
      ],
    },
  ],
};

export const serviceAreas: ServicePage = {
  slug: "service-areas",
  audience: "general",
  h1: "Service Areas",
  answer:
    "Eco-Tick Solutions operates from 3192 Creekford Road in Kingston, Ontario, and treats residential, commercial and large properties across Kingston and the surrounding Eastern Ontario region.",
  metaTitle: "Service Areas in Eastern Ontario",
  metaDescription:
    "Eco-Tick Solutions is based on Creekford Road in Kingston and treats properties across Eastern Ontario. Check whether your address falls inside our territory.",
  ctaHeading: "Not sure if you are in range?",
  ctaBody: "Send us the address and we will tell you straight away.",
  ctaLabel: "Check my address",
  related: [
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "Commercial tick control", href: "/commercial-tick-control" },
    { label: "Contact", href: "/contact" },
  ],
  blocks: [
    {
      type: "prose",
      heading: "Based in Kingston",
      body: [
        "Our base is 3192 Creekford Road, Kingston, Ontario K7P 2Z6, in the west end of the city. Kingston and the immediately surrounding townships are our core territory.",
        "Eastern Ontario is a good fit for this work. The region has the mix that produces tick pressure: mixed woodland, shoreline along Lake Ontario and the Rideau system, farmland edges, and a lot of cottage and rural property where the treeline sits close to where people actually spend their time.",
      ],
    },
    {
      type: "list",
      heading: "Property types we treat across the region",
      columns: 2,
      items: [
        "City and suburban yards in and around Kingston",
        "Rural and acreage properties in the surrounding townships",
        "Waterfront and cottage properties",
        "Campgrounds, parks and trail networks",
        "Athletic fields and recreational grounds",
        "Commercial grounds and hospitality patios",
        "Farms and large estates",
        "Municipal and institutional properties",
      ],
    },
    {
      type: "map",
      heading: "Where we are based",
      intro:
        "Our base is in the west end of Kingston. If your property is outside the immediate area, send us the address and we will confirm coverage rather than leave you guessing from a map.",
    },
    {
      type: "callout",
      heading: "Not sure whether you are in range?",
      body: "Call 613-539-1472 or send us the address through the quote form. We will tell you straight away rather than leaving you to guess from a map.",
    },
    {
      type: "sourceNeeded",
      heading: "Before individual location pages are built",
      needs: [
        "The named communities served, and the maximum travel radius from Kingston",
        "Whether the radius differs for commercial or large-property work",
        "Any minimum job size for properties at the edge of the territory",
        "Confirmation of whether the Creekford Road address receives visitors, or is an operating base only",
      ],
    },
    {
      type: "callout",
      heading: "Why there are no city pages yet",
      body: "Individual location pages are only worth building where there is genuinely distinct content for each: local property types, local conditions, local service detail. Generating a page per city from a template produces thin doorway pages, which the brief rules out and which search engines discount. Once the real territory is confirmed, location pages will be built for the areas that can support unique content.",
    },
  ],
};
