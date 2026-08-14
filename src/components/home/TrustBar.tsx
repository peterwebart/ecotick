import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { trustPoints } from "@/content/home";

const trustIcons: readonly IconName[] = [
  "shield-protection",
  "professional-application",
  "treatment",
  "garlic-solution",
  "family-and-pets",
];

/**
 * Registration, licensing and insurance are stated on Eco-Tick's authority.
 * "Family & pet conscious" is used rather than a bare "Pet Friendly" safety
 * claim — see CLAIMS-REGISTER.md.
 */
export function TrustBar() {
  return (
    <div className="border-b border-border bg-surface">
      <Container className="py-7">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
          {trustPoints.map((point, i) => (
            <li
              key={point}
              className="flex items-center gap-3 text-sm font-medium text-ink-700"
            >
              <Icon name={trustIcons[i] ?? "shield-protection"} size={56} />
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-ink-700">
          Registered with Health Canada and applied by licensed technicians.{" "}
          <Link href="/safety-environment" className="underline underline-offset-2">
            Read our safety &amp; environment information
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
