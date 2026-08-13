import { slugify } from "@/lib/slug";
import type { Textbook } from "@/types/content";

function createTextbook(
  title: string,
  grade: string,
  volume: string,
  description: string,
): Textbook {
  return {
    id: slugify(title),
    slug: slugify(title),
    title,
    shortTitle: title.replace(" - ", "\n"),
    grade,
    volume,
    description,
  };
}

export const textbooks: Textbook[] = [
  ...Array.from({ length: 5 }, (_, index) => {
    const grade = index + 1;

    return [
      createTextbook(
        `Tiếng Việt ${grade} - Tập 1`,
        `Lớp ${grade}`,
        "Tập 1",
        `Những bài đọc đầu năm của Tiếng Việt ${grade}, gợi nhịp sách vở và ký ức học đường Việt Nam.`,
      ),
      createTextbook(
        `Tiếng Việt ${grade} - Tập 2`,
        `Lớp ${grade}`,
        "Tập 2",
        `Những văn bản cuối năm của Tiếng Việt ${grade}, mở rộng chủ đề gia đình, quê hương và tuổi thơ.`,
      ),
    ];
  }).flat(),
  ...Array.from({ length: 7 }, (_, index) => {
    const grade = index + 6;

    return [
      createTextbook(
        `Ngữ văn ${grade} - Tập 1`,
        `Lớp ${grade}`,
        "Tập 1",
        `Những tác phẩm thường gặp trong Ngữ văn ${grade} học kỳ một, phù hợp cho trải nghiệm đọc chậm và tra cứu theo sách.`,
      ),
      createTextbook(
        `Ngữ văn ${grade} - Tập 2`,
        `Lớp ${grade}`,
        "Tập 2",
        `Tuyển tập mô phỏng cho Ngữ văn ${grade} học kỳ hai, giữ tinh thần sách giáo khoa và bố cục đọc hiện đại.`,
      ),
    ];
  }).flat(),
];
