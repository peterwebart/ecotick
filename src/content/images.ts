import type { StaticImageData } from "next/image";

import familyBackyard from "../../public/images/eco-tick/home/eco-tick-family-dog-backyard-outdoor-living.webp";
import residentialPatio from "../../public/images/eco-tick/residential/eco-tick-residential-backyard-patio.webp";
import commercialPatio from "../../public/images/eco-tick/commercial/eco-tick-commercial-resort-patio-dining.webp";
import garlicTreatment from "../../public/images/eco-tick/garlic/eco-tick-garlic-based-treatment.webp";
import founderPhoto from "../../public/images/eco-tick/brand/eco-tick-tractor-mounted-sprayer-spring-application.webp";

import truckRig from "../../public/images/eco-tick/truck/eco-tick-service-truck-tank-and-reel.webp";
import truckEstateDriveway from "../../public/images/eco-tick/truck/eco-tick-service-truck-private-estate-driveway.webp";
import truckSprayingBorder from "../../public/images/eco-tick/truck/eco-tick-technician-spraying-lawn-border.webp";
import truckEstateGrounds from "../../public/images/eco-tick/truck/eco-tick-technician-treating-estate-grounds.webp";
import truckFrontYard from "../../public/images/eco-tick/truck/eco-tick-technician-treating-front-yard.webp";
import truckLakeside from "../../public/images/eco-tick/truck/eco-tick-lakeside-cottage-treatment.webp";
import largePropertyAerial from "../../public/images/eco-tick/large-properties/eco-tick-large-property-aerial-treatment.webp";
import tickMacro from "../../public/images/eco-tick/pests/blacklegged-tick-on-grass-blade.webp";
import mosquitoMacro from "../../public/images/eco-tick/pests/mosquito-resting-on-leaf.webp";

export type SiteImage = { src: StaticImageData; alt: string };

/**
 * The truck set carries the real Eco-Tick logo, the correct 1-888-912-5152 on
 * every panel, and one consistent mark throughout — so there is no longer a
 * mismatch between what the header says and what the photography shows.
 *
 * Alt text describes what is visible without keyword stuffing. It says "an
 * Eco-Tick technician" because these are the company's own branded vehicle and
 * crew imagery, not generic library stock.
 */
export const images = {
  // --- Fleet and service ---
  truckRig: {
    src: truckRig,
    alt: "The Eco-Tick service truck from behind, showing the tank, pump and hose reel mounted on the flatbed",
  },
  truckEstateDriveway: {
    src: truckEstateDriveway,
    alt: "The Eco-Tick service truck parked on the driveway of a gated private estate",
  },
  truckSprayingBorder: {
    src: truckSprayingBorder,
    alt: "An Eco-Tick technician spraying a garden border from the truck-mounted hose reel",
  },
  truckEstateGrounds: {
    src: truckEstateGrounds,
    alt: "An Eco-Tick technician treating the grounds of a large stone-fronted home",
  },
  truckFrontYard: {
    src: truckFrontYard,
    alt: "An Eco-Tick technician treating a front yard beside the branded service truck",
  },
  truckLakeside: {
    src: truckLakeside,
    alt: "An Eco-Tick technician treating the lawn of a lakeside cottage, dock and water behind",
  },
  largePropertyAerial: {
    src: largePropertyAerial,
    alt: "Aerial view of an Eco-Tick technician treating the lawns of a large estate property",
  },

  // --- Education: macro pest photography for the guides ---
  tickMacro: {
    src: tickMacro,
    alt: "Close view of a blacklegged tick questing on a blade of grass",
  },
  mosquitoMacro: {
    src: mosquitoMacro,
    alt: "Close view of a mosquito resting on a green leaf",
  },

  // --- Lifestyle and product ---
  familyBackyard: {
    src: familyBackyard,
    alt: "A family and their dog playing on a backyard lawn in late-afternoon sunlight",
  },
  residentialPatio: {
    src: residentialPatio,
    alt: "A residential backyard with patio seating, lawn and mature trees",
  },
  commercialPatio: {
    src: commercialPatio,
    alt: "An outdoor restaurant patio at a lakeside resort in evening light",
  },
  garlicTreatment: {
    src: garlicTreatment,
    alt: "Garlic bulbs and cloves beside a small amber bottle on a weathered wooden surface",
  },

  /** Founder Edward Chodowski. Only 330x328 — inset use only, never a hero. */
  founderAtWork: {
    src: founderPhoto,
    alt: "Edward Chodowski, founder of Eco-Tick Solutions, on a compact tractor fitted with a tank sprayer during a spring application beside a pond",
  },
} as const satisfies Record<string, SiteImage>;
