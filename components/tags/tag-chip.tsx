import Link from "next/link";

export function TagChip({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex rounded-full border px-3 py-1.5 text-sm transition ${
        active
          ? "border-brick bg-brick text-paper"
          : "border-line bg-surface text-ink hover:border-line-strong"
      }`}
    >
      {label}
    </Link>
  );
}
