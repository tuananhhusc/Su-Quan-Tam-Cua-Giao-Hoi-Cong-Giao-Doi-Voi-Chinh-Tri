import { ImageResponse } from "next/og";

export const alt = "Báo cáo nghiên cứu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const title = "Tại Sao Giáo Hội Công Giáo\nQuan Tâm Nhiều Đến Chính Trị?";
  const subtitle = "Báo Cáo Nghiên Cứu Chuyên Sâu";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f6",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#800020",
              opacity: 0.9,
            }}
          >
            {subtitle}
          </div>

          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#1b2a4a",
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </div>

          <div
            style={{
              height: 6,
              width: 280,
              background:
                "linear-gradient(90deg, #c9a84c, #800020, #c9a84c)",
              borderRadius: 999,
              marginTop: 8,
            }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, color: "#5a524a" }}>
            Thần học · Chính trị · Ngoại giao
          </div>
          <div style={{ fontSize: 22, color: "#5a524a" }}>vi-VN</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

