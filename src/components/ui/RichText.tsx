import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Plain content strings with inline links, written as [label](/path).
 *
 * Content stays serialisable (no JSX in content files), and an internal link is
 * still a next/link with prefetching. Anything that is not a well-formed
 * [label](href) pair renders as the literal text it is.
 */
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

const linkClass =
  "font-medium text-forest-800 underline decoration-forest-800/35 underline-offset-2 " +
  "transition-colors hover:decoration-forest-800";

export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(LINK)) {
    const [whole, label = "", href = ""] = match;
    const at = match.index;
    if (at > cursor) parts.push(text.slice(cursor, at));
    parts.push(
      href.startsWith("/") ? (
        <Link key={at} href={href} className={linkClass}>
          {label}
        </Link>
      ) : (
        <a key={at} href={href} className={linkClass}>
          {label}
        </a>
      ),
    );
    cursor = at + whole.length;
  }

  if (cursor === 0) return <>{text}</>;
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}
