import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export function createMetadata({
  title,
  description,
  pathname,
  keywords = [],
  image,
}: {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  image?: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}): Metadata {
  const imageUrl = absoluteUrl(image?.src ?? "/opengraph-image");

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
      images: [
        {
          url: imageUrl,
          alt: image?.alt ?? title,
          width: image?.width ?? 1200,
          height: image?.height ?? 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
