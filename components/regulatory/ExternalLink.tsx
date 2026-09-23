import { MS_AMLIN_URL } from "@/data/ms-amlin-solvency";
import { cn } from "@/lib/utils";

/** Quiet outbound link to the official MS Amlin website. */
export function VisitMsAmlin({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <a
      href={MS_AMLIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-2.5 border px-6 py-3.5 text-[14px] tracking-wide transition-colors duration-300",
        tone === "dark"
          ? "border-white/35 text-white hover:border-white hover:bg-white/10"
          : "border-navy/30 text-navy hover:border-navy hover:bg-navy/5",
        className,
      )}
    >
      Visit MS Amlin
      <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
        ↗
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
