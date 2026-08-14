/**
 * Trust badges. Business facts — Health Canada registration, applicator
 * licensing, insurance — are stated on Eco-Tick's authority as the operator.
 *
 * Two wordings from the competitor reference set are not reproduced:
 * "100% Bee Safe" and "Pet Friendly" as bare claims. Both are replaced with
 * wording that carries the same meaning without asserting absolute safety for a
 * registered pest control product. See CLAIMS-REGISTER.md.
 *
 * The artwork is redrawn in Eco-Tick's palette rather than traced from the
 * competitor's badges.
 */

export type Badge = {
  icon: string;
  title: string;
  detail: string;
};

export const liveBadges: readonly Badge[] = [
  {
    icon: "registered",
    title: "Health Canada registered",
    detail: "The product we apply is a registered pest control product.",
  },
  {
    icon: "licensed",
    title: "Licensed technicians",
    detail: "Every application is carried out by a licensed applicator.",
  },
  {
    icon: "insured",
    title: "Fully insured",
    detail: "Full liability coverage on every job, residential or commercial.",
  },
  {
    icon: "pollinator",
    title: "Pollinator conscious",
    detail:
      "We treat shaded margins and leaf litter, not flowering beds. Keep hives? We map them as exclusion zones.",
  },
  {
    icon: "pets",
    title: "Family and pet conscious",
    detail:
      "Designed for use around families and pets when applied as directed. No harsh synthetic pesticides.",
  },
  {
    icon: "truck-mounted",
    title: "Truck-mounted spray system",
    detail:
      "Reaches treelines and deep woodland a backpack unit cannot, so coverage does not stop at the lawn edge.",
  },
  {
    icon: "garlic",
    title: "Natural garlic-based",
    detail:
      "Built around a garlic formulation rather than a conventional broad-spectrum product.",
  },
  {
    icon: "seasonal",
    title: "Spring to fall programmes",
    detail:
      "Scheduled across the season, because tick activity peaks twice and mosquito pressure peaks between.",
  },
  {
    icon: "service-area",
    title: "Kingston & Eastern Ontario",
    detail:
      "Based on Creekford Road in Kingston, covering the surrounding region.",
  },
  {
    icon: "established",
    title: "Owner-operated since 2010",
    detail:
      "Started with Edward Chodowski's own backyard. He still runs the equipment.",
  },
  {
    icon: "free-quote",
    title: "Free, no-obligation quote",
    detail: "We walk the property and price the work before you commit to anything.",
  },
];
