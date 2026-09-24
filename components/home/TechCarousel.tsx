"use client";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { techGroups, techLinks } from "@/data/site";

/** Hidden on phones, where the track is swiped. */
function ArrowButton({ dir, onClick, tone }: { dir: "left" | "right"; onClick: () => void; tone: "dark" | "light" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
      className={
        tone === "dark"
          ? "hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10 sm:flex"
          : "hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/25 text-navy transition-colors hover:border-navy hover:bg-navy/5 sm:flex"
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
        <ArrowButton dir="left" tone={tone} onClick={() => scrollBy(-340)} />
        <ul
          ref={trackRef}
          className="no-scrollbar relative flex flex-1 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
          aria-label="Technologies we work with"
        >
          {techGroups.map((g) => (
            <li key={g.group} className="w-[min(300px,82vw)] shrink-0 snap-start">
              <article
                className={cn(
                  "group flex h-full flex-col border transition-colors duration-300",
                  dark ? "border-white/15 bg-white/[0.04] hover:border-white/35" : "border-navy/15 bg-white hover:border-navy/30",
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={g.image}
                    alt=""
                    fill
                    sizes="300px"
                    className="object-cover grayscale-[35%] transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/35 to-midnight/10" aria-hidden />
                  <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-3 text-white">
                    <h3 className="font-display text-[26px] leading-none">{g.group}</h3>
                    <span className="label shrink-0 whitespace-nowrap text-gold-light">
                      {String(g.items.length).padStart(2, "0")} tools
                    </span>
                  </div>
                </div>
                <ul className="flex flex-wrap content-start gap-2 p-5" aria-label={`${g.group} tools`}>
                  {g.items.map((name) => {
                    const href = techLinks[name];
                    const chip = cn(
                      "block border px-2.5 py-1.5 font-mono text-[11.5px] leading-none transition-colors",
                      dark ? "border-white/15 text-white/80" : "border-navy/15 text-charcoal",
                      href && (dark ? "hover:border-white/50 hover:text-white" : "hover:border-navy/40 hover:text-navy"),
                    );
                    return (
                      <li key={name}>
                        {href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer" className={chip}>
                            {name}
                            <span className="sr-only"> (opens the official site in a new tab)</span>
                          </a>
                        ) : (
                          <span className={chip}>{name}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </li>
          ))}
        </ul>
        <ArrowButton dir="right" tone={tone} onClick={() => scrollBy(340)} />
      </div>
    </div>
  );
}
