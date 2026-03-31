import type { MetadataRoute } from "next";
import { getSiteUrl } from "./lib/site";
import { siteMeta } from "./lib/siteMeta";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const last = new Date(siteMeta.modifiedTime);

  return [
    {
      url: `${base}/`,
      lastModified: last,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/gioi-thieu`,
      lastModified: last,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/phuong-phap`,
      lastModified: last,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/mien-trach-nhiem`,
      lastModified: last,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
