import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { about as page } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { founderSchema } from "@/lib/schema";

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
      extraSchema={[
        founderSchema(
          "/images/eco-tick/brand/eco-tick-tractor-mounted-sprayer-spring-application.webp",
        ),
      ]}
      crumbs={[
        { name: "Home", path: "/" },
        
        { name: "About", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Get in touch"
          body="Happy to talk through what a programme would look like."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
