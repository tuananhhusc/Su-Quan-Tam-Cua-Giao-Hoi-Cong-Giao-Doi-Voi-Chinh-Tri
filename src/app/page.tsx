import ReadingProgress from "./components/ReadingProgress";
import TableOfContents from "./components/TableOfContents";
import HeroSection from "./components/HeroSection";
import SiteFooter from "./components/SiteFooter";
import RelatedLinks from "./components/RelatedLinks";
import ArticleEnhancements from "./components/ArticleEnhancements";
import { tocItems } from "./data/tocData";
import { getSiteUrl } from "./lib/site";
import { siteMeta } from "./lib/siteMeta";
import ReportBody from "@/content/report";

export default function Home() {
  const siteUrl = getSiteUrl();
  const title = siteMeta.title;
  const description = siteMeta.description;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        inLanguage: "vi-VN",
        datePublished: siteMeta.publishedTime,
        dateModified: siteMeta.modifiedTime,
        wordCount: siteMeta.wordCount,
        keywords: siteMeta.keywords.join(", "),
        author: {
          "@type": "Organization",
          name: siteMeta.authorName,
        },
        publisher: {
          "@type": "Organization",
          name: siteMeta.siteName,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/`,
        },
        url: `${siteUrl}/`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: siteMeta.shareTitle,
            item: `${siteUrl}/#main-content`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <ReadingProgress />

      <main id="main-content" className="min-h-screen pb-24">
        <ArticleEnhancements />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeroSection />

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row relative">
          <TableOfContents items={tocItems} />

          <article
            className="flex-1 lg:pl-10 xl:pl-16 mt-8 lg:mt-0 min-w-0 pb-16"
            style={{
              fontFamily: "var(--font-body), Georgia, 'Times New Roman', serif",
              lineHeight: 1.8,
            }}
          >
            <div
              className="prose prose-lg md:prose-xl mx-auto
              prose-headings:font-serif prose-headings:font-bold
              prose-p:text-justify prose-p:mb-6
              prose-a:no-underline hover:prose-a:underline
              prose-li:my-1 prose-ul:my-4 prose-ol:my-4
              prose-strong:font-semibold
              max-w-[75ch]"
            >
              <RelatedLinks />
              <ReportBody />
            </div>
          </article>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
