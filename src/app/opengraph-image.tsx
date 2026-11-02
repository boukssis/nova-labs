import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Nova Labs. Your idea. Built properly.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/images/nova-labs-logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07111F",
          color: "#F7FAFF",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={48} height={48} style={{ borderRadius: 8 }} alt="" />
          <span style={{ fontSize: 32, letterSpacing: -1 }}>Nova Labs</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#9EADBF" }}>
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
            color: "#9EADBF",
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
