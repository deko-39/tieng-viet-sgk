import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export function createMetadata({
  title,
  description,
  pathname,
  keywords = [],
}: {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(pathname),
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
