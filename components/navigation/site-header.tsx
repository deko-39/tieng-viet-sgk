import Link from "next/link";
import { Container } from "@/components/layout/container";

const textbookLinks = [
  { href: "/tags/tieng-viet-1-tap-1", label: "Tiếng Việt 1 - Tập 1" },
  { href: "/tags/tieng-viet-1-tap-2", label: "Tiếng Việt 1 - Tập 2" },
  { href: "/tags/tieng-viet-2-tap-1", label: "Tiếng Việt 2 - Tập 1" },
  { href: "/tags/tieng-viet-2-tap-2", label: "Tiếng Việt 2 - Tập 2" },
];

const themeLinks = [
  { href: "/tags/que-huong", label: "Quê hương" },
  { href: "/tags/gia-dinh", label: "Gia đình" },
  { href: "/tags/tuoi-tho", label: "Tuổi thơ" },
  { href: "/tags/truong-hoc", label: "Trường học" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/90 backdrop-blur-sm">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <p className="section-kicker">Một thư viện văn Việt</p>
            <p className="truncate font-serif text-xl text-ink sm:text-2xl">
              Thư viện thơ và văn Việt Nam
            </p>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-ink-soft lg:flex">
            <Link href="/poems" className="hover:text-ink">
              Thơ
            </Link>
            <Link href="/paragraphs" className="hover:text-ink">
              Đoạn văn
            </Link>
            <Link href="/authors" className="hover:text-ink">
              Tác giả
            </Link>
            <Link
              href="/search"
              className="rounded-full border border-line px-4 py-2 text-ink hover:border-line-strong"
            >
              Tìm kiếm
            </Link>
          </nav>
          <details className="lg:hidden">
            <summary className="cursor-pointer rounded-full border border-line px-4 py-2 text-sm text-ink marker:hidden">
              Danh mục
            </summary>
            <div className="absolute right-4 top-full mt-3 w-[min(26rem,calc(100vw-2rem))] rounded-3xl border border-line bg-surface p-5 shadow-[0_20px_40px_rgba(70,50,24,0.16)]">
              <div className="grid gap-6 text-sm text-ink-soft sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="font-semibold uppercase tracking-[0.18em] text-brick">
                    Thư viện
                  </p>
                  <Link href="/poems">Thơ</Link>
                  <Link href="/paragraphs">Đoạn văn</Link>
                  <Link href="/authors">Tác giả</Link>
                  <Link href="/search">Tìm kiếm</Link>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold uppercase tracking-[0.18em] text-brick">
                    Sách giáo khoa
                  </p>
                  {textbookLinks.slice(0, 3).map((item) => (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>
        <div className="mt-4 hidden items-center justify-between gap-6 border-t border-line/60 pt-4 text-sm text-ink-soft md:flex">
          <div className="flex flex-wrap gap-3">
            <span className="font-semibold text-brick">Sách giáo khoa</span>
            {textbookLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="font-semibold text-brick">Chủ đề</span>
            {themeLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
