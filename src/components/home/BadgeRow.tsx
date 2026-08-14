import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BadgeTile } from "@/components/ui/Badge";
import { liveBadges } from "@/content/badges";

export function BadgeRow({
  heading = "What you actually get",
  tone = "alt",
}: {
  heading?: string;
  tone?: "surface" | "alt";
}) {
  return (
    <Section tone={tone} labelledBy="badges-heading">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Why Eco-Tick</Eyebrow>
          <h2 id="badges-heading" className="mt-3 text-h2 font-display">
            {heading}
          </h2>
        </div>
        <ul className="mt-12 grid gap-x-8 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {liveBadges.map((b) => (
            <BadgeTile key={b.icon} badge={b} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
