import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: Array<{ href: string; label: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span>/</span> : null}
            <Link href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
