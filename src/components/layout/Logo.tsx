export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const fg = tone === "dark" ? "text-forest-900" : "text-white";
  const accent = tone === "dark" ? "text-moss-600" : "text-sage-300";
  return (
    <span className={`flex items-center gap-2.5 ${fg}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className={accent}
      >
        <path
          d="M16 2 3.5 7v9.5C3.5 23.4 8.7 29 16 30.5 23.3 29 28.5 23.4 28.5 16.5V7L16 2Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 21c4-1.5 6-4.4 6-8-3.3 0-6 1.4-6 4.6C16 14.4 13.3 13 10 13c0 3.6 2 6.5 6 8Z"
          fill="currentColor"
        />
      </svg>
      <span className="leading-none">
        <span className="font-display block text-lg font-bold tracking-tight">
          ECO-TICK
        </span>
        <span className="block text-[0.6rem] font-semibold tracking-[0.28em] opacity-70">
          SOLUTIONS
        </span>
      </span>
    </span>
  );
}
