import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      className="border-t py-8 text-center text-sm"
      style={{ borderColor: "var(--color-divider)", color: "var(--color-text-muted)" }}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <rect x="14" y="2" width="4" height="28" rx="1" fill="var(--color-gold-muted)" />
          <rect x="6" y="10" width="20" height="4" rx="1" fill="var(--color-gold-muted)" />
        </svg>
        <nav
          className="flex flex-wrap items-center justify-center gap-3 text-xs"
          aria-label="Thông tin phụ trợ"
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        >
          <Link href="/gioi-thieu" className="underline-offset-2 hover:underline">
            Giới thiệu
          </Link>
          <span aria-hidden>·</span>
          <Link href="/phuong-phap" className="underline-offset-2 hover:underline">
            Phương pháp
          </Link>
          <span aria-hidden>·</span>
          <Link href="/mien-trach-nhiem" className="underline-offset-2 hover:underline">
            Miễn trách nhiệm
          </Link>
        </nav>
        <p className="m-0">
          © {new Date().getFullYear()} Báo Cáo Nghiên Cứu. Tài liệu đọc nhằm mục đích học thuật.
        </p>
      </div>
    </footer>
  );
}
