"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function MobileFilterSheet({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink"
      >
        Bộ lọc
      </button>
      {open ? (
        <div className="fixed inset-0 z-40 bg-ink/30 px-4 py-6">
          <div className="mx-auto flex h-full max-w-lg flex-col rounded-[2rem] border border-line bg-paper shadow-[0_24px_60px_rgba(42,36,27,0.26)]">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="font-serif text-2xl text-ink">Lọc nội dung</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-line px-4 py-2 text-sm text-ink"
              >
                Đóng
              </button>
            </div>
            <div className="overflow-y-auto p-5">{children}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
