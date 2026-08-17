import Image from "next/image";
import logo from "../../../public/images/eco-tick/brand/eco-tick-solutions-logo.png";
import { site } from "@/content/site";

/**
 * The real Eco-Tick mark. The supplied logo is dark artwork on white, so on the
 * dark footer it sits on a light plate rather than being inverted — inverting a
 * logo with a red target and a black tick would wreck both.
 *
 * SIZING: the artwork is 640x497 (aspect 1.288) and it is a stacked lockup —
 * mark above two lines of type. At the previous 132px width it rendered 103px
 * tall inside a 72px header, overflowing across the header's bottom rule by
 * 31px. Widths here are set so the rendered height leaves even clearance top
 * and bottom inside the header, which is what makes it read as aligned:
 *
 *   mobile   74px wide ->  57px tall in an 80px header (11.5px each side)
 *   desktop  88px wide ->  68px tall in a 96px header (14px each side)
 *
 * Aspect ratio is untouched — only one axis is constrained, with h-auto.
 */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Image
      src={logo}
      alt={`${site.name} — Take Back the Outdoors`}
      width={640}
      height={497}
      priority={tone === "dark"}
      className={
        tone === "light"
          ? "h-auto w-[136px] rounded-card bg-bone-50 p-2.5"
          : "h-auto w-[74px] lg:w-[88px]"
      }
    />
  );
}
