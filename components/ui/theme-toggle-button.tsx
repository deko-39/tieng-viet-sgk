"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useLayoutEffect, useState } from "react";

type ThemeMode = "paper" | "dusk";

export function ThemeToggleButton() {
  const [theme, setTheme] = useState<ThemeMode>("paper");

  useLayoutEffect(() => {
    const storedTheme =
      window.localStorage.getItem("reader-theme") === "dusk" ? "dusk" : "paper";

    document.documentElement.dataset.theme = storedTheme;
    setTheme(storedTheme);
  }, []);

  function toggleTheme() {
    const nextTheme: ThemeMode = theme === "paper" ? "dusk" : "paper";

    window.localStorage.setItem("reader-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-semibold text-ink transition hover:border-brick/45 hover:text-brick"
      aria-label={theme === "paper" ? "Bật nền tối" : "Bật nền sáng"}
    >
      {theme === "paper" ? (
        <MoonStar className="h-4 w-4" aria-hidden="true" />
      ) : (
        <SunMedium className="h-4 w-4" aria-hidden="true" />
      )}
      <span>{theme === "paper" ? "Nền tối" : "Nền sáng"}</span>
    </button>
  );
}
