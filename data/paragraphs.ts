import { createPlaceholderImage } from "@/data/content-images";
import type { Paragraph } from "@/types/content";

type ParagraphSeed = Omit<Paragraph, "id" | "kind" | "image" | "addedAt"> & {
  addedAt?: string;
  imageCaption?: string;
  image?: Paragraph["image"];
};

function createParagraph(seed: ParagraphSeed): Paragraph {
  return {
    ...seed,
    id: seed.slug,
    kind: "paragraph",
    addedAt: seed.addedAt ?? "2026-08-13",
    image:
      seed.image === undefined
        ? createPlaceholderImage(
            seed.slug,
            `${seed.title}`,
            seed.imageCaption ?? `<${seed.title}>`,
            seed.textbook,
            seed.volume,
          )
        : seed.image,
  };
}

const paragraphTiengViet1Tap2: Paragraph[] = [
  createParagraph({
    slug: "truong-em",
    title: "Trường em",
    authorSlug: "khuyet-danh",
    content:
      "Trường học là ngôi nhà thứ hai của em.\nỞ trường có cô giáo hiền như mẹ, có nhiều bè bạn thân thiết như anh em. Trường học dạy em thành người tốt.\nTrường học dạy em những điều hay.\nEm rất yêu mái trường của em.",
    excerpt:
      "Đoạn văn ngắn, mộc và gần, phù hợp với mạch đọc lớp 1 về mái trường, cô giáo và bè bạn.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "truong-hoc",
      "gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Học đường", "Thiếu nhi"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "cai-nhan-vo",
    title: "Cái nhãn vở",
    authorSlug: "khuyet-danh",
    content:
      "Bố cho Giang một quyển vở mới. Giữa trang bìa là một chiếc nhãn vở trang trí rất đẹp. Giang lấy bút nắn nót viết tên trường, tên lớp, họ và tên của em vào nhãn vở.\nBố nhìn những dòng chữ ngay ngắn, khen con gái đã tự viết được nhãn vở.",
    excerpt:
      "Đoạn văn ngắn, gần và giàu không khí học đường đầu cấp, phù hợp với mạch đọc lớp 1 về vở mới và việc luyện viết.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "truong-hoc",
      "hoc-tap",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Học đường", "Thiếu nhi"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "nguoi-ban-tot",
    title: "Người bạn tốt",
    authorSlug: "khuyet-danh",
    content:
      "Trong giờ vẽ, Hà bị gãy bút chì. Hà hỏi Cúc:\n- Cúc ơi, cho mình mượn chiếc bút bạn chưa dùng với.\n- Nhưng mình sắp cần đến nó. - Cúc nói.\nNụ ngồi sau thấy vậy liền đưa bút của mình cho Hà.\nKhi tan học, một bên dây đeo cặp của Cúc bị tuột. Em với tay kéo dây lên mà chẳng được. Hà thấy vậy liền chạy đến sửa lại dây đeo, đặt chiếc cặp nằm thật ngay ngắn trên lưng bạn. Cúc đỏ mặt, ngượng nghịu cảm ơn Hà.",
    excerpt:
      "Đoạn văn ngắn, rõ tình huống và ấm áp, phù hợp với mạch đọc lớp 1 về bạn bè, sự giúp đỡ và cách cư xử tốt trong lớp học.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "truong-hoc",
      "tinh-ban",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Học đường", "Thiếu nhi"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "doi-ban-tay-cua-me",
    title: "Đôi bàn tay của mẹ",
    authorSlug: "khuyet-danh",
    content:
      "Bình yêu nhất là đôi bàn tay mẹ. Hằng ngày, đôi bàn tay của mẹ phải làm biết bao nhiêu là việc.\nĐi làm về, mẹ lại đi chợ, nấu cơm. Mẹ còn tắm cho em bé, giặt một chậu tã lót đầy.\nBình yêu lắm đôi bàn tay rám nắng, các ngón tay gầy gầy, xương xương của mẹ.",
    excerpt:
      "Đoạn văn ngắn, mộc và giàu tình cảm gia đình, phù hợp với mạch đọc lớp 1 về mẹ và công việc hằng ngày.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "gia-dinh",
      "me",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Gia đình", "Thiếu nhi"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "hai-chi-em",
    title: "Hai chị em",
    authorSlug: "khuyet-danh",
    content:
      "Hai chị em đang chơi vui vẻ trước đống đồ chơi. Bỗng cậu em nói:\n- Chị đừng động vào con gấu bông của em.\nMột lát sau, chị lên dây cót chiếc ô tô nhỏ. Em hét lên:\n- Chị hãy chơi đồ chơi của chị ấy.\nChị giận bỏ đi học bài. Ngồi chơi một mình, chỉ một lát sau, cậu em đã cảm thấy buồn chán.",
    excerpt:
      "Đoạn văn ngắn, gần gũi và rõ tình huống, phù hợp với mạch đọc lớp 1 về anh chị em, đồ chơi và cách cư xử khi cùng chơi với nhau.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "gia-dinh",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Gia đình", "Thiếu nhi"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "me-ve",
    title: "Mẹ về",
    authorSlug: "khuyet-danh",
    content:
      "Cậu bé cắt bánh bị đứt tay nhưng không khóc. Mẹ về, cậu mới khóc òa lên. Mẹ cậu hoảng hốt:\n- Con làm sao thế?\n- Con bị đứt tay.\n- Đứt khi nào thế?\n- Lúc nãy ạ!\n- Sao đến bây giờ con mới khóc?\n- Vì bây giờ mẹ mới về.",
    excerpt:
      "Đoạn văn ngắn, giàu tình cảm gia đình và đối thoại tự nhiên, phù hợp với mạch đọc lớp 1 về mẹ và cảm giác an lòng khi mẹ trở về.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "gia-dinh",
      "me",
      "hoi-thoai",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Gia đình", "Thiếu nhi"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "sau-con-mua",
    title: "Sau cơn mưa",
    authorSlug: "vu-tu-nam",
    content:
      'Sau trận mưa rào, mọi vật đều sáng và tươi. Những đoá râm bụt thêm đỏ chói. Bầu trời xanh bóng như vừa được gội rửa. Mấy đám mây bông trôi nhởn nhơ, sáng rực lên trong ánh mặt trời.\nMẹ gà mừng rỡ "tục, tục" dắt bầy con quây quanh vũng nước đọng trong vườn.',
    excerpt:
      "Đoạn văn ngắn, sáng và giàu quan sát, phù hợp với mạch đọc lớp 1 về cơn mưa, khu vườn và cảnh vật tươi mới sau mưa.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "thien-nhien",
      "con-vat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Vũ Tú Nam.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "ve-ngua",
    title: "Vẽ ngựa",
    authorSlug: "khuyet-danh",
    content:
      "Bé vẽ ngựa chẳng ra hình con ngựa. Thế mà bé kể với chị:\n- Chị ơi, bà chưa trông thấy con ngựa bao giờ đâu!\n- Sao em biết? - Chị hỏi.\n- Sáng nay, em vẽ một bức tranh con ngựa, đưa cho bà xem, bà lại hỏi: “Cháu vẽ con gì thế?”.",
    excerpt:
      "Đoạn văn ngắn, dí dỏm và gần lời nói trẻ nhỏ, phù hợp với mạch đọc lớp 1 về hội thoại và trí tưởng tượng của bé.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "tuoi-tho",
      "hoi-thoai",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "hoa-ngoc-lan",
    title: "Hoa ngọc lan",
    authorSlug: "khuyet-danh",
    content:
      "Ở ngay đầu hè nhà bà em có một cây hoa ngọc lan.\nThân cây cao, to, vỏ bạc trắng. Lá dày, cỡ bằng bàn tay, xanh thẫm.\nHoa lan lấp ló qua kẽ lá. Nụ hoa xinh xinh, trắng ngần. Khi hoa nở, cánh xoè ra duyên dáng. Hương lan ngan ngát, toả khắp vườn, khắp nhà.\nVào mùa lan, sáng sáng, bà thường cài một búp lan lên mái tóc em.",
    excerpt:
      "Đoạn văn miêu tả dịu và giàu hương sắc, phù hợp với mạch đọc lớp 1 về cây hoa, khu vườn và tình cảm với bà.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "thien-nhien",
      "hoa-la",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "cay-bang",
    title: "Cây bàng",
    authorSlug: "huu-tuong",
    content:
      "Ngay giữa sân trường, sừng sững một cây bàng.\nMùa đông, cây vươn dài những cành khẳng khiu, trụi lá. Xuân sang, cành trên cành dưới chi chít những lộc non mơn mởn. Hè về, những tán lá xanh um che mát một khoảng sân trường. Thu đến, từng chùm quả chín vàng trong kẽ lá.",
    excerpt:
      "Đoạn văn ngắn, rõ nhịp bốn mùa và gần không khí sân trường, phù hợp với mạch đọc lớp 1 về cây cối và sự đổi thay của thiên nhiên.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "thien-nhien",
      "truong-hoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Hữu Tưởng.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "dam-sen",
    title: "Đầm sen",
    authorSlug: "khuyet-danh",
    content:
      "Đầm sen ở ven làng. Lá sen màu xanh mát. Lá cao, lá thấp chen nhau, phủ khắp mặt đầm.\nHoa sen đua nhau vươn cao. Khi nở, cánh hoa đỏ nhạt xoè ra, phô đài sen và nhị vàng. Hương sen ngan ngát, thanh khiết. Đài sen khi già thì dẹt lại, xanh thẫm.\nSuốt mùa sen, sáng sáng lại có những người ngồi trên thuyền nan rẽ lá, hái hoa.",
    excerpt:
      "Đoạn văn miêu tả trong trẻo và giàu hình ảnh, phù hợp với mạch đọc lớp 1 về hoa sen, làng quê và vẻ đẹp thiên nhiên.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "thien-nhien",
      "hoa-la",
      "que-huong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "ho-guom",
    title: "Hồ Gươm",
    authorSlug: "ngo-quan-mien",
    content:
      "Nhà tôi ở Hà Nội, cách Hồ Gươm không xa. Từ trên cao nhìn xuống, mặt hồ như một chiếc gương bầu dục khổng lồ, sáng long lanh.\nCầu Thê Húc màu son, cong như con tôm, dẫn vào đền Ngọc Sơn. Mái đền lấp ló bên gốc đa già, rễ lá xum xuê. Xa một chút là Tháp Rùa, tường rêu cổ kính. Tháp xây trên gò đất giữa hồ, cỏ mọc xanh um.",
    excerpt:
      "Đoạn văn miêu tả trong sáng và giàu hình ảnh, phù hợp với mạch đọc lớp 1 về Hà Nội, Hồ Gươm và những địa danh thân thuộc.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "dia-danh",
      "que-huong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Quê hương"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Ngô Quân Miện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "muu-chu-se",
    title: "Mưu chú sẻ",
    authorSlug: "khuyet-danh",
    content:
      "Buổi sớm, một con Mèo chộp được một chú Sẻ. Sẻ hoảng lắm, nhưng nó nén sợ, lễ phép nói:\n- Thưa anh, tại sao một người sạch sẽ như anh trước khi ăn sáng lại không rửa mặt?\nNghe vậy, Mèo bèn đặt Sẻ xuống, đưa hai chân lên vuốt râu, xoa mép. Thế là Sẻ vụt bay đi. Mèo rất tức giận nhưng đã muộn mất rồi.",
    excerpt:
      "Đoạn văn ngắn, dí dỏm và có tình huống rõ, phù hợp với mạch đọc lớp 1 về con vật, đối đáp và sự nhanh trí.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "con-vat",
      "hoi-thoai",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "con-qua-thong-minh",
    title: "Con quạ thông minh",
    authorSlug: "khuyet-danh",
    content:
      "Một con quạ khát nước. Nó tìm thấy một chiếc lọ có nước. Song nước trong lọ có ít, cổ lọ lại cao, nó không sao thò mỏ vào uống được. Quạ liền nghĩ ra một kế. Nó lấy mỏ gắp từng hòn sỏi bỏ vào lọ. Nước dâng lên dần dần. Thế là quạ tha hồ uống.",
    excerpt:
      "Đoạn văn ngắn, sáng rõ và giàu tính kể chuyện, phù hợp với mạch đọc lớp 1 về con vật và sự thông minh trong tình huống khó.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "con-vat",
      "tri-khon",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "noi-doi-hai-than",
    title: "Nói dối hại thân",
    authorSlug: "lep-ton-xtoi",
    content:
      "Một chú bé đang chăn cừu bỗng giả vờ kêu toáng lên:\n– Sói! Sói! Cứu tôi với!\nNghe tiếng kêu cứu, các bác nông dân đang làm việc gần đấy tức tốc chạy tới. Nhưng họ chẳng thấy sói đâu.\nChú bé còn nói dối như vậy vài ba lần nữa. Cuối cùng, sói đến thật. Chú bé hốt hoảng gào xin cứu giúp. Các bác nông dân nghĩ chú nói dối như mọi lần nên vẫn thản nhiên làm việc. Bầy sói chẳng phải sợ ai cả. Chúng tự do ăn thịt hết đàn cừu.",
    excerpt:
      "Đoạn văn kể chuyện ngắn, rõ tình huống và bài học ứng xử, phù hợp với mạch đọc lớp 1 về nói thật và hậu quả của thói nói dối.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "ke-chuyen",
      "pham-chat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Lép Tôn-xtôi.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "bac-dua-thu",
    title: "Bác đưa thư",
    authorSlug: "tran-nguyen-dao",
    content:
      "Bác đưa thư trao cho Minh một bức thư. Đúng là thư của bố rồi. Minh mừng quýnh. Minh muốn chạy thật nhanh vào nhà khoe với mẹ. Nhưng em chợt thấy bác đưa thư mồ hôi nhễ nhại.\nMinh chạy vội vào nhà. Em rót một cốc nước mát lạnh. Hai tay bưng ra, em lễ phép mời bác uống.",
    excerpt:
      "Đoạn văn ngắn, ấm và rõ tình huống, phù hợp với mạch đọc lớp 1 về phép lịch sự, lòng quan tâm và cách cư xử đẹp trong đời sống thường ngày.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "pham-chat",
      "gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Trần Nguyên Đào.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "nguoi-trong-na",
    title: "Người trồng na",
    authorSlug: "khuyet-danh",
    content:
      "Một cụ già lúi húi ngoài vườn, trồng cây na nhỏ. Người hàng xóm thấy vậy, cười bảo:\n– Cụ ơi, cụ nhiều tuổi sao còn trồng na? Cụ trồng chuối có phải hơn không? Chuối mau ra quả. Còn na, chắc gì cụ đã chờ được đến ngày có quả.\nCụ già đáp:\n– Có sao đâu! Tôi không ăn thì con cháu tôi ăn. Chúng sẽ chẳng quên người trồng.",
    excerpt:
      "Đoạn văn kể chuyện ngắn, sáng ý và giàu bài học, phù hợp với mạch đọc lớp 1 về nghĩ cho người khác và việc tốt để lại cho mai sau.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "ke-chuyen",
      "pham-chat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "anh-hung-bien-ca",
    title: "Anh hùng biển cả",
    authorSlug: "le-quang-long",
    content:
      "Cá heo là tay bơi giỏi nhất của biển. Nó có thể bơi nhanh vun vút như tên bắn.\nCá heo sinh con và nuôi con bằng sữa. Nó khôn hơn cả chó, khỉ. Có thể dạy nó canh gác bờ biển, dẫn tàu thuyền vào ra các cảng, săn lùng tàu thuyền giặc. Một chú cá heo ở Biển Đen mới đây đã được thưởng huân chương. Chú cá heo này đã cứu sống một phi công, khi anh nhảy dù xuống biển vì máy bay bị hỏng.",
    excerpt:
      "Đoạn văn ngắn, giàu thông tin và gợi hứng thú khám phá, phù hợp với mạch đọc lớp 1 về loài vật biển và sự dũng cảm.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "con-vat",
      "ke-chuyen",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Lê Quang Long.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "khong-nen-pha-to-chim",
    title: "Không nên phá tổ chim",
    authorSlug: "khuyet-danh",
    content:
      'Thấy trên cành cây có một tổ chích choè, ba con chim non mới nở, tôi liền trèo lên cây, bắt chim non xuống để chơi. Chị tôi thấy vậy, nhẹ nhàng bảo: "Chim non đang sống với mẹ, sao em nỡ bắt nó? Lát nữa chim mẹ về, không thấy con, sẽ buồn lắm đấy. Còn lũ chim non xa mẹ, chúng sẽ chết. Hãy đặt lại chim vào tổ. Sau này chim lớn, chim sẽ hót ca, bay lượn, ăn sâu bọ giúp ích con người".\nNghe lời chị, tôi đem những chú chim non đặt lại vào tổ.',
    excerpt:
      "Đoạn văn kể chuyện ngắn, dịu và rõ bài học, phù hợp với mạch đọc lớp 1 về yêu loài vật, biết sửa sai và không phá tổ chim.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "con-vat",
      "pham-chat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "con-chuot-huenh-hoang",
    title: "Con chuột huênh hoang",
    authorSlug: "khuyet-danh",
    content:
      "Một con Chuột có tính huênh hoang.\nMột lần, Chuột rơi bộp xuống giữa một đàn Thỏ. Bọn Thỏ giật mình ba chân bốn cẳng bỏ chạy. Chuột tưởng Thỏ sợ mình. Nó lấy làm đắc ý lắm. Nó nghĩ: so với Thỏ thì Mèo nhỏ hơn. Chắc Mèo phải sợ nó.\nMột hôm, Chuột đến gần bồ thóc. Phía trên bồ thóc, một con Mèo đang kêu ngao, ngao. Chuột chẳng thèm để ý đến Mèo, định leo thẳng lên bồ thóc.\nBỗng huỵch một cái, Mèo nhảy phắt xuống, ngoạm ngay lấy Chuột.",
    excerpt:
      "Đoạn văn kể chuyện ngắn, rõ tình huống và giàu tính nhắc nhở, phù hợp với mạch đọc lớp 1 về thói huênh hoang và hậu quả của sự chủ quan.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "con-vat",
      "pham-chat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "ruoc-den",
    title: "Rước đèn",
    authorSlug: "nguyen-tung",
    content:
      "Đêm Trung thu. Càng về khuya đám rước đèn càng đông. Các bạn nhỏ mỗi người cầm trong tay một chiếc đèn: đèn lồng, đèn ông sao... Tiếng nói cười ríu rít làm rộn rã cả xóm làng. Đám rước đi chậm rãi trên đoạn đường làng khúc khuỷu trông như một con rồng lửa bò ngoằn ngoèo.",
    excerpt:
      "Đoạn văn ngắn, giàu không khí lễ hội và hình ảnh sáng rực, phù hợp với mạch đọc lớp 1 về Trung thu, xóm làng và niềm vui trẻ nhỏ.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "le-hoi",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Nguyễn Tùng.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "quyen-sach-moi",
    title: "Quyển sách mới",
    authorSlug: "khuyet-danh",
    content:
      "Năm học sắp kết thúc. Hôm nay, Khánh Linh được phát sách Tiếng Việt 2. Em mở ngay sách ra xem. Sách có rất nhiều tranh ảnh đẹp. Em thích quá. Tan học, vừa về đến nhà, em đã khoe ngay sách với bà.",
    excerpt:
      "Đoạn văn ngắn, sáng và gần không khí cuối năm học, phù hợp với mạch đọc lớp 1 về sách mới, niềm vui học tập và tình cảm gia đình.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "hoc-tap",
      "gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "hai-cau-be-va-hai-nguoi-bo",
    title: "Hai cậu bé và hai người bố",
    authorSlug: "khuyet-danh",
    content:
      "Hai cậu bé lần đầu được bố dẫn đến trường. Một cậu tên là Việt, cậu kia tên là Sơn. Hai cậu làm quen với nhau.\nViệt hỏi:\n- Bố bạn làm gì?\nSơn trả lời:\n- Bố mình là bác sĩ. Thế bố bạn làm gì?\n- Bố mình làm ruộng. - Việt đáp.\nSơn bảo:\n- Công việc của bố cậu thật quan trọng. Không có lúa gạo thì chẳng ai sống nổi.\nViệt nói:\n- Công việc của bố cậu cũng quan trọng. Không có bác sĩ thì lấy ai chữa bệnh cho người ốm.",
    excerpt:
      "Đoạn văn kể chuyện ngắn, rõ đối thoại và giàu ý nghĩa, phù hợp với mạch đọc lớp 1 về nghề nghiệp, sự tôn trọng và giá trị của công việc.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "hoi-thoai",
      "pham-chat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "mua-thu-o-vung-cao",
    title: "Mùa thu ở vùng cao",
    authorSlug: "to-hoai",
    content:
      "Đã sang tháng tám. Mùa thu về, vùng cao không mưa nữa. Trời xanh trong. Những dãy núi dài, xanh biếc. Nước chảy róc rách trong khe núi. Đàn bò đi ra đồi, con vàng, con đen. Đàn dê chạy lên, chạy xuống. Nương ngô vàng mượt. Nương lúa vàng óng.\nNgười vùng cao đang cuốc đất, chuẩn bị trồng đậu tương thu.",
    excerpt:
      "Đoạn văn ngắn, trong và giàu màu sắc miền núi, phù hợp với mạch đọc lớp 1 về mùa thu, vùng cao và nhịp lao động nơi nương đồi.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "thien-nhien",
      "lao-dong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Tô Hoài.",
    addedAt: "2026-08-14",
  }),
  createParagraph({
    slug: "cong",
    title: "Công",
    authorSlug: "khuyet-danh",
    content:
      "Lúc mới chào đời, chú công nhỏ chỉ có bộ lông tơ màu nâu gạch. Sau vài giờ, công đã có động tác xoè cái đuôi nhỏ xíu thành hình rẻ quạt.\nSau hai, ba năm, đuôi công trống lớn thành một thứ xiêm áo rực rỡ sắc màu. Mỗi chiếc lông đuôi óng ánh màu xanh sẫm, được tô điểm bằng những đốm tròn đủ màu sắc. Khi giương rộng, đuôi xoè tròn như một cái quạt lớn có đính hàng trăm viên ngọc lóng lánh.",
    excerpt:
      "Đoạn văn miêu tả sinh động và giàu màu sắc, phù hợp với mạch đọc lớp 1 về loài vật và vẻ đẹp rực rỡ của chim công.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "con-vat",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createParagraph({
    slug: "qua-soi",
    title: "Quả sồi",
    authorSlug: "xu-khom-lin-xki",
    content:
      "Nằm dưới đất, Quả Sồi ao ước được ở trên cao ngắm trăng sao, sông núi. Nó nhờ Cây Sồi đưa lên cành cao. Cây Sồi bảo:\n- Hãy tự mọc rễ nhanh lên rồi cháu sẽ trở thành một cây cao như bác.",
    excerpt:
      "Đoạn văn ngắn, giàu tính gợi mở và gần với bài học tự lớn lên, phù hợp với mạch đọc lớp 1 về cây cối và ý chí tự vươn lên.",
    tags: [
      "tieng-viet-1-tap-2",
      "doan-van",
      "thien-nhien",
      "cay-coi",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Xu-khôm-lin-xki.",
    addedAt: "2026-08-14",
  }),
];

const paragraphTiengViet2Tap1: Paragraph[] = [
  createParagraph({
    slug: "co-cong-mai-sat-co-ngay-nen-kim",
    title: "Có công mài sắt, có ngày nên kim",
    authorSlug: "khuyet-danh",
    content:
      "Ngày xưa có một cậu bé làm việc gì cũng mau chán. Mỗi khi cầm quyển sách, cậu chỉ đọc vài dòng đã ngáp ngắn ngáp dài, rồi bỏ dở. Những lúc tập viết, cậu cũng chỉ nắn nót được mấy chữ đầu, rồi lại viết nguệch ngoạc, trông rất xấu.\nMột hôm trong lúc đi chơi, cậu nhìn thấy một bà cụ tay cầm thỏi sắt mải miết mài vào tảng đá ven đường. Thấy lạ, cậu bèn hỏi:\n- Bà ơi, bà làm gì thế?\nBà cụ trả lời:\n- Bà mài thỏi sắt này thành một chiếc kim để khâu vá quần áo.\nCậu bé ngạc nhiên:\n- Thỏi sắt to như thế, làm sao bà mài thành kim được?\nBà cụ ôn tồn giảng giải:\n- Mỗi ngày mài thỏi sắt nhỏ đi một tí, sẽ có ngày nó thành kim. Giống như cháu đi học, mỗi ngày cháu học một ít, sẽ có ngày cháu thành tài.\nCậu bé hiểu ra, quay về nhà học bài.",
    excerpt:
      "Truyện ngụ ngôn quen thuộc về sự kiên trì, phù hợp với mạch đọc đầu cấp của Tiếng Việt 2.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "ngu-ngon",
      "hoc-tap",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Ngụ ngôn", "Học tập"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo truyện ngụ ngôn.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "phan-thuong",
    title: "Phần thưởng",
    authorSlug: "enid-blyton",
    content:
      "Na là một cô bé tốt bụng. Ở lớp, ai cũng mến em. Em gọt bút chì giúp bạn Lan. Em cho bạn Minh nửa cục tẩy. Nhiều lần, em làm trực nhật giúp các bạn bị mệt... Na chỉ buồn vì em học chưa giỏi.\nCuối năm học, cả lớp bàn tán về điểm thi và phần thưởng. Riêng Na chỉ lặng yên nghe các bạn. Em biết mình chưa giỏi môn nào.\nMột buổi sáng, vào giờ ra chơi, các bạn trong lớp túm tụm bàn bạc điều gì có vẻ bí mật lắm. Rồi các bạn kéo nhau đến gặp cô giáo.\nCô giáo cho rằng sáng kiến của các bạn rất hay.\nNgày tổng kết năm học, từng học sinh giỏi bước lên bục nhận phần thưởng. Cha mẹ các em cũng hồi hộp. Bất ngờ, cô giáo nói:\n- Bây giờ, cô sẽ trao một phần thưởng đặc biệt. Đây là phần thưởng cả lớp đề nghị tặng bạn Na. Na học chưa giỏi, nhưng em có tấm lòng thật đáng quý.\nNa không hiểu mình có nghe nhầm không. Đỏ bừng mặt, cô bé đứng dậy bước lên bục. Tiếng vỗ tay vang dậy. Mẹ của Na lặng lẽ chấm khăn lên đôi mắt đỏ hoe.",
    excerpt:
      "Câu chuyện về cô bé tốt bụng được nhận phần thưởng đặc biệt nhờ tấm lòng đáng quý, phù hợp với mạch đọc lớp 2 về trường lớp và bạn bè.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truong-hoc",
      "long-tot",
      "tinh-ban",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Enid Blyton (Lương Hùng phỏng theo).",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "lam-viec-that-la-vui",
    title: "Làm việc thật là vui",
    authorSlug: "to-hoai",
    content:
      "Quanh ta, mọi vật, mọi người đều làm việc.\nCái đồng hồ tích tắc, tích tắc báo phút, báo giờ.\nCon gà trống gáy vang ò ... ó ... o ..., báo cho mọi người biết trời sắp sáng, mau mau thức dậy.\nCon tu hú kêu tu hú, tu hú. Thế là sắp đến mùa vải chín.\nChim bắt sâu, bảo vệ mùa màng.\nCành đào nở hoa cho sắc xuân thêm rực rỡ, ngày xuân thêm tưng bừng.\nNhư mọi vật, mọi người, bé cũng làm việc. Bé làm bài, bé đi học, bé quét nhà, nhặt rau, chơi với em đỡ mẹ. Bé luôn luôn bận rộn, mà lúc nào cũng vui.",
    excerpt:
      "Đoạn văn ngắn của Tô Hoài gợi niềm vui lao động qua nhịp sống quanh em và những việc bé làm mỗi ngày.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "lao-dong",
      "hoc-tap",
      "gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học tập"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Tô Hoài.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "mit-lam-tho",
    title: "Mít làm thơ",
    authorSlug: "no-xop",
    content:
      "Ở thành phố Tí Hon, nổi tiếng nhất là Mít. Người ta gọi cậu như vậy vì cậu chẳng biết gì.\nTuy thế, dạo này Mít lại ham học hỏi. Một lần, cậu đến thi sĩ Hoa Giấy để học làm thơ. Hoa Giấy hỏi:\n- Cậu có biết thế nào là vần thơ không?\n- Vần thơ là cái gì?\n- Hai từ có phần cuối giống nhau thì gọi là vần. Ví dụ: *vịt - thịt, cáo - gáo*. Bây giờ cậu hãy tìm một từ vần với bé.\n- Phé! - Mít đáp.\n- Phé là gì? Vần thì vần nhưng phải có nghĩa chứ.\n- Mình hiểu rồi. Thật kì diệu! - Mít kêu lên.\nVề đến nhà, Mít bắt tay ngay vào việc. Cậu đi đi lại lại, vò đầu bứt tai. Đến tối thì bài thơ hoàn thành.\n*(Còn nữa)*",
    excerpt:
      "Đoạn truyện hóm hỉnh về Mít tập làm thơ, phù hợp với mạch đọc lớp 2 về học hỏi, ngôn ngữ và trí tưởng tượng trẻ thơ.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "ke-chuyen",
      "hoc-tap",
      "ngon-ngu",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Nô-xốp. (Vũ Ngọc Bình dịch).",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "mit-lam-tho-2",
    title: "Mít làm thơ 2",
    authorSlug: "no-xop",
    content:
      "Mít gọi Biết Tuốt, Nhanh Nhảu, Ngộ Nhỡ đến, tặng mỗi bạn mấy câu thơ. Thoạt tiên là thơ về Biết Tuốt:\n*Một hôm đi dạo qua dòng suối*\n*Biết Tuốt nhảy qua con cá chuối.*\nBiết Tuốt la lên:\n- Tớ nhảy qua con cá chuối bao giờ?\n- Nói cho có vần thôi! - Mít giải thích.\n- Muốn cho có vần thì được nói sai sự thật à? Cậu hãy đọc thơ về những bạn khác xem nào!\n- Đây là thơ tặng Nhanh Nhảu:\n*Nhanh Nhảu đói, thật tội*\n*Nuốt chửng bàn là nguội.*\n- Còn đây là thơ về Ngộ Nhỡ:\n*Có cái bánh nhân mỡ*\n*Dưới gối cậu Ngộ Nhỡ.*\nBa cậu bạn nghe xong cùng hét toáng lên. Họ cho là Mít chế giễu họ và dọa không chơi với Mít nữa.\nĐó là lần đầu tiên Mít làm thơ.",
    excerpt:
      "Phần tiếp theo của câu chuyện Mít làm thơ, hóm hỉnh và gần với mạch đọc lớp 2 về vần điệu, lời nói và tình bạn.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "ke-chuyen",
      "ngon-ngu",
      "tinh-ban",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Nô-xốp. (Vũ Ngọc Bình dịch).",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "ban-cua-nai-nho",
    title: "Bạn của Nai Nhỏ",
    authorSlug: "van-lop-3",
    content:
      "Nai Nhỏ xin phép cha được đi chơi xa cùng bạn. Cha Nai Nhỏ nói:\n- Cha không ngăn cản con. Nhưng con hãy kể cho cha nghe về bạn của con.\n- Vâng! - Nai Nhỏ đáp - Có lần, chúng con gặp một hòn đá to chặn lối. Bạn con chỉ hích vai, hòn đá đã lăn sang một bên.\nCha Nai Nhỏ hài lòng nói:\n- Bạn con thật khoẻ. Nhưng cha vẫn lo cho con.\n- Một lần khác, chúng con đang đi dọc bờ sông tìm nước uống thì thấy lão Hổ hung dữ đang rình sau bụi cây. Bạn con đã nhanh trí kéo con chạy như bay.\n- Bạn con thật thông minh và nhanh nhẹn. Nhưng cha vẫn còn lo.\nNai Nhỏ nói tiếp:\n- Lần khác nữa, chúng con đang nghỉ trên một bãi cỏ xanh thì thấy gã Sói hung ác đuổi bắt cậu Dê Non. Sói sắp tóm được Dê Non thì bạn con đã kịp lao tới, dùng đôi gạc chắc khoẻ húc Sói ngã ngửa.\nNghe tới đây, cha Nai Nhỏ mừng rỡ nói:\n- Đó chính là điều tốt nhất. Con trai bé bỏng của cha, con có một người bạn như thế thì cha không phải lo lắng một chút nào nữa.",
    excerpt:
      "Câu chuyện về Nai Nhỏ và người bạn tốt bụng, khỏe mạnh, nhanh trí, phù hợp với mạch đọc lớp 2 về tình bạn và lòng dũng cảm.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "tinh-ban",
      "ke-chuyen",
      "con-vat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Văn lớp 3. (Trung tâm Công nghệ giáo dục).",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "bim-toc-duoi-sam",
    title: "Bím tóc đuôi sam",
    authorSlug: "ku-ro-y-a-na-gi",
    content:
      'Một hôm, Hà nhờ mẹ tết cho hai bím tóc nhỏ, mỗi bím buộc một cái nơ. Khi Hà đến trường, mấy bạn gái cùng lớp reo lên: "Ái chà chà! Bím tóc đẹp quá!". Điều đó làm Hà rất vui. \nNhưng Tuấn bỗng sấn tới, nắm bím tóc và nói:\n- Tớ mệt quá. Cho tớ vịn vào nó một lúc.\nTuấn lớn hơn Hà. Vì vậy, mỗi lần cậu kéo bím tóc, cô bé lại loạng choạng và cuối cùng ngã phịch xuống đất. Tuấn vẫn đùa dai, cứ cầm bím tóc mà kéo. Hà oà khóc. Rồi vừa khóc, em vừa chạy đi mách thầy.\nThầy giáo nhìn hai bím tóc xinh xinh của Hà, vui vẻ nói:\n- Đừng khóc, tóc em đẹp lắm!\nHà ngước khuôn mặt đầm đìa nước mắt lên, hỏi:\n- Thật không ạ?\n- Thật chứ!\nNghe thầy nói thế, Hà nín hẳn:\n- Thưa thầy, em sẽ không khóc nữa.\nThầy giáo cười. Hà cũng cười.\nTan học, Tuấn đến trước mặt Hà, gãi đầu ngượng nghịu:\n- Tớ xin lỗi vì lúc nãy kéo bím tóc của bạn. Thầy giáo đã phê bình tớ. Thầy bảo phải đối xử tốt với các bạn gái.',
    excerpt:
      "Câu chuyện học đường về Hà, Tuấn và lời nhắc nhở phải đối xử tử tế với bạn bè, phù hợp với mạch đọc lớp 2 về ứng xử trong lớp học.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truong-hoc",
      "ung-xu",
      "tinh-ban",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Phỏng theo Ku-rô-y-a-na-gi. (Phí Văn Gừng dịch).",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "tren-chiec-be",
    title: "Trên chiếc bè",
    authorSlug: "to-hoai",
    content:
      "Tôi và Dế Trũi rủ nhau đi ngao du thiên hạ. Chúng tôi ngày đi đêm nghỉ, cùng nhau say ngắm dọc đường.\nNgày kia, đến một bờ sông, chúng tôi ghép ba bốn lá bèo sen lại, làm một chiếc bè. Bè theo dòng nước trôi băng băng.\nMùa thu mới chớm nhưng nước đã trong vắt, trông thấy cả hòn cuội trắng tinh nằm dưới đáy. Nhìn hai bên bờ sông, cỏ cây và những làng gần, núi xa luôn luôn mới. Những anh gọng vó đen sạm, gầy và cao, nghênh cặp chân gọng vó đứng trên bãi lầy bái phục nhìn theo chúng tôi. Những ả cua kềnh cũng giương đôi mắt lồi, âu yếm ngó theo. Đàn săn sắt và cá thầu dầu thoáng gặp đâu cũng lăng xăng cố bơi theo chiếc bè, hoan nghênh vang cả mặt nước.",
    excerpt:
      "Đoạn văn giàu hình ảnh từ Dế Mèn phiêu lưu ký, phù hợp với mạch đọc lớp 2 về thiên nhiên, ngao du và thế giới loài vật.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "thien-nhien",
      "con-vat",
      "phieu-luu",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Tô Hoài.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "chiec-but-muc",
    title: "Chiếc bút mực",
    authorSlug: "sva-ro",
    content:
      "Ở lớp 1A, học sinh bắt đầu được viết bút mực, chỉ còn Mai và Lan vẫn phải viết bút chì.\nSáng hôm ấy, cô giáo gọi Lan lên bàn cô lấy mực. Mai hồi hộp nhìn cô, nhưng cô chẳng nói gì. Mai buồn lắm. Thế là trong lớp chỉ còn mình em viết bút chì.\nBỗng Lan gục đầu xuống bàn khóc nức nở. Cô giáo ngạc nhiên:\n- Em làm sao thế?\nLan nói trong nước mắt:\n- Tối qua, anh trai em mượn bút, quên không bỏ vào cặp cho em.\nLúc này, Mai cứ loay hoay mãi với cái hộp đựng bút. Em mở ra, đóng lại... Cuối cùng, em lấy bút đưa cho Lan:\n- Bạn cầm lấy. Mình đang viết bút chì.\nLan rất ngạc nhiên. Còn cô giáo thì rất vui. Cô khen:\n- Mai ngoan lắm! Nhưng hôm nay cô cũng định cho em viết bút mực vì em viết khá rồi.\nMai thấy tiếc nhưng rồi em nói:\n- Thôi cô ạ, cứ để bạn Lan viết trước.\nCô giáo mỉm cười, lấy trong cặp ra một chiếc bút mới tinh:\n- Cô cho em mượn. Em thật đáng khen.",
    excerpt:
      "Câu chuyện học đường về sự nhường nhịn và lòng tốt của Mai, phù hợp với mạch đọc lớp 2 về bạn bè và cách cư xử đẹp.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truong-hoc",
      "long-tot",
      "ung-xu",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Phỏng theo Sva-rô. (Khánh Như dịch).",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "mau-giay-vun",
    title: "Mẩu giấy vụn",
    authorSlug: "que-son",
    content:
      'Lớp học rộng rãi, sáng sủa và sạch sẽ nhưng không biết ai vứt một mẩu giấy ngay giữa lối ra vào.\nCô giáo bước vào lớp, mỉm cười:\n- Lớp ta hôm nay sạch sẽ quá! Thật đáng khen! Nhưng các em có nhìn thấy mẩu giấy đang nằm ngay giữa cửa kia không?\n- Có ạ! - Cả lớp đồng thanh đáp.\n- Nào! Các em hãy lắng nghe và cho cô biết mẩu giấy đang nói gì nhé! - Cô giáo nói tiếp.\nCả lớp im lặng lắng nghe. Được một lúc, tiếng xì xào nổi lên vì các em không nghe thấy mẩu giấy nói gì cả. Một em trai đánh bạo giơ tay xin nói. Cô giáo cười:\n- Tốt lắm! Em nghe thấy mẩu giấy nói gì nào?\n- Thưa cô, giấy không nói được đâu ạ!\nNhiều tiếng xì xào hưởng ứng: "Thưa cô, đúng đấy ạ! Đúng đấy ạ!"\nBỗng một em gái đứng dậy, tiến tới chỗ mẩu giấy, nhặt lên rồi mang bỏ vào sọt rác. Xong xuôi, em mới nói:\n- Em có nghe thấy ạ. Mẩu giấy bảo: "Các bạn ơi! Hãy bỏ tôi vào sọt rác!"\nCả lớp cười rộ lên thích thú. Buổi học hôm ấy vui quá!',
    excerpt:
      "Câu chuyện lớp học ngắn gọn và dí dỏm, phù hợp với mạch đọc lớp 2 về ý thức giữ vệ sinh và cách nhắc nhau bằng hành động đẹp.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truong-hoc",
      "ve-sinh",
      "ung-xu",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Quế Sơn.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "ngoi-truong-moi",
    title: "Ngôi trường mới",
    authorSlug: "ngo-quan-mien",
    content:
      "Trường mới của em xây trên nền ngôi trường cũ lợp lá. Nhìn từ xa, những mảng tường vàng, ngói đỏ như những cánh hoa lấp ló trong cây.\nEm bước vào lớp, vừa bỡ ngỡ vừa thấy quen thân. Tường vôi trắng, cánh cửa xanh, bàn ghế gỗ xoan đào nổi vân như lụa. Em thấy tất cả đều sáng lên và thơm tho trong nắng mùa thu.\nDưới mái trường mới, sao tiếng trống rung động kéo dài! Tiếng cô giáo trang nghiêm mà ấm áp. Tiếng đọc bài của em cũng vang vang đến lạ! Em nhìn ai cũng thấy thân thương. Cả đến chiếc thước kẻ, chiếc bút chì sao cũng đáng yêu đến thế!",
    excerpt:
      "Đoạn văn miêu tả ngôi trường mới với cảm giác vừa bỡ ngỡ vừa thân thương, phù hợp với mạch đọc lớp 2 về trường lớp và ngày đến trường.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truong-hoc",
      "mieu-ta",
      "mua-thu",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Ngô Quân Miện.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "mua-kinh",
    title: "Mua kính",
    authorSlug: "quoc-van-giao-khoa-thu",
    content:
      "Có một cậu bé lười học nên không biết chữ. Thấy nhiều người khi đọc sách phải đeo kính, cậu tưởng rằng cứ đeo kính thì đọc được sách.\nMột hôm, cậu vào một cửa hàng để mua kính. Cậu giở một cuốn sách ra đọc thử. Cậu thử đến năm bảy chiếc kính khác nhau mà vẫn không đọc được. Bác bán kính thấy thế liền hỏi:\n- Hay là cháu không biết đọc?\nCậu bé ngạc nhiên:\n- Nếu cháu mà biết đọc thì cháu còn phải mua kính làm gì?\nBác bán kính phì cười:\n- Chẳng có thứ kính nào đeo vào mà biết đọc được đâu! Cháu muốn đọc sách thì phải học đi đã.",
    excerpt:
      "Mẩu chuyện ngắn và rõ ý về cậu bé lười học đi mua kính, phù hợp với mạch đọc lớp 2 về học tập và bài học không thể học thay bằng mẹo vặt.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "hoc-tap",
      "ke-chuyen",
      "bai-hoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Quốc văn giáo khoa thư.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "nguoi-thay-cu",
    title: "Người thầy cũ",
    authorSlug: "phong-thu",
    content:
      'Giữa cảnh nhộn nhịp của giờ ra chơi, từ phía cổng trường bỗng xuất hiện một chú bộ đội. Chú là bố của Dũng. Chú tìm đến lớp của con mình để chào thầy giáo cũ.\nVừa tới cửa lớp, thấy thầy giáo bước ra, chú vội bỏ mũ, lễ phép chào thầy. Thầy nhấc kính, chớp mắt ngạc nhiên. Chú liền nói:\n- Thưa thầy, em là Khánh, đứa học trò năm nào trèo cửa sổ lớp bị thầy phạt đấy ạ!\nThầy giáo cười vui vẻ:\n- À, Khánh. Thầy nhớ ra rồi. Nhưng... hình như hôm ấy thầy có phạt em đâu!\n- Vâng, thầy không phạt. Nhưng thầy buồn. Lúc ấy, thầy bảo: "Trước khi làm việc gì, cần phải nghĩ chứ! Thôi, em về đi, thầy không phạt em đâu."\nGiờ ra chơi đã hết. Dũng xúc động nhìn theo bố đang đi ra phía cổng trường rồi lại nhìn cái khung cửa sổ lớp học. Em nghĩ: bố cũng có lần mắc lỗi, thầy không phạt, nhưng bố nhận đó là hình phạt và nhớ mãi. Nhớ để không bao giờ mắc lại nữa.',
    excerpt:
      "Câu chuyện học đường về người thầy cũ và bài học nhớ lâu từ sự bao dung, phù hợp với mạch đọc lớp 2 về thầy cô và cách sửa lỗi.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truong-hoc",
      "thay-co",
      "bai-hoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Phong Thu.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "nguoi-me-hien",
    title: "Người mẹ hiền",
    authorSlug: "nguyen-van-thinh",
    content:
      'Giờ ra chơi, Minh thầm thì với Nam: "Ngoài phố có gánh xiếc. Bọn mình ra xem đi!"\nNghe vậy, Nam không nén nổi tò mò. Nhưng cổng trường khoá, trốn ra sao được. Minh bảo:\n- Tớ biết có một chỗ tường thủng.\nHết giờ ra chơi, hai em đã ở bên bức tường. Minh chui đầu ra. Nam đẩy Minh lọt ra ngoài. Đến lượt Nam đang cố lách ra thì bác bảo vệ vừa tới, nắm chặt hai chân em: "Cậu nào đây? Trốn học hả?" Nam vùng vẫy. Bác càng nắm chặt cổ chân Nam. Sợ quá, Nam khóc toáng lên.\nBỗng có tiếng cô giáo:\n- Bác nhẹ tay kẻo cháu đau. Cháu này là học sinh lớp tôi.\nCô nhẹ nhàng kéo Nam lùi lại rồi đỡ em ngồi dậy. Cô phủi đất cát lấm lem trên người Nam và đưa em về lớp.\nVừa đau vừa xấu hổ, Nam bật khóc. Cô xoa đầu Nam và gọi Minh đang thập thò ở cửa lớp vào, nghiêm giọng hỏi:\n- Từ nay các em có trốn học đi chơi nữa không?\nHai em cùng đáp:\n- Thưa cô, không ạ. Chúng em xin lỗi cô.\nCô hài lòng, bảo hai em về chỗ, rồi tiếp tục giảng bài.',
    excerpt:
      "Câu chuyện học đường về sự nghiêm khắc dịu dàng của cô giáo, phù hợp với mạch đọc lớp 2 về kỷ luật, lòng bao dung và cách sửa lỗi.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truong-hoc",
      "thay-co",
      "bai-hoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Nguyễn Văn Thịnh.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "ban-tay-diu-dang",
    title: "Bàn tay dịu dàng",
    authorSlug: "xu-khom-lin-xki",
    content:
      "Bà của An mới mất nên An xin nghỉ học mấy ngày liền. Sau đám tang bà, An trở lại lớp, lòng nặng trĩu nỗi buồn. Thế là chẳng bao giờ An còn được nghe bà kể chuyện cổ tích, chẳng bao giờ An còn được bà âu yếm, vuốt ve...\nNhớ bà, An ngồi lặng lẽ. Thầy giáo bước vào lớp. Thầy bắt đầu kiểm tra bài làm ở nhà của học sinh.\nKhi thầy đến gần, An thì thào buồn bã:\n- Thưa thầy, hôm nay em chưa làm bài tập.\nThầy nhẹ nhàng xoa đầu An. Bàn tay thầy dịu dàng, đầy trìu mến, thương yêu. An nói tiếp:\n- Nhưng sáng mai em sẽ làm ạ!\n- Tốt lắm! Thầy biết em nhất định sẽ làm! - Thầy khẽ nói với An.",
    excerpt:
      "Câu chuyện ngắn và ấm về sự cảm thông của thầy giáo với nỗi buồn của An, phù hợp với mạch đọc lớp 2 về tình thương và động viên đúng lúc.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truong-hoc",
      "thay-co",
      "tinh-cam-gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Phỏng theo Xu-khôm-lin-xki. (Mạnh Hưởng dịch).",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "doi-giay",
    title: "Đôi giày",
    authorSlug: "truyen-cuoi-viet-nam",
    content:
      "Có cậu học trò nọ vội đến trường nên xỏ nhầm giày, một chiếc cao, một chiếc thấp. Bước tập tễnh trên đường, cậu lẩm bẩm:\n- Quái lạ, sao hôm nay chân mình một bên dài, một bên ngắn? Hay là tại đường khấp khểnh?\nVừa tới sân trường, cậu gặp ngay thầy giáo. Thấy cậu bé đi chân thấp chân cao, thầy bảo:\n- Em đi nhầm giày rồi. Về đổi giày đi cho dễ chịu!\nCậu bé chạy vội về nhà. Cậu lôi từ gầm giường ra hai chiếc giày, ngắm đi ngắm lại, rồi lắc đầu nói:\n- Đôi này vẫn chiếc thấp, chiếc cao.",
    excerpt:
      "Mẩu truyện vui ngắn gọn về cậu học trò đi nhầm giày, phù hợp với mạch đọc lớp 2 về tiếng cười hồn nhiên và quan sát đời thường.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truyen-cuoi",
      "hoc-duong",
      "ke-chuyen",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Truyện cười Việt Nam. (Mạnh Hưởng dịch).",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "sang-kien-cua-be-ha",
    title: "Sáng kiến của bé Hà",
    authorSlug: "ho-phuong",
    content:
      'Ở lớp cũng như ở nhà, bé Hà được coi là một cây sáng kiến.\nMột hôm, Hà hỏi bố:\n- Bố ơi, sao không có ngày của ông bà, bố nhỉ?\nThấy bố ngạc nhiên, Hà bèn giải thích:\n- Con đã có ngày 1 tháng 6. Bố là công nhân, có ngày 1 tháng 5. Mẹ có ngày 8 tháng 3. Còn ông bà thì chưa có ngày lễ nào cả.\nHai bố con bàn nhau lấy ngày lập đông hằng năm làm "ngày ông bà", vì khi trời bắt đầu rét, mọi người cần chăm lo sức khoẻ cho các cụ già.\nNgày lập đông đến gần. Hà suy nghĩ mãi mà chưa biết nên chuẩn bị quà gì biếu ông bà.\nBố khẽ nói vào tai Hà điều gì đó. Hà ngả đầu vào vai bố:\n- Con sẽ cố gắng, bố ạ.\nĐến ngày lập đông, các cô, các chú đều về chúc thọ ông bà. Ông bà cảm động lắm. Bà bảo:\n- Con cháu đông vui, hiếu thảo thế này, ông bà sẽ sống trăm tuổi.\nÔng thì ôm lấy bé Hà, nói:\n- Món quà ông thích nhất hôm nay là chùm điểm mười của cháu đấy.',
    excerpt:
      "Câu chuyện ấm áp về bé Hà nghĩ ra ngày ông bà và món quà hiếu thảo, phù hợp với mạch đọc lớp 2 về gia đình và lòng kính yêu ông bà.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "hieu-thao",
      "ke-chuyen",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Hồ Phương. (Mạnh Hưởng dịch).",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "ba-chau",
    title: "Bà cháu",
    authorSlug: "tran-hoai-duong",
    content:
      'Ngày xưa, ở làng kia, có hai em bé ở với bà. Ba bà cháu rau cháo nuôi nhau, tuy vất vả nhưng cảnh nhà lúc nào cũng đầm ấm.\nMột hôm, có cô tiên đi qua cho một hạt đào và dặn: "Khi bà mất, gieo hạt đào này bên mộ, các cháu sẽ giàu sang, sung sướng."\nBà mất. Hai anh em đem hạt đào gieo bên mộ bà. Hạt đào vừa gieo xuống đã nảy mầm, ra lá, đơm hoa, kết bao nhiêu là trái vàng, trái bạc.\nNhưng vàng bạc, châu báu không thay được tình thương ấm áp của bà. Nhớ bà, hai anh em ngày càng buồn bã.\nCô tiên lại hiện lên. Hai anh em oà khóc xin cô hoá phép cho bà sống lại. Cô tiên nói: "Nếu bà sống lại thì ba bà cháu sẽ cực khổ như xưa, các cháu có chịu không?" Hai anh em cùng nói: "Chúng cháu chỉ cần bà sống lại."\nCô tiên phất chiếc quạt màu nhiệm. Lâu đài, ruộng vườn phút chốc biến mất. Bà hiện ra, móm mém, hiền từ, dang tay ôm hai đứa cháu hiếu thảo vào lòng.',
    excerpt:
      "Câu chuyện cổ tích ấm áp về tình bà cháu, phù hợp với mạch đọc lớp 2 về gia đình, lòng hiếu thảo và giá trị của yêu thương.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "ba-chau",
      "co-tich",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Trần Hoài Dương.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "cay-xoai-cua-ong-em",
    title: "Cây xoài của ông em",
    authorSlug: "doan-gioi",
    content:
      "Ông em trồng cây xoài cát này trước sân khi em còn đi lẫm chẫm. Cuối đông, hoa nở trắng cành. Đầu hè, quả sai lúc lỉu. Trông từng chùm quả to, đu đưa theo gió, em càng nhớ ông. Mùa xoài nào, mẹ em cũng chọn những quả chín vàng và to nhất bày lên bàn thờ ông.\nXoài thanh ca, xoài tượng... đều ngon. Nhưng em thích xoài cát nhất. Mùi xoài thơm dịu dàng, vị ngọt đậm đà, màu sắc đẹp, quả lại to.\nĂn quả xoài cát chín trảy từ cây của ông em trồng, kèm với xôi nếp hương, thì đối với em không thứ quà gì ngon bằng.",
    excerpt:
      "Đoạn văn giàu hương vị và tình cảm về cây xoài ông trồng, phù hợp với mạch đọc lớp 2 về gia đình, kỷ niệm và trái cây quê nhà.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "cay-trai",
      "que-huong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Đoàn Giỏi.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "di-cho",
    title: "Đi chợ",
    authorSlug: "truyen-cuoi-dan-gian-viet-nam",
    content:
      "Có một cậu bé được bà sai đi chợ. Bà đưa cho cậu hai đồng và hai cái bát, dặn:\n- Cháu mua một đồng tương, một đồng mắm nhé!\nCậu bé vâng dạ, đi ngay. Gần tới chợ, cậu bỗng hớt hải chạy về, hỏi bà:\n- Bà ơi, bát nào đựng tương, bát nào đựng mắm?\nBà phì cười:\n- Bát nào đựng tương, bát nào đựng mắm mà chẳng được.\nCậu bé lại ra đi. Đến chợ, cậu lại ba chân bốn cẳng chạy về, hỏi:\n- Nhưng đồng nào mua mắm, đồng nào mua tương ạ?",
    excerpt:
      "Mẩu truyện cười dân gian ngắn gọn về cậu bé đi chợ, phù hợp với mạch đọc lớp 2 về tiếng cười hồn nhiên và cách hiểu máy móc của trẻ nhỏ.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truyen-cuoi",
      "dan-gian",
      "ke-chuyen",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Truyện cười dân gian Việt Nam.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "cay-vu-sua",
    title: "Cây vú sữa",
    authorSlug: "ngoc-chau",
    content:
      "Ngày xưa, có một cậu bé ham chơi. Một lần, bị mẹ mắng, cậu vùng vằng bỏ đi. Cậu la cà khắp nơi, chẳng nghĩ đến mẹ ở nhà mỏi mắt chờ mong.\nKhông biết cậu đi đã bao lâu. Một hôm, vừa đói vừa rét, lại bị trẻ lớn hơn đánh, cậu mới nhớ đến mẹ, liền tìm đường về nhà.\nỞ nhà, cảnh vật vẫn như xưa, nhưng không thấy mẹ đâu. Cậu khản tiếng gọi mẹ, rồi ôm lấy một cây xanh trong vườn mà khóc. Kì lạ thay, cây xanh bỗng run rẩy. Từ các cành lá, những đài hoa bé tí trổ ra, nở trắng như mây. Hoa tàn, quả xuất hiện, lớn nhanh, da căng mịn, xanh óng ánh, rồi chín. Một quả rơi vào lòng cậu. Môi cậu vừa chạm vào, một dòng sữa trắng trào ra, ngọt thơm như sữa mẹ.\nCậu nhìn lên tán lá. Lá một mặt xanh bóng, mặt kia đỏ hoe như mắt mẹ khóc chờ con. Cậu bé òa khóc. Cây xòa cành ôm cậu, như tay mẹ âu yếm vỗ về.\nTrái cây thơm ngon ở vườn nhà cậu bé, ai cũng thích. Họ đem hạt gieo trồng khắp nơi và gọi đó là cây vú sữa.",
    excerpt:
      "Câu chuyện cổ tích quen thuộc về cây vú sữa, phù hợp với mạch đọc lớp 2 về tình mẹ con, sự hối hận và yêu thương gia đình.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "co-tich",
      "cay-trai",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Ngọc Châu.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "dien-thoai",
    title: "Điện thoại",
    authorSlug: "khuyet-danh",
    content:
      "Vừa sắp sách vở ra bàn, Tường bỗng nghe có tiếng chuông điện thoại. Tới hồi chuông thứ ba, em đã ở bên máy. Em nhấc ống nghe lên, áp một đầu vào tai:\n- A lô! Cháu là Tường, con mẹ Bình, nghe đây ạ.\nTrong ống nghe vang lên một giọng cười quen thuộc:\n- Chào con. Bố đây mà. Hai mẹ con có khoẻ không?\nTường mừng quýnh lên:\n- Con chào bố. Con khoẻ lắm. Mẹ... cũng... Bố thế nào ạ? Bao giờ bố về?\nMấy tuần nay, mẹ mệt. Nhưng Tường không muốn làm bố lo. Hình như bố nhận ra giọng ngập ngừng của em. Bố không cười nữa:\n- Tuần sau bố về. Con học giỏi nhé!\n- Con chào bố. Con chuyển máy cho mẹ nhé?\nQuay lại bàn học, Tường bâng khuâng nghĩ đến ngày đón bố trở về.",
    excerpt:
      "Đoạn văn ngắn và ấm áp về cuộc gọi của bố, phù hợp với mạch đọc lớp 2 về gia đình, nỗi nhớ và tình cảm con cái dành cho cha mẹ.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "dien-thoai",
      "tinh-cam",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Tác giả khuyết danh.",
    addedAt: "2026-09-11",
  }),
  createParagraph({
    slug: "bong-hoa-niem-vui",
    title: "Bông hoa Niềm Vui",
    authorSlug: "xu-khom-lin-xki",
    content:
      "Mới sáng tinh mơ, Chi đã vào vườn hoa của trường. Em đến tìm những bông cúc màu xanh, được cả lớp gọi là hoa Niềm Vui. Bố của Chi đang nằm bệnh viện. Em muốn đem tặng bố một bông hoa Niềm Vui để bố dịu cơn đau.\nNhững bông hoa màu xanh lộng lẫy dưới ánh mặt trời buổi sáng. Chi giơ tay định hái, nhưng em bỗng chần chừ vì không ai được ngắt hoa trong vườn. Mọi người vun trồng và chỉ đến đây để ngắm vẻ đẹp của hoa.\nCánh cửa kẹt mở. Cô giáo đến. Cô không hiểu vì sao Chi đến đây sớm thế. Chi nói:\n- Xin cô cho em được hái một bông hoa. Bố em đang ốm nặng.\nCô giáo đã hiểu. Cô ôm em vào lòng:\n- Em hãy hái thêm hai bông nữa, Chi ạ! Một bông cho em, vì trái tim nhân hậu của em. Một bông cho mẹ, vì cả bố và mẹ đã dạy dỗ em thành một cô bé hiếu thảo.\nKhi bố khỏi bệnh, Chi cùng bố đến trường cảm ơn cô giáo. Bố còn tặng nhà trường một khóm hoa cúc đại đóa màu tím đẹp mê hồn.",
    excerpt:
      "Câu chuyện dịu dàng về Chi xin hái hoa tặng bố ốm, phù hợp với mạch đọc lớp 2 về lòng hiếu thảo, sự nhân hậu và tình cảm gia đình.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "long-hieu-thao",
      "long-nhan-hau",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Phỏng theo Xu-khôm-lin-xki. (Mạnh Hưởng dịch).",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "qua-cua-bo",
    title: "Quà của bố",
    authorSlug: "duy-khanh",
    content:
      "Bố đi câu về, không một lần nào là chúng tôi không có quà.\nMở thúng câu ra là cả một thế giới dưới nước: cà cuống, niềng niễng đực, niềng niễng cái bò nhộn nhạo. Hoa sen đỏ, nhị sen vàng tỏa hương thơm lừng. Những con cá sộp, cá chuối quẫy tóe nước, mắt thao láo...\nBố đi cắt tóc về, cũng không lần nào chúng tôi không có quà.\nMở hòm dụng cụ ra là cả một thế giới mặt đất: con xập xành, con muỗm to xù, mốc thếch, ngó ngoáy. Hấp dẫn nhất là những con dế lạo xạo trong các vỏ bao diêm: toàn dế đực, cánh xoăn, gáy vang nhà và chọi nhau phải biết.\nQuà của bố làm anh em tôi giàu quá!",
    excerpt:
      "Đoạn văn giàu quan sát và thương mến về những món quà bình dị của bố, phù hợp với mạch đọc lớp 2 về gia đình và niềm vui tuổi thơ.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "tuoi-tho",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Duy Khánh.",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "ha-mieng-cho-sung",
    title: "Há miệng chờ sung",
    authorSlug: "truyen-cuoi-dan-gian-viet-nam",
    content:
      "Xưa có một anh chàng mồ côi cha mẹ nhưng chẳng chịu học hành, làm lụng gì cả. Hằng ngày, anh ta cứ nằm ngửa dưới gốc cây sung, há miệng ra thật to, chờ cho sung rụng vào thì ăn. Nhưng đợi mãi mà chẳng có quả sung nào rụng trúng miệng. Bao nhiêu quả rụng đều rơi chệch ra ngoài.\nChợt có người đi qua đường, chàng lười gọi lại, nhờ nhặt sung bỏ hộ vào miệng. Không may, gặp phải một tay cũng lười. Hắn ta lấy hai ngón chân cặp quả sung, bỏ vào miệng cho chàng lười. Anh chàng bực lắm, gắt:\n- Ôi chao! Người đâu mà lười thế!",
    excerpt:
      "Mẩu truyện cười dân gian ngắn gọn về thói lười biếng đến buồn cười, phù hợp với mạch đọc lớp 2 về bài học tự làm lấy việc của mình.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truyen-cuoi",
      "dan-gian",
      "bai-hoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Tiếng cười dân gian Việt Nam.",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "cau-chuyen-bo-dua",
    title: "Câu chuyện bó đũa",
    authorSlug: "ngu-ngon-viet-nam",
    content:
      "Ngày xưa, ở một gia đình kia, có hai anh em. Lúc nhỏ, anh em rất hoà thuận. Khi lớn lên, anh có vợ, em có chồng, tuy mỗi người một nhà, nhưng vẫn hay va chạm.\nThấy các con không yêu thương nhau, người cha rất buồn phiền. Một hôm, ông đặt một bó đũa và một túi tiền trên bàn, rồi gọi các con, cả trai, gái, dâu, rể lại và bảo:\n- Ai bẻ gãy được bó đũa này thì cha thưởng cho túi tiền.\nBốn người con lần lượt bẻ bó đũa. Ai cũng cố hết sức mà không sao bẻ gãy được. Người cha bèn cởi bó đũa ra, rồi thong thả bẻ gãy từng chiếc một cách dễ dàng.\nThấy vậy, bốn người con cùng nói:\n- Thưa cha, lấy từng chiếc mà bẻ thì có khó gì!\nNgười cha liền bảo:\n- Đúng. Như thế là các con đều thấy rằng chia lẻ ra thì yếu, hợp lại thì mạnh. Vậy các con phải biết thương yêu, đùm bọc lẫn nhau. Có đoàn kết thì mới có sức mạnh.",
    excerpt:
      "Câu chuyện ngụ ngôn quen thuộc về bó đũa và sức mạnh đoàn kết, phù hợp với mạch đọc lớp 2 về tình thân và bài học sống cùng nhau.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "ngu-ngon",
      "gia-dinh",
      "doan-ket",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Ngụ ngôn Việt Nam.",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "hai-anh-em",
    title: "Hai anh em",
    authorSlug: "la-mac-tin",
    content:
      "Ở cánh đồng nọ, có hai anh em cày chung một đám ruộng. Ngày mùa đến, họ gặt rồi bó lúa chất thành hai đống bằng nhau, để cả ở ngoài đồng.\nĐêm hôm ấy, người em nghĩ: “Anh mình còn phải nuôi vợ con. Nếu phần lúa của mình cũng bằng phần của anh thì thật không công bằng.” Nghĩ vậy, người em ra đồng lấy lúa của mình bỏ thêm vào phần của anh.\nCũng đêm ấy, người anh bàn với vợ: “Em ta sống một mình vất vả. Nếu phần của ta cũng bằng phần chú ấy thì thật không công bằng.” Thế rồi anh ra đồng lấy lúa của mình bỏ thêm vào phần của em.\nSáng hôm sau, hai anh em cùng ra đồng. Họ rất đỗi ngạc nhiên khi thấy hai đống lúa vẫn bằng nhau.\nCho đến một đêm, hai anh em đều ra đồng, rình xem vì sao có sự kì lạ đó. Họ bắt gặp nhau, mỗi người đang ôm trong tay những bó lúa định bỏ thêm cho người kia. Cả hai xúc động, ôm chầm lấy nhau.",
    excerpt:
      "Câu chuyện cảm động về hai anh em luôn nghĩ cho nhau, phù hợp với mạch đọc lớp 2 về tình thân, sự sẻ chia và yêu thương trong gia đình.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "anh-em",
      "chia-se",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Phỏng theo La-mác-tin. (Lê Quang Dân dịch).",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "be-hoa",
    title: "Bé Hoa",
    authorSlug: "viet-tam",
    content:
      "Bây giờ Hoa đã là chị rồi. Mẹ có thêm em Nụ. Em Nụ môi đỏ hồng trông yêu lắm. Em đã lớn lên nhiều. Em ngủ ít hơn trước. Có lúc, mắt em mở to, tròn và đen láy. Em cứ nhìn Hoa mãi. Hoa yêu em và rất thích đưa võng ru em ngủ.\nĐêm nay, Hoa hát hết các bài hát mà mẹ vẫn chưa về. Từ ngày bố đi công tác xa, mẹ bận việc nhiều hơn. Em Nụ đã ngủ. Hoa lấy giấy bút, viết thư cho bố. Vặn to đèn, em ngồi trên ghế, nắn nót viết từng chữ:\n*Bố ạ,*\n*Em Nụ ở nhà ngoan lắm. Em ngủ cũng ngoan nữa. Con hết cả bài hát ru em rồi. Bao giờ bố về, bố dạy thêm bài khác cho con. Dạy bài dài dài ấy, bố nhé!*",
    excerpt:
      "Đoạn văn ấm áp về Hoa chăm em và viết thư cho bố, phù hợp với mạch đọc lớp 2 về gia đình, chị em và tình cảm hồn nhiên của trẻ nhỏ.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "chi-em",
      "tinh-cam",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Việt Tâm.",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "ban-cho",
    title: "Bán chó",
    authorSlug: "tran-manh-thuong",
    content:
      "Chó nhà Giang đẻ những sáu con. Một hôm, chị Liên bảo:\n- Nhiều chó con quá, nhà mình nuôi sao cho xuể. Bố bảo phải cho bớt đi.\nGiang bàn:\n- Mình có thể đem bán chúng, chị ạ.\n- Nhưng chị sợ không ai mua đâu. Tốt nhất là ta đem cho bớt đi.\nChiều hôm đó, chị Liên vừa đi học về, Giang đã đợi ngay ở cửa, khoe:\n- Em bán được một con chó rồi, chị ạ.\n- Em bán được thật ư? Giá bao nhiêu?\nGiang đáp:\n- Hai mươi ngàn đồng ạ.\n- Hai mươi ngàn đồng? - Chị ngạc nhiên. - Thế tiền đâu rồi?\n- Đây không phải là mua bán bằng tiền đâu, chị ạ. Em đã đổi một con chó lấy hai chú mèo con. Một con mèo giá mười ngàn đồng đấy.",
    excerpt:
      "Câu chuyện hồn nhiên và dí dỏm về cách Giang 'bán' chó con, phù hợp với mạch đọc lớp 2 về gia đình, con vật và suy nghĩ trẻ nhỏ.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "gia-dinh",
      "con-vat",
      "truyen-cuoi",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Trần Mạnh Thường.",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "con-cho-nha-hang-xom",
    title: "Con chó nhà hàng xóm",
    authorSlug: "thuy-ha",
    content:
      "Bé rất thích chó nhưng nhà Bé không nuôi con nào. Bé đành chơi với Cún Bông, con chó của bác hàng xóm. Bé và Cún thường nhảy nhót tung tăng khắp vườn.\nMột hôm, mải chạy theo Cún, Bé vấp phải một khúc gỗ và ngã đau, không đứng dậy được. Bé khóc. Cún nhìn Bé rồi chạy đi tìm người giúp. Mắt cá chân của Bé sưng to, vết thương khá nặng nên Bé phải bó bột, nằm bất động trên giường.\nBè bạn thay nhau đến thăm, kể chuyện, mang quà cho Bé. Nhưng các bạn về, Bé lại buồn. Thấy vậy, mẹ lo lắng hỏi:\n- Con muốn mẹ giúp gì nào?\n- Con nhớ Cún, mẹ ạ!\nNgày hôm sau, bác hàng xóm dẫn Cún sang với Bé. Bé và Cún càng thân thiết. Cún mang cho Bé khi thì tờ báo hay cái bút chì, khi thì con búp bê... Bé cười, Cún sung sướng vẫy đuôi rối rít. Thỉnh thoảng, Cún muốn chạy nhảy và nô đùa. Nhưng con vật thông minh hiểu rằng chưa đến lúc chạy đi chơi được.\nNgày tháo bột đã đến. Bác sĩ rất hài lòng vì vết thương của Bé đã lành hẳn. Nhìn Bé vuốt ve Cún, bác sĩ hiểu chính Cún đã giúp Bé mau lành.",
    excerpt:
      "Câu chuyện ấm áp về Cún Bông luôn ở bên Bé khi em bị đau, phù hợp với mạch đọc lớp 2 về tình bạn với loài vật và sự chăm sóc dịu dàng.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "con-vat",
      "tinh-ban",
      "gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Thuỷ Hà.",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "tim-ngoc",
    title: "Tìm ngọc",
    authorSlug: "nguyen-dong-chi",
    content:
      "Xưa có chàng trai thấy một bọn trẻ định giết con rắn nước liền bỏ tiền ra mua, rồi thả rắn đi. Không ngờ con rắn ấy là con của Long Vương. Đền ơn chàng trai, Long Vương tặng chàng một viên ngọc quý.\nCó người thợ kim hoàn biết đó là viên ngọc hiếm, bèn đánh tráo. Chàng trai rất buồn. Thấy vậy, Chó và Mèo xin chủ đi tìm ngọc.\nĐến nhà người thợ kim hoàn, Mèo bắt một con chuột đi tìm ngọc. Quả nhiên, con chuột tìm được.\nRa về, Chó tranh ngậm ngọc. Lúc qua sông, nó làm rơi viên ngọc xuống nước. Một con cá lớn thấy viên ngọc, đớp ngay. Chó nghĩ ra cách rình ở bên sông, chờ ai câu được con cá nuốt ngọc thì lấy lại.\nMấy hôm sau, có người đánh được con cá lớn, mổ ruột ra có viên ngọc. Mèo liền nhảy tới ngoạm ngọc chạy biến.\nLần này, Mèo đội ngọc trên đầu. Nào ngờ, vừa đi một quãng thì có con quạ sà xuống đớp ngọc rồi bay lên cây cao. Mèo nghĩ ra một mẹo. Nó nằm phơi bụng vờ chết. Quạ trúng kế, sà xuống toan rỉa thịt Mèo. Mèo nhảy xổ lên vồ. Quạ van lạy, xin trả lại ngọc.\nLần này, Chó và Mèo mang ngọc về được đến nhà. Chàng trai vô cùng mừng rỡ, càng thêm yêu quý hai con vật thông minh, tình nghĩa.",
    excerpt:
      "Câu chuyện cổ tích giàu kịch tính về Chó và Mèo đi tìm ngọc, phù hợp với mạch đọc lớp 2 về con vật thông minh, tình nghĩa và lòng biết ơn.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "co-tich",
      "con-vat",
      "tinh-nghia",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Nguyễn Đổng Chi.",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "ga-ti-te-voi-ga",
    title: "Gà tỉ tê với gà",
    authorSlug: "le-quang-long",
    content:
      "Loài gà cũng biết nói đấy, các em ạ!\nTừ khi gà con còn nằm trong trứng, gà mẹ đã nói chuyện với chúng bằng cách gõ mỏ lên vỏ trứng, còn chúng thì phát tín hiệu những tiếng đáp lời mẹ. Khi gà mẹ thong thả dắt bầy con đi kiếm mồi, miệng kêu đều đều “cúc ... cúc ... cúc”, thế có nghĩa là: “Không có gì nguy hiểm. Các con kiếm mồi đi!”. Gà mẹ vừa bới vừa kêu nhanh “cúc, cúc, cúc”, tức là nó gọi: “Lại đây mau các con, mồi ngon lắm!”. Gà mẹ mà xù lông, miệng kêu liên tục, gấp gáp “roóc, roóc”, gà con phải hiểu: “Tai họa! Nấp mau!”. Đàn con đang xôn xao lập tức chui hết vào cánh mẹ, nằm im. Tới lúc mẹ lại “cúc ... cúc ... cúc” đều đều, chúng mới hớn hở chui ra.",
    excerpt:
      "Đoạn văn thú vị giải thích cách gà mẹ gọi con, phù hợp với mạch đọc lớp 2 về loài vật, quan sát tự nhiên và những tín hiệu gần gũi trong sân vườn.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "con-vat",
      "thien-nhien",
      "kham-pha",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Lê Quang Long, Nguyễn Thị Thanh Huyền.",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "them-sung-cho-ngua",
    title: "Thêm sừng cho ngựa",
    authorSlug: "truyen-vui-nuoc-ngoai",
    content:
      "Bin rất ham vẽ. Trên nền nhà, ngoài sân gạch, chỗ nào cũng có những bức vẽ của em, bức thì vẽ bằng phấn, bức lại vẽ bằng than. Thấy thế, mẹ mua cho em một quyển vở vẽ, một hộp bút chì màu và bảo:\n- Con vẽ con ngựa của nhà mình cho mẹ xem!\nBin đem vở và bút ra tận chuồng ngựa tập vẽ. Hí hoáy một lúc lâu, vẽ rồi xoá, xoá rồi lại vẽ. Cuối cùng, Bin cũng vẽ xong. Em đem bức vẽ vào khoe với mẹ.\nMẹ ngạc nhiên:\n- Con vẽ con gì đấy?\nBin giải thích:\n- Con ngựa đấy, mẹ ạ!\nMẹ bảo:\n- Sao mẹ chẳng thấy giống con ngựa nhỉ?\nBin ngắm bức vẽ một hồi, rồi nói:\n- Đúng, không phải con ngựa. Thôi, để con vẽ thêm hai cái sừng cho nó thành con bò vậy.",
    excerpt:
      "Mẩu truyện vui hồn nhiên về Bin tập vẽ con ngựa, phù hợp với mạch đọc lớp 2 về tuổi thơ, hội họa và những cách nghĩ ngộ nghĩnh của trẻ nhỏ.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truyen-cuoi",
      "tuoi-tho",
      "hoc-tap",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Theo Truyện vui nước ngoài.",
    addedAt: "2026-09-15",
  }),
  createParagraph({
    slug: "co-va-vac",
    title: "Cò và Vạc",
    authorSlug: "truyen-co-viet-nam",
    content:
      "Cò và Vạc là hai anh em, nhưng tính nết rất khác nhau. Cò ngoan ngoãn, chăm chỉ học tập, được thầy yêu bạn mến. Còn Vạc thì lười biếng, không chịu học hành, suốt ngày chỉ rúc đầu trong cánh mà ngủ. Cò khuyên bảo em nhiều lần, nhưng Vạc chẳng nghe.\nNhờ siêng năng nên Cò học giỏi nhất lớp. Còn Vạc đành chịu dốt. Sợ chúng bạn chê cười, đêm đến Vạc mới dám bay đi kiếm ăn.\nNgày nay, lật cánh Cò lên, vẫn thấy một dúm lông màu vàng nhạt. Người ta bảo đấy là quyển sách của Cò. Cò chăm học nên lúc nào cũng mang sách bên mình. Sau những buổi mò tôm bắt ốc, Cò lại đậu trên ngọn tre giở sách ra đọc.",
    excerpt:
      "Câu chuyện dân gian về Cò chăm chỉ và Vạc lười biếng, phù hợp với mạch đọc lớp 2 về học tập, nết ở và bài học siêng năng.",
    tags: [
      "tieng-viet-2-tap-1",
      "doan-van",
      "truyen-co",
      "con-vat",
      "hoc-tap",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Kể chuyện"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Truyện cổ Việt Nam.",
    addedAt: "2026-09-15",
  }),
];

const paragraphTiengViet2Tap2: Paragraph[] = [
  createParagraph({
    slug: "cay-gao-goi-xuan",
    title: "Cây gạo gọi xuân",
    authorSlug: "bang-son",
    content:
      "Cuối mùa đông, cây gạo bắt đầu nhóm màu đỏ trên nền trời còn nhạt. Lũ học trò đi ngang thường dừng lại thêm một chút, như thể mùa xuân vừa cất tiếng từ đầu cành cao nhất. Một bông hoa gạo nở đúng lúc cũng đủ làm cả con đường làng trở nên khác hẳn.",
    excerpt:
      "Đoạn văn miêu tả thiên nhiên phù hợp cho Tiếng Việt 2 học kỳ hai.",
    tags: [
      "tieng-viet-2-tap-2",
      "doan-van",
      "mua-xuan",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Miêu tả", "Tản văn"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
    addedAt: "2026-08-04",
  }),
];

const paragraphTiengViet3Tap1: Paragraph[] = [
  createParagraph({
    slug: "tieng-doc-bai-buoi-som",
    title: "Tiếng đọc bài buổi sớm",
    authorSlug: "vo-quang",
    content:
      "Khi sân trường còn đọng hơi sương, tiếng đọc bài đã vang lên khe khẽ trong lớp. Mỗi giọng đọc một nhịp, lúc nhanh lúc chậm, nhưng hòa vào nhau lại thành âm thanh rất riêng của buổi sáng đi học. Nghe tiếng ấy, người ta biết một ngày mới đã thật sự bắt đầu.",
    excerpt: "Đoạn văn học đường dùng cho Tiếng Việt 3 đầu năm.",
    tags: [
      "tieng-viet-3-tap-1",
      "doan-van",
      "truong-hoc",
      "tuoi-tho",
      "2000s-hoc-duong",
    ],
    categories: ["Học đường", "Miêu tả"],
    grade: "Lớp 3",
    textbook: "Tiếng Việt 3 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
    addedAt: "2026-08-05",
  }),
];

const paragraphTiengViet3Tap2: Paragraph[] = [
  createParagraph({
    slug: "mui-giay-moi",
    title: "Mùi giấy mới",
    authorSlug: "khuyet-danh",
    content:
      "Có những mùi hương không gọi thành tên được ngay, nhưng chỉ cần gặp lại là người ta nhớ. Mùi giấy mới của bộ sách đầu năm là một thứ như thế. Nó đi cùng bìa vở còn cứng, cùng nhãn tên chưa viết, cùng cảm giác mọi thứ phía trước đều đang mở ra rất sạch và sáng.",
    excerpt:
      "Đoạn văn ngắn về ký ức sách vở, đặt trong Tiếng Việt 3 học kỳ hai.",
    tags: [
      "tieng-viet-3-tap-2",
      "doan-van",
      "truong-hoc",
      "uoc-mo",
      "2000s-hoc-duong",
    ],
    categories: ["Học đường", "Tản mạn"],
    grade: "Lớp 3",
    textbook: "Tiếng Việt 3 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
    addedAt: "2026-08-06",
  }),
];

const paragraphTiengViet4Tap1: Paragraph[] = [
  createParagraph({
    slug: "mot-buoi-cho-que",
    title: "Một buổi chợ quê",
    authorSlug: "bang-son",
    content:
      "Chợ quê họp từ rất sớm, tiếng nói cười chen với mùi rau mới, mùi cá đồng và mùi đất còn ướt. Mọi thứ không ồn ào theo kiểu vội vã, mà rộn ràng như một nhịp quen. Đi qua khu chợ như đi qua một cuốn sách nhỏ về đời sống làng quê.",
    excerpt: "Đoạn văn miêu tả đời sống quê nhà cho Tiếng Việt 4 học kỳ một.",
    tags: [
      "tieng-viet-4-tap-1",
      "doan-van",
      "que-huong",
      "lao-dong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Miêu tả", "Sinh hoạt"],
    grade: "Lớp 4",
    textbook: "Tiếng Việt 4 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
    addedAt: "2026-08-07",
  }),
];

const paragraphTiengViet4Tap2: Paragraph[] = [
  createParagraph({
    slug: "chiec-khan-cua-ba",
    title: "Chiếc khăn của bà",
    authorSlug: "vo-quang",
    content:
      "Chiếc khăn bà vẫn dùng mỗi sáng đã bạc màu ở mép nhưng vẫn còn giữ được mùi nắng. Mỗi lần bà gấp lại, nếp khăn nằm yên như một thói quen cũ chưa bao giờ lạc mất. Với đứa cháu nhỏ, chiếc khăn ấy giống như một phần rất yên của căn nhà.",
    excerpt:
      "Đoạn văn gia đình mang nhịp chậm và quan sát nhỏ, phù hợp cho lớp 4 cuối năm.",
    tags: [
      "tieng-viet-4-tap-2",
      "doan-van",
      "gia-dinh",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Gia đình", "Tản mạn"],
    grade: "Lớp 4",
    textbook: "Tiếng Việt 4 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
    addedAt: "2026-08-08",
  }),
];

const paragraphTiengViet5Tap1: Paragraph[] = [
  createParagraph({
    slug: "con-duong-den-lop-nam-xua",
    title: "Con đường đến lớp năm xưa",
    authorSlug: "thanh-tinh",
    content:
      "Con đường đến lớp không dài, nhưng trong ký ức nó luôn có nhiều ánh sáng hơn những con đường khác. Đó là con đường có tiếng dép trẻ con, có chiếc cặp sát bên hông và có cảm giác vừa đi vừa mong nhanh đến cổng trường. Khi nhớ lại, người ta không chỉ nhớ con đường mà nhớ luôn cả mình của ngày nhỏ.",
    excerpt: "Đoạn văn ký ức học trò cho Tiếng Việt 5 học kỳ một.",
    tags: [
      "tieng-viet-5-tap-1",
      "doan-van",
      "truong-hoc",
      "tuoi-tho",
      "2000s-hoc-duong",
    ],
    categories: ["Học đường", "Hoài niệm"],
    grade: "Lớp 5",
    textbook: "Tiếng Việt 5 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
    addedAt: "2026-08-09",
  }),
];

const paragraphTiengViet5Tap2: Paragraph[] = [
  createParagraph({
    slug: "con-mua-tren-mai-ngoi",
    title: "Cơn mưa trên mái ngói",
    authorSlug: "bang-son",
    content:
      "Mưa đến bất ngờ rồi ở lại lâu trên mái ngói cũ. Tiếng mưa lúc đầu rối và dày, sau chậm dần như biết căn nhà đang lắng nghe. Ngồi bên cửa sổ nhìn nước chảy xuống hiên, người đọc dễ thấy thời gian mình cũng mềm đi, như thể mọi bộn bề vừa được mưa cất hộ.",
    excerpt: "Đoạn văn thiên nhiên yên tĩnh cho Tiếng Việt 5 học kỳ hai.",
    tags: [
      "tieng-viet-5-tap-2",
      "doan-van",
      "thien-nhien",
      "que-huong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Miêu tả", "Tản văn"],
    grade: "Lớp 5",
    textbook: "Tiếng Việt 5 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
    addedAt: "2026-08-10",
  }),
];

const paragraphNguVan6Tap1: Paragraph[] = [
  createParagraph({
    slug: "toi-di-hoc-trich",
    title: "Tôi đi học (trích)",
    authorSlug: "thanh-tinh",
    content:
      "Buổi sáng đến trường luôn có một thứ ánh sáng riêng. Bản demo này dùng một đoạn mô phỏng ngắn để gợi không khí rụt rè, háo hức của ngày đầu cắp sách, thay cho việc sao chép nguyên văn đầy đủ. Cảm giác quan trọng nhất là sự bỡ ngỡ trong trẻo khi một đứa trẻ lần đầu thấy mình bước vào thế giới học đường.",
    excerpt:
      "Một nhan đề quen thuộc mở mạch ký ức học trò cho Ngữ văn 6 học kỳ một.",
    tags: [
      "ngu-van-6-tap-1",
      "doan-van",
      "truong-hoc",
      "tuoi-tho",
      "van-hoc-viet-nam",
      "2000s-hoc-duong",
    ],
    categories: ["Tự sự", "Học đường"],
    grade: "Lớp 6",
    textbook: "Ngữ văn 6 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
    featured: true,
    addedAt: "2026-08-11",
  }),
];

const paragraphNguVan6Tap2: Paragraph[] = [
  createParagraph({
    slug: "song-nuoc-ca-mau-trich",
    title: "Sông nước Cà Mau (trích)",
    authorSlug: "doan-gioi",
    content:
      "Mênh mang nước, rừng và chợ nổi là cảm giác chung của trích đoạn này. Nội dung trong bản demo được viết lại ngắn gọn để thử khả năng hiển thị văn xuôi dài, nhấn vào nhịp quan sát và cảm giác phương Nam. Từ những chi tiết ấy, không gian sông nước hiện lên rộng, sống động và có nhịp đi riêng.",
    excerpt:
      "Đoạn trích mô phỏng bức tranh miền sông nước cho Ngữ văn 6 học kỳ hai.",
    tags: [
      "ngu-van-6-tap-2",
      "doan-van",
      "que-huong",
      "thien-nhien",
      "van-hoc-viet-nam",
    ],
    categories: ["Miêu tả", "Du ký"],
    grade: "Lớp 6",
    textbook: "Ngữ văn 6 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
    featured: true,
    addedAt: "2026-08-12",
  }),
];

const paragraphNguVan7Tap1: Paragraph[] = [
  createParagraph({
    slug: "mot-buoi-sang-thang-ba",
    title: "Một buổi sáng tháng ba",
    authorSlug: "bang-son",
    content:
      "Tháng ba bước vào sân bằng nắng mỏng và gió nhẹ. Mọi vật như chậm lại một chút để người đọc kịp nhìn những mảng lá non và nghe tiếng chim lẫn trong tiếng rao đầu ngõ. Sự dịu dàng ấy không chỉ là vẻ đẹp của cảnh mà còn là một cách nhắc người ta sống chậm hơn trong một ngày bình thường.",
    excerpt: "Đoạn văn tản mạn cho Ngữ văn 7 học kỳ một.",
    tags: [
      "ngu-van-7-tap-1",
      "doan-van",
      "mua-xuan",
      "thien-nhien",
      "van-hoc-viet-nam",
    ],
    categories: ["Tản văn", "Miêu tả"],
    grade: "Lớp 7",
    textbook: "Ngữ văn 7 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan7Tap2: Paragraph[] = [
  createParagraph({
    slug: "buoi-chieu-song-hong",
    title: "Buổi chiều sông Hồng",
    authorSlug: "bang-son",
    content:
      "Chiều xuống chậm trên mặt sông rộng. Màu nước đổi dần từ nâu ấm sang tím nhạt, còn bãi bồi bên kia vẫn giữ một vệt xanh hiền như tranh trong sách cũ. Những biến đổi rất nhẹ ấy khiến người đọc có cảm giác đang đứng trước một cảnh quen mà mỗi lần nhìn lại vẫn thấy mới.",
    excerpt: "Đoạn văn quan sát thiên nhiên cho Ngữ văn 7 học kỳ hai.",
    tags: [
      "ngu-van-7-tap-2",
      "doan-van",
      "que-huong",
      "dat-nuoc",
      "van-hoc-viet-nam",
    ],
    categories: ["Miêu tả", "Tản văn"],
    grade: "Lớp 7",
    textbook: "Ngữ văn 7 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan8Tap1: Paragraph[] = [
  createParagraph({
    slug: "trang-vo-cua-mua-khai-truong",
    title: "Trang vở của mùa khai trường",
    authorSlug: "nguyen-nhat-anh",
    content:
      "Có những buổi sáng đầu năm học chỉ cần mở cặp ra là đã thấy vui. Trang vở mới, mực mới, cả tiếng ghế xê dịch trong lớp cũng như sáng hơn thường ngày. Những thứ rất nhỏ ấy ghép lại thành cảm giác khai trường mà dù sau này đi qua bao mùa tựu trường khác, người ta vẫn nhận ra ngay.",
    excerpt:
      "Đoạn văn học đường với nhịp hiện đại hơn, dùng cho Ngữ văn 8 học kỳ một.",
    tags: [
      "ngu-van-8-tap-1",
      "doan-van",
      "truong-hoc",
      "tuoi-tho",
      "2000s-hoc-duong",
    ],
    categories: ["Học đường", "Hoài niệm"],
    grade: "Lớp 8",
    textbook: "Ngữ văn 8 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan8Tap2: Paragraph[] = [
  createParagraph({
    slug: "ngo-nho-sau-con-mua",
    title: "Ngõ nhỏ sau cơn mưa",
    authorSlug: "nguyen-nhat-anh",
    content:
      "Sau cơn mưa, con ngõ nhỏ bỗng sáng hơn như vừa được lau rửa bằng một thứ ánh sáng mềm. Nước còn đọng trên lá, trên dây điện, trên bậc cửa từng nhà. Đi qua một con ngõ như thế, người ta có cảm giác mình đang bước trong phần yên tĩnh nhất của một buổi chiều.",
    excerpt: "Đoạn văn cảnh vật đời thường cho Ngữ văn 8 học kỳ hai.",
    tags: [
      "ngu-van-8-tap-2",
      "doan-van",
      "thanh-pho",
      "thien-nhien",
      "van-hoc-viet-nam",
    ],
    categories: ["Miêu tả", "Đời sống"],
    grade: "Lớp 8",
    textbook: "Ngữ văn 8 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan9Tap1: Paragraph[] = [
  createParagraph({
    slug: "bep-lua-chieu-dong",
    title: "Bếp lửa chiều đông",
    authorSlug: "nguyen-minh-chau",
    content:
      "Giữa chiều đông, bếp lửa làm căn nhà thấp trở nên sâu và ấm hơn. Mỗi tiếng củi nổ nghe như một dấu chấm nhỏ trong câu chuyện kéo dài của gia đình. Ánh lửa ấy không chỉ sưởi đôi tay mà còn giữ lại cho người ta cảm giác được chở che giữa những ngày gió lạnh.",
    excerpt: "Đoạn văn gia đình và ký ức cho Ngữ văn 9 học kỳ một.",
    tags: [
      "ngu-van-9-tap-1",
      "doan-van",
      "gia-dinh",
      "que-huong",
      "van-hoc-viet-nam",
    ],
    categories: ["Hoài niệm", "Gia đình"],
    grade: "Lớp 9",
    textbook: "Ngữ văn 9 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan9Tap2: Paragraph[] = [
  createParagraph({
    slug: "dong-nhat-ky-tuoi-muoi-lam",
    title: "Dòng nhật ký tuổi mười lăm",
    authorSlug: "nguyen-nhat-anh",
    content:
      "Tuổi mười lăm thường viết rất nhiều, không hẳn để nhớ mà để tự hiểu mình hơn. Có những dòng nhật ký chỉ kể chuyện trời mưa, chuyện bài kiểm tra, chuyện bạn cùng bàn mượn bút. Nhưng chính từ những điều nhỏ như thế, một giai đoạn tuổi trẻ dần hiện ra với tất cả sự lúng túng và chân thành của nó.",
    excerpt: "Đoạn văn về tuổi mới lớn cho Ngữ văn 9 học kỳ hai.",
    tags: [
      "ngu-van-9-tap-2",
      "doan-van",
      "tuoi-tho",
      "uoc-mo",
      "thanh-pho",
      "2000s-hoc-duong",
    ],
    categories: ["Tự sự", "Thanh xuân"],
    grade: "Lớp 9",
    textbook: "Ngữ văn 9 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan10Tap1: Paragraph[] = [
  createParagraph({
    slug: "mot-chieu-thanh-pho-cu",
    title: "Một chiều thành phố cũ",
    authorSlug: "thach-lam",
    content:
      "Thành phố cũ không ồn ào theo cách khiến người ta mệt. Nó giữ nhịp bằng tiếng chuông xe, tiếng hàng rong và những mái hiên thấp đổ bóng xuống lòng đường. Đi thật chậm trong một buổi chiều như thế, người đọc dễ hiểu vì sao có những nơi chỉ cần còn nguyên ánh sáng cũ là đã đủ khiến người ta thương.",
    excerpt:
      "Đoạn văn về không gian phố thị, phù hợp cho Ngữ văn 10 học kỳ một.",
    tags: [
      "ngu-van-10-tap-1",
      "doan-van",
      "thanh-pho",
      "van-hoc-viet-nam",
      "que-huong",
    ],
    categories: ["Tản văn", "Đời sống"],
    grade: "Lớp 10",
    textbook: "Ngữ văn 10 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan10Tap2: Paragraph[] = [
  createParagraph({
    slug: "nguoi-ganh-hang-hoa",
    title: "Người gánh hàng hoa",
    authorSlug: "thach-lam",
    content:
      "Người gánh hàng hoa đi qua phố vào lúc sáng vừa lên. Những bông cúc vàng, huệ trắng và mùi lá xanh làm cả con đường đổi sắc rất nhanh. Có những hình ảnh chỉ lướt qua chốc lát nhưng lại khiến người ta nhớ lâu, bởi chúng mang theo một vẻ đẹp bình dị mà không ồn ào.",
    excerpt: "Đoạn văn quan sát phố phường cho Ngữ văn 10 học kỳ hai.",
    tags: [
      "ngu-van-10-tap-2",
      "doan-van",
      "thanh-pho",
      "lao-dong",
      "van-hoc-viet-nam",
    ],
    categories: ["Miêu tả", "Đời sống"],
    grade: "Lớp 10",
    textbook: "Ngữ văn 10 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan11Tap1: Paragraph[] = [
  createParagraph({
    slug: "trang-sach-va-o-cua-lop",
    title: "Trang sách và ô cửa lớp",
    authorSlug: "nguyen-minh-chau",
    content:
      "Có những giờ học mà người ta nhớ không phải vì kiến thức cụ thể, mà vì ánh sáng trên ô cửa lớp và trang sách mở trước mặt. Hai thứ ấy tưởng như rất đơn giản, nhưng khi gặp nhau đúng lúc lại tạo thành một khoảng lặng hiếm hoi khiến người đọc muốn ngồi thêm, nghĩ thêm và hiểu sâu thêm một điều gì đó.",
    excerpt:
      "Đoạn văn về trải nghiệm học văn, phù hợp cho Ngữ văn 11 học kỳ một.",
    tags: [
      "ngu-van-11-tap-1",
      "doan-van",
      "truong-hoc",
      "uoc-mo",
      "van-hoc-viet-nam",
    ],
    categories: ["Suy ngẫm", "Học đường"],
    grade: "Lớp 11",
    textbook: "Ngữ văn 11 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan11Tap2: Paragraph[] = [
  createParagraph({
    slug: "buoi-hoc-cuoi-mua-mua",
    title: "Buổi học cuối mùa mưa",
    authorSlug: "nguyen-nhat-anh",
    content:
      "Chiều hôm ấy mưa còn sót lại trên những tán cây ngoài cửa lớp. Bài học cuối cùng của ngày đi qua chậm hơn thường lệ, có lẽ vì ai cũng thấy thời gian đang chuẩn bị đổi sang một quãng khác. Những buổi học như vậy ít khi đặc biệt ngay lúc xảy ra, nhưng về sau lại trở thành thứ người ta nhớ rõ đến từng mảng sáng tối.",
    excerpt:
      "Đoạn văn chuyển mùa và chuyển nhịp tuổi trẻ cho Ngữ văn 11 học kỳ hai.",
    tags: [
      "ngu-van-11-tap-2",
      "doan-van",
      "truong-hoc",
      "mua-thu",
      "2000s-hoc-duong",
    ],
    categories: ["Học đường", "Hoài niệm"],
    grade: "Lớp 11",
    textbook: "Ngữ văn 11 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan12Tap1: Paragraph[] = [
  createParagraph({
    slug: "con-duong-ra-ga",
    title: "Con đường ra ga",
    authorSlug: "kim-lan",
    content:
      "Con đường ra ga không dài nhưng luôn gợi cảm giác đi về phía một điều gì trọng đại. Người đi nhanh hơn, lời chào cũng ngắn hơn, còn cảnh vật hai bên thì như cố ở lại thật lâu trong mắt người. Chính ở những quãng đường ngắn như thế, người ta hiểu thêm giá trị của quê nhà và của những cuộc chia xa.",
    excerpt:
      "Đoạn văn về hành trình và cảm giác trưởng thành cho Ngữ văn 12 học kỳ một.",
    tags: [
      "ngu-van-12-tap-1",
      "doan-van",
      "que-huong",
      "dat-nuoc",
      "van-hoc-viet-nam",
    ],
    categories: ["Tự sự", "Suy ngẫm"],
    grade: "Lớp 12",
    textbook: "Ngữ văn 12 - Tập 1",
    volume: "Tập 1",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

const paragraphNguVan12Tap2: Paragraph[] = [
  createParagraph({
    slug: "anh-den-on-thi",
    title: "Ánh đèn ôn thi",
    authorSlug: "nguyen-minh-chau",
    content:
      "Đêm ôn thi thường rất yên, chỉ còn tiếng giấy lật và ánh đèn bàn giữ một khoảng sáng nhỏ. Ở tuổi cuối phổ thông, ai cũng có một lần ngồi trước tập sách dày mà thấy mình vừa lo lắng vừa hy vọng. Chính những đêm như vậy khiến người ta hiểu rằng trưởng thành đôi khi bắt đầu từ việc ngồi lại với một mục tiêu rất riêng và đi đến cùng với nó.",
    excerpt:
      "Đoạn văn khép lại dữ liệu mock bằng không khí ôn thi và trưởng thành ở Ngữ văn 12 học kỳ hai.",
    tags: [
      "ngu-van-12-tap-2",
      "doan-van",
      "uoc-mo",
      "truong-hoc",
      "van-hoc-viet-nam",
      "2000s-hoc-duong",
    ],
    categories: ["Suy ngẫm", "Học đường"],
    grade: "Lớp 12",
    textbook: "Ngữ văn 12 - Tập 2",
    volume: "Tập 2",
    source: "Đoạn văn mô phỏng cho thư viện demo.",
  }),
];

export const paragraphs: Paragraph[] = [
  ...paragraphTiengViet1Tap2,
  ...paragraphTiengViet2Tap1,
  ...paragraphTiengViet2Tap2,
  ...paragraphTiengViet3Tap1,
  ...paragraphTiengViet3Tap2,
  ...paragraphTiengViet4Tap1,
  ...paragraphTiengViet4Tap2,
  ...paragraphTiengViet5Tap1,
  ...paragraphTiengViet5Tap2,
  ...paragraphNguVan6Tap1,
  ...paragraphNguVan6Tap2,
  ...paragraphNguVan7Tap1,
  ...paragraphNguVan7Tap2,
  ...paragraphNguVan8Tap1,
  ...paragraphNguVan8Tap2,
  ...paragraphNguVan9Tap1,
  ...paragraphNguVan9Tap2,
  ...paragraphNguVan10Tap1,
  ...paragraphNguVan10Tap2,
  ...paragraphNguVan11Tap1,
  ...paragraphNguVan11Tap2,
  ...paragraphNguVan12Tap1,
  ...paragraphNguVan12Tap2,
];
