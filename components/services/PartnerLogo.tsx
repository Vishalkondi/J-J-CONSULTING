"use client";
import { useCallback, useState } from "react";

/**
 * Data Master logo. Shows the HD lockup from `logo` once that file is supplied; until then,
 * the site's small icon plus the name set in type (so nothing looks low-resolution).
 */
export function PartnerLogo({ logo, mark, name, dark = false }: { logo: string | null; mark: string; name: string; dark?: boolean }) {
  const [failed, setFailed] = useState(!logo);
  const check = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  if (!failed)
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img ref={check} src={logo ?? undefined} alt={name} className="h-20 w-auto" onError={() => setFailed(true)} />
    );
  return (
    <span className="flex items-center gap-4" role="img" aria-label={name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={mark} alt="" width={74} height={44} className="h-11 w-auto" />
      <span className="flex flex-col leading-none">
        <span className={`font-sans text-[22px] font-semibold tracking-tight ${dark ? "text-white" : "text-charcoal"}`}>Data Master</span>
        <span className={`mt-1.5 font-sans text-[11px] tracking-[0.32em] ${dark ? "text-dm-mist" : "text-graphite"}`}>CONSULTING</span>
      </span>
    </span>
  );
}
