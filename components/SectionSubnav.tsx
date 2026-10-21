"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Sticky in-page menu for long pages: sits under the fixed navbar, highlights the section in view and
 * jumps to any section. Scrolls itself sideways on small screens so the active item stays visible.
 */
export function SectionSubnav({ items, label = "On this page" }: { items: { id: string; label: string }[]; label?: string }) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => Boolean(el));
    // A section counts as current once it crosses the upper third of the screen.
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (list && link) list.scrollTo({ left: link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label={label} className="sticky top-[var(--subnav-top,68px)] z-40 border-b border-navy/10 bg-paper/90 backdrop-blur-md">
      <div className="wrap flex items-center gap-6">
        <p className="label is-hidden shrink-0 text-gold-dark lg:block">{label}</p>
        <ul ref={listRef} className="-mx-1 flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((i) => (
            <li key={i.id} className="shrink-0">
              <a
                href={`#${i.id}`}
                data-id={i.id}
                aria-current={active === i.id ? "true" : undefined}
                className={cn(
                  "block rounded-full px-3.5 py-1.5 text-[13.5px] transition-colors",
                  active === i.id ? "bg-navy text-white" : "text-charcoal hover:bg-navy/5 hover:text-navy",
                )}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
