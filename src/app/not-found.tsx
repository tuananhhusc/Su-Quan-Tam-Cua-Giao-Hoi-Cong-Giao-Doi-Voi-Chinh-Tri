import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(128,0,32,0.12), rgba(201,168,76,0.18))",
            border: "1px solid rgba(212,201,184,0.9)",
          }}
        >
          <span style={{ fontSize: 22, color: "#800020" }}>404</span>
        </div>
        <h1
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#1b2a4a" }}
        >
          Không tìm thấy trang
        </h1>
        <p className="text-sm md:text-base mb-6" style={{ color: "#5a524a" }}>
          Đường dẫn bạn truy cập không tồn tại hoặc đã được thay đổi.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, #800020, #5c0017)",
            color: "#faf9f6",
          }}
        >
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}

