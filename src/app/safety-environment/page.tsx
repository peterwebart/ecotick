import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { safetyEnvironment as page } from "@/content/services";
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
        { name: "Services", path: "/services" },
        { name: "Safety & Environment", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Ask us anything"
          body="We will share the product documentation that applies to your treatment."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
