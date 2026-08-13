import Link from "next/link";
import type { Author, CollectionFilters, Tag } from "@/types/content";

export function ActiveFilters({
  pathname,
  filters,
  tags,
  authors,
}: {
  pathname: string;
  filters: CollectionFilters;
  tags: Tag[];
  authors: Author[];
}) {
  const tagMap = new Map(tags.map((tag) => [tag.slug, tag.name]));
  const authorMap = new Map(
    authors.map((author) => [author.slug, author.name]),
  );
  const active = [
    ...filters.tags.map((tag) => tagMap.get(tag) ?? tag),
    ...filters.categories,
    ...filters.authors.map((author) => authorMap.get(author) ?? author),
    ...(filters.q ? [`Từ khóa: ${filters.q}`] : []),
  ];

  if (active.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
      <span className="font-medium text-brick">Bộ lọc đang dùng:</span>
      {active.map((label) => (
        <span
          key={label}
          className="rounded-full border border-line bg-surface px-3 py-1.5 text-ink"
        >
          {label}
        </span>
      ))}
      <Link
        href={pathname}
        className="rounded-full border border-line px-3 py-1.5 text-ink"
      >
        Xóa bộ lọc
      </Link>
    </div>
  );
}
