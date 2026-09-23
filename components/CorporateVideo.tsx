"use client";
import { useState } from "react";
import { company } from "@/data/site";

/** Click-to-play facade: nothing heavy loads (and no third-party cookies are set) until the visitor presses play. */
export function CorporateVideo() {
  const [on, setOn] = useState(false);
  const id = company.corporateVideoId;
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-navy">
      {on ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title="J & J Consulting corporate video"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setOn(true)}
          aria-label="Play the J & J Consulting corporate video"
          className="group absolute inset-0 block w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" aria-hidden />
          <span className="absolute bottom-6 left-6 flex items-center gap-4 sm:bottom-10 sm:left-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-midnight/60 transition-colors group-hover:bg-gold">
              <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5 fill-gold-light group-hover:fill-midnight" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="font-display text-[26px] text-white">Watch the film</span>
          </span>
        </button>
      )}
    </div>
  );
}
