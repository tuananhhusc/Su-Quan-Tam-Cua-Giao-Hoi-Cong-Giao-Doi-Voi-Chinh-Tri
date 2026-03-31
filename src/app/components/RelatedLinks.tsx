const links: { id: string; label: string }[] = [
  { id: "phan-mo-dau", label: "Mở đầu" },
  { id: "nen-tang-than-hoc", label: "Thần học & giáo lý" },
  { id: "cau-truc-ngoai-giao", label: "Ngoại giao Tòa Thánh" },
  { id: "su-gia-hoa-binh", label: "Hòa bình & trung gian" },
  { id: "doi-dau-chuyen-hoa", label: "Đối đầu & chuyển hóa" },
  { id: "ket-luan", label: "Kết luận" },
  { id: "nguon-trich-dan", label: "Nguồn trích dẫn" },
];

export default function RelatedLinks() {
  return (
    <nav
      aria-label="Điều hướng nhanh trong bài"
      className="not-prose rounded-xl border p-4 mb-10"
      style={{
        borderColor: "var(--color-divider)",
        backgroundColor: "rgba(212, 201, 184, 0.12)",
      }}
    >
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-3"
        style={{
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          color: "var(--color-burgundy)",
        }}
      >
        Liên kết nội bộ
      </p>
      <ul className="flex flex-wrap gap-2 m-0 p-0 list-none">
        {links.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="inline-block text-sm px-3 py-1.5 rounded-full border transition-colors"
              style={{
                borderColor: "var(--color-divider)",
                color: "var(--color-navy)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
