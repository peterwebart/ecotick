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

/** Article 6. Tick library. */
export const ticksInOntario: Article = {
  slug: "ticks-in-ontario-homeowners-guide",
  path: "/blog/ticks-in-ontario-homeowners-guide",
  kind: "article",
  category: "ticks",
  topic: "Tick education",
  h1: "Ticks in Ontario: What Homeowners Should Know",
  metaTitle: "Ticks in Ontario: What Homeowners Should Know",
  absoluteTitle: true,
  metaDescription:
    "An Ontario homeowner's guide to tick habitats, seasonal activity, Lyme disease awareness and practical property prevention.",
  excerpt:
    "An Ontario homeowner's guide to tick habitats, seasonal activity, Lyme disease awareness and practical property prevention.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "tickOnForearm",
  intro: [
    "Ticks have become an important outdoor awareness topic for Ontario homeowners.",
    "Whether you live in a suburban neighbourhood, own a cottage or manage a rural property, understanding where ticks live and when they are active can help you make informed decisions about your outdoor environment.",
  ],
  takeaways: [
    "Several tick species are found in Ontario. The blacklegged tick, also known as the deer tick, is particularly important because infected blacklegged ticks can transmit Lyme disease and other illnesses.",
    "Ticks are most active during spring and summer, but they can be encountered during other parts of the year when temperatures are above freezing.",
    "A practical approach combines personal precautions with property maintenance.",
    "Remove an attached tick promptly using fine-tipped tweezers. If you have concerns about a tick bite or symptoms, contact a healthcare professional.",
  ],
  blocks: [
    section(
      "What types of ticks are found in Ontario?",
      p("Several tick species are found in Ontario."),
      p(
        `The blacklegged tick, also known as the deer tick, is particularly important because infected blacklegged ticks can transmit [Lyme disease](${sources.phoLyme.href}) and other illnesses.`,
      ),
      p(
        "Not every tick carries a disease, and not every tick bite results in infection. However, it is important to take precautions and follow public health advice.",
      ),
    ),
    section(
      "When are ticks active?",
      p(
        "Ticks are most active during spring and summer, but they can be encountered during other parts of the year when temperatures are above freezing.",
      ),
      p("Their activity depends on weather conditions, local habitat and life stage."),
      p("Homeowners should therefore avoid relying on a single start or end date for tick season."),
    ),
    section(
      "Where are ticks commonly found?",
      p("Potential tick habitats include:"),
      ul(
        "Wooded areas.",
        "Forest edges.",
        "Tall grass.",
        "Shrubs and brush.",
        "Leaf litter.",
        "Wood piles.",
        "Areas frequented by wildlife.",
      ),
      p(
        "Ticks do not fly or jump. They can attach to people and animals when they come into contact with vegetation where ticks are waiting.",
      ),
    ),
    section(
      "How can homeowners reduce exposure?",
      p("A practical approach combines personal precautions with property maintenance."),
      h3("Around the property"),
      ul(
        "Keep grass short.",
        "Remove leaf litter and brush.",
        "Trim dense vegetation.",
        "Create a defined border between lawn and wooded areas.",
        "Keep play areas away from wooded edges.",
      ),
      h3("When spending time outdoors"),
      ul(
        "Wear closed-toe shoes.",
        "Wear light-coloured clothing.",
        "Use an appropriate insect repellent.",
        "Stay on cleared paths where possible.",
        "Check yourself, children and pets after outdoor activities.",
      ),
    ),
    section(
      "What should you do if you find a tick?",
      p(
        `Remove an attached tick promptly using fine-tipped tweezers and follow current [public health guidance](${sources.phacRemoveTick.href}).`,
      ),
      p(
        "If you have concerns about a tick bite or symptoms, contact a healthcare professional. Do not rely on property treatment as a substitute for medical prevention or care.",
      ),
    ),
    section(
      "Prepare your property for the outdoor season",
      p(
        "Understanding tick habitats is the first step toward a more informed property maintenance plan.",
      ),
      p(
        "Eco-Tick Solutions offers [professional tick and mosquito control services](/residential-tick-control) for residential and other outdoor properties.",
      ),
    ),
  ],
  service: services.residentialTick,
  relatedArticles: [
    "when-does-tick-season-start-ontario",
    "where-do-ticks-live-around-property",
    "when-to-start-tick-protection",
  ],
  related: [further.tickGuide, further.tickSeason],
  references: [
    sources.phoLyme,
    sources.kflaTicks,
    sources.phoRiskAreas,
    sources.phacRemoveTick,
    sources.hcRepellents,
  ],
  cta: {
    heading: "Contact Eco-Tick Solutions to discuss your 2027 property protection plan.",
    body: ctaCopy.residential,
    label: "Get your free quote",
  },
};
