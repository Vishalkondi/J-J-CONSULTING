import Image from "next/image";
import { StatChips } from "./StatChips";
import { howden, images, stats } from "@/data/howden-hx";

export function HowdenHero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white" aria-labelledby="howden-title">
      <Image
        quality={92}
        src={images.presenterDataWall.src}
        alt={images.presenterDataWall.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Dark gradient keeps text readable over the photograph */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{ background: "linear-gradient(180deg, rgba(8,18,31,0.72) 0%, rgba(8,18,31,0.82) 55%, rgba(8,18,31,0.96) 100%)" }}
      />
      <div className="wrap relative pb-20 pt-40 md:pb-28 md:pt-52">
        <p className="label text-gold-light">{howden.eyebrow}</p>
        <h1 id="howden-title" className="mt-6 max-w-5xl text-[clamp(34px,5.2vw,72px)] leading-[1.06]">
          {howden.headline}
        </h1>
        <dl className="mt-10 grid max-w-3xl gap-x-10 gap-y-5 border-t border-white/25 pt-6 sm:grid-cols-[auto_1fr]">
          <dt className="label text-white/55">Role</dt>
          <dd className="font-display text-[22px]">{howden.role}</dd>
          <dt className="label text-white/55">Company</dt>
          <dd className="font-display text-[22px]">{howden.company}</dd>
          <dt className="label text-white/55">Dates</dt>
          <dd className="font-display text-[22px]">{howden.dates}</dd>
        </dl>
        <StatChips stats={stats} />
      </div>
    </section>
  );
}
