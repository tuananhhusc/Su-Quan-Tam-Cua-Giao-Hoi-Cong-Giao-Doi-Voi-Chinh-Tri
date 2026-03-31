import type { Metadata } from "next";
import Link from "next/link";
import { siteMeta } from "../lib/siteMeta";

export const metadata: Metadata = {
  title: "Miễn trách nhiệm",
  description: `Miễn trách nhiệm và giới hạn sử dụng ${siteMeta.siteName}.`,
};

export default function MienTrachNhiemPage() {
  return (
    <main id="main-content" className="min-h-screen py-16 px-6">
      <article className="prose prose-lg mx-auto max-w-[65ch]">
        <p>
          <Link href="/">← Về báo cáo</Link>
        </p>
        <h1>Miễn trách nhiệm</h1>
        <p>
          Thông tin trên website chỉ nhằm mục đích học thuật và tham khảo chung.
          Người biên soạn cố gắng trích dẫn nguồn rõ ràng, song không đảm bảo tính
          đầy đủ, cập nhật tức thời hay phù hợp với mọi bối cảnh pháp lý hoặc mục
          vụ cụ thể.
        </p>
        <p>
          Người đọc tự chịu trách nhiệm với việc sử dụng nội dung. Khi cần quyết
          định quan trọng, hãy tham vấn chuyên gia hoặc cơ quan có thẩm quyền phù
          hợp.
        </p>
      </article>
    </main>
  );
}
