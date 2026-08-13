interface SearchFormProps {
  action: string;
  defaultValue?: string;
  placeholder?: string;
  preserve?: Record<string, string | string[] | undefined>;
  large?: boolean;
}

export function SearchForm({
  action,
  defaultValue,
  placeholder = "Tìm bài thơ, tác giả, đoạn văn...",
  preserve,
  large = false,
}: SearchFormProps) {
  return (
    <form
      action={action}
      className="paper-card flex flex-col gap-3 rounded-[1.75rem] p-3 sm:flex-row sm:items-center"
    >
      <label className="sr-only" htmlFor={`search-${action}`}>
        Tìm kiếm văn học
      </label>
      <input
        id={`search-${action}`}
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`w-full rounded-[1.25rem] border border-line bg-white/70 px-5 text-ink outline-none placeholder:text-ink-soft/70 ${
          large ? "h-14 text-base" : "h-12 text-sm"
        }`}
      />
      {Object.entries(preserve ?? {}).map(([key, value]) => {
        if (!value) {
          return null;
        }

        if (Array.isArray(value)) {
          return value.map((entry) => (
            <input
              key={`${key}-${entry}`}
              type="hidden"
              name={key}
              value={entry}
            />
          ));
        }

        return (
          <input
            key={`${key}-${value}`}
            type="hidden"
            name={key}
            value={value}
          />
        );
      })}
      <button className="h-12 rounded-[1.25rem] bg-moss px-5 text-sm font-semibold text-paper transition hover:bg-[#4c6245]">
        Tìm kiếm
      </button>
    </form>
  );
}
