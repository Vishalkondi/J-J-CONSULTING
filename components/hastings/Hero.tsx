import Image from "next/image";
import Link from "next/link";
import { hastings as h } from "@/data/hastings";

export function HastingsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white" aria-labelledby="hst-title">
      <Image src={h.hero.src} alt={h.hero.alt} fill priority sizes="100vw" quality={92} className="-z-20 object-cover" />
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{ background: "linear-gradient(180deg, rgba(7,27,53,0.72) 0%, rgba(7,27,53,0.86) 55%, rgba(7,27,53,0.97) 100%)" }}
      />
      <div className="wrap relative pb-16 pt-36 md:pb-24 md:pt-48">
        <p className="label text-red-300">{h.client}</p>
        <h1 id="hst-title" className="mt-7 max-w-4xl text-[clamp(36px,5.6vw,76px)] leading-[1.05]">
          Regulatory transformation.
          <br />
          Insurance strategy.
          <br />
          Business change.
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/80">
          A business-analysis-led programme connecting Solvency II compliance, regulatory reporting, operating-model design and underwriting
          technology strategy.
        </p>
        <p className="mt-8 font-mono text-[12px] tracking-[0.1em] text-white/60">
          {h.role.toUpperCase()} · {h.period.toUpperCase()}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="#solvency-ii" className="btn btn-gold">
            Explore the transformation <span aria-hidden>→</span>
          </Link>
          <Link href="#overview" className="btn btn-ghost">
            View project overview
          </Link>
        </div>

        {/* METRICS */}
        <dl className="mt-14 grid grid-cols-2 overflow-hidden border border-white/20 bg-white/[0.04] backdrop-blur-sm sm:grid-cols-4">
          {[
            { v: h.value, l: "Project value" },
            { v: h.qrtCount, l: "Regulatory reports" },
            { v: h.team, l: "Team members" },
            { v: h.streams, l: "Transformation streams" },
          ].map((m, i) => (
            <div
              key={m.l}
              className={`p-5 md:p-7 ${i % 2 === 0 ? "border-r border-white/15" : ""} ${i < 2 ? "border-b border-white/15 sm:border-b-0" : ""} sm:border-r sm:border-white/15 sm:last:border-r-0`}
            >
              <dt className="text-[12px] text-white/60">{m.l}</dt>
              <dd className="mt-2 font-display text-[clamp(26px,3vw,40px)] leading-none">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
