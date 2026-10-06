import { why } from "@/data/services-page";
import { Reveal } from "@/components/Reveal";

const icons = [
  <path key="s" d="M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5M12 11a1 1 0 1 0 1 1M21 3l-9 9" />,
  <path key="t" d="M4 6h16v10H4zM8 20h8M12 16v4" />,
  <path key="i" d="M4 20l6-6M14 4l6 6-8 8-6-6zM14 10l-4 4" />,
  <path key="e" d="M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5" />,
];

/** Gradient feature band: four principles as glass cards. */
export function WhyJJ() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[linear-gradient(120deg,#0A1830_0%,#12306A_55%,#2058B8_100%)] py-24 text-white md:py-32"
      aria-labelledby="why-title"
    >
      <div className="grid-drift absolute inset-0 opacity-40" aria-hidden />
      <div className="wrap relative">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#74B0F2]/50 bg-white/[0.06] px-3.5 py-1 text-[12.5px] font-medium text-[#BFDBFE]">
            {why.label}
          </p>
          <h2 id="why-title" className="mt-6 font-sans text-[clamp(34px,4.4vw,58px)] font-bold leading-[1.08] tracking-[-0.03em]">
            {why.title[0]} {why.title[1]} <span className="dm-gradient-text">{why.title[2]}</span>
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.items.map((w, i) => (
            <li key={w.title}>
              <Reveal
                delay={i * 0.08}
                className="group h-full rounded-2xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.11]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2058B8] to-[#EBB84C]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      {icons[i]}
                    </svg>
                  </span>
                  <span className="font-sans text-[13px] font-semibold text-[#BFDBFE]/60">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 font-sans text-[20px] font-bold">{w.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-[#BFDBFE]/85">{w.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
