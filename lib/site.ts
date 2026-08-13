export const siteConfig = {
  name: "Thư viện thơ và văn Việt Nam",
  description:
    "Thư viện trực tuyến dành cho thơ, đoạn văn và trang sách quen thuộc với nhiều thế hệ học sinh Việt Nam.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thuvienthovan.example",
};

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteConfig.url).toString();
}
