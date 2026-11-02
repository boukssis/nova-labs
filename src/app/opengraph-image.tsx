import { ImageResponse } from "next/og";

export const alt = "Nova Labs. Your idea. Built properly.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070708",
          color: "#F7F6F2",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 32, letterSpacing: -1 }}>
          <span>Nova Labs</span>
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              background: "#FF4D1A",
              marginLeft: 14,
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#9D9CA5" }}>
            TECHNICAL AI PARTNER FOR FOUNDERS
          </div>
          <div style={{ fontSize: 84, lineHeight: 0.92, letterSpacing: -3, marginTop: 24 }}>
            Your idea.
          </div>
          <div style={{ fontSize: 84, lineHeight: 0.92, letterSpacing: -3 }}>
            Built properly.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#9D9CA5",
          }}
        >
          <span>Idea → Strategy → Build → Launch</span>
          <span>Manchester, UK</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
