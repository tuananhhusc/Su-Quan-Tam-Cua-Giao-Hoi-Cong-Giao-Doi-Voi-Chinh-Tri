"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "./SiteAnalytics";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number | null>(null);
  const lastProgress = useRef<number>(-1);
  const firedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current != null) return;
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null;

        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const next =
          totalHeight <= 0 ? 0 : (window.scrollY / totalHeight) * 100;
        const clamped = Math.min(Math.max(next, 0), 100);

        // Avoid re-render spam.
        const rounded = Math.round(clamped);
        if (rounded !== lastProgress.current) {
          lastProgress.current = rounded;
          setProgress(clamped);
        }

        // Basic scroll depth events (best-effort).
        const thresholds = [25, 50, 75, 100];
        for (const t of thresholds) {
          if (rounded >= t && !firedDepths.current.has(t)) {
            firedDepths.current.add(t);
            trackEvent("Scroll Depth", { percent: t });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="reading-progress"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Tiến trình đọc bài"
    />
  );
}
