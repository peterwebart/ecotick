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

/** Article 8. Mosquito library. */
export const reduceMosquitoes: Article = {
  slug: "how-to-reduce-mosquitoes-around-property",
  path: "/blog/how-to-reduce-mosquitoes-around-property",
  kind: "article",
  category: "mosquitoes",
  topic: "Mosquito prevention",
  h1: "How to Reduce Mosquitoes Around Your Property",
  metaTitle: "How to Reduce Mosquitoes Around Your Property",
  absoluteTitle: true,
  metaDescription:
    "Discover practical ways to reduce mosquito breeding opportunities around your Ontario home, yard or cottage property.",
  excerpt:
    "Discover practical ways to reduce mosquito breeding opportunities around your Ontario home, yard or cottage property.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "lakesidePatio",
  intro: [
    "Mosquitoes can quickly make outdoor spaces less enjoyable.",
    "Whether you are relaxing on a patio, spending time with family or maintaining a cottage property, reducing mosquito activity starts with understanding what attracts and supports mosquitoes around your property.",
    "One of the most important steps is eliminating unnecessary standing water.",
  ],
  takeaways: [
    "Eliminate unnecessary standing water: empty, remove, cover or store items so water cannot accumulate.",
    "Change water in bird baths and outdoor pet dishes regularly, and keep gutters and drainage clear.",
    "Walk around your property after significant rainfall and look for water collecting in low-lying areas, tire ruts, containers and unused equipment.",
    "Mosquitoes can also travel onto your property from surrounding areas. A comprehensive approach may involve source reduction, personal precautions and professional property services.",
  ],
  blocks: [
    section(
      "1. Remove standing water",
      p(
        "Mosquitoes lay their eggs in water. Even small collections of standing water can provide potential breeding sites.",
      ),
      p("Inspect your property for:"),
      ul(
        "Flower pots and plant trays.",
        "Buckets and watering cans.",
        "Old tires.",
        "Wheelbarrows.",
        "Outdoor toys.",
        "Uncovered containers.",
        "Clogged gutters.",
        "Water collecting in unused equipment.",
      ),
      p("Empty, remove, cover or store these items so water cannot accumulate."),
    ),
    section(
      "2. Maintain bird baths and outdoor water containers",
      p("Change water in bird baths and outdoor pet dishes regularly."),
      p("Keep water containers clean and avoid allowing water to remain stagnant."),
    ),
    section(
      "3. Check your gutters and drainage",
      p("Blocked gutters can hold water and create mosquito breeding opportunities."),
      p(
        "Clean gutters regularly and investigate areas where water consistently collects after rainfall.",
      ),
      p("Where possible, correct drainage problems and eliminate unnecessary pooling."),
    ),
    section(
      "4. Maintain vegetation",
      p(
        "Keep outdoor areas maintained by trimming overgrown vegetation and removing unnecessary debris.",
      ),
      p(
        "Dense vegetation can provide resting places for adult mosquitoes, although removing vegetation alone will not eliminate mosquito activity.",
      ),
    ),
    section(
      "5. Inspect your property after rainfall",
      p("Walk around your property after significant rainfall."),
      p("Look for water collecting in:"),
      ul("Low-lying areas.", "Tire ruts.", "Containers.", "Drainage areas.", "Unused equipment."),
      p("Some water may remain for several days, creating potential breeding opportunities."),
    ),
    section(
      "6. Combine property maintenance with professional service",
      p(
        "Reducing breeding sites is an important part of mosquito management, but mosquitoes can also travel onto your property from surrounding areas.",
      ),
      p(
        "A comprehensive approach may involve source reduction, personal precautions and professional property services.",
      ),
      p(
        "Eco-Tick Solutions provides [professional mosquito control services](/mosquito-control) for residential and larger properties.",
      ),
    ),
  ],
  service: services.mosquito,
  relatedArticles: [
    "where-do-mosquitoes-breed",
    "how-to-prepare-yard-for-mosquito-season",
    "mosquito-control-commercial-properties",
  ],
  related: [further.programs, further.garlic],
  references: [sources.phacStandingWater, sources.hcRepellents],
  cta: {
    heading: "Contact Eco-Tick Solutions to discuss mosquito control for your property.",
    body: ctaCopy.residential,
    label: "Get your free quote",
  },
};
