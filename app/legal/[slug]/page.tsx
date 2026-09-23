import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";

const pages: Record<string, string> = {
  "privacy-policy": "Privacy Policy",
  "cookie-policy": "Cookie Policy",
  "terms-and-conditions": "Terms & Conditions",
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug] ?? "Legal", robots: { index: false } };
}

export default async function Legal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = pages[slug];
  if (!title) notFound();
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="bg-paper py-20">
        <div className="wrap prose-jj max-w-[720px]">
          {/* TODO: replace with the approved legal text. Do not launch with this placeholder. */}
          <p>[LEGAL TEXT TO BE CONFIRMED — supply the approved {title} for J &amp; J Incorporated Ltd.]</p>
        </div>
      </section>
    </>
  );
}
