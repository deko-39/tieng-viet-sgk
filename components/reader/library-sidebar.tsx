"use client";

import {
  BookOpenText,
  BookText,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsDown,
  ChevronsUp,
  FileText,
  FolderOpen,
} from "lucide-react";
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
  rootItems?: Array<{
    id: string;
    href: string;
    kicker: string;
    label: string;
    description?: string;
    isCurrent?: boolean;
  }>;
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
  rootItems,
}: LibrarySidebarProps) {
  const initialState = getInitialOpenState(groups, selectedSlug);
  const [openGroups, setOpenGroups] = useState(initialState.groups);
  const [openVolumes, setOpenVolumes] = useState(initialState.volumes);
  const [desktopContentOpen, setDesktopContentOpen] = useState(true);
  const hasRootMenu = Boolean(rootItems?.length);
  const [mobileLevel, setMobileLevel] = useState<"root" | "content">(
    hasRootMenu ? "root" : "content",
  );

  function hasSelectedGroup(group: LibrarySidebarGroup) {
    return group.volumes.some((volume) =>
      volume.items.some((item) => item.slug === selectedSlug),
    );
  }

  function hasSelectedVolume(volume: LibrarySidebarGroup["volumes"][number]) {
    return volume.items.some((item) => item.slug === selectedSlug);
  }

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

  function renderRootEntry(
    item: NonNullable<LibrarySidebarProps["rootItems"]>[number],
    mode: "desktop" | "mobile",
  ) {
    const Icon = item.id === "alphabet" ? FileText : BookOpenText;
    const isExpandable = Boolean(item.isCurrent);
    const isOpen =
      mode === "mobile" ? mobileLevel === "content" : desktopContentOpen;
    const className = `group flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border px-3 py-2 text-left transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/35 ${
      item.isCurrent
        ? "reader-current-tab text-ink"
        : "border-line/45 bg-paper/45 text-ink hover:border-brick/28 hover:bg-paper/85"
    }`;
    const content = (
      <>
        <span className="flex min-w-0 items-center gap-2.5">
          <span
            className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${
              item.isCurrent
                ? "border-brick/24 bg-brick/12 text-brick"
                : "border-line/50 bg-paper/70 text-ink-soft group-hover:border-brick/20 group-hover:text-brick"
            }`}
            aria-hidden="true"
          >
            <Icon className="h-3.5 w-3.5" />
          </span>
          <span className="min-w-0 truncate text-[0.82rem] font-semibold leading-5 text-ink">
            {item.label}
          </span>
        </span>
        <span className="flex shrink-0 items-center text-brick">
          {isExpandable ? (
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            />
          ) : (
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          )}
        </span>
      </>
    );

    if (isExpandable) {
      return (
        <button
          key={item.id}
          type="button"
          onClick={() =>
            mode === "mobile"
              ? setMobileLevel("content")
              : setDesktopContentOpen((currentState) => !currentState)
          }
          className={className}
          aria-expanded={isOpen}
          aria-current="page"
        >
          {content}
        </button>
      );
    }

    return (
      <Link key={item.id} href={item.href} className={className}>
        {content}
      </Link>
    );
  }

  function renderRootMenu(mode: "desktop" | "mobile") {
    if (!rootItems?.length) {
      return null;
    }

    return (
      <nav aria-label="Điều hướng cấp một" className="space-y-1">
        {rootItems.map((item) => renderRootEntry(item, mode))}
      </nav>
    );
  }

  function renderSidebarTree() {
    return (
      <nav aria-label="Danh sách sách" className="space-y-1.5 px-2 py-2">
        {groups.map((group) => {
          const itemCount = group.volumes.reduce(
            (count, volume) => count + volume.items.length,
            0,
          );
          const groupIsSelected = hasSelectedGroup(group);
          const groupPanelId = `reader-group-${group.id}`;

          return (
            <section key={group.id} className="space-y-1">
              <button
                type="button"
                onClick={() =>
                  setOpenGroups((currentState) => ({
                    ...currentState,
                    [group.id]: !currentState[group.id],
                  }))
                }
                className={`group flex min-h-10 w-full items-center justify-between gap-2 rounded-xl px-2.5 py-2 text-left transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/35 ${
                  groupIsSelected
                    ? "bg-brick/7 text-ink"
                    : "text-ink hover:bg-paper/75"
                }`}
                aria-expanded={openGroups[group.id]}
                aria-controls={groupPanelId}
                title={group.title}
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <span
                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
                      groupIsSelected
                        ? "border-brick/20 bg-brick/10 text-brick"
                        : "border-line/45 bg-paper/65 text-ink-soft"
                    }`}
                    aria-hidden="true"
                  >
                    <FolderOpen className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 truncate text-[0.8rem] font-medium leading-5">
                    {group.title}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-1.5 text-[0.63rem] uppercase tracking-[0.12em] text-ink-soft">
                  <span>{itemCount}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openGroups[group.id] ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>

              <div
                id={groupPanelId}
                className="reader-sidebar-collapsible"
                data-open={openGroups[group.id] ? "true" : "false"}
              >
                <div>
                  <div className="ml-4 space-y-1 border-l border-line/45 pl-2.5">
                    {group.volumes.map((volume) => {
                      const volumeIsSelected = hasSelectedVolume(volume);
                      const volumePanelId = `reader-volume-${volume.id}`;

                      return (
                        <div key={volume.id} className="space-y-1 py-0.5">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenVolumes((currentState) => ({
                                ...currentState,
                                [volume.id]: !currentState[volume.id],
                              }))
                            }
                            className={`group flex min-h-9 w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/35 ${
                              volumeIsSelected
                                ? "bg-brick/6 text-ink"
                                : "text-ink-soft hover:bg-paper/70 hover:text-ink"
                            }`}
                            aria-expanded={openVolumes[volume.id]}
                            aria-controls={volumePanelId}
                            title={volume.title}
                          >
                            <span className="flex min-w-0 items-center gap-2">
                              <FileText
                                className={`h-3.5 w-3.5 shrink-0 ${
                                  volumeIsSelected
                                    ? "text-brick"
                                    : "text-ink-soft/75"
                                }`}
                                aria-hidden="true"
                              />
                              <span className="min-w-0 truncate text-[0.74rem] leading-5">
                                {volume.title}
                              </span>
                            </span>
                            <span className="flex shrink-0 items-center gap-1 text-[0.62rem] uppercase tracking-[0.12em] text-ink-soft">
                              <span>{volume.items.length}</span>
                              <ChevronDown
                                className={`h-3 w-3 transition-transform duration-200 ${
                                  openVolumes[volume.id]
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
                                aria-hidden="true"
                              />
                            </span>
                          </button>

                          <div
                            id={volumePanelId}
                            className="reader-sidebar-collapsible"
                            data-open={
                              openVolumes[volume.id] ? "true" : "false"
                            }
                          >
                            <div>
                              <ul className="ml-3 space-y-1 border-l border-line/35 pl-2 py-0.5">
                                {volume.items.length ? (
                                  volume.items.map((item) => {
                                    const isSelected =
                                      item.slug === selectedSlug;

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
                                          title={item.title}
                                          className={`group relative flex min-h-9 items-center gap-2 rounded-lg px-2.5 py-2 text-[0.76rem] leading-5 transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/35 ${
                                            isSelected
                                              ? "reader-current-item font-medium text-ink"
                                              : "text-ink-soft hover:bg-paper/80 hover:text-ink"
                                          }`}
                                        >
                                          <BookText
                                            className={`h-3.5 w-3.5 shrink-0 ${
                                              isSelected
                                                ? "text-brick"
                                                : "text-ink-soft/70 group-hover:text-brick/80"
                                            }`}
                                            aria-hidden="true"
                                          />
                                          <span className="min-w-0 flex-1 truncate">
                                            {item.title}
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })
                                ) : (
                                  <li className="px-2.5 py-1.5 text-[0.75rem] text-ink-soft">
                                    Chưa có bài đọc.
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </nav>
    );
  }

  function renderDesktopOutlineControls() {
    return (
      <div className="absolute left-1.5 top-10 z-10 hidden flex-col gap-1.5 lg:flex">
        <button
          type="button"
          onClick={() => setAllOpen(true)}
          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-line/60 bg-paper/70 text-ink-soft transition hover:text-ink"
          aria-label="Mở hết mục lục"
          title="Mở hết mục lục"
        >
          <ChevronsDown className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => setAllOpen(false)}
          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-line/60 bg-paper/70 text-ink-soft transition hover:text-ink"
          aria-label="Thu gọn mục lục"
          title="Thu gọn mục lục"
        >
          <ChevronsUp className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    );
  }

  function renderSidebarContent(isMobile: boolean) {
    const shouldRenderHeader = isMobile || Boolean(currentQuery);

    return (
      <>
        {shouldRenderHeader ? (
          <div
            className={`border-b border-line/70 px-1.5 py-1.5 ${
              reserveHeaderActionSpace && !isMobile ? "pl-10" : ""
            }`}
          >
            {isMobile ? (
              <button
                type="button"
                onClick={() => setMobileLevel("root")}
                className="mb-2 inline-flex h-8 items-center gap-1.5 rounded-md border border-line/60 bg-paper/70 px-3 text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft transition hover:text-ink"
              >
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Quay lại</span>
              </button>
            ) : null}

            {currentQuery ? (
              <div className="flex items-center justify-between gap-2 rounded-lg border border-line/65 bg-paper/80 px-2.5 py-2 text-[0.75rem] text-ink-soft">
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
        ) : null}

        {groups.length ? (
          renderSidebarTree()
        ) : (
          <div className="rounded-lg border border-line/55 bg-paper/50 px-4 py-5 text-sm leading-7 text-ink-soft">
            Không tìm thấy bài đọc phù hợp với từ khóa hiện tại.
          </div>
        )}
      </>
    );
  }

  function renderDesktopSidebar() {
    if (!hasRootMenu) {
      return renderSidebarContent(false);
    }

    return (
      <>
        {renderDesktopOutlineControls()}
        <div
          className={`border-b border-line/70 px-1.5 py-1.5 ${
            reserveHeaderActionSpace ? "pl-10" : ""
          }`}
        >
          {renderRootMenu("desktop")}
        </div>
        <div
          className="reader-sidebar-collapsible"
          data-open={desktopContentOpen ? "true" : "false"}
        >
          <div>
            <div className="ml-4 border-l border-line/55 pl-2.5">
              <div className="border-b border-line/70 px-1.5 py-1.5">
                <div>
                  <p className="text-[0.64rem] uppercase tracking-[0.16em] text-ink-soft">
                    Sách
                  </p>
                  <p className="text-[0.78rem] font-medium text-ink">
                    Chọn sách và bài đọc
                  </p>
                </div>
              </div>
              {renderSidebarContent(false)}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col">
      {hasRootMenu ? (
        <>
          <div className="lg:hidden">
            {mobileLevel === "root" ? (
              <div className="space-y-2 px-2 py-2.5">
                {currentQuery ? (
                  <div className="rounded-lg border border-line/70 bg-paper/80 px-3 py-2 text-[0.75rem] text-ink-soft">
                    Từ khóa đang lọc: {currentQuery}
                  </div>
                ) : null}
                {renderRootMenu("mobile")}
              </div>
            ) : (
              renderSidebarContent(true)
            )}
          </div>
          <div className="hidden lg:block">{renderDesktopSidebar()}</div>
        </>
      ) : (
        renderSidebarContent(false)
      )}
    </div>
  );
}
