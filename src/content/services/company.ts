import type { ServicePage } from "@/content/types";

export const howItWorks: ServicePage = {
  slug: "how-it-works",
  audience: "general",
  h1: "How Our Tick & Mosquito Treatment Works",
  answer:
    "Every Eco-Tick program follows the same three stages: assess the property to find where pest pressure actually sits, treat those zones with a garlic-based solution, and return across the season as activity shifts. The assessment helps us apply treatment where it is needed most.",
  metaTitle: "How It Works",
  metaDescription:
    "What happens on an Eco-Tick visit: property assessment, zone mapping, targeted treatment and seasonal scheduling.",
  ctaHeading: "Start with an assessment.",
  ctaBody: "It is free, and it tells you where the pressure on your property actually is.",
  ctaLabel: "Get your free quote",
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
          body: "Return visits are scheduled across the season. Tick activity peaks in spring and fall, mosquito pressure peaks in midsummer, and a program is built around both curves.",
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
        "You should know which zones are being treated and which are not before anything is applied. Before treatment begins, we explain the areas to be treated and any exclusions so you know what to expect.",
        "You should also get straight answers about limits. No outdoor treatment eliminates a tick or mosquito population permanently, because both arrive from surrounding land. What a program does is reduce pressure in the areas you use, across the months you use them.",
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
          a: "Call 1-888-912-5152 and we will tell you the next available dates. Spring fills up fastest.",
        },
        {
          q: "What happens if it rains on the day?",
          a: "We do not spray in heavy rain or high wind. If the weather changes, we will reschedule. If rain arrives shortly after treatment, we will assess whether another application is needed.",
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
  ctaBody: "Tell us about your property, and we will recommend the right program.",
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
      intro: "For homeowners and families who want to enjoy their outdoor spaces.",
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
      heading: "Not on the list?",
      body: "If your property has outdoor space that people use, it is worth a conversation. Call 1-888-912-5152 and describe the site — we will tell you honestly whether it is a good fit before quoting anything.",
    },
  ],
};

export const about: ServicePage = {
  slug: "about",
  audience: "general",
  h1: "About Eco-Tick Solutions",
  answer:
    "Eco-Tick Solutions is an Ontario outdoor pest control company founded by Edward Chodowski. It provides garlic-based tick and mosquito treatment for residential, commercial and large properties across Ontario.",
  metaTitle: "About Eco-Tick Solutions",
  metaDescription:
    "How Eco-Tick Solutions began: founder Edward Chodowski, a childhood memory of garlic spray, and why the company treats outdoor properties the way it does.",
  ctaHeading: "Come and see for yourself.",
  ctaBody: "Get a free, no-obligation quote, prepared from your property details.",
  ctaLabel: "Get your free quote",
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
        "He tried the available options, including retail repellents and treatments from conventional pest control companies. None of it gave him what he was after.",
        "What eventually changed the direction was a memory rather than a product. He recalled his mother going round their backyard with a misting bottle when he was a child, and how the whole garden ended up smelling faintly of barbecue. Asking around the family produced a few different versions of the story, but they all came back to the same ingredient: garlic.",
        "He started treating his own property with a garlic-based product. Neighbours began asking what he was doing, and their reasons echoed his own. They wanted to be outside, and they wanted it to work around their children, their pets and their gardens. That question, asked often enough, turned into a business.",
      ],
    },
    {
      type: "figure",
      imageKey: "founderAtWork",
      maxWidth: 330,
      caption:
        "Edward on a spring application, on a property backing onto open water. Eco-Tick runs truck-mounted spray equipment rather than backpack units, which is what lets a single visit reach tree lines and woodland edges instead of stopping at the lawn.",
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
        "Our treatment uses a concentrated garlic-based formulation designed for outdoor pest control. Applications go onto the grassy and vegetated areas where ticks and mosquitoes shelter: yards, parks, athletic fields, cottage grounds and trails.",
        "More about the product and how it is applied is on our natural solution page.",
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
        "Seasonal programs across spring, summer and fall",
      ],
    },
    {
      type: "prose",
      heading: "How we work now",
      body: [
        "What began with one backyard is now a seasonal operation running truck-mounted spray equipment across Ontario. We serve homes, cottages, farms, athletic fields, commercial grounds and wooded campgrounds.",
        "The product is registered with Health Canada. Applications are carried out by licensed technicians. Eco-Tick is fully insured. Edward remains directly involved in delivering our spray services.",
        "The part he is proudest of is the repeat business. Customers describe a fourth and fifth season with us, and the reason they give is rarely the chemistry — it is that when they call between scheduled visits because something has come back, someone turns up.",
      ],
    },
    {
      type: "list",
      heading: "What you can expect from us",
      columns: 2,
      items: [
        "A free, no-obligation quote by email — no site visit needed to get a price",
        "Straight answers about what treatment does and does not do",
        "Treatment applied to habitat, not blanketed across a lawn",
        "Exclusion zones agreed before the first visit",
        "A four-to-six-week cycle across the active season",
        "A return visit between applications if pressure comes back",
        "The same person on the phone as on the property",
        "No pressure and no lock-in to find out what it would cost",
      ],
    },
  ],
};
