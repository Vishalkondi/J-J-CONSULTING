import Link from "next/link";
import { servicesCta } from "@/data/services-page";
import { Reveal } from "@/components/Reveal";

/** Closing call to action: a gradient panel on a light band, clearly separated from the dark footer. */
export function ServicesCTA() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="cta-title">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#12306A_0%,#2058B8_55%,#3B82E4_100%)] px-7 py-14 text-white shadow-[0_40px_80px_-40px_rgba(32,88,184,0.7)] sm:px-12 md:px-16 md:py-20">
          <div className="grid-drift absolute inset-0 opacity-30" aria-hidden />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-3.5 py-1 text-[12.5px] font-medium">{servicesCta.label}</p>
              <h2 id="cta-title" className="mt-6 font-sans text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.03em]">
                {servicesCta.title.join(" ")}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[17px] leading-[1.7] text-white/85">{servicesCta.text}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-gold justify-center rounded-lg">
                  Talk to Us <span aria-hidden>→</span>
                </Link>
                <Link href="/expertise" className="btn justify-center rounded-lg border border-white/50 text-white hover:bg-white/10">
                  Explore Our Expertise
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
