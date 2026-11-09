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

/** Article 15. Large-property library. */
export const largePropertyTickControl: Article = {
  slug: "tick-control-large-properties",
  path: "/blog/tick-control-large-properties",
  kind: "article",
  category: "large-properties",
  topic: "Large property services",
  h1: "Tick Control for Large Properties: What Property Owners Should Consider",
  metaTitle: "Tick Control for Large Properties and Rural Estates | Eco-Tick",
  absoluteTitle: true,
  metaDescription:
    "Learn what property owners should consider when planning tick control for large yards, rural estates, cottages and wooded properties.",
  excerpt:
    "Learn what property owners should consider when planning tick control for large yards, rural estates, cottages and wooded properties.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "woodlandTrail",
  intro: [
    "Large properties offer more room to enjoy the outdoors, but they can also present different challenges when it comes to tick management.",
    "Rural estates, cottage properties and larger residential lots may include lawns, wooded boundaries, gardens, natural trails and open spaces.",
    "Each environment can have different characteristics, so a property-specific approach is important.",
  ],
  takeaways: [
    "A larger property can include several different outdoor environments, from maintained lawn and gardens to wooded areas, forest edges, tall grass and walking paths.",
    "Start with a property assessment: where the family and pets spend time, where tick habitat may be present, and access for professional service equipment.",
    "Even when professional service is arranged, regular maintenance remains important.",
    "Property size, layout, access, vegetation and areas of concern all influence the scope of work.",
  ],
  blocks: [
    section(
      "Why are large properties different?",
      p("A small residential backyard may have a relatively simple layout."),
      p("A larger property can include several different outdoor environments:"),
      ul(
        "Maintained lawn.",
        "Wooded areas.",
        "Forest edges.",
        "Tall grass.",
        "Gardens and landscaped spaces.",
        "Recreational areas.",
        "Walking paths.",
        "Wood storage areas.",
        "Natural drainage areas.",
      ),
      p(
        "The size and variety of these environments make it important to identify where people and animals spend time and where tick habitat may be present.",
      ),
    ),
    section(
      "Start with a property assessment",
      p("Before planning service, consider:"),
      ol(
        "Total property size.",
        "Areas regularly used by the family.",
        "Locations where pets spend time.",
        "Wooded and brushy boundaries.",
        "Walking paths and recreational spaces.",
        "Areas with accumulated leaves or brush.",
        "Access for professional service equipment.",
      ),
      p("This information helps establish the property's service requirements."),
    ),
    section(
      "Property maintenance still matters",
      p("Even when professional service is arranged, regular maintenance remains important."),
      p("Homeowners should consider:"),
      ul(
        "Keeping frequently used lawn areas maintained.",
        "Removing unnecessary leaf litter.",
        "Trimming overgrown vegetation.",
        "Creating separation between lawns and wooded areas.",
        "Keeping play areas away from natural vegetation.",
        "Maintaining clear access around outdoor spaces.",
      ),
    ),
    section(
      "Professional service for larger properties",
      p(
        "Eco-Tick Solutions provides [professional tick and mosquito control services](/large-property-tick-control) for residential properties, cottages and larger outdoor spaces.",
      ),
      p(
        "The service requirements for a large property should be discussed individually. Property size, layout, access, vegetation and areas of concern all influence the scope of work.",
      ),
    ),
  ],
  service: services.largeProperty,
  relatedArticles: [
    "tick-protection-commercial-properties",
    "commercial-tick-mosquito-control",
    "where-do-ticks-live-around-property",
  ],
  related: [further.professionalSpraying, further.howItWorks],
  references: [sources.phacReduceTicks, sources.kflaTicks],
  cta: {
    heading: "Contact Eco-Tick Solutions to discuss professional tick control for your property.",
    body: ctaCopy.largeProperty,
    label: "Request a large-property assessment",
  },
};
