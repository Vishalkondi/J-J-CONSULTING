import type { ReactNode } from "react";

export type VisualVariant = "hero" | "banner" | "square" | "portrait" | "linkedin" | "editorial" | "infographic" | "architecture";

export type VisualData = {
  eyebrow: string;
  titleLines: string[];
  subtitle?: string;
  role: string;
  period: string;
  areas: string[];
  steps: string[];
  layers: { layer: string; items: string[] }[];
  note: string; // disclaimer line, e.g. "Illustrative visual. Not a client system screenshot."
};

export const VISUAL_SPECS: Record<VisualVariant, { w: number; h: number; label: string }> = {
  hero: { w: 1920, h: 1080, label: "Hero image (16:9)" },
  banner: { w: 1600, h: 900, label: "16:9 banner" },
  square: { w: 1080, h: 1080, label: "1:1 social image" },
  portrait: { w: 1080, h: 1350, label: "4:5 social image" },
  linkedin: { w: 1200, h: 627, label: "LinkedIn-style image" },
  editorial: { w: 1200, h: 800, label: "Editorial article image (3:2)" },
  infographic: { w: 1080, h: 1920, label: "Project infographic" },
  architecture: { w: 1600, h: 900, label: "Architecture visual" },
};

const F = {
  display: 'DM Serif Display, Georgia, "Times New Roman", serif',
  mono: "IBM Plex Mono, ui-monospace, Menlo, monospace",
  sans: 'Inter, "Helvetica Neue", Arial, sans-serif',
};
const C = {
  midnight: "#08121F",
  navy: "#0C2038",
  steel: "#3E6FA8",
  steelLight: "#8FB0D6",
  gold: "#B8985A",
  goldLight: "#D2B97F",
  paper: "#F6F3EE",
};

/** Deterministic conceptual network (nodes + connectors). Purely decorative — not a real system map. */
function Network({ x, y, w, h, scale = 1 }: { x: number; y: number; w: number; h: number; scale?: number }) {
  const pts = [
    [0.1, 0.2],
    [0.42, 0.08],
    [0.78, 0.22],
    [0.25, 0.52],
    [0.6, 0.48],
    [0.92, 0.6],
    [0.15, 0.86],
    [0.52, 0.82],
    [0.85, 0.92],
  ].map(([px, py]) => [x + px * w, y + py * h] as const);
  const edges = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 5],
    [3, 4],
    [4, 5],
    [3, 6],
    [4, 7],
    [5, 8],
    [6, 7],
    [7, 8],
    [1, 3],
    [4, 8],
  ];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={pts[a][0]}
          y1={pts[a][1]}
          x2={pts[b][0]}
          y2={pts[b][1]}
          stroke={C.steelLight}
          strokeOpacity={0.35}
          strokeWidth={1.4 * scale}
        />
      ))}
      {pts.map(([px, py], i) => (
        <g key={i}>
          <circle
            cx={px}
            cy={py}
            r={(i === 4 ? 16 : 8) * scale}
            fill={i === 4 ? C.midnight : C.navy}
            stroke={i === 4 ? C.gold : C.steelLight}
            strokeWidth={1.6 * scale}
          />
          {i === 4 && <circle cx={px} cy={py} r={5 * scale} fill={C.gold} />}
        </g>
      ))}
    </g>
  );
}

function Backdrop({ w, h, children }: { w: number; h: number; children?: ReactNode }) {
  const id = `g${w}x${h}`;
  const grid: ReactNode[] = [];
  const step = Math.round(Math.max(w, h) / 24);
  for (let gx = 0; gx <= w; gx += step)
    grid.push(<line key={`v${gx}`} x1={gx} y1={0} x2={gx} y2={h} stroke={C.steelLight} strokeOpacity={0.07} />);
  for (let gy = 0; gy <= h; gy += step)
    grid.push(<line key={`h${gy}`} x1={0} y1={gy} x2={w} y2={gy} stroke={C.steelLight} strokeOpacity={0.07} />);
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.navy} />
          <stop offset="1" stopColor={C.midnight} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.8" cy="0.1" r="0.7">
          <stop offset="0" stopColor={C.steel} stopOpacity="0.35" />
          <stop offset="1" stopColor={C.steel} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#${id}-bg)`} />
      <rect width={w} height={h} fill={`url(#${id}-glow)`} />
      {grid}
      {children}
    </>
  );
}

function Brand({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`}>
      <text fontFamily={F.display} fontSize="34" fill="#fff">
        J
        <tspan fill={C.gold} dx="3">
          &amp;
        </tspan>
        <tspan dx="3">J</tspan>
      </text>
      <text x="74" fontFamily={F.mono} fontSize="12" letterSpacing="5" fill="#fff" fillOpacity="0.75">
        CONSULTING
      </text>
    </g>
  );
}

function Lines({
  lines,
  x,
  y,
  size,
  lh = 1.08,
  fill = "#fff",
}: {
  lines: string[];
  x: number;
  y: number;
  size: number;
  lh?: number;
  fill?: string;
}) {
  return (
    <text x={x} y={y} fontFamily={F.display} fontSize={size} fill={fill}>
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : size * lh}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

export function CaseVisual({ variant, data, id }: { variant: VisualVariant; data: VisualData; id?: string }) {
  const { w, h } = VISUAL_SPECS[variant];
  const pad = Math.round(w * 0.065);
  const base = {
    id,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: `0 0 ${w} ${h}`,
    role: "img" as const,
    "aria-label": `${data.titleLines.join(" ")} — ${VISUAL_SPECS[variant].label}`,
    style: { width: "100%", height: "auto", display: "block" },
  };

  if (variant === "architecture") {
    return (
      <svg {...base}>
        <Backdrop w={w} h={h} />
        <text x={pad} y={pad + 8} fontFamily={F.mono} fontSize="16" letterSpacing="4" fill={C.goldLight}>
          CONCEPTUAL ARCHITECTURE
        </text>
        <Lines lines={data.titleLines} x={pad} y={pad + 64} size={44} />
        {data.layers.map((l, i) => {
          const rowH = 100,
            gap = 26,
            top = 250 + i * (rowH + gap);
          return (
            <g key={l.layer}>
              <rect x={pad} y={top} width={w - pad * 2} height={rowH} fill="#fff" fillOpacity="0.04" stroke="#fff" strokeOpacity="0.2" />
              <text x={pad + 28} y={top + rowH / 2 + 6} fontFamily={F.mono} fontSize="16" letterSpacing="3" fill={C.goldLight}>
                {l.layer.toUpperCase()}
              </text>
              {l.items.map((it, k) => {
                const bw = 330,
                  bx = pad + 400 + k * (bw + 24);
                return (
                  <g key={it}>
                    <rect x={bx} y={top + 22} width={bw} height={rowH - 44} fill="none" stroke={C.steelLight} strokeOpacity="0.6" />
                    <text x={bx + bw / 2} y={top + rowH / 2 + 8} textAnchor="middle" fontFamily={F.display} fontSize="24" fill="#fff">
                      {it}
                    </text>
                  </g>
                );
              })}
              {i < data.layers.length - 1 && (
                <line x1={pad + 200} y1={top + rowH} x2={pad + 200} y2={top + rowH + gap} stroke={C.gold} strokeWidth="2" />
              )}
            </g>
          );
        })}
        <text x={pad} y={h - 30} fontFamily={F.mono} fontSize="13" fill="#fff" fillOpacity="0.55">
          {data.note}
        </text>
        <Brand x={w - pad - 200} y={h - 36} size={0.9} />
      </svg>
    );
  }

  if (variant === "infographic") {
    return (
      <svg {...base}>
        <Backdrop w={w} h={h} />
        <text x={pad} y={pad + 20} fontFamily={F.mono} fontSize="22" letterSpacing="5" fill={C.goldLight}>
          {data.eyebrow.toUpperCase()}
        </text>
        <Lines lines={data.titleLines} x={pad} y={pad + 120} size={82} />
        <text x={pad} y={pad + 120 + data.titleLines.length * 90 + 30} fontFamily={F.display} fontSize="40" fill={C.steelLight}>
          {data.subtitle}
        </text>
        <text x={pad} y={480} fontFamily={F.mono} fontSize="22" letterSpacing="3" fill="#fff" fillOpacity="0.8">
          {data.role.toUpperCase()} · {data.period.toUpperCase()}
        </text>
        <line x1={pad} y1={520} x2={w - pad} y2={520} stroke="#fff" strokeOpacity="0.2" />
        {data.steps.map((s, i) => {
          const top = 580 + i * 150;
          return (
            <g key={s}>
              <circle cx={pad + 34} cy={top + 45} r="34" fill="none" stroke={C.gold} strokeWidth="2" />
              <text x={pad + 34} y={top + 54} textAnchor="middle" fontFamily={F.mono} fontSize="24" fill={C.goldLight}>
                {String(i + 1).padStart(2, "0")}
              </text>
              {i < data.steps.length - 1 && (
                <line x1={pad + 34} y1={top + 79} x2={pad + 34} y2={top + 111} stroke={C.gold} strokeOpacity="0.6" strokeWidth="2" />
              )}
              <text x={pad + 110} y={top + 56} fontFamily={F.display} fontSize="52" fill="#fff">
                {s}
              </text>
            </g>
          );
        })}
        <text x={pad} y={h - 110} fontFamily={F.mono} fontSize="16" fill="#fff" fillOpacity="0.55">
          {data.note}
        </text>
        <Brand x={pad} y={h - 50} />
      </svg>
    );
  }

  // Layout family: hero / banner / square / portrait / linkedin / editorial
  const tall = variant === "portrait" || variant === "square";
  const titleSize = { hero: 108, banner: 92, square: 84, portrait: 92, linkedin: 62, editorial: 70 }[variant];
  const netW = tall ? w - pad * 2 : w * 0.42;
  const netH = tall ? h * 0.3 : h * 0.62;
  const netX = tall ? pad : w - pad - netW;
  const netY = tall ? h - pad - netH - 70 : (h - netH) / 2 - 10;
  const titleY = tall ? pad + 160 : h * 0.34;
  const small = variant === "linkedin" ? 14 : 18;

  return (
    <svg {...base}>
      <Backdrop w={w} h={h} />
      <Network x={netX} y={netY} w={netW} h={netH} scale={w / 1200} />
      <text x={pad} y={pad + 10} fontFamily={F.mono} fontSize={small} letterSpacing="4" fill={C.goldLight}>
        {data.eyebrow.toUpperCase()}
      </text>
      <Lines lines={data.titleLines} x={pad} y={titleY} size={titleSize} />
      {data.subtitle && (
        <text
          x={pad}
          y={titleY + data.titleLines.length * titleSize * 1.08 + 16}
          fontFamily={F.display}
          fontSize={titleSize * 0.5}
          fill={C.steelLight}
        >
          {data.subtitle}
        </text>
      )}
      <text x={pad} y={tall ? h * 0.56 : h * 0.72} fontFamily={F.mono} fontSize={small} letterSpacing="3" fill="#fff" fillOpacity="0.85">
        {data.role.toUpperCase()} · {data.period.toUpperCase()}
      </text>
      {variant !== "linkedin" && (
        <text
          x={pad}
          y={(tall ? h * 0.56 : h * 0.72) + small * 2}
          fontFamily={F.mono}
          fontSize={small}
          letterSpacing="3"
          fill={C.goldLight}
        >
          {data.areas.join("  ·  ").toUpperCase()}
        </text>
      )}
      <line x1={pad} y1={h - pad - 34} x2={w - pad} y2={h - pad - 34} stroke="#fff" strokeOpacity="0.18" />
      <text x={pad} y={h - pad} fontFamily={F.mono} fontSize={small - 4} fill="#fff" fillOpacity="0.5">
        {data.note}
      </text>
      <Brand x={w - pad - 190} y={h - pad + 2} size={variant === "linkedin" ? 0.75 : 0.95} />
    </svg>
  );
}
