import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "tier";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-card font-semibold " +
  "transition-colors duration-200 ease-out-soft focus-visible:outline-2 " +
  "focus-visible:outline-offset-3";

const variants: Record<Variant, string> = {
  // moss-600 clears 5.08:1 against white. Do not lighten without rechecking.
  primary: "bg-cta text-white hover:bg-cta-hover",
  secondary:
    "bg-transparent text-brand border border-forest-900/25 hover:bg-forest-900/5",
  ghost: "bg-white/10 text-white border border-white/30 hover:bg-white/20",
  // clay-600, not the mockup's clay-500 which fails AA at this text size.
  tier: "bg-clay-600 text-white hover:bg-clay-600/90",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & Omit<ComponentProps<"button">, "className">)
);

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (rest.href !== undefined) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={cls} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { href: _ignored, ...buttonProps } = rest;
  void _ignored;
  return (
    <button className={cls} {...buttonProps}>
      {children}
    </button>
  );
}
