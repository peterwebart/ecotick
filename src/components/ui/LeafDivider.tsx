/**
 * Short rule — leaf — short rule. The section ornament from the service-areas
 * design. Purely decorative, so it is hidden from assistive technology.
 */
export function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-clay-500" />
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" className="text-clay-600">
        <path
          d="M10 1C4.5 5 2 9.5 2 13.5 2 17.6 5.6 21 10 21s8-3.4 8-7.5C18 9.5 15.5 5 10 1Z"
          fill="currentColor"
        />
        <path d="M10 6v14" stroke="#faf8f3" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="h-px w-16 bg-clay-500" />
    </div>
  );
}
