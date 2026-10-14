import Link from "next/link";
import { TileGrid } from "./TileGrid";

/** Closing case-study section: the systems and tools behind the engagement, then a link back to all case studies. */
export function TechnologySection({ items, columns = "lg:grid-cols-5" }: { items: readonly string[]; columns?: string }) {
  return (
    <section className="bg-bone py-20 md:py-28" aria-labelledby="tech-title">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label text-gold-dark">Technology and systems</p>
            <h2 id="tech-title" className="mt-5 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
              The platforms behind the work
            </h2>
          </div>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-graphite">{items.length} systems and tools</p>
        </div>
        <TileGrid items={items} label="Technology and systems" className={`mt-12 ${columns}`} />
        <Link href="/case-studies" className="btn mt-14 border border-navy text-navy transition hover:bg-navy hover:text-white">
          All case studies <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
