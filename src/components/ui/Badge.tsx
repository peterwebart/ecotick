import Image from "next/image";
import type { Badge as BadgeData } from "@/content/badges";

export function BadgeTile({ badge }: { badge: BadgeData }) {
  return (
    <li className="flex flex-col items-center gap-3 text-center">
      <Image
        src={`/images/eco-tick/badges/${badge.icon}.png`}
        alt=""
        aria-hidden="true"
        width={88}
        height={88}
        sizes="88px"
      />
      <span>
        <span className="block font-display text-base leading-snug text-brand">
          {badge.title}
        </span>
        <span className="mt-1.5 block text-sm leading-relaxed text-ink-700">
          {badge.detail}
        </span>
      </span>
    </li>
  );
}
