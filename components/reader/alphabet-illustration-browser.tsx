"use client";

import { ArrowUp, Maximize2, Minimize2 } from "lucide-react";
import { ContentImage } from "@/components/ui/content-image";
import { ReaderSpeechButton } from "@/components/reader/reader-speech-button";
import type { AlphabetLetter, AlphabetLetterCategory } from "@/data/alphabet";
import { useEffect, useState } from "react";

interface AlphabetIllustrationBrowserProps {
  letters: readonly AlphabetLetter[];
}

const BROWSER_TOP_ID = "alphabet-browser-top";

const FORM_SECTIONS = [
  {
    key: "lowercaseWritingForm",
    label: "Chữ viết thường",
    className:
      "alphabet-handwriting alphabet-handwriting-lowercase tracking-[0.06em]",
  },
  {
    key: "lowercaseForm",
    label: "Chữ in thường",
    className: "alphabet-lowercase tracking-[0.12em]",
  },
  {
    key: "uppercaseWritingForm",
    label: "Chữ viết hoa",
    className:
      "alphabet-handwriting alphabet-handwriting-uppercase tracking-[0.06em]",
  },
  {
    key: "uppercaseForm",
    label: "Chữ in hoa",
    className: "tracking-[0.16em]",
  },
] as const;

const CATEGORY_STYLES: Record<
  AlphabetLetterCategory,
  {
    label: string;
    legendClassName: string;
    legendBadgeClassName: string;
    legendCountClassName: string;
    headerClassName: string;
    speakerIdleClassName: string;
    speakerActiveClassName: string;
    speakerRingClassName: string;
  }
> = {
  "nguyen-am-don": {
    label: "Nguyên âm đơn",
    legendClassName: "text-teal-900",
    legendBadgeClassName: "border border-teal-200/80 bg-teal-50/90",
    legendCountClassName: "bg-teal-200/80 text-teal-950",
    headerClassName: "bg-teal-100/90 text-teal-950",
    speakerIdleClassName:
      "border-teal-400/50 bg-teal-50 text-teal-800 shadow-[0_8px_24px_rgba(20,184,166,0.16)] hover:border-teal-500/60 hover:bg-teal-100",
    speakerActiveClassName:
      "border-teal-700 bg-teal-700 text-white shadow-[0_10px_30px_rgba(15,118,110,0.28)] hover:bg-teal-800",
    speakerRingClassName: "focus-visible:ring-teal-500/40",
  },
  "nguyen-am-ghep": {
    label: "Nguyên âm ghép",
    legendClassName: "text-fuchsia-900",
    legendBadgeClassName: "border border-fuchsia-200/80 bg-fuchsia-50/90",
    legendCountClassName: "bg-fuchsia-200/80 text-fuchsia-950",
    headerClassName: "bg-fuchsia-100/90 text-fuchsia-950",
    speakerIdleClassName:
      "border-fuchsia-400/50 bg-fuchsia-50 text-fuchsia-800 shadow-[0_8px_24px_rgba(217,70,239,0.16)] hover:border-fuchsia-500/60 hover:bg-fuchsia-100",
    speakerActiveClassName:
      "border-fuchsia-700 bg-fuchsia-700 text-white shadow-[0_10px_30px_rgba(162,28,175,0.28)] hover:bg-fuchsia-800",
    speakerRingClassName: "focus-visible:ring-fuchsia-500/40",
  },
  "phu-am": {
    label: "Phụ âm",
    legendClassName: "text-red-900",
    legendBadgeClassName: "border border-red-200/80 bg-red-50/90",
    legendCountClassName: "bg-red-200/80 text-red-950",
    headerClassName: "bg-red-100/90 text-red-950",
    speakerIdleClassName:
      "border-red-400/50 bg-red-50 text-red-800 shadow-[0_8px_24px_rgba(239,68,68,0.16)] hover:border-red-500/60 hover:bg-red-100",
    speakerActiveClassName:
      "border-red-700 bg-red-700 text-white shadow-[0_10px_30px_rgba(185,28,28,0.28)] hover:bg-red-800",
    speakerRingClassName: "focus-visible:ring-red-500/40",
  },
  "phu-am-ghep": {
    label: "Phụ âm ghép",
    legendClassName: "text-cyan-900",
    legendBadgeClassName: "border border-cyan-200/80 bg-cyan-50/90",
    legendCountClassName: "bg-cyan-200/80 text-cyan-950",
    headerClassName: "bg-cyan-100/90 text-cyan-950",
    speakerIdleClassName:
      "border-cyan-400/50 bg-cyan-50 text-cyan-800 shadow-[0_8px_24px_rgba(6,182,212,0.16)] hover:border-cyan-500/60 hover:bg-cyan-100",
    speakerActiveClassName:
      "border-cyan-700 bg-cyan-700 text-white shadow-[0_10px_30px_rgba(14,116,144,0.28)] hover:bg-cyan-800",
    speakerRingClassName: "focus-visible:ring-cyan-500/40",
  },
  "thanh-dieu": {
    label: "Thanh điệu",
    legendClassName: "text-orange-900",
    legendBadgeClassName: "border border-orange-200/80 bg-orange-50/90",
    legendCountClassName: "bg-orange-200/80 text-orange-950",
    headerClassName: "bg-orange-100/90 text-orange-950",
    speakerIdleClassName:
      "border-orange-400/50 bg-orange-50 text-orange-800 shadow-[0_8px_24px_rgba(249,115,22,0.16)] hover:border-orange-500/60 hover:bg-orange-100",
    speakerActiveClassName:
      "border-orange-700 bg-orange-700 text-white shadow-[0_10px_30px_rgba(194,65,12,0.28)] hover:bg-orange-800",
    speakerRingClassName: "focus-visible:ring-orange-500/40",
  },
};

export function AlphabetIllustrationBrowser({
  letters,
}: AlphabetIllustrationBrowserProps) {
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const singleVowelEntries = letters.filter(
    (entry) => entry.category === "nguyen-am-don",
  );
  const compoundVowelEntries = letters.filter(
    (entry) => entry.category === "nguyen-am-ghep",
  );
  const compoundConsonantEntries = letters.filter(
    (entry) => entry.category === "phu-am-ghep",
  );
  const singleConsonantEntries = letters.filter(
    (entry) => entry.category === "phu-am",
  );
  const toneEntries = letters.filter(
    (entry) => entry.category === "thanh-dieu",
  );
  const letterEntries = letters.filter(
    (entry) =>
      entry.category === "nguyen-am-don" || entry.category === "phu-am",
  );
  const legendItems = [
    {
      key: "nguyen-am-don",
      label: "Nguyên âm đơn",
      count: singleVowelEntries.length,
      targetId: BROWSER_TOP_ID,
      legendClassName: CATEGORY_STYLES["nguyen-am-don"].legendClassName,
      legendBadgeClassName:
        CATEGORY_STYLES["nguyen-am-don"].legendBadgeClassName,
      legendCountClassName:
        CATEGORY_STYLES["nguyen-am-don"].legendCountClassName,
    },
    {
      key: "nguyen-am-ghep",
      label: "Nguyên âm ghép",
      count: compoundVowelEntries.length,
      targetId: compoundVowelEntries[0]?.slug,
      legendClassName: CATEGORY_STYLES["nguyen-am-ghep"].legendClassName,
      legendBadgeClassName:
        CATEGORY_STYLES["nguyen-am-ghep"].legendBadgeClassName,
      legendCountClassName:
        CATEGORY_STYLES["nguyen-am-ghep"].legendCountClassName,
    },
    {
      key: "phu-am",
      label: "Phụ âm đơn",
      count: singleConsonantEntries.length,
      targetId: BROWSER_TOP_ID,
      legendClassName: CATEGORY_STYLES["phu-am"].legendClassName,
      legendBadgeClassName: CATEGORY_STYLES["phu-am"].legendBadgeClassName,
      legendCountClassName: CATEGORY_STYLES["phu-am"].legendCountClassName,
    },
    {
      key: "phu-am-ghep",
      label: "Phụ âm ghép",
      count: compoundConsonantEntries.length,
      targetId: compoundConsonantEntries[0]?.slug,
      legendClassName: CATEGORY_STYLES["phu-am-ghep"].legendClassName,
      legendBadgeClassName: CATEGORY_STYLES["phu-am-ghep"].legendBadgeClassName,
      legendCountClassName: CATEGORY_STYLES["phu-am-ghep"].legendCountClassName,
    },
    {
      key: "thanh-dieu",
      label: "Thanh điệu",
      count: toneEntries.length,
      targetId: toneEntries[0]?.slug,
      legendClassName: CATEGORY_STYLES["thanh-dieu"].legendClassName,
      legendBadgeClassName: CATEGORY_STYLES["thanh-dieu"].legendBadgeClassName,
      legendCountClassName: CATEGORY_STYLES["thanh-dieu"].legendCountClassName,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToEntry(targetId?: string) {
    if (!targetId) {
      return;
    }

    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function renderEntryGrid(
    entries: readonly AlphabetLetter[],
    eagerImageCount = 0,
  ) {
    return (
      <div
        className={[
          "grid",
          fullscreenMode
            ? "grid-cols-1 justify-items-center gap-4 snap-y snap-mandatory"
            : "grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-3 lg:gap-4",
        ].join(" ")}
      >
        {entries.map((entry, index) => {
          const categoryStyle = CATEGORY_STYLES[entry.category];
          const entryTitle = entry.displayLabel ?? `Chữ ${entry.uppercaseForm}`;

          return (
            <article
              key={entry.slug}
              id={entry.slug}
              className={[
                "paper-card scroll-mt-24 flex flex-col overflow-hidden rounded-[1rem]",
                fullscreenMode
                  ? "h-[calc(100svh-8rem)] w-full max-w-[72rem] max-h-[calc(100svh-8rem)] snap-start"
                  : "h-full",
              ].join(" ")}
            >
              <div
                className={[
                  "flex items-start justify-between gap-2 border-b border-line/60 px-3 py-2",
                  categoryStyle.headerClassName,
                ].join(" ")}
              >
                <div className="flex flex-col gap-1">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brick">
                    {entry.category === "thanh-dieu"
                      ? "Thanh điệu"
                      : "Bảng chữ cái"}
                  </p>
                  <h2 className="mt-0.5 text-[1.2rem] font-semibold leading-tight text-ink sm:text-[1.35rem]">
                    {entryTitle}{" "}
                    <span className="text-sm font-normal text-ink-soft sm:text-base">
                      ({entry.ipa})
                    </span>
                  </h2>
                </div>
                <ReaderSpeechButton
                  title={entryTitle}
                  authorName=""
                  content=""
                  idleClassName={categoryStyle.speakerIdleClassName}
                  activeClassName={categoryStyle.speakerActiveClassName}
                  ringClassName={categoryStyle.speakerRingClassName}
                />
              </div>

              <div
                className={[
                  fullscreenMode
                    ? "grid min-h-0 flex-1 gap-3 px-3 py-3 lg:grid-cols-[minmax(14rem,18rem)_minmax(0,1fr)] lg:items-stretch"
                    : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "grid gap-2",
                    fullscreenMode
                      ? "min-h-0 grid-cols-1 content-start auto-rows-[minmax(0,1fr)]"
                      : "grid-cols-2 px-3 py-3",
                  ].join(" ")}
                >
                  {FORM_SECTIONS.map((section) => (
                    <section
                      key={section.key}
                      className={[
                        "paper-inset rounded-[1rem]",
                        fullscreenMode
                          ? "flex min-h-0 flex-col justify-center px-2.5 py-1.5"
                          : "px-2.5 py-2",
                      ].join(" ")}
                    >
                      <p
                        className={[
                          "font-semibold uppercase tracking-[0.16em] text-ink-soft",
                          fullscreenMode ? "text-[0.65rem]" : "text-[0.65rem]",
                        ].join(" ")}
                      >
                        {section.label}
                      </p>
                      <div
                        className={[
                          "flex items-end justify-center",
                          fullscreenMode
                            ? "mt-1.5 min-h-0 flex-1"
                            : "mt-2 min-h-12 sm:min-h-14",
                        ].join(" ")}
                      >
                        <p
                          className={[
                            "relative text-center font-serif leading-none text-ink",
                            fullscreenMode
                              ? "text-[2.4rem] sm:text-[2.8rem]"
                              : "text-[2.2rem] sm:text-4xl",
                            fullscreenMode && section.key === "uppercaseForm"
                              ? "-translate-y-[0.5em]"
                              : "",
                            section.className,
                          ].join(" ")}
                        >
                          {entry[section.key]}
                        </p>
                      </div>
                    </section>
                  ))}
                </div>

                <div
                  className={[
                    fullscreenMode
                      ? "flex min-h-0 flex-col border-t-0 px-0 py-0"
                      : "mt-auto border-t border-line/60 px-3 py-3",
                  ].join(" ")}
                >
                  <ContentImage
                    src={entry.image.src}
                    alt={entry.image.alt}
                    width={entry.image.width}
                    height={entry.image.height}
                    loading={index < eagerImageCount ? "eager" : "lazy"}
                    className="h-full w-full object-contain"
                    wrapperClassName={
                      fullscreenMode
                        ? "flex min-h-0 flex-1 items-center rounded-[1rem]"
                        : "aspect-[16/9] rounded-[1rem]"
                    }
                  />
                  <p
                    className={[
                      "leading-snug text-ink-soft",
                      fullscreenMode
                        ? "mt-1.5 self-center text-center text-[0.95rem]"
                        : "mt-2 text-[0.82rem]",
                    ].join(" ")}
                  >
                    {entry.image.caption ??
                      `Vị trí minh họa cho ${entryTitle.toLowerCase()} đang chờ bổ sung hình ảnh.`}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
  }

  if (letters.length === 0) {
    return null;
  }

  return (
    <div id={BROWSER_TOP_ID} className="space-y-4 scroll-mt-24">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2.5">
          {legendItems.map((item) => {
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => scrollToEntry(item.targetId)}
                disabled={!item.targetId}
                className={[
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/15 disabled:pointer-events-none",
                  item.legendBadgeClassName,
                  item.legendClassName,
                ].join(" ")}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
                <span className="text-[0.9rem] leading-none">{item.label}</span>
                <span
                  className={[
                    "rounded-full px-1 py-[0.2rem] text-[0.52rem] font-semibold leading-none",
                    item.legendCountClassName,
                  ].join(" ")}
                >
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start">
          <button
            type="button"
            onClick={() => setFullscreenMode((currentMode) => !currentMode)}
            aria-pressed={fullscreenMode}
            className="hidden h-11 items-center justify-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-semibold text-ink transition hover:border-brick/45 hover:text-brick sm:inline-flex"
          >
            {fullscreenMode ? (
              <Minimize2 className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
            )}
            <span>
              {fullscreenMode ? "Thoát toàn màn hình" : "Xem từng chữ"}
            </span>
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className={[
          "fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-[0_10px_30px_rgba(15,23,42,0.16)] transition hover:border-brick/45 hover:text-brick sm:bottom-6 sm:right-6",
          showScrollToTop
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-label="Lên đầu trang bảng chữ cái"
        title="Lên đầu trang"
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>

      {renderEntryGrid(letterEntries, fullscreenMode ? 1 : 6)}

      {compoundVowelEntries.length > 0 ? (
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-line/80" />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
              Nguyên âm ghép
            </p>
            <div className="h-px flex-1 bg-line/80" />
          </div>
          {renderEntryGrid(compoundVowelEntries)}
        </section>
      ) : null}

      {compoundConsonantEntries.length > 0 ? (
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-line/80" />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
              Phụ âm ghép
            </p>
            <div className="h-px flex-1 bg-line/80" />
          </div>
          {renderEntryGrid(compoundConsonantEntries)}
        </section>
      ) : null}

      {toneEntries.length > 0 ? (
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-line/80" />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
              Thanh điệu
            </p>
            <div className="h-px flex-1 bg-line/80" />
          </div>
          {renderEntryGrid(toneEntries)}
        </section>
      ) : null}
    </div>
  );
}
