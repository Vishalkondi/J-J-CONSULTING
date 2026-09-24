const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** Decorative line icon per industry. */
export const industryIcons: Record<string, React.ReactElement> = {
  Insurance: (
    <svg {...iconProps}>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  "Financial Services": (
    <svg {...iconProps}>
      <path d="M4 19h16M6 16V9M10 16V9M14 16V9M18 16V9M3 8l9-5 9 5z" />
    </svg>
  ),
  Banking: (
    <svg {...iconProps}>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M3 10h18M7 15h3" />
    </svg>
  ),
  Technology: (
    <svg {...iconProps}>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </svg>
  ),
  "Professional Services": (
    <svg {...iconProps}>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" />
    </svg>
  ),
  "Risk & Compliance": (
    <svg {...iconProps}>
      <path d="M12 3L2 20h20z" />
      <path d="M12 10v4M12 17h.01" />
    </svg>
  ),
  "Digital Transformation": (
    <svg {...iconProps}>
      <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
      <path d="M18 4v3h-3M6 20v-3h3" />
    </svg>
  ),
  default: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
};
