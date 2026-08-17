import { Container } from "@/components/ui/Container";
import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Get a Free Tick & Mosquito Control Quote",
  description:
    "Request a free quote for professional tick and mosquito control. Residential, commercial and large-property programmes across Ontario.",
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
          Four quick questions. We use them to size the property, confirm it is
          in our service area, and put together a programme that fits.
        </p>
        <p className="mt-6 text-sm text-ink-700">
          Would rather talk it through?{" "}
          <a href={site.phoneHref} className="font-semibold text-brand underline">
            {site.phone}
          </a>
        </p>
      </div>
      <QuoteWizard />
    </Container>
  );
}
