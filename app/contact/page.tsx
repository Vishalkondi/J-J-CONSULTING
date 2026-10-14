import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/home/Closing";
import { pageMeta } from "@/lib/seo";
import { company } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Contact J & J Consulting about technology expertise, specialist talent, workforce solutions, management consulting or technology training.",
  path: "/contact",
});

export default function Contact() {
  const q = encodeURIComponent("Hamilton House, 87-89 Bell Street, Reigate, RH2 7AN, United Kingdom");
  return (
    <>
      <PageHero eyebrow="Contact" title="Speak with J & J Consulting." intro="Tell us what you need and we will respond." />
      <ContactSection />
      <section className="bg-bone pb-24 pt-4" aria-labelledby="loc">
        <div className="wrap">
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 id="loc" className="text-[clamp(28px,3.4vw,44px)] text-navy">
              Find us
            </h2>
            <p className="text-[15px] text-graphite">{company.address.oneLine}</p>
          </div>
          <div className="aspect-[16/8] min-h-[300px] w-full overflow-hidden border border-navy/15">
            <iframe
              title="Map showing J & J Consulting at Hamilton House, Reigate"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
          <a
            className="link-arrow mt-5 text-navy"
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps <span aria-hidden>↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
