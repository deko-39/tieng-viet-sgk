import {
  generateReaderMetadata,
  renderReaderPage,
} from "@/features/content/reader-page";

export async function generateMetadata({ searchParams }: PageProps<"/">) {
  const params = await searchParams;

  return generateReaderMetadata({
    pathname: "/",
    searchParams: params,
  });
}

export default async function HomePage({ searchParams }: PageProps<"/">) {
  const params = await searchParams;

  return renderReaderPage({
    pathname: "/",
    searchParams: params,
  });
}
