import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page could not be found.">
      <Link href="/" className="btn btn-gold mt-10">
        Return home <span aria-hidden>→</span>
      </Link>
    </PageHero>
  );
}
