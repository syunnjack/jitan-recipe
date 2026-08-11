import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { getAllRecipes, getAllTags, searchRecipes } from "@/lib/recipes";
import { CATEGORIES, METHODS, site } from "@/lib/site";

export default function HomePage() {
  const all = getAllRecipes();
  const under10 = searchRecipes({ maxMinutes: 10, sort: "time" }).slice(0, 6);
  const noKnife = all.filter((r) => r.tags.includes("包丁なし") || r.tags.includes("火を使わない"));
  const tags = getAllTags().slice(0, 12);

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
          帰宅してから10分で、
          <br className="sm:hidden" />
          一品を出しきる。
        </h1>
        <p className="mt-3 text-base" style={{ color: "var(--muted)" }}>
          {site.description}
          全{all.length}品を、調理時間・使う器具・洗い物の少なさから絞り込めます。
        </p>
        <div className="mt-5">
          <SearchBar />
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {[5, 10, 15].map((m) => (
            <Link
              key={m}
              href={`/search?maxMinutes=${m}`}
              className="rounded-full border px-3 py-1 hover:border-[var(--accent)]"
              style={{ borderColor: "var(--line)" }}
            >
              {m}分以内
            </Link>
          ))}
          {METHODS.slice(0, 3).map((m) => (
            <Link
              key={m}
              href={`/search?method=${encodeURIComponent(m)}`}
              className="rounded-full border px-3 py-1 hover:border-[var(--accent)]"
              style={{ borderColor: "var(--line)" }}
            >
              {m}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-bold">10分以内で作れる</h2>
          <Link
            href="/search?maxMinutes=10"
            className="text-sm hover:underline"
            style={{ color: "var(--accent)" }}
          >
            すべて見る →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {under10.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-bold">火も包丁も使わない</h2>
          <Link
            href="/search?tag=火を使わない"
            className="text-sm hover:underline"
            style={{ color: "var(--accent)" }}
          >
            すべて見る →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {noKnife.slice(0, 4).map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">カテゴリから探す</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {CATEGORIES.map((c) => {
            const count = all.filter((r) => r.category === c).length;
            return (
              <Link
                key={c}
                href={`/search?category=${encodeURIComponent(c)}`}
                className="rounded-lg border px-4 py-3 text-sm hover:border-[var(--accent)]"
                style={{ borderColor: "var(--line)" }}
              >
                <span className="font-bold">{c}</span>
                <span className="ml-2 text-xs" style={{ color: "var(--muted)" }}>
                  {count}品
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">タグから探す</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/search?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border px-3 py-1 text-sm hover:border-[var(--accent)]"
              style={{ borderColor: "var(--line)" }}
            >
              #{tag}
              <span className="ml-1 text-xs" style={{ color: "var(--muted)" }}>
                {count}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="rounded-xl border p-5 text-sm"
        style={{ borderColor: "var(--line)", background: "var(--accent-soft)" }}
      >
        <h2 className="mb-2 text-base font-bold">このサイトの時短の考え方</h2>
        <p style={{ color: "var(--muted)" }}>
          時短とは「工程を雑にすること」ではなく、
          <strong>火加減の監視から解放されること</strong>だと考えています。
          レンジ・トースター・炊飯器を使うレシピには、手を離していられる時間（放置時間）を明記しました。
          その間に別の作業を進められれば、体感の所要時間はさらに短くなります。
        </p>
      </section>
    </div>
  );
}
