"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const HOLD_DURATION_MS = 1500;

interface StartReadingButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function StartReadingButton({
  href,
  className,
  children,
}: StartReadingButtonProps) {
  const router = useRouter();
  const timeoutRefs = useRef<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const clearTimeouts = () => {
    for (const timeoutId of timeoutRefs.current) {
      window.clearTimeout(timeoutId);
    }

    timeoutRefs.current = [];
  };

  useEffect(() => {
    router.prefetch(href);

    return () => {
      clearTimeouts();
    };
  }, [href, router]);

  return (
    <button
      type="button"
      disabled={isTransitioning}
      className={className}
      onClick={() => {
        if (isTransitioning) {
          return;
        }

        setIsTransitioning(true);
        const homePage =
          document.querySelector<HTMLElement>("[data-home-page]");

        homePage?.classList.add("is-transitioning");

        timeoutRefs.current.push(
          window.setTimeout(() => {
            startTransition(() => {
              router.push(href);
            });
          }, HOLD_DURATION_MS),
        );
      }}
    >
      {children}
    </button>
  );
}
