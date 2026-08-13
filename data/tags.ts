import { slugify } from "@/lib/slug";
import type { Tag } from "@/types/content";

function createTag(
  name: string,
  group: Tag["group"],
  description?: string,
): Tag {
  return {
    id: slugify(name),
    slug: slugify(name),
    name,
    group,
    description,
  };
}

export const tags: Tag[] = [
  ...Array.from({ length: 5 }, (_, index) => {
    const grade = index + 1;

    return [
      createTag(
        `Tiếng Việt ${grade} - Tập 1`,
        "textbook",
        `Những bài thơ và đoạn văn thuộc Tiếng Việt ${grade} học kỳ một.`,
      ),
      createTag(
        `Tiếng Việt ${grade} - Tập 2`,
        "textbook",
        `Những bài đọc thuộc Tiếng Việt ${grade} học kỳ hai, giàu chất học đường và tuổi thơ.`,
      ),
    ];
  }).flat(),
  ...Array.from({ length: 7 }, (_, index) => {
    const grade = index + 6;

    return [
      createTag(
        `Ngữ văn ${grade} - Tập 1`,
        "textbook",
        `Những tác phẩm thuộc Ngữ văn ${grade} học kỳ một.`,
      ),
      createTag(
        `Ngữ văn ${grade} - Tập 2`,
        "textbook",
        `Những tác phẩm thuộc Ngữ văn ${grade} học kỳ hai.`,
      ),
    ];
  }).flat(),
  createTag(
    "Thơ",
    "format",
    "Nội dung được trình bày theo nhịp thơ, ưu tiên trải nghiệm đọc.",
  ),
  createTag(
    "Đoạn văn",
    "format",
    "Những đoạn trích ngắn, văn xuôi, ghi chú và bài đọc.",
  ),
  createTag(
    "Văn học Việt Nam",
    "audience",
    "Tác phẩm và trích đoạn thuộc mạch đọc văn học Việt Nam.",
  ),
  createTag(
    "Văn học thiếu nhi",
    "audience",
    "Nội dung gần gũi với tuổi thơ và ký ức học đường.",
  ),
  createTag(
    "Thơ thiếu nhi",
    "audience",
    "Những bài thơ giàu nhịp điệu, dễ đọc, dễ thuộc.",
  ),
  createTag(
    "Gia đình",
    "theme",
    "Chủ đề gia đình, tình thân và những hình ảnh gần gũi.",
  ),
  createTag(
    "Quê hương",
    "theme",
    "Chủ đề làng quê, nơi chốn thân thuộc và nỗi nhớ quê.",
  ),
  createTag(
    "Đất nước",
    "theme",
    "Các bài đọc và bài thơ gợi cảm hứng về đất nước Việt Nam.",
  ),
  createTag("Mẹ", "theme", "Tập trung vào tình mẫu tử và ký ức về mẹ."),
  createTag(
    "Trường học",
    "theme",
    "Nhịp sống lớp học, tiếng trống trường và bạn bè.",
  ),
  createTag(
    "Tuổi thơ",
    "theme",
    "Những kỷ niệm trong sáng, gần gũi với học sinh.",
  ),
  createTag(
    "Thiên nhiên",
    "theme",
    "Hình ảnh cây cối, mùa màng, bầu trời và nhịp mùa.",
  ),
  createTag("Mùa xuân", "theme", "Không khí đầu năm, sắc trời và sự đổi mùa."),
  createTag(
    "Mùa thu",
    "theme",
    "Những chuyển động dịu của thời tiết, sân trường và ký ức.",
  ),
  createTag(
    "Tình bạn",
    "theme",
    "Nhịp bạn bè, sẻ chia và những kỷ niệm chung.",
  ),
  createTag(
    "Người lính",
    "theme",
    "Những hình tượng về chiến sĩ, trách nhiệm và lòng can đảm.",
  ),
  createTag(
    "Biển đảo",
    "theme",
    "Không gian biển, sóng nước và chân trời Việt Nam.",
  ),
  createTag(
    "Lao động",
    "theme",
    "Nhịp sống lao động, mùa màng và đôi bàn tay làm nên cuộc sống.",
  ),
  createTag(
    "Thành phố",
    "theme",
    "Nhịp phố, mái ngói, con đường và đời sống đô thị Việt Nam.",
  ),
  createTag(
    "Ước mơ",
    "theme",
    "Khát vọng học tập, trưởng thành và hướng tới tương lai.",
  ),
  createTag(
    "2000s học đường",
    "period",
    "Những tác phẩm gợi ký ức sách giáo khoa và tập vở đầu những năm 2000.",
  ),
];
