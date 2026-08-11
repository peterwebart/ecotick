import type { StaticImageData } from "next/image";

import familyBackyard from "../../public/images/eco-tick/home/eco-tick-family-dog-backyard-outdoor-living.webp";
import technicianTreating from "../../public/images/eco-tick/how-it-works/eco-tick-technician-applying-yard-treatment.webp";
import residentialPatio from "../../public/images/eco-tick/residential/eco-tick-residential-backyard-patio.webp";
import commercialPatio from "../../public/images/eco-tick/commercial/eco-tick-commercial-resort-patio-dining.webp";
import largePropertyAerial from "../../public/images/eco-tick/large-properties/eco-tick-large-property-aerial-estate.webp";
import garlicTreatment from "../../public/images/eco-tick/garlic/eco-tick-garlic-based-treatment.webp";
import tractorSprayer from "../../public/images/eco-tick/brand/eco-tick-tractor-mounted-sprayer-spring-application.webp";

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
  technicianTreating: {
    src: technicianTreating,
    alt: "A pest control technician applying treatment along a landscaped garden bed",
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
  founderAtWork: {
    src: tractorSprayer,
    alt: "Edward Chodowski, founder of Eco-Tick Solutions, on a compact tractor fitted with a tank sprayer during a spring application beside a pond",
  },
} as const satisfies Record<string, SiteImage>;
