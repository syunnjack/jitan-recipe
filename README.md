# 時短レシピ手帳（jitan-recipe）

10分前後で作れる時短レシピを、**調理時間・調理器具・洗い物の少なさ**から探せるレシピ集。

- 本番: https://jitan-recipe.vercel.app
- Vercel: https://vercel.com/chitamaru/jitan-recipe

## 技術構成

| | |
|---|---|
| フレームワーク | Next.js 16（App Router） |
| スタイル | Tailwind CSS |
| データ | `lib/recipes.ts` の静的データ（DB なし） |
| ホスティング | Vercel（`main` への push で自動デプロイ） |

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド
```

## ルート構成

| パス | 生成方式 | 内容 |
|---|---|---|
| `/` | Static | 時間・器具・カテゴリ・タグの各導線 |
| `/recipe/[id]` | SSG | レシピ詳細（全件を `generateStaticParams` で事前生成） |
| `/search` | Dynamic | 絞り込み検索 |
| `/api/recipes` | Dynamic | レシピ一覧の JSON |
| `/sitemap.xml`, `/robots.txt` | Static | — |

## 設計上の判断

**全ページをサーバーレンダリングする。** クライアントサイドルーティングは使わない。検索の絞り込みも `<a>` リンクと `<form method="get">` だけで組んであり、JS 無効でも動作する。SEO/LLM クローラに対して HTML がそのまま届くことを優先した結果。

**`/search` は `noindex, follow`。** 絞り込みの組み合わせが無限に増えるため。ただし robots.txt では**塞いでいない** — 塞ぐと noindex 自体がクロールされず読まれないため。sitemap からも除外している。

**構造化データ。** レシピ詳細に `Recipe`（`recipeIngredient` / `HowToStep` / `NutritionInformation`）と `BreadcrumbList`、全ページに `WebSite` + `SearchAction` を出力。

**放置時間（`handsOff`）を持たせている。** 時短を「工程を雑にすること」ではなく「火加減の監視から解放されること」と定義しているため、加熱中に手を離せる時間を明示する。

## レシピの追加

`lib/recipes.ts` の配列に `Recipe` 型のオブジェクトを追加するだけ。詳細ページ・サイトマップ・検索インデックスは自動で追従する。

- `id` は URL になるのでローマ字のケバブケース
- `ingredients[].staple` を `true` にすると「常備」扱いになり、買い物リストの案内から外れる
- `tags` は検索フィルタとタグ一覧に自動反映される

## 環境変数

| 変数 | 用途 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | sitemap・canonical・OGP の絶対 URL の基点。未設定時は `https://jitan-recipe.jp` |

独自ドメインを当てる場合は Vercel でこの値を書き換えて再デプロイすれば、全 URL が追従する。

## 注意

`app/layout.tsx` の `metadata.verification.google` は Google Search Console の所有権確認タグ。**削除すると確認が外れる。**

## 免責

カロリー・金額は一般的な材料からの概算値であり、実際の値は使用する商品により異なる。
