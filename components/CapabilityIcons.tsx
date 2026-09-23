/** One line icon per capability on /expertise. Decorative only, no factual content. */
const common = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const capabilityIcons: Record<string, () => React.ReactElement> = {
  "Business Change": () => (
    <svg {...common}>
      <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
      <path d="M18 4v3h-3M6 20v-3h3" />
    </svg>
  ),
  Requirements: () => (
    <svg {...common}>
      <path d="M7 3h8l4 4v14H7z" />
      <path d="M15 3v4h4M9.5 13l1.7 1.7L14.5 11" />
    </svg>
  ),
  Transformation: () => (
    <svg {...common}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8 7.5 16 16.5M8.5 6h9a3 3 0 0 1 3 3v1M15.5 18h-9a3 3 0 0 1-3-3v-1" />
    </svg>
  ),
  "Business Process Re-engineering": () => (
    <svg {...common}>
      <path d="M4 6h10a4 4 0 0 1 4 4v1M20 18H10a4 4 0 0 1-4-4v-1" />
      <path d="M11 3 14 6l-3 3M13 21l-3-3 3-3" />
    </svg>
  ),
  "Data Management": () => (
    <svg {...common}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  "Data Governance": () => (
    <svg {...common}>
      <path d="M12 3l7 3v6c0 5-3 8.5-7 9-4-.5-7-4-7-9V6z" />
      <path d="M9.5 12l2 2 3.5-4" />
    </svg>
  ),
  Analytics: () => (
    <svg {...common}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  "Project Management": () => (
    <svg {...common}>
      <rect x="4" y="5" width="16" height="15" rx="1.5" />
      <path d="M4 9.5h16M8 3v3.5M16 3v3.5M8 13.5h2M8 17h5" />
    </svg>
  ),
  "Stakeholder Management": () => (
    <svg {...common}>
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="18" cy="6" r="2.1" />
      <circle cx="17" cy="17" r="2.1" />
      <path d="M8 10.6c-2.6.4-4.4 1.9-4.4 4.4M10.1 9.3l5.6-2.4M11 10l4.7 5.7" />
    </svg>
  ),
  Architecture: () => (
    <svg {...common}>
      <rect x="4" y="10" width="6" height="10" />
      <rect x="14" y="4" width="6" height="16" />
      <path d="M4 10h6M10 14h4" />
    </svg>
  ),
  Testing: () => (
    <svg {...common}>
      <path d="M9 3h6M10 3v5.5L5.5 17a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 8.5V3" />
      <path d="M7.5 14.5h9" />
    </svg>
  ),
  "Regulatory & Compliance": () => (
    <svg {...common}>
      <path d="M12 3l7 3v6c0 5-3 8.5-7 9-4-.5-7-4-7-9V6z" />
      <path d="M12 8v4l2.5 2.5" />
    </svg>
  ),
};
