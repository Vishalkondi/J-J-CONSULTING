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

      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <ServiceCards />
        </div>
      </section>
    </>
  );
}
