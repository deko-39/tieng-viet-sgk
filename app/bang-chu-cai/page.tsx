import { ArrowLeft, LibraryBig, SpellCheck } from "lucide-react";
import Link from "next/link";
import { AlphabetSidebarNavigation } from "@/components/reader/alphabet-sidebar-navigation";
import { ReaderShell } from "@/components/reader/reader-shell";
import { createMetadata } from "@/lib/metadata";
import { getLastDeploymentLabel } from "@/lib/site";

const ALPHABET_LETTERS = [
  { letter: "A", example: "áo", note: "Âm a mở rộng, rất quen thuộc." },
  { letter: "Ă", example: "ăn", note: "Âm a ngắn hơn chữ A." },
  { letter: "Â", example: "ân", note: "Âm a trầm và gọn hơn." },
  { letter: "B", example: "bà", note: "Phụ âm môi, phát âm nhẹ." },
  { letter: "C", example: "cá", note: "Thường đi với a, o, u." },
  { letter: "D", example: "dê", note: "Phát âm gần như /z/ ở nhiều vùng." },
  { letter: "Đ", example: "đèn", note: "Khác chữ D vì có gạch ngang." },
  { letter: "E", example: "em", note: "Nguyên âm mở phía trước." },
  { letter: "Ê", example: "ếch", note: "Âm e khép hơn chữ E." },
  { letter: "G", example: "gà", note: "Thường đi với a, o, u." },
  { letter: "H", example: "hoa", note: "Phụ âm bật hơi rõ." },
  {
    letter: "I",
    example: "in",
    note: "Cũng có thể viết là y trong vài trường hợp.",
  },
  { letter: "K", example: "kem", note: "Hay đứng trước e, ê, i." },
  { letter: "L", example: "lá", note: "Đầu lưỡi chạm nhẹ nướu." },
  { letter: "M", example: "mẹ", note: "Phụ âm môi dễ đọc đầu tiên." },
  { letter: "N", example: "na", note: "Âm đầu lưỡi quen thuộc." },
  { letter: "O", example: "ong", note: "Nguyên âm tròn môi vừa." },
  { letter: "Ô", example: "ô", note: "Âm khép hơn chữ O." },
  { letter: "Ơ", example: "ở", note: "Âm đặc trưng của tiếng Việt." },
  { letter: "P", example: "pa-nô", note: "Ít gặp ở đầu tiếng thuần Việt." },
  { letter: "Q", example: "quả", note: "Thường đi cùng u thành qu." },
  { letter: "R", example: "rổ", note: "Phát âm khác nhau tùy vùng." },
  { letter: "S", example: "sen", note: "Phụ âm xát, cần phân biệt với x." },
  { letter: "T", example: "tay", note: "Phụ âm đầu rất phổ biến." },
  { letter: "U", example: "ủ", note: "Nguyên âm tròn môi khép." },
  { letter: "Ư", example: "ưng", note: "Âm riêng nổi bật của tiếng Việt." },
  { letter: "V", example: "ve", note: "Phụ âm môi răng." },
  { letter: "X", example: "xa", note: "Âm nhẹ hơn chữ S." },
  { letter: "Y", example: "y tá", note: "Nhiều lúc làm nguyên âm giống I." },
] as const;

const VOWELS = ["A", "Ă", "Â", "E", "Ê", "I", "O", "Ô", "Ơ", "U", "Ư", "Y"];
const CONSONANTS = ALPHABET_LETTERS.filter(
  ({ letter }) => !VOWELS.includes(letter),
);

export function generateMetadata() {
  return createMetadata({
    title: "Học bảng chữ cái tiếng Việt",
    description:
      "Trang làm quen với 29 chữ cái tiếng Việt, kèm ví dụ và ghi nhớ ngắn cho từng chữ.",
    pathname: "/bang-chu-cai",
    keywords: ["bảng chữ cái tiếng Việt", "học chữ cái", "a b c tiếng Việt"],
  });
}

export default async function AlphabetPage() {
  const lastDeploymentLabel = await getLastDeploymentLabel();

  return (
    <ReaderShell
      lastDeploymentLabel={lastDeploymentLabel}
      desktopRail={
        <div className="flex h-full flex-col items-center justify-between gap-3 px-1.5 pb-3 pt-10 text-ink-soft">
          <div className="flex flex-col items-center gap-2.5">
            <Link
              href="/thu-vien/tap-1"
              className="inline-flex min-h-24 items-center justify-center rounded-lg border border-line/60 bg-paper/55 px-1.5 text-ink-soft transition hover:border-brick/40 hover:bg-surface hover:text-brick"
              aria-label="Mở thư viện sách"
              title="Sách"
            >
              <span className="[writing-mode:vertical-rl] rotate-180 text-[0.62rem] uppercase tracking-[0.22em]">
                Sách
              </span>
            </Link>
            <span
              className="inline-flex min-h-24 items-center justify-center rounded-lg border border-line/60 bg-paper/75 px-1.5 text-brick"
              aria-current="page"
            >
              <span className="[writing-mode:vertical-rl] rotate-180 text-[0.62rem] uppercase tracking-[0.22em]">
                ABC
              </span>
            </span>
          </div>
          <SpellCheck
            className="h-3.5 w-3.5 text-brick/85"
            aria-hidden="true"
          />
        </div>
      }
      desktopSidebar={<AlphabetSidebarNavigation />}
      mobileSidebar={<AlphabetSidebarNavigation />}
      content={
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-paper/80 px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-brick">
                <LibraryBig className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Bảng chữ cái</span>
              </div>
              <div className="space-y-1.5">
                <h1 className="font-serif text-3xl text-ink sm:text-4xl">
                  Học 29 chữ cái tiếng Việt
                </h1>
                <p className="max-w-3xl text-sm leading-7 text-ink-soft sm:text-base">
                  Trang này dành để làm quen với bảng chữ cái tiếng Việt theo
                  cách đơn giản: nhìn mặt chữ, đọc ví dụ ngắn và ghi nhớ điểm
                  khác nhau giữa các chữ dễ nhầm.
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

          <section
            id="tom-tat"
            className="paper-card rounded-[1.2rem] px-4 py-4 sm:px-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft">
                  Tóm tắt nhanh
                </p>
                <h2 className="mt-2 font-serif text-2xl text-ink">
                  Bảng chữ cái tiếng Việt có 29 chữ
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-surface px-4 py-2 text-sm text-ink-soft">
                <SpellCheck className="h-4 w-4 text-brick" aria-hidden="true" />
                <span>12 nguyên âm, 17 phụ âm</span>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-line/60 bg-paper/70 px-4 py-4">
                <p className="section-kicker">Nguyên âm</p>
                <p className="mt-3 text-base leading-7 text-ink">
                  {VOWELS.join(", ")}
                </p>
              </div>
              <div className="rounded-xl border border-line/60 bg-paper/70 px-4 py-4">
                <p className="section-kicker">Mẹo nhớ</p>
                <p className="mt-3 text-sm leading-7 text-ink-soft">
                  Chú ý các cặp dễ nhầm như A - Ă - Â, O - Ô - Ơ, U - Ư và D -
                  Đ.
                </p>
              </div>
            </div>
          </section>

          <section id="toan-bo-chu-cai" className="space-y-4">
            <div className="space-y-1">
              <p className="section-kicker">Toàn bộ chữ cái</p>
              <h2 className="font-serif text-2xl text-ink sm:text-[2rem]">
                Nhìn chữ, đọc ví dụ, nhớ âm
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {ALPHABET_LETTERS.map(({ letter, example, note }) => (
                <article
                  key={letter}
                  className="paper-card rounded-[1.1rem] px-4 py-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-serif text-4xl leading-none text-brick">
                        {letter}
                      </span>
                      <span className="rounded-full border border-line/60 bg-surface px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft">
                        Ví dụ
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-medium text-ink">
                        {example}
                      </p>
                      <p className="text-sm leading-6 text-ink-soft">{note}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <article
              id="phu-am"
              className="paper-card rounded-[1.1rem] px-4 py-4 sm:px-5"
            >
              <p className="section-kicker">Phụ âm</p>
              <h2 className="mt-2 font-serif text-2xl text-ink">
                Các chữ còn lại là phụ âm
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-soft">
                {CONSONANTS.map(({ letter }) => letter).join(", ")}
              </p>
            </article>

            <article
              id="luyen-doc"
              className="paper-card rounded-[1.1rem] px-4 py-4 sm:px-5"
            >
              <p className="section-kicker">Luyện đọc</p>
              <h2 className="mt-2 font-serif text-2xl text-ink">
                Đọc chậm theo nhóm dễ nhầm
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-soft">
                A, Ă, Â · O, Ô, Ơ · U, Ư · D, Đ · S, X. Nhìn kỹ mặt chữ rồi đọc
                thành tiếng để quen dần.
              </p>
            </article>
          </section>
        </div>
      }
      hasAside={false}
    />
  );
}
