import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { howItWorks as page } from "@/content/services";
import { images } from "@/content/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  noindex: page.noindex,
});

export default function Page() {
  return (
    <ServicePageTemplate
      page={page}
      hero={images.treatmentLawn}
      crumbs={[
        { name: "Home", path: "/" },
        
        { name: "How It Works", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Start with an assessment"
          body="Free, and it tells you where the pressure actually is."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
