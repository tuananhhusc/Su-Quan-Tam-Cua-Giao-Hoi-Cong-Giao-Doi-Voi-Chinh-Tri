import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  // Ensure basePath is handled correctly on GitHub Pages
  basePath: "/Su-Quan-Tam-Cua-Giao-Hoi-Cong-Giao-Doi-Voi-Chinh-Tri",
  // assetPrefix can sometimes cause issues with relative links in static exports, 
  // basePath is usually sufficient for GH Pages.
  
  experimental: {
    turbo: {
      rules: {
        "*.mdx": {
          loaders: [
            {
              loader: "@next/mdx/mdx-js-loader",
              options: {
                remarkPlugins: ["remark-gfm"],
              },
            },
          ],
          as: "*.tsx",
        },
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
