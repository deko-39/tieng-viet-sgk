"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SurroundingPagePrefetchProps {
  hrefs: string[];
}

export function SurroundingPagePrefetch({
  hrefs,
}: SurroundingPagePrefetchProps) {
  const router = useRouter();

  useEffect(() => {
    if (!hrefs.length) {
      return;
    }

    const prefetch = () => {
      for (const href of hrefs) {
        router.prefetch(href);
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(prefetch, { timeout: 1200 });

      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(prefetch, 150);
    return () => window.clearTimeout(timeoutId);
  }, [hrefs, router]);

  return null;
}
