export type Category =
  | "主菜"
  | "副菜"
  | "麺・パスタ"
  | "ごはん・丼"
  | "スープ・汁物"
  | "デザート";

export type Method = "レンジ" | "フライパン" | "鍋" | "トースター" | "混ぜるだけ" | "炊飯器";

export type Photo = {
  /** public/ からのパス（例: /recipes/renji-mabo-nasu.jpg） */
  src: string;
  /** 料理が分かる代替テキスト。「料理の写真」のような無内容な文言にしない */
  alt: string;
  width: number;
  height: number;
  /** ライセンス表示が必要な素材のみ設定する。自前撮影なら不要 */
  credit?: { name: string; url?: string };
};

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
  /** 完成写真。未設定なら next/og の生成カードにフォールバックする */
  photo?: Photo;
  ingredients: Ingredient[];
  steps: string[];
  tips: string[];
  /** 手を離せる時間（分）。弁当準備などの同時進行の目安 */
  handsOff?: number;
  updatedAt: string;
};
