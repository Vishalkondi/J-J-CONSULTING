import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/site";
import { serviceHeroImages } from "@/data/service-images";
import { nodeIcons } from "./ServiceIcons";
import { cn } from "@/lib/utils";

/**
 * Cards for the five services (About + home). Bento: two wide cards, then three. The photo sits on
 * top and the text on a solid panel below, so every card stays readable and the titles line up.
 * The whole card links to the service.
 */
export function ServiceCards({ className }: { className?: string }) {
  return (
    <ul className={cn("grid gap-5 md:grid-cols-6", className)}>
      {services.map((s, i) => {
        const img = serviceHeroImages[s.slug];
        const wide = i < 2;
        return (
          <li key={s.slug} className={wide ? "md:col-span-3" : "md:col-span-2"}>
            <Link
              href={`/services/${s.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(12,32,56,0.5)]"
            >
              <div className={cn("relative overflow-hidden bg-navy", wide ? "aspect-[16/8]" : "aspect-[16/10]")}>
                {img && (
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes={wide ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" aria-hidden />
                <span className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full bg-midnight/70 px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-gold-light backdrop-blur-sm">
                  <span className="[&_svg]:h-3.5 [&_svg]:w-3.5" aria-hidden>
                    {nodeIcons[s.slug]}
                  </span>
                  {s.index} · {s.node}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className={cn("font-display leading-tight text-navy", wide ? "text-[clamp(24px,2.2vw,30px)]" : "text-[22px]")}>
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-graphite">{s.description}</p>
                <span className="link-arrow mt-auto pt-6 text-navy">
                  {s.cta}{" "}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
