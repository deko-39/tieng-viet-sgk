import type { Author, ContentItem, Tag } from "@/types/content";

export function getContentHref(item: Pick<ContentItem, "kind" | "slug">) {
  return `/${item.kind === "poem" ? "poems" : "paragraphs"}/${item.slug}`;
}

export function resolveTagsForItem(
  item: Pick<ContentItem, "tags">,
  tagMap: Map<string, Tag>,
) {
  return item.tags.flatMap((tag) => {
    const resolved = tagMap.get(tag);
    return resolved ? [resolved] : [];
  });
}

export function getAuthorMap(authors: Author[]) {
  return new Map(authors.map((author) => [author.slug, author]));
}

export function getTagMap(tags: Tag[]) {
  return new Map(tags.map((tag) => [tag.slug, tag]));
}
