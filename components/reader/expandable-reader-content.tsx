"use client";

import { BookOpenText, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { ContentKind } from "@/types/content";

interface ExpandableReaderContentProps {
  kind: ContentKind;
  content: string;
  fullContent?: string;
}

export function ExpandableReaderContent({
  kind,
  content,
  fullContent,
}: ExpandableReaderContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasFullContent =
    Boolean(fullContent?.trim()) && fullContent?.trim() !== content.trim();
  const displayContent = hasFullContent && isExpanded ? fullContent : content;

  return (
    <div
      className={
        kind === "poem"
          ? "poem-lines text-center text-ink"
          : "paragraph-body text-left text-ink"
      }
    >
      <div>{displayContent}</div>
      {hasFullContent ? (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((currentState) => !currentState)}
            className="group inline-flex min-h-9 items-center gap-2.5 rounded-full border border-line/70 bg-surface px-2.5 py-1.5 text-left text-[0.82rem] text-ink shadow-[0_8px_18px_rgba(44,36,24,0.07)] transition hover:-translate-y-0.5 hover:border-brick/40 hover:bg-paper"
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brick/12 text-brick transition group-hover:bg-brick/18">
              {isExpanded ? (
                <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <BookOpenText className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-medium text-ink">
                {isExpanded ? "Thu gọn" : "Đọc đầy đủ"}
              </span>
              <span className="mt-0.5 text-[0.62rem] uppercase tracking-[0.14em] text-ink-soft">
                {isExpanded ? "Quay về bản rút gọn" : "Mở toàn bộ nội dung"}
              </span>
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
