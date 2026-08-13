import { permanentRedirect } from "next/navigation";
import { contentRepository } from "@/lib/content-repository";
import { buildContentPath } from "@/lib/reader-url";

export default async function ParagraphsPage() {
  const paragraphs = await contentRepository.getParagraphs();
  const firstParagraph = paragraphs[0];
  permanentRedirect(firstParagraph ? buildContentPath(firstParagraph) : "/");
}
