import Link from "next/link";
import { TagChip } from "@/components/tags/tag-chip";
import type { Author, ContentItem, Tag } from "@/types/content";

export function ContentCard({
  item,
  author,
  tags,
}: {
  item: ContentItem;
  author: Author | null;
  tags: Tag[];
}) {
  const href = `/${item.kind === "poem" ? "poems" : "paragraphs"}/${item.slug}`;

  return (
    <article className="paper-card rounded-[1.8rem] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_22px_42px_rgba(70,50,24,0.12)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="section-kicker">
            {item.kind === "poem" ? "Thơ" : "Đoạn văn"}
          </p>
          <h3 className="mt-2 font-serif text-2xl text-ink">
            <Link href={href}>{item.title}</Link>
          </h3>
        </div>
        {item.textbook ? (
          <span className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft">
            {item.textbook}
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-ink-soft">{item.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.slice(0, 3).map((tag) => (
          <TagChip key={tag.slug} href={`/tags/${tag.slug}`} label={tag.name} />
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line/70 pt-4 text-sm text-ink-soft">
        <span>{author?.name ?? "Khuyết danh"}</span>
        <Link href={href} className="font-semibold text-brick">
          Đọc tiếp
        </Link>
      </div>
    </article>
  );
}
