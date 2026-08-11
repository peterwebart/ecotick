import Image from "next/image";

/**
 * The 18-icon set, sliced from the supplied sheet to a uniform 256x256
 * transparent canvas so every icon reads at the same optical scale.
 *
 * No CSS filters are applied (brief phase 3) - the icons carry their own
 * lighting and palette, and tinting them would break the set's consistency.
 */
export const iconNames = [
  "tick-protection",
  "mosquito-protection",
  "garlic-solution",
  "family-and-pets",
  "environmental",
  "seasonal-protection",
  "professional-application",
  "large-property",
  "residential",
  "commercial",
  "cottage",
  "assessment",
  "treatment",
  "maintenance",
  "service-area",
  "quote",
  "shield-protection",
  "outdoor-living",
] as const;

export type IconName = (typeof iconNames)[number];

export function Icon({
  name,
  size = 48,
  /** Supply only when the icon carries meaning no adjacent text already conveys. */
  label,
  className = "",
}: {
  name: IconName;
  size?: number;
  label?: string;
  className?: string;
}) {
  return (
    <Image
      src={`/images/eco-tick/icons/${name}.webp`}
      alt={label ?? ""}
      aria-hidden={label ? undefined : true}
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      sizes={`${size}px`}
    />
  );
}
