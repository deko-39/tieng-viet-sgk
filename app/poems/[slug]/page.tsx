import { notFound, permanentRedirect } from "next/navigation";
import { contentRepository } from "@/lib/content-repository";
import { buildContentPath } from "@/lib/reader-url";

export default async function PoemDetailPage(
  props: PageProps<"/poems/[slug]">,
) {
  const { slug } = await props.params;
  const poem = await contentRepository.getPoemBySlug(slug);

  if (!poem) {
    notFound();
  }

  permanentRedirect(buildContentPath(poem));
}
