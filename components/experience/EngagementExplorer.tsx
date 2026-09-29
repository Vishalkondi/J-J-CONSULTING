"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Item = { id: string; client: string; period: string; title: string };

/**
 * Master–detail explorer: a client list beside one open engagement.
 * Panels are server-rendered and passed in, so every write-up stays in the HTML; this only toggles visibility.
 * Deep links (#client-id) select the matching engagement.
 */
export function EngagementExplorer({ items, panels }: { items: Item[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const select = (i: number) => {
    setActive(i);
    history.replaceState(null, "", `#${items[i].id}`);
    // Bring the panel's top into view if the reader has scrolled past it.
    const top = panelRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) panelRef.current?.scrollIntoView({ block: "start" });
  };

  useEffect(() => {
    const fromHash = () => {
      const i = items.findIndex((it) => `#${it.id}` === window.location.hash);
      if (i >= 0) setActive(i);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [items]);

  return (
    <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-14">
      <div>
        <p className="label mb-4 text-gold-dark">{items.length} engagements</p>
        <ul
          role="tablist"
          aria-orientation="vertical"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-navy/15 lg:px-0 lg:pb-0"
        >
          {items.map((it, i) => {
            const on = i === active;
            return (
              <li key={it.id} className="shrink-0 lg:shrink">
                <button
                  id={it.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls={`${it.id}-panel`}
                  onClick={() => select(i)}
                  className={cn(
                    "group flex w-full scroll-mt-28 items-center justify-between gap-4 border px-4 py-3 text-left transition-colors",
                    "lg:border-x-0 lg:border-t-0 lg:border-b-navy/15 lg:px-3 lg:py-4",
                    on
                      ? "border-navy bg-navy text-white lg:border-b-navy"
                      : "border-navy/15 bg-white text-navy hover:bg-white lg:bg-transparent",
                  )}
                >
                  <span>
                    <span className="block whitespace-nowrap font-display text-[17px] leading-tight lg:whitespace-normal lg:text-[19px]">
                      {it.client}
                    </span>
                    <span className={cn("mt-1 hidden text-[13px] leading-snug lg:block", on ? "text-white/65" : "text-graphite")}>
                      {it.title}
                    </span>
                  </span>
                  <span className={cn("hidden shrink-0 font-mono text-[11px] lg:block", on ? "text-gold-light" : "text-gold-dark")}>
                    {it.period}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div ref={panelRef} className="min-w-0 scroll-mt-28 self-start border border-navy/15 bg-white p-6 md:p-10 lg:sticky lg:top-28">
        {panels.map((panel, i) => (
          <div key={items[i].id} id={`${items[i].id}-panel`} role="tabpanel" aria-labelledby={items[i].id} hidden={i !== active}>
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
