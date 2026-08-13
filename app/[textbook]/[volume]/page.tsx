import { notFound, permanentRedirect } from "next/navigation";
import { contentRepository } from "@/lib/content-repository";
import { buildContentPath, matchesVolumeRoute } from "@/lib/reader-url";

export default async function ReaderVolumePage(
  props: PageProps<"/[textbook]/[volume]">,
) {
  const params = await props.params;
  const items = await contentRepository.getAllContent();
  const firstItem = items.find((item) => matchesVolumeRoute(item, params));

  if (!firstItem) {
    notFound();
  }

  permanentRedirect(buildContentPath(firstItem));
}
