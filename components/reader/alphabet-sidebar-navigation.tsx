"use client";

import { BookOpenText, ChevronRight, FileText } from "lucide-react";
import Link from "next/link";

const ROOT_ITEMS = [
  {
    id: "books",
    href: "/thu-vien/tap-1",
    label: "Sách",
    icon: BookOpenText,
  },
  {
    id: "alphabet",
    href: "/bang-chu-cai",
    label: "Bảng chữ cái",
    icon: FileText,
  },
] as const;

export function AlphabetSidebarNavigation() {
  function renderRootMenu() {
    return (
      <nav aria-label="Điều hướng cấp một" className="space-y-1">
        {ROOT_ITEMS.map((item) => {
          const Icon = item.icon;
          const isCurrent = item.id === "alphabet";

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`${
                isCurrent
                  ? "reader-current-tab"
                  : "border-line/45 bg-paper/45 hover:border-brick/28 hover:bg-paper/85"
              } group flex min-h-11 items-center justify-between gap-3 rounded-xl border px-3 py-2 text-left transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick/35`}
              aria-current={isCurrent ? "page" : undefined}
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${
                    isCurrent
                      ? "border-brick/20 bg-brick/10 text-brick"
                      : "border-line/50 bg-paper/70 text-ink-soft group-hover:border-brick/20 group-hover:text-brick"
                  }`}
                  aria-hidden="true"
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="min-w-0 truncate text-[0.82rem] font-semibold leading-5 text-ink">
                  {item.label}
                </span>
              </span>
              <span
                className={`flex shrink-0 items-center ${
                  isCurrent
                    ? "text-brick"
                    : "text-ink-soft/75 group-hover:text-brick"
                }`}
              >
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="space-y-2 px-2 py-2.5 lg:px-1.5 lg:py-1.5 lg:pl-10">
        <div className="lg:border-b lg:border-line/70 lg:pb-1.5">
          {renderRootMenu()}
        </div>
      </div>
    </div>
  );
}
