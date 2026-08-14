import type { ServicePage } from "@/content/types";
import { residential } from "./residential";
import { commercial } from "./commercial";
import { largeProperty } from "./largeProperty";
import { garlicSolution, safetyEnvironment } from "./trust";
import { mosquitoControl, tickMosquito } from "./mosquito";
import { about, howItWorks, serviceAreas, whoWeServe } from "./company";

export {
  residential,
  commercial,
  largeProperty,
  garlicSolution,
  safetyEnvironment,
  mosquitoControl,
  tickMosquito,
  howItWorks,
  whoWeServe,
  about,
  serviceAreas,
};

export const allServicePages: readonly ServicePage[] = [
  residential,
  commercial,
  largeProperty,
  mosquitoControl,
  tickMosquito,
  garlicSolution,
  safetyEnvironment,
  howItWorks,
  whoWeServe,
  about,
  serviceAreas,
];

/** Routes safe to advertise in the sitemap: everything not flagged noindex. */
export const indexableServicePaths: readonly string[] = allServicePages
  .filter((p) => !p.noindex)
  .map((p) => `/${p.slug}`);
