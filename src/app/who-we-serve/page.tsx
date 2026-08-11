import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { whoWeServe as page } from "@/content/services";
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
      crumbs={[
        { name: "Home", path: "/" },
        
        { name: "Who We Serve", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Not sure where you fit?"
          body="Tell us about the property and we will point you the right way."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
