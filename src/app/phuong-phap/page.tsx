import type { Metadata } from "next";
import Link from "next/link";
import { siteMeta } from "../lib/siteMeta";

export const metadata: Metadata = {
  title: "Phương pháp",
  description: `Phương pháp biên soạn và cập nhật ${siteMeta.siteName}.`,
};

export default function PhuongPhapPage() {
  return (
    <main id="main-content" className="min-h-screen py-16 px-6">
      <article className="prose prose-lg mx-auto max-w-[65ch]">
        <p>
          <Link href="/">← Về báo cáo</Link>
        </p>
        <h1>Phương pháp</h1>
        <p>
          Bản báo cáo tổng hợp các nguồn công khai (văn bản giáo hội, học thuật,
          báo chí và tài liệu tham khảo được liệt kê ở phần cuối bài). Các mốc
          thời gian và phiên bản được ghi nhận trong metadata trang (Open Graph,
          JSON-LD) để hỗ trợ trích dẫn và theo dõi cập nhật.
        </p>
        <p>
          Khi có chỉnh sửa nội dung, hãy cập nhật{" "}
          <code>siteMeta.modifiedTime</code> và (nếu cần) số từ ước lượng để
          điều chỉnh thời gian đọc.
        </p>
      </article>
    </main>
  );
}
