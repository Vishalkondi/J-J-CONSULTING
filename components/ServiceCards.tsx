import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/site";
import { serviceHeroImages } from "@/data/service-images";
import { cn } from "@/lib/utils";

/** Photo cards for the five services (About + home). */
export function ServiceCards({ className }: { className?: string }) {
  // Bento: two wide cards, then three — five services fill two rows with no gaps.
  return (
    <ul className={cn("grid gap-4 md:grid-cols-6", className)}>
      {services.map((s, i) => {
        const img = serviceHeroImages[s.slug];
        return (
          <li key={s.slug} className={i < 2 ? "md:col-span-3" : "md:col-span-2"}>
            <Link
              href={`/services/${s.slug}`}
              className={`group relative flex overflow-hidden rounded-2xl bg-navy ${i < 2 ? "h-[380px]" : "h-[340px]"}`}
            >
              {img && (
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes={i < 2 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/55 to-midnight/5" aria-hidden />
              <div className="relative mt-auto p-7 text-white">
                <p className="font-mono text-[12px] text-gold-light">{s.index}</p>
                <h3 className="mt-2 font-display text-[28px] leading-tight">{s.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">{s.description}</p>
                <span className="link-arrow mt-5 text-gold-light">
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
