import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { serviceTiers } from "@/content/home";

const tierIcons: Record<string, IconName> = {
  residential: "residential",
  commercial: "commercial",
  "large-property": "large-property",
};

/** Audience triage directly under the hero: one tap to the right money page. */
export function TierStrip() {
  return (
    <div className="border-b border-border bg-forest-900">
      <Container>
        <ul className="grid gap-px sm:grid-cols-3">
          {serviceTiers.map((tier) => (
            <li key={tier.slug}>
              <Link
                href={tier.href}
                className="flex h-full items-center gap-4 px-1 py-5 transition-colors hover:bg-white/5 sm:flex-col sm:items-start sm:px-5"
              >
                <Icon name={tierIcons[tier.slug] ?? "shield-protection"} size={64} />
                <span>
                  <span className="block font-display text-lg text-white">
                    {tier.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-bone-100/70">
                    {tier.promise}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
