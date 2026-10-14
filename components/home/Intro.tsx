import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Reveal";
import { Counter } from "../Counter";
import { TimelineBar } from "./TimelineBar";
import { countries, stats } from "@/data/site";

export function Introduction() {
  return (
    <section id="introduction" className="scroll-mt-20 bg-paper py-24 md:py-36">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <Reveal>
              <h2 className="text-[clamp(38px,5.6vw,84px)] leading-[1.02] text-navy">Established Experience. Forward Thinking.</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-lg text-[19px] leading-[1.7] text-graphite">
                Established in 2010, J &amp; J Consulting combines technology consultancy, management consulting, specialist recruitment,
                technology training and workforce solutions.
              </p>
              <Link href="/about" className="link-arrow mt-9 text-navy">
                Discover J &amp; J <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full">
              <Image
                src="/images/analyst-video-call-desk.jpg"
                alt="A consultant on a video call at a dual-monitor desk overlooking the City of London"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <TimelineBar />
      </div>
    </section>
  );
}

export function ExperienceCounters() {
  return (
    <section aria-labelledby="counters-title" className="blueprint relative bg-navy py-24 text-white md:py-32">
      <div className="wrap">
        <h2 id="counters-title" className="sr-only">
          Experience in numbers
        </h2>
        <dl className="grid grid-cols-2 border-t border-white/15 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-b border-white/15 py-9 pr-6 lg:border-white/15 lg:[&:not(:nth-child(3n))]:border-r lg:[&:not(:nth-child(3n+1))]:pl-10"
            >
              <dd className="font-display text-[clamp(52px,8vw,112px)] leading-none text-white">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-4 max-w-[240px] text-[14px] leading-snug text-white/65">{s.label}</dt>
            </div>
          ))}
        </dl>
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-baseline md:gap-10">
          <p className="label shrink-0 text-gold-light">International experience</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-[22px] text-white/90">
            {countries.map((c) => (
              <li key={c.name}>{c.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
