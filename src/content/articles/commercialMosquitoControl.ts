import type { Article } from "@/content/types";
import {
  LIBRARY_AUTHOR,
  LIBRARY_PUBLISHED_AT,
  ctaCopy,
  further,
  p,
  section,
  services,
  sources,
  ul,
} from "./library";

/** Article 14. Commercial library. */
export const commercialMosquitoControl: Article = {
  slug: "mosquito-control-commercial-properties",
  path: "/blog/mosquito-control-commercial-properties",
  kind: "article",
  category: "commercial",
  topic: "Commercial mosquito control",
  h1: "Mosquito Control for Commercial Properties",
  /**
   * Supplied as "… | Eco-Tick Solutions", which is 63 characters and over the
   * 62-character limit the site audit enforces. The short brand suffix used by
   * the other supplied titles keeps the wording intact.
   */
  metaTitle: "Commercial Mosquito Control for Businesses | Eco-Tick",
  absoluteTitle: true,
  metaDescription:
    "Explore mosquito control considerations for commercial properties, hotels, campgrounds, outdoor venues and managed facilities.",
  excerpt:
    "Explore mosquito control considerations for commercial properties, hotels, campgrounds, outdoor venues and managed facilities.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "lakesidePatio",
  intro: [
    "For businesses that depend on outdoor spaces, mosquito activity can affect the experience of employees, customers and visitors.",
    "Hotels, resorts, campgrounds, event venues and recreational facilities all have a reason to pay attention to the condition of their outdoor environments.",
    "A well-planned mosquito management approach can help businesses maintain more comfortable outdoor spaces.",
  ],
  takeaways: [
    "For businesses that depend on outdoor spaces, mosquito activity can affect the experience of employees, customers and visitors.",
    "Requirements vary according to property size, location, water sources, surrounding vegetation and intended use.",
    "Removing unnecessary standing water, from clogged gutters and containers to drainage channels and low-lying areas, is an important first step.",
    "Service should be planned around operating hours and visitor patterns, and any professional application must follow applicable product labels, regulations and site requirements.",
  ],
  blocks: [
    section(
      "Which businesses should consider mosquito control?",
      p("Potential commercial applications include:"),
      ul(
        "Hotels and resorts.",
        "Campgrounds.",
        "Outdoor event venues.",
        "Restaurants with patios.",
        "Golf and recreational facilities.",
        "Commercial properties with landscaped grounds.",
        "Property management companies.",
        "Rural hospitality businesses.",
      ),
      p(
        "The requirements will vary according to property size, location, water sources, surrounding vegetation and intended use.",
      ),
    ),
    section(
      "Start by identifying mosquito breeding opportunities",
      p(
        "Mosquitoes lay their eggs in water, and some species can use surprisingly small amounts of standing water.",
      ),
      p("Commercial property inspections should consider:"),
      ul(
        "Clogged gutters.",
        "Outdoor containers.",
        "Unused equipment.",
        "Decorative water features.",
        "Poorly drained areas.",
        "Water collection around structures.",
        "Drainage channels and low-lying areas.",
      ),
      p("Removing unnecessary standing water is an important first step."),
    ),
    section(
      "Plan around business operations",
      p("Commercial service requires more than identifying outdoor areas."),
      p("The property's operating schedule and visitor patterns should also be considered."),
      p("A service discussion may include:"),
      ul(
        "Property size and layout.",
        "Outdoor seating and recreation areas.",
        "Employee and visitor access.",
        "Operating hours.",
        "Service scheduling.",
        "Site-specific requirements.",
      ),
      p(
        "Any professional application must follow applicable product labels, regulations and site requirements.",
      ),
    ),
    section(
      "A professional approach for commercial properties",
      p(
        "Eco-Tick Solutions provides [professional tick and mosquito control services](/commercial-tick-control) for residential and commercial properties.",
      ),
      p(
        "Whether you manage a hospitality venue, a recreational facility or a larger commercial property, the first step is a discussion about your site's requirements.",
      ),
    ),
  ],
  service: services.commercial,
  relatedArticles: [
    "commercial-tick-mosquito-control",
    "tick-protection-commercial-properties",
    "where-do-mosquitoes-breed",
  ],
  related: [further.mosquito, further.safety],
  references: [sources.phacStandingWater],
  cta: {
    heading: "Request a commercial mosquito control quote from Eco-Tick Solutions.",
    body: ctaCopy.commercial,
    label: "Request a property assessment",
  },
};
