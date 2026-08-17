import Link from "next/link";

interface SidebarCollapsedRailProps {
  currentSection: "books" | "alphabet";
}

export function SidebarCollapsedRail({
  currentSection,
}: SidebarCollapsedRailProps) {
  const items = [
    {
      id: "books",
      href: "/thu-vien/tap-1",
      label: "Sách",
      title: "Sách",
    },
    {
      id: "alphabet",
      href: "/bang-chu-cai",
      label: "ABC",
      title: "Bảng chữ cái tiếng Việt",
    },
  ] as const;

  return (
    <div className="flex h-full flex-col items-center justify-between gap-3 px-1.5 pb-3 pt-10 text-ink-soft">
      <div className="flex flex-col items-center gap-2.5">
        {items.map((item) => {
          const isCurrent = item.id === currentSection;
          const className = `inline-flex min-h-24 items-center justify-center rounded-lg border px-1.5 transition ${
            isCurrent
              ? "border-brick/45 bg-paper/78 text-brick shadow-[inset_0_0_0_1px_rgba(154,91,67,0.12)]"
              : "border-line/60 bg-paper/55 text-ink-soft hover:border-brick/40 hover:bg-surface hover:text-brick"
          }`;
          const content = (
            <span className="[writing-mode:vertical-rl] rotate-180 text-[0.62rem] uppercase tracking-[0.22em]">
              {item.label}
            </span>
          );

          if (isCurrent) {
            return (
              <span
                key={item.id}
                className={className}
                aria-current="page"
                title={item.title}
              >
                {content}
              </span>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              className={className}
              aria-label={`Mở ${item.title}`}
              title={item.title}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
