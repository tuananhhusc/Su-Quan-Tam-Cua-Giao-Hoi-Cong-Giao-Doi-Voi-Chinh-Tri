"use client";

import Script from "next/script";

type AnalyticsProps = Record<string, unknown>;

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: AnalyticsProps }
    ) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function PlausibleScript() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      strategy="afterInteractive"
      data-domain={domain}
      src="https://plausible.io/js/script.js"
    />
  );
}

function GaScript() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });
`,
        }}
      />
    </>
  );
}

export function trackEvent(event: string, props?: AnalyticsProps) {
  try {
    if (typeof window === "undefined") return;
    window.plausible?.(event, props ? { props } : undefined);
    window.gtag?.("event", event, props || {});
  } catch {
    // best-effort analytics; never break UX
  }
}

export function SiteAnalytics() {
  return (
    <>
      <PlausibleScript />
      <GaScript />
    </>
  );
}

