import Image from "next/image";
import { NetworkOverlay } from "../NetworkOverlay";
import { brit as b } from "@/data/brit";

/**
 * Code-built programme visual: London photography, dark navy treatment, subtle data network,
 * and only the documented facts as live text. No slogans, no repeated headline.
 */
export function ProgrammeVisual() {
  const figures = [
    { value: b.programme.value, label: "Programme" },
    { value: "8", label: "People" },
    { value: "Jan – May 2017", label: "Engagement" },
  ];
  return (
    <section className="bg-midnight pb-16 pt-4 md:pb-24" aria-label="Programme visual">
      <figure className="wrap">
        <div className="relative isolate h-[440px] overflow-hidden bg-navy md:aspect-[21/9] md:h-auto">
          <Image
            quality={92}
            src={b.visual.src}
            alt={b.visual.alt}
            fill
            sizes="(min-width: 1360px) 1280px, 100vw"
            className="-z-10 object-cover"
          />
          <NetworkOverlay />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 bg-gradient-to-t from-midnight/90 to-transparent px-6 pb-6 pt-24 md:flex-row md:items-end md:justify-between md:px-10 md:pb-8">
            <dl className="flex flex-wrap gap-x-10 gap-y-3">
              {figures.map((f) => (
                <div key={f.label}>
                  <dd className="font-display text-[clamp(22px,2.6vw,34px)] leading-none text-white">{f.value}</dd>
                  <dt className="mt-1.5 font-mono text-[11px] tracking-[0.1em] text-white/60">{f.label}</dt>
                </div>
              ))}
            </dl>
            <ul
              className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[11px] tracking-[0.06em] text-white/70 md:max-w-[52%] md:justify-end"
              aria-label="Work areas"
            >
              {b.connecting.focus.map((f) => (
                <li key={f.title}>{f.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <figcaption className="mt-3 font-mono text-[11px] text-white/55">{b.visual.caption}</figcaption>
      </figure>
    </section>
  );
}
