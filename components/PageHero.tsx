import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  image,
  decor,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
  image?: { src: string; alt: string };
  decor?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-midnight text-white">
      {image ? (
        <>
          <Image quality={92} src={image.src} alt="" fill priority sizes="100vw" className="object-cover" />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{ background: "linear-gradient(180deg, rgba(8,18,31,0.78) 0%, rgba(8,18,31,0.9) 100%)" }}
          />
          {decor}
        </>
      ) : (
        <div className="hero-fallback blueprint absolute inset-0" aria-hidden />
      )}
      <div className="wrap relative pb-20 pt-40 md:pb-28 md:pt-52">
        {eyebrow && <p className="label mb-6 text-gold-light">{eyebrow}</p>}
        <h1 className="max-w-4xl text-[clamp(38px,6vw,84px)] leading-[1.02]">{title}</h1>
        {intro && <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-white/70">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
