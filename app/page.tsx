import { ArrowRight, BookOpenText, LibraryBig } from "lucide-react";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";

export function generateMetadata() {
  return createMetadata({
    title: siteConfig.name,
    description:
      "Thư viện đọc trực tuyến dành cho thơ, đoạn văn và bài học quen thuộc của nhiều thế hệ học sinh Việt Nam.",
    pathname: "/",
    keywords: [
      "thư viện thơ văn Việt Nam",
      "đọc thơ trực tuyến",
      "tiếng việt tiểu học",
    ],
  });
}

export default async function HomePage() {
  const startHref = "/thu-vien/tap-1";

  return (
    <main className="min-h-screen bg-paper">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,24rem)] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-paper/80 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-brick">
              <LibraryBig className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Thư viện thơ văn SGK</span>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                Thư viện thơ văn Việt Nam cho những trang đọc đầu đời.
              </h1>
              <p className="max-w-3xl text-base leading-8 text-ink-soft sm:text-lg">
                Đây là thư viện trực tuyến dành cho thơ, đoạn văn và bài học
                quen thuộc trong sách giáo khoa tiếng Việt. Bạn có thể bắt đầu
                từ một bài đọc đầu tiên, rồi đi tiếp bằng mục lục, hình minh họa
                và điều hướng trước sau như khi lật từng trang sách.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={startHref}
                className="inline-flex h-12 items-center justify-center rounded-full bg-moss px-6 text-sm font-semibold text-paper transition hover:bg-[#5a6851]"
              >
                Bắt đầu đọc
              </Link>
              <ThemeToggleButton />
              <p className="text-sm text-ink-soft">
                Bắt đầu từ bài đọc đầu tiên trong thư viện hiện tại.
              </p>
            </div>
          </div>

          <aside className="paper-card rounded-[1.4rem] p-5 sm:p-6">
            <div className="space-y-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/70 bg-surface text-brick">
                <BookOpenText className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="section-kicker">Mở thư viện</p>
                <h2 className="mt-3 font-serif text-2xl text-ink">
                  Đọc theo sách, bài thơ và đoạn văn quen thuộc
                </h2>
              </div>
              <ul className="space-y-3 text-sm leading-7 text-ink-soft">
                <li className="cursor-pointer rounded-xl border border-line/60 bg-paper/65 px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-brick/45 hover:bg-surface hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <p>Chọn bài đọc từ mục lục sách giáo khoa theo từng tập.</p>
                    <Link
                      href={startHref}
                      className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-line/70 bg-surface px-3 text-xs font-semibold text-ink transition hover:border-brick/50 hover:text-brick"
                    >
                      Mở tập
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </li>
                <li className="cursor-pointer rounded-xl border border-line/60 bg-paper/65 px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-brick/45 hover:bg-surface hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <p>
                      Xem hình minh họa theo đúng thư mục bài học để dễ tự bổ
                      sung.
                    </p>
                    <Link
                      href={startHref}
                      className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-line/70 bg-surface px-3 text-xs font-semibold text-ink transition hover:border-brick/50 hover:text-brick"
                    >
                      Xem ảnh
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </li>
                <li className="cursor-pointer rounded-xl border border-line/60 bg-paper/65 px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-brick/45 hover:bg-surface hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <p>
                      Di chuyển liền mạch giữa các bài bằng nút trước và sau.
                    </p>
                    <Link
                      href={startHref}
                      className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-line/70 bg-surface px-3 text-xs font-semibold text-ink transition hover:border-brick/50 hover:text-brick"
                    >
                      Đọc ngay
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
