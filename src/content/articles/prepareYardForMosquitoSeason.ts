import type { Article } from "@/content/types";
import {
  LIBRARY_AUTHOR,
  LIBRARY_PUBLISHED_AT,
  checklist,
  further,
  p,
  section,
  services,
  sources,
  ul,
} from "./library";

/** Article 11. Mosquito library. */
export const prepareYardForMosquitoSeason: Article = {
  slug: "how-to-prepare-yard-for-mosquito-season",
  path: "/blog/how-to-prepare-yard-for-mosquito-season",
  kind: "article",
  category: "mosquitoes",
  topic: "Seasonal property preparation",
  h1: "How to Prepare Your Yard for Mosquito Season",
  metaTitle: "How to Prepare Your Yard for Mosquito Season",
  absoluteTitle: true,
  metaDescription:
    "Use this practical spring checklist to inspect your Ontario yard, remove standing water and prepare your outdoor space for mosquito season.",
  excerpt:
    "Use this practical spring checklist to inspect your Ontario yard, remove standing water and prepare your outdoor space for mosquito season.",
  publishedAt: LIBRARY_PUBLISHED_AT,
  author: LIBRARY_AUTHOR,
  imageKey: "waterfrontCottage",
  intro: [
    "Spring is the ideal time to start preparing your property for the warmer months.",
    "Before outdoor dining, gardening and family activities become part of your regular routine, take a few steps to reduce mosquito breeding opportunities around your home.",
    "Use this checklist to prepare your yard.",
  ],
  takeaways: [
    "Walk the entire property in spring, and remove, empty or cover anything that can collect rainwater.",
    "Clean gutters and downspouts, maintain bird baths and water features, and fit rain barrels with fine screening.",
    "Look for areas that retain water after rainfall. Persistent pooling may indicate an underlying drainage issue.",
    "Even a well-maintained property can experience mosquito activity from surrounding areas.",
  ],
  blocks: [
    section(
      "Step 1: Inspect your property",
      p("Walk around the entire property and look for anything that can collect rainwater."),
      p("Check:"),
      ul(
        "Flower pots and plant trays.",
        "Buckets and watering cans.",
        "Outdoor toys.",
        "Old tires.",
        "Wheelbarrows.",
        "Uncovered containers.",
        "Unused equipment.",
        "Low-lying areas.",
      ),
      p("Remove, empty or cover items that collect water."),
    ),
    section(
      "Step 2: Clean your gutters",
      p("Blocked eavestroughs can retain water and create potential breeding sites."),
      p("Remove leaves and debris, check downspouts and make sure water drains correctly."),
    ),
    section(
      "Step 3: Check bird baths and water features",
      p("Replace water in bird baths regularly and maintain outdoor water features."),
      p(
        "For rain barrels, use appropriate fine screening to prevent mosquitoes from accessing the water.",
      ),
    ),
    section(
      "Step 4: Address drainage problems",
      p("Look for areas that retain water after rainfall."),
      p(
        "Persistent pooling may indicate an underlying drainage issue. Where appropriate, correct the problem or seek professional advice.",
      ),
    ),
    section(
      "Step 5: Maintain your outdoor space",
      p(
        "Trim overgrown vegetation, remove unnecessary debris and keep frequently used outdoor areas maintained.",
      ),
    ),
    section(
      "Step 6: Plan professional mosquito control",
      p("Even a well-maintained property can experience mosquito activity from surrounding areas."),
      p(
        "Professional mosquito control can complement regular property maintenance as part of a broader outdoor management plan.",
      ),
      p(
        "Eco-Tick Solutions provides [professional mosquito and tick control services](/mosquito-control) for homeowners, cottage owners and larger-property customers.",
      ),
    ),
    section(
      "Your spring preparation checklist",
      checklist(
        "Remove standing water.",
        "Clean gutters.",
        "Empty unused containers.",
        "Maintain bird baths and water features.",
        "Inspect drainage after rainfall.",
        "Maintain vegetation.",
        "Review outdoor activity areas.",
        "Discuss professional mosquito control requirements.",
      ),
    ),
  ],
  service: services.mosquito,
  relatedArticles: [
    "where-do-mosquitoes-breed",
    "how-to-reduce-mosquitoes-around-property",
    "when-does-mosquito-season-start-ontario",
  ],
  related: [further.programs, further.garlic],
  references: [sources.phacStandingWater],
  cta: {
    heading: "Get your property ready for the 2027 outdoor season.",
    body: "Contact Eco-Tick Solutions for a quote.",
    label: "Get your free quote",
  },
};
