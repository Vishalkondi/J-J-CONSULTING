/** Round previous/next control for horizontal carousels. Hidden on phones, where the track is swiped. */
export function ArrowButton({
  dir,
  onClick,
  tone,
  disabled,
  label,
}: {
  dir: "left" | "right";
  onClick: () => void;
  tone: "dark" | "light";
  disabled?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label ?? (dir === "left" ? "Scroll left" : "Scroll right")}
      className={
        tone === "dark"
          ? "hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10 disabled:pointer-events-none disabled:opacity-30 sm:flex"
          : "hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-[0_8px_20px_-10px_rgba(12,32,56,0.4)] transition hover:border-navy hover:bg-navy hover:text-white disabled:pointer-events-none disabled:opacity-30 sm:flex"
      }
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {dir === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}
