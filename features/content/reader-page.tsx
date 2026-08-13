import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpenText } from "lucide-react";
import { notFound } from "next/navigation";
import { LibrarySidebar } from "@/components/reader/library-sidebar";
import { ReaderShell } from "@/components/reader/reader-shell";
import { StructuredData } from "@/components/ui/structured-data";
import { contentRepository } from "@/lib/content-repository";
import {
  getAuthorMap,
  getTagMap,
  resolveTagsForItem,
} from "@/lib/content-utils";
import { createMetadata } from "@/lib/metadata";
import {
  buildContentPath,
  buildVolumePath,
  getRouteInfo,
  getSearchQuery,
  matchesContentRoute,
} from "@/lib/reader-url";
import {
  createBreadcrumbJsonLd,
  createCreativeWorkJsonLd,
  createWebSiteJsonLd,
} from "@/lib/structured-data";
import type { Author, ContentItem, Tag, Textbook } from "@/types/content";

type SearchParams = Record<string, string | string[] | undefined>;

interface ReaderRouteParams {
  textbook: string;
  volume: string;
  slug: string;
}

interface ReaderPageInput {
  pathname: string;
  searchParams: SearchParams;
  routeParams?: ReaderRouteParams;
}

interface LibraryGroup {
  id: string;
  title: string;
  volumes: Array<{
    id: string;
    title: string;
    items: ContentItem[];
  }>;
}

interface LoadedReaderData {
  groups: LibraryGroup[];
  selectedItem: ContentItem | null;
  selectedAuthor: Author | null;
  selectedTags: Tag[];
  query: string;
  isPathSelection: boolean;
}

export async function generateReaderMetadata({
  pathname,
  searchParams,
  routeParams,
}: ReaderPageInput): Promise<Metadata> {
  const data = await loadReaderData({ searchParams, routeParams });

  if (routeParams && !data.isPathSelection) {
    return createMetadata({
      title: "Không tìm thấy bài đọc",
      description: "Bài đọc bạn tìm không còn trong thư viện hiện tại.",
      pathname,
    });
  }

  if (routeParams && data.selectedItem) {
    const selectedItem = data.selectedItem;
    const routeInfo = getRouteInfo(selectedItem.textbook, selectedItem.volume);
    const textbookLabel = [routeInfo.textbookTitle, routeInfo.volumeTitle]
      .filter(Boolean)
      .join(" ");

    return createMetadata({
      title: `${selectedItem.title}${data.selectedAuthor ? ` - ${data.selectedAuthor.name}` : ""} | ${textbookLabel}`,
      description: `Đọc ${selectedItem.kind === "poem" ? "bài thơ" : "đoạn văn"} ${selectedItem.title}${data.selectedAuthor ? ` của ${data.selectedAuthor.name}` : ""}${textbookLabel ? ` trong ${textbookLabel}` : ""}. ${selectedItem.excerpt}`,
      pathname,
      keywords: data.selectedTags.map((tag) => tag.name),
    });
  }

  return createMetadata({
    title: "Thư viện thơ và văn Việt Nam",
    description:
      "Giao diện đọc một trang, lấy cảm hứng từ sách giáo khoa Việt Nam đầu những năm 2000, để đọc thơ và đoạn văn theo mục lục sách.",
    pathname: "/",
    keywords: [
      "thư viện thơ văn Việt Nam",
      "tiếng việt tiểu học",
      "đọc thơ trực tuyến",
    ],
  });
}

export async function renderReaderPage({
  pathname,
  searchParams,
  routeParams,
}: ReaderPageInput) {
  const data = await loadReaderData({ searchParams, routeParams });

  if (routeParams && !data.isPathSelection) {
    notFound();
  }

  const { groups, selectedItem, selectedAuthor, selectedTags, query } = data;
  const selectedPath = selectedItem ? buildContentPath(selectedItem) : pathname;
  const routeInfo = selectedItem
    ? getRouteInfo(selectedItem.textbook, selectedItem.volume)
    : null;
  const selectedTextbookLabel = routeInfo
    ? [routeInfo.textbookTitle, routeInfo.volumeTitle].join(" · ")
    : [selectedItem?.textbook, selectedItem?.volume]
        .filter(Boolean)
        .join(" · ");
  const volumePath = selectedItem ? buildVolumePath(selectedItem) : "/";
  const breadcrumbData =
    selectedItem && routeInfo && routeParams
      ? createBreadcrumbJsonLd([
          { name: "Thư viện", path: "/" },
          {
            name: `${routeInfo.textbookTitle} ${routeInfo.volumeTitle}`,
            path: volumePath,
          },
          { name: selectedItem.title, path: selectedPath },
        ])
      : null;

  return (
    <>
      <StructuredData data={createWebSiteJsonLd()} />
      {routeParams && selectedItem ? (
        <StructuredData
          data={createCreativeWorkJsonLd(
            selectedItem,
            selectedAuthor,
            selectedTags,
            selectedPath,
          )}
        />
      ) : null}
      {breadcrumbData ? <StructuredData data={breadcrumbData} /> : null}
      <ReaderShell
        search={
          <form
            action={pathname}
            role="search"
            className="paper-card flex flex-col gap-3 rounded-xl p-3 sm:flex-row sm:items-center"
          >
            <label htmlFor="reader-search" className="sr-only">
              Tìm bài thơ, đoạn văn, tác giả
            </label>
            <input
              id="reader-search"
              name="q"
              defaultValue={query}
              placeholder="Tìm bài thơ, đoạn văn, tác giả..."
              className="h-11 w-full rounded-lg border border-line bg-paper px-4 text-sm text-ink outline-none placeholder:text-ink-soft/70"
            />
            <div className="flex items-center gap-2 sm:shrink-0">
              <button className="h-11 rounded-lg bg-moss px-4 text-sm font-semibold text-paper transition hover:bg-[#5a6851]">
                Tìm
              </button>
              {query ? (
                <Link
                  href={pathname}
                  className="inline-flex h-11 items-center rounded-lg border border-line bg-paper px-4 text-sm text-ink-soft transition hover:text-ink"
                >
                  Xóa
                </Link>
              ) : null}
            </div>
          </form>
        }
        desktopRail={
          <div className="flex h-full flex-col items-center justify-between gap-1 px-1.5 py-3 text-ink-soft">
            <span className="[writing-mode:vertical-rl] rotate-180 text-[0.62rem] uppercase tracking-[0.22em]">
              Sách
            </span>
            <BookOpenText
              className="h-3.5 w-3.5 text-brick"
              aria-hidden="true"
            />
          </div>
        }
        desktopSidebar={
          <LibrarySidebar
            key="desktop-sidebar"
            groups={groups}
            selectedSlug={selectedItem?.slug ?? null}
            currentQuery={query}
            clearHref={pathname}
          />
        }
        mobileSidebar={
          <LibrarySidebar
            key="mobile-sidebar"
            groups={groups}
            selectedSlug={selectedItem?.slug ?? null}
            currentQuery={query}
            clearHref={pathname}
          />
        }
        content={
          <div className="flex min-h-full flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
            {selectedItem ? (
              <article className="mx-auto flex w-full max-w-[54rem] flex-1 flex-col justify-center">
                <div className="space-y-6 lg:space-y-8">
                  <header className="rounded-[1.2rem] border border-line/55 bg-paper/42 px-4 py-5 text-center shadow-[0_12px_32px_rgba(63,44,22,0.06)] sm:px-6">
                    {routeInfo ? (
                      <nav
                        aria-label="Dấu trang sách"
                        className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft"
                      >
                        <ol className="flex flex-wrap items-center justify-center gap-2">
                          <li>{routeInfo.textbookTitle}</li>
                          <li aria-hidden="true">/</li>
                          <li>{routeInfo.volumeTitle}</li>
                          <li aria-hidden="true">/</li>
                          <li className="reader-current-breadcrumb">
                            {selectedItem.title}
                          </li>
                        </ol>
                      </nav>
                    ) : null}
                    <div className="mt-5 space-y-2">
                      <h1 className="text-balance font-serif text-[2.35rem] leading-tight text-ink sm:text-5xl lg:text-[3rem]">
                        {selectedItem.title}
                      </h1>
                      <p className="text-[0.98rem] text-ink-soft sm:text-lg">
                        {selectedAuthor ? selectedAuthor.name : "Khuyết danh"}
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-ink-soft">
                      <p>{selectedTextbookLabel}</p>
                      <div className="reader-divider mx-auto max-w-xs" />
                    </div>
                  </header>

                  <div className="reading-surface editorial-frame rounded-[1rem] px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                    <div
                      className={`mx-auto ${
                        selectedItem.kind === "poem"
                          ? "max-w-[33rem]"
                          : "max-w-[39rem]"
                      }`}
                    >
                      <div
                        className={
                          selectedItem.kind === "poem"
                            ? "poem-lines text-center text-ink"
                            : "paragraph-body text-left text-ink"
                        }
                      >
                        {selectedItem.content}
                      </div>
                    </div>
                  </div>

                  {selectedItem.image ? (
                    <section className="space-y-3 lg:hidden">
                      <div className="overflow-hidden rounded-[0.9rem] bg-paper">
                        <Image
                          src={selectedItem.image.src}
                          alt={selectedItem.image.alt}
                          width={selectedItem.image.width}
                          height={selectedItem.image.height}
                          className="h-auto w-full object-cover"
                          priority
                        />
                      </div>
                      {selectedItem.image.caption ? (
                        <p className="text-center text-sm leading-7 text-ink-soft">
                          {selectedItem.image.caption}
                        </p>
                      ) : null}
                    </section>
                  ) : null}

                  <footer className="space-y-4 border-t border-line/60 pt-4 text-sm leading-7 text-ink-soft">
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.72rem] uppercase tracking-[0.18em] text-brick sm:justify-start">
                      {selectedTags.map((tag, index) => (
                        <span
                          key={`${tag.slug}-${index}`}
                          className="inline-flex items-center gap-3"
                        >
                          {index > 0 ? <span aria-hidden="true">·</span> : null}
                          <span>{tag.name}</span>
                        </span>
                      ))}
                    </div>
                    <p>{selectedItem.excerpt}</p>
                    {selectedItem.source ? <p>{selectedItem.source}</p> : null}
                  </footer>
                </div>
              </article>
            ) : (
              <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center">
                <p className="section-kicker">Thư viện</p>
                <h1 className="mt-4 font-serif text-4xl text-ink">
                  Chưa có bài đọc phù hợp
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-ink-soft">
                  Hãy chọn một mục trong sách ở thanh bên hoặc bỏ từ khóa tìm
                  kiếm để quay về mục lục đầy đủ.
                </p>
                <Link
                  href={pathname}
                  className="mt-6 rounded-full border border-line bg-paper px-5 py-3 text-sm text-ink transition hover:border-line-strong"
                >
                  Xem lại mục lục
                </Link>
              </div>
            )}
          </div>
        }
        desktopAside={
          selectedItem?.image ? (
            <div className="flex flex-col px-5 py-6">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[0.9rem] bg-paper">
                  <Image
                    src={selectedItem.image.src}
                    alt={selectedItem.image.alt}
                    width={selectedItem.image.width}
                    height={selectedItem.image.height}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                {selectedItem.image.caption ? (
                  <p className="text-center text-sm leading-7 text-ink-soft">
                    {selectedItem.image.caption}
                  </p>
                ) : null}
              </div>
            </div>
          ) : undefined
        }
        hasAside={Boolean(selectedItem?.image)}
        initialSearchOpen={Boolean(query)}
      />
    </>
  );
}

async function loadReaderData({
  searchParams,
  routeParams,
}: Omit<ReaderPageInput, "pathname">): Promise<LoadedReaderData> {
  const query = getSearchQuery(searchParams);
  const [allContent, authors, tags, textbooks, searchResults] =
    await Promise.all([
      contentRepository.getAllContent(),
      contentRepository.getAuthors(),
      contentRepository.getTags(),
      contentRepository.getTextbooks(),
      query ? contentRepository.search(query) : Promise.resolve([]),
    ]);

  const authorMap = getAuthorMap(authors);
  const tagMap = getTagMap(tags);
  const orderedItems = orderContent(allContent, textbooks);
  const matchingSlugs = new Set(
    searchResults.map((result) => result.item.slug),
  );
  const matchedItems = query
    ? orderedItems.filter((item) => matchingSlugs.has(item.slug))
    : orderedItems;
  const selectedFromPath = routeParams
    ? (orderedItems.find((item) => matchesContentRoute(item, routeParams)) ??
      null)
    : null;
  const selectedItem =
    selectedFromPath ?? matchedItems[0] ?? orderedItems[0] ?? null;
  const treeItems = query
    ? orderedItems.filter(
        (item) =>
          matchingSlugs.has(item.slug) || item.slug === selectedItem?.slug,
      )
    : orderedItems;
  const selectedAuthor = selectedItem?.authorSlug
    ? (authorMap.get(selectedItem.authorSlug) ?? null)
    : null;

  return {
    groups: buildLibraryGroups(textbooks, treeItems),
    selectedItem,
    selectedAuthor,
    selectedTags: selectedItem ? resolveTagsForItem(selectedItem, tagMap) : [],
    query,
    isPathSelection: Boolean(selectedFromPath || !routeParams),
  };
}

function orderContent(items: ContentItem[], textbooks: Textbook[]) {
  const textbookOrder = new Map(
    textbooks.map((textbook, index) => [textbook.title, index]),
  );

  return [...items].sort((left, right) => {
    const textbookDiff =
      (textbookOrder.get(left.textbook ?? "") ?? Number.MAX_SAFE_INTEGER) -
      (textbookOrder.get(right.textbook ?? "") ?? Number.MAX_SAFE_INTEGER);

    if (textbookDiff !== 0) {
      return textbookDiff;
    }

    return (
      left.title.localeCompare(right.title, "vi") ||
      left.slug.localeCompare(right.slug, "vi")
    );
  });
}

function buildLibraryGroups(textbooks: Textbook[], items: ContentItem[]) {
  const itemsByTextbook = new Map<string, ContentItem[]>();

  for (const item of items) {
    const key = item.textbook ?? "Thư viện";
    const entries = itemsByTextbook.get(key) ?? [];
    entries.push(item);
    itemsByTextbook.set(key, entries);
  }

  const groups = new Map<string, LibraryGroup>();

  for (const textbook of textbooks) {
    const routeInfo = getRouteInfo(textbook.title, textbook.volume);
    const group = groups.get(routeInfo.textbookSlug) ?? {
      id: routeInfo.textbookSlug,
      title: routeInfo.textbookTitle,
      volumes: [],
    };

    group.volumes.push({
      id: `${routeInfo.textbookSlug}-${routeInfo.volumeSlug}`,
      title: routeInfo.volumeTitle,
      items: itemsByTextbook.get(textbook.title) ?? [],
    });
    groups.set(routeInfo.textbookSlug, group);
  }

  return Array.from(groups.values());
}
