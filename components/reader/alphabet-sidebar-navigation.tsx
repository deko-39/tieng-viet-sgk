"use client";

import {
  BookOpenText,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  SpellCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ALPHABET_SECTIONS = [
  { id: "tom-tat", label: "Tóm tắt" },
  { id: "toan-bo-chu-cai", label: "29 chữ cái" },
  { id: "phu-am", label: "Phụ âm" },
  { id: "luyen-doc", label: "Luyện đọc" },
] as const;

export function AlphabetSidebarNavigation() {
  const [mobileLevel, setMobileLevel] = useState<"root" | "content">("root");
  const [desktopSectionsOpen, setDesktopSectionsOpen] = useState(true);

  function renderRootMenu(mode: "desktop" | "mobile") {
    const isOpen =
      mode === "mobile" ? mobileLevel === "content" : desktopSectionsOpen;

    return (
      <nav aria-label="Điều hướng cấp một" className="space-y-1">
        <button
          type="button"
          onClick={() =>
            mode === "mobile"
              ? setMobileLevel("content")
              : setDesktopSectionsOpen((currentState) => !currentState)
          }
          className="reader-current-tab group flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border px-3 py-2 text-left transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/35"
          aria-expanded={isOpen}
          aria-current="page"
        >
          <span className="flex min-w-0 items-center gap-2.5">
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-brick/20 bg-brick/10 text-brick"
              aria-hidden="true"
            >
              <SpellCheck className="h-3.5 w-3.5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.82rem] font-semibold leading-5 text-ink">
                Bảng chữ cái
              </span>
              <span className="block truncate text-[0.62rem] uppercase tracking-[0.14em] text-ink-soft">
                Mục hiện tại
              </span>
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5 text-[0.64rem] uppercase tracking-[0.14em] text-brick">
            <span>Đang ở đây</span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            />
          </span>
        </button>

        <Link
          href="/thu-vien/tap-1"
          className="group flex min-h-11 items-center justify-between gap-3 rounded-xl border border-line/45 bg-paper/45 px-3 py-2 text-left transition duration-150 hover:border-brick/28 hover:bg-paper/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/35"
        >
          <span className="flex min-w-0 items-center gap-2.5">
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line/50 bg-paper/70 text-ink-soft group-hover:border-brick/20 group-hover:text-brick"
              aria-hidden="true"
            >
              <BookOpenText className="h-3.5 w-3.5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.82rem] font-semibold leading-5 text-ink">
                Sách
              </span>
              <span className="block truncate text-[0.62rem] uppercase tracking-[0.14em] text-ink-soft">
                Quay lại thư viện
              </span>
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1 text-[0.64rem] uppercase tracking-[0.14em] text-brick">
            <span>Đi tới</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </Link>
      </nav>
    );
  }

  const sectionList = (
    <nav aria-label="Các phần bảng chữ cái" className="space-y-1 px-2 py-2">
      {ALPHABET_SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          title={section.label}
          className="group flex min-h-9 items-center gap-2 rounded-lg px-2.5 py-2 text-[0.76rem] text-ink-soft transition duration-150 hover:bg-paper/80 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/35"
        >
          <FileText
            className="h-3.5 w-3.5 shrink-0 text-ink-soft/75 group-hover:text-brick/80"
            aria-hidden="true"
          />
          <span className="truncate">{section.label}</span>
        </a>
      ))}
    </nav>
  );

  return (
    <div className="flex flex-col">
      <div className="lg:hidden">
        {mobileLevel === "root" ? (
          <div className="space-y-2 px-2 py-2.5">
            {renderRootMenu("mobile")}
          </div>
        ) : (
          <>
            <div className="border-b border-line/70 px-1.5 py-1.5">
              <button
                type="button"
                onClick={() => setMobileLevel("root")}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line/60 bg-paper/70 px-3 text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft transition hover:text-ink"
              >
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Quay lại</span>
              </button>
            </div>
            {sectionList}
          </>
        )}
      </div>

      <div className="hidden lg:block">
        <div className="border-b border-line/70 px-1.5 py-1.5">
          {renderRootMenu("desktop")}
        </div>
        <div
          className="reader-sidebar-collapsible"
          data-open={desktopSectionsOpen ? "true" : "false"}
        >
          <div>
            <div className="ml-4 border-l border-line/55 pl-2.5">
              <div className="border-b border-line/70 px-1.5 py-1.5">
                <div>
                  <p className="text-[0.64rem] uppercase tracking-[0.16em] text-ink-soft">
                    Bảng chữ cái
                  </p>
                  <p className="text-[0.78rem] font-medium text-ink">
                    Chọn phần học chữ cái
                  </p>
                </div>
              </div>
              {sectionList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
