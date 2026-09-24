import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ExperienceCounters } from "@/components/home/Intro";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/seo";
import { experienceTimeline } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Experience",
  description:
    "25+ years of professional experience, including 16+ years in insurance and financial services and international projects across five countries.",
  path: "/experience",
});

export default function Experience() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="A career timeline across technology and insurance."
        intro="25+ years of professional experience, 16+ of them in insurance and financial services."
        image={{ src: "/images/office-team.jpg", alt: "" }}
      />
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <ol className="relative border-l border-navy/20 pl-8 md:pl-14">
            {experienceTimeline.map((e, i) => (
              <li key={`${e.years}-${e.title}-${i}`} className="relative grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-10">
                <span
                  className="absolute -left-[37px] top-[34px] h-2.5 w-2.5 rounded-full border-2 border-gold bg-paper md:-left-[61px]"
                  aria-hidden
                />
                <Reveal y={10}>
                  <p className="font-mono text-[14px] text-gold-dark">{e.years}</p>
                </Reveal>
                <Reveal y={10} delay={0.05}>
                  <p className="font-display text-[clamp(24px,3vw,38px)] leading-tight text-navy">{e.title}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <ExperienceCounters />
      <CtaBand />
    </>
  );
}
