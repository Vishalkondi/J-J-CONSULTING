import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Case-study section: sticky eyebrow + heading (plus optional aside) beside a numbered list. */
export function NumberedListSection({
  id,
  eyebrow,
  title,
  items,
  aside,
  tone = "paper",
}: {
  id: string;
  eyebrow: string;
  title: string;
  items: readonly string[];
  aside?: ReactNode;
  tone?: "paper" | "bone";
}) {
  return (
    <section className={cn("py-20 md:py-28", tone === "bone" ? "bg-bone" : "bg-paper")} aria-labelledby={id}>
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="label text-gold-dark">{eyebrow}</p>
          <h2 id={id} className="mt-5 text-balance text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
            {title}
          </h2>
          {aside}
        </div>
        <Reveal>
          <ol className="border-t border-navy/15">
            {items.map((item, i) => (
              <li key={item} className="grid grid-cols-[48px_1fr] gap-4 border-b border-navy/15 py-6 transition-colors hover:bg-white/60">
                <span className="pt-1 font-mono text-[12px] text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[17px] leading-relaxed text-charcoal">{item}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
