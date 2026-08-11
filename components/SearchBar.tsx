export default function SearchBar({
  defaultValue = "",
  autoFocus = false,
}: {
  defaultValue?: string;
  autoFocus?: boolean;
}) {
  return (
    <form action="/search" method="get" role="search" className="flex gap-2">
      <label htmlFor="q" className="sr-only">
        レシピを検索
      </label>
      <input
        id="q"
        name="q"
        type="search"
        defaultValue={defaultValue}
        autoFocus={autoFocus}
        placeholder="材料や料理名で検索（例: もやし、パスタ）"
        className="w-full rounded-lg border bg-transparent px-4 py-2.5 text-base outline-none focus:border-[var(--accent)]"
        style={{ borderColor: "var(--line)" }}
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg px-5 py-2.5 text-sm font-bold text-white"
        style={{ background: "var(--accent)" }}
      >
        検索
      </button>
    </form>
  );
}
