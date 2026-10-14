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
    <section id="introduction" className="scroll-mt-20 bg-paper py-24 md:py-36">
      <div className="wrap">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="pill bg-white text-gold-dark">Why J &amp; J Consulting</p>
              <h2 className="mt-6 text-[clamp(38px,5vw,72px)] leading-[1.02] text-navy">Established Experience. Forward Thinking.</h2>
              <p className="mt-7 max-w-lg text-[18px] leading-[1.7] text-graphite">
                Established in 2010, J &amp; J Consulting combines technology consultancy, management consulting, specialist recruitment,
                technology training and workforce solutions.
              </p>
            </Reveal>
            <ul className="mt-10 space-y-5">
              {why.map((w, i) => (
                <li key={w.title}>
                  <Reveal delay={0.08 + i * 0.06} className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-light">
                      <svg
                        width="22"
                        height="22"
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
            <Link href="/about" className="btn btn-navy mt-10">
              Discover J &amp; J <span aria-hidden>→</span>
            </Link>
          </div>
          <Reveal delay={0.08}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/team-launch-meeting.jpg"
                  alt="A project team meeting around a launch-plan dashboard, with the City of London skyline behind"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[62%_center]"
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-[0_20px_50px_-20px_rgba(12,32,56,0.45)] sm:left-8">
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
          <p className="max-w-sm text-[15px] leading-relaxed text-white/60">
            Built across insurance, financial services and enterprise technology since 2001.
          </p>
        </div>

        {/* gap-px over a tinted background draws even 1px dividers with no overhanging borders */}
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.label} className="group flex flex-col bg-navy p-5 transition-colors duration-300 hover:bg-navy-800 sm:p-7 md:p-9">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors group-hover:border-gold sm:h-11 sm:w-11">
                {statIcons[i]}
              </span>
              <dt className="order-last mt-3 max-w-[260px] text-[13px] leading-snug text-white/65 sm:text-[14px]">{s.label}</dt>
              <dd className="mt-5 font-display text-[clamp(40px,6.5vw,96px)] leading-none text-white sm:mt-7">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <span aria-hidden className="mt-5 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-col gap-5 border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center md:gap-10 md:px-9">
          <p className="label shrink-0 text-gold-light">International experience</p>
          <ul className="flex flex-wrap gap-2.5">
            {countries.map((c) => (
              <li
                key={c.name}
                className="flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-2 font-display text-[18px] text-white/90"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
