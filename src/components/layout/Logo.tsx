import Image from "next/image";
import logo from "../../../public/images/eco-tick/brand/eco-tick-solutions-logo.png";
import { site } from "@/content/site";

/**
 * The real Eco-Tick mark. The supplied logo is dark artwork on white, so on the
 * dark footer it sits on a light plate rather than being inverted — inverting a
 * logo with a red target and a black tick would wreck both.
 */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Image
      src={logo}
      alt={`${site.name} — Take Back the Outdoors`}
      width={168}
      height={130}
      priority={tone === "dark"}
      className={
        tone === "light"
          ? "h-auto w-[150px] rounded-card bg-bone-50 p-2.5"
          : "h-auto w-[132px]"
      }
    />
  );
}
