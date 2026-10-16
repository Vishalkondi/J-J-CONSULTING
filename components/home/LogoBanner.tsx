import Image from "next/image";

/** Full-width brand artwork (logo over a night skyline), shown straight after the video hero. */
export function LogoBanner() {
  return (
    <section className="relative w-full bg-midnight" aria-label="J & J Consulting, established 2010">
      <div className="relative mx-auto aspect-[2367/1321] max-h-[100svh] w-full">
        <Image
          src="/images/jj-logo-banner.jpg"
          alt="J & J Consulting logo, gold and silver, over a city skyline at night. Established 2010."
          fill
          sizes="100vw"
          quality={92}
          className="object-cover"
        />
      </div>
    </section>
  );
}
