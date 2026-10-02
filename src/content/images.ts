import type { StaticImageData } from "next/image";

import heroProperty from "../../public/images/eco-tick/real/eco-tick-real-aerial-wooded-property.webp";
import largeProperty from "../../public/images/eco-tick/real/eco-tick-real-aerial-wide-estate.webp";
import aerialTruck from "../../public/images/eco-tick/real/eco-tick-real-aerial-truck-spraying.webp";
import aerialTreating from "../../public/images/eco-tick/real/eco-tick-real-aerial-treating-lawn.webp";
import aerialTopdown from "../../public/images/eco-tick/real/eco-tick-real-aerial-spraying-topdown.webp";
import residentialSpraying from "../../public/images/eco-tick/real/eco-tick-real-spraying-rainbow.webp";
import treatmentLawn from "../../public/images/eco-tick/real/eco-tick-real-spraying-lawn-behind.webp";
import sprayingPath from "../../public/images/eco-tick/real/eco-tick-real-spraying-stone-path.webp";
import sprayingWaterfront from "../../public/images/eco-tick/real/eco-tick-real-spraying-waterfront.webp";
import commercialTruck from "../../public/images/eco-tick/real/eco-tick-real-truck-in-woods.webp";
import reachCanopy from "../../public/images/eco-tick/real/eco-tick-real-spray-reach-canopy.webp";
import reachPatio from "../../public/images/eco-tick/real/eco-tick-real-spray-reach-patio.webp";
import reachWoodland from "../../public/images/eco-tick/real/eco-tick-real-spray-reach-woodland.webp";
import founderPhoto from "../../public/images/eco-tick/brand/eco-tick-tractor-mounted-sprayer-spring-application.webp";

export type SiteImage = { src: StaticImageData; alt: string };

/**
 * EVERY IMAGE HERE IS REAL.
 *
 * Frames are pulled from Eco-Tick's own drone and phone footage of actual
 * treatments — the real truck, real technicians, real properties. The earlier
 * AI-generated set was removed after negative feedback; among other problems it
 * showed a white flatbed with a red target logo, while the real truck is a grey
 * Silverado with a completely different wrap.
 *
 * Each frame was chosen as the sharpest in a ±0.6s window around its moment, by
 * Laplacian variance, since video frames blur easily under motion. The 4K
 * sources are downscaled to 1800px; the three "reach" shots come from 720p clips
 * and are 1280px, so they suit cards and inline figures rather than full-width
 * heroes.
 *
 * Do not add generated imagery back. If a slot needs a photo nobody has taken,
 * leave it without one.
 */
export const images = {
  heroProperty: {
    src: heroProperty,
    alt: "Aerial view of a treed residential property with a wide lawn, where an Eco-Tick technician is treating the borders",
  },
  largeProperty: {
    src: largeProperty,
    alt: "Aerial view of a large wooded property during an Eco-Tick treatment",
  },
  aerialTruck: {
    src: aerialTruck,
    alt: "Overhead view of the Eco-Tick truck on a gravel drive, its spray tank in the bed, with a technician treating the lawn beside it",
  },
  aerialTreating: {
    src: aerialTreating,
    alt: "Aerial view of an Eco-Tick technician spraying a large lawn, the mist visible across the grass",
  },
  aerialTopdown: {
    src: aerialTopdown,
    alt: "Top-down view of an Eco-Tick technician spraying a lawn beside a gravel drive",
  },
  residentialSpraying: {
    src: residentialSpraying,
    alt: "An Eco-Tick technician spraying a residential lawn, a rainbow forming in the mist",
  },
  treatmentLawn: {
    src: treatmentLawn,
    alt: "An Eco-Tick technician walking a striped lawn while spraying treatment from a hose",
  },
  sprayingPath: {
    src: sprayingPath,
    alt: "An Eco-Tick technician treating a lawn crossed by a stone path",
  },
  sprayingWaterfront: {
    src: sprayingWaterfront,
    alt: "An Eco-Tick technician treating a waterfront lawn beside a stone path",
  },
  commercialTruck: {
    src: commercialTruck,
    alt: "An Eco-Tick technician walking toward the company truck parked on a wooded property",
  },
  reachCanopy: {
    src: reachCanopy,
    alt: "Treatment spray reaching high into a tree canopy from a hand-held spray gun",
  },
  reachPatio: {
    src: reachPatio,
    alt: "Treatment spray arcing into the trees beside a backyard patio",
  },
  reachWoodland: {
    src: reachWoodland,
    alt: "Treatment spray reaching into woodland at the edge of a property",
  },
  /** Founder Edward Chodowski. Only 330x328 — inset use only, never a hero. */
  founderAtWork: {
    src: founderPhoto,
    alt: "Edward Chodowski, founder of Eco-Tick Solutions, on a compact tractor fitted with a tank sprayer during a spring application beside a pond",
  },
} as const satisfies Record<string, SiteImage>;
