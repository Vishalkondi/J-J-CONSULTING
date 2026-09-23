const base = {
  width: 32,
  height: 32,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const icons: Record<string, () => React.ReactElement> = {
  Finance: () => (
    <svg {...base}>
      <circle cx="16" cy="16" r="11" />
      <path d="M19.5 11.5c-.9-.8-2-1.2-3.3-1.2-2 0-3.2 1.2-3.2 2.8 0 4 0 4-1.2 5.4h9M12.4 17.5h6.2" />
    </svg>
  ),
  Actuarial: () => (
    <svg {...base}>
      <path d="M5 26V6M5 26h22" />
      <path d="M9 21l5-6 4 3 7-9" />
    </svg>
  ),
  Underwriting: () => (
    <svg {...base}>
      <path d="M8 4h11l5 5v19H8z" />
      <path d="M19 4v5h5M12 17l3 3 5-6" />
    </svg>
  ),
  "Policy & Claims": () => (
    <svg {...base}>
      <path d="M16 4l10 4v8c0 6-4.5 10-10 12C10.500 26 6 22 6 16V8z" />
      <path d="M11.500 16l3 3 6-6" />
    </svg>
  ),
  "Capital Modelling": () => (
    <svg {...base}>
      <path d="M16 5l11 6-11 6-11-6z" />
      <path d="M5 16l11 6 11-6M5 21l11 6 11-6" />
    </svg>
  ),
};

export const pillarIcons: Record<string, () => React.ReactElement> = {
  "Regulatory readiness": () => (
    <svg {...base}>
      <path d="M16 4l10 4v8c0 6-4.5 10-10 12C10.5 26 6 22 6 16V8z" />
      <path d="M11.5 16l3 3 6-6" />
    </svg>
  ),
  "Data governance": () => (
    <svg {...base}>
      <ellipse cx="16" cy="8" rx="9" ry="3.5" />
      <path d="M7 8v8c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V8M7 16v8c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-8" />
    </svg>
  ),
  "Process transformation": () => (
    <svg {...base}>
      <circle cx="16" cy="16" r="4.5" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M24.5 7.5l-2.8 2.8M10.3 21.7l-2.8 2.8" />
    </svg>
  ),
  "Sustainable business change": () => (
    <svg {...base}>
      <path d="M6 26V17M13 26V11M20 26V15M27 26V6" />
      <path d="M4 26h24" />
    </svg>
  ),
};
