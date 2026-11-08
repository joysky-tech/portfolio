import { ImageResponse } from "next/og";

export const alt = "JoySky – Turning Ideas Into Digital Solutions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "linear-gradient(135deg,#0B1020 0%,#121A33 60%,#2A2170 100%)", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 20, background: "linear-gradient(135deg,#2F6BFF,#7C5CFF)", display: "flex" }} />
          <div style={{ fontSize: 64, fontWeight: 700, display: "flex" }}>JoySky</div>
        </div>
        <div style={{ marginTop: 40, fontSize: 68, fontWeight: 700, lineHeight: 1.1, display: "flex" }}>Turning Ideas Into Digital Solutions.</div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#B6C2E2", display: "flex" }}>Websites · Web apps · Automation · AI</div>
      </div>
    ),
    size
  );
}
