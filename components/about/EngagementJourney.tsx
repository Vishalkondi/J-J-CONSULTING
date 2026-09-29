import Link from "next/link";
import { experienceTimeline } from "@/data/site";

/** J & J engagements since the company was established in 2010, as a horizontal journey. */
const journey = experienceTimeline.filter((e) => Number(e.years.slice(0, 4)) >= 2010);

export function EngagementJourney() {
  return (
    <section className="blueprint relative bg-midnight py-24 text-white md:py-32" aria-labelledby="journey-title">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="label text-gold-light">Our journey</p>
            <h2 id="journey-title" className="mt-4 text-balance text-[clamp(32px,4.4vw,60px)] leading-[1.05]">
              Engagements since 2010
            </h2>
          </div>
          <p className="text-[17px] leading-relaxed text-white/70">
            From our first engagement in 2010 to today, our work has spanned insurance and financial services: specialty insurers and
            reinsurers, brokers, InsurTech and life and benefits providers.
          </p>
        </div>

        <ol className="no-scrollbar -mx-5 mt-14 flex snap-x gap-0 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
          {journey.map((e, i) => (
            <li key={`${e.years}-${e.title}`} className="relative w-[220px] shrink-0 snap-start pr-6">
              <div className="flex items-center">
                <span
                  aria-hidden
                  className={
                    i === journey.length - 1
                      ? "h-3.5 w-3.5 shrink-0 rounded-full bg-gold shadow-[0_0_0_6px_rgba(184,152,90,0.2)]"
                      : "h-3 w-3 shrink-0 rounded-full border-2 border-gold bg-midnight"
                  }
                />
                {i < journey.length - 1 && <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-gold/70 to-gold/20" />}
              </div>
              <p className="mt-5 font-mono text-[12px] tracking-[0.1em] text-gold-light">{e.years}</p>
              <p className="mt-2 font-display text-[21px] leading-snug">{e.title}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-8">
          <p className="text-[15px] text-white/60">Scroll the timeline, or read each engagement in detail.</p>
          <Link href="/experience" className="btn btn-gold">
            Our client experience <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
