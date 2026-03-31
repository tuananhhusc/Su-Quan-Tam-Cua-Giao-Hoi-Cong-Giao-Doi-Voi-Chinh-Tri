import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Báo Cáo Nghiên Cứu",
    short_name: "Báo cáo",
    description:
      "Báo cáo nghiên cứu chuyên sâu về sự giao thoa giữa tôn giáo và chính trị trong truyền thống Công giáo.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#1b2a4a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

