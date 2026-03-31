import type { Metadata } from "next";
import Link from "next/link";
import { siteMeta } from "../lib/siteMeta";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `Thông tin về ${siteMeta.siteName} và phạm vi sử dụng tài liệu.`,
};

export default function GioiThieuPage() {
  return (
    <main id="main-content" className="min-h-screen py-16 px-6">
      <article className="prose prose-lg mx-auto max-w-[65ch]">
        <p>
          <Link href="/">← Về báo cáo</Link>
        </p>
        <h1>Giới thiệu</h1>
        <p>
          Đây là không gian công bố bản tổng hợp học thuật mang tính giải thích và
          phân tích, nhằm giúp người đọc hiểu rộng hơn về các góc nhìn thần học,
          lịch sử và thực tiễn liên quan đến đề tài được trình bày trong{" "}
          <strong>{siteMeta.shareTitle}</strong>.
        </p>
        <p>
          Nội dung được biên soạn với mục đích tham khảo học thuật; không thay thế
          tư vấn chuyên môn (pháp lý, mục vụ, y tế, v.v.) khi bạn cần quyết định
          cụ thể.
        </p>
      </article>
    </main>
  );
}
