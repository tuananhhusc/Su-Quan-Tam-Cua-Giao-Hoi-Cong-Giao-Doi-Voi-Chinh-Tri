"use client";

import { useEffect, useState } from "react";

export default function ArticleEnhancements() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeFootnote, setActiveFootnote] = useState<{ x: number; y: number; content: string } | null>(null);

  useEffect(() => {
    // === 1. Lightbox for Images ===
    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "img") {
        const src = (target as HTMLImageElement).src;
        if (src) setLightboxImage(src);
      }
    };

    // === 2. Footnote Popovers ===
    let tooltipTimeout: NodeJS.Timeout;
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "a" && target.parentElement?.tagName.toLowerCase() === "sup") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          const footnoteId = href.replace(/^(#user-content-|#)/, "");
          // Try to find the footnote content
          const footnoteEl = document.getElementById(footnoteId) || document.getElementById(`user-content-${footnoteId}`);
          
          if (footnoteEl) {
            clearTimeout(tooltipTimeout);
            const rect = target.getBoundingClientRect();
            // Clone the content and remove the "backlink" arrow
            const clone = footnoteEl.cloneNode(true) as HTMLElement;
            const backlink = clone.querySelector(".data-footnote-backref");
            if (backlink) backlink.remove();
            
            setActiveFootnote({
              x: rect.left,
              y: rect.bottom, // Use rect.bottom directly for fixed positioning
              content: clone.innerHTML
            });
          }
        }
      } else {
        tooltipTimeout = setTimeout(() => setActiveFootnote(null), 300);
      }
    };

    const article = document.querySelector("article");
    if (article) {
      article.addEventListener("click", handleImageClick);
      article.addEventListener("mouseover", handleMouseOver);
    }

    // === 3. Smooth Scroll Animation Observer ===
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-4");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const paragraphs = document.querySelectorAll(".prose p, .prose h2, .prose h3, .prose ul, .prose ol");
    paragraphs.forEach((p) => {
      p.classList.add("transition-all", "duration-700", "ease-out", "opacity-0", "translate-y-4");
      observer.observe(p);
    });

    return () => {
      if (article) {
        article.removeEventListener("click", handleImageClick);
        article.removeEventListener("mouseover", handleMouseOver);
      }
      observer.disconnect();
      clearTimeout(tooltipTimeout);
    };
  }, []);

  return (
    <>
      {/* Footnote Tooltip */}
      {activeFootnote && (
        <div 
          className="fixed z-[100] max-w-sm p-5 text-sm bg-[#fdfaf3] dark:bg-[#1a1720] border-2 border-[var(--color-burgundy)]/20 rounded-sm shadow-2xl shadow-black/20 animate-in fade-in zoom-in-95 duration-200"
          style={{ 
            left: Math.min(activeFootnote.x, typeof window !== 'undefined' ? window.innerWidth - 380 : activeFootnote.x), 
            top: activeFootnote.y + 15,
            color: "var(--color-text-primary)",
            fontFamily: "var(--font-serif), serif",
            lineHeight: "1.6"
          }}
          onMouseEnter={() => setActiveFootnote((prev) => prev)}
          onMouseLeave={() => setActiveFootnote(null)}
        >
          <div className="absolute top-0 left-4 -translate-y-full w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-bottom-[10px] border-b-[#fdfaf3] dark:border-b-[#1a1720]"></div>
          <div className="text-[var(--color-burgundy)] font-bold text-xs uppercase tracking-widest mb-2 pb-1 border-b border-[var(--color-divider)]">Chú thích nguồn gốc</div>
          <div 
            dangerouslySetInnerHTML={{ __html: activeFootnote.content }} 
            className="[&_a]:text-[var(--color-burgundy)] [&_a]:underline [&_a]:underline-offset-4"
          />
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <img 
            src={lightboxImage} 
            alt="Phóng to" 
            className="max-h-[90vh] max-w-full object-contain rounded-md shadow-2xl"
          />
          <button 
            className="absolute top-6 right-6 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      )}
    </>
  );
}
