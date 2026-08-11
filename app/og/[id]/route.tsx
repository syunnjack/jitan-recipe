import { ImageResponse } from "next/og";
import { getAllRecipes, getRecipe } from "@/lib/recipes";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllRecipes().map((r) => ({ id: r.id }));
}

/**
 * Google Fonts から「実際に使う文字だけ」のサブセットを取得する。
 * 日本語フォント全体は数MBあり ImageResponse に載せられないため、
 * text= で必要なグリフだけに絞る。satori は woff2 を読めないので
 * 旧UAを送って truetype を受け取る。
 */
async function loadFont(text: string, weight: 400 | 700): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url, {
    headers: {
      // 新しいUAだと woff2 が返るため、truetype を返す旧UAを指定する
      "User-Agent":
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36",
    },
  }).then((res) => res.text());

  // Google は UA により woff / truetype / opentype を返し分ける。satori はこの3種を読めるが
  // woff2 だけは読めないため、woff2 が返ってきた場合は明示的に弾く。
  const match = css.match(/src: url\((?<url>[^)]+)\) format\('(?<format>[^']+)'\)/);
  if (!match?.groups?.url) throw new Error("font subset URL not found");
  if (match.groups.format === "woff2") {
    throw new Error("got woff2, which satori cannot parse");
  }

  return fetch(match.groups.url).then((res) => res.arrayBuffer());
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) return new Response("Not found", { status: 404 });

  const badge = `${recipe.minutes}分`;
  const meta = `${recipe.category}・${recipe.method}／材料${recipe.ingredients.length}品／約${recipe.kcal}kcal`;
  const glyphs = [...new Set(recipe.title + badge + meta + site.name)].join("");

  const [bold, regular] = await Promise.all([loadFont(glyphs, 700), loadFont(glyphs, 400)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fffdf9",
          padding: "72px 80px",
          borderTop: "20px solid #c2410c",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "#c2410c",
              color: "#ffffff",
              fontFamily: "NotoBold",
              fontSize: 44,
              padding: "8px 28px",
              borderRadius: 999,
              marginBottom: 36,
            }}
          >
            {badge}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "NotoBold",
              fontSize: recipe.title.length > 18 ? 68 : 82,
              color: "#24211d",
              lineHeight: 1.3,
            }}
          >
            {recipe.title}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "NotoRegular", fontSize: 34, color: "#6b6357" }}>
            {meta}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "NotoBold",
              fontSize: 32,
              color: "#c2410c",
              marginTop: 20,
            }}
          >
            {site.name}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "NotoBold", data: bold, weight: 700, style: "normal" },
        { name: "NotoRegular", data: regular, weight: 400, style: "normal" },
      ],
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable",
      },
    },
  );
}
