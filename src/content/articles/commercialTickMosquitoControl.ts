import type { Article } from "@/content/types";
import {
  LIBRARY_AUTHOR,
  LIBRARY_PUBLISHED_AT,
  ctaCopy,
  further,
  ol,
  p,
  section,
  services,
  sources,
  ul,
} from "./library";

/** Article 12. Commercial library. */
export const commercialTickMosquitoControl: Article = {
  slug: "commercial-tick-mosquito-control",
  path: "/blog/commercial-tick-mosquito-control",
  kind: "article",
  category: "commercial",
  topic: "Commercial services",
  h1: "Commercial Tick & Mosquito Control: Managing Outdoor Properties",
  /**
   * The supplied title, "Commercial Tick & Mosquito Control | Eco-Tick
   * Solutions", is character for character the <title> of the
   * /commercial-tick-control service page. Two pages with one title compete
   * for the same query and fail the duplicate-title audit, so this follows the
   * article's own headline instead, trimmed to fit the 62-character limit.
   */
  metaTitle: "Commercial Tick & Mosquito Control: Managing Outdoor Spaces",
  absoluteTitle: true,
  metaDescription:
    "Explore professional tick and mosquito control for commercial properties, outdoor facilities, hospitality businesses and managed spaces.",
  excerpt:
    "Explore professional tick and mosquito control for commercial properties, outdoor facilities, hospitality businesses and managed spaces.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "commercialBuilding",
  intro: [
    "Outdoor spaces are an important part of many businesses.",
    "From hospitality venues and recreational facilities to commercial properties and managed outdoor spaces, the condition of the surrounding environment can influence how people experience a location.",
    "Ticks and mosquitoes can make outdoor areas less comfortable and create additional property-management concerns.",
    "For businesses responsible for maintaining outdoor environments, a proactive approach to tick and mosquito management can be an important part of property maintenance.",
  ],
  takeaways: [
    "For businesses responsible for outdoor environments, a proactive approach to tick and mosquito management can be an important part of property maintenance.",
    "The suitability and scope of service depend on the property's layout, environmental conditions, operating requirements and applicable regulations.",
    "Early planning provides an opportunity to identify areas of concern, coordinate scheduling and plan around operating hours and visitor activity.",
    "A service discussion should consider property size, the outdoor areas employees and visitors use, surrounding vegetation, drainage, access and scheduling.",
  ],
  blocks: [
    section(
      "Which commercial properties may need tick and mosquito control?",
      p("Different businesses have different outdoor requirements."),
      p("Potential applications include:"),
      ul(
        "Hotels and resorts.",
        "Campgrounds and recreational facilities.",
        "Event venues.",
        "Outdoor hospitality businesses.",
        "Golf and recreational properties.",
        "Commercial campuses.",
        "Property management portfolios.",
        "Rural businesses.",
        "Facilities with landscaped outdoor areas.",
      ),
      p(
        "The suitability and scope of service depend on the property's layout, environmental conditions, operating requirements and applicable regulations.",
      ),
    ),
    section(
      "Why should businesses plan ahead?",
      p(
        "Waiting until outdoor spaces become uncomfortable can create unnecessary operational pressure.",
      ),
      p("Early planning provides an opportunity to:"),
      ul(
        "Identify areas of concern.",
        "Review the property's outdoor layout.",
        "Discuss service requirements.",
        "Coordinate scheduling.",
        "Establish a maintenance approach.",
        "Plan around operating hours and visitor activity.",
      ),
    ),
    section(
      "A property-specific approach",
      p(
        "A commercial property may include landscaped areas, wooded boundaries, outdoor seating, pathways, recreational spaces and natural vegetation.",
      ),
      p("Each area may require a different assessment."),
      p("A professional service discussion should consider:"),
      ol(
        "Total property size.",
        "Outdoor areas used by employees and visitors.",
        "Surrounding vegetation.",
        "Drainage and standing-water concerns.",
        "Property access.",
        "Operational and scheduling requirements.",
      ),
    ),
    section(
      "Professional service for commercial properties",
      p(
        "Eco-Tick Solutions provides [professional tick and mosquito control services](/commercial-tick-control) for properties that require attention to larger or more complex outdoor spaces.",
      ),
      p(
        "The first step is to understand the property and its operational requirements so that an appropriate service proposal can be prepared.",
      ),
    ),
  ],
  service: services.commercial,
  relatedArticles: [
    "tick-protection-commercial-properties",
    "mosquito-control-commercial-properties",
    "tick-control-large-properties",
  ],
  related: [further.largeProperty, further.safety],
  references: [sources.phacReduceTicks, sources.phacStandingWater],
  cta: {
    heading: "Request a commercial property quote from Eco-Tick Solutions.",
    body: ctaCopy.commercial,
    label: "Request a property assessment",
  },
};
