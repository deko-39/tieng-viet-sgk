import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExpandableReaderContent } from "@/components/reader/expandable-reader-content";
import { ReaderActionButtonGroup } from "@/components/reader/reader-action-button-group";
import { ReaderNavigation } from "@/components/reader/reader-navigation";
import { LibrarySidebar } from "@/components/reader/library-sidebar";
import { ReaderShell } from "@/components/reader/reader-shell";
import { SidebarCollapsedRail } from "@/components/reader/sidebar-collapsed-rail";
import { SurroundingPagePrefetch } from "@/components/reader/surrounding-page-prefetch";
import { ContentImage } from "@/components/ui/content-image";
import { StructuredData } from "@/components/ui/structured-data";
import { contentRepository } from "@/lib/content-repository";
import {
  getAuthorMap,
  getTagMap,
  resolveTagsForItem,
} from "@/lib/content-utils";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl, getLastDeploymentLabel } from "@/lib/site";
import {
  buildContentPath,
  buildReaderUrl,
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
  previousItem: ContentItem | null;
  nextItem: ContentItem | null;
  surroundingPageHrefs: string[];
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
      image: selectedItem.image
        ? {
            src: selectedItem.image.src,
            alt: selectedItem.image.alt,
            width: selectedItem.image.width,
            height: selectedItem.image.height,
          }
        : undefined,
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
  const lastDeploymentLabel = await getLastDeploymentLabel();

  if (routeParams && !data.isPathSelection) {
    notFound();
  }

  const {
    groups,
    selectedItem,
    selectedAuthor,
    selectedTags,
    previousItem,
    nextItem,
    surroundingPageHrefs,
    query,
  } = data;
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
      <SurroundingPagePrefetch hrefs={surroundingPageHrefs} />
      <ReaderShell
        lastDeploymentLabel={lastDeploymentLabel}
        desktopRail={<SidebarCollapsedRail currentSection="books" />}
        desktopSidebar={
          <LibrarySidebar
            key="desktop-sidebar"
            groups={groups}
            selectedSlug={selectedItem?.slug ?? null}
            currentQuery={query}
            clearHref={pathname}
            reserveHeaderActionSpace
            rootItems={[
              {
                id: "books",
                href: pathname,
                kicker: "Mục đang đọc",
                label: "Sách",
                description: "Mục lục bài đọc theo sách và tập.",
                isCurrent: true,
              },
              {
                id: "alphabet",
                href: "/bang-chu-cai",
                kicker: "Học chữ cái",
                label: "Bảng chữ cái",
                description: "Chuyển sang trang học 29 chữ cái tiếng Việt.",
              },
            ]}
          />
        }
        mobileSidebar={
          <LibrarySidebar
            key="mobile-sidebar"
            groups={groups}
            selectedSlug={selectedItem?.slug ?? null}
            currentQuery={query}
            clearHref={pathname}
            rootItems={[
              {
                id: "books",
                href: pathname,
                kicker: "Mục đang đọc",
                label: "Sách",
                description: "Mở mục lục bài đọc theo sách và tập.",
                isCurrent: true,
              },
              {
                id: "alphabet",
                href: "/bang-chu-cai",
                kicker: "Học chữ cái",
                label: "Bảng chữ cái",
                description: "Chuyển sang trang học 29 chữ cái tiếng Việt.",
              },
            ]}
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
                    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1 space-y-2 text-left">
                        <h1 className="text-balance font-serif text-[2.35rem] leading-tight text-ink sm:text-5xl lg:text-[3rem]">
                          {selectedItem.title}
                        </h1>
                        <p className="text-[0.98rem] text-ink-soft sm:text-lg">
                          {selectedAuthor ? selectedAuthor.name : "Khuyết danh"}
                        </p>
                      </div>
                      <ReaderActionButtonGroup
                        contentId={selectedItem.slug}
                        shareUrl={absoluteUrl(selectedPath)}
                        title={selectedItem.title}
                        authorName={selectedAuthor?.name ?? "Khuyết danh"}
                        content={selectedItem.content}
                        fullContent={selectedItem.fullContent}
                      />
                    </div>
                    <div className="space-y-3 text-left text-sm text-ink-soft">
                      <p>{selectedTextbookLabel}</p>
                      <div className="reader-divider max-w-xs" />
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
                      <ExpandableReaderContent
                        kind={selectedItem.kind}
                        content={selectedItem.content}
                        fullContent={selectedItem.fullContent}
                      />
                    </div>
                  </div>

                  {selectedItem.image ? (
                    <>
                      <section className="space-y-3 lg:hidden">
                        <ContentImage
                          src={selectedItem.image.src}
                          alt={selectedItem.image.alt}
                          width={selectedItem.image.width}
                          height={selectedItem.image.height}
                          className="h-auto w-full object-cover"
                          wrapperClassName="rounded-[0.9rem]"
                        />
                        {selectedItem.image.caption ? (
                          <p className="text-center text-sm leading-7 text-ink-soft">
                            {selectedItem.image.caption}
                          </p>
                        ) : null}
                      </section>
                      <section className="lg:hidden">
                        <ReaderNavigation
                          previousItem={previousItem}
                          nextItem={nextItem}
                          query={query}
                        />
                      </section>
                    </>
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
              <section className="space-y-4">
                <ContentImage
                  src={selectedItem.image.src}
                  alt={selectedItem.image.alt}
                  width={selectedItem.image.width}
                  height={selectedItem.image.height}
                  className="h-auto w-full object-cover"
                  wrapperClassName="rounded-[0.9rem]"
                />
                {selectedItem.image.caption ? (
                  <p className="text-center text-sm leading-7 text-ink-soft">
                    {selectedItem.image.caption}
                  </p>
                ) : null}
              </section>
              <section className="mt-4">
                <ReaderNavigation
                  previousItem={previousItem}
                  nextItem={nextItem}
                  query={query}
                />
              </section>
            </div>
          ) : undefined
        }
        hasAside={Boolean(selectedItem?.image)}
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
  const navigationItems = query ? matchedItems : orderedItems;
  const selectedIndex = selectedItem
    ? navigationItems.findIndex((item) => item.slug === selectedItem.slug)
    : -1;
  const surroundingPageHrefs =
    selectedIndex >= 0
      ? navigationItems
          .slice(Math.max(0, selectedIndex - 5), selectedIndex + 6)
          .filter((item) => item.slug !== selectedItem?.slug)
          .map((item) =>
            buildReaderUrl(
              query ? { q: query } : {},
              {},
              buildContentPath(item),
            ),
          )
      : [];
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
    previousItem:
      selectedIndex > 0 ? (navigationItems[selectedIndex - 1] ?? null) : null,
    nextItem:
      selectedIndex >= 0 && selectedIndex < navigationItems.length - 1
        ? (navigationItems[selectedIndex + 1] ?? null)
        : null,
    surroundingPageHrefs,
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
