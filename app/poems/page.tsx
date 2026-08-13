import { permanentRedirect } from "next/navigation";
import { contentRepository } from "@/lib/content-repository";
import { buildContentPath } from "@/lib/reader-url";

export default async function PoemsPage() {
  const poems = await contentRepository.getPoems();
  const firstPoem = poems[0];
  permanentRedirect(firstPoem ? buildContentPath(firstPoem) : "/");
}
