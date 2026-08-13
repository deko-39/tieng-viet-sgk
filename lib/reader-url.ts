import { slugify } from "@/lib/slug";
import type { ContentItem } from "@/types/content";

export type ReaderSearchParams = Record<string, string | string[] | undefined>;

type ReaderUpdateValue = string | string[] | undefined;

interface RouteInfo {
  textbookTitle: string;
  textbookSlug: string;
  volumeTitle: string;
  volumeSlug: string;
}

export function buildReaderUrl(
  searchParams: ReaderSearchParams,
  updates: Record<string, ReaderUpdateValue>,
  pathname = "/",
) {
  const nextParams = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (value === undefined || key !== "q") {
      continue;
    }

    if (Array.isArray(value)) {
      for (const entry of value) {
        nextParams.append(key, entry);
      }
      continue;
    }

    nextParams.set(key, value);
  }

  for (const [key, value] of Object.entries(updates)) {
    nextParams.delete(key);

    if (value === undefined || value === "") {
      continue;
    }

    if (Array.isArray(value)) {
      for (const entry of value) {
        nextParams.append(key, entry);
      }
      continue;
    }

    nextParams.set(key, value);
  }

  const query = nextParams.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export function getSearchQuery(searchParams: ReaderSearchParams) {
  const value = searchParams.q;

  if (Array.isArray(value)) {
    return value[0]?.trim() ?? "";
  }

  return value?.trim() ?? "";
}

export function getRouteInfo(
  textbookTitle?: string,
  fallbackVolume?: string,
): RouteInfo {
  const normalizedTitle = textbookTitle?.trim() || "Thư viện";
  const hasInlineVolume = normalizedTitle.includes(" - ");
  const [baseTitle, inlineVolume] = hasInlineVolume
    ? normalizedTitle.split(" - ", 2)
    : [normalizedTitle, undefined];
  const volumeTitle = (fallbackVolume || inlineVolume || "Cả năm").trim();

  return {
    textbookTitle: baseTitle.trim(),
    textbookSlug: slugify(baseTitle.trim()),
    volumeTitle,
    volumeSlug: slugify(volumeTitle),
  };
}

export function buildVolumePath(item: { textbook?: string; volume?: string }) {
  const routeInfo = getRouteInfo(item.textbook, item.volume);
  return `/${routeInfo.textbookSlug}/${routeInfo.volumeSlug}`;
}

export function buildContentPath(item: {
  slug: string;
  textbook?: string;
  volume?: string;
}) {
  return `${buildVolumePath(item)}/${item.slug}`;
}

export function buildContentRouteParams(item: {
  slug: string;
  textbook?: string;
  volume?: string;
}) {
  const routeInfo = getRouteInfo(item.textbook, item.volume);

  return {
    textbook: routeInfo.textbookSlug,
    volume: routeInfo.volumeSlug,
    slug: item.slug,
  };
}

export function matchesContentRoute(
  item: ContentItem,
  routeParams: { textbook: string; volume: string; slug: string },
) {
  const routeInfo = getRouteInfo(item.textbook, item.volume);

  return (
    routeInfo.textbookSlug === routeParams.textbook &&
    routeInfo.volumeSlug === routeParams.volume &&
    item.slug === routeParams.slug
  );
}

export function matchesVolumeRoute(
  item: ContentItem,
  routeParams: { textbook: string; volume: string },
) {
  const routeInfo = getRouteInfo(item.textbook, item.volume);

  return (
    routeInfo.textbookSlug === routeParams.textbook &&
    routeInfo.volumeSlug === routeParams.volume
  );
}
