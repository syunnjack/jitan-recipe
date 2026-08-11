import type { MetadataRoute } from "next";
import { getAllRecipes } from "@/lib/recipes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const recipes = getAllRecipes();

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // /search は noindex（絞り込みの組み合わせが無限に増えるため）なのでサイトマップには含めない
    ...recipes.map((r) => ({
      url: `${site.url}/recipe/${r.id}`,
      lastModified: new Date(r.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
