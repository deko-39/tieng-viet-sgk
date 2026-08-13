import Link from "next/link";
import type { Author } from "@/types/content";

export function AuthorCard({
  author,
  worksCount,
}: {
  author: Author;
  worksCount: number;
}) {
  return (
    <article className="paper-card rounded-[1.8rem] p-6">
      <p className="section-kicker">Tác giả</p>
      <h3 className="mt-2 font-serif text-2xl text-ink">
        <Link href={`/authors/${author.slug}`}>{author.name}</Link>
      </h3>
      <p className="mt-3 text-sm leading-7 text-ink-soft">{author.bio}</p>
      <p className="mt-4 text-sm text-ink-soft">
        {worksCount} tác phẩm trong thư viện mẫu
      </p>
    </article>
  );
}
