import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buildContentPath, buildReaderUrl } from "@/lib/reader-url";
import type { ContentItem } from "@/types/content";

interface ReaderNavigationProps {
  previousItem: ContentItem | null;
  nextItem: ContentItem | null;
  query: string;
}

export function ReaderNavigation({
  previousItem,
  nextItem,
  query,
}: ReaderNavigationProps) {
  if (!previousItem && !nextItem) {
    return null;
  }

  return (
    <nav aria-label="Điều hướng bài đọc" className="grid grid-cols-2 gap-2">
      {previousItem ? (
        <Link
          href={buildReaderUrl(
            query ? { q: query } : {},
            {},
            buildContentPath(previousItem),
          )}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink transition hover:bg-surface"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span className="truncate">Trước</span>
        </Link>
      ) : (
        <span />
      )}
      {nextItem ? (
        <Link
          href={buildReaderUrl(
            query ? { q: query } : {},
            {},
            buildContentPath(nextItem),
          )}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink transition hover:bg-surface"
        >
          <span className="truncate">Sau</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
