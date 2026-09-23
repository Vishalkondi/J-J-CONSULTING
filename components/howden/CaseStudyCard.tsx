import Image from "next/image";
import { Reveal } from "../Reveal";
import { TechBadge } from "./TechBadge";
import type { CaseStudyContent } from "@/data/howden-hx";

export function CaseStudyCard({ title, focus, challenge, actions, stack, image, figure, id }: CaseStudyContent) {
  return (
    <Reveal>
      <article
        aria-labelledby={`${id}-title`}
        className="group border border-navy/15 bg-white transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        {image && (
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-navy">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={92}
              sizes="(min-width: 1360px) 1280px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transform-none"
            />
          </div>
        )}
        <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:p-14">
          <header>
            <p className="font-mono text-[12px] tracking-[0.08em] text-gold-dark">{focus.join(" · ")}</p>
            <h3 id={`${id}-title`} className="mt-4 text-[clamp(28px,3.2vw,44px)] leading-[1.08] text-navy">
              {title}
            </h3>
            <div className="mt-8 border-t border-navy/15 pt-6">
              <p className="label text-graphite">Challenge</p>
              <p className="mt-3 text-[17px] leading-relaxed text-charcoal">{challenge}</p>
            </div>
            {figure && (
              <figure className="mt-8 max-w-[440px]">
                <Image
                  src={figure.src}
                  alt={figure.alt}
                  width={figure.width}
                  height={figure.height}
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="h-auto w-full"
                  quality={92}
                />
                <figcaption className="mt-2 font-mono text-[11px] text-graphite">{figure.caption}</figcaption>
              </figure>
            )}
          </header>
          <div>
            <p className="label text-graphite">What I did</p>
            <ul className="mt-4 divide-y divide-navy/10 border-y border-navy/10">
              {actions.map((a) => (
                <li key={a.verb + a.text} className="py-3.5 text-[16px] leading-relaxed text-charcoal">
                  <strong className="font-semibold text-navy">{a.verb}</strong> {a.text}
                </li>
              ))}
            </ul>
            <p className="label mt-8 text-graphite">Stack</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${title} technology stack`}>
              {stack.map((s) => (
                <TechBadge key={s}>{s}</TechBadge>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
