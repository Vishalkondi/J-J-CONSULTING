import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { company } from "@/data/site";

const title = "J & J Consulting | Technology, Transformation & Talent";
const description =
  "J & J Consulting provides technology consultancy, management consulting, specialist recruitment, technology training and workforce solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: title, template: "%s | J & J Consulting" },
  description,
  applicationName: "J & J Consulting",
  openGraph: { title, description, url: company.url, siteName: "J & J Consulting", locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: company.url },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#08121F",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.brand,
    url: company.url,
    foundingDate: String(company.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hamilton House, 87–89 Bell Street",
      addressLocality: "Reigate",
      addressRegion: "Surrey",
      postalCode: "RH2 7AN",
      addressCountry: "GB",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.brand,
    url: company.url,
    description,
    areaServed: ["GB", "US", "MY", "SG", "IN"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hamilton House, 87–89 Bell Street",
      addressLocality: "Reigate",
      addressRegion: "Surrey",
      postalCode: "RH2 7AN",
      addressCountry: "GB",
    },
    knowsAbout: [
      "Information technology consultancy",
      "Management consultancy",
      "Executive search and recruitment",
      "Technology training",
      "Workforce solutions",
      "Insurance and financial services technology",
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions add attributes to <html>/<body> before React
    // loads (e.g. __processed_…). It only ignores attribute differences on these two tags.
    <html lang="en-GB" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
