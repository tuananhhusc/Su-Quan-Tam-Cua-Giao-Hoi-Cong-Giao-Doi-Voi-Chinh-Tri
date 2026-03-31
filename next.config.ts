import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // We use standard React components now, so minimal extensions are needed.
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  
  output: "export",
  
  // Disable image optimization for GitHub Pages static export
  images: {
    unoptimized: true,
  },
  
  // Subpath for GitHub Pages repository-based URLs
  basePath: "/Su-Quan-Tam-Cua-Giao-Hoi-Cong-Giao-Doi-Voi-Chinh-Tri",
  
  // Note: experimental.turbo for Next.js 15/16
  experimental: {
    // We remove the MDX rules here to keep it lean as we've moved to TSX
  },
};

export default nextConfig;
