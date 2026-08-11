import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { differences } from "@/content/home";

const valueIcons: readonly IconName[] = [
  "garlic-solution",
  "professional-application",
  "seasonal-protection",
  "tick-protection",
  "large-property",
  "assessment",
];

export function DifferenceGrid() {
  return (
    <Section labelledBy="difference-heading">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Why Eco-Tick</Eyebrow>
          <h2 id="difference-heading" className="mt-3 text-h2 font-display">
            The Eco-Tick difference.
          </h2>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {differences.map((d, i) => (
            <li key={d.title} className="border-t border-border pt-5">
              <Icon name={valueIcons[i] ?? "shield-protection"} size={72} className="mb-3" />
              <h3 className="text-h3 font-display">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{d.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
