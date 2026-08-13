import type { MetadataRoute } from "next";
import { contentRepository } from "@/lib/content-repository";
import { buildContentPath } from "@/lib/reader-url";
import { absoluteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const items = await contentRepository.getAllContent();

  return ["/", ...items.map((item) => buildContentPath(item))].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }));
}
