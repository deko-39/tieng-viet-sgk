import { absoluteUrl, siteConfig } from "@/lib/site";
import type { Author, ContentItem, Tag } from "@/types/content";

export function createWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createCreativeWorkJsonLd(
  item: ContentItem,
  author: Author | null,
  tags: Tag[],
  pathOverride?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": item.kind === "poem" ? "CreativeWork" : "Article",
    headline: item.title,
    description: item.excerpt,
    inLanguage: "vi",
    datePublished: item.publishedYear
      ? `${item.publishedYear}-01-01`
      : undefined,
    dateModified: item.addedAt,
    keywords: tags.map((tag) => tag.name).join(", "),
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          url: absoluteUrl(`/authors/${author.slug}`),
        }
      : undefined,
    isPartOf: item.textbook
      ? {
          "@type": "Book",
          name: item.textbook,
        }
      : undefined,
    url: absoluteUrl(
      pathOverride ??
        `/${item.kind === "poem" ? "poems" : "paragraphs"}/${item.slug}`,
    ),
  };
}

export function createPersonJsonLd(author: Author) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.bio,
    url: absoluteUrl(`/authors/${author.slug}`),
    birthDate: author.born ? `${author.born}-01-01` : undefined,
    deathDate: author.died ? `${author.died}-01-01` : undefined,
    homeLocation: author.hometown,
  };
}

export function createCollectionJsonLd(
  title: string,
  description: string,
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(path),
  };
}
