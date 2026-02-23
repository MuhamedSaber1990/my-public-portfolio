import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "*",
    },
    sitemap: ["https://fawzy0z.me/sitemap.xml"],
  };
}
