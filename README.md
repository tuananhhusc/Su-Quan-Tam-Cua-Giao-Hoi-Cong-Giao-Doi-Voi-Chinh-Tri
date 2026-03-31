# Giáo Hội Công Giáo Và Chính Trị: Nguyên Nhân Sâu Xa & Thực Tiễn

> **Một dạng thức Tạp chí Nghiên cứu Kỹ thuật số (Digital Academic Journal) được thiết kế chuyên biệt cho các bài báo cáo, phân tích dài, đòi hỏi sự tập trung cao độ.**

Dự án này là một ứng dụng web tĩnh (Static Web Application) phát triển bằng Next.js, trình bày bản báo cáo nghiên cứu chuyên sâu về nguyên nhân và sự can dự của Giáo hội Công giáo vào trật tự chính trị trần thế. Giao diện được lấy cảm hứng từ các tạp chí thần học hàn lâm phương Tây, mang lại trải nghiệm đọc tối ưu, chuyên nghiệp và sang trọng trên mọi thiết bị.

---

## ✨ Tính Năng Nổi Bật

- **Giao Diện Bản Thảo Học Thuật (Scholarly Aesthetic)**: Sử dụng các tone màu sắc mang hơi thở truyền thống như *Ivory* (Trắng ngà), *Parchment* (Màu giấy da cổ) và *Burgundy* (Đỏ đô), phối hợp cùng bộ font Serif truyền thống dành riêng cho thiết kế xuất bản.
- **Trải Nghiệm Đọc Chuyên Sâu (Deep-Reading Experience)**:
  - **Chế độ Ban đêm (Dark Mode)**: Giao diện nền tối đảo ngược tương phản màu, hỗ trợ chống mỏi mắt cho các khung giờ đọc đêm.
  - **Mục Lục Cố Định & Cuộn Bám Đuổi (Scroll-spy TOC)**: Thanh điều hướng bên (Sidebar) tự động tô sáng tiến trình đoạn văn tương ứng với vị trí hiển thị trên màn hình.
  - **Thanh Tiến Trình (Reading Progress Bar)**: Hiển thị trực quan tại viền trên màn hình giúp người đọc nắm được tỉ lệ nội dung đã duyệt.
- **Công Cụ Tìm Kiếm Toàn Văn Bản (Full-text Search)**: Tích hợp thanh tìm kiếm thông minh phía Client. Chức năng hỗ trợ trả về **trích đoạn (snippet)** chứa từ khóa, highlight từ khóa và tự động cuộn trang (scroll) tới đúng đoạn văn cần tra cứu.
- **Hệ Thống Chú Thích Tương Tác Cải Tiến (Interactive Footnotes)**:
  - Các chỉ số đánh số trích dẫn trong bài hỗ trợ thao tác hover (di chuột) để bật **Tooltip nổi** đọc ngay lập tức mà không cần kéo xuống cuối cùng.
  - Hỗ trợ ký hiệu **`↩` (Backlink)** cho phép cuộn ngược giao diện trở lại đúng đoạn văn chứa trích dẫn sau khi tham khảo danh mục tài liệu.
- **Tối Ưu Hóa SEO & Hiệu Suất Tối Đa**:
  - Sitemap và Robots Generator tĩnh.
  - Tích hợp **JSON-LD Schema** định dạng Article cho Google Search.
  - Generative **Open Graph Image** giúp tự động sinh ranh ảnh bìa chia sẻ bài qua Facebook, LinkedIn...
- **Thiết Kế Đa Nền Tảng (Mobile First & Accessible)**: Sử dụng Navigation Drawer (Ngăn Kéo Mục Lục) thân thiện với thao tác chạm cảm ứng ở độ phân giải nhỏ, hạn chế mọi xung đột giao diện.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

Dự án là sản phẩm tinh gọn tối đa hóa tài nguyên tĩnh, không đòi hỏi bảo trì cơ sở dữ liệu (No DB, No specific backend):

- **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Frontend/UI Library**: [React 19](https://react.dev/)
- **CSS Architecture**: [Tailwind CSS v4](https://tailwindcss.com/) tích hợp plugin `@tailwindcss/typography` (`prose`).
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/) đảm bảo strict mode type-safety.
- **Analytics / Tracking**: Tích hợp hỗ trợ nền tảng của [Sentry](https://sentry.io/).

---

## 📂 Tổ Chức Thư Mục (Folder Structure)

```text
src/
├── app/
│   ├── components/       # Component UI (TOC, FloatingMenu, Footnotes, Mobile Drawer, Search...)
│   ├── data/             # Kho dữ liệu tìm kiếm (searchData.ts chứa mảng index full-text)
│   ├── lib/              # Tiện ích URL và Khai báo Metadata tổng (siteMeta.ts)
│   ├── sections/         # Nội dung bài nghiên cứu (Được chia nhỏ theo từng chương lý thuyết)
│   ├── globals.css       # File cấu hình CSS, Animations, Theme Tokens (Light/Dark Variables)
│   ├── layout.tsx        # Base Root HTML layout, import fonts toàn cục
│   ├── page.tsx          # Ghép nối các sections hình thành nên Application chính
│   ├── opengraph-image.tsx # Template ảnh OG động khi chia sẻ link
│   ├── sitemap.ts        # Sitemap.xml Generator
│   └── robots.ts         # Robots.txt Generator
```

---

## 🚀 Hướng Dẫn Cài Đặt (Getting Started)

### 1. Yêu Cầu Hệ Thống Khởi Chạy
- **Node.js**: Phiên bản LTS (`>= 20.0.0`)
- **Trình Quản Lý Gói**: Khuyên dùng `npm` hoặc `yarn`, `pnpm`.

### 2. Khởi Tạo Vùng Làm Việc (Installation)
Tiến hành cài đặt thư viện được cấu hình sẵn trong `package.json`:

```bash
npm install
# hoặc yarn install / pnpm install
```

### 3. Chạy Môi Trường Phát Triển (Development)
Chạy server local để preview kết quả chỉnh sửa theo thời gian thực (Hot Reloading):

```bash
npm run dev
```

Mở trình duyệt truy cập `http://localhost:3000`. 

---

## 🚢 Triển Khai Lên Máy Chủ (Publishing)

Dự án được tối ưu rất tốt cho kiến trúc hạ tầng **Static Export** hoặc **Edge Rendering**. Bạn không cần thuê một máy chủ ảo đắt đỏ để duy trì. Nó có thể được lưu trữ và Host miễn phí qua các dịch vụ như GitHub Pages, Vercel, Cloudflare, hay Firebase Hosting.

### Build ra File Tĩnh (HTML/CSS/JS tĩnh)
```bash
# Build hệ thống, tạo index và lint checking tổng quan
npm run build
```

Nếu cấu hình `output: 'export'` trong file `next.config.mjs`, hệ thống sẽ generate ra folder `out/`. Bạn lấy toàn bộ nội dung trong `out/` upload lên File Manager bất kỳ phục vụ HTTP (như Nginx, Apache, Github Repository) là có thể chạy bình thường.

---

## ⚖️ Bản Quyền & Tuyên Bố Từ Chối Trách Nhiệm

- Văn bản nghiên cứu, luận điểm phân tích và tài liệu dịch thuộc tính bản quyền (nếu có) của tác giả hoặc đơn vị xuất bản giáo lý tương ứng học được trích nguồn tại cuối bài.
- Cấu trúc hệ thống Mã Nguồn/Giao diện (Codebase / Web Interface Design) trong bộ mã này được làm ra dưới giấy phép học thuật phi lợi nhuận mã nguồn mở nhằm đóng góp cho việc lưu trữ, số hóa tư liệu tôn giáo.
- Có thể biên tập lại tùy chỉnh nội dung phần `siteMeta.ts` để tối ưu SEO theo từng ngữ cảnh xuất bản cá nhân.

---
**Build with precision and semantic respect.**
