import Link from "next/link";
import { servicesHero } from "@/data/services-page";
import { services, stats } from "@/data/site";
import { Counter } from "@/components/Counter";
import { nodeIcons } from "@/components/SignatureVisual";

/** Verified figures shown under the hero (from data/site `stats`, flagged `servicesHero`). */
const heroStats = stats.filter((s) => s.servicesHero);

/** Hero in the Data Master palette: blue-to-purple ground, headline left, a tilted panel of the five disciplines right. */
export function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(120deg,#0A1830_0%,#12306A_55%,#2058B8_100%)] text-white"
      aria-labelledby="services-title"
    >
      <div className="grid-drift absolute inset-0 opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-[#74B0F2]/20 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#EBB84C]/15 blur-[120px]" aria-hidden />

      <div className="wrap relative pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <p className="rise inline-flex items-center gap-2 rounded-full border border-[#74B0F2]/50 bg-white/[0.06] px-3.5 py-1 text-[12.5px] font-medium text-[#BFDBFE]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#74B0F2]" aria-hidden />
              {servicesHero.label}
            </p>
            <h1 id="services-title" className="mt-7 font-sans text-[clamp(38px,5vw,72px)] font-bold leading-[1.05] tracking-[-0.03em]">
              {servicesHero.title.map((line, i) => (
                <span key={line} className="line-mask">
                  <span
                    className={i === servicesHero.title.length - 1 ? "line-in dm-gradient-text" : "line-in"}
                    style={{ ["--d" as string]: `${120 + i * 110}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <p className="rise mt-7 max-w-xl text-[18px] leading-[1.7] text-[#BFDBFE]/90 [--d:480ms]">{servicesHero.intro}</p>
            <div className="rise mt-10 flex flex-col gap-3 sm:flex-row [--d:600ms]">
              <Link href="/contact" className="btn btn-gold justify-center rounded-lg">
                Talk to our experts <span aria-hidden>→</span>
              </Link>
              <a href="#services" className="btn justify-center rounded-lg border border-white/40 text-white hover:bg-white/10">
                Explore services <span aria-hidden>↓</span>
              </a>
            </div>
          </div>

          <div className="rise lg:col-span-5 [--d:360ms]">
            <div className="relative px-2 py-6 sm:px-5">
              <div
                aria-hidden
                className="absolute inset-0 rotate-[2.5deg] rounded-2xl bg-gradient-to-r from-[#2058B8] to-[#EBB84C] shadow-[0_40px_80px_-30px_rgba(15,10,60,0.8)]"
              />
              <div className="relative rounded-xl bg-white p-6 text-[#0F172A] shadow-[0_24px_50px_-28px_rgba(15,23,42,0.8)] sm:p-7">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#2563EB]">Five disciplines</p>
                  <span className="rounded-full bg-[#FBF3DD] px-2.5 py-0.5 text-[12px] font-semibold text-[#8C6F38]">One partner</span>
                </div>
                <ul className="mt-5 divide-y divide-[#E2E8F0]">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <a href={`#${s.slug}`} className="group flex items-center gap-4 py-3.5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#F4F7FC] to-[#EAF2FD] text-[#2058B8] [&_svg]:h-5 [&_svg]:w-5">
                          {nodeIcons[s.slug]}
                        </span>
                        <span className="flex-1">
                          <span className="block text-[15px] font-semibold leading-tight">{s.short}</span>
                          <span className="mt-0.5 block text-[12.5px] text-[#64748B]">{s.node.charAt(0) + s.node.slice(1).toLowerCase()}</span>
                        </span>
                        <span aria-hidden className="text-[#94A3B8] transition-transform group-hover:translate-x-1 group-hover:text-[#2058B8]">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <dl className="rise mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-20 [--d:760ms]">
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-2 rounded-xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm">
              <dt className="text-[14px] leading-snug text-[#BFDBFE]/80">{s.label}</dt>
              <dd className="font-sans text-[clamp(34px,3.4vw,48px)] font-bold leading-none tracking-[-0.03em]">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
