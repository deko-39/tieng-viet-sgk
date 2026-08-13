import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#171717",
        color: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          color: "#d39a7d",
          display: "flex",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: 6,
          textTransform: "uppercase",
        }}
      >
        Thu vien tho van
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          maxWidth: 860,
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.08 }}>
          {siteConfig.name}
        </div>
        <div style={{ color: "#c9c1b7", fontSize: 30, lineHeight: 1.4 }}>
          {siteConfig.description}
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: 18,
        }}
      >
        <div
          style={{
            border: "2px solid #2d2d2d",
            borderRadius: 24,
            display: "flex",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#f8f8f8",
              color: "#171717",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: "26px 20px",
              width: 94,
            }}
          >
            <div
              style={{
                width: 42,
                height: 6,
                borderRadius: 999,
                background: "#171717",
              }}
            />
            <div
              style={{
                width: 54,
                height: 6,
                borderRadius: 999,
                background: "#171717",
              }}
            />
            <div
              style={{
                width: 36,
                height: 6,
                borderRadius: 999,
                background: "#171717",
              }}
            />
          </div>
          <div
            style={{
              alignItems: "center",
              background: "#f2d2c1",
              color: "#171717",
              display: "flex",
              fontSize: 42,
              fontWeight: 700,
              justifyContent: "center",
              width: 52,
            }}
          >
            V
          </div>
        </div>
        <div style={{ color: "#c9c1b7", fontSize: 24 }}>
          Sach giao khoa, tho, doan van va bai doc quen thuoc
        </div>
      </div>
    </div>,
    size,
  );
}
