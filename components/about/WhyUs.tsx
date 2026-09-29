import { whyUs } from "@/data/industries";

/** "Why J & J Consulting" principles, shared with the Industries page via data/industries. */
export function WhyUs() {
  return (
    <section className="bg-bone py-24 md:py-32" aria-labelledby="why-title">
      <div className="wrap">
        <p className="pill mb-5 bg-white text-gold-dark">Why J &amp; J Consulting</p>
        <h2 id="why-title" className="max-w-3xl text-balance text-[clamp(32px,4.4vw,60px)] leading-[1.05] text-navy">
          What clients can expect from us
        </h2>
        <ul className="mt-14 grid gap-px border border-navy/15 bg-navy/15 sm:grid-cols-2 lg:grid-cols-5">
          {whyUs.map((w, i) => (
            <li key={w.title} className="group flex flex-col gap-4 bg-white p-7 transition-colors hover:bg-paper">
              <span className="font-display text-[40px] leading-none text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-[22px] leading-tight text-navy">{w.title}</h3>
              <span aria-hidden className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
              <p className="text-[15px] leading-relaxed text-graphite">{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
