import type { ServicePage } from "@/content/types";

/**
 * Both pages below are noindex until their sourceNeeded blocks are filled.
 * Every substantive statement on these pages is a product fact that only
 * Eco-Tick and the product label can supply, so inventing content here would
 * breach brief section 30 and, for a regulated pest control product, would be a
 * compliance problem rather than just a quality one.
 */

export const garlicSolution: ServicePage = {
  slug: "natural-garlic-spray",
  audience: "general",
  h1: "Our Natural Garlic-Based Tick & Mosquito Solution",
  answer:
    "Eco-Tick's programmes are built around a garlic-based outdoor treatment applied to targeted habitat zones on a property. Full product details, including active ingredients and application specifics, are being finalised for publication.",
  metaTitle: "Our Natural Garlic-Based Solution",
  metaDescription:
    "How Eco-Tick's garlic-based tick and mosquito treatment works, where it is applied on a property, how long it lasts and what to expect between visits.",
  noindex: true,
  ctaHeading: "Questions about the treatment?",
  ctaBody: "We are happy to talk through exactly what is applied and where.",
  ctaLabel: "Get in touch",
  related: [
    { label: "Safety & environment", href: "/safety-environment" },
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "Commercial tick control", href: "/commercial-tick-control" },
  ],
  blocks: [
    {
      type: "prose",
      heading: "Why garlic",
      body: [
        "Garlic is not a new idea in outdoor pest management. Farmers and gardeners have used garlic preparations for generations, long before anyone was selling it as a service.",
        "The strain in our formulation is considerably more potent than the garlic you would find in a grocery store. Insects rely heavily on olfaction to navigate and locate hosts, and garlic-based preparations are a recognised category of outdoor pest deterrent built around that.",
      ],
    },
    {
      type: "list",
      heading: "Where it is applied",
      intro:
        "Treatment goes onto the vegetated areas where ticks and mosquitoes actually shelter, rather than being sprayed uniformly across a property.",
      columns: 2,
      items: [
        "Residential yards and lawn margins",
        "Treelines and shaded borders",
        "Cottage grounds and waterfront properties",
        "Parks and green space",
        "Athletic fields and recreational grounds",
        "Trails and walking routes",
        "Commercial grounds and patios",
        "Large properties, by zone",
      ],
    },
    {
      type: "callout",
      heading: "What is still missing from this page",
      body: "Eco-Tick has supplied the background above, but not yet the product label. Everything below is held until it arrives. See CLAIMS-REGISTER.md in the repository for the full list of proposed claims and their status.",
    },
    {
      type: "sourceNeeded",
      heading: "Product specification",
      needs: [
        "Product trade name and manufacturer",
        "PMRA Pest Control Products (PCP) registration number",
        "Active ingredient and concentration exactly as printed on the label",
        "Registered target pests",
        "A copy of the current product label and Safety Data Sheet",
        "Manufacturer confirmation of which claims Eco-Tick is licensed to repeat",
      ],
    },
    {
      type: "sourceNeeded",
      heading: "Application and duration",
      needs: [
        "Application method and equipment",
        "Registered application rates",
        "Label reapplication interval",
        "Expected duration of effect, as stated on the label",
        "Rainfastness and weather constraints",
        "Temperature or wind restrictions on application",
      ],
    },
    {
      type: "sourceNeeded",
      heading: "Efficacy and duration",
      needs: [
        "Label support for the proposed claim that treatment controls ticks and mosquitoes for weeks after application",
        "Label support for the proposed claim that treated areas prevent breeding",
        "A source for the stated 30-45 minute airborne scent duration",
        "Written sign-off from the manufacturer or counsel on the final claim set",
      ],
    },
    {
      type: "callout",
      heading: "Why this page is deliberately incomplete",
      body: "Pest control product claims in Canada are regulated under the Pest Control Products Act and must be consistent with the registered label. Writing plausible-sounding content here would be both inaccurate and a compliance risk, so the page stays noindexed until the documentation above is in hand.",
    },
  ],
};

export const safetyEnvironment: ServicePage = {
  slug: "safety-environment",
  audience: "general",
  h1: "Safety & Environment",
  answer:
    "Treatments are applied by trained technicians in accordance with the product label. Detailed safety, re-entry and environmental information is being finalised from the product documentation and will be published here in full.",
  metaTitle: "Safety & Environment",
  metaDescription:
    "Product information, application practice, re-entry guidance and environmental considerations for Eco-Tick's tick and mosquito treatments.",
  noindex: true,
  ctaHeading: "Want to see the product documentation?",
  ctaBody: "Ask us and we will share what applies to your treatment.",
  ctaLabel: "Get in touch",
  related: [
    { label: "Our natural garlic-based solution", href: "/natural-garlic-spray" },
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "Commercial tick control", href: "/commercial-tick-control" },
  ],
  blocks: [
    {
      type: "prose",
      heading: "Our position",
      body: [
        "The most useful thing a page like this can do is be specific. Broad reassurance is easy to write and tells you nothing, so this page will publish the actual product information, the actual re-entry guidance and the actual environmental precautions rather than a paragraph about caring for the environment.",
        "What we can tell you now: treatment is applied by trained technicians in accordance with the product label, and your technician will confirm re-entry timing for your specific treatment before leaving the property. If you want to see the documentation that applies to your treatment, ask and we will share it.",
        "The sections below list what is still outstanding before the rest of this page can be written.",
      ],
    },
    {
      type: "sourceNeeded",
      heading: "Product and handling",
      needs: [
        "Product label and Safety Data Sheet",
        "PCP registration number",
        "Active ingredients as registered",
        "Storage, handling and disposal requirements",
        "First-aid statements from the label",
      ],
    },
    {
      type: "sourceNeeded",
      heading: "People, pets and re-entry",
      needs: [
        "Label re-entry interval",
        "Any label statements regarding children or pets",
        "Signage or notification requirements",
        "Precautions for treated surfaces and vegetation",
      ],
    },
    {
      type: "sourceNeeded",
      heading: "Environment",
      needs: [
        "Label statements on pollinators and beneficial insects",
        "Buffer distances for waterways, wells and drainage features",
        "Any restrictions near vegetable gardens or edible plantings",
        "Wind, temperature and drift precautions",
      ],
    },
    {
      type: "sourceNeeded",
      heading: "Qualifications and regulation",
      needs: [
        "Ontario pesticide applicator licence class and number",
        "Business licence details where applicable",
        "Insurance coverage",
        "Technician training and certification",
      ],
    },
    {
      type: "callout",
      heading: "What we will not claim",
      body: "We do not describe treatments as 100% safe, non-toxic, harmless or guaranteed, and we do not claim that treatment prevents Lyme disease. Reducing tick exposure on a property is a real and worthwhile outcome; disease prevention is a medical claim and not one we are in a position to make.",
    },
  ],
};
