export interface ChangelogEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  changes: string[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    id: "2026-08-14-changelog-vietnamese-labels",
    date: "2026-08-14",
    title: "Trang cập nhật được đổi tên sang tiếng Việt",
    description:
      "Các nhãn hiển thị liên quan đến changelog giờ dùng tiếng Việt để đồng nhất hơn với toàn bộ thư viện.",
    changes: [
      "Tên trang đổi thành Nhật ký cập nhật.",
      "Nút mở changelog trong trang chủ và giao diện đọc được đổi sang nhãn tiếng Việt dễ hiểu hơn.",
      "Các từ khóa hiển thị của trang cập nhật cũng được đồng bộ sang tiếng Việt.",
    ],
  },
  {
    id: "2026-08-14-changelog-compact-layout",
    date: "2026-08-14",
    title: "Trang changelog hiển thị gọn hơn",
    description:
      "Trang cập nhật được thu gọn lại để xem nhanh nhiều thay đổi hơn trong cùng một màn hình.",
    changes: [
      "Các cập nhật được nhóm theo từng ngày để bớt lặp lại ngày tháng.",
      "Mỗi mục đổi sang bố cục ngắn gọn hơn, dễ lướt và dễ đọc hơn.",
      "Các chi tiết thay đổi vẫn giữ đủ nội dung nhưng chiếm ít chỗ hơn trước.",
    ],
  },
  {
    id: "2026-08-14-changelog-page",
    date: "2026-08-14",
    title: "Có thêm trang changelog để theo dõi cập nhật",
    description:
      "Thư viện giờ có một nơi riêng để người đọc xem những tính năng mới và nội dung vừa được bổ sung.",
    changes: [
      "Có nút mở changelog ngay trong phần đầu trang đọc.",
      "Trang changelog tổng hợp các thay đổi mới theo từng ngày cập nhật.",
      "Các ghi chú cập nhật được viết theo ngôn ngữ gần gũi để dễ theo dõi hơn.",
    ],
  },
  {
    id: "2026-08-14-reader-actions",
    date: "2026-08-14",
    title: "Trang đọc có thêm nút thao tác nhanh",
    description:
      "Mỗi bài đọc giờ có thêm các nút thao tác rõ ràng hơn ngay cạnh tiêu đề.",
    changes: [
      "Có thể nghe bài đọc trực tiếp bằng nút loa ngay trong trang đọc.",
      "Có thêm nút thích và không thích để đánh dấu cảm nhận của bạn với từng bài.",
      "Khu vực nút thao tác được sắp xếp gọn lại để dễ dùng hơn trên cả điện thoại và máy tính.",
    ],
  },
  {
    id: "2026-08-14-reader-footer-label",
    date: "2026-08-14",
    title: "Hiển thị thời điểm cập nhật ổn định hơn",
    description:
      "Thông tin cập nhật ở cuối trang đọc giờ nhất quán hơn trong suốt một lần phát hành.",
    changes: [
      "Dòng thời gian cập nhật ở chân trang không còn thay đổi liên tục khi bạn chuyển bài.",
      "Việc theo dõi lần cập nhật gần nhất của thư viện trở nên dễ hiểu hơn.",
    ],
  },
  {
    id: "2026-08-14-tieng-viet-content",
    date: "2026-08-14",
    title: "Bổ sung thêm nội dung Tiếng Việt 1 - Tập 2",
    description:
      "Thư viện tiếp tục được mở rộng với thêm bài thơ, đoạn văn và thư mục minh họa tương ứng.",
    changes: [
      "Bổ sung nhiều bài đọc mới cho Tiếng Việt 1 - Tập 2.",
      "Chỉnh lại tên bài, tên tác giả và hình minh họa ở một số nội dung đã có.",
      "Cập nhật ảnh chia sẻ để phần giới thiệu thư viện đồng nhất hơn khi gửi liên kết.",
    ],
  },
  {
    id: "2026-08-13-library-launch",
    date: "2026-08-13",
    title: "Ra mắt thư viện đọc trực tuyến",
    description:
      "Thư viện bắt đầu mở cửa với giao diện đọc tập trung cho thơ và đoạn văn quen thuộc trong sách giáo khoa.",
    changes: [
      "Có trang chủ để bắt đầu đi vào thư viện theo từng tập sách.",
      "Có giao diện đọc riêng cho từng bài với tiêu đề, tác giả và phần nội dung trình bày dễ đọc.",
      "Bổ sung bố cục phù hợp cho cả điện thoại và máy tính ngay từ đầu.",
    ],
  },
  {
    id: "2026-08-13-library-navigation",
    date: "2026-08-13",
    title: "Thêm mục lục và điều hướng giữa các bài",
    description:
      "Người đọc có thể đi tiếp trong thư viện theo cách gần với việc lật từng trang sách.",
    changes: [
      "Có mục lục theo sách và theo tập để chọn bài nhanh hơn.",
      "Có nút trước và sau để chuyển liền mạch giữa các bài đọc.",
      "Có hình minh họa đi kèm ở những bài đã được bổ sung ảnh.",
    ],
  },
  {
    id: "2026-08-13-search-and-browse",
    date: "2026-08-13",
    title: "Mở thêm cách tìm và khám phá nội dung",
    description:
      "Ngoài việc đọc theo mục lục, thư viện bắt đầu có thêm các lối vào để tìm bài phù hợp hơn với từng người đọc.",
    changes: [
      "Có thể khám phá nội dung theo thơ, đoạn văn, tác giả và thẻ chủ đề.",
      "Có tìm kiếm để mở bài đọc nhanh hơn khi đã biết tên bài hoặc tác giả.",
      "Các trang giới thiệu nội dung được sắp xếp lại để dễ nhìn và dễ chọn hơn.",
    ],
  },
  {
    id: "2026-08-13-tieng-viet-1-tap-1-content",
    date: "2026-08-13",
    title: "Bổ sung thêm nội dung Tiếng Việt 1 - Tập 1",
    description:
      "Những bài đọc đầu tiên của Tiếng Việt 1 - Tập 1 được đưa vào thư viện để người đọc có thể bắt đầu từ đúng mạch quen thuộc của sách.",
    changes: [
      "Có thêm các bài thơ và đoạn văn thuộc Tiếng Việt 1 - Tập 1.",
      "Nội dung được sắp theo đúng mạch đọc đầu đời để dễ theo dõi hơn.",
      "Một số bài đã có hình minh họa đi kèm để trải nghiệm đọc gần với sách hơn.",
    ],
  },
];
