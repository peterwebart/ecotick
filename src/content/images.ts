import type { StaticImageData } from "next/image";

import familyBackyard from "../../public/images/eco-tick/home/eco-tick-family-dog-backyard-outdoor-living.webp";
import residentialPatio from "../../public/images/eco-tick/residential/eco-tick-residential-backyard-patio.webp";
import commercialPatio from "../../public/images/eco-tick/commercial/eco-tick-commercial-resort-patio-dining.webp";
import largePropertyAerial from "../../public/images/eco-tick/large-properties/eco-tick-large-property-aerial-estate.webp";
import garlicTreatment from "../../public/images/eco-tick/garlic/eco-tick-garlic-based-treatment.webp";
import tractorSprayer from "../../public/images/eco-tick/brand/eco-tick-tractor-mounted-sprayer-spring-application.webp";
import truckRig from "../../public/images/eco-tick/truck/eco-tick-truck-mounted-sprayer-tank-and-reel.webp";
import truckDriveway from "../../public/images/eco-tick/truck/eco-tick-service-truck-on-residential-driveway.webp";
import truckSprayingBorder from "../../public/images/eco-tick/truck/eco-tick-technician-spraying-garden-border.webp";
import truckSprayingLawn from "../../public/images/eco-tick/truck/eco-tick-truck-mounted-spraying-large-lawn.webp";
import truckBedCloseup from "../../public/images/eco-tick/truck/eco-tick-truck-bed-spray-equipment-closeup.webp";
import truckTwoTechs from "../../public/images/eco-tick/truck/eco-tick-two-technicians-truck-mounted-application.webp";
import truckFrontGarden from "../../public/images/eco-tick/truck/eco-tick-technician-treating-front-garden-bed.webp";

export type SiteImage = {
  src: StaticImageData;
  /**
   * Descriptive, not keyword-stuffed (brief section 5).
   *
   * These are illustrative library images, NOT photographs of Eco-Tick staff,
   * customers or completed work. Alt text is written so it never implies
   * otherwise - "a technician", never "our technician". Replace with real
   * Eco-Tick photography when available and rewrite the alt text accordingly.
   */
  alt: string;
};

export const images = {
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
  largePropertyAerial: {
    src: largePropertyAerial,
    alt: "Aerial view of a large rural property with a pond, woodland and open fields",
  },
  garlicTreatment: {
    src: garlicTreatment,
    alt: "Garlic bulbs and cloves beside a small amber bottle on a weathered wooden surface",
  },
  /**
   * The one genuine Eco-Tick photograph supplied so far, confirmed by the
   * client as founder Edward Chodowski. Only 330x328, which caps it at roughly
   * 165 CSS px on a retina screen - fine as an inset, nowhere near enough for
   * a hero. The camera original is still worth chasing.
   */
  /**
   * Eco-Tick's own branded vehicle and equipment. The truck-mounted rig is the
   * differentiator customers name unprompted, so these carry the service pages
   * rather than the generic backyard library shots.
   */
  truckRig: {
    src: truckRig,
    alt: "Eco-Tick's truck-mounted spray rig: a tank, pressure gauge and hose reel mounted in the bed of a branded pickup",
  },
  truckDriveway: {
    src: truckDriveway,
    alt: "The Eco-Tick service truck parked on a gravel driveway at a large residential property",
  },
  truckSprayingBorder: {
    src: truckSprayingBorder,
    alt: "An Eco-Tick technician spraying a garden border beside the branded service truck",
  },
  truckSprayingLawn: {
    src: truckSprayingLawn,
    alt: "An Eco-Tick technician applying treatment across a large lawn using the truck-mounted hose reel",
  },
  truckBedCloseup: {
    src: truckBedCloseup,
    alt: "Close view of the Eco-Tick truck bed showing the spray tank and hose reel",
  },
  truckTwoTechs: {
    src: truckTwoTechs,
    alt: "Two Eco-Tick technicians working from the truck-mounted spray rig at a residential property",
  },
  truckFrontGarden: {
    src: truckFrontGarden,
    alt: "An Eco-Tick technician treating a front garden bed, hose run from the truck-mounted tank",
  },
  founderAtWork: {
    src: tractorSprayer,
    alt: "Edward Chodowski, founder of Eco-Tick Solutions, on a compact tractor fitted with a tank sprayer during a spring application beside a pond",
  },
} as const satisfies Record<string, SiteImage>;
