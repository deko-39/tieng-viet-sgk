"use client";

import { useState } from "react";
import { ContentImage } from "@/components/ui/content-image";

interface AlphabetLetterEntry {
  letter: string;
  example: string;
  note: string;
}

interface AlphabetIllustrationBrowserProps {
  letters: readonly AlphabetLetterEntry[];
}

const ILLUSTRATION_THEMES = [
  {
    start: "#f4dfd0",
    end: "#ead0bf",
    accent: "#9a5b43",
    accentSoft: "#d7b19d",
    ink: "#342016",
  },
  {
    start: "#e2ead6",
    end: "#d0dec0",
    accent: "#5e7152",
    accentSoft: "#a6b497",
    ink: "#20301a",
  },
  {
    start: "#ece1cf",
    end: "#e1cfb2",
    accent: "#ad7c33",
    accentSoft: "#d7bb89",
    ink: "#3a2b10",
  },
] as const;

function escapeSvgText(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildIllustrationSrc(
  letter: string,
  title: string,
  subtitle: string,
  index = 0,
) {
  const theme = ILLUSTRATION_THEMES[index % ILLUSTRATION_THEMES.length];
  const safeLetter = escapeSvgText(letter);
  const safeTitle = escapeSvgText(title);
  const safeSubtitle = escapeSvgText(subtitle);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${theme.start}"/>
          <stop offset="100%" stop-color="${theme.end}"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="900" rx="48" fill="url(#bg)"/>
      <circle cx="980" cy="170" r="118" fill="${theme.accentSoft}" opacity="0.55"/>
      <circle cx="180" cy="710" r="156" fill="${theme.accentSoft}" opacity="0.38"/>
      <rect x="72" y="72" width="1056" height="756" rx="40" fill="#ffffff" fill-opacity="0.38" stroke="${theme.accentSoft}" stroke-width="6"/>
      <text x="108" y="308" font-size="290" font-family="Georgia, serif" font-weight="700" fill="${theme.accent}" opacity="0.18">${safeLetter}</text>
      <text x="112" y="152" font-size="52" font-family="Arial, sans-serif" letter-spacing="8" fill="${theme.accent}">MINH HỌA</text>
      <text x="112" y="450" font-size="94" font-family="Arial, sans-serif" font-weight="700" fill="${theme.ink}">${safeTitle}</text>
      <text x="112" y="534" font-size="42" font-family="Arial, sans-serif" fill="${theme.ink}" opacity="0.78">${safeSubtitle}</text>
      <rect x="112" y="610" width="320" height="112" rx="28" fill="${theme.accent}" fill-opacity="0.14" stroke="${theme.accent}" stroke-opacity="0.25" stroke-width="4"/>
      <text x="152" y="680" font-size="44" font-family="Georgia, serif" font-weight="700" fill="${theme.accent}">${safeLetter}</text>
      <text x="228" y="680" font-size="34" font-family="Arial, sans-serif" fill="${theme.ink}" opacity="0.78">${safeTitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function AlphabetIllustrationBrowser({
  letters,
}: AlphabetIllustrationBrowserProps) {
  const [selectedLetter, setSelectedLetter] = useState(
    letters[0]?.letter ?? "A",
  );
  const currentEntry =
    letters.find((entry) => entry.letter === selectedLetter) ?? letters[0];

  if (!currentEntry) {
    return null;
  }
  const illustrationTitle = `${currentEntry.letter} như ${currentEntry.example}`;

  return (
    <div className="grid gap-4 lg:grid-cols-[7.5rem_minmax(0,1fr)] xl:grid-cols-[8.5rem_minmax(0,1fr)]">
      <aside className="paper-card rounded-[1.2rem] px-3 py-3 lg:sticky lg:top-24">
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-2 xl:grid-cols-3">
          {letters.map((entry) => {
            const isSelected = entry.letter === currentEntry.letter;

            return (
              <button
                key={entry.letter}
                type="button"
                onClick={() => setSelectedLetter(entry.letter)}
                className={`inline-flex min-h-11 items-center justify-center rounded-xl border text-center text-[0.95rem] font-semibold transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/35 ${
                  isSelected
                    ? "border-brick/35 bg-brick/12 text-brick shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--gold)_14%,transparent),0_8px_20px_rgba(63,44,22,0.06)]"
                    : "border-line/50 bg-paper/60 text-ink hover:border-brick/28 hover:text-brick"
                }`}
                aria-pressed={isSelected}
                title={`Chọn chữ ${entry.letter}`}
              >
                {entry.letter}
              </button>
            );
          })}
        </div>
      </aside>

      <div>
        <article className="paper-card mx-auto max-w-3xl overflow-hidden rounded-[1.15rem]">
          <ContentImage
            src={buildIllustrationSrc(
              currentEntry.letter,
              illustrationTitle,
              currentEntry.note,
            )}
            alt={illustrationTitle}
            width={1200}
            height={900}
            unoptimized
            className="h-auto w-full object-cover"
            wrapperClassName="aspect-[4/3] max-h-[56vh]"
          />
          <div className="border-t border-line/60 px-4 py-3">
            <p className="truncate text-sm font-medium text-ink">
              {illustrationTitle}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
