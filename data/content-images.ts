import { slugify } from "@/lib/slug";
import type { ContentImage } from "@/types/content";

export function createPlaceholderImage(
  slug: string,
  alt: string,
  caption?: string,
  textbook?: string,
  volume?: string,
  title?: string,
): ContentImage {
  const textbookBase = textbook?.replace(/\s*-\s*Tập\s*[12]$/u, "") ?? slug;
  const imageFolder = [textbookBase, volume, title]
    .filter(Boolean)
    .map((segment) => slugify(segment ?? ""))
    .join("/");

  return {
    src: `/illustration/${imageFolder || slug}`,
    alt,
    width: 960,
    height: 1280,
    caption:
      caption ??
      "Vị trí minh họa đang chờ bổ sung ảnh theo đúng tinh thần sách văn học Việt Nam.",
  };
}
