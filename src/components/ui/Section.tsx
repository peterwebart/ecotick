import type { ReactNode } from "react";

type Tone = "surface" | "alt" | "inverse";

const tones: Record<Tone, string> = {
  surface: "bg-surface text-text",
  alt: "bg-surface-alt text-text",
  inverse: "bg-surface-inverse text-bone-50",
};

export function Section({
  children,
  tone = "surface",
  id,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 sm:py-24 ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}
