import { ContentImage } from "@/components/ui/content-image";
import { ReaderSpeechButton } from "@/components/reader/reader-speech-button";
import type { AlphabetLetter, AlphabetLetterCategory } from "@/data/alphabet";

interface AlphabetIllustrationBrowserProps {
  letters: readonly AlphabetLetter[];
}

const FORM_SECTIONS = [
  {
    key: "lowercaseWritingForm",
    label: "Chữ viết thường",
    className:
      "alphabet-handwriting alphabet-handwriting-lowercase tracking-[0.06em]",
  },
  {
    key: "lowercaseForm",
    label: "Chữ thường",
    className: "alphabet-lowercase tracking-[0.12em]",
  },
  {
    key: "uppercaseForm",
    label: "Chữ in hoa",
    className: "tracking-[0.16em]",
  },
  {
    key: "uppercaseWritingForm",
    label: "Chữ viết hoa",
    className:
      "alphabet-handwriting alphabet-handwriting-uppercase tracking-[0.06em]",
  },
] as const;

const CATEGORY_STYLES: Record<
  AlphabetLetterCategory,
  {
    label: string;
    legendClassName: string;
    headerClassName: string;
    speakerIdleClassName: string;
    speakerActiveClassName: string;
    speakerRingClassName: string;
  }
> = {
  "nguyen-am-don": {
    label: "Nguyên âm đơn",
    legendClassName: "text-emerald-900",
    headerClassName: "bg-emerald-100/85 text-emerald-950",
    speakerIdleClassName:
      "border-emerald-400/50 bg-emerald-50 text-emerald-800 shadow-[0_8px_24px_rgba(16,185,129,0.14)] hover:border-emerald-500/60 hover:bg-emerald-100",
    speakerActiveClassName:
      "border-emerald-700 bg-emerald-700 text-white shadow-[0_10px_30px_rgba(4,120,87,0.28)] hover:bg-emerald-800",
    speakerRingClassName: "focus-visible:ring-emerald-500/40",
  },
  "nguyen-am-doi": {
    label: "Nguyên âm đôi",
    legendClassName: "text-indigo-900",
    headerClassName: "bg-indigo-100/85 text-indigo-950",
    speakerIdleClassName:
      "border-indigo-400/50 bg-indigo-50 text-indigo-800 shadow-[0_8px_24px_rgba(99,102,241,0.14)] hover:border-indigo-500/60 hover:bg-indigo-100",
    speakerActiveClassName:
      "border-indigo-700 bg-indigo-700 text-white shadow-[0_10px_30px_rgba(67,56,202,0.28)] hover:bg-indigo-800",
    speakerRingClassName: "focus-visible:ring-indigo-500/40",
  },
  "phu-am": {
    label: "Phụ âm",
    legendClassName: "text-rose-900",
    headerClassName: "bg-rose-100/85 text-rose-950",
    speakerIdleClassName:
      "border-rose-400/50 bg-rose-50 text-rose-800 shadow-[0_8px_24px_rgba(244,63,94,0.14)] hover:border-rose-500/60 hover:bg-rose-100",
    speakerActiveClassName:
      "border-rose-700 bg-rose-700 text-white shadow-[0_10px_30px_rgba(190,24,93,0.28)] hover:bg-rose-800",
    speakerRingClassName: "focus-visible:ring-rose-500/40",
  },
  "thanh-dieu": {
    label: "Thanh điệu",
    legendClassName: "text-amber-900",
    headerClassName: "bg-amber-100/85 text-amber-950",
    speakerIdleClassName:
      "border-amber-400/50 bg-amber-50 text-amber-800 shadow-[0_8px_24px_rgba(245,158,11,0.14)] hover:border-amber-500/60 hover:bg-amber-100",
    speakerActiveClassName:
      "border-amber-700 bg-amber-700 text-white shadow-[0_10px_30px_rgba(180,83,9,0.28)] hover:bg-amber-800",
    speakerRingClassName: "focus-visible:ring-amber-500/40",
  },
};

const CATEGORY_ORDER: AlphabetLetterCategory[] = [
  "nguyen-am-don",
  "nguyen-am-doi",
  "phu-am",
  "thanh-dieu",
];

export function AlphabetIllustrationBrowser({
  letters,
}: AlphabetIllustrationBrowserProps) {
  if (letters.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2.5">
        {CATEGORY_ORDER.map((categoryKey) => {
          const categoryStyle = CATEGORY_STYLES[categoryKey];
          const count = letters.filter(
            (letter) => letter.category === categoryKey,
          ).length;

          return (
            <div
              key={categoryKey}
              className={[
                "inline-flex items-center gap-2 text-sm font-medium",
                categoryStyle.legendClassName,
              ].join(" ")}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-current" />
              <span>{categoryStyle.label}</span>
              <span className="text-[0.72rem] font-semibold opacity-75">
                {count}
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-3 lg:gap-4">
        {letters.map((entry, index) => {
          const categoryStyle = CATEGORY_STYLES[entry.category];

          return (
            <article
              key={entry.slug}
              className="paper-card flex h-full flex-col overflow-hidden rounded-[1rem]"
            >
              <div
                className={[
                  "flex items-start justify-between gap-2 border-b border-line/60 px-3 py-2",
                  categoryStyle.headerClassName,
                ].join(" ")}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brick">
                    Bảng chữ cái
                  </p>
                  <h2 className="mt-0.5 text-[1.2rem] font-semibold leading-tight text-ink sm:text-[1.35rem]">
                    Chữ {entry.uppercaseForm}{" "}
                    <span className="text-sm font-normal text-ink-soft sm:text-base">
                      ({entry.ipa})
                    </span>
                  </h2>
                </div>
                <ReaderSpeechButton
                  title={`Chữ ${entry.uppercaseForm}`}
                  authorName=""
                  content=""
                  idleClassName={categoryStyle.speakerIdleClassName}
                  activeClassName={categoryStyle.speakerActiveClassName}
                  ringClassName={categoryStyle.speakerRingClassName}
                />
              </div>

              <div className="grid gap-2 px-3 py-3 sm:grid-cols-2">
                {FORM_SECTIONS.map((section) => (
                  <section
                    key={section.key}
                    className="paper-inset rounded-[1rem] px-2.5 py-2"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      {section.label}
                    </p>
                    <div className="mt-2 flex min-h-12 items-end justify-center sm:min-h-14">
                      <p
                        className={[
                          "relative text-center font-serif text-[2.2rem] leading-none text-ink sm:text-4xl",
                          section.className,
                        ].join(" ")}
                      >
                        {entry[section.key]}
                      </p>
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-auto border-t border-line/60 px-3 py-3">
                <ContentImage
                  src={entry.image.src}
                  alt={entry.image.alt}
                  width={entry.image.width}
                  height={entry.image.height}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-contain"
                  wrapperClassName="aspect-[16/9] rounded-[1rem]"
                />
                <p className="mt-2 text-[0.82rem] leading-snug text-ink-soft">
                  {entry.image.caption ??
                    `Vị trí minh họa cho chữ ${entry.uppercaseForm} đang chờ bổ sung hình ảnh.`}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
