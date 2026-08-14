import { ArrowLeft, History } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { changelogEntries } from "@/data/changelog";
import { createMetadata } from "@/lib/metadata";

function groupEntriesByDate() {
  const groups = new Map<string, (typeof changelogEntries)[number][]>();

  for (const entry of changelogEntries) {
    const entries = groups.get(entry.date) ?? [];
    entries.push(entry);
    groups.set(entry.date, entries);
  }

  return Array.from(groups.entries());
}

export function generateMetadata() {
  return createMetadata({
    title: "Nhật ký cập nhật",
    description:
      "Theo dõi các thay đổi mới nhất của thư viện thơ và văn Việt Nam.",
    pathname: "/changelog",
    keywords: ["nhật ký cập nhật", "cập nhật thư viện", "thay đổi mới"],
  });
}

export default function ChangelogPage() {
  const changelogGroups = groupEntriesByDate();

  return (
    <main className="min-h-screen bg-paper py-8 sm:py-12">
      <Container>
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-paper/80 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-brick">
                <History className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Nhật ký cập nhật</span>
              </div>
              <div className="space-y-1.5">
                <h1 className="font-serif text-3xl text-ink sm:text-4xl">
                  Những cập nhật mới của thư viện
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">
                  Ghi lại các thay đổi về nội dung, giao diện và trải nghiệm đọc
                  để bạn dễ theo dõi những gì vừa được bổ sung.
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-semibold text-ink transition hover:border-brick/45 hover:text-brick"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Về trang chủ</span>
            </Link>
          </div>

          <div className="space-y-5">
            {changelogGroups.map(([date, entries]) => (
              <section
                key={date}
                className="grid gap-3 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-4"
              >
                <div className="sm:pt-3">
                  <p className="section-kicker">{date}</p>
                </div>
                <div className="space-y-3">
                  {entries.map((entry) => (
                    <article
                      key={entry.id}
                      className="paper-card rounded-[1.15rem] px-4 py-4 sm:px-5 sm:py-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brick" />
                        <div className="min-w-0 flex-1 space-y-2">
                          <div className="space-y-1">
                            <h2 className="font-serif text-xl leading-snug text-ink sm:text-[1.35rem]">
                              {entry.title}
                            </h2>
                            <p className="text-sm leading-6 text-ink-soft sm:text-[0.95rem]">
                              {entry.description}
                            </p>
                          </div>
                          <ul className="space-y-2 text-sm leading-6 text-ink-soft">
                            {entry.changes.map((change) => (
                              <li
                                key={change}
                                className="flex items-start gap-2"
                              >
                                <span className="mt-[0.45rem] inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-line-strong" />
                                <span>{change}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
