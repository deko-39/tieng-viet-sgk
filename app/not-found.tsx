import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="paper-card mx-auto max-w-3xl rounded-[2rem] p-10 text-center">
        <p className="section-kicker">Không tìm thấy</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">
          Trang này không còn nằm trên giá sách
        </h1>
        <p className="mt-4 text-pretty leading-8 text-ink-soft">
          Đường dẫn bạn mở không khớp với dữ liệu mẫu hiện có. Hãy quay lại
          trang chủ hoặc tìm theo tên tác phẩm, chủ đề và tác giả.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-moss px-5 py-3 text-sm font-semibold text-paper"
          >
            Về trang chủ
          </Link>
          <Link
            href="/search"
            className="rounded-full border border-line px-5 py-3 text-sm text-ink"
          >
            Đi đến tìm kiếm
          </Link>
        </div>
      </div>
    </Container>
  );
}
