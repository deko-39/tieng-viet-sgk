import { permanentRedirect } from "next/navigation";
import { contentRepository } from "@/lib/content-repository";
import { buildReaderUrl } from "@/lib/reader-url";

export default async function TagDetailPage(props: PageProps<"/tags/[slug]">) {
  const { slug } = await props.params;
  const tag = await contentRepository.getTagBySlug(slug);
  permanentRedirect(buildReaderUrl(tag ? { q: tag.name } : {}, {}, "/"));
}
