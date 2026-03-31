"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import PageSearch from "./PageSearch";
import { trackEvent } from "./SiteAnalytics";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastActive = useRef<string>("");
  const returnFocusTo = useRef<HTMLElement | null>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setDrawerOpen(false);
        trackEvent("TOC Click", { id });
      }
    },
    []
  );

  useEffect(() => {
    const sectionIds = items.map((item) => item.id);
    let observer: IntersectionObserver | null = null;
    let idleId: number | null = null;

    const setup = () => {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) =>
              a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1
            );
          if (visible.length === 0) return;

          const next = visible[0].target.id;
          if (next && next !== lastActive.current) {
            lastActive.current = next;
            setActiveId(next);
          }
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
      );

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });
    };

    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 1023px)").matches;

    if (isMobile && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => setup(), { timeout: 1200 });
    } else {
      setup();
    }

    return () => {
      if (idleId != null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      observer?.disconnect();
    };
  }, [items]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
      returnFocusTo.current =
        (document.activeElement as HTMLElement | null) ||
        document.getElementById("toc-mobile-toggle");
      // Focus the first link in the drawer for accessibility.
      window.setTimeout(() => {
        const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>(
          'a[href^="#"]'
        );
        firstLink?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
      returnFocusTo.current?.focus?.();
      returnFocusTo.current = null;
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setDrawerOpen(false);
        return;
      }

      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      const active = document.activeElement as HTMLElement | null;
      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  const tocList = (
    <nav aria-label="Mục lục bài viết">
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`toc-link ${activeId === item.id ? "active" : ""} ${
                item.level === 3 ? "pl-6 text-[0.78rem]" : ""
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile TOC Button */}
      <button
        id="toc-mobile-toggle"
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-6 left-6 z-30 lg:hidden w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #800020, #5c0017)",
          color: "#faf9f6",
        }}
        aria-label="Mở mục lục"
        aria-haspopup="dialog"
        aria-expanded={drawerOpen}
        aria-controls="toc-drawer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="15" y2="12" />
          <line x1="3" y1="18" x2="9" y2="18" />
        </svg>
      </button>

      {/* Mobile Drawer Overlay */}
      <div
        className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />

      {/* Mobile Drawer Panel */}
      <div
        id="toc-drawer"
        ref={panelRef}
        className={`drawer-panel ${drawerOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mục lục"
        tabIndex={-1}
      >
        <div className="p-5 border-b" style={{ borderColor: "#d4c9b8" }}>
          <div className="flex items-center justify-between">
            <h3
              className="text-sm font-semibold tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                color: "#800020",
              }}
            >
              Mục Lục
            </h3>
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Đóng mục lục"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-4 pb-3 print:hidden border-b" style={{ borderColor: "#d4c9b8" }}>
          <PageSearch />
        </div>
        <div className="p-4">{tocList}</div>
      </div>

      {/* Desktop Sidebar */}
      <aside
        id="toc-sidebar"
        className="hidden lg:block w-72 xl:w-80 shrink-0"
      >
        <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto pr-2">
          <div className="mb-6 print:hidden">
            <PageSearch />
          </div>
          <div className="mb-4">
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                color: "#800020",
              }}
            >
              ✦ Mục Lục
            </h3>
            <div
              className="w-12 h-0.5 mb-4"
              style={{
                background:
                  "linear-gradient(to right, #800020, #c9a84c, transparent)",
              }}
            />
          </div>
          {tocList}
        </div>
      </aside>
    </>
  );
}
