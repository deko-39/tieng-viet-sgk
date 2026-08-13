"use client";

import { BookText, ChevronsDown, ChevronsUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { buildContentPath, buildReaderUrl } from "@/lib/reader-url";
import type { ContentItem } from "@/types/content";

interface LibrarySidebarGroup {
  id: string;
  title: string;
  volumes: Array<{
    id: string;
    title: string;
    items: ContentItem[];
  }>;
}

interface LibrarySidebarProps {
  groups: LibrarySidebarGroup[];
  selectedSlug: string | null;
  currentQuery: string;
  clearHref: string;
  reserveHeaderActionSpace?: boolean;
}

function getInitialOpenState(
  groups: LibrarySidebarGroup[],
  selectedSlug: string | null,
) {
  const selectedGroup = groups.find((group) =>
    group.volumes.some((volume) =>
      volume.items.some((item) => item.slug === selectedSlug),
    ),
  );
  const selectedVolume = selectedGroup?.volumes.find((volume) =>
    volume.items.some((item) => item.slug === selectedSlug),
  );

  return {
    groups: Object.fromEntries(
      groups.map((group) => [group.id, group.id === selectedGroup?.id]),
    ) as Record<string, boolean>,
    volumes: Object.fromEntries(
      groups.flatMap((group) =>
        group.volumes.map((volume) => [
          volume.id,
          volume.id === selectedVolume?.id,
        ]),
      ),
    ) as Record<string, boolean>,
  };
}

export function LibrarySidebar({
  groups,
  selectedSlug,
  currentQuery,
  clearHref,
  reserveHeaderActionSpace = false,
}: LibrarySidebarProps) {
  const initialState = getInitialOpenState(groups, selectedSlug);
  const [openGroups, setOpenGroups] = useState(initialState.groups);
  const [openVolumes, setOpenVolumes] = useState(initialState.volumes);

  function setAllOpen(nextOpen: boolean) {
    setOpenGroups(
      Object.fromEntries(groups.map((group) => [group.id, nextOpen])) as Record<
        string,
        boolean
      >,
    );
    setOpenVolumes(
      Object.fromEntries(
        groups.flatMap((group) =>
          group.volumes.map((volume) => [volume.id, nextOpen]),
        ),
      ) as Record<string, boolean>,
    );
  }

  return (
    <div className="flex flex-col">
      <div
        className={`border-b border-line/70 px-1.5 py-1.5 ${
          reserveHeaderActionSpace ? "pl-10" : ""
        }`}
      >
        <div className="flex items-center justify-end gap-1.5 text-ink-soft">
          <button
            type="button"
            onClick={() => setAllOpen(true)}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-line/60 bg-paper/70 transition hover:text-ink"
            aria-label="Mở hết mục lục"
            title="Mở hết mục lục"
          >
            <ChevronsDown className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setAllOpen(false)}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-line/60 bg-paper/70 transition hover:text-ink"
            aria-label="Thu gọn mục lục"
            title="Thu gọn mục lục"
          >
            <ChevronsUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
        {currentQuery ? (
          <div className="mt-1.5 flex items-center justify-between gap-2 rounded-lg border border-line/70 bg-paper/80 px-2 py-1.5 text-[0.75rem] text-ink-soft">
            <span className="truncate">Từ khóa: {currentQuery}</span>
            <Link
              href={clearHref}
              className="shrink-0 text-brick transition hover:text-ink"
            >
              Xóa
            </Link>
          </div>
        ) : null}
      </div>

      <div>
        {groups.length ? (
          <div className="space-y-1 px-1 py-1">
            {groups.map((group) => {
              const itemCount = group.volumes.reduce(
                (count, volume) => count + volume.items.length,
                0,
              );

              return (
                <div
                  key={group.id}
                  className="rounded-lg border border-line/55 bg-paper/45"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroups((currentState) => ({
                        ...currentState,
                        [group.id]: !currentState[group.id],
                      }))
                    }
                    className="flex w-full items-center justify-between gap-2 px-2 py-2 text-left text-[0.79rem] font-medium text-ink"
                    aria-expanded={openGroups[group.id]}
                  >
                    <span className="text-[0.74rem] leading-4.5">
                      {group.title}
                    </span>
                    <span className="text-[0.66rem] uppercase tracking-[0.14em] text-ink-soft">
                      {itemCount}
                    </span>
                  </button>

                  {openGroups[group.id] ? (
                    <div className="space-y-1 border-t border-line/55 px-1 py-1">
                      {group.volumes.map((volume) => (
                        <div
                          key={volume.id}
                          className="rounded-md bg-surface/60"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenVolumes((currentState) => ({
                                ...currentState,
                                [volume.id]: !currentState[volume.id],
                              }))
                            }
                            className="flex w-full items-center justify-between gap-2 px-2 py-1.5 text-left text-[0.74rem] text-ink"
                            aria-expanded={openVolumes[volume.id]}
                          >
                            <span className="text-[0.69rem] leading-4">
                              {volume.title}
                            </span>
                            <span className="text-[0.62rem] uppercase tracking-[0.14em] text-ink-soft">
                              {volume.items.length}
                            </span>
                          </button>

                          {openVolumes[volume.id] ? (
                            <ul className="space-y-0.5 border-t border-line/45 px-1 py-1">
                              {volume.items.length ? (
                                volume.items.map((item) => {
                                  const isSelected = item.slug === selectedSlug;

                                  return (
                                    <li
                                      key={`${volume.id}:${item.kind}:${item.slug}`}
                                    >
                                      <Link
                                        href={buildReaderUrl(
                                          currentQuery
                                            ? { q: currentQuery }
                                            : {},
                                          {},
                                          buildContentPath(item),
                                        )}
                                        className={`block rounded-md px-2 py-1.5 transition ${
                                          isSelected
                                            ? "reader-current-item"
                                            : "text-ink-soft hover:bg-paper/80 hover:text-ink"
                                        }`}
                                      >
                                        <span className="flex items-start gap-2">
                                          <BookText
                                            className={`mt-0.5 h-3 w-3 shrink-0 ${
                                              isSelected
                                                ? "text-brick"
                                                : "text-ink-soft/70"
                                            }`}
                                            aria-hidden="true"
                                          />
                                          <span className="min-w-0 flex-1">
                                            <span className="block text-[0.76rem] leading-5">
                                              {item.title}
                                            </span>
                                            <span className="block text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft/80">
                                              {item.kind === "poem"
                                                ? "Thơ"
                                                : "Đoạn văn"}
                                            </span>
                                          </span>
                                        </span>
                                      </Link>
                                    </li>
                                  );
                                })
                              ) : (
                                <li className="px-2.5 py-1.5 text-[0.78rem] text-ink-soft">
                                  Chưa có bài đọc.
                                </li>
                              )}
                            </ul>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-lg border border-line/55 bg-paper/50 px-4 py-5 text-sm leading-7 text-ink-soft">
            Không tìm thấy bài đọc phù hợp với từ khóa hiện tại.
          </div>
        )}
      </div>
    </div>
  );
}
