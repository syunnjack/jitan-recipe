import Link from "next/link";
import type { Recipe } from "@/lib/types";

const methodEmoji: Record<string, string> = {
  レンジ: "⚡",
  フライパン: "🍳",
  鍋: "🍲",
  トースター: "🔥",
  混ぜるだけ: "🥗",
  炊飯器: "🍚",
};

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article
      className="group rounded-xl border p-4 transition-colors hover:border-[var(--accent)]"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
        <span
          className="rounded-full px-2 py-0.5 font-bold"
          style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
        >
          {recipe.minutes}分
        </span>
        <span style={{ color: "var(--muted)" }}>
          {methodEmoji[recipe.method] ?? ""} {recipe.method}
        </span>
        <span style={{ color: "var(--muted)" }}>・{recipe.category}</span>
      </div>

      <h3 className="text-base font-bold leading-snug">
        <Link href={`/recipe/${recipe.id}`} className="group-hover:underline">
          {recipe.title}
        </Link>
      </h3>

      <p className="mt-1 line-clamp-2 text-sm" style={{ color: "var(--muted)" }}>
        {recipe.description}
      </p>

      <dl className="mt-3 flex gap-4 text-xs" style={{ color: "var(--muted)" }}>
        <div>
          <dt className="inline">材料 </dt>
          <dd className="inline font-medium">{recipe.ingredients.length}品</dd>
        </div>
        <div>
          <dt className="inline">約 </dt>
          <dd className="inline font-medium">{recipe.kcal}kcal</dd>
        </div>
        <div>
          <dt className="inline">1人 </dt>
          <dd className="inline font-medium">{recipe.cost}円</dd>
        </div>
      </dl>
    </article>
  );
}
