import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Reveal";
import { Counter } from "../Counter";
import { TimelineBar } from "./TimelineBar";
import { company, countries, stats } from "@/data/site";

const why = [
  {
    title: "Proven delivery",
    text: "25+ international projects and 8 full-cycle solution implementations across the UK, US and Asia.",
    icon: <path d="M4 12.5l5 5L20 6.5" />,
  },
  {
    title: "Insurance depth",
    text: "16+ years in insurance and financial services, including the London Market.",
    icon: <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />,
  },
  {
    title: "One connected firm",
    text: "Technology, consulting, talent, training and workforce solutions working around a single client need.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </>
    ),
  },
];

export function Introduction() {
  return (
    <section id="introduction" className="scroll-mt-20 bg-paper py-24 md:py-32">
      <div className="wrap">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="pill bg-white text-gold-dark">Why J &amp; J Consulting</p>
              <h2 className="mt-6 text-[clamp(38px,5vw,68px)] leading-[1.02] text-navy">
                Established Experience. <span className="text-gold-dark">Forward Thinking.</span>
              </h2>
              <p className="mt-7 max-w-xl text-[18px] leading-[1.7] text-graphite">
                Established in 2010, J &amp; J Consulting combines technology consultancy, management consulting, specialist recruitment,
                technology training and workforce solutions.
              </p>
            </Reveal>
            <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
              {why.map((w, i) => (
                <li key={w.title}>
                  <Reveal delay={0.08 + i * 0.06} className="group flex gap-5 py-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-white text-gold-dark transition-colors duration-300 group-hover:border-gold group-hover:bg-navy group-hover:text-gold-light">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        {w.icon}
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-[21px] leading-tight text-navy">{w.title}</h3>
                      <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-graphite">{w.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-navy">
                Discover J &amp; J <span aria-hidden>→</span>
              </Link>
              <Link href="/services" className="btn btn-line">
                Our services <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <Reveal delay={0.08}>
            <div className="relative pb-8 lg:pb-0">
              {/* gold offset frame behind the photo */}
              <div
                aria-hidden
                className="absolute -right-3 -top-3 bottom-11 left-3 rounded-2xl border border-gold/40 sm:-right-4 sm:-top-4 lg:bottom-3"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_40px_80px_-40px_rgba(12,32,56,0.55)] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/team-launch-meeting.jpg"
                  alt="A project team meeting around a launch-plan dashboard, with the City of London skyline behind"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[62%_center]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-midnight/45 to-transparent" aria-hidden />
              </div>
              {/* floating badge */}
              <div className="absolute bottom-0 left-4 flex items-center gap-4 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-[0_20px_50px_-20px_rgba(12,32,56,0.45)] sm:left-8 lg:-bottom-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.5V12l3 2" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-[22px] leading-none text-navy">{company.yearsInExistence} years</p>
                  <p className="mt-1 text-[12.5px] text-graphite">Established {company.established}, Reigate, UK</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <TimelineBar />
      </div>
    </section>
  );
}

const statIcon = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** Decorative icon per stat, in the same order as `stats` in data/site.ts. */
const statIcons = [
  <svg key="career" {...statIcon}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>,
  <svg key="insurance" {...statIcon}>
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
  </svg>,
  <svg key="consulting" {...statIcon}>
    <path d="M4 5h16v11H9l-5 4z" />
  </svg>,
  <svg key="projects" {...statIcon}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17" />
  </svg>,
  <svg key="implementations" {...statIcon}>
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>,
  <svg key="countries" {...statIcon}>
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>,
];

export function ExperienceCounters() {
  return (
    <section aria-labelledby="counters-title" className="blueprint relative bg-navy py-24 text-white md:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label text-gold-light">Track record</p>
            <h2 id="counters-title" className="mt-4 text-[clamp(30px,3.6vw,48px)] leading-[1.08]">
              Experience in numbers
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-white/65">
            Built across insurance, financial services and enterprise technology since 2001.
          </p>
        </div>

        {/* gap-px over a tinted background draws even 1px dividers with no overhanging borders */}
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="group relative flex flex-col bg-navy p-5 transition-colors duration-300 hover:bg-navy-800 sm:p-7 lg:p-8"
            >
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors group-hover:border-gold sm:right-7 sm:top-7 sm:h-10 sm:w-10">
                {statIcons[i]}
              </span>
              {/* Label first in the markup (dt before dd); order-* puts the figure on top visually. */}
              <dt className="order-3 mt-3 max-w-[260px] text-[13px] leading-snug text-white/70 sm:text-[14.5px]">{s.label}</dt>
              <dd className="order-1 pr-10 font-display text-[clamp(44px,5.4vw,80px)] leading-none text-white">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <span aria-hidden className="order-2 mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16 sm:mt-5" />
              {/* The countries stat lists the country names in its own cell. */}
              {i === stats.length - 1 && (
                <dd className="order-4 mt-4">
                  <span className="sr-only">Countries: </span>
                  {/* Phones: one compact line; the chips only fit once the cells are wider. */}
                  <p className="text-[12px] leading-relaxed text-white/80 sm:is-hidden">
                    {countries.map((c) => c.name).join(" · ")}
                  </p>
                  <ul className="is-hidden flex-wrap gap-1.5 sm:flex">
                    {countries.map((c) => (
                      <li
                        key={c.name}
                        className="flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-[11.5px] text-white/85 sm:text-[12.5px]"
                      >
                        <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
                        {c.name}
                      </li>
                    ))}
                  </ul>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
