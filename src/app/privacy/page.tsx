import { Container } from "@/components/ui/Container";
import { SourceNeeded } from "@/components/ui/SourceNeeded";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Eco-Tick Solutions collects, uses and stores the information you provide through this website, including quote requests and analytics.",
  path: "/privacy",
  noindex: true,
});

export default function Page() {
  return (
    <Container className="max-w-3xl py-14 lg:py-20">
      <h1 className="text-h1 font-display">Privacy Policy</h1>
      <p className="mt-6 text-lead text-ink-700">
        This document has not been drafted yet.
      </p>
      <div className="mt-10">
        <SourceNeeded
          heading="Requires legal drafting"
          needs={[
            "Drafted by Eco-Tick's legal counsel, not generated from a template",
            "PIPEDA compliance review for the quote form's data collection",
            "Disclosure of what the quote form collects, where it is stored and for how long",
            "Cookie and analytics disclosure, matching whatever GA4 configuration ships",
            "Retention and deletion policy for lead data",
          ]}
        />
      </div>
    </Container>
  );
}
