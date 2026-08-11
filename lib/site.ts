export const site = {
  name: "時短レシピ手帳",
  shortName: "時短レシピ",
  description:
    "10分前後で作れる時短レシピを、調理時間・調理器具・洗い物の少なさから探せるレシピ集。手順は最短、コツは理由つきで解説します。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jitan-recipe.jp",
  locale: "ja_JP",
} as const;

export const METHODS = [
  "レンジ",
  "フライパン",
  "鍋",
  "トースター",
  "混ぜるだけ",
  "炊飯器",
] as const;

export const CATEGORIES = [
  "主菜",
  "副菜",
  "麺・パスタ",
  "ごはん・丼",
  "スープ・汁物",
  "デザート",
] as const;

export const TIME_FILTERS = [
  { label: "5分以内", value: 5 },
  { label: "10分以内", value: 10 },
  { label: "15分以内", value: 15 },
] as const;
