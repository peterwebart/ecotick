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

/** Article 5. Tick library. */
export const checkYardForTicks: Article = {
  slug: "how-to-check-your-yard-for-ticks",
  path: "/blog/how-to-check-your-yard-for-ticks",
  kind: "article",
  category: "ticks",
  topic: "Tick awareness",
  h1: "How to Check Your Yard for Ticks",
  metaTitle: "How to Check Your Yard for Ticks | Ontario Homeowner Guide",
  absoluteTitle: true,
  metaDescription:
    "Learn how to inspect your yard for potential tick habitat, identify areas of concern and take practical prevention steps.",
  excerpt:
    "Learn how to inspect your yard for potential tick habitat, identify areas of concern and take practical prevention steps.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "childInspectingLawn",
  intro: [
    "You do not need to live beside a forest to think about tick prevention. Residential yards, cottage properties and rural landscapes can all contain areas where ticks may be encountered.",
    "A property inspection can help you identify potential tick habitat and decide which maintenance steps to take.",
  ],
  takeaways: [
    "Start at the property boundaries, where maintained grass meets woodland, tall grass, dense shrubs, brush piles, stone walls or natural trails.",
    "Inspect shaded, overgrown areas and the routes that pets and wildlife use through the property.",
    "A casual visual inspection cannot confirm that a property is free of ticks.",
    "If you find a tick on a person or pet, follow public health or veterinary guidance for identification and removal.",
  ],
  blocks: [
    section(
      "Start at the property boundaries",
      p("Walk around the outside of your lawn, particularly where maintained grass meets:"),
      ul(
        "Forest or woodland.",
        "Tall grass.",
        "Dense shrubs.",
        "Brush piles.",
        "Stone walls.",
        "Natural trails.",
      ),
      p(
        "These areas are useful starting points because ticks are commonly associated with wooded and brushy environments.",
      ),
    ),
    section(
      "Inspect shaded and overgrown areas",
      p("Look for places where vegetation is dense and sunlight is limited."),
      p("Pay particular attention to leaf litter, weeds, long grass and accumulated branches."),
      p("These areas may provide suitable shelter for ticks."),
    ),
    section(
      "Look at areas used by pets and wildlife",
      p("Consider where animals travel through the property."),
      p(
        "Dogs and cats can encounter ticks outdoors and bring them into the home. Wildlife may also transport ticks between habitats.",
      ),
      p("Inspect the areas around fences, wooded edges and frequently used animal paths."),
    ),
    section(
      "Review children's outdoor spaces",
      p("Check the location of:"),
      ul("Playgrounds.", "Sandboxes.", "Swing sets.", "Outdoor seating.", "Garden paths."),
      p(
        "Where possible, position play equipment in sunny areas and away from wooded property boundaries.",
      ),
    ),
    section(
      "Can you test your yard for ticks?",
      p(
        `Tick surveillance and identification are specialized activities. Public health agencies use established methods to monitor tick populations and [determine risk areas](${sources.phoRiskAreas.href}).`,
      ),
      p("A casual visual inspection cannot confirm that a property is free of ticks."),
      p(
        "If you find a tick on a person or pet, follow public health or veterinary guidance for identification and removal.",
      ),
    ),
    section(
      "What should you do after your inspection?",
      p("Create a simple property maintenance plan:"),
      ol(
        "Remove leaf litter and brush.",
        "Maintain shorter grass.",
        "Trim overgrown vegetation.",
        "Establish separation between lawn and woodland.",
        "Review outdoor activity areas.",
        "Maintain regular tick checks after outdoor activities.",
      ),
    ),
    section(
      "Get professional help preparing your property",
      p(
        "Eco-Tick Solutions provides [professional tick and mosquito control services](/residential-tick-control) for homeowners and property owners.",
      ),
      p(
        "Whether you have a residential backyard, cottage lot or larger property, the first step is understanding your property's layout and requirements.",
      ),
    ),
  ],
  service: services.residentialTick,
  relatedArticles: [
    "where-do-ticks-live-around-property",
    "how-to-reduce-tick-habitat-around-home",
    "ticks-in-ontario-homeowners-guide",
  ],
  related: [further.tickPrevention, further.tickSeason],
  references: [sources.kflaTicks, sources.phoRiskAreas, sources.phacReduceTicks],
  cta: {
    heading: "Request a quote for your property.",
    body: ctaCopy.residential,
    label: "Get your free quote",
  },
};
