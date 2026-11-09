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

/** Article 3. Tick library. */
export const whereTicksLive: Article = {
  slug: "where-do-ticks-live-around-property",
  path: "/blog/where-do-ticks-live-around-property",
  kind: "article",
  category: "ticks",
  topic: "Tick habitat",
  h1: "Where Do Ticks Live Around Your Property?",
  metaTitle: "Where Do Ticks Live Around Your Property? | Eco-Tick",
  absoluteTitle: true,
  metaDescription:
    "Discover common tick habitats around Ontario homes, including wooded edges, tall grass, leaf litter and dense vegetation.",
  excerpt:
    "Discover common tick habitats around Ontario homes, including wooded edges, tall grass, leaf litter and dense vegetation.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "woodlandTrail",
  intro: [
    "Many homeowners associate ticks with forests and hiking trails. However, ticks can also be encountered around residential properties, particularly where maintained outdoor spaces meet natural vegetation.",
    "Understanding where ticks are commonly found is an important first step in preparing your property.",
  ],
  takeaways: [
    "Ticks can be encountered around residential properties, particularly where maintained outdoor spaces meet natural vegetation.",
    "Common habitats include wooded areas and forest edges, tall grass and overgrown vegetation, leaf litter and brush piles, and areas visited by wildlife.",
    "Ticks do not jump or fly onto people. They wait on vegetation and attach to a passing person or animal when there is contact.",
    "Even properties that are regularly maintained can have exposure to ticks.",
  ],
  blocks: [
    section(
      "1. Wooded areas and forest edges",
      p(
        "Wooded environments provide vegetation, shade and suitable habitat for wildlife that can act as hosts for ticks.",
      ),
      p(
        "The edges of wooded areas deserve particular attention, especially when they border lawns, gardens, patios or frequently used walking routes.",
      ),
    ),
    section(
      "2. Tall grass and overgrown vegetation",
      p("Ticks are commonly associated with tall grass, shrubs and brush."),
      p(
        "They do not jump or fly onto people. Instead, they can wait on vegetation and attach to a passing person or animal when there is contact.",
      ),
      p(
        "Maintaining grass and trimming overgrown vegetation can help reduce suitable habitat around frequently used spaces.",
      ),
    ),
    section(
      "3. Leaf litter and brush piles",
      p("Accumulated leaves and brush create sheltered environments that can support tick survival."),
      p("Pay attention to:"),
      ul(
        "Leaf piles along property boundaries.",
        "Brush accumulated near fences.",
        "Garden edges.",
        "Areas around stone walls.",
        "Wood piles and storage areas.",
      ),
      p("Regular cleanup can help make these areas less suitable for ticks."),
    ),
    section(
      "4. Areas visited by wildlife",
      p("Wildlife can contribute to tick movement around a property."),
      p(
        "Deer, rodents and other animals may travel through wooded edges, gardens and natural vegetation. Birds can also transport ticks.",
      ),
      p("For this reason, even properties that are regularly maintained can have exposure to ticks."),
    ),
    section(
      "5. Areas around outdoor activities",
      p("Consider where your family and pets spend time."),
      p(
        "Playgrounds, patios, outdoor seating areas and frequently used walking paths should be evaluated in relation to surrounding vegetation.",
      ),
      p("Where possible, position frequently used areas away from wooded edges and dense brush."),
    ),
    section(
      "How to assess your property",
      p("Walk around your property and identify:"),
      ul(
        "Where lawn meets forest.",
        "Where tall grass is growing.",
        "Where leaves and brush accumulate.",
        "Where pets frequently travel.",
        "Where children play.",
        "Where wildlife regularly passes.",
      ),
      p(
        "This assessment can help identify areas that may benefit from maintenance and professional attention.",
      ),
    ),
    section(
      "Professional tick control for your property",
      p(
        "Every property is different. A compact residential backyard has different characteristics from a [large rural property](/large-property-tick-control) or cottage lot.",
      ),
      p(
        "Eco-Tick Solutions can help property owners discuss their outdoor spaces and [professional tick and mosquito control](/residential-tick-control) requirements.",
      ),
    ),
  ],
  service: services.residentialTick,
  relatedArticles: [
    "how-to-reduce-tick-habitat-around-home",
    "how-to-check-your-yard-for-ticks",
    "tick-control-large-properties",
  ],
  related: [further.tickPrevention, further.tickGuide],
  references: [sources.kflaTicks, sources.phacReduceTicks],
  cta: {
    heading: "Request a property assessment or quote from Eco-Tick Solutions.",
    body: ctaCopy.residential,
    label: "Get your free quote",
  },
};
