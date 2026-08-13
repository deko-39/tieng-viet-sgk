import Link from "next/link";
import type { Textbook } from "@/types/content";

export function TextbookCard({ textbook }: { textbook: Textbook }) {
  return (
    <Link
      href={`/tags/${textbook.slug}`}
      className="paper-card group flex min-h-44 flex-col justify-between rounded-[1.8rem] p-6 transition hover:-translate-y-0.5 hover:border-line-strong"
    >
      <div>
        <p className="section-kicker">{textbook.grade}</p>
        <h3 className="mt-3 whitespace-pre-line font-serif text-2xl text-ink">
          {textbook.shortTitle}
        </h3>
      </div>
      <p className="text-sm leading-7 text-ink-soft">{textbook.description}</p>
    </Link>
  );
}
