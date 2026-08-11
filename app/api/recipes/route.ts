import { NextResponse } from "next/server";
import { searchRecipes } from "@/lib/recipes";

// クエリパラメータを読むため動的実行。force-static にすると searchParams が空になる。
export const dynamic = "force-dynamic";

/**
 * GET /api/recipes?q=&category=&method=&tag=&maxMinutes=&sort=&limit=
 * レシピ一覧をJSONで返す読み取り専用エンドポイント。
 */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const maxMinutesRaw = searchParams.get("maxMinutes");
  const maxMinutes = maxMinutesRaw ? Number(maxMinutesRaw) : undefined;
  const sortRaw = searchParams.get("sort");
  const sort =
    sortRaw === "kcal" || sortRaw === "cost" || sortRaw === "time" ? sortRaw : undefined;

  const limitRaw = Number(searchParams.get("limit"));
  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 100) : 50;

  const results = searchRecipes({
    q: searchParams.get("q") ?? undefined,
    category: searchParams.get("category") ?? undefined,
    method: searchParams.get("method") ?? undefined,
    tag: searchParams.get("tag") ?? undefined,
    maxMinutes: Number.isFinite(maxMinutes) ? maxMinutes : undefined,
    sort,
  });

  return NextResponse.json(
    {
      total: results.length,
      items: results.slice(0, limit).map((r) => ({
        id: r.id,
        title: r.title,
        description: r.description,
        minutes: r.minutes,
        servings: r.servings,
        category: r.category,
        method: r.method,
        kcal: r.kcal,
        cost: r.cost,
        tags: r.tags,
        ingredientCount: r.ingredients.length,
        url: `/recipe/${r.id}`,
      })),
    },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
