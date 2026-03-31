import { getSiteUrl } from "../lib/site";
import { siteMeta } from "../lib/siteMeta";

export default function CitationBlock() {
  const url = `${getSiteUrl()}/`;
  const year = new Date(siteMeta.publishedTime).getFullYear();

  const apa = `${siteMeta.authorName}. (${year}). ${siteMeta.shareTitle}. ${siteMeta.siteName}. ${url}`;

  const chicago = `"${siteMeta.shareTitle}," ${siteMeta.siteName}, truy cập ${url}, ngày ${new Intl.DateTimeFormat("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(siteMeta.modifiedTime))}.`;

  return (
    <section
      className="not-prose rounded-xl border p-5 mb-10"
      style={{
        borderColor: "var(--color-divider)",
        backgroundColor: "rgba(27, 42, 74, 0.04)",
      }}
      aria-labelledby="citation-heading"
    >
      <h2
        id="citation-heading"
        className="text-sm font-semibold tracking-widest uppercase m-0 mb-3"
        style={{
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          color: "var(--color-navy)",
        }}
      >
        Trích dẫn gợi ý
      </h2>
      <p className="text-xs m-0 mb-3" style={{ color: "var(--color-text-muted)" }}>
        Điều chỉnh theo hướng dẫn trích dẫn của cơ sở bạn. Dưới đây là mẫu tham khảo.
      </p>
      <div className="space-y-4 text-sm" style={{ color: "var(--color-text-secondary)" }}>
        <div>
          <p className="font-semibold text-[var(--color-text-primary)] m-0 mb-1">
            APA (tham khảo)
          </p>
          <p className="m-0 whitespace-pre-wrap">{apa}</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text-primary)] m-0 mb-1">
            Chicago (tham khảo)
          </p>
          <p className="m-0">{chicago}</p>
        </div>
      </div>
    </section>
  );
}
