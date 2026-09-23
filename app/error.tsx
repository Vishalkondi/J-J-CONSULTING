"use client";
import { useEffect } from "react";
import { PageHero } from "@/components/PageHero";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <PageHero eyebrow="Something went wrong" title="This page could not be loaded.">
      <button type="button" onClick={reset} className="btn btn-gold mt-10">
        Try again <span aria-hidden>→</span>
      </button>
    </PageHero>
  );
}
