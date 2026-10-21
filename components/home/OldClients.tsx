import Link from "next/link";
import { ClientMark } from "../ClientMark";
import { Reveal } from "../Reveal";
import { previousClients } from "@/data/site";

/**
 * "Old clients" logo wall: the seven former clients as logo cards (four, then three centred on
 * desktop), each with its name and dates, and a thank-you line. Details follow in PreviousClients.
 */
export function OldClients() {
  return (
    <section className="bg-white py-24 md:py-32" aria-labelledby="old-clients-title">
      <div className="wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="pill bg-paper text-gold-dark">Our proud history</p>
          <h2 id="old-clients-title" className="mt-6 text-[clamp(32px,4vw,54px)] leading-[1.06] text-navy">
            Old clients: <span className="text-gold-dark">recognising impact</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-graphite">
            Enterprise ERP, CRM and BI programmes across the USA, Malaysia and India.
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-4 md:gap-5">
          {previousClients.map((c, i) => (
            <li key={c.name} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.84rem)] lg:w-[calc(25%-0.94rem)]">
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <div className="group flex h-full flex-col items-center rounded-2xl border border-navy/10 bg-paper p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white hover:shadow-[0_24px_50px_-28px_rgba(12,32,56,0.45)] sm:p-6">
                  <ClientMark name={c.name} logo={c.logo} pad="p-3" className="h-20 w-full rounded-xl sm:h-24" />
                  <p className="mt-4 font-display text-[17px] leading-tight text-navy sm:text-[19px]">{c.name}</p>
                  <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-graphite">{c.period}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="flex items-center gap-4 font-display text-[22px] text-navy">
            <span aria-hidden className="h-px w-10 bg-gold" />
            Thank you for your partnership.
            <span aria-hidden className="h-px w-10 bg-gold" />
          </p>
          <Link href="/clients#previous" className="link-arrow text-navy">
            Project details <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
