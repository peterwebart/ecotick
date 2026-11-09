import type { Article } from "@/content/types";
import {
  LIBRARY_AUTHOR,
  LIBRARY_PUBLISHED_AT,
  ctaCopy,
  further,
  h3,
  p,
  section,
  services,
  sources,
  ul,
} from "./library";

/** Article 9. Mosquito library. */
export const whereMosquitoesBreed: Article = {
  slug: "where-do-mosquitoes-breed",
  path: "/blog/where-do-mosquitoes-breed",
  kind: "article",
  category: "mosquitoes",
  topic: "Mosquito habitat",
  h1: "Where Do Mosquitoes Breed?",
  metaTitle: "Where Do Mosquitoes Breed? Common Sources Around Your Home",
  absoluteTitle: true,
  metaDescription:
    "Learn where mosquitoes lay their eggs, how standing water creates breeding opportunities and what to inspect around your property.",
  excerpt:
    "Learn where mosquitoes lay their eggs, how standing water creates breeding opportunities and what to inspect around your property.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "mosquitoesOverVegetation",
  intro: [
    "If mosquitoes are making your backyard uncomfortable, it is worth looking beyond the places where you see them flying.",
    "Mosquitoes need water to complete their early life stages. Identifying potential breeding sites is one of the most useful steps in reducing mosquito activity around a property.",
  ],
  takeaways: [
    "Mosquitoes need water to complete their early life stages. Some species breed in larger natural water sources, while others can use small containers around residential properties.",
    "Common sources include flower pot trays, buckets, old tires, clogged gutters, bird baths, uncovered rain barrels and poorly drained areas.",
    "Warm temperatures can accelerate development, so do not assume a small amount of standing water is harmless simply because it appeared recently.",
    "Not every breeding source is located within your property boundaries.",
  ],
  blocks: [
    section(
      "Mosquitoes can use surprisingly small amounts of water",
      p(
        "Different mosquito species use different types of water habitats. Some breed in larger natural water sources, while others can use small containers around residential properties.",
      ),
      p("Common sources include:"),
      h3("Around the home"),
      ul(
        "Flower pot trays.",
        "Buckets.",
        "Watering cans.",
        "Uncovered containers.",
        "Outdoor toys.",
        "Old tires.",
        "Clogged gutters.",
      ),
      h3("In the backyard"),
      ul(
        "Bird baths.",
        "Decorative water features.",
        "Poorly drained areas.",
        "Water collected in equipment.",
        "Uncovered rain barrels.",
      ),
      h3("Around larger and rural properties"),
      ul(
        "Low-lying areas that retain water.",
        "Drainage channels.",
        "Containers and equipment.",
        "Unused structures that collect rainwater.",
        "Areas where water remains stagnant.",
      ),
    ),
    section(
      "How long does standing water need to remain?",
      p("The time required for mosquitoes to develop varies by species and environmental conditions."),
      p(
        "Warm temperatures can accelerate development. Therefore, homeowners should not assume that a small amount of standing water is harmless simply because it appeared recently.",
      ),
      p("Regular inspections are more useful than waiting for mosquitoes to become noticeable."),
    ),
    section(
      "How to eliminate common breeding sites",
      ul(
        "Empty unnecessary containers.",
        "Turn pots, buckets and wheelbarrows upside down.",
        "Clean gutters.",
        "Change water in bird baths regularly.",
        "Cover rain barrels with suitable screening.",
        "Correct drainage issues where practical.",
        "Remove discarded objects that collect water.",
      ),
      p(
        "For larger water features or water that cannot be removed, seek appropriate guidance on permitted mosquito-control measures. Always follow applicable product labels and local requirements.",
      ),
    ),
    section(
      "Why professional mosquito control matters",
      p(
        "Removing standing water is essential, but not every breeding source is located within your property boundaries.",
      ),
      p(
        "Professional mosquito control can be considered as part of a broader property management approach.",
      ),
      p(
        "Eco-Tick Solutions works with residential and larger-property owners to discuss [mosquito and tick control services](/mosquito-control).",
      ),
    ),
  ],
  service: services.mosquito,
  relatedArticles: [
    "how-to-reduce-mosquitoes-around-property",
    "how-to-prepare-yard-for-mosquito-season",
    "how-long-does-mosquito-season-last-ontario",
  ],
  related: [further.programs, further.howItWorks],
  references: [sources.phacStandingWater],
  cta: {
    heading: "Request a quote for your property.",
    body: ctaCopy.residential,
    label: "Get your free quote",
  },
};
