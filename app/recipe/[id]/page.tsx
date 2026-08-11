import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import RecipeCard from "@/components/RecipeCard";
import { getAllRecipes, getImageUrl, getRecipe, getRelated } from "@/lib/recipes";
import { site } from "@/lib/site";

type Params = Promise<{ id: string }>;

export function generateStaticParams() {
  return getAllRecipes().map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) return { title: "レシピが見つかりません" };

  const title = `${recipe.title}｜${recipe.minutes}分・材料${recipe.ingredients.length}品`;
  const image = getImageUrl(recipe, site.url);
  return {
    title,
    description: recipe.description,
    alternates: { canonical: `/recipe/${recipe.id}` },
    openGraph: {
      type: "article",
      title,
      description: recipe.description,
      url: `${site.url}/recipe/${recipe.id}`,
      images: [{ url: image, width: 1200, height: 630, alt: recipe.title }],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

/** ISO 8601 duration（構造化データ用） */
function iso8601(minutes: number) {
  return `PT${minutes}M`;
}

export default async function RecipePage({ params }: { params: Params }) {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) notFound();

  const related = getRelated(recipe);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    // image は Recipe スキーマの必須項目。完成写真がなければ生成カードにフォールバックする
    image: [getImageUrl(recipe, site.url)],
    inLanguage: "ja",
    recipeCategory: recipe.category,
    recipeCuisine: "日本",
    keywords: recipe.tags.join(", "),
    totalTime: iso8601(recipe.minutes),
    cookTime: iso8601(recipe.minutes),
    recipeYield: `${recipe.servings}人分`,
    dateModified: recipe.updatedAt,
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${recipe.kcal} kcal`,
      servingSize: "1人分",
    },
    recipeIngredient: recipe.ingredients.map((i) => `${i.name} ${i.amount}`),
    recipeInstructions: recipe.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: s,
      url: `${site.url}/recipe/${recipe.id}#step-${i + 1}`,
    })),
    author: { "@type": "Organization", name: site.name },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: recipe.category,
        item: `${site.url}/search?category=${encodeURIComponent(recipe.category)}`,
      },
      { "@type": "ListItem", position: 3, name: recipe.title },
    ],
  };

  const buyList = recipe.ingredients.filter((i) => !i.staple);

  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <nav className="no-print text-sm" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        {" / "}
        <Link
          href={`/search?category=${encodeURIComponent(recipe.category)}`}
          className="hover:underline"
        >
          {recipe.category}
        </Link>
      </nav>

      {recipe.photo && (
        <figure className="-mx-4 sm:mx-0">
          <Image
            src={recipe.photo.src}
            alt={recipe.photo.alt}
            width={recipe.photo.width}
            height={recipe.photo.height}
            priority
            sizes="(min-width: 640px) 768px, 100vw"
            className="h-auto w-full sm:rounded-xl"
          />
          {recipe.photo.credit && (
            <figcaption className="mt-2 px-4 text-xs sm:px-0" style={{ color: "var(--muted)" }}>
              Photo:{" "}
              {recipe.photo.credit.url ? (
                <a
                  href={recipe.photo.credit.url}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="underline"
                >
                  {recipe.photo.credit.name}
                </a>
              ) : (
                recipe.photo.credit.name
              )}
            </figcaption>
          )}
        </figure>
      )}

      <header>
        <h1 className="text-2xl font-bold leading-tight sm:text-3xl">{recipe.title}</h1>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          {recipe.description}
        </p>

        <dl
          className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border sm:grid-cols-4"
          style={{ borderColor: "var(--line)", background: "var(--line)" }}
        >
          {[
            { label: "調理時間", value: `${recipe.minutes}分` },
            { label: "分量", value: `${recipe.servings}人分` },
            { label: "カロリー", value: `約${recipe.kcal}kcal` },
            { label: "材料費", value: `約${recipe.cost}円` },
          ].map((item) => (
            <div key={item.label} className="px-4 py-3" style={{ background: "var(--bg)" }}>
              <dt className="text-xs" style={{ color: "var(--muted)" }}>
                {item.label}
              </dt>
              <dd className="text-lg font-bold">{item.value}</dd>
            </div>
          ))}
        </dl>

        {recipe.handsOff && (
          <p
            className="mt-3 rounded-lg px-4 py-2 text-sm"
            style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
          >
            ⏳ このうち約{recipe.handsOff}分は加熱の放置時間です。別の作業に使えます。
          </p>
        )}

        <div className="no-print mt-4 flex flex-wrap gap-2">
          {recipe.tags.map((t) => (
            <Link
              key={t}
              href={`/search?tag=${encodeURIComponent(t)}`}
              className="rounded-full border px-3 py-1 text-xs hover:border-[var(--accent)]"
              style={{ borderColor: "var(--line)" }}
            >
              #{t}
            </Link>
          ))}
        </div>
      </header>

      <section>
        <h2 className="mb-3 text-xl font-bold">材料（{recipe.servings}人分）</h2>
        <ul className="rounded-xl border" style={{ borderColor: "var(--line)" }}>
          {recipe.ingredients.map((ing) => (
            <li
              key={ing.name}
              className="flex items-baseline justify-between gap-4 border-b px-4 py-2.5 text-sm last:border-b-0"
              style={{ borderColor: "var(--line)" }}
            >
              <span>
                {ing.name}
                {ing.staple && (
                  <span className="ml-2 text-xs" style={{ color: "var(--muted)" }}>
                    常備
                  </span>
                )}
              </span>
              <span className="shrink-0 font-medium" style={{ color: "var(--muted)" }}>
                {ing.amount}
              </span>
            </li>
          ))}
        </ul>
        {buyList.length > 0 && (
          <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
            買い物が必要なのは <strong>{buyList.map((i) => i.name).join("・")}</strong> の
            {buyList.length}品だけです（調味料が揃っている場合）。
          </p>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold">作り方</h2>
        <ol className="space-y-4">
          {recipe.steps.map((step, i) => (
            // id は構造化データの HowToStep.url が指すアンカー
            <li key={i} id={`step-${i + 1}`} className="flex scroll-mt-4 gap-3">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="pt-0.5">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold">失敗しないためのコツ</h2>
        <ul className="space-y-3">
          {recipe.tips.map((tip, i) => (
            <li
              key={i}
              className="rounded-lg border-l-4 py-2 pl-4 text-sm"
              style={{ borderColor: "var(--accent)", background: "var(--accent-soft)" }}
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 && (
        <section className="no-print">
          <h2 className="mb-4 text-xl font-bold">似ている時短レシピ</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        </section>
      )}

      <p className="text-xs" style={{ color: "var(--muted)" }}>
        最終更新: {recipe.updatedAt}
      </p>
    </article>
  );
}
