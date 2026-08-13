import { authors } from "@/data/authors";
import { paragraphs } from "@/data/paragraphs";
import { poems } from "@/data/poems";
import { tags } from "@/data/tags";
import { textbooks } from "@/data/textbooks";
import { normalizeVietnameseText } from "@/lib/text";
import type {
  Author,
  ContentItem,
  ContentRepository,
  Paragraph,
  Poem,
  SearchResult,
  Tag,
  Textbook,
} from "@/types/content";

function compareByTitle(
  left: Pick<ContentItem, "title" | "slug">,
  right: Pick<ContentItem, "title" | "slug">,
) {
  return (
    left.title.localeCompare(right.title, "vi") ||
    left.slug.localeCompare(right.slug, "vi")
  );
}

class MockContentRepository implements ContentRepository {
  async getPoems(): Promise<Poem[]> {
    return [...poems].sort(compareByTitle);
  }

  async getPoemBySlug(slug: string): Promise<Poem | null> {
    return poems.find((poem) => poem.slug === slug) ?? null;
  }

  async getParagraphs(): Promise<Paragraph[]> {
    return [...paragraphs].sort(compareByTitle);
  }

  async getParagraphBySlug(slug: string): Promise<Paragraph | null> {
    return paragraphs.find((paragraph) => paragraph.slug === slug) ?? null;
  }

  async getAuthors(): Promise<Author[]> {
    return authors;
  }

  async getAuthorBySlug(slug: string): Promise<Author | null> {
    return authors.find((author) => author.slug === slug) ?? null;
  }

  async getTags(): Promise<Tag[]> {
    return tags;
  }

  async getTagBySlug(slug: string): Promise<Tag | null> {
    return tags.find((tag) => tag.slug === slug) ?? null;
  }

  async getTextbooks(): Promise<Textbook[]> {
    return textbooks;
  }

  async getAllContent(): Promise<ContentItem[]> {
    return [...poems, ...paragraphs].sort(compareByTitle);
  }

  async search(query: string): Promise<SearchResult[]> {
    const normalizedQuery = normalizeVietnameseText(query);

    if (!normalizedQuery) {
      return [];
    }

    const authorMap = new Map(authors.map((author) => [author.slug, author]));
    const tagMap = new Map(tags.map((tag) => [tag.slug, tag]));

    return [...poems, ...paragraphs]
      .map((item) => {
        const authorName = item.authorSlug
          ? (authorMap.get(item.authorSlug)?.name ?? "")
          : "";
        const tagNames = item.tags
          .map((tag) => tagMap.get(tag)?.name ?? "")
          .join(" ");
        const haystack = normalizeVietnameseText(
          [
            item.title,
            item.content,
            item.excerpt,
            authorName,
            item.textbook,
            item.categories.join(" "),
            tagNames,
          ].join(" "),
        );

        const exactTitle =
          normalizeVietnameseText(item.title) === normalizedQuery ? 8 : 0;
        const titleMatch = normalizeVietnameseText(item.title).includes(
          normalizedQuery,
        )
          ? 5
          : 0;
        const authorMatch = normalizeVietnameseText(authorName).includes(
          normalizedQuery,
        )
          ? 3
          : 0;
        const tagMatch = normalizeVietnameseText(tagNames).includes(
          normalizedQuery,
        )
          ? 3
          : 0;
        const bodyMatch = haystack.includes(normalizedQuery) ? 1 : 0;
        const score =
          exactTitle + titleMatch + authorMatch + tagMatch + bodyMatch;

        return score > 0
          ? {
              kind: item.kind,
              item,
              score,
            }
          : null;
      })
      .filter((result): result is SearchResult => Boolean(result))
      .sort(
        (left, right) =>
          right.score - left.score ||
          right.item.addedAt.localeCompare(left.item.addedAt),
      );
  }
}

export const contentRepository = new MockContentRepository();
