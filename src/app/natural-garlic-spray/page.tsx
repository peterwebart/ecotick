import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { garlicSolution as page } from "@/content/services";
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
      hero={images.aerialTopdown}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Natural Solution", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Ask us anything"
          body="Happy to walk through exactly what gets applied and where."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
