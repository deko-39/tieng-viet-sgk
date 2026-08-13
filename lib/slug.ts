const combiningMarks = /[\u0300-\u036f]/g;
const punctuation = /[^a-z0-9\s-]/g;
const separator = /\s+/g;
const duplicateDash = /-+/g;

export function stripVietnameseDiacritics(value: string) {
  return value
    .normalize("NFD")
    .replace(combiningMarks, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export function slugify(value: string) {
  return stripVietnameseDiacritics(value)
    .toLowerCase()
    .replace(punctuation, "")
    .trim()
    .replace(separator, "-")
    .replace(duplicateDash, "-");
}
