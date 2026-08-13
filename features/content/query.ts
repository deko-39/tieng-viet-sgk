import { normalizeVietnameseText } from "@/lib/text";
import type {
  Author,
  CollectionFilters,
  ContentItem,
  SortOption,
  Tag,
} from "@/types/content";

export interface CollectionSearchParams {
  [key: string]: string | string[] | undefined;
}

export interface PaginationResult<T> {
  items: T[];
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export function parseCollectionFilters(
  searchParams: CollectionSearchParams,
): CollectionFilters {
  return {
    q: readString(searchParams.q),
    tags: readArray(searchParams.tag),
    categories: readArray(searchParams.category),
    authors: readArray(searchParams.author),
    sort: readSort(searchParams.sort),
    page: readPage(searchParams.page),
  };
}

export function filterContent(
  items: ContentItem[],
  filters: CollectionFilters,
  tags: Tag[],
  authors: Author[],
) {
  const tagMap = new Map(tags.map((tag) => [tag.slug, tag.name]));
  const authorMap = new Map(
    authors.map((author) => [author.slug, author.name]),
  );
  const query = normalizeVietnameseText(filters.q);

  return items.filter((item) => {
    const matchesTags = filters.tags.every((tag) => item.tags.includes(tag));
    const matchesCategories = filters.categories.every((category) =>
      item.categories.includes(category),
    );
    const matchesAuthors =
      filters.authors.length === 0 ||
      filters.authors.includes(item.authorSlug ?? "");

    if (!matchesTags || !matchesCategories || !matchesAuthors) {
      return false;
    }

    if (!query) {
      return true;
    }

    const authorName = item.authorSlug
      ? (authorMap.get(item.authorSlug) ?? "")
      : "";
    const tagNames = item.tags.map((tag) => tagMap.get(tag) ?? "").join(" ");
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

    return haystack.includes(query);
  });
}

export function sortContent(
  items: ContentItem[],
  sort: SortOption,
  authors: Author[],
) {
  const authorMap = new Map(
    authors.map((author) => [author.slug, author.name]),
  );
  const sorted = [...items];

  sorted.sort((left, right) => {
    if (sort === "title") {
      return left.title.localeCompare(right.title, "vi");
    }

    if (sort === "author") {
      const leftAuthor = authorMap.get(left.authorSlug ?? "") ?? "";
      const rightAuthor = authorMap.get(right.authorSlug ?? "") ?? "";
      return (
        leftAuthor.localeCompare(rightAuthor, "vi") ||
        left.title.localeCompare(right.title, "vi")
      );
    }

    return right.addedAt.localeCompare(left.addedAt);
  });

  return sorted;
}

export function paginate<T>(
  items: T[],
  page: number,
  pageSize: number,
): PaginationResult<T> {
  const total = items.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(Math.max(1, page), pageCount);
  const start = (currentPage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    page: currentPage,
    pageSize,
    pageCount,
    total,
  };
}

export function getAvailableCategories(items: ContentItem[]) {
  return Array.from(new Set(items.flatMap((item) => item.categories))).sort(
    (left, right) => left.localeCompare(right, "vi"),
  );
}

export function getPopularTags(items: ContentItem[]) {
  const counts = new Map<string, number>();

  for (const item of items) {
    for (const tag of item.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return counts;
}

export function buildQueryString(
  filters: Partial<CollectionFilters> & {
    tags?: string[];
    categories?: string[];
    authors?: string[];
  },
) {
  const params = new URLSearchParams();

  if (filters.q) {
    params.set("q", filters.q);
  }

  for (const tag of filters.tags ?? []) {
    params.append("tag", tag);
  }

  for (const category of filters.categories ?? []) {
    params.append("category", category);
  }

  for (const author of filters.authors ?? []) {
    params.append("author", author);
  }

  if (filters.sort && filters.sort !== "relevance") {
    params.set("sort", filters.sort);
  }

  if (filters.page && filters.page > 1) {
    params.set("page", String(filters.page));
  }

  return params.toString();
}

export function getRelatedContent(
  item: ContentItem,
  items: ContentItem[],
  limit = 3,
) {
  const preferredTags = item.tags.filter(
    (tag) => !["tho", "doan-van"].includes(tag),
  );

  return items
    .filter((candidate) => candidate.slug !== item.slug)
    .map((candidate) => ({
      candidate,
      score:
        preferredTags.filter((tag) => candidate.tags.includes(tag)).length +
        (candidate.authorSlug === item.authorSlug ? 1 : 0),
    }))
    .filter((entry) => entry.score > 0)
    .sort(
      (left, right) =>
        right.score - left.score ||
        right.candidate.addedAt.localeCompare(left.candidate.addedAt),
    )
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

function readString(value: string | string[] | undefined) {
  return typeof value === "string" ? value : "";
}

function readArray(value: string | string[] | undefined) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function readSort(value: string | string[] | undefined): SortOption {
  const raw = typeof value === "string" ? value : "relevance";

  if (["relevance", "newest", "title", "author"].includes(raw)) {
    return raw as SortOption;
  }

  return "relevance";
}

function readPage(value: string | string[] | undefined) {
  const raw = typeof value === "string" ? Number.parseInt(value, 10) : 1;

  return Number.isFinite(raw) && raw > 0 ? raw : 1;
}
