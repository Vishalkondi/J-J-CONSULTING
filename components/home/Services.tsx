import Link from "next/link";
import { SignatureVisual } from "../SignatureVisual";
import { SectionHeading } from "../SectionHeading";
import { ServiceCards } from "../ServiceCards";

export function WhatWeDo() {
  return (
    <>
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32" aria-labelledby="wwd">
        <div className="wrap">
          <div id="wwd">
            <SectionHeading
              tone="dark"
              eyebrow="What we do"
              title="Five disciplines. One connected firm."
              intro="Technology, consulting, talent, training and workforce solutions, working together around a single client need."
            />
          </div>
          <div className="mt-16">
            <SignatureVisual />
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32" aria-labelledby="services-cards-title">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div id="services-cards-title">
              <SectionHeading eyebrow="Our services" title="Explore each discipline" />
            </div>
            <Link href="/services" className="btn btn-line shrink-0 self-start md:self-auto">
              All services <span aria-hidden>→</span>
            </Link>
          </div>
          <ServiceCards className="mt-12" />
        </div>
      </section>
    </>
  );
}
