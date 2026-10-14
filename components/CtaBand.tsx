import Link from "next/link";

export function CtaBand({
  title = "Let’s Build What’s Next.",
  text = "Speak with J & J Consulting about technology, talent, consulting or training.",
  label = "Talk to Us",
}: {
  title?: string;
  text?: string;
  label?: string;
}) {
  return (
    <section className="blueprint bg-navy py-20 text-white md:py-28">
      <div className="wrap flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="text-[clamp(32px,4.4vw,60px)] leading-[1.05]">{title}</h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/70">{text}</p>
        </div>
        <Link href="/contact" className="btn btn-gold shrink-0">
          {label} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
