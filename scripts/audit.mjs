/**
 * Post-build audit. Run after `next build`:
 *
 *   pnpm build && pnpm audit:site
 *
 * Parses the prerendered HTML in .next/server/app and checks accessibility
 * basics, metadata hygiene and structured data. Exits non-zero on findings, so
 * it can gate a deploy.
 *
 * It caught a real bug on first run: every child route was rendering
 * "… | Eco-Tick Solutions | Eco-Tick Solutions", because the content strings
 * carried the suffix and the layout title template appended it again.
 */
import { readFileSync } from "node:fs";
import { glob } from "node:fs/promises";
import { sep } from "node:path";
import * as cheerio from "cheerio";

/**
 * node:fs glob returns platform-native separators, so on Windows every path
 * comes back as `.next\server\app\foo.html`. Without normalising, the route
 * never matches DIR, `/_not-found` misses the skip list, and the 404 page gets
 * flagged for a missing canonical it is not supposed to have.
 */
const toPosix = (p) => p.split(sep).join("/");

const DIR = ".next/server/app";
const TITLE_MAX = 62;
const DESC_MIN = 110;
const DESC_MAX = 165;
const RICH_TYPES = new Set(["Article", "Service", "FAQPage"]);
const VAGUE_LINKS = new Set(["click here", "here", "read more", "learn more", "more"]);

// A 404 serves HTTP 404 and is never indexed, so metadata rules do not apply.
const SKIP_META = new Set(["/_not-found"]);

const REQUIRED = {
  Article: ["headline", "datePublished", "author"],
  Service: ["name", "provider"],
  FAQPage: ["mainEntity"],
  BreadcrumbList: ["itemListElement"],
  Organization: ["name", "url"],
  WebSite: ["url"],
};

const issues = [];
const add = (route, cat, msg) => issues.push({ route, cat, msg });

/**
 * Contact details are edited in exactly one place (src/content/site.ts). If a
 * different phone number or email ever appears in a rendered page, someone has
 * hardcoded it into body copy and it will silently drift. Six of these had
 * already accumulated before this check existed.
 */
const PHONE_RE = /(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.]+/g;
const ALLOWED_PHONES = new Set(["1-888-912-5152", "+18889125152"]);
const ALLOWED_EMAILS = new Set(["info@eco-ticksolutions.ca"]);

const files = [];
for await (const f of glob(`${DIR}/**/*.html`)) files.push(toPosix(f));
files.sort();

const titles = new Map();
const descs = new Map();

for (const file of files) {
  const route =
    file.replace(DIR, "").replace(/\.html$/, "").replace(/^\/index$/, "/") || "/";
  const $ = cheerio.load(readFileSync(file, "utf8"));

  const title = $("title").first().text().trim();
  const desc = $('meta[name="description"]').attr("content")?.trim() ?? "";
  const canonical = $('link[rel="canonical"]').attr("href") ?? "";
  const robots = $('meta[name="robots"]').attr("content") ?? "index";
  const noindex = robots.startsWith("noindex");

  if (!SKIP_META.has(route)) {
    if (!title) add(route, "meta", "missing <title>");
    if (title.length > TITLE_MAX) add(route, "meta", `title ${title.length} chars (>${TITLE_MAX} truncates)`);
    if (!desc) add(route, "meta", "missing meta description");
    else if (desc.length < DESC_MIN || desc.length > DESC_MAX)
      add(route, "meta", `description ${desc.length} chars (aim ${DESC_MIN}-${DESC_MAX})`);
    if (!canonical) add(route, "meta", "missing canonical");
    if (title) titles.set(title, [...(titles.get(title) ?? []), route]);
    if (desc) descs.set(desc, [...(descs.get(desc) ?? []), route]);
  }

  const h1s = $("h1");
  if (h1s.length !== 1) add(route, "a11y", `${h1s.length} h1 elements (expected 1)`);

  const levels = $("h1,h2,h3,h4,h5,h6").toArray().map((el) => Number(el.tagName[1]));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      add(route, "a11y", `heading jump h${levels[i - 1]} -> h${levels[i]}`);
      break;
    }
  }

  $("img").each((_, el) => {
    if ($(el).attr("alt") === undefined) add(route, "a11y", "img without alt");
  });

  $("input,select,textarea").each((_, el) => {
    const $el = $(el);
    const type = $el.attr("type");
    if (type === "hidden" || type === "radio") return;
    const id = $el.attr("id");
    const labelled =
      $el.attr("aria-label") ||
      $el.attr("aria-labelledby") ||
      (id && $(`label[for="${id}"]`).length > 0);
    if (!labelled) add(route, "a11y", `unlabelled <${el.tagName}>`);
  });

  if ($("main").length === 0) add(route, "a11y", "no <main> landmark");
  if (!$("html").attr("lang")) add(route, "a11y", "no lang on <html>");

  const seenIds = new Set();
  $("[id]").each((_, el) => {
    const id = $(el).attr("id");
    if (seenIds.has(id)) add(route, "a11y", `duplicate id '${id}'`);
    seenIds.add(id);
  });

  $("a").each((_, el) => {
    const $el = $(el);
    const text = $el.text().trim().toLowerCase();
    if (VAGUE_LINKS.has(text) && !$el.attr("aria-label") && !$el.attr("title"))
      add(route, "a11y", `vague link text '${text}'`);
  });

  // Extract visible text only. Two traps here, both of which produced false
  // positives on the first run: cheerio's .text() includes <script> contents,
  // which on a Next page means the flight payload (and the Google Maps embed
  // URL, whose coordinates look like phone numbers); and it concatenates
  // adjacent elements with no separator, so a footer's "…Ontario." running into
  // the next node's email glues them into one unmatchable blob.
  const $body = $("body").clone();
  $body.find("script, style, noscript").remove();
  const visible = ($body.html() ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ");
  for (const m of visible.match(PHONE_RE) ?? []) {
    const norm = m.replace(/[\s.()]/g, "-").replace(/-+/g, "-");
    if (!ALLOWED_PHONES.has(norm) && !ALLOWED_PHONES.has(m))
      add(route, "content", `unexpected phone number in copy: ${m}`);
  }
  for (const m of visible.match(EMAIL_RE) ?? []) {
    if (!ALLOWED_EMAILS.has(m.toLowerCase()))
      add(route, "content", `unexpected email in copy: ${m}`);
  }

  $('script[type="application/ld+json"]').each((_, el) => {
    let parsed;
    try {
      parsed = JSON.parse($(el).text());
    } catch (err) {
      add(route, "schema", `invalid JSON-LD: ${err.message}`);
      return;
    }
    for (const node of Array.isArray(parsed) ? parsed : [parsed]) {
      const type = node["@type"] ?? "?";
      if (!node["@context"]) add(route, "schema", `${type} missing @context`);
      for (const key of REQUIRED[type] ?? [])
        if (!(key in node)) add(route, "schema", `${type} missing ${key}`);
      // Sitewide Organization/WebSite on a noindex page is normal; rich-result
      // types are not, because they advertise a page that cannot be indexed.
      if (noindex && RICH_TYPES.has(type))
        add(route, "schema", `page-level ${type} schema on a noindex page`);
    }
  });
}

for (const [label, map] of [["title", titles], ["description", descs]])
  for (const [value, routes] of map)
    if (routes.length > 1)
      add(routes.join(", "), "meta", `duplicate ${label}: ${value.slice(0, 48)}…`);

console.log(`audited ${files.length} prerendered pages\n`);
for (const cat of ["a11y", "meta", "schema", "content"]) {
  const found = issues.filter((i) => i.cat === cat);
  console.log(`${cat.toUpperCase()}: ${found.length} issue(s)`);
  for (const i of found) console.log(`  ${i.route}: ${i.msg}`);
  console.log("");
}

if (issues.length > 0) {
  console.error(`FAILED with ${issues.length} issue(s)`);
  process.exit(1);
}
console.log("PASSED");
