import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/site";
import { serviceHeadlines } from "@/data/services-page";
import { serviceHeroImages } from "@/data/service-images";
import { nodeIcons } from "@/components/SignatureVisual";
import { Reveal } from "@/components/Reveal";

/** One service: photo with a floating label card on one side, copy and capability tags on the other (alternating). */
export function ServiceSection({ service: s, flip }: { service: Service; flip: boolean }) {
  const img = serviceHeroImages[s.slug];
  return (
    <article id={s.slug} className="scroll-mt-24 py-12 md:py-16" aria-labelledby={`${s.slug}-title`}>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className={flip ? "lg:col-span-6 lg:col-start-7 lg:row-start-1" : "lg:col-span-6"}>
          <div className="relative">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#12306A] shadow-[0_30px_60px_-30px_rgba(32,88,184,0.55)]">
              {img && (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#12306A]/70 via-[#2058B8]/20 to-transparent" aria-hidden />
              <span className="absolute left-6 top-5 font-sans text-[64px] font-bold leading-none text-white/90 drop-shadow-sm">{s.index}</span>
            </div>
            <div
              className={`absolute -bottom-6 flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.45)] ${
                flip ? "left-6" : "right-6"
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#2058B8] to-[#3B82E4] text-white [&_svg]:h-5 [&_svg]:w-5">
                {nodeIcons[s.slug]}
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">{s.node}</span>
                <span className="block text-[15px] font-semibold text-[#0F172A]">{s.short}</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className={flip ? "lg:col-span-6 lg:col-start-1 lg:row-start-1" : "lg:col-span-6"} delay={0.1}>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FD] px-3 py-1 text-[12px] font-semibold text-[#2058B8]">
            Service {s.index}
          </p>
          <h2 id={`${s.slug}-title`} className="mt-5 font-sans text-[clamp(30px,3.2vw,44px)] font-bold leading-[1.1] tracking-[-0.025em] text-[#0F172A]">
            {s.title}
          </h2>
          <p className="mt-4 text-[19px] font-medium leading-snug text-[#2058B8]">{serviceHeadlines[s.slug]}</p>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.7] text-[#475569]">{s.description}</p>
          <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${s.short} capabilities`}>
            {s.items.map((item) => (
              <li key={item} className="rounded-full border border-[#D6E4F7] bg-white px-3.5 py-1.5 text-[13.5px] font-medium text-[#334155]">
                {item}
              </li>
            ))}
          </ul>
          <Link href={`/services/${s.slug}`} className="btn btn-dm mt-9 rounded-lg">
            {s.cta} <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
