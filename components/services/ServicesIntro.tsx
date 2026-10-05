import { servicesIntro } from "@/data/services-page";
import { Reveal } from "@/components/Reveal";

/** Two-column introduction on a soft background. */
export function ServicesIntro() {
  return (
    <section className="bg-[#F4F7FC] py-20 md:py-28" aria-labelledby="intro-title">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-10">
        <Reveal className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FD] px-3.5 py-1 text-[12.5px] font-semibold text-[#2058B8]">
            {servicesIntro.label}
          </p>
          <h2 id="intro-title" className="mt-6 font-sans text-[clamp(34px,4.2vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0F172A]">
            {servicesIntro.title[0]} <span className="brand-text-blue">{servicesIntro.title[1]}</span>
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
          <p className="text-[18px] leading-[1.75] text-[#475569]">{servicesIntro.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
