import Link from "next/link";
import type { Author, CollectionFilters, Tag } from "@/types/content";

interface FilterPanelProps {
  pathname: string;
  filters: CollectionFilters;
  tags: Tag[];
  categories: string[];
  authors: Author[];
}

export function FilterPanel({
  pathname,
  filters,
  tags,
  categories,
  authors,
}: FilterPanelProps) {
  const textbookTags = tags.filter((tag) => tag.group === "textbook");
  const themeTags = tags.filter((tag) => tag.group === "theme");

  return (
    <form
      action={pathname}
      className="space-y-6 rounded-[1.75rem] border border-line bg-surface p-5"
    >
      <div className="space-y-2">
        <label htmlFor="sidebar-q" className="text-sm font-semibold text-brick">
          Tìm kiếm
        </label>
        <input
          id="sidebar-q"
          name="q"
          defaultValue={filters.q}
          placeholder="Tìm bài thơ, tác giả..."
          className="h-11 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm outline-none"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="sort" className="text-sm font-semibold text-brick">
          Sắp xếp
        </label>
        <select
          id="sort"
          name="sort"
          defaultValue={filters.sort}
          className="h-11 w-full rounded-2xl border border-line bg-white/80 px-4 text-sm outline-none"
        >
          <option value="newest">Mới thêm gần đây</option>
          <option value="title">Theo tên tác phẩm</option>
          <option value="author">Theo tác giả</option>
        </select>
      </div>
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-brick">
          Tiếng Việt và Ngữ văn
        </legend>
        {textbookTags.map((tag) => (
          <label
            key={tag.slug}
            className="flex items-center gap-3 text-sm text-ink-soft"
          >
            <input
              type="checkbox"
              name="tag"
              value={tag.slug}
              defaultChecked={filters.tags.includes(tag.slug)}
              className="h-4 w-4 accent-[--color-brick]"
            />
            <span>{tag.name}</span>
          </label>
        ))}
      </fieldset>
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-brick">Chủ đề</legend>
        {themeTags.map((tag) => (
          <label
            key={tag.slug}
            className="flex items-center gap-3 text-sm text-ink-soft"
          >
            <input
              type="checkbox"
              name="tag"
              value={tag.slug}
              defaultChecked={filters.tags.includes(tag.slug)}
              className="h-4 w-4 accent-[--color-brick]"
            />
            <span>{tag.name}</span>
          </label>
        ))}
      </fieldset>
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-brick">Thể loại</legend>
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-3 text-sm text-ink-soft"
          >
            <input
              type="checkbox"
              name="category"
              value={category}
              defaultChecked={filters.categories.includes(category)}
              className="h-4 w-4 accent-[--color-brick]"
            />
            <span>{category}</span>
          </label>
        ))}
      </fieldset>
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-brick">Tác giả</legend>
        {authors.map((author) => (
          <label
            key={author.slug}
            className="flex items-center gap-3 text-sm text-ink-soft"
          >
            <input
              type="checkbox"
              name="author"
              value={author.slug}
              defaultChecked={filters.authors.includes(author.slug)}
              className="h-4 w-4 accent-[--color-brick]"
            />
            <span>{author.name}</span>
          </label>
        ))}
      </fieldset>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-paper">
          Áp dụng
        </button>
        <Link
          href={pathname}
          className="rounded-full border border-line px-5 py-2.5 text-sm text-ink"
        >
          Xóa bộ lọc
        </Link>
      </div>
    </form>
  );
}
