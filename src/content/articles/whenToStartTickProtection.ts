import type { Article } from "@/content/types";
import {
  LIBRARY_AUTHOR,
  LIBRARY_PUBLISHED_AT,
  further,
  p,
  section,
  services,
  sources,
  ul,
} from "./library";

/** Article 2. Tick library. */
export const whenToStartTickProtection: Article = {
  slug: "when-to-start-tick-protection",
  path: "/blog/when-to-start-tick-protection",
  kind: "article",
  category: "ticks",
  topic: "Tick prevention",
  h1: "When Should You Start Tick Protection?",
  metaTitle: "When Should You Start Tick Protection in Ontario?",
  absoluteTitle: true,
  metaDescription:
    "Find out when to begin preparing your yard for ticks in Ontario and which property maintenance steps can help reduce tick habitat.",
  excerpt:
    "Find out when to begin preparing your yard for ticks in Ontario and which property maintenance steps can help reduce tick habitat.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "dogOnLawn",
  intro: [
    "One of the most common questions homeowners ask before spring is when they should start preparing their property for ticks.",
    "Tick activity in Ontario is influenced by temperature, habitat and local environmental conditions. Ticks can become active whenever temperatures rise above freezing, so there is no single date that marks the beginning of the season.",
  ],
  takeawaysHeading: "The short answer",
  takeaways: [
    "Prepare before the warmer weather arrives rather than waiting until you start finding ticks.",
    "Late winter and early spring are useful times to assess your outdoor space.",
    "Even when your property is maintained or professionally serviced, personal precautions remain necessary.",
    "The best time to discuss property treatment is before your family begins spending significant time outdoors.",
  ],
  blocks: [
    section(
      "Start with property preparation",
      p("Late winter and early spring are useful times to assess your outdoor space."),
      p(
        "Look at the areas where your maintained lawn meets natural vegetation. These transitions can include:",
      ),
      ul(
        "Wooded property boundaries.",
        "Overgrown garden edges.",
        "Brush and leaf piles.",
        "Stone walls.",
        "Wood storage areas.",
        "Dense shrubs and tall grass.",
      ),
      p(
        "Cleaning up these areas can help reduce suitable tick habitat around frequently used outdoor spaces.",
      ),
    ),
    section(
      "Prepare your yard before regular outdoor activity begins",
      p("Consider completing the following tasks:"),
      ul(
        "Clear accumulated leaves and brush.",
        "Remove unnecessary vegetation.",
        "Maintain shorter grass.",
        "Trim shrubs and tree branches where appropriate.",
        "Create a defined border between lawn and wooded areas.",
        "Move play equipment away from wooded edges.",
        "Inspect areas where pets frequently travel.",
      ),
      p(
        "A gravel or wood-chip border at least one metre wide can help create separation between maintained lawn and adjacent wooded or brushy areas.",
      ),
    ),
    section(
      "Personal protection remains important",
      p(
        "Even when your property is maintained or professionally serviced, personal precautions remain necessary.",
      ),
      p("When entering tick habitat:"),
      ul(
        "Wear closed-toe footwear.",
        "Wear light-coloured clothing.",
        "Use an appropriate insect repellent according to its label.",
        "Stay on cleared paths where possible.",
        "Check yourself, children and pets after outdoor activities.",
      ),
      p(
        `If you find an attached tick, follow [public health guidance for proper removal](${sources.phacRemoveTick.href}) and seek medical advice when appropriate.`,
      ),
    ),
    section(
      "When should you arrange professional service?",
      p(
        "The best time to discuss property treatment is before your family begins spending significant time outdoors.",
      ),
      p(
        "Early planning allows you to discuss the size and layout of your property, areas of concern, service requirements and timing.",
      ),
      p(
        "Eco-Tick Solutions works with homeowners and property owners to plan [professional tick and mosquito control services](/residential-tick-control).",
      ),
    ),
  ],
  service: services.residentialTick,
  relatedArticles: [
    "when-does-tick-season-start-ontario",
    "how-to-reduce-tick-habitat-around-home",
    "how-to-check-your-yard-for-ticks",
  ],
  related: [further.tickPrevention, further.professionalSpraying],
  references: [
    sources.kflaTicks,
    sources.phacReduceTicks,
    sources.hcRepellents,
    sources.phacRemoveTick,
  ],
  cta: {
    heading: "Prepare now. Enjoy your outdoor space when the season arrives.",
    body: "Contact Eco-Tick Solutions to discuss 2027 service.",
    label: "Get your free quote",
  },
};
