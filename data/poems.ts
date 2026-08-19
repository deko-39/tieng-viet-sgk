import { createPlaceholderImage } from "@/data/content-images";
import type { Poem } from "@/types/content";

type PoemSeed = Omit<Poem, "id" | "kind" | "image" | "addedAt"> & {
  addedAt?: string;
  imageCaption?: string;
  image?: Poem["image"];
};

function createPoem(seed: PoemSeed): Poem {
  return {
    ...seed,
    id: seed.slug,
    kind: "poem",
    addedAt: seed.addedAt ?? "2026-08-13",
    image:
      seed.image === undefined
        ? createPlaceholderImage(
            seed.slug,
            `${seed.title}`,
            seed.imageCaption ?? `<${seed.title}>`,
            seed.textbook,
            seed.volume,
            seed.title,
          )
        : seed.image,
  };
}

const poemTiengViet1Tap1: Poem[] = [
  createPoem({
    slug: "be-ngu-trua",
    title: "Bé ngủ trưa",
    authorSlug: "khuyet-danh",
    content: "Gió lùa kẽ lá\nLá khẽ đu đưa\nGió qua cửa sổ\nBé vừa ngủ trưa.",
    excerpt:
      "Bài thơ bốn câu ngắn, nhẹ và êm, phù hợp với mạch đọc đầu cấp về giấc ngủ trưa và nhịp sinh hoạt tuổi nhỏ.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "tuoi-tho",
      "gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Tác giả khuyết danh.",
    image: undefined,
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "gio-tu-tay-me",
    title: "Gió từ tay mẹ",
    authorSlug: "khuyet-danh",
    content: "Gió từ tay mẹ\nRu bé ngủ say\nThay cho gió trời\nGiữa trưa oi ả.",
    excerpt:
      "Bài thơ ngắn, dịu và gần, phù hợp với mạch đọc Tiếng Việt 1 về giấc ngủ trưa và hơi ấm gia đình.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "gia-dinh",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Tác giả khuyết danh.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "be-thoi-sao",
    title: "Bé thổi sáo",
    authorSlug: "khuyet-danh",
    content: "Suối chảy rì rào\nGió reo lao xao\nBé ngồi thổi sáo.",
    excerpt:
      "Bài thơ ba câu ngắn, gọn và giàu âm thanh, hợp với mạch đọc đầu cấp về thiên nhiên và tuổi nhỏ.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "tuoi-tho",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Tác giả khuyết danh.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "chao-mao",
    title: "Chào Mào",
    authorSlug: "khuyet-danh",
    content: "Chào Mào có áo màu nâu\nCứ mùa ổi tới từ đâu bay về.",
    excerpt:
      "Bài thơ ngắn với hình ảnh chim chóc và mùa quả chín, hợp với mạch đọc lớp 1 về thiên nhiên gần gũi.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "thien-nhien",
      "chim-muon",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Tác giả khuyết danh.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "un-a-un-in",
    title: "Ủn à ủn ỉn",
    authorSlug: "khuyet-danh",
    content: "Ủn à ủn ỉn\nChín chú lợn con\nĂn đã no tròn\nCả đàn đi ngủ.",
    excerpt:
      "Bài thơ đồng dao ngắn, vui tai và gần sinh hoạt tuổi nhỏ, hợp với mạch đọc lớp 1.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "dong-dao",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Đồng dao"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "song",
    title: "Sóng",
    authorSlug: "khuyet-danh",
    content: "Sóng nối sóng\nMãi không thôi\nSóng sóng sóng\nĐến chân trời.",
    excerpt:
      "Bài thơ ngắn, nhịp lặp rõ và giàu hình ảnh, phù hợp với mạch đọc lớp 1 về thiên nhiên và âm điệu.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "thien-nhien",
      "bien-ca",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "do",
    title: "Đố",
    authorSlug: "dan-gian",
    content: "Không sơn mà đỏ\nKhông gõ mà kêu\nKhông khều mà rụng.",
    excerpt:
      "Bài thơ đố ngắn, giàu nhịp điệu và gợi tò mò, phù hợp với mạch đọc lớp 1.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "cau-do",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Câu đố"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "du-ai-noi-nga-noi-nghieng",
    title: "Dù ai nói ngả nói nghiêng",
    authorSlug: "dan-gian",
    content: "Dù ai nói ngả nói nghiêng\nLòng ta vẫn vững như kiềng ba chân.",
    excerpt:
      "Câu thơ ngắn, chắc nhịp và giàu tính nhắc nhớ, phù hợp với mạch đọc lớp 1 về lời hay ý đẹp.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "ca-dao",
      "pham-chat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Ca dao"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "do-2",
    title: "Đố 2",
    authorSlug: "dan-gian",
    content:
      "Không có chân có cánh\nSao gọi là con sông?\nKhông có lá có cành\nSao gọi là ngọn gió?",
    excerpt:
      "Bài thơ đố ngắn với cách hỏi liên tiếp, phù hợp với mạch đọc lớp 1 về quan sát và liên tưởng.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "cau-do",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Câu đố"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "do-3",
    title: "Đố 3",
    authorSlug: "dan-gian",
    content: "Cái gì cao lớn lênh khênh\nĐứng mà không tựa, ngã kềnh ngay ra?",
    excerpt:
      "Bài thơ đố ngắn, nhịp chắc và gợi hình rõ, phù hợp với mạch đọc lớp 1 về quan sát và suy đoán.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "cau-do",
      "do-vat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Câu đố"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "may-va-bong",
    title: "Mây và bông",
    authorSlug: "ngo-van-phu",
    content:
      "Trên trời mây trắng như bông\nỞ dưới cánh đồng bông trắng như mây\nMấy cô má đỏ hây hây\nĐội bông như thể đội mây về làng.",
    excerpt:
      "Bài thơ giàu hình ảnh so sánh, nhịp mềm và gần cảnh quê, phù hợp với mạch đọc lớp 1 về thiên nhiên và lao động.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "que-huong",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Ngô Văn Phú.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "thang-7-thang-8",
    title: "Tháng 7 tháng 8",
    authorSlug: "khuyet-danh",
    content: "Mưa tháng bảy gãy cành trám\nNắng tháng tám rám trái bòng.",
    excerpt:
      "Bài thơ ngắn, giàu nhịp dân gian và hình ảnh mùa vụ, phù hợp với mạch đọc lớp 1 về thiên nhiên và thời tiết.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "thoi-tiet",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "chum-hoa-gie",
    title: "Chùm hoa giẻ",
    authorSlug: "xuan-hoai",
    content:
      "Bờ cây chen chúc lá\nChùm giẻ treo nơi nào?\nGió về đưa hương lạ\nCứ thơm hoài, xôn xao!",
    fullContent:
      "Bờ cây chen chúc lá\nChùm giẻ treo nơi nào?\nGió về đưa hương lạ\nCứ thơm hoài, xôn xao!\n\nBạn trai vin cành hái\nBạn gái lượm đầy tay\nBạn trai túi áo đầy\nBạn gái cài sau nón\n\nChùm nay hoa vàng rộm\nRủ nhau dành tặng cô\nLớp học chưa đến giờ\nĐã thơm bàn cô giáo.",
    excerpt:
      "Bài thơ ngắn, giàu hương sắc và nhịp rộn, phù hợp với mạch đọc lớp 1 về chùm hoa giẻ, bạn bè và lớp học đầu ngày.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "truong-hoc",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Xuân Hoài.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "con-co",
    title: "Con cò",
    authorSlug: "khuyet-danh",
    content: "Con cò mà đi ăn đêm\nĐậu phải cành mềm lộn cổ xuống ao.",
    fullContent:
      "Con cò mà đi ăn đêm,\nĐậu phải cành mềm lộn cổ xuống ao.\nÔng ơi, ông vớt tôi nao,\nTôi có lòng nào ông hãy xáo măng.\nCó xáo thì xáo nước trong,\nĐừng xáo nước đục đau lòng cò con.",
    excerpt:
      "Bài thơ ngắn mang âm điệu ca dao quen thuộc, phù hợp với mạch đọc lớp 1 về lời đồng dao và hình ảnh dân gian.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "ca-dao",
      "chim-muon",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Ca dao"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Tác giả khuyết danh.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "con-co-be-be",
    title: "Con cò bé bé",
    authorSlug: "le-xuan-tho",
    content:
      "Con cò bé bé\nNó đậu cành tre\nĐi không hỏi mẹ\nBiết đi đường nào",
    fullContent:
      "Con cò bé bé\nNó đậu cành tre\nĐi không hỏi mẹ\nBiết đi đường nào\n\nKhi đi em hỏi\nKhi về em chào\nMiệng em chúm chím\nMẹ có yêu không nào",
    excerpt:
      "Bài thơ ngắn, sáng và gần lời nói hằng ngày, phù hợp với mạch đọc lớp 1 về lễ phép và nếp sinh hoạt.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "le-phep",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Lê Xuân Thọ.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "qua-ngot-cuoi-mua",
    title: "Quả ngọt cuối mùa",
    authorSlug: "vo-thanh-an",
    content:
      "Trong vòm lá mới chồi non\nChùm cam bà giữ vẫn còn đung đưa\nQuả ngon dành tận cuối mùa\nChờ con, phần cháu bà chưa trảy vào.",
    fullContent:
      "Trong vòm lá mới chồi non\nChùm cam bà giữ vẫn còn đung đưa\nQuả ngon dành tận cuối mùa\nChờ con, phần cháu bà chưa trảy vào\nGiêng, hai rét cứa như dao\nNghe tiếng chào mào chống gậy ra trông\nNom đoài rồi lại ngắm đông\nBề lo sương táp, bề phòng chim ăn\nQuả vàng nằm giữa cành xuân\nMải mê góp mật, chuyên cần toả hương\nBà ơi! Thương mấy là thương\nVắng con, xa cháu tóc sương da mồi\nBà như quả ngọt chín rồi\nCàng thêm tuổi tác, càng tươi lòng vàng.",
    excerpt:
      "Bài thơ gia đình dịu và ấm, phù hợp với mạch đọc lớp 1 về bà và tình thân trong đời sống hằng ngày.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "gia-dinh",
      "ba-chau",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Võ Thanh An.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "bai-hat-trong-cay",
    title: "Bài hát trồng cây",
    authorSlug: "be-kien-quoc",
    content:
      "Ai trồng cây\nNgười đó có tiếng hát\nTrên vòm cây\nChim hót lời mê say.",
    fullContent:
      "Ai trồng cây\nNgười đó có tiếng hát\nTrên vòm cây\nChim hót lời mê say\n\nAi trồng cây\nNgười đó có ngọn gió\nRung cành cây\nHoa lá đùa lay lay\n\nAi trồng cây\nNgười đó có bóng mát\nTrong vòm cây\nQuên nắng xa đường dài\n\nAi trồng cây\nNgười đó có hạnh phúc\nMong chờ cây\nMau lớn theo từng ngày\n\nAi trồng cây...\nEm trồng cây...\nEm trồng cây...",
    excerpt:
      "Bài thơ ngắn, sáng nhịp và gần thiên nhiên, phù hợp với mạch đọc lớp 1 về cây cối và niềm vui lao động.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "cay-coi",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Bế Kiến Quốc.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "dan-ga-con",
    title: "Đàn gà con",
    authorSlug: "pham-ho",
    content:
      "Cái mỏ tí hon\nCái chân bé xíu\nLông vàng mát dịu\nMắt đen sáng ngời\nƠi chú gà ơi!\nTa yêu chú lắm.",
    fullContent:
      "Mười quả trứng tròn\nMẹ gà ấp ủ\nMười chú gà con\nHôm nay ra đủ\n\nLòng trắng, lòng đỏ,\nThành mỏ, thành chân\nCái mỏ tí hon\nCái chân bé xíu\n\nLông vàng mát dịu\nMắt đen sáng ngời\nƠi chú gà ơi!\nTa yêu chú lắm\n\nTrong bàn tay ấm\nChú đứng chú kêu\nMẹ gà “tục tục”\nChú ngoái nhìn theo\n\nTa thả chú ra\nChạy ăn cùng mẹ\nChạy biến cả chân\nChạy sao nhanh thế!\n\nLà gà của bé\nGà nhé đừng quên\nĂn khỏe, lớn khỏe\nĐẻ rõ nhiều lên!",
    excerpt:
      "Bài thơ thiếu nhi giàu hình ảnh và nhịp điệu, phù hợp với mạch đọc lớp 1 về đàn gà con và tình cảm yêu thương loài vật nhỏ bé.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "con-vat",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Phạm Hổ.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "do-6",
    title: "Đố 6",
    authorSlug: "dan-gian",
    content:
      "Con gì mào đỏ\nLông mượt như tơ\nSáng sớm tinh mơ\nGọi người thức dậy?",
    excerpt:
      "Bài thơ đố ngắn, gần gũi và giàu nhịp điệu, phù hợp với mạch đọc lớp 1 về con vật quen thuộc.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "cau-do",
      "con-vat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Câu đố"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "mot-mai-nha-chung",
    title: "Một mái nhà chung",
    authorSlug: "dinh-hai",
    content:
      "Mái nhà của ốc\nTròn vo bên mình\nMái nhà của em\nNghiêng giàn gấc đỏ.",
    fullContent:
      "Mái nhà của chim\nLợp nghìn lá biếc\nMái nhà của cá\nSóng xanh rập rình.\n\nMái nhà của dím\nSâu trong lòng đất\nMái nhà của ốc\nTròn vo bên mình.\n\nMái nhà của em\nNghiêng giàn gấc đỏ\nMái nhà của bạn\nHoa giấy lợp hồng.\n\nMọi mái nhà riêng\nCó mái nhà chung\nLà bầu trời xanh\nXanh đến vô cùng.\n\nMọi mái nhà riêng\nCó mái nhà chung\nRực rỡ vòm cao\nBảy sắc cầu vồng.\n\nBạn ơi, ngước mắt\nNgước mắt lên trông\nBạn ơi, hãy hát\nHát câu cuối cùng:\nMột mái nhà chung\nMột mái nhà chung…",
    excerpt:
      "Bài thơ ngắn, giàu hình ảnh so sánh và gần đời sống, phù hợp với mạch đọc lớp 1 về con vật và mái ấm quen thuộc.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "con-vat",
      "gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Định Hải.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "que-huong",
    title: "Quê hương",
    authorSlug: "do-trung-quan",
    content:
      "Quê hương là con diều biếc\nChiều chiều con thả trên đồng\nQuê hương là con đò nhỏ\nÊm đềm khua nước ven sông.",
    fullContent:
      "Quê hương là gì hả mẹ\nMà cô giáo dạy hãy yêu?\nQuê hương là gì hả mẹ\nAi đi xa cũng nhớ nhiều?\n\nQuê hương là chùm khế ngọt\nCho con trèo hái mỗi ngày\nQuê hương là đường đi học\nCon về rợp bướm vàng bay\n\nQuê hương là con diều biếc\nTuổi thơ con thả trên đồng\nQuê hương là con đò nhỏ\nÊm đềm khua nước ven sông\n\nQuê hương là cầu tre nhỏ\nMẹ về nón lá nghiêng che\nLà hương hoa đồng cỏ nội\nBay trong giấc ngủ đêm hè\n\nQuê hương là đêm trăng tỏ\nHoa cau rụng trắng ngoài thềm\nTiếng ếch râm ran bờ ruộng\nCon nằm nghe giữa mưa đêm\n\nQuê hương là bàn tay mẹ\nDịu dàng hái lá mồng tơi\nBát canh ngọt ngào tỏa khói\nSau chiều tan học mưa rơi\n\nQuê hương là vàng hoa bí\nLà hồng tím giậu mồng tơi\nLà đỏ đôi bờ dâm bụt\nMàu hoa sen trắng tinh khôi\n\nQuê hương mỗi người đều có\nVừa khi mở mắt chào đời\nQuê hương là dòng sữa mẹ\nThơm thơm giọt xuống bên nôi\n\nQuê hương mỗi người chỉ một\nNhư là chỉ một mẹ thôi\nQuê hương nếu ai không nhớ\nSẽ không lớn nổi thành người.",
    excerpt:
      "Bài thơ ngắn, dịu và giàu hình ảnh quê nhà, phù hợp với mạch đọc lớp 1 về cảnh vật thân thuộc và tình cảm gắn bó.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "que-huong",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Quê hương"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Đỗ Trung Quân.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "co-day",
    title: "Cô dạy",
    authorSlug: "pham-ho",
    content:
      "Mẹ, mẹ ơi! Cô dạy:\nPhải giữ sạch đôi tay,\nBàn tay mà dây bẩn,\nSách, áo cũng bẩn ngay.",
    fullContent:
      "Mẹ, mẹ ơi! Cô dạy:\nPhải giữ sạch đôi tay,\nBàn tay mà dây bẩn,\nSách, áo cũng bẩn ngay.\n\nMẹ, mẹ ơi! Cô dạy:\nCãi nhau là không vui\nCái miệng nó xinh thế\nChỉ nói điều hay thôi.",
    excerpt:
      "Bài thơ ngắn, rõ ý và gần sinh hoạt học đường, phù hợp với mạch đọc lớp 1 về giữ gìn vệ sinh và nề nếp.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "hoc-duong",
      "sinh-hoat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Phạm Hổ.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "loi-chao-di-truoc",
    title: "Lời chào đi trước",
    authorSlug: "nguyen-hoang-son",
    content:
      "Đi đến nơi nào\nLời chào đi trước\nLời chào dẫn bước\nChẳng sợ lạc nhà\nLời chào kết bạn\nCon đường bớt xa.",
    fullContent:
      "Đi đến nơi nào\nLời chào đi trước\nLời chào dẫn bước\nChẳng sợ lạc nhà\nLời chào kết bạn\nCon đường bớt xa\nLời chào là hoa\nNở từ lòng tốt\nLà cơn gió mát\nBuổi sáng đầu ngày\nNhư một bàn tay\nChân thành cởi mở\n\nAi ai cũng có\nChẳng nặng là bao\nBạn ơi, đi đâu\nNhớ mang đi nhé!",
    excerpt:
      "Bài thơ ngắn, rõ ý và giàu tính nhắc nhớ, phù hợp với mạch đọc lớp 1 về lễ phép và cách ứng xử hằng ngày.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "le-phep",
      "sinh-hoat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Nguyễn Hoàng Sơn.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "cay-da",
    title: "Cây đa",
    authorSlug: "khuyet-danh",
    content:
      "Hỏi cây bao nhiêu tuổi\nCây không nhớ tháng năm\nCây chỉ dang tay lá\nChe tròn một bóng râm.",
    excerpt:
      "Bài thơ ngắn, trầm và giàu hình ảnh, phù hợp với mạch đọc lớp 1 về cây cối và bóng mát làng quê.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "cay-coi",
      "que-huong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Tác giả khuyết danh.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "chim-chien-chien",
    title: "Chim chiền chiện",
    authorSlug: "huy-can",
    content:
      "Bay cao cao vút\nChim biến mất rồi\nChỉ còn tiếng hót\nLàm xanh da trời.",
    fullContent:
      "Con chim chiền chiện\nBay vút, vút cao\nLòng đầy yêu mến\nKhúc hát ngọt ngào.\n\nCánh đập trời xanh\nCao hoài, cao vợi\nTiếng hót long lanh\nNhư cành sương chói\n\nChim ơi, chim nói\nChuyện chi, chuyện chi?\nLòng vui bối rối\nĐời lên đến thì...\n\nTiếng ngọc trong veo\nChim gieo từng chuỗi\nLòng chim vui nhiều\nHát không biết mỏi.\n\nChim bay, chim sà\nLúa tròn bụng sữa\nĐồng quê chan chứa\nNhững lời chim ca.\n\nBay cao, cao vút\nChim biến mất rồi\nChỉ còn tiếng hót\nLàm xanh da trời...\n\nCon chim chiền chiện\nHồn xanh quê nhà\nSáng nay lại hót\nTưng bừng lòng ta.",
    excerpt:
      "Bài thơ ngắn, nhẹ và giàu âm vang, phù hợp với mạch đọc lớp 1 về bầu trời và tiếng chim.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "chim-muon",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Huy Cận.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "chim-ngoi",
    title: "Chim ngói",
    authorSlug: "ngo-van-phu",
    content:
      "Những đàn chim ngói\nMặc áo màu nâu\nĐeo cườm ở cổ\nChân đất hồng hồng\nNhư nung qua lửa.",
    fullContent:
      "Không hiểu từ đâu\nCứ mùa thu\nChúng bay về khắp cánh đồng,\nsiêng năng nhặt đỗ,\nNhững đàn chim ngói,\nmặc áo màu nâu,\nđeo cườm ở cổ,\nchân đất hồng hồng,\nnhư nung qua lửa.\nMang theo ngọn gió mùa đông bắc đầu tiên\nMùa màng bỗng rực rỡ lên,\nnhững sắc màu đẹp nhất.\n\nChúng đem những tinh chất xa xôi từ những khoảng trời\nVề hoà với sức mỡ màu của đất.\n\nHương đồng, hi vọng tràn trong mắt,\nnhững tiếng cười bay dọc xóm vui.\n\nSao tôi thấy chúng giống những cô gái làng tôi,\nNhững cô gái báo hiệu những mùa màng bát ngát.",
    excerpt:
      "Bài thơ ngắn giàu hình ảnh tả chim, phù hợp với mạch đọc lớp 1 về thiên nhiên và loài vật quen thuộc.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "chim-muon",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Theo Ngô Văn Phú.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "chim-chich",
    title: "Chim chích",
    authorSlug: "khuyet-danh",
    content:
      "Tôi là chim chích\nNhà ở cành chanh\nTìm sâu tôi bắt\nCho chanh quả nhiều\nRi rích, ri rích\nCó ích, có ích.",
    excerpt:
      "Bài thơ ngắn, vui nhịp và rõ ý, phù hợp với mạch đọc lớp 1 về loài chim quen thuộc và ích lợi trong vườn cây.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "chim-muon",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Tác giả khuyết danh.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "do-7",
    title: "Đố 7",
    authorSlug: "dan-gian",
    content:
      "Con gì có cánh\nMà lại biết bơi\nNgày xuống ao chơi\nĐêm về đẻ trứng?",
    excerpt:
      "Bài thơ đố ngắn, vui và gần cảnh quê, phù hợp với mạch đọc lớp 1 về con vật quen thuộc.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "cau-do",
      "con-vat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Câu đố"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "con-meo-ma-treo-cay-cau",
    title: "Con mèo mà trèo cây cau",
    authorSlug: "dan-gian",
    content:
      "Con Mèo mà trèo cây cau\nHỏi thăm chú Chuột đi đâu vắng nhà\nChú Chuột đi chợ đường xa\nMua mắm, mua muối giỗ cha con Mèo.",
    excerpt:
      "Bài thơ đồng dao quen thuộc, giàu nhịp kể và dí dỏm, phù hợp với mạch đọc lớp 1 về con vật gần gũi.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "dong-dao",
      "con-vat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Đồng dao"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "do-4",
    title: "Đố 4",
    authorSlug: "dan-gian",
    content: "Da cóc mà bọc bột lọc\nBột lọc mà bọc hòn than.",
    excerpt:
      "Bài thơ đố ngắn, vui tai và giàu hình dung dân gian, phù hợp với mạch đọc lớp 1 về câu đố quen thuộc.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "cau-do",
      "dong-dao",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Câu đố"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "do-5",
    title: "Đố 5",
    authorSlug: "dan-gian",
    content: "Một đàn cò trắng phau phau\nĂn no tắm mát rủ nhau đi nằm.",
    excerpt:
      "Bài thơ đố ngắn với nhịp vui và hình ảnh dân dã, phù hợp với mạch đọc lớp 1 về câu đố quen thuộc.",
    tags: [
      "tieng-viet-1-tap-1",
      "tho",
      "cau-do",
      "chim-muon",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Câu đố"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
];

const poemTiengViet1Tap2: Poem[] = [
  createPoem({
    slug: "nai",
    title: "Nai",
    authorSlug: "luu-trong-lu",
    content: "Lá thu kêu xào xạc\nCon nai vàng ngơ ngác\nĐạp trên lá vàng khô.",
    excerpt:
      "Bài thơ ngắn, giàu nhạc điệu và hình ảnh mùa thu, phù hợp với mạch đọc lớp 1 về thiên nhiên và cảm nhận cảnh sắc.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "mua-thu",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "chuon-chuon",
    title: "Chuồn chuồn",
    authorSlug: "dan-gian",
    content:
      "Chuồn chuồn bay thấp\nMưa ngập bờ ao\nChuồn chuồn bay cao\nMưa rào lại tạnh.",
    excerpt:
      "Bài thơ ngắn, rõ nhịp và gần quan sát dân gian, phù hợp với mạch đọc lớp 1 về thiên nhiên và thời tiết.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "thoi-tiet",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "may",
    title: "Mây",
    authorSlug: "dan-gian",
    content:
      "Đám mây xốp trắng như bông\nNgủ quên dưới đáy hồ trong lúc nào\nNghe con cá đớp ngôi sao\nGiật mình mây thức bay vào rừng xa.",
    excerpt:
      "Bài thơ giàu hình ảnh tưởng tượng và nhịp điệu êm, phù hợp với mạch đọc lớp 1 về thiên nhiên và liên tưởng tuổi nhỏ.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "bau-troi",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "viet-nam",
    title: "Việt Nam",
    authorSlug: "dan-gian",
    content:
      "Việt Nam đất nước ta ơi\nMênh mông biển lúa đâu trời đẹp hơn\nCánh cò bay lả dập dờn\nMây mờ che đỉnh Trường Sơn sớm chiều.",
    fullContent:
      "Việt Nam đất nước ta ơi\nMênh mông biển lúa đâu trời đẹp hơn\nCánh cò bay lả dập dờn\nMây mờ che đỉnh Trường Sơn sớm chiều\n\nQuê hương biết mấy thân yêu\nBao nhiêu đời đã chịu nhiều thương đau\nMặt người vất vả in sâu\nGái trai cũng một áo nâu nhuộm bùn.\n\nĐất nghèo nuôi những anh hùng\nChìm trong máu lửa lại vùng đứng lên\nĐạp quân thù xuống đất đen\nSúng gươm vứt bỏ lại hiền như xưa\n\nViệt Nam đất nắng chan hoà\nHoa thơm quả ngọt bốn mùa trời xanh\nMắt đen cô gái long lanh\nYêu ai yêu trọn tấm tình thuỷ chung.\n\nĐất trăm nghề của trăm vùng\nKhách phương xa tới lạ lùng tìm xem\nTay người như có phép tiên\nTrên tre lá cũng dệt nghìn bài thơ\n\nNước bâng khuâng những chuyến đò\nĐêm đêm còn vọng câu hò Trương Chi\nĐói nghèo nên phải chia ly\nXót xa lòng kẻ rời quê lên đường.\n\nTa đi ta nhớ núi rừng\nTa đi ta nhớ dòng sông vỗ bờ\nNhớ đồng ruộng, nhớ khoai ngô\nBữa cơm rau muống quả cà giòn tan.",
    excerpt:
      "Bài thơ giàu hình ảnh quê hương đất nước và nhịp điệu ngân vang, phù hợp với mạch đọc lớp 1 về cảnh sắc Việt Nam.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "que-huong",
      "dat-nuoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Quê hương"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "dua",
    title: "Dừa",
    authorSlug: "dan-gian",
    content:
      "Tiếng dừa làm dịu nắng trưa\nGọi đàn gió đến cùng dừa múa reo\nTrời trong đầy tiếng rì rào\nĐàn cò đánh nhịp bay vào bay ra.",
    excerpt:
      "Bài thơ giàu âm thanh và hình ảnh thiên nhiên, phù hợp với mạch đọc lớp 1 về cây cối và cảnh trời quê nhà.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "cay-coi",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "duoi-bat",
    title: "Đuổi bắt",
    authorSlug: "dan-gian",
    content:
      "Nhanh tay thì được\nChậm tay thì thua\nChân giậm giả vờ\nCướp cờ mà chạy.",
    excerpt:
      "Bài thơ ngắn, nhịp nhanh và gần trò chơi tuổi nhỏ, phù hợp với mạch đọc lớp 1 về sinh hoạt và vận động thiếu nhi.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "tro-choi",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "di-hoc",
    title: "Đi học",
    authorSlug: "minh-chinh",
    content:
      "Hôm qua em tới trường\n\nMẹ dắt tay từng bước\n\nHôm nay mẹ lên nương\n\nMột mình em tới lớp.\n\nTrường của em be bé\n\nNằm lặng giữa rừng cây\n\nCô giáo em tre trẻ\n\nDạy em hát rất hay.\n\nHương rừng thơm đồi vắng\n\nNước suối trong thầm thì\n\nCọ xoè ô che nắng\n\nRâm mát đường em đi.",
    excerpt:
      "Bài thơ trong trẻo và giàu nhịp bước đến lớp, phù hợp với mạch đọc lớp 1 về mẹ, trường nhỏ và con đường đi học giữa núi rừng.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "truong-hoc",
      "que-huong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Minh Chính.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "me-hoa-luon-song",
    title: "Mè hoa lượn sóng",
    authorSlug: "thach-quy",
    content:
      "Cá mè ăn nổi\nCá chép ăn chìm\nCon tép lim dim\nTrong chùm rễ cỏ\nCon cua áo đỏ\nCắt cỏ trên bờ\nCon cá múa cờ\nĐẹp ơi là đẹp.",
    fullContent:
      "Mẻ hỏa mè hoa\n\nÙa ra giỡn nước\n\nChị bơi đi trước\n\nEm lượn theo sau\n\nRuộng rộng, ao sâu\n\nĐìa con đìa cạn\n\nGọi chúng gọi bạn\n\nĐắp đập be bờ\n\nQuăng đó quăng lờ\n\nCắm cờ lá chuối\n\nCá mè ăn nổi\n\nCá chép ăn chìm\n\nCon tép lim dim\n\nTrong chùm rễ cỏ\n\nCon cua áo đỏ\n\nCắt cỏ trên bờ\n\nCon cá múa cờ\n\nĐẹp ơi là đẹp!",
    excerpt:
      "Bài thơ ngắn, giàu nhịp điệu và hình ảnh sinh động, phù hợp với mạch đọc lớp 1 về thế giới con vật dưới nước.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "con-vat",
      "song-nuoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Thạch Quỳ.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "hoa",
    title: "Hoa",
    authorSlug: "dan-gian",
    content:
      "Hoa ban xoè cánh trắng\nLan tươi màu nắng vàng\nCành hồng khoe nụ thắm\nBay làn hương dịu dàng.",
    excerpt:
      "Bài thơ ngắn, dịu và giàu sắc hương, phù hợp với mạch đọc lớp 1 về hoa lá và vẻ đẹp thiên nhiên.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "hoa-la",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "lam-nong",
    title: "Làm nông",
    authorSlug: "dan-gian",
    content:
      "Tháng chạp là tháng trồng khoai,\nTháng giêng trồng đậu, tháng hai trồng cà.\nTháng ba cày vỡ ruộng ra,\nTháng tư làm mạ mưa sa đầy đồng.",
    excerpt:
      "Bài thơ ngắn, giàu nhịp dân gian và hình ảnh lao động, phù hợp với mạch đọc lớp 1 về mùa vụ và công việc nhà nông.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "lao-dong",
      "nong-thon",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Lao động"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "lam-anh",
    title: "Làm anh",
    authorSlug: "phan-thi-thanh-nhan",
    content:
      'Làm anh khó đấy\n\nPhải đâu chuyện đùa\n\nVới em gái bé\n\nPhải "người lớn" cơ.\n\nKhi em bé khóc\n\nAnh phải dỗ dành\n\nNếu em bé ngã\n\nAnh nâng dịu dàng.\n\nMẹ cho quà bánh\n\nChia em phần hơn\n\nCó đồ chơi đẹp\n\nCũng nhường em luôn.\n\nLàm anh thật khó\n\nNhưng mà thật vui\n\nAi yêu em bé\n\nThì làm được thôi.',
    excerpt:
      "Bài thơ ngắn, ấm và giàu nhịp nhắc nhở, phù hợp với mạch đọc lớp 1 về anh em, sự nhường nhịn và tình cảm gia đình.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "gia-dinh",
      "pham-chat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Phan Thị Thanh Nhàn.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "o-o-o",
    title: "Ò ó o",
    authorSlug: "tran-dang-khoa",
    content:
      "Ò... ó... o...\n\nÒ... ó... o...\n\nTiếng gà\n\nTiếng gà\n\nGiục quả na\n\nMở mắt\n\nTròn xoe\n\nGiục hàng tre\n\nĐâm măng\n\nNhọn hoắt\n\nGiục buồng chuối\n\nThơm lừng\n\nTrứng cuốc\n\nGiục hạt đậu\n\nNảy mầm\n\nGiục bông lúa\n\nUốn câu\n\nGiục con trâu\n\nRa đồng\n\nGiục đàn sao\n\nTrên trời\n\nChạy trốn\n\nGọi ông trời\n\nNhô lên\n\nRửa mặt\n\nÔi bốn bề\n\nBát ngát\n\nTiếng gà\n\nÒ... ó... o\n\nÒ... ó... o.",
    excerpt:
      "Bài thơ giàu nhịp điệu và sức gọi thức dậy của buổi sớm, phù hợp với mạch đọc lớp 1 về làng quê, thiên nhiên và âm thanh quen thuộc.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "que-huong",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Trần Đăng Khoa.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "sang-nay",
    title: "Sáng nay",
    authorSlug: "thy-ngoc",
    content:
      'Có ngàn tia nắng nhỏ\nĐi học sáng hôm nay\nCó trăm trang sách mở\nXòe như cánh chim bay.\n\nTránh nắng, từng dòng chữ\nXếp thành hàng nhấp nhô:\n"I" gầy nên đội mũ,\n"O" đội nón là "ô".\n\nGiờ chơi vừa mới điểm\nGió nấp đâu, ùa ra,\nLàm nụ hồng chúm chím\nBật cười quá, nở hoa.',
    excerpt:
      "Bài thơ trong trẻo và giàu hình ảnh lớp học buổi sớm, phù hợp với mạch đọc lớp 1 về đi học, trang sách và niềm vui giờ chơi.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "truong-hoc",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Thy Ngọc.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "do-8",
    title: "Đố",
    authorSlug: "dan-gian",
    content:
      "Nhỏ như cái kẹo\nDẻo như bánh giầy\nỞ đâu mực đầy\nCó em là sạch.",
    excerpt:
      "Bài thơ đố ngắn, gọn và vui, phù hợp với mạch đọc lớp 1 về đồ dùng học tập và liên tưởng gần gũi trong lớp học.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "cau-do",
      "truong-hoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Câu đố"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "lang-bac",
    title: "Lăng Bác",
    authorSlug: "nguyen-phan-hach",
    content:
      "Nắng Ba Đình mùa thu\n\nThắm vàng trên lăng Bác\n\nVẫn trong vắt bầu trời\n\nNgày Tuyên ngôn Độc lập.\n\nÁng mây nào sà thấp\n\nTrên vầng đá hoa cương.\n\nEm đi trên Quảng trường\n\nBâng khuâng như vẫn thấy\n\nNắng reo trên lễ đài\n\nCó bàn tay Bác vẫy.",
    excerpt:
      "Bài thơ ngắn, trang trọng và trong trẻo, phù hợp với mạch đọc lớp 1 về Bác Hồ, Quảng trường Ba Đình và tình cảm kính yêu đất nước.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "dat-nuoc",
      "bac-ho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Đất nước"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Nguyễn Phan Hách.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "gui-loi-chao-lop-mot",
    title: "Gửi lời chào lớp Một",
    authorSlug: "huu-tuong",
    content:
      "Lớp Một ơi! Lớp Một!\n\nĐón em vào năm trước\n\nNay giờ phút chia tay\n\nGửi lời chào tiến bước!\n\nChào bảng đen cửa sổ\n\nChào chỗ ngồi thân quen\n\nTất cả! Chào ở lại\n\nĐón các bạn nhỏ lên.\n\nChào cô giáo kính mến\n\nCô sẽ xa chúng em...\n\nLàm theo lời cô dạy\n\nCô sẽ luôn ở bên.\n\nLớp Một ơi! Lớp Một!\n\nĐón em vào năm trước\n\nNay giờ phút chia tay\n\nGửi lời chào tiến bước!",
    excerpt:
      "Bài thơ ngắn, lưu luyến và trong trẻo, phù hợp với mạch đọc lớp 1 về chia tay lớp cũ, cô giáo và bước chuyển lên lớp mới.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "truong-hoc",
      "co-giao",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Hữu Tưởng.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "xia-ca-me",
    title: "Xỉa cá mè",
    authorSlug: "dan-gian",
    content:
      "Xỉa cá mè\nĐè cá chép\nTay nào đẹp\nĐi bẻ ngô\nTay nào to\n\nĐi dỡ củ\nTay nào nhỏ\nHái đậu đen\nTay nhọ nhem\nRửa cho sạch.",
    excerpt:
      "Bài thơ ngắn, vui nhịp và giàu âm điệu đồng dao, phù hợp với mạch đọc lớp 1 về trò chơi ngôn ngữ và sinh hoạt lao động gần gũi.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "dong-dao",
      "lao-dong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Đồng dao"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "ong-em",
    title: "Ông em",
    authorSlug: "dan-gian",
    content:
      "Ông em tóc bạc\nTrắng muốt như tơ\nÔng em kể chuyện\nNgày xửa ngày xưa\nChuyện vui như Tết\nChuyện đẹp như mơ\nEm ngồi nghe chuyện\nMê mải say sưa...",
    excerpt:
      "Bài thơ ngắn, ấm và gần, phù hợp với mạch đọc lớp 1 về ông, chuyện kể gia đình và cảm giác say mê của tuổi nhỏ.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "gia-dinh",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-14",
  }),
  createPoem({
    slug: "khon-ngoan",
    title: "Khôn ngoan",
    authorSlug: "dan-gian",
    content: "Khôn ngoan đối đáp người ngoài\nGà cùng một mẹ chớ hoài đá nhau.",
    excerpt:
      "Bài thơ ngắn mang nhịp ca dao và lời nhắc ứng xử, phù hợp với mạch đọc lớp 1 về tình thân và cách sống với nhau.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "ca-dao",
      "gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Ca dao"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "co-giao-lop-em",
    title: "Cô giáo lớp em",
    authorSlug: "nguyen-xuan-sanh",
    content:
      "Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.",
    fullContent:
      'Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời "Chào cô ạ!"\nCô mỉm cười thật tươi\n\nCô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài\n\nNhững lời cô giáo giảng\nẤm trang vở thơm tho\nYêu thương em ngắm mãi\nNhững điểm mười cô cho',
    excerpt:
      "Bài thơ ngắn, dịu và sáng, phù hợp với mạch đọc lớp 1 về cô giáo, lớp học và không khí học tập đầu đời.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "hoc-duong",
      "co-giao",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Nguyễn Xuân Sanh.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "hoa-dao-hoa-mai",
    title: "Hoa đào hoa mai",
    authorSlug: "dan-gian",
    content:
      "Hoa đào ưa rét\nLấm tấm mưa bay\nHoa mai chỉ say\nNắng pha chút gió\nHoa đào thắm đỏ\nHoa mai dát vàng.",
    excerpt:
      "Bài thơ ngắn, giàu sắc màu và nhịp êm, phù hợp với mạch đọc lớp 1 về hoa lá và cảm nhận mùa xuân.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "hoa-la",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "chim-en-2",
    title: "Chim én 2",
    authorSlug: "khuyet-danh",
    content:
      "Cỏ mọc xanh chân đê\nDâu xum xuê nương bãi\nCây cam vàng thêm trái\nHoa khoe sắc nơi nơi.",
    fullContent:
      "Chim én bận đi đâu\nHôm nay về mở hội\nLượn bay như dẫn lối\nRủ mùa xuân cùng về.\n\nCỏ mọc xanh chân đê\nRau xum xuê nương bãi\nCây cam vàng thêm trái\nHoa khoe sắc nơi nơi.\n\nTrời rắc bụi mưa rơi\nMầm non vươn đứng dậy\nÉn bay chao cánh vẫy\nMừng vui rồi lại đi.\n\nChim ơi, chim nói gì\nKhi lớn thêm một tuổi?",
    excerpt:
      "Bài thơ ngắn, trong và giàu sắc xuân, phù hợp với mạch đọc lớp 1 về chim én, đồng quê và thiên nhiên thức dậy.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "nong-thon",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Tác giả khuyết danh.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "me",
    title: "Mẹ",
    authorSlug: "dan-gian",
    content:
      "Nơi ấy ngôi sao khuya\nSoi vào trong giấc ngủ\nNgọn đèn khuya bóng mẹ\nSáng một vùng trên sân.",
    excerpt:
      "Bài thơ ngắn, dịu và ấm, phù hợp với mạch đọc lớp 1 về mẹ, đêm khuya và tình cảm gia đình.",
    tags: ["tieng-viet-1-tap-2", "tho", "gia-dinh", "me", "van-hoc-thieu-nhi"],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "chim-en",
    title: "Chim én",
    authorSlug: "dan-gian",
    content:
      "Chim én bạn đi đâu\nHôm nay về mở hội\nLượn bay như dàn lối\nRủ mùa xuân cùng về.",
    excerpt:
      "Bài thơ ngắn, tươi và giàu không khí mùa xuân, phù hợp với mạch đọc lớp 1 về chim én và cảnh sắc đầu năm.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "mua-xuan",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "trang",
    title: "Trăng",
    authorSlug: "dan-gian",
    content:
      "Những đêm nào trăng khuyết\nTrông giống con thuyền trôi\nEm đi, trăng theo bước\nNhư muốn cùng đi chơi.",
    excerpt:
      "Bài thơ ngắn, nhẹ và giàu hình ảnh, phù hợp với mạch đọc lớp 1 về trăng đêm và liên tưởng tuổi thơ.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "trang-dem",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "thuyen",
    title: "Thuyền",
    authorSlug: "dan-gian",
    content:
      "Sóng nâng thuyền\nLao hối hả\nLưới tung tròn\nKhoang đầy cá\nGió lên rồi\nCánh buồm ơi.",
    excerpt:
      "Bài thơ ngắn, khỏe nhịp và giàu hình ảnh lao động biển, phù hợp với mạch đọc lớp 1 về thuyền bè và sóng gió.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "song-nuoc",
      "lao-dong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Lao động"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "tang-chau",
    title: "Tặng cháu",
    authorSlug: "dan-gian",
    content:
      "Vở này ta tặng cháu yêu ta\nTỏ chút lòng yêu cháu gọi là\nMong cháu ra công mà học tập\nMai sau cháu giúp nước non nhà.",
    excerpt:
      "Bài thơ ngắn, mộc và giàu lời nhắn nhủ, phù hợp với mạch đọc lớp 1 về học tập và tình thương dành cho cháu nhỏ.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "hoc-tap",
      "gia-dinh",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học tập"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "cai-bong",
    title: "Cái Bống",
    authorSlug: "dan-gian",
    content:
      "Cái Bống là cái bống bang\nKhéo sảy, khéo sàng cho mẹ nấu cơm.\nMẹ Bống đi chợ đường trơn\nBống ra gánh đỡ chạy cơn mưa ròng.",
    excerpt:
      "Bài thơ ngắn mang nhịp đồng dao và hình ảnh gia đình gần gũi, phù hợp với mạch đọc lớp 1 về công việc nhà và tình mẹ con.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "gia-dinh",
      "dong-dao",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "ai-day-som",
    title: "Ai dậy sớm",
    authorSlug: "vo-quang",
    content:
      "Ai dậy sớm\nBước ra vườn,\nHoa ngát hương\nĐang chờ đón.\n\nAi dậy sớm\nĐi ra đồng,\nCó vừng đông\nĐang chờ đón.\n\nAi dậy sớm\nChạy lên đồi,\nCả đất trời\nĐang chờ đón.",
    excerpt:
      "Bài thơ ngắn, trong và nhịp nhàng, phù hợp với mạch đọc lớp 1 về buổi sớm, thiên nhiên và nếp sống chăm chỉ.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "thien-nhien",
      "buoi-som",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Theo Võ Quảng.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "me-va-co",
    title: "Mẹ và cô",
    authorSlug: "dan-gian",
    content:
      "Buổi sáng bé chào mẹ,\nChạy tới ôm cô cô,\nBuổi chiều bé chào cô,\nRồi sà vào lòng mẹ.\n\nMặt trời mọc rồi lặn\nTrên đôi chân lon ton.\nHai chân trời của con\nLà mẹ và cô giáo.",
    excerpt:
      "Bài thơ ngắn, ấm và gần, phù hợp với mạch đọc lớp 1 về mẹ, cô giáo và thế giới yêu thương của trẻ nhỏ.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "gia-dinh",
      "truong-hoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "me-co-biet",
    title: "Mẹ có biết",
    authorSlug: "dan-gian",
    content:
      "- Mẹ có biết ở lớp\n\nBạn Hoa không học bài\n\nSáng nay cô giáo gọi\n\nĐứng dậy đỏ bừng tai...\n\n- Mẹ có biết ở lớp\n\nBạn Hùng cứ trêu con\n\nBạn Mai tay đầy mực\n\nCòn bôi bẩn ra bàn...\n\nVuốt tóc con, mẹ bảo:\n\n- Mẹ chẳng nhớ nổi đâu\n\nNói mẹ nghe ở lớp\n\nCon đã ngoan thế nào?",
    excerpt:
      "Bài thơ ngắn, dí dỏm và gần lời nói trẻ nhỏ, phù hợp với mạch đọc lớp 1 về mẹ, lớp học và bài học tự nhìn lại mình.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "gia-dinh",
      "truong-hoc",
      "hoi-thoai",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "quyen-vo-cua-em",
    title: "Quyền vở của em",
    authorSlug: "dan-gian",
    content:
      "Quyển vở này mở ra\nBao nhiêu trang giấy trắng\nTừng dòng kẻ ngay ngắn\nNhư chúng em xếp hàng.\n\nLật từng trang, từng trang\nGiấy trắng sờ mát rượi\nThơm tho mùi giấy mới\nNắn nót bàn tay xinh.\n\nÔi quyển vở mới tinh\nEm viết cho sạch, đẹp\nChữ đẹp là tính nết\nCủa những người trò ngoan.",
    excerpt:
      "Bài thơ ngắn, sáng và giàu không khí đầu năm học, phù hợp với mạch đọc lớp 1 về vở mới, chữ đẹp và nếp học chăm ngoan.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "truong-hoc",
      "hoc-tap",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "ngoi-nha",
    title: "Ngôi nhà",
    authorSlug: "dan-gian",
    content:
      "Em yêu nhà em\nHàng xoan trước ngõ\nHoa xao xuyến nở\nNhư mây từng chùm.\n\nEm yêu tiếng chim\nĐầu hồi lảnh lót\nMái vàng thơm phức\nRạ đầy sân phơi.\n\nEm yêu ngôi nhà\nGỗ, tre mộc mạc\nNhư yêu đất nước\nBốn mùa chim ca.",
    excerpt:
      "Bài thơ ngắn, êm và giàu hình ảnh quê nhà, phù hợp với mạch đọc lớp 1 về mái ấm, sân vườn và tình yêu đất nước từ những điều gần gũi.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "gia-dinh",
      "que-huong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "qua-cua-bo",
    title: "Quà của bố",
    authorSlug: "khuyet-danh",
    content:
      "Bố em là bộ đội\nỞ tận vùng đảo xa\nChưa lần nào về phép\nMà luôn luôn có quà.\n\nBố gửi nghìn cái nhớ\nGửi cả nghìn cái thương\nBố gửi nghìn lời chúc\nGửi cả nghìn cái hôn.\n\nBố cho quà nhiều thế\nVì biết em rất ngoan\nVì em luôn giúp bố\nTay súng thêm vững vàng.",
    excerpt:
      "Bài thơ ngắn, ấm và giàu tình cảm gia đình, phù hợp với mạch đọc lớp 1 về bố, người lính và tình thương từ nơi xa.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "gia-dinh",
      "dat-nuoc",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Tác giả khuyết danh.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "coc-coc-coc",
    title: "Cốc, cốc, cốc",
    authorSlug: "dan-gian",
    content:
      "Cốc, cốc, cốc!\n\n- Ai gọi đó?\n- Tôi là Thỏ.\n- Nếu là Thỏ\n\nCho xem tai.\n\nCốc, cốc, cốc!\n\n- Ai gọi đó?\n- Tôi là Nai.\n- Thật là Nai\n\nCho xem gạc.\n\nCốc, cốc, cốc!\n\n- Ai gọi đó?\n- Tôi là Gió.\n- Xin mời vào\n\nKiễng chân cao\n\nVào trong cửa.\n\nCùng soạn sửa\n\nĐón trăng lên\n\nQuạt mát thêm\n\nHơi biển cả\n\nReo hoa lá\n\nĐẩy buồm thuyền...\n\nĐi khắp miền\n\nLàm việc tốt.",
    excerpt:
      "Bài thơ đối thoại ngắn, giàu nhịp điệu và tưởng tượng, phù hợp với mạch đọc lớp 1 về con vật, gió và những liên tưởng hồn nhiên của trẻ nhỏ.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "hoi-thoai",
      "thien-nhien",
      "con-vat",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "meo-di-hoc",
    title: "Mèo đi học",
    authorSlug: "dan-gian",
    content:
      "Mèo con buồn bực\n\nMai phải đến trường\n\nBèn kiếm cớ luôn:\n\n- Cái đuôi tôi ốm.\n\nCừu mới be toáng:\n\n- Tôi sẽ chữa lành\n\nNhưng muốn cho nhanh\n\nCắt đuôi khỏi hết!\n\n- Cắt đuôi? Ấy chết...!\n\nTôi đi học thôi!",
    excerpt:
      "Bài thơ ngắn, hóm hỉnh và giàu đối thoại, phù hợp với mạch đọc lớp 1 về chuyện đi học và cách trẻ nhỏ tìm cớ rồi tự đổi ý.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "truong-hoc",
      "con-vat",
      "hoi-thoai",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "nguong-cua",
    title: "Ngưỡng cửa",
    authorSlug: "dan-gian",
    content:
      "Nơi này ai cũng quen\nNgay từ thời tấm bé\nKhi tay bà, tay mẹ\nCòn dắt vòng đi men.\n\nNơi bố mẹ ngày đêm\nLúc nào qua cũng vội,\nNơi bạn bè chạy tới\nThường lúc nào cũng vui.\n\nNơi này đã đưa tôi\nBuổi đầu tiên đến lớp\nNay con đường xa tắp,\nVẫn đang chờ tôi đi.",
    excerpt:
      "Bài thơ ngắn, lắng và gần gũi, phù hợp với mạch đọc lớp 1 về mái nhà, gia đình và bước đi đầu tiên ra thế giới rộng hơn.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "gia-dinh",
      "truong-hoc",
      "tuoi-tho",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Gia đình"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "ke-cho-be-nghe",
    title: "Kể cho bé nghe",
    authorSlug: "dan-gian",
    content:
      "Hay nói ầm ĩ\nLà con vịt bầu.\n\nHay hỏi đâu đâu\nLà con chó vện.\n\nHay chăng dây điện\nLà con nhện con.\n\nĂn no quay tròn\nLà cối xay lúa.\n\nMồm thở ra gió\nLà cái quạt hòm.\n\nKhông thèm cỏ non\nLà con trâu sắt.\n\nRồng phun nước bạc\nLà chiếc máy bơm.\n\nDùng miệng nấu cơm\nLà cua, là cáy...",
    excerpt:
      "Bài thơ ngắn, vui và giàu liên tưởng, phù hợp với mạch đọc lớp 1 về con vật, đồ vật quen thuộc và lối so sánh hồn nhiên của trẻ nhỏ.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "con-vat",
      "doi-song",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Sinh hoạt"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
  createPoem({
    slug: "luy-tre",
    title: "Lũy tre",
    authorSlug: "dan-gian",
    content:
      "Mỗi sớm mai thức dậy\nLuỹ tre xanh rì rào\nNgọn tre cong gọng vó\nKéo mặt trời lên cao.\n\nNhững trưa đồng đầy nắng\nTrâu nằm nhai bóng râm\nTre bần thần nhớ gió\nChợt về đầy tiếng chim.",
    excerpt:
      "Bài thơ ngắn, êm và giàu hình ảnh đồng quê, phù hợp với mạch đọc lớp 1 về lũy tre, nắng trưa và nhịp sống làng quê gần gũi.",
    tags: [
      "tieng-viet-1-tap-2",
      "tho",
      "que-huong",
      "thien-nhien",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Thiên nhiên"],
    grade: "Lớp 1",
    textbook: "Tiếng Việt 1 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ do người dùng bổ sung cho thư viện.",
    addedAt: "2026-08-13",
  }),
];

const poemTiengViet2Tap1: Poem[] = [
  createPoem({
    slug: "goi-ban-den-lop",
    title: "Gọi bạn đến lớp",
    authorSlug: "vo-quang",
    content:
      "Bạn ơi, nắng đã lên thềm\nTrang vở mới gọi êm từng ngón tay\n\nĐi qua tiếng trống đầu ngày\nNghe sân trường mở một màu tuổi thơ.",
    excerpt:
      "Nhịp thơ học đường ngắn gọn, phù hợp với mạch đọc về trường lớp và bạn bè ở lớp 2.",
    tags: [
      "tieng-viet-2-tap-1",
      "tho",
      "truong-hoc",
      "tinh-ban",
      "tuoi-tho",
      "2000s-hoc-duong",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    addedAt: "2026-08-03",
  }),
];

const poemTiengViet2Tap2: Poem[] = [
  createPoem({
    slug: "hat-gao-lang-ta",
    title: "Hạt gạo làng ta",
    authorSlug: "tran-dang-khoa",
    content:
      "Hạt gạo thơm trong mùi rơm mới\nCó giọt mồ hôi đọng giữa trưa hè\n\nĐi qua những mùa tay mẹ gặt\nThành bữa cơm lành nuôi lớn tiếng quê.",
    excerpt:
      "Một bài thơ giàu không khí đồng quê và lao động, phù hợp cho mạch đọc cuối năm lớp 2.",
    tags: [
      "tieng-viet-2-tap-2",
      "tho",
      "lao-dong",
      "gia-dinh",
      "tho-thieu-nhi",
      "que-huong",
    ],
    categories: ["Thiếu nhi", "Miêu tả"],
    grade: "Lớp 2",
    textbook: "Tiếng Việt 2 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    featured: true,
    addedAt: "2026-08-04",
  }),
];

const poemTiengViet3Tap1: Poem[] = [
  createPoem({
    slug: "san-truong-mua-thu",
    title: "Sân trường mùa thu",
    authorSlug: "pham-ho",
    content:
      "Lá vàng chạm nhẹ ô cửa lớp\nGió mang theo mùi phấn rất quen\n\nBạn đọc bài bên hàng ghế gỗ\nSân trường thu xuống thật êm đềm.",
    excerpt:
      "Bài thơ mang không khí tựu trường chậm rãi, dùng cho mục lục Tiếng Việt 3 đầu năm.",
    tags: [
      "tieng-viet-3-tap-1",
      "tho",
      "truong-hoc",
      "mua-thu",
      "tuoi-tho",
      "2000s-hoc-duong",
    ],
    categories: ["Thiếu nhi", "Học đường"],
    grade: "Lớp 3",
    textbook: "Tiếng Việt 3 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    addedAt: "2026-08-05",
  }),
];

const poemTiengViet3Tap2: Poem[] = [
  createPoem({
    slug: "dong-song-sau-luy-tre",
    title: "Dòng sông sau lũy tre",
    authorSlug: "dan-gian",
    content:
      "Dòng sông nép dưới hàng tre\nChở mây về bến, chở hè qua thôn\n\nLũ trẻ đứng đếm hoàng hôn\nNghe con nước kể một vùng quê xa.",
    excerpt:
      "Bài thơ mang sắc thái dân gian, thuận với các bài đọc về thiên nhiên và quê hương lớp 3.",
    tags: [
      "tieng-viet-3-tap-2",
      "tho",
      "que-huong",
      "thien-nhien",
      "van-hoc-thieu-nhi",
      "tuoi-tho",
    ],
    categories: ["Thiếu nhi", "Dân gian"],
    grade: "Lớp 3",
    textbook: "Tiếng Việt 3 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    addedAt: "2026-08-06",
  }),
];

const poemTiengViet4Tap1: Poem[] = [
  createPoem({
    slug: "canh-dieu-tuoi-nho",
    title: "Cánh diều tuổi nhỏ",
    authorSlug: "xuan-quynh",
    content:
      "Cánh diều no gió trên đê\nMang theo tiếng gọi bạn bè cuối thôn\n\nChỉ cần một sợi dây buồn\nCũng thành ký ức rất tròn tuổi thơ.",
    excerpt:
      "Một nhịp thơ sáng, giàu hình ảnh về tuổi thơ nông thôn và tình bạn cho lớp 4.",
    tags: [
      "tieng-viet-4-tap-1",
      "tho",
      "tuoi-tho",
      "tinh-ban",
      "que-huong",
      "van-hoc-thieu-nhi",
    ],
    categories: ["Thiếu nhi", "Trữ tình"],
    grade: "Lớp 4",
    textbook: "Tiếng Việt 4 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    addedAt: "2026-08-07",
  }),
];

const poemTiengViet4Tap2: Poem[] = [
  createPoem({
    slug: "hoa-phuong-cuoi-san",
    title: "Hoa phượng cuối sân",
    authorSlug: "pham-ho",
    content:
      "Hoa phượng đỏ lên như tiếng trống\nRung trong vai áo một mùa thi\n\nCuối sân còn nguyên chiều tháng sáu\nBạn nhìn nhau mà chẳng nói gì.",
    excerpt:
      "Bài thơ gợi chuyển mùa và nhịp cuối năm học, hợp với phần đọc lớp 4 cuối năm.",
    tags: [
      "tieng-viet-4-tap-2",
      "tho",
      "truong-hoc",
      "mua-thu",
      "tuoi-tho",
      "2000s-hoc-duong",
    ],
    categories: ["Học đường", "Trữ tình"],
    grade: "Lớp 4",
    textbook: "Tiếng Việt 4 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    addedAt: "2026-08-08",
  }),
];

const poemTiengViet5Tap1: Poem[] = [
  createPoem({
    slug: "khuc-hat-trua-he",
    title: "Khúc hát trưa hè",
    authorSlug: "tran-dang-khoa",
    content:
      "Trưa hè nằm lại trên rơm\nVe ngân một mạch bên vòm lá xanh\n\nCon đường sáng những vòng quanh\nChở bao giấc mộng học hành lớn lên.",
    excerpt:
      "Bài thơ về mùa hè và khát vọng học tập, nối mạch chuyển cấp trong Tiếng Việt 5.",
    tags: [
      "tieng-viet-5-tap-1",
      "tho",
      "uoc-mo",
      "thien-nhien",
      "tuoi-tho",
      "2000s-hoc-duong",
    ],
    categories: ["Thiếu nhi", "Trữ tình"],
    grade: "Lớp 5",
    textbook: "Tiếng Việt 5 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    addedAt: "2026-08-09",
  }),
];

const poemTiengViet5Tap2: Poem[] = [
  createPoem({
    slug: "mau-muc-tim",
    title: "Màu mực tím",
    authorSlug: "dan-gian",
    content:
      "Mực tím nghiêng qua một góc bàn\nĐọng trên nhãn vở mùi thời gian\n\nMai này lớn giữa bao con chữ\nVẫn nhớ ngày đầu tập viết ngoan.",
    excerpt:
      "Bài thơ nhìn lại tuổi học trò, phù hợp cho cuối bậc tiểu học với sắc thái dịu và gần.",
    tags: [
      "tieng-viet-5-tap-2",
      "tho",
      "truong-hoc",
      "uoc-mo",
      "tuoi-tho",
      "2000s-hoc-duong",
    ],
    categories: ["Học đường", "Trữ tình"],
    grade: "Lớp 5",
    textbook: "Tiếng Việt 5 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    addedAt: "2026-08-10",
  }),
];

const poemNguVan6Tap1: Poem[] = [
  createPoem({
    slug: "tre-viet-nam",
    title: "Tre Việt Nam",
    authorSlug: "nguyen-duy",
    content:
      "Tre đứng lặng trong mưa nắng\nMà cốt cách thì không hề lặng yên\n\nTừ bãi bờ cho đến mái hiên\nTre giữ lại bóng làng trong gió.",
    excerpt:
      "Nhan đề quen thuộc được mô phỏng ngắn để giữ trải nghiệm đọc và bầu khí sách Ngữ văn 6.",
    tags: [
      "ngu-van-6-tap-1",
      "tho",
      "dat-nuoc",
      "thien-nhien",
      "van-hoc-viet-nam",
    ],
    categories: ["Trữ tình", "Biểu tượng"],
    grade: "Lớp 6",
    textbook: "Ngữ văn 6 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    featured: true,
    addedAt: "2026-08-11",
  }),
];

const poemNguVan6Tap2: Poem[] = [
  createPoem({
    slug: "dem-nay-bac-khong-ngu",
    title: "Đêm nay Bác không ngủ",
    authorSlug: "minh-hue",
    content:
      "Đêm sâu, bếp lửa nghiêng nghiêng\nMột người còn thức cho yên giấc người\n\nTiếng chân rất nhỏ trong đồi\nMà nghe như cả một thời nước non.",
    excerpt:
      "Bài thơ mô phỏng nhịp kể trang nghiêm, thích hợp cho trục đọc về người lính và đất nước ở lớp 6.",
    tags: [
      "ngu-van-6-tap-2",
      "tho",
      "nguoi-linh",
      "dat-nuoc",
      "van-hoc-viet-nam",
    ],
    categories: ["Tự sự", "Trữ tình"],
    grade: "Lớp 6",
    textbook: "Ngữ văn 6 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    addedAt: "2026-08-12",
  }),
];

const poemNguVan7Tap1: Poem[] = [
  createPoem({
    slug: "viet-bac-trich",
    title: "Việt Bắc (trích)",
    authorSlug: "to-huu",
    content:
      "Câu thơ gọi núi gọi người\nGọi con đường cũ, gọi lời tiễn đưa\n\nNghĩa tình đọng giữa sớm trưa\nĐi qua trang sách vẫn chưa nhạt màu.",
    excerpt:
      "Một điểm đọc trữ tình cho Ngữ văn 7 học kỳ một, với không khí nghĩa tình và lịch sử.",
    tags: [
      "ngu-van-7-tap-1",
      "tho",
      "dat-nuoc",
      "van-hoc-viet-nam",
      "que-huong",
    ],
    categories: ["Trữ tình", "Lịch sử"],
    grade: "Lớp 7",
    textbook: "Ngữ văn 7 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
    addedAt: "2026-08-13",
  }),
];

const poemNguVan7Tap2: Poem[] = [
  createPoem({
    slug: "chieu-song-hong",
    title: "Chiều sông Hồng",
    authorSlug: "huu-thinh",
    content:
      "Chiều chạm nhẹ mặt sông xa\nBãi bồi giữ một màu hoa tím chiều\n\nAi đi qua bến sông nhiều\nSẽ nghe đất nước trong điều lặng im.",
    excerpt:
      "Bài thơ mở nhịp quan sát chậm, phù hợp với mạch quê hương và thiên nhiên ở Ngữ văn 7 học kỳ hai.",
    tags: [
      "ngu-van-7-tap-2",
      "tho",
      "que-huong",
      "thien-nhien",
      "van-hoc-viet-nam",
    ],
    categories: ["Trữ tình", "Miêu tả"],
    grade: "Lớp 7",
    textbook: "Ngữ văn 7 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan8Tap1: Poem[] = [
  createPoem({
    slug: "mua-thu-truoc-ngo",
    title: "Mùa thu trước ngõ",
    authorSlug: "nguyen-khuyen",
    content:
      "Gió thu rụng xuống hiên nhà\nAo trong giữ bóng mây xa rất gần\n\nMột chiếc lá chạm trang xuân\nMà nghe cổ tích của ngần ấy năm.",
    excerpt:
      "Nhịp thơ thiên nhiên và mùa thu, đưa mạch đọc Ngữ văn 8 sang sắc thái lắng hơn.",
    tags: [
      "ngu-van-8-tap-1",
      "tho",
      "mua-thu",
      "thien-nhien",
      "van-hoc-viet-nam",
    ],
    categories: ["Trữ tình", "Cổ điển"],
    grade: "Lớp 8",
    textbook: "Ngữ văn 8 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan8Tap2: Poem[] = [
  createPoem({
    slug: "la-thu-gui-ban",
    title: "Lá thư gửi bạn",
    authorSlug: "luu-quang-vu",
    content:
      "Ta gửi bạn một hàng cây\nMột con đường cũ, một ngày mưa bay\n\nGửi thêm tiếng trống sân này\nĐể mai lớn vẫn nhận ngay tuổi mình.",
    excerpt:
      "Bài thơ về tình bạn và ký ức học đường, tạo một điểm đọc gần gũi cho Ngữ văn 8 học kỳ hai.",
    tags: [
      "ngu-van-8-tap-2",
      "tho",
      "tinh-ban",
      "truong-hoc",
      "uoc-mo",
      "2000s-hoc-duong",
    ],
    categories: ["Trữ tình", "Học đường"],
    grade: "Lớp 8",
    textbook: "Ngữ văn 8 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan9Tap1: Poem[] = [
  createPoem({
    slug: "khuc-hat-nguoi-linh-tre",
    title: "Khúc hát người lính trẻ",
    authorSlug: "huu-thinh",
    content:
      "Áo xanh đi giữa mùa sâu\nMang theo tiếng mẹ qua cầu gió sương\n\nBước chân nhỏ giữa chiến trường\nVẫn gìn giữ một con đường bình yên.",
    excerpt:
      "Một mô phỏng đọc chậm cho trục người lính, trách nhiệm và đất nước ở Ngữ văn 9 học kỳ một.",
    tags: [
      "ngu-van-9-tap-1",
      "tho",
      "nguoi-linh",
      "dat-nuoc",
      "van-hoc-viet-nam",
    ],
    categories: ["Trữ tình", "Lịch sử"],
    grade: "Lớp 9",
    textbook: "Ngữ văn 9 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan9Tap2: Poem[] = [
  createPoem({
    slug: "bien-goi-mua-thi",
    title: "Biển gọi mùa thi",
    authorSlug: "xuan-quynh",
    content:
      "Sóng thức cùng đèn học khuya\nNgoài khung cửa gió thổi về trang vở\n\nBiển xa như một lời nhắc nhở\nCứ đi đi, rồi chân trời sẽ gần.",
    excerpt:
      "Bài thơ gắn biển, khát vọng và nhịp trưởng thành cho cuối cấp THCS.",
    tags: ["ngu-van-9-tap-2", "tho", "bien-dao", "uoc-mo", "van-hoc-viet-nam"],
    categories: ["Trữ tình", "Khát vọng"],
    grade: "Lớp 9",
    textbook: "Ngữ văn 9 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan10Tap1: Poem[] = [
  createPoem({
    slug: "song-nui-trong-trang-sach",
    title: "Sông núi trong trang sách",
    authorSlug: "che-lan-vien",
    content:
      "Mỗi trang sách mở ra nguồn\nSông đi qua chữ, núi luồn qua câu\n\nNgười đọc ngẩng mặt thật lâu\nThấy non nước ở trong màu giấy xưa.",
    excerpt:
      "Một bài thơ giàu suy tưởng cho đầu bậc THPT, nhấn vào quan hệ giữa văn chương và đất nước.",
    tags: ["ngu-van-10-tap-1", "tho", "dat-nuoc", "uoc-mo", "van-hoc-viet-nam"],
    categories: ["Suy tưởng", "Trữ tình"],
    grade: "Lớp 10",
    textbook: "Ngữ văn 10 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan10Tap2: Poem[] = [
  createPoem({
    slug: "mua-tren-mai-dinh",
    title: "Mưa trên mái đình",
    authorSlug: "xuan-dieu",
    content:
      "Mưa đi chậm giữa sân đình\nLá sen nghiêng giữ một hình cổ xưa\n\nNghe thời gian chạm vào mưa\nMà câu thơ cũng như vừa thức lên.",
    excerpt:
      "Bài thơ thiên về nhạc tính và cảnh sắc, hợp với mạch đọc thẩm mỹ của Ngữ văn 10 học kỳ hai.",
    tags: [
      "ngu-van-10-tap-2",
      "tho",
      "thien-nhien",
      "que-huong",
      "van-hoc-viet-nam",
    ],
    categories: ["Trữ tình", "Miêu tả"],
    grade: "Lớp 10",
    textbook: "Ngữ văn 10 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan11Tap1: Poem[] = [
  createPoem({
    slug: "tieng-goi-thang-ba",
    title: "Tiếng gọi tháng ba",
    authorSlug: "xuan-quynh",
    content:
      "Tháng ba gọi bằng mầm lá\nGọi bằng tiếng guốc vội trên hành lang\n\nGọi ai bước giữa dịu dàng\nMang theo khát vọng mở trang mai sau.",
    excerpt:
      "Một điểm đọc cho Ngữ văn 11 với nhịp thanh xuân và sự mở ra của mùa mới.",
    tags: ["ngu-van-11-tap-1", "tho", "mua-xuan", "uoc-mo", "van-hoc-viet-nam"],
    categories: ["Trữ tình", "Khát vọng"],
    grade: "Lớp 11",
    textbook: "Ngữ văn 11 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan11Tap2: Poem[] = [
  createPoem({
    slug: "dat-nuoc-nhin-tu-san-truong",
    title: "Đất nước nhìn từ sân trường",
    authorSlug: "nguyen-khoa-diem",
    content:
      "Đất nước đi từ tiếng học bài\nTừ bàn tay giữ quyển sách mỏng\n\nTừ hàng cây đứng sau cửa sổ\nMà lớn dần cùng ý nghĩ thanh xuân.",
    excerpt:
      "Bài thơ đặt đất nước gần với trải nghiệm học tập và trưởng thành, phù hợp cho Ngữ văn 11 học kỳ hai.",
    tags: [
      "ngu-van-11-tap-2",
      "tho",
      "dat-nuoc",
      "truong-hoc",
      "uoc-mo",
      "van-hoc-viet-nam",
    ],
    categories: ["Suy tưởng", "Trữ tình"],
    grade: "Lớp 11",
    textbook: "Ngữ văn 11 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan12Tap1: Poem[] = [
  createPoem({
    slug: "mua-lua-chin-ben-song",
    title: "Mùa lúa chín bên sông",
    authorSlug: "huu-thinh",
    content:
      "Lúa chín vàng dọc bến sông\nMùi rơm đi chậm qua từng nếp gió\n\nAi lớn lên từ miền quê đó\nSẽ mang mùa vàng đi suốt tháng năm.",
    excerpt:
      "Bài thơ đằm và chậm, hợp với cảm thức nhìn lại quê hương trong Ngữ văn 12 đầu năm.",
    tags: [
      "ngu-van-12-tap-1",
      "tho",
      "que-huong",
      "lao-dong",
      "van-hoc-viet-nam",
    ],
    categories: ["Trữ tình", "Miêu tả"],
    grade: "Lớp 12",
    textbook: "Ngữ văn 12 - Tập 1",
    volume: "Tập 1",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

const poemNguVan12Tap2: Poem[] = [
  createPoem({
    slug: "ngay-tro-ve-duoi-tan-bang",
    title: "Ngày trở về dưới tán bàng",
    authorSlug: "te-hanh",
    content:
      "Tán bàng cũ đón chân quen\nSân trường vẫn giữ màu lên bảng chiều\n\nĐi qua năm tháng rất nhiều\nVẫn nghe một tiếng trống kêu trong lòng.",
    excerpt:
      "Bài thơ khép lại mạch mock dữ liệu bằng một cảm giác trở về, phù hợp cuối bậc phổ thông.",
    tags: [
      "ngu-van-12-tap-2",
      "tho",
      "truong-hoc",
      "tuoi-tho",
      "van-hoc-viet-nam",
      "2000s-hoc-duong",
    ],
    categories: ["Trữ tình", "Hoài niệm"],
    grade: "Lớp 12",
    textbook: "Ngữ văn 12 - Tập 2",
    volume: "Tập 2",
    source: "Bài thơ mô phỏng cho thư viện demo.",
  }),
];

export const poems: Poem[] = [
  ...poemTiengViet1Tap1,
  ...poemTiengViet1Tap2,
  ...poemTiengViet2Tap1,
  ...poemTiengViet2Tap2,
  ...poemTiengViet3Tap1,
  ...poemTiengViet3Tap2,
  ...poemTiengViet4Tap1,
  ...poemTiengViet4Tap2,
  ...poemTiengViet5Tap1,
  ...poemTiengViet5Tap2,
  ...poemNguVan6Tap1,
  ...poemNguVan6Tap2,
  ...poemNguVan7Tap1,
  ...poemNguVan7Tap2,
  ...poemNguVan8Tap1,
  ...poemNguVan8Tap2,
  ...poemNguVan9Tap1,
  ...poemNguVan9Tap2,
  ...poemNguVan10Tap1,
  ...poemNguVan10Tap2,
  ...poemNguVan11Tap1,
  ...poemNguVan11Tap2,
  ...poemNguVan12Tap1,
  ...poemNguVan12Tap2,
];
