import type { MetadataRoute } from "next";

const SITE_URL = "https://fawzy0z.me";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ["", "/Ahmed_Fawzy_Software_Engineer.pdf"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  return [...staticEntries];
}
