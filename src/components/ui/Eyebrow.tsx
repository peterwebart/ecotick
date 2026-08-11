import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "light";
}) {
  return (
    <p
      className={`text-eyebrow font-semibold uppercase ${
        tone === "accent" ? "text-clay-600" : "text-sage-300"
      }`}
    >
      {children}
    </p>
  );
}
