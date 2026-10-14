import Image from "next/image";
import { ClientMark } from "../ClientMark";
import { images } from "@/data/howden-hx";
import { metlife as m } from "@/data/metlife";

export function MetlifeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white" aria-labelledby="metlife-title">
      <Image
        quality={92}
        src={images.officeTeam.src}
        alt={images.officeTeam.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{ background: "linear-gradient(180deg, rgba(8,18,31,0.74) 0%, rgba(8,18,31,0.86) 55%, rgba(8,18,31,0.97) 100%)" }}
      />
      <div className="wrap relative pb-20 pt-36 md:pb-28 md:pt-48">
        <div className="flex items-center gap-5">
          <ClientMark name={m.client} logo={m.logo} className="h-16 w-16 shrink-0" />
          <p className="label text-gold-light">{m.eyebrow}</p>
        </div>
        <h1 id="metlife-title" className="mt-8 max-w-4xl text-[clamp(40px,6.4vw,92px)] leading-[1.02]">
          {m.headline[0]}
          <span className="block text-[#7ED6C5]">{m.headline[1]}</span>
        </h1>
        <p className="mt-6 font-display text-[clamp(22px,2.6vw,36px)] text-steel-light">{m.subhead}</p>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/75">{m.summary}</p>

        <dl className="mt-10 grid max-w-3xl gap-x-10 gap-y-5 border-t border-white/25 pt-6 sm:grid-cols-[auto_1fr]">
          <dt className="label text-white/55">Role</dt>
          <dd className="font-display text-[22px]">{m.role}</dd>
          <dt className="label text-white/55">Dates</dt>
          <dd className="font-display text-[22px]">{m.period}</dd>
          <dt className="label text-white/55">Programme</dt>
          <dd className="font-display text-[22px]">
            {m.value} · {m.team} people · {m.scope}
          </dd>
        </dl>

        <ul className="mt-10 flex flex-wrap gap-3" aria-label="Programme at a glance">
          {m.chips.map((c) => (
            <li
              key={c}
              className="border border-white/25 bg-midnight/40 px-4 py-2 font-mono text-[12px] tracking-[0.08em] text-white/85 backdrop-blur-sm"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
