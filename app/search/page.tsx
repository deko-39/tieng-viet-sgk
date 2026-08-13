import { permanentRedirect } from "next/navigation";
import { buildReaderUrl } from "@/lib/reader-url";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  permanentRedirect(buildReaderUrl(params, {}, "/"));
}
