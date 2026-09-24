import Image from "next/image";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";

type Props = {
  href: string;
  image: string;
  type: string;
  category: string;
  title: string;
  excerpt?: string;
  date?: string | null;
  readMinutes?: number;
  /** Large horizontal card for the featured item. */
  featured?: boolean;
  headingLevel?: "h2" | "h3";
};

/** Photo card for an article or project spotlight. */
export function InsightCard({ href, image, type, category, title, excerpt, date, readMinutes, featured, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  const meta = [date ? formatDate(date) : category, readMinutes ? `${readMinutes} min read` : null].filter(Boolean).join(" · ");
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden border border-navy/15 bg-white transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        featured ? "lg:grid lg:grid-cols-[1.15fr_1fr]" : "h-full",
      )}
    >
      <div
        className={cn("relative overflow-hidden bg-navy", featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[340px]" : "aspect-[16/10]")}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes={featured ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" aria-hidden />
        <span className="absolute left-4 top-4 bg-midnight/80 px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-gold-light backdrop-blur-sm">
          {type}
        </span>
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:justify-center lg:p-10")}>
        <p className="font-mono text-[11.5px] text-graphite">{meta}</p>
        <Heading
          className={cn(
            "mt-3 leading-tight text-navy transition-colors group-hover:text-steel",
            featured ? "text-[clamp(26px,3vw,40px)]" : "text-[22px]",
          )}
        >
          {title}
        </Heading>
        {excerpt && <p className="mt-3 text-[15px] leading-relaxed text-graphite">{excerpt}</p>}
        <span className="link-arrow mt-auto pt-6 text-[14px] text-navy">
          Read {href.startsWith("/case-studies") ? "the case study" : "more"} <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
