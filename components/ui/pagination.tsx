import Link from "next/link";
import { buildQueryString } from "@/features/content/query";
import type { CollectionFilters } from "@/types/content";

export function Pagination({
  pathname,
  filters,
  currentPage,
  pageCount,
}: {
  pathname: string;
  filters: CollectionFilters;
  currentPage: number;
  pageCount: number;
}) {
  if (pageCount <= 1) {
    return null;
  }

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav aria-label="Phân trang" className="flex flex-wrap items-center gap-2">
      {pages.map((page) => {
        const query = buildQueryString({ ...filters, page });

        return (
          <Link
            key={page}
            href={`${pathname}${query ? `?${query}` : ""}`}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              page === currentPage
                ? "border-line-strong bg-brick text-paper"
                : "border-line bg-surface text-ink hover:border-line-strong"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </nav>
  );
}
