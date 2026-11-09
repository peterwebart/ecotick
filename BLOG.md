# Blog library

How the article library is put together, and how to add to it.

## Structure

| Piece | Where |
|---|---|
| Articles, one file each | `src/content/articles/*.ts` |
| Registration and reading order | `src/content/articles/index.ts` |
| Categories (Ticks, Mosquitoes, Commercial properties, Large properties) | `src/content/articles/categories.ts` |
| Service links, further reading, verified sources, CTA copy | `src/content/articles/library.ts` |
| Article illustrations | `src/content/blogImages.ts`, files in `public/images/eco-tick/blog/` |
| Social cards (1200 × 630) | `public/images/eco-tick/blog/og/<slug>.jpg` |
| Article page | `src/app/blog/[slug]/page.tsx` + `src/components/article/ArticleTemplate.tsx` |
| Category pages | `src/app/blog/category/[category]/page.tsx` |

URLs: articles live at `/blog/<slug>`, categories at `/blog/category/<slug>`.
No trailing slashes, matching the rest of the site.

Every article page carries:

- a breadcrumb **Home → Blog → Category → Article**, visible and as
  `BreadcrumbList`;
- `BlogPosting` structured data (author "The Eco-Tick team" linked to `/about`,
  publisher = the sitewide Organization, social card as the image), a
  self-referencing canonical, `og:type=article`, and the sitewide
  Organization/LocalBusiness nodes from the layout. No `FAQPage`: none of the
  articles is a FAQ, so none is marked up as one;
- a key-points box near the top, the body, public health sources, 2–3 related
  articles, a related-service card, further reading, and a closing CTA to
  `/get-a-quote`.

Category pages with fewer than two articles are `noindex, follow` and left out
of the sitemap (`MIN_ARTICLES_TO_INDEX_CATEGORY`). Today that is Large
properties; it becomes indexable when its second article is published.

## Service links

Each article links its service page from the body copy, using `[label](/path)`
inside the text. There is no dedicated page yet for three of the targets, so
they point at the closest page that exists:

| Article group | Intended page | Links to |
|---|---|---|
| Tick articles | Tick Control | `/residential-tick-control` |
| Mosquito articles | Mosquito Control | `/mosquito-control` |
| Commercial tick & mosquito | Commercial Services | `/commercial-tick-control` |
| Commercial tick | Commercial Tick Control | `/commercial-tick-control` |
| Commercial mosquito | Commercial Mosquito Control | `/commercial-tick-control` |
| Large property | Large Property Services | `/large-property-tick-control` |

If a dedicated page is built, change the `href` in `services` in
`library.ts` **and** the matching inline links in the article bodies (search
for the old path). The build fails if an article's body stops linking to its
service page.

## Adding an article

1. Copy an existing article file, give it a new slug and register it in
   `index.ts` in the position it should appear.
2. Set `category`, `topic`, `metaTitle` (with `absoluteTitle: true` if the
   title is supplied complete), `metaDescription` (110–165 characters),
   `intro`, `takeaways`, the body as `section(...)` blocks, `service`,
   2–3 `relatedArticles`, `related` (further reading), `references` and `cta`.
3. Add its image to `blogImages.ts` (or reuse a real photo key from
   `images.ts`) and a 1200 × 630 social card at
   `public/images/eco-tick/blog/og/<slug>.jpg`.
4. `pnpm build && pnpm audit:site`.

The build stops if an article has no category or image, lists anything other
than 2–3 existing related articles, never links its service page, or shares a
slug. The audit fails on missing social cards, broken internal links, titles
over 62 characters, descriptions outside 110–165 characters and duplicate
titles or descriptions.

## Images

The blog illustrations were supplied for this library and are generated, not
photographs. They are captioned "Illustration" on the page and are never used
to show Eco-Tick's staff, truck, equipment or customers' properties; real
photography stays in `src/content/images.ts`. Two images from the supplied set
were not used: the technician with a backpack sprayer (the service is
truck-mounted) and the tick behind a prohibition sign (it implies treatment
eliminates ticks). The files are about 300 px wide, so they are shown at or
below that size. Replacing them with real photography later is a change to
`blogImages.ts` only.

## Sources

`sources` in `library.ts` lists the public health pages the articles cite, each
checked on 9 November 2026. Public health sites reorganise; re-check the links
once a year.

## Dates

The November 2026 library shares `LIBRARY_PUBLISHED_AT` in `library.ts`. The
body copy and CTAs refer to the 2027 season. Review those lines before the
2028 season and set `updatedAt` on any article you revise.
