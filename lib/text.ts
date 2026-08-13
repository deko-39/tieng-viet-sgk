import { stripVietnameseDiacritics } from "@/lib/slug";

export function normalizeVietnameseText(value: string) {
  return stripVietnameseDiacritics(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatVietnameseList(values: string[]) {
  return new Intl.ListFormat("vi", {
    style: "long",
    type: "conjunction",
  }).format(values);
}
