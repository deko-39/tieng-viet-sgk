export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="paper-card rounded-[2rem] px-6 py-12 text-center">
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-7 text-ink-soft">
        {description}
      </p>
    </div>
  );
}
