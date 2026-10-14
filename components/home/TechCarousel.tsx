"use client";
import { useRef } from "react";
import { techGroups, techLinks } from "@/data/site";

/** Flatten every tech-ecosystem item into one ordered list of cards, each tagged with its group. */
const items = techGroups.flatMap((g) => g.items.map((name) => ({ name, group: g.group })));

function ArrowButton({ dir, onClick, tone }: { dir: "left" | "right"; onClick: () => void; tone: "dark" | "light" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
      className={
        tone === "dark"
          ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10"
          : "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/25 text-navy transition-colors hover:border-navy hover:bg-navy/5"
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

export function TechCarousel({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  const trackRef = useRef<HTMLUListElement>(null);
  const scrollBy = (dx: number) => trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div>
      {/* No separate pill badge here — the section's own SectionHeading eyebrow above already
          serves that role ("Technology ecosystem"); a second one would just repeat it. */}
      <div className="flex items-center gap-3 sm:gap-5">
        <ArrowButton dir="left" tone={tone} onClick={() => scrollBy(-320)} />
        <ul ref={trackRef} className="no-scrollbar flex flex-1 gap-4 overflow-x-auto scroll-smooth" aria-label="Technologies we work with">
          {items.map((it) => {
            const href = techLinks[it.name];
            const Tag = href ? "a" : "div";
            return (
              <li key={it.name} className="shrink-0 snap-start">
                <Tag
                  {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={
                    dark
                      ? "flex h-32 w-44 flex-col items-center justify-center gap-2 border border-white/15 bg-white/[0.04] px-4 text-center transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.08]"
                      : "flex h-32 w-44 flex-col items-center justify-center gap-2 border border-navy/15 bg-white px-4 text-center transition-colors duration-300 hover:border-navy/30 hover:shadow-[0_14px_30px_-18px_rgba(12,32,56,0.3)]"
                  }
                >
                  <span
                    className={
                      dark ? "font-display text-[19px] leading-tight text-white" : "font-display text-[19px] leading-tight text-navy"
                    }
                  >
                    {it.name}
                    {href && <span className="sr-only"> (opens the official site in a new tab)</span>}
                  </span>
                  <span
                    className={
                      dark
                        ? "font-mono text-[10px] uppercase tracking-wide text-white/45"
                        : "font-mono text-[10px] uppercase tracking-wide text-graphite"
                    }
                  >
                    {it.group}
                  </span>
                </Tag>
              </li>
            );
          })}
        </ul>
        <ArrowButton dir="right" tone={tone} onClick={() => scrollBy(320)} />
      </div>
    </div>
  );
}
