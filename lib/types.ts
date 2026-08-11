export type Category =
  | "主菜"
  | "副菜"
  | "麺・パスタ"
  | "ごはん・丼"
  | "スープ・汁物"
  | "デザート";

export type Method = "レンジ" | "フライパン" | "鍋" | "トースター" | "混ぜるだけ" | "炊飯器";

export type Ingredient = {
  name: string;
  amount: string;
  /** 常備品（分量表示のみで買い物リストからは外したいもの） */
  staple?: boolean;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  /** 調理時間（分）。10分以内=時短の主軸 */
  minutes: number;
  servings: number;
  category: Category;
  method: Method;
  /** 1人前あたりの目安 */
  kcal: number;
  /** 1人前あたりの目安金額（円） */
  cost: number;
  tags: string[];
  ingredients: Ingredient[];
  steps: string[];
  tips: string[];
  /** 手を離せる時間（分）。弁当準備などの同時進行の目安 */
  handsOff?: number;
  updatedAt: string;
};
