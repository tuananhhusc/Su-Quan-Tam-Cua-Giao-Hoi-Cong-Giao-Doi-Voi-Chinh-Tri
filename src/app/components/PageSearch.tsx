"use client";

import { useMemo, useState } from "react";
import { searchIndex, SearchChunk } from "../data/searchData";

export default function PageSearch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s || s.length < 2) return [];

    const results: (SearchChunk & { snippet: string })[] = [];
    
    searchIndex.forEach(item => {
      const contentLower = item.content.toLowerCase();
      const sectionLower = item.section.toLowerCase();
      
      if (contentLower.includes(s) || sectionLower.includes(s)) {
        // Extract snippet
        let snippet = "";
        const index = contentLower.indexOf(s);
        if (index !== -1) {
          const start = Math.max(0, index - 40);
          const end = Math.min(item.content.length, index + s.length + 80);
          snippet = (start > 0 ? "..." : "") + item.content.substring(start, end).trim() + (end < item.content.length ? "..." : "");
        } else {
          snippet = item.content.substring(0, 120) + "...";
        }
        
        results.push({ ...item, snippet });
      }
    });

    return results;
  }, [q]);

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? 
            <mark key={i} className="bg-[var(--color-gold-muted)] text-[var(--color-navy)] px-0.5 rounded-sm">{part}</mark> : 
            part
        )}
      </span>
    );
  };

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
    setQ("");
  };

  return (
    <div
      className="not-prose mb-8"
      style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
    >
      <label className="block text-xs font-semibold tracking-widest uppercase mb-2 text-[var(--color-burgundy)]">
        Tìm kiếm toàn diện
      </label>
      <div className="relative">
        <div className="relative flex items-center">
          <input
            id="page-search-input"
            type="search"
            autoComplete="off"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Tìm ý tưởng, từ khóa trong bài…"
            className="w-full rounded-lg border px-3 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-[var(--color-burgundy)]/20 transition-all"
            style={{
              borderColor: "var(--color-divider)",
              backgroundColor: "var(--color-ivory)",
              color: "var(--color-text-primary)",
            }}
          />
          <div className="absolute left-3 text-[var(--color-text-secondary)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </div>

        {open && q.trim().length >= 2 && (
          <div 
            className="absolute z-50 mt-2 max-h-[400px] w-full overflow-auto rounded-xl border border-[var(--color-divider)] bg-[var(--color-ivory)] shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseDown={(e) => e.preventDefault()}
          >
            {filtered.length > 0 ? (
              <ul className="m-0 p-0 list-none flex flex-col gap-1">
                {filtered.map((item, idx) => (
                  <li key={`${item.id}-${idx}`}>
                    <button
                      onClick={() => go(item.id)}
                      className="w-full text-left p-3 rounded-lg hover:bg-[var(--color-burgundy)]/5 transition-colors group border border-transparent hover:border-[var(--color-divider)]"
                    >
                      <div className="text-xs font-bold text-[var(--color-burgundy)] uppercase tracking-wider mb-1 flex items-center justify-between">
                        {item.section}
                        <svg className="opacity-0 group-hover:opacity-100 transition-opacity" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                      <div className="text-sm text-[var(--color-text-primary)] leading-relaxed italic opacity-80">
                        {highlightText(item.snippet, q)}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center text-[var(--color-text-secondary)] text-sm italic">
                Không tìm thấy kết quả nào khớp với &quot;{q}&quot;
              </div>
            )}
          </div>
        )}
        
        {open && (
          <div 
            className="fixed inset-0 z-40 bg-transparent" 
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
