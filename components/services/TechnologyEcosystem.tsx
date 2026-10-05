import { techGroups } from "@/data/site";
import { ecosystem } from "@/data/services-page";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

/** Technology groups as cards with name tags — text only, no vendor logos. */
export function TechnologyEcosystem() {
  return (
    <section className="bg-[#F4F7FC] py-24 md:py-32" aria-labelledby="eco-title">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full bg-[#EAF2FD] px-3.5 py-1 text-[12.5px] font-semibold text-[#2058B8]">{ecosystem.label}</p>
          <h2 id="eco-title" className="mt-6 font-sans text-[clamp(34px,4.2vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0F172A]">
            The technologies behind <span className="brand-text-blue">modern businesses.</span>
          </h2>
        </div>
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g, i) => (
            <li key={g.group}>
              <Reveal
                delay={i * 0.06}
                className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(32,88,184,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-[20px] font-bold text-[#0F172A]">{g.group}</h3>
                  <span className="rounded-full bg-gradient-to-r from-[#2058B8] to-[#3B82E4] px-2.5 py-0.5 text-[12px] font-semibold text-white">
                    {g.items.length}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li key={t} className="rounded-lg border border-[#D6E4F7] bg-[#F7FAFE] px-3 py-1.5 text-[14px] font-medium text-[#334155]">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
          <li className="md:col-span-2 lg:col-span-1">
            <Reveal
              delay={0.3}
              className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-[#2058B8] to-[#3B82E4] p-7 text-white"
            >
              <p className="font-sans text-[20px] font-bold leading-snug">Not sure which technology fits?</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/85">We help you choose the right platform for your organization’s reality.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold">
                Talk to us <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
