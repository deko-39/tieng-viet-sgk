import { AlphabetIllustrationBrowser } from "@/components/reader/alphabet-illustration-browser";
import { AlphabetSidebarNavigation } from "@/components/reader/alphabet-sidebar-navigation";
import { ReaderShell } from "@/components/reader/reader-shell";
import { SidebarCollapsedRail } from "@/components/reader/sidebar-collapsed-rail";
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
      desktopRail={<SidebarCollapsedRail currentSection="alphabet" />}
      desktopSidebar={<AlphabetSidebarNavigation />}
      mobileSidebar={<AlphabetSidebarNavigation />}
      content={
        <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          <AlphabetIllustrationBrowser letters={ALPHABET_LETTERS} />
        </div>
      }
      hasAside={false}
    />
  );
}
