import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const shortcuts = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="This page could not be found."
      intro="The link may be out of date, or the page may have moved. These are good places to continue."
      image={{ src: "/images/london-office-developers.jpg", alt: "" }}
    >
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link href="/" className="btn btn-gold">
          Return home <span aria-hidden>→</span>
        </Link>
        <ul className="flex flex-wrap gap-2">
          {shortcuts.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="btn btn-ghost">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageHero>
  );
}
