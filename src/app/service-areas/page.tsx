import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { serviceAreas as page } from "@/content/services";
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
      emitServiceSchema={false}
      crumbs={[
        { name: "Home", path: "/" },
        
        { name: "Service Areas", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Check your address"
          body="Send it over and we will confirm coverage straight away."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
