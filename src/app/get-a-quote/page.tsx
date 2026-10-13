import { Container } from "@/components/ui/Container";
import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Get a Free Tick & Mosquito Control Quote",
  description:
    "Request a free quote for professional tick and mosquito control. Residential, commercial and large-property programs across Ontario.",
  path: "/get-a-quote",
});

export default function QuotePage() {
  return (
    <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_1.3fr] lg:py-20">
      <div>
        <h1 className="text-h1 font-display">
          Get your free tick &amp; mosquito control quote.
        </h1>
        <p className="mt-5 text-lead text-ink-700">
          Complete four quick steps so we can understand your property, confirm service availability and prepare a tailored quote.
        </p>
        <p className="mt-6 text-sm text-ink-700">
          Would you prefer to discuss your property by phone?{" "}
          <a href={site.phoneHref} className="font-semibold text-brand underline">
            {site.phone}
          </a>
        </p>
      </div>
      <QuoteWizard />
    </Container>
  );
}
