"use client";

import { useEffect } from "react";

export default function SentryInit() {
  useEffect(() => {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (!dsn) return;

    let cancelled = false;
    void import("@sentry/browser").then((Sentry) => {
      if (cancelled) return;
      Sentry.init({
        dsn,
        tracesSampleRate: 0.1,
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
