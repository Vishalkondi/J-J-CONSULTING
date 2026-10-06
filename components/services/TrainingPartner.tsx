import Image from "next/image";
import { partnerProgrammes, trainingPartner as p } from "@/data/services-page";
import { Reveal } from "@/components/Reveal";
import { PartnerLogo } from "./PartnerLogo";
import { RevealFrame } from "./RevealFrame";
import { PartnerContact } from "./PartnerContact";
import { DatabricksConsulting } from "./DatabricksConsulting";

/** One brand identity card: 4:3 image (nothing laid over it), then label, title and caption. */
function BrandCard({ item, index }: { item: (typeof p.brand)[number]; index: number }) {
  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] ${"position" in item ? item.position : ""}`}
        />
      </div>
      <figcaption className="flex flex-1 flex-col p-6 md:p-7">
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-dm-sky">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-dm-sky/60" aria-hidden />
          <span>{item.label}</span>
        </p>
        <p className="mt-4 font-sans text-[21px] font-bold leading-snug tracking-[-0.01em]">{item.title}</p>
        <p className="mt-2 text-[15px] leading-relaxed text-dm-mist/80">{item.text}</p>
      </figcaption>
    </figure>
  );
}

/** Hairline + muted-text tokens for this section's Data Master palette (blue-to-purple, sky accent). */
const line = "border-white/15";
const muted = "text-dm-mist/80";
const accent = "text-dm-sky";

/**
 * Training & delivery partner: Data Master Consulting — who they are, pillars, Microsoft partnership,
 * founders, Databricks event and programmes. Styled in Data Master's own colours (thedatamaster.in).
 */
export function TrainingPartner() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(120deg,#1E3A8A_0%,#312E81_55%,#581C87_100%)] py-24 text-white md:py-36"
      aria-labelledby="partner-title"
    >
      <div className="grid-drift absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-dm-sky/20 blur-[120px]"
        aria-hidden
      />
      <div className="wrap relative">
        {/* Who they are — in the style of thedatamaster.in's hero */}
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal className="lg:col-span-7">
            <p className="inline-flex items-center rounded-full border border-dm-sky/50 bg-white/[0.06] px-3.5 py-1 text-[12.5px] font-medium text-dm-mist">
              {p.label}
            </p>
            <div className="mt-8">
              <PartnerLogo logo={p.logo} mark={p.mark} name={p.company} dark />
            </div>
            <h2 id="partner-title" className="mt-8 font-sans text-[clamp(36px,4.6vw,64px)] font-bold leading-[1.06] tracking-[-0.025em]">
              Hands-on <span className="bg-gradient-to-r from-[#F06292] to-[#A855F7] bg-clip-text text-transparent">data &amp; AI</span>{" "}
              training, led by practitioners.
            </h2>
            <p className={`mt-7 max-w-2xl text-[18px] leading-[1.7] ${muted}`}>{p.about}</p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-dm-mist/60">{p.location}</p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="relative px-2 py-6 sm:px-6">
              <div
                aria-hidden
                className="absolute inset-0 rotate-[2.5deg] rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#9333EA] shadow-[0_40px_80px_-30px_rgba(15,10,60,0.8)]"
              />
              <div className="relative space-y-4 p-4 sm:p-6">
                {p.stats.map((st) => (
                  <div key={st.label} className="rounded-lg bg-white p-6 text-charcoal shadow-[0_18px_40px_-24px_rgba(15,23,42,0.7)]">
                    <div className="flex items-start justify-between gap-4">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7 text-[#2563EB]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden
                      >
                        <path d="M4 20V4M4 20h16M9 16v-5M13 16V8M17 16v-3" strokeLinecap="round" />
                      </svg>
                      <span className="font-sans text-[22px] font-semibold text-[#16A34A]">{st.value}</span>
                    </div>
                    <p className="mt-4 font-sans text-[16px] font-semibold text-[#111827]">{st.label}</p>
                    <p className="mt-1.5 text-[14px] leading-snug text-[#4B5563]">{st.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <p className={`mt-12 max-w-xl border-l border-dm-sky pl-4 text-[15px] italic leading-relaxed ${muted}`}>{p.tagline}</p>

        {/* Two pillars */}
        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-6">
          {p.pillars.map((pl, i) => (
            <Reveal
              key={pl.title}
              delay={i * 0.08}
              className={`group overflow-hidden border ${line} rounded-2xl bg-white/[0.06] backdrop-blur-sm`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={pl.image.src}
                  alt={pl.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dm-indigo/80 via-transparent to-transparent" aria-hidden />
                <p className="absolute bottom-4 left-6 rounded-full bg-dm-ink/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-dm-sky backdrop-blur md:left-10">
                  {pl.title}
                </p>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-sans text-[clamp(26px,2.6vw,34px)] font-bold leading-tight tracking-[-0.02em]">{pl.lead}</h3>
                <p className={`mt-5 max-w-xl text-[16px] leading-relaxed ${muted}`}>{pl.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Microsoft Training Services Partner */}
        <Reveal className="mt-4 overflow-hidden rounded-2xl bg-white text-charcoal md:mt-6">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-8 lg:p-14">
            <div className="lg:col-span-5">
              {/* Data Master's own Microsoft Partner badge, as shown on thedatamaster.in — their status, not a J & J partnership. */}
              <Image src={p.microsoft.badge} alt="Microsoft Partner" width={510} height={131} className="h-11 w-auto" />
              <p className="mt-3 text-[12.5px] text-graphite">
                Data Master&apos;s partner status, as shown on{" "}
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dm-sky underline-offset-2 hover:text-dm-blue"
                >
                  thedatamaster.in
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
              <h3 className="mt-7 font-sans text-[clamp(30px,3.4vw,44px)] font-bold leading-[1.04] tracking-[-0.03em] text-dm-blue">
                {p.microsoft.title}
              </h3>
              <p className="mt-6 text-[16.5px] leading-[1.7] text-graphite">{p.microsoft.text}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="label text-dm-blue/70">Specialisms</p>
              <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2 font-sans text-[clamp(20px,1.9vw,26px)] font-bold leading-snug text-dm-indigo">
                {p.microsoft.stack.map((t, k) => (
                  <li key={t} className="flex items-baseline gap-2">
                    {t}
                    {k < p.microsoft.stack.length - 1 && (
                      <span aria-hidden className="text-[0.6em] text-dm-sky">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <ul className="mt-10 border-t border-dm-blue/15">
                {p.microsoft.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 border-b border-dm-blue/15 py-3.5 text-[15px] text-charcoal">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-dm-sky" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <DatabricksConsulting />

        {/* Trusted partner */}
        <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="relative lg:col-span-6">
            <RevealFrame>
              <div className="group relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src={p.trusted.photo}
                  alt={p.trusted.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
                />
              </div>
            </RevealFrame>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <h3 className="font-sans text-[clamp(30px,3.2vw,44px)] font-bold leading-[1.05] tracking-[-0.03em]">{p.trusted.title}</h3>
            <p className={`mt-6 text-[17px] leading-[1.7] ${muted}`}>{p.trusted.text}</p>
            <ol className={`mt-10 border-t ${line}`}>
              {p.trusted.points.map((pt, i) => (
                <li key={pt.title} className={`grid grid-cols-[2.5rem_1fr] border-b ${line} py-5`}>
                  <span className={`pt-1 font-mono text-[12px] ${accent}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-sans text-[13px] font-medium uppercase tracking-[0.16em]">{pt.title}</span>
                    <span className={`mt-2 block text-[15.5px] leading-relaxed ${muted}`}>{pt.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Leadership: portrait beside the bio, vertically centred */}
        <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
              <Image
                src={p.photo}
                alt={`${p.name}, ${p.role}, ${p.company}`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dm-indigo/95 via-dm-indigo/60 to-transparent p-6 pt-24">
                <p className="font-sans text-[32px] font-bold leading-none tracking-[-0.02em]">{p.name}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-dm-sky">{p.role}</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className={`label ${accent}`}>Leadership</p>
              <p className="mt-6 font-sans text-[clamp(24px,2.4vw,32px)] font-bold leading-snug tracking-[-0.02em]">
                Meet {p.name}, the founder and CEO of {p.company}.
              </p>
              <p className={`mt-5 text-[17px] leading-[1.7] ${muted}`}>{p.bio}</p>
              <ul className={`mt-8 grid border-t ${line} sm:grid-cols-2 sm:gap-x-8`}>
                {p.highlights.map((h) => (
                  <li key={h} className={`flex items-center gap-3 border-b ${line} py-3.5 text-[15px] text-white/90`}>
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-dm-sky" />
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href={p.socials.find((s) => s.label === "LinkedIn")?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-2.5 text-[14px] font-medium text-white transition hover:border-dm-sky hover:bg-dm-sky/15"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z" />
                </svg>
                Connect with {p.name.split(" ")[0]} on LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Brand identity (concept visuals) */}
        <div className="mt-20 md:mt-28">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className={`label ${accent}`}>Data Master · concept visuals</p>
              <h3 className="mt-4 font-sans text-[clamp(28px,3vw,40px)] font-bold leading-tight tracking-[-0.03em]">Brand identity</h3>
            </div>
            <p className={`text-[15.5px] leading-relaxed lg:col-span-5 ${muted}`}>
              A cloud, a database and a gear: the Data Master mark, carried from stationery to the workplace.
            </p>
          </Reveal>
          {/* Three equal cards, same style as the pillar cards above: image, then label, title and caption. */}
          <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {p.brand.map((b, i) => (
              <li key={b.src}>
                <Reveal delay={i * 0.08} className="h-full">
                  <BrandCard item={b} index={i} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Databricks Learning Festival */}
        <figure className="mt-20 md:mt-28">
          <RevealFrame>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[2.16/1]">
              <Image
                src={p.event.photo}
                alt={p.event.alt}
                fill
                sizes="(min-width: 1360px) 1360px, 100vw"
                className="object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.02]"
              />
            </div>
          </RevealFrame>
          <figcaption className="mt-6 grid gap-3 md:grid-cols-12 md:gap-8">
            <span className={`font-mono text-[12px] uppercase tracking-[0.14em] md:col-span-3 ${accent}`}>
              {p.event.date} · Databricks Learning Festival
            </span>
            <span className={`text-[16px] leading-relaxed md:col-span-8 md:col-start-5 ${muted}`}>{p.event.text}</span>
          </figcaption>
        </figure>

        {/* Programmes */}
        <div className="mt-20 md:mt-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h3 className="font-sans text-[clamp(28px,3vw,40px)] font-bold leading-tight tracking-[-0.03em]">Training programmes</h3>
            <a href={p.website} target="_blank" rel="noopener noreferrer" className="link-arrow text-white decoration-dm-sky">
              Visit thedatamaster.in <span aria-hidden>↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Brochure cover beside the programmes (sticky on desktop) */}
            <RevealFrame className="mx-auto w-full max-w-sm lg:col-span-4 lg:mx-0 lg:max-w-none">
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[612/960] overflow-hidden rounded-2xl shadow-[0_40px_80px_-30px_rgba(5,10,40,0.9)] ring-1 ring-white/10">
                  <Image
                    src={p.programmesImage.src}
                    alt={p.programmesImage.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 384px"
                    className="object-cover"
                  />
                </div>
                <p className={`mt-4 font-mono text-[11px] uppercase tracking-[0.14em] ${accent}`}>Programme brochure · concept visual</p>
              </div>
            </RevealFrame>

            <div className="space-y-4 md:space-y-5 lg:col-span-8">
              {partnerProgrammes.map((g, i) => (
                <Reveal
                  key={g.title}
                  delay={i * 0.08}
                  className={`group grid gap-6 border ${line} rounded-2xl bg-white/[0.06] p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white/[0.1] sm:grid-cols-[1fr_1.2fr] md:p-9`}
                >
                  <div>
                    <p className={`font-mono text-[12px] ${accent}`}>{String(i + 1).padStart(2, "0")}</p>
                    <h4 className="mt-3 font-sans text-[28px] font-bold leading-tight tracking-[-0.02em]">{g.title}</h4>
                    <span aria-hidden className="mt-4 block h-px w-8 bg-dm-sky transition-all duration-500 group-hover:w-16" />
                    <p className={`mt-4 text-[15px] leading-relaxed ${muted}`}>{g.text}</p>
                  </div>
                  <ul className="space-y-2.5 self-center sm:border-l sm:border-white/10 sm:pl-6">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[14.5px] text-white/90">
                        <span aria-hidden className={accent}>
                          —
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <PartnerContact />
      </div>
    </section>
  );
}
