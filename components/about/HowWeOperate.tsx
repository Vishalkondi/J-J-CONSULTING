import { TechnologyPartners } from "@/components/home/Expertise";
import { company, deliveryNetwork } from "@/data/site";

/** Where the firm is based, who delivers alongside it, and its technology partners. */
export function HowWeOperate() {
  const locations = [
    { name: "J & J Consulting", place: "Reigate, Surrey, England", role: "Head office", website: null as string | null },
    ...deliveryNetwork.map((d) => ({
      name: d.name,
      place: `${d.location}, India`,
      role: "Delivery & outsourcing partner",
      website: d.website,
    })),
  ];
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="operate-title">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="pill mb-5 bg-white text-gold-dark">How we operate</p>
            <h2 id="operate-title" className="text-balance text-[clamp(32px,4.4vw,60px)] leading-[1.05] text-navy">
              UK-led, with an international delivery network
            </h2>
          </div>
          <p className="text-[17px] leading-relaxed text-graphite">
            Engagements are led from our Reigate office, supported by delivery and outsourcing partners in India and by our technology
            partnerships.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {locations.map((l, i) => (
            <li
              key={l.name}
              className={
                i === 0
                  ? "blueprint relative flex flex-col bg-navy p-7 text-white"
                  : "flex flex-col border border-navy/15 bg-white p-7 text-navy transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(12,32,56,0.35)]"
              }
            >
              <p className={i === 0 ? "label text-gold-light" : "label text-gold-dark"}>{l.role}</p>
              <p className="mt-4 font-display text-[28px] leading-tight">
                {l.website ? (
                  <a
                    href={l.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-navy/20 underline-offset-4 hover:decoration-navy"
                  >
                    {l.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  l.name
                )}
              </p>
              <p className={i === 0 ? "mt-2 text-[15px] text-white/70" : "mt-2 text-[15px] text-graphite"}>{l.place}</p>
              {i === 0 && (
                <p className="mt-6 border-t border-white/15 pt-5 text-[14px] leading-relaxed text-white/65">{company.address.oneLine}</p>
              )}
            </li>
          ))}
        </ul>

        <TechnologyPartners dark={false} />
      </div>
    </section>
  );
}
