export function TableOfContents({
  items,
}: {
  items: readonly { id: string; label: string }[];
}) {
  return (
    <nav aria-labelledby="toc-heading" className="rounded-card border border-border p-6">
      <h2
        id="toc-heading"
        className="text-eyebrow font-semibold text-clay-600 uppercase"
      >
        On this page
      </h2>
      <ol className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-3 text-sm">
            <span aria-hidden="true" className="tabular-nums text-ink-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${item.id}`}
              className="text-ink-700 hover:text-brand hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
