import { ImageResponse } from "next/og";

export const alt = "Báo cáo nghiên cứu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const title = "Tại Sao Giáo Hội Công Giáo\nQuan Tâm Nhiều Đến Chính Trị?";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 20% 20%, rgba(201,168,76,0.22), transparent 50%), radial-gradient(circle at 80% 10%, rgba(128,0,32,0.18), transparent 55%), #faf9f6",
          padding: 84,
        }}
      >
        <div
          style={{
            fontSize: 70,
            lineHeight: 1.05,
            fontWeight: 800,
            color: "#1b2a4a",
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#800020",
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          Báo Cáo Nghiên Cứu
        </div>
      </div>
    ),
    { ...size }
  );
}

