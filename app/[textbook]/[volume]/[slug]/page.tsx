import { contentRepository } from "@/lib/content-repository";
import { buildContentRouteParams } from "@/lib/reader-url";
import {
  generateReaderMetadata,
  renderReaderPage,
} from "@/features/content/reader-page";

export async function generateStaticParams() {
  const items = await contentRepository.getAllContent();
  return items.map((item) => buildContentRouteParams(item));
}

export async function generateMetadata(
  props: PageProps<"/[textbook]/[volume]/[slug]">,
) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  return generateReaderMetadata({
    pathname: `/${params.textbook}/${params.volume}/${params.slug}`,
    searchParams,
    routeParams: params,
  });
}

export default async function ReaderContentPage(
  props: PageProps<"/[textbook]/[volume]/[slug]">,
) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  return renderReaderPage({
    pathname: `/${params.textbook}/${params.volume}/${params.slug}`,
    searchParams,
    routeParams: params,
  });
}
