"use client";

import {
  BookOpenText,
  History,
  Menu,
  MoonStar,
  PanelLeftClose,
  PanelLeftOpen,
  SunMedium,
  X,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const DESKTOP_SIDEBAR_SCROLL_KEY = "reader-sidebar-scroll-top";
const MOBILE_SIDEBAR_SCROLL_KEY = "reader-mobile-sidebar-scroll-top";

function getStoredSidebarState() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem("reader-sidebar-collapsed") === "true";
}

function getStoredTheme(): "paper" | "dusk" {
  if (typeof window === "undefined") {
    return "paper";
  }

  return window.localStorage.getItem("reader-theme") === "dusk"
    ? "dusk"
    : "paper";
}

interface ReaderShellProps {
  desktopRail: ReactNode;
  desktopSidebar: ReactNode;
  mobileSidebar: ReactNode;
  content: ReactNode;
  desktopAside?: ReactNode;
  hasAside: boolean;
  lastDeploymentLabel: string;
}

export function ReaderShell({
  desktopRail,
  desktopSidebar,
  mobileSidebar,
  content,
  desktopAside,
  hasAside,
  lastDeploymentLabel,
}: ReaderShellProps) {
  const desktopSidebarRef = useRef<HTMLElement | null>(null);
  const mobileSidebarRef = useRef<HTMLElement | null>(null);
  const previousDesktopSidebarCollapsedRef = useRef(false);
  const [desktopSidebarCollapsed, setDesktopSidebarCollapsed] = useState(
    getStoredSidebarState,
  );
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<"paper" | "dusk">(getStoredTheme);

  useEffect(() => {
    previousDesktopSidebarCollapsedRef.current = getStoredSidebarState();
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "reader-sidebar-collapsed",
      String(desktopSidebarCollapsed),
    );
  }, [desktopSidebarCollapsed]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const desktopSidebar = desktopSidebarRef.current;
    const wasCollapsed = previousDesktopSidebarCollapsedRef.current;

    previousDesktopSidebarCollapsedRef.current = desktopSidebarCollapsed;

    if (!desktopSidebar || desktopSidebarCollapsed) {
      return;
    }

    if (wasCollapsed) {
      desktopSidebar.scrollTop = 0;
      window.sessionStorage.setItem(DESKTOP_SIDEBAR_SCROLL_KEY, "0");
    } else {
      const storedScrollTop = window.sessionStorage.getItem(
        DESKTOP_SIDEBAR_SCROLL_KEY,
      );

      if (storedScrollTop) {
        desktopSidebar.scrollTop = Number(storedScrollTop);
      }
    }

    const handleScroll = () => {
      window.sessionStorage.setItem(
        DESKTOP_SIDEBAR_SCROLL_KEY,
        String(desktopSidebar.scrollTop),
      );
    };

    desktopSidebar.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      handleScroll();
      desktopSidebar.removeEventListener("scroll", handleScroll);
    };
  }, [desktopSidebarCollapsed]);

  useEffect(() => {
    const mobileSidebar = mobileSidebarRef.current;

    if (!mobileSidebar) {
      return;
    }

    const storedScrollTop = window.sessionStorage.getItem(
      MOBILE_SIDEBAR_SCROLL_KEY,
    );

    if (storedScrollTop) {
      mobileSidebar.scrollTop = Number(storedScrollTop);
    }

    const handleScroll = () => {
      window.sessionStorage.setItem(
        MOBILE_SIDEBAR_SCROLL_KEY,
        String(mobileSidebar.scrollTop),
      );
    };

    mobileSidebar.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      handleScroll();
      mobileSidebar.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "paper" ? "dusk" : "paper";
    window.localStorage.setItem("reader-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <div className="reader-shell flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/92 backdrop-blur-sm">
        <div className="mx-auto flex h-12 max-w-[1640px] items-center justify-between gap-3 px-3 sm:px-4">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-lg text-ink lg:hidden"
              aria-label="Mở mục lục"
            >
              <Menu className="h-4.5 w-4.5" aria-hidden="true" />
            </button>
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2.5 rounded-full outline-none transition hover:text-brick focus-visible:ring-2 focus-visible:ring-brick/40"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line/70 bg-surface text-brick">
                <BookOpenText className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="truncate font-serif text-base tracking-[0.08em] text-ink sm:text-lg">
                THƯ VIỆN THƠ VĂN
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/changelog"
              className="inline-flex h-9 items-center justify-center rounded-md border border-line bg-surface px-3 text-sm text-ink transition hover:border-brick/45 hover:text-brick"
              aria-label="Mở nhật ký cập nhật"
              title="Xem nhật ký cập nhật"
            >
              <History className="h-4 w-4" aria-hidden="true" />
              <span className="ml-2 hidden sm:inline">Cập nhật</span>
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 items-center justify-center rounded-md border border-line bg-surface px-3 text-sm text-ink"
              aria-label={theme === "paper" ? "Bật nền tối" : "Bật nền sáng"}
            >
              {theme === "paper" ? (
                <MoonStar className="h-4 w-4" aria-hidden="true" />
              ) : (
                <SunMedium className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1">
        <div className="mx-auto flex max-w-[1640px] items-start gap-3 px-3 py-3 sm:px-4">
          <aside
            ref={desktopSidebarRef}
            className={`reader-scrollbar reader-muted-panel hidden self-start rounded-xl lg:sticky lg:top-[3.75rem] lg:block lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto ${
              desktopSidebarCollapsed ? "w-11" : "w-[15.5rem] xl:w-[16.25rem]"
            } relative`}
          >
            <button
              type="button"
              onClick={() =>
                setDesktopSidebarCollapsed((currentState) => !currentState)
              }
              className="absolute left-1.5 top-1.5 z-10 inline-flex h-7 w-7 items-center justify-center rounded-md border border-line/60 bg-paper/70 text-ink transition hover:bg-surface"
              aria-label={
                desktopSidebarCollapsed ? "Hiện mục lục" : "Thu gọn mục lục"
              }
              aria-pressed={desktopSidebarCollapsed}
              title={
                desktopSidebarCollapsed ? "Hiện mục lục" : "Thu gọn mục lục"
              }
            >
              {desktopSidebarCollapsed ? (
                <PanelLeftOpen className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <PanelLeftClose className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
            <div className="min-h-0 flex-1">
              {desktopSidebarCollapsed ? desktopRail : desktopSidebar}
            </div>
          </aside>

          <div
            className={`grid min-w-0 flex-1 grid-cols-1 gap-3 ${
              hasAside ? "lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)]" : ""
            }`}
          >
            <section className="reader-focus-panel min-h-[calc(100vh-6rem)] rounded-xl">
              {content}
            </section>
            {hasAside ? (
              <aside className="reader-scrollbar reader-muted-panel hidden self-start rounded-xl lg:sticky lg:top-[3.75rem] lg:block lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
                {desktopAside}
              </aside>
            ) : null}
          </div>
        </div>
      </div>

      <footer className="border-t border-line/80 bg-paper/90">
        <div className="mx-auto flex h-8 max-w-[1640px] items-center justify-center px-3 text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft sm:px-4">
          Thư viện thơ văn Việt Nam · Cập nhật lần cuối {lastDeploymentLabel}
        </div>
      </footer>

      <div
        className={`fixed inset-0 z-50 bg-ink/30 transition ${
          mobileSidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } lg:hidden`}
        aria-hidden={!mobileSidebarOpen}
        onClick={() => setMobileSidebarOpen(false)}
      />
      <aside
        ref={mobileSidebarRef}
        className={`reader-scrollbar reader-muted-panel fixed inset-y-0 left-0 z-50 w-[min(22rem,calc(100vw-1rem))] max-w-full overflow-y-auto border-r border-line shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition-transform sm:w-[min(24rem,calc(100vw-1.5rem))] lg:hidden ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mục lục sách giáo khoa"
      >
        <div className="flex h-12 items-center justify-end border-b border-line px-3 sm:px-4">
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-paper text-base text-ink"
            aria-label="Đóng mục lục"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        {mobileSidebar}
      </aside>
    </div>
  );
}
