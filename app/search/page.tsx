import type { Metadata } from "next";
import Link from "next/link";
import FilterBar from "@/components/FilterBar";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { searchRecipes } from "@/lib/recipes";

type SP = Promise<Record<string, string | string[] | undefined>>;

function one(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

export async function generateMetadata({ searchParams }: { searchParams: SP }): Promise<Metadata> {
  const sp = await searchParams;
  const q = one(sp.q);
  const category = one(sp.category);
  const method = one(sp.method);
  const tag = one(sp.tag);
  const maxMinutes = one(sp.maxMinutes);

  const parts = [
    maxMinutes ? `${maxMinutes}分以内` : null,
    method,
    category,
    tag ? `#${tag}` : null,
    q ? `「${q}」` : null,
  ].filter(Boolean);

  const title = parts.length ? `${parts.join("・")}の時短レシピ` : "レシピを探す";

  return {
    title,
    description: `${title}の一覧。調理時間・調理器具・カロリー・材料費から絞り込めます。`,
    // 絞り込みの組み合わせは無限に増えるため、検索結果はインデックスさせない
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const q = one(sp.q);
  const category = one(sp.category);
  const method = one(sp.method);
  const tag = one(sp.tag);
  const maxMinutesRaw = one(sp.maxMinutes);
  const maxMinutes = maxMinutesRaw ? Number(maxMinutesRaw) : undefined;
  const sortRaw = one(sp.sort);
  const sort =
    sortRaw === "kcal" || sortRaw === "cost" || sortRaw === "time" ? sortRaw : undefined;

  const results = searchRecipes({
    q,
    category,
    method,
    tag,
    maxMinutes: Number.isFinite(maxMinutes) ? maxMinutes : undefined,
    sort,
  });

  const current = { q, category, method, tag, maxMinutes, sort };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">レシピを探す</h1>

      <div className="no-print">
        <SearchBar defaultValue={q ?? ""} />
      </div>

      <FilterBar current={current} />

      <p className="text-sm" style={{ color: "var(--muted)" }}>
        {results.length}件
        {q && <> ／ キーワード「{q}」</>}
      </p>

      {results.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {results.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      ) : (
        <div
          className="rounded-xl border p-6 text-sm"
          style={{ borderColor: "var(--line)" }}
        >
          <p className="font-bold">条件に合うレシピが見つかりませんでした。</p>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            条件をゆるめるか、材料名だけで検索してみてください。
          </p>
          <Link
            href="/search"
            className="mt-4 inline-block text-sm hover:underline"
            style={{ color: "var(--accent)" }}
          >
            すべての絞り込みを解除する →
          </Link>
        </div>
      )}
    </div>
  );
}
