import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import "./globals.css";
import { SiteAnalytics } from "./components/SiteAnalytics";
import SentryInit from "./components/SentryInit";
import FloatingActionMenu from "./components/FloatingActionMenu";
import { getSiteUrl } from "./lib/site";
import { siteMeta } from "./lib/siteMeta";

const notoSerif = Noto_Serif({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: siteMeta.title,
  description: siteMeta.description,
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
    },
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  keywords: [...siteMeta.keywords],
  authors: [{ name: siteMeta.authorName }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  manifest: "/manifest.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: siteMeta.shareTitle,
    description: siteMeta.shortDescription,
    images: ["/twitter-image"],
  },
  openGraph: {
    title: siteMeta.shareTitle,
    description: siteMeta.shortDescription,
    url: "/",
    siteName: siteMeta.siteName,
    type: "article",
    locale: "vi_VN",
    publishedTime: siteMeta.publishedTime,
    modifiedTime: siteMeta.modifiedTime,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${notoSerif.variable} ${notoSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <a href="#main-content" className="skip-link">
          Bỏ qua đến nội dung
        </a>
        <SiteAnalytics />
        <SentryInit />
        <FloatingActionMenu />
        {children}
      </body>
    </html>
  );
}
