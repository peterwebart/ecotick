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

/** Article 4. Tick library. */
export const reduceTickHabitat: Article = {
  slug: "how-to-reduce-tick-habitat-around-home",
  path: "/blog/how-to-reduce-tick-habitat-around-home",
  kind: "article",
  category: "ticks",
  topic: "Property maintenance",
  h1: "How to Reduce Tick Habitat Around Your Home",
  metaTitle: "How to Reduce Tick Habitat Around Your Home",
  absoluteTitle: true,
  metaDescription:
    "Learn practical landscaping and property maintenance steps that can help reduce tick habitat around your Ontario home.",
  excerpt:
    "Learn practical landscaping and property maintenance steps that can help reduce tick habitat around your Ontario home.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "houseWithLawn",
  intro: [
    "A well-maintained yard can make outdoor spaces more comfortable and help reduce conditions that support ticks.",
    "Ticks are often associated with wooded areas, tall grass, shrubs, leaf litter and brush. By identifying and maintaining these areas, homeowners can make their properties less inviting to ticks.",
    "Here are practical steps to consider.",
  ],
  takeaways: [
    "Keep grass maintained, remove leaves and brush, and trim dense vegetation, especially near areas where family members and pets spend time.",
    "If your lawn borders woodland, tall grass or dense vegetation, consider a gravel or wood-chip border at least one metre wide.",
    "Place patios, seating areas, play structures and sandboxes away from wooded edges.",
    "No landscaping strategy can guarantee a tick-free property. Personal precautions remain important.",
  ],
  blocks: [
    section(
      "Keep grass maintained",
      p(
        "Regularly mow lawns and avoid allowing grass to become excessively tall, especially near areas where family members and pets spend time.",
      ),
      p("Maintained grass is generally less suitable for ticks than dense, humid vegetation."),
    ),
    section(
      "Remove leaves and brush",
      p("Accumulated organic material can provide sheltered habitat."),
      p("Remove unnecessary:"),
      ul("Leaf piles.", "Fallen branches.", "Brush.", "Weeds.", "Overgrown vegetation."),
      p(
        "Pay particular attention to property boundaries and the transition between lawns and wooded areas.",
      ),
    ),
    section(
      "Create a defined property border",
      p(
        "If your lawn borders woodland, tall grass or dense vegetation, consider creating a gravel or wood-chip border at least one metre wide.",
      ),
      p("This can help separate frequently used lawn areas from tick habitat."),
    ),
    section(
      "Trim shrubs and improve sunlight",
      p("Dense vegetation can create shaded, humid conditions."),
      p(
        "Pruning shrubs and tree branches where appropriate can allow more sunlight and improve airflow around maintained outdoor spaces.",
      ),
    ),
    section(
      "Position outdoor activity areas thoughtfully",
      p(
        "Consider placing patios, seating areas, play structures and sandboxes away from wooded edges.",
      ),
      p("Where appropriate, use wood chips or mulch beneath playground equipment."),
    ),
    section(
      "Manage areas that attract wildlife",
      p("Wildlife can transport ticks onto a property."),
      p(
        "Keep outdoor areas tidy, secure waste and avoid unintentionally creating food sources that attract animals close to the home.",
      ),
    ),
    section(
      "Remember that landscaping is only one part of prevention",
      p("No landscaping strategy can guarantee a tick-free property."),
      p(
        "Personal precautions remain important, including appropriate clothing, insect repellent and regular tick checks after outdoor activities.",
      ),
    ),
    section(
      "Consider professional property treatment",
      p(
        "Property maintenance and professional service can work together as part of a broader approach to outdoor tick management.",
      ),
      p(
        "Eco-Tick Solutions provides [professional tick and mosquito control services](/residential-tick-control) for residential and [larger properties](/large-property-tick-control).",
      ),
    ),
  ],
  service: services.residentialTick,
  relatedArticles: [
    "where-do-ticks-live-around-property",
    "when-to-start-tick-protection",
    "how-to-reduce-mosquitoes-around-property",
  ],
  related: [further.tickPrevention, further.garlic],
  references: [sources.phacReduceTicks, sources.phoLyme, sources.hcRepellents],
  cta: {
    heading: "Contact Eco-Tick Solutions to discuss your property and 2027 service options.",
    body: ctaCopy.residential,
    label: "Get your free quote",
  },
};
