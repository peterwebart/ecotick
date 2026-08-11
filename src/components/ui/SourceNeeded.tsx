/**
 * Visible placeholder for content that cannot be written without company-
 * specific facts (brief section 44: mark placeholders, never invent).
 *
 * Any page rendering one of these is set to noindex and kept out of the
 * sitemap, so a half-written page never reaches Google.
 */
export function SourceNeeded({
  heading,
  needs,
}: {
  heading: string;
  needs: readonly string[];
}) {
  return (
    <div className="rounded-card border-2 border-dashed border-clay-500 bg-clay-100 p-6">
      <p className="text-eyebrow font-semibold text-clay-600 uppercase">
        Awaiting source information
      </p>
      <h2 className="mt-2 text-h3 font-display">{heading}</h2>
      <p className="mt-2 text-sm text-ink-700">
        This section needs the following from Eco-Tick before it can be written.
        Nothing here is invented, and this page is excluded from search indexing
        until it is complete.
      </p>
      <ul className="mt-4 space-y-2">
        {needs.map((n) => (
          <li key={n} className="flex gap-2.5 text-sm text-ink-900">
            <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-clay-600" />
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
