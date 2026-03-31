"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem("theme");
  return v === "dark" || v === "light" ? v : null;
}

export default function FloatingActionMenu() {
  const [theme, setTheme] = useState<Theme>("light");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const stored = getStoredTheme();
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = initial;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- post-hydration sync only
    setTheme(initial);
  }, []);

  // Listen to scroll for Back to Top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showToast) {
      const t = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showToast]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
    }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <div 
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[90] print:hidden transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-divider)] bg-[var(--color-background)] shadow-sm hover:scale-105 transition-transform"
          style={{ color: "var(--color-text-secondary)", backgroundColor: "var(--color-ivory)" }}
          title="Lên đầu trang"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>

      {/* Expandable Tools Menu (Top Right) */}
      <div className="fixed top-6 right-6 md:top-8 md:right-8 z-[90] flex flex-col items-end gap-3 print:hidden">
        <div className="relative flex flex-col items-end gap-2">
          {/* Main Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 rounded-full shadow-md hover:scale-105 transition-transform z-10"
            style={{ backgroundColor: "var(--color-navy)", color: "var(--color-ivory)" }}
            title="Công cụ bài viết"
          >
            <svg 
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </>
              )}
            </svg>
          </button>

          <div 
            className={`flex flex-col gap-2 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none absolute top-full mt-2 right-0'}`}
          >
            {/* Share */}
            <button
              onClick={handleShare}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-divider)] shadow-sm hover:scale-105 transition-transform"
              style={{ color: "var(--color-text-secondary)", backgroundColor: "var(--color-ivory)" }}
              title="Chia sẻ"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-divider)] shadow-sm hover:scale-105 transition-transform group"
              style={{ color: "var(--color-text-secondary)", backgroundColor: "var(--color-ivory)" }}
              title={theme === "dark" ? "Giao diện sáng" : "Giao diện tối"}
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 hover:rotate-90" style={{ color: "#c9a84c" }}>
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 hover:-rotate-12" style={{ color: "#1b2a4a" }}>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div 
        className={`fixed bottom-20 right-6 md:right-8 z-[100] transition-all duration-500 pointer-events-none ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="bg-[var(--color-navy)] text-[var(--color-ivory)] px-4 py-2 rounded-lg shadow-xl text-xs font-medium flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Đã sao chép liên kết vào khay nhớ tạm!
        </div>
      </div>
    </>
  );
}
