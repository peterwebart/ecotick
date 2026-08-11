import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { trustPoints } from "@/content/home";

const trustIcons: readonly IconName[] = [
  "garlic-solution",
  "professional-application",
  "seasonal-protection",
  "residential",
  "large-property",
];

/**
 * CLAIMS NOTE (ARCHITECTURE.md section 4): the mockup's trust bar read
 * "Safe for Families & Pets", "Effective & Long Lasting" and "Effective against
 * ticks & mosquitoes". Those are efficacy and safety claims regulated under the
 * Pest Control Products Act and must match the registered PMRA label. They are
 * replaced here with factual service descriptions. Restore them only once the
 * label and PCP registration number substantiate the exact wording.
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
          Treatments are applied according to the product label.{" "}
          <Link href="/safety-environment" className="underline underline-offset-2">
            Read our safety &amp; environment information
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
