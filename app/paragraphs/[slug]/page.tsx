import { notFound, permanentRedirect } from "next/navigation";
import { contentRepository } from "@/lib/content-repository";
import { buildContentPath } from "@/lib/reader-url";

export default async function ParagraphDetailPage(
  props: PageProps<"/paragraphs/[slug]">,
) {
  const { slug } = await props.params;
  const paragraph = await contentRepository.getParagraphBySlug(slug);

  if (!paragraph) {
    notFound();
  }

  permanentRedirect(buildContentPath(paragraph));
}
