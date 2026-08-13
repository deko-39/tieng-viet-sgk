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
        background:
          "linear-gradient(135deg, #f5f1e8 0%, #ebe3d4 54%, #d8ccb7 100%)",
        color: "#171717",
        display: "flex",
        height: "100%",
        padding: "48px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 28,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 700,
              paddingTop: 12,
              width: "100%",
            }}
          >
            <div
              style={{
                alignItems: "center",
                alignSelf: "flex-start",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(154, 91, 67, 0.18)",
                borderRadius: 999,
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 4,
                padding: "12px 18px",
                textTransform: "uppercase",
                color: "#9a5b43",
              }}
            >
              Thu vien tho van SGK
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  fontSize: 72,
                  lineHeight: 1.04,
                  fontWeight: 700,
                  color: "#171717",
                }}
              >
                Thu vien tho van Viet Nam cho nhung trang doc dau doi.
              </div>
              <div
                style={{
                  color: "#5f5f5f",
                  fontSize: 29,
                  lineHeight: 1.38,
                  maxWidth: 650,
                }}
              >
                {siteConfig.description}
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                gap: 16,
                paddingTop: 10,
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  background: "#5e7152",
                  borderRadius: 999,
                  color: "#f5f1e8",
                  display: "flex",
                  fontSize: 22,
                  fontWeight: 700,
                  padding: "16px 28px",
                }}
              >
                Bat dau doc
              </div>
              <div
                style={{
                  alignItems: "center",
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(94, 113, 82, 0.16)",
                  borderRadius: 999,
                  color: "#171717",
                  display: "flex",
                  fontSize: 20,
                  padding: "15px 24px",
                }}
              >
                Doc theo sach, tho va doan van
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(154, 91, 67, 0.14)",
            borderRadius: 30,
            boxShadow: "0 20px 40px rgba(44, 36, 24, 0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            padding: "28px",
            width: 360,
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#fffaf3",
              border: "1px solid rgba(154, 91, 67, 0.12)",
              borderRadius: 999,
              color: "#9a5b43",
              display: "flex",
              fontSize: 18,
              fontWeight: 700,
              height: 52,
              justifyContent: "center",
              width: 52,
            }}
          >
            TV
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                color: "#9a5b43",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Mo thu vien
            </div>
            <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.16 }}>
              Hinh anh chia se nay lay tu giao dien trang chu
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Chon bai doc theo tung tap sach giao khoa.",
              "Xem hinh minh hoa va mo rong noi dung khi can.",
              "Di chuyen lien mach giua tho va doan van quen thuoc.",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(245, 241, 232, 0.9)",
                  border: "1px solid rgba(94, 113, 82, 0.12)",
                  borderRadius: 18,
                  color: "#5f5f5f",
                  display: "flex",
                  fontSize: 18,
                  lineHeight: 1.4,
                  padding: "14px 16px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
