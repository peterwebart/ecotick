import type { StaticImageData } from "next/image";

import tickOnLeaf from "../../public/images/eco-tick/blog/tick-on-green-leaf.webp";
import mosquitoOnSkin from "../../public/images/eco-tick/blog/mosquito-on-skin.webp";
import houseWithLawn from "../../public/images/eco-tick/blog/two-storey-house-with-lawn.webp";
import waterfrontCottage from "../../public/images/eco-tick/blog/waterfront-cottage-with-dock.webp";
import woodlandTrail from "../../public/images/eco-tick/blog/woodland-trail-with-leaf-litter.webp";
import childInspectingLawn from "../../public/images/eco-tick/blog/child-inspecting-lawn-with-magnifier.webp";
import dogOnLawn from "../../public/images/eco-tick/blog/golden-retriever-on-lawn.webp";
import tickOnForearm from "../../public/images/eco-tick/blog/tick-on-forearm-tick-check.webp";
import mosquitoesOverVegetation from "../../public/images/eco-tick/blog/mosquitoes-over-vegetation.webp";
import commercialBuilding from "../../public/images/eco-tick/blog/commercial-building-with-lawn.webp";
import lakesidePatio from "../../public/images/eco-tick/blog/lakeside-patio-adirondack-chairs.webp";
import woodenCabin from "../../public/images/eco-tick/blog/wooden-cabin-in-forest.webp";
import mosquitoOnDewyLeaf from "../../public/images/eco-tick/blog/mosquito-on-dewy-leaf.webp";

export type BlogImage = { src: StaticImageData; alt: string };

/**
 * ILLUSTRATIONS FOR THE BLOG LIBRARY — NOT PHOTOGRAPHS OF ECO-TICK'S WORK.
 *
 * Supplied by Eco-Tick in November 2026 for the article library. They are
 * generated illustrations of ticks, mosquitoes and generic Ontario properties.
 * They are kept apart from content/images.ts on purpose: that manifest holds
 * only real photography of Eco-Tick's truck, technicians and treatments, and
 * none of these may stand in for it. Never use one to depict Eco-Tick staff,
 * equipment, customers or a treated property. The article template captions
 * them as illustrations.
 *
 * Two images in the supplied set were left out deliberately:
 *   - a technician with a backpack sprayer. Eco-Tick's service is
 *     truck-mounted, and the supplier's own notes ruled it out for that reason.
 *   - a tick behind a red prohibition sign. It reads as a promise that
 *     treatment eliminates ticks, which no page on this site makes.
 *
 * Every file is about 300 x 333 px. Render at that size or smaller, never as a
 * full-width hero. The 1200 x 630 social cards in /images/eco-tick/blog/og/
 * are built from these for link previews and Article structured data.
 */
export const blogImages = {
  tickOnLeaf: { src: tickOnLeaf, alt: "Close-up of a tick on a green leaf" },
  mosquitoOnSkin: { src: mosquitoOnSkin, alt: "Close-up of a mosquito resting on a person's skin" },
  houseWithLawn: {
    src: houseWithLawn,
    alt: "Two-storey house with a covered porch, garden beds and a freshly mowed lawn",
  },
  waterfrontCottage: {
    src: waterfrontCottage,
    alt: "Wooden cottage beside a lake, with a dock, red Adirondack chairs and tall pines",
  },
  woodlandTrail: {
    src: woodlandTrail,
    alt: "Woodland trail in autumn with fallen leaves and brush along both edges",
  },
  childInspectingLawn: {
    src: childInspectingLawn,
    alt: "Child in a sun hat looking closely at a lawn through a magnifying glass",
  },
  dogOnLawn: {
    src: dogOnLawn,
    alt: "Golden retriever lying on a lawn in front of garden shrubs",
  },
  tickOnForearm: {
    src: tickOnForearm,
    alt: "Tick crawling on a person's forearm, found during a tick check",
  },
  mosquitoesOverVegetation: {
    src: mosquitoesOverVegetation,
    alt: "Mosquitoes flying over green vegetation",
  },
  commercialBuilding: {
    src: commercialBuilding,
    alt: "Modern commercial building with landscaped lawns and young trees",
  },
  lakesidePatio: {
    src: lakesidePatio,
    alt: "Stone patio with two Adirondack chairs overlooking a lake, edged with garden plants",
  },
  woodenCabin: {
    src: woodenCabin,
    alt: "Wooden cabin with a stone chimney and a porch, surrounded by forest",
  },
  mosquitoOnDewyLeaf: {
    src: mosquitoOnDewyLeaf,
    alt: "Mosquito resting on a leaf covered in water droplets",
  },
} as const satisfies Record<string, BlogImage>;

export type BlogImageKey = keyof typeof blogImages;

/**
 * Public path of an article's 1200 x 630 social card. One card exists for every
 * article in the blog stream; see scripts/audit.mjs, which fails the audit if a
 * blog page references a card that is not on disk.
 */
export function socialCardPath(slug: string): string {
  return `/images/eco-tick/blog/og/${slug}.jpg`;
}

export const SOCIAL_CARD_SIZE = { width: 1200, height: 630 } as const;
