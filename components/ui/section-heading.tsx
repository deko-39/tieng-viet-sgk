export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      <p className="section-kicker">{kicker}</p>
      <h2 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-pretty text-base leading-8 text-ink-soft">
          {description}
        </p>
      ) : null}
    </div>
  );
}
