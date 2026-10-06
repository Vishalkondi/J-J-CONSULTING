import Image from "next/image";
import Link from "next/link";
import { servicesHero } from "@/data/services-page";
import { services, stats } from "@/data/site";
import { Counter } from "@/components/Counter";
import { nodeIcons } from "@/components/ServiceIcons";

/** Data Master brand signage (concept visual; the other Data Master visuals are in trainingPartner, data/services-page.ts). */
const heroImage = {
  src: "/images/partners/campaign/reception-light.jpg",
  alt: "Data Master Consulting logo on a reception wall",
};

/** Figures shown under the hero: data/site `stats` flagged `servicesHero`, with this page's overrides applied. */
const heroStats = stats.filter((s) => s.servicesHero).map((s) => ({ ...s, ...servicesHero.statOverrides[s.label] }));

/** Hero in the Data Master palette: blue-to-purple ground, headline left, a tilted panel of the five disciplines right. */
export function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(120deg,#0A1830_0%,#12306A_55%,#2058B8_100%)] text-white"
      aria-labelledby="services-title"
    >
      <div className="grid-drift absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-[#74B0F2]/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#EBB84C]/15 blur-[120px]"
        aria-hidden
      />

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
            <div className="rise mt-10 flex flex-col gap-3 [--d:600ms] sm:flex-row">
              <Link href="/contact" className="btn btn-gold justify-center rounded-lg">
                Talk to our experts <span aria-hidden>→</span>
              </Link>
              <a href="#why" className="btn justify-center rounded-lg border border-white/40 text-white hover:bg-white/10">
                Explore services <span aria-hidden>↓</span>
              </a>
            </div>
          </div>

          {/* Photo with a floating "five disciplines" card (links jump to each service below) */}
          <div className="rise [--d:360ms] lg:col-span-5">
            <div className="relative pb-14 sm:pl-10">
              <div
                aria-hidden
                className="absolute -right-3 bottom-10 left-7 top-3 rotate-[2.5deg] rounded-3xl bg-gradient-to-br from-[#2058B8] to-[#EBB84C] opacity-80 sm:left-14"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_80px_-30px_rgba(5,10,40,0.9)] lg:aspect-[5/6]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[62%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830]/50 via-transparent to-transparent" aria-hidden />
              </div>

              <div className="absolute bottom-0 left-0 w-[calc(100%-1.5rem)] max-w-[380px] rounded-2xl bg-white p-5 text-[#0F172A] shadow-[0_24px_50px_-20px_rgba(5,10,40,0.7)]">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#2563EB]">Five disciplines</p>
                  <span className="rounded-full bg-[#FBF3DD] px-2.5 py-0.5 text-[11.5px] font-semibold text-[#8C6F38]">One partner</span>
                </div>
                <ul className="mt-4 grid grid-cols-5 gap-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex flex-col items-center gap-1.5 rounded-lg py-1"
                        aria-label={s.short}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4F7FC] to-[#EAF2FD] text-[#2058B8] transition group-hover:from-[#2058B8] group-hover:to-[#3B82E4] group-hover:text-white [&_svg]:h-5 [&_svg]:w-5">
                          {nodeIcons[s.slug]}
                        </span>
                        <span className="hidden text-[10.5px] font-medium text-[#64748B] group-hover:text-[#2058B8] sm:block" aria-hidden>
                          {s.node.charAt(0) + s.node.slice(1).toLowerCase()}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <dl className="rise mt-16 grid grid-cols-1 gap-4 [--d:760ms] sm:grid-cols-3 md:mt-20">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse gap-2 rounded-xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm"
            >
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
