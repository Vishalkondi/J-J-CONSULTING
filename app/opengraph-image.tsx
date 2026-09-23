import { ImageResponse } from "next/og";

export const alt = "J & J Consulting — Technology. Transformation. Talent.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 80,
        background: "linear-gradient(180deg,#0C2038,#08121F)",
        color: "#fff",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 150, lineHeight: 1 }}>
        J<span style={{ color: "#B8985A", margin: "0 14px" }}>&amp;</span>J
      </div>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 12, marginTop: 18, color: "#cdd6e2" }}>CONSULTING</div>
      <div style={{ display: "flex", fontSize: 44, marginTop: 40, color: "#D2B97F" }}>Technology. Transformation. Talent.</div>
    </div>,
    size,
  );
}
