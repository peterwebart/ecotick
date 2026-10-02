import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { blogArticles } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Articles on tick and mosquito control for Ontario properties: seasonal timing, habitat, prevention and professional treatment, from the Eco-Tick team.",
  path: "/blog",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

const dateFmt = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Container className="py-12 lg:py-16">
        <h1 className="text-h1 font-display">Blog</h1>
        <p className="mt-5 max-w-2xl text-lead text-ink-700">
          Practical writing on ticks, mosquitoes and Ontario properties. For the
          longer evergreen guides, see{" "}
          <Link href="/resources" className="underline underline-offset-2">
            resources
          </Link>
          .
        </p>

        <ul className="mt-12 space-y-px border-y border-border">
          {blogArticles.map((a) => (
            <li key={a.slug} className="border-b border-border last:border-0">
              <Link href={a.path} className="group block py-7">
                <p className="text-sm text-ink-500">
                  <time dateTime={a.publishedAt}>
                    {dateFmt.format(new Date(a.publishedAt))}
                  </time>
                </p>
                <h2 className="mt-2 text-h2 font-display group-hover:underline">
                  {a.h1}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
                  {a.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>

      <CtaBand
        heading="Ready to take back your outdoors?"
        body="A free quote is the fastest way to find out what treatment would cost for your property."
        source="blog_index"
      />
    </>
  );
}
