import Link from "next/link";
import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-surface/80 py-10">
      <Container className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="section-kicker">Thư viện văn học</p>
          <h2 className="font-serif text-2xl text-ink">
            Một góc đọc chậm cho thơ và đoạn văn Việt Nam
          </h2>
          <p className="max-w-xl text-sm leading-7 text-ink-soft">
            Giao diện này dùng dữ liệu mẫu để mô phỏng một thư viện văn học Việt
            Nam giàu khả năng tìm kiếm, lọc theo sách giáo khoa và sẵn sàng kết
            nối backend sau này.
          </p>
        </div>
        <div className="space-y-3 text-sm text-ink-soft">
          <p className="font-semibold uppercase tracking-[0.18em] text-brick">
            Khám phá
          </p>
          <Link href="/poems">Thơ</Link>
          <Link href="/paragraphs">Đoạn văn</Link>
          <Link href="/search">Tìm kiếm</Link>
        </div>
        <div className="space-y-3 text-sm text-ink-soft">
          <p className="font-semibold uppercase tracking-[0.18em] text-brick">
            Chủ đề nổi bật
          </p>
          <Link href="/tags/que-huong">Quê hương</Link>
          <Link href="/tags/gia-dinh">Gia đình</Link>
          <Link href="/tags/truong-hoc">Trường học</Link>
        </div>
      </Container>
    </footer>
  );
}
