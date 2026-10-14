import type { ReactElement } from "react";

/*
 * Plain (non-"use client") module so server components can render these icons: importing a value from a
 * "use client" file into a server component yields a client reference, not the JSX, and the icons render empty.
 */

const icon = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** One icon per discipline, keyed by service slug. */
export const nodeIcons: Record<string, ReactElement> = {
  "it-consultancy": (
    <svg {...icon}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
  "management-consultancy": (
    <svg {...icon}>
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
    </svg>
  ),
  recruitment: (
    <svg {...icon}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 11l2 2 3.5-4" />
    </svg>
  ),
  "technology-training": (
    <svg {...icon}>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c3 2 9 2 12 0v-5" />
    </svg>
  ),
  "workforce-solutions": (
    <svg {...icon}>
      <circle cx="7" cy="8" r="2.5" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M2.5 19a4.5 4.5 0 0 1 9 0M12.5 19a4.5 4.5 0 0 1 9 0" />
    </svg>
  ),
};
