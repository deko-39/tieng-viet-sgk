import { permanentRedirect } from "next/navigation";
import { contentRepository } from "@/lib/content-repository";
import { buildReaderUrl } from "@/lib/reader-url";

export default async function AuthorDetailPage(
  props: PageProps<"/authors/[slug]">,
) {
  const { slug } = await props.params;
  const author = await contentRepository.getAuthorBySlug(slug);
  permanentRedirect(buildReaderUrl(author ? { q: author.name } : {}, {}, "/"));
}
