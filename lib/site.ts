const DEFAULT_SITE_URL = "https://tieng-viet-sgk.vercel.app";

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return null;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return null;
  }

  const withProtocol = /^https?:\/\//i.test(trimmedValue)
    ? trimmedValue
    : `https://${trimmedValue}`;

  try {
    const url = new URL(withProtocol);

    if (
      url.hostname === "localhost" ||
      url.hostname.endsWith(".example") ||
      url.hostname === "example"
    ) {
      return null;
    }

    return url.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

const resolvedSiteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.SITE_URL) ??
  normalizeSiteUrl(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined,
  ) ??
  DEFAULT_SITE_URL;

export const siteConfig = {
  name: "Thư viện thơ và văn Việt Nam",
  description:
    "Thư viện trực tuyến dành cho thơ, đoạn văn và trang sách quen thuộc với nhiều thế hệ học sinh Việt Nam.",
  url: resolvedSiteUrl,
};

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteConfig.url).toString();
}
