export function CapabilitiesStrip({ items }: { items: string[] }) {
  return (
    <section className="blueprint bg-midnight py-16 text-white md:py-20" aria-labelledby="cap-title">
      <div className="wrap">
        <h2 id="cap-title" className="label text-gold-light">
          Capabilities
        </h2>
        <ul className="mt-8 grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <li key={c} className="border-b border-r border-white/20 px-6 py-7 font-display text-[clamp(22px,2.2vw,30px)] leading-tight">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
