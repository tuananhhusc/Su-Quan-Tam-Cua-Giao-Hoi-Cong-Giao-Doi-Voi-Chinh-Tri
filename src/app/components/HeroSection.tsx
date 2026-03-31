import { siteMeta } from "../lib/siteMeta";

export default function HeroSection() {
  return (
    <header className="relative py-16 md:py-24 lg:py-32 text-center overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800020' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Cross Ornament */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="14" y="2" width="4" height="28" rx="1" fill="#c9a84c" />
            <rect x="6" y="10" width="20" height="4" rx="1" fill="#c9a84c" />
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up"
          style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            color: "#800020",
            animationDelay: "0.1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Báo Cáo Nghiên Cứu Chuyên Sâu
        </p>

        {/* Main Title */}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.4rem] leading-tight md:leading-tight lg:leading-tight font-bold mb-8 animate-fade-in-up"
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            color: "#1b2a4a",
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Nguyên Nhân Sâu Xa và Thực Tiễn
          <br className="hidden md:block" />
          <span style={{ color: "#800020" }}>
            {" "}
            Về Sự Quan Tâm Của Giáo Hội Công Giáo
          </span>
          <br />
          Đối Với Chính Trị
        </h1>

        {/* Ornament Divider */}
        <div
          className="ornament-divider animate-fade-in-up"
          style={{
            animationDelay: "0.3s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span style={{ color: "#c9a84c", fontSize: "1.2rem" }}>✦</span>
        </div>

        {/* Meta Info */}
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs animate-fade-in-up"
          style={{
            fontFamily: "var(--font-sans), system-ui, sans-serif",
            color: "#8a8078",
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            Nghiên cứu tổng hợp
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            ~{siteMeta.readingMinutes} phút đọc
          </span>
          <span>·</span>
          <span>Thần học · Chính trị · Ngoại giao</span>
        </div>
      </div>

      {/* Bottom border gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #c9a84c, #800020, #c9a84c, transparent)",
        }}
      />
    </header>
  );
}
