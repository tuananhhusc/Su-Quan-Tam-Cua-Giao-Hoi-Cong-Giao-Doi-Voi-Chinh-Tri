import { createRequire } from "node:module";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

/** @next/mdx only registers Turbopack rules when `process.env.TURBOPACK` is set at config load time (it usually is not), which breaks `next build` with Turbopack. Mirror the plugin's Turbopack block here. */
const require = createRequire(import.meta.url);

const TURBOPACK_MDX_RULE_KEY = "{*,next-mdx-rule}";

function withTurbopackMdx(config: NextConfig): NextConfig {
  const mdxLoaderPath = require.resolve("@next/mdx/mdx-js-loader");
  const mdxRule = {
    loaders: [
      {
        loader: mdxLoaderPath,
        options: {
          providerImportSource: "next-mdx-import-source-file",
          remarkPlugins: ["remark-gfm"],
          rehypePlugins: [],
        },
      },
    ],
    as: "*.tsx",
    condition: {
      path: /\.mdx$/,
    },
  };

  const existing = config.turbopack?.rules?.[TURBOPACK_MDX_RULE_KEY];
  const existingList = existing
    ? Array.isArray(existing)
      ? existing
      : [existing]
    : [];

  return {
    ...config,
    turbopack: {
      ...config.turbopack,
      rules: {
        ...config.turbopack?.rules,
        [TURBOPACK_MDX_RULE_KEY]: [...existingList, mdxRule],
      },
      resolveAlias: {
        ...config.turbopack?.resolveAlias,
        "next-mdx-import-source-file": "@vercel/turbopack-next/mdx-import-source",
      },
    },
  };
}

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Su-Quan-Tam-Cua-Giao-Hoi-Cong-Giao-Doi-Voi-Chinh-Tri",
  assetPrefix: "/Su-Quan-Tam-Cua-Giao-Hoi-Cong-Giao-Doi-Voi-Chinh-Tri/",
  async headers() {
    // Note: Headers are ignored during static export.
    // We keep them here for local development.
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];

    const hsts =
      process.env.NODE_ENV === "production"
        ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }]
        : [];

    return [
      {
        source: "/:path*",
        headers: [...securityHeaders, ...hsts],
      },
      {
        source: "/feed.xml",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, s-maxage=3600" }],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [],
  },
});

export default withTurbopackMdx(withMDX(nextConfig));
