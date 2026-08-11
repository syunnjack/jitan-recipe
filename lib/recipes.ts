import type { Recipe } from "./types";

export const recipes: Recipe[] = [
  {
    id: "renji-butabara-moyashi",
    title: "レンジで豚バラもやし蒸し",
    description:
      "耐熱ボウルに重ねてチンするだけ。フライパンを使わないので洗い物は器ひとつ、火加減も見なくていい平日夜の定番。",
    minutes: 8,
    servings: 2,
    category: "主菜",
    method: "レンジ",
    kcal: 380,
    cost: 160,
    tags: ["10分以内", "洗い物少ない", "節約", "低糖質"],
    ingredients: [
      { name: "豚バラ薄切り肉", amount: "150g" },
      { name: "もやし", amount: "1袋(200g)" },
      { name: "酒", amount: "大さじ1", staple: true },
      { name: "ポン酢", amount: "大さじ2", staple: true },
      { name: "ごま油", amount: "小さじ1", staple: true },
      { name: "小ねぎ（お好みで）", amount: "適量" },
    ],
    steps: [
      "耐熱ボウルにもやしを広げ、豚バラ肉を重ならないように並べる。",
      "酒をまわしかけ、ふんわりラップをして600Wで5分加熱する。",
      "肉に火が通っていなければ30秒ずつ追加加熱する。",
      "出た水分を軽く切り、ポン酢とごま油を回しかけて混ぜる。小ねぎを散らす。",
    ],
    tips: [
      "肉を広げて並べるのが火の通りムラを防ぐ最大のコツ。重なると中心が生っぽく残ります。",
      "もやしの水分が気になる場合は、加熱後に器を傾けて汁を1/3ほど捨ててから味付けを。",
      "ポン酢を焼肉のタレに変えればごはんが進む味に、白だし+レモンならさっぱり仕上がります。",
    ],
    handsOff: 5,
    updatedAt: "2026-08-11",
  },
  {
    id: "5min-carbonara",
    title: "5分で濃厚カルボナーラ（生クリーム不要）",
    description:
      "パスタを茹でている間にソースを作り、余熱だけで和える方式。分離しにくい配合にしてあるので初回から失敗しません。",
    minutes: 12,
    servings: 1,
    category: "麺・パスタ",
    method: "鍋",
    kcal: 690,
    cost: 190,
    tags: ["ひとり分", "10分台", "ごちそう感"],
    ingredients: [
      { name: "スパゲッティ(1.6mm)", amount: "100g" },
      { name: "ベーコンまたはパンチェッタ", amount: "40g" },
      { name: "卵", amount: "1個" },
      { name: "卵黄", amount: "1個分" },
      { name: "粉チーズ", amount: "大さじ3" },
      { name: "黒こしょう", amount: "たっぷり", staple: true },
      { name: "塩", amount: "適量", staple: true },
    ],
    steps: [
      "鍋に湯を沸かし、1Lあたり小さじ2の塩を入れてパスタを茹で始める。",
      "ボウルに卵・卵黄・粉チーズ・黒こしょうを入れてよく混ぜておく。",
      "フライパンでベーコンを弱めの中火でカリッとするまで焼き、火を止める。",
      "茹で上がったパスタと茹で汁大さじ2をフライパンに入れて絡め、粗熱を10秒とる。",
      "火を止めたままボウルの卵液を加え、手早く和える。ゆるければ弱火で数秒だけ加熱して好みのとろみに。",
    ],
    tips: [
      "卵が固まる温度は約65〜70℃。フライパンを火から下ろして10秒待つだけで、ぼそぼそ化がほぼ防げます。",
      "茹で汁は乳化のための必須材料。捨てる前に必ずお玉1杯分を取り分けておくこと。",
      "粉チーズはパルミジャーノに替えると香りが段違いですが、塩気が強いので塩は控えめに。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "torimune-yawaraka-yaki",
    title: "鶏むねのやわらか照り焼き",
    description:
      "そぎ切り＋片栗粉で、むね肉でもぱさつかない。冷めても硬くならないのでお弁当にも回せます。",
    minutes: 15,
    servings: 2,
    category: "主菜",
    method: "フライパン",
    kcal: 320,
    cost: 140,
    tags: ["節約", "高たんぱく", "お弁当", "作り置き"],
    ingredients: [
      { name: "鶏むね肉", amount: "1枚(300g)" },
      { name: "片栗粉", amount: "大さじ1.5", staple: true },
      { name: "しょうゆ", amount: "大さじ1.5", staple: true },
      { name: "みりん", amount: "大さじ1.5", staple: true },
      { name: "酒", amount: "大さじ1", staple: true },
      { name: "砂糖", amount: "小さじ1", staple: true },
      { name: "サラダ油", amount: "大さじ1", staple: true },
    ],
    steps: [
      "鶏むね肉を繊維を断つ向きに、7〜8mm厚のそぎ切りにする。",
      "全体に片栗粉を薄くまぶす。",
      "フライパンに油を熱し、中火で片面2分ずつ焼く。",
      "調味料を全て加え、とろみがつくまで1〜2分煮からめる。",
    ],
    tips: [
      "片栗粉が肉汁を閉じ込め、同時にタレのとろみ役も兼ねます。まぶしすぎると粉っぽくなるので薄く。",
      "冷蔵で3日、冷凍で3週間ほど。冷凍する場合はタレごと保存袋に入れ、平らにならすと解凍が速いです。",
      "焼き色がつく前に触ると身が崩れます。並べたら2分は動かさないこと。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "renji-mabo-nasu",
    title: "レンジ麻婆なす",
    description:
      "油で揚げないのにとろとろ。なすは切って加熱、ひき肉は同じ器で追い加熱、ワンボウルで完結します。",
    minutes: 10,
    servings: 2,
    category: "主菜",
    method: "レンジ",
    kcal: 340,
    cost: 180,
    tags: ["10分以内", "洗い物少ない", "野菜たっぷり"],
    ingredients: [
      { name: "なす", amount: "3本" },
      { name: "豚ひき肉", amount: "120g" },
      { name: "ごま油", amount: "大さじ1", staple: true },
      { name: "おろしにんにく", amount: "小さじ1/2", staple: true },
      { name: "おろししょうが", amount: "小さじ1/2", staple: true },
      { name: "味噌", amount: "大さじ1", staple: true },
      { name: "しょうゆ", amount: "大さじ1", staple: true },
      { name: "砂糖", amount: "小さじ2", staple: true },
      { name: "片栗粉", amount: "小さじ1", staple: true },
      { name: "水", amount: "大さじ3", staple: true },
      { name: "豆板醤（お好みで）", amount: "小さじ1/2" },
    ],
    steps: [
      "なすを乱切りにし、耐熱ボウルに入れてごま油を絡める。",
      "ふんわりラップをして600Wで3分加熱する。",
      "ひき肉と調味料をすべて加えてよく混ぜ、再びラップをして600Wで4分加熱する。",
      "取り出してよく混ぜ、とろみを均一にする。肉に火が通っていなければ30秒追加。",
    ],
    tips: [
      "なすに先に油を絡めるのが「揚げた風」食感の核心。油なしだとスカスカになります。",
      "片栗粉は水に溶いてから入れるとダマになりません。",
      "辛さは豆板醤で調整。子ども用に作るなら抜いて、大人の分だけラー油を後がけに。",
    ],
    handsOff: 7,
    updatedAt: "2026-08-11",
  },
  {
    id: "shio-ramen-tamago-toji",
    title: "卵とじ塩ラーメン（袋麺アレンジ）",
    description:
      "袋麺に卵と冷凍野菜を足すだけで、栄養バランスと満足度が一段上がる夜食レシピ。",
    minutes: 7,
    servings: 1,
    category: "麺・パスタ",
    method: "鍋",
    kcal: 520,
    cost: 130,
    tags: ["10分以内", "ひとり分", "夜食", "節約"],
    ingredients: [
      { name: "袋麺（塩）", amount: "1袋" },
      { name: "卵", amount: "1個" },
      { name: "冷凍ミックス野菜", amount: "80g" },
      { name: "ごま油", amount: "小さじ1", staple: true },
      { name: "こしょう", amount: "少々", staple: true },
    ],
    steps: [
      "袋の表示量の湯を沸かし、冷凍野菜を入れて1分茹でる。",
      "麺を入れ、表示時間より30秒短く茹でる。",
      "付属スープを溶かし、溶き卵を細く回し入れて10秒待つ。",
      "軽くひと混ぜして火を止め、ごま油とこしょうをかける。",
    ],
    tips: [
      "卵は「回し入れて10秒待つ」。すぐ混ぜると濁ってふわふわになりません。",
      "麺を30秒短めにするのは、スープの中で伸びる分を見越すため。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "sabakan-soboro-don",
    title: "さば缶そぼろ丼",
    description:
      "缶詰と調味料だけ。包丁もまな板も使わず、フライパンひとつで5分。買い置きで乗り切る日の切り札。",
    minutes: 6,
    servings: 2,
    category: "ごはん・丼",
    method: "フライパン",
    kcal: 480,
    cost: 150,
    tags: ["10分以内", "包丁なし", "缶詰", "高たんぱく", "防災備蓄"],
    ingredients: [
      { name: "さば水煮缶", amount: "1缶(190g)" },
      { name: "しょうゆ", amount: "大さじ1", staple: true },
      { name: "みりん", amount: "大さじ1", staple: true },
      { name: "おろししょうが", amount: "小さじ1", staple: true },
      { name: "温かいごはん", amount: "2杯分" },
      { name: "小ねぎ・白ごま", amount: "適量" },
    ],
    steps: [
      "さば缶を汁ごとフライパンに入れ、木べらで粗くほぐす。",
      "しょうゆ・みりん・しょうがを加え、中火で水分が飛ぶまで3〜4分炒りつける。",
      "ごはんにのせ、小ねぎと白ごまを散らす。",
    ],
    tips: [
      "缶汁にはDHA・EPAが溶け出しているので、捨てずに一緒に煮詰めるのがおすすめ。",
      "水分を飛ばしすぎるとパサつくので、フライパンの底に薄くツヤが残る程度で火を止めます。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "kyuri-tataki-umami",
    title: "たたききゅうりの旨だれ和え",
    description: "袋の上から叩いて調味料を揉むだけ。3分で作れて、箸休めにも酒のつまみにもなる副菜。",
    minutes: 3,
    servings: 2,
    category: "副菜",
    method: "混ぜるだけ",
    kcal: 60,
    cost: 60,
    tags: ["10分以内", "火を使わない", "洗い物少ない", "低糖質"],
    ingredients: [
      { name: "きゅうり", amount: "2本" },
      { name: "ごま油", amount: "大さじ1", staple: true },
      { name: "鶏がらスープの素", amount: "小さじ1", staple: true },
      { name: "おろしにんにく", amount: "少々", staple: true },
      { name: "白ごま", amount: "小さじ1", staple: true },
      { name: "塩", amount: "ひとつまみ", staple: true },
    ],
    steps: [
      "きゅうりをポリ袋に入れ、めん棒や瓶の底で数か所叩いて割る。",
      "食べやすい長さに手で折る。",
      "調味料をすべて袋に入れ、外から揉んで1分なじませる。",
    ],
    tips: [
      "包丁で切るより、叩いて断面を粗くしたほうがタレの絡みが段違いに良くなります。",
      "作ってすぐより10分置いたほうが味がなじみますが、時間が経つと水が出るので当日中に。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "toaster-cheese-toast-egg",
    title: "落とし卵のチーズトースト",
    description: "パンの中央をくぼませて卵を落とすだけ。トースターに入れたら5分は完全に手が空きます。",
    minutes: 8,
    servings: 1,
    category: "主菜",
    method: "トースター",
    kcal: 400,
    cost: 110,
    tags: ["朝食", "ひとり分", "洗い物少ない"],
    ingredients: [
      { name: "食パン(6枚切り)", amount: "1枚" },
      { name: "卵", amount: "1個" },
      { name: "ピザ用チーズ", amount: "30g" },
      { name: "マヨネーズ", amount: "適量", staple: true },
      { name: "塩・こしょう", amount: "少々", staple: true },
    ],
    steps: [
      "食パンの中央をスプーンの背で軽く押してくぼませ、縁にマヨネーズで土手を作る。",
      "くぼみに卵を割り入れ、周囲にチーズを散らす。",
      "トースター1000Wで5〜6分焼く。焦げそうならアルミホイルを軽くかぶせる。",
      "塩・こしょうをふる。",
    ],
    tips: [
      "マヨネーズの土手が卵の流出を防ぐ堤防になります。ここを省くと天板が惨事に。",
      "黄身を半熟で止めたいなら5分、しっかり固めるなら7分が目安。",
    ],
    handsOff: 6,
    updatedAt: "2026-08-11",
  },
  {
    id: "tomato-tamago-itame",
    title: "トマトと卵の炒めもの",
    description:
      "卵を先に半熟で取り出し、最後に戻すのが鉄則。中華の定番を家庭のフライパンで再現します。",
    minutes: 10,
    servings: 2,
    category: "主菜",
    method: "フライパン",
    kcal: 230,
    cost: 130,
    tags: ["10分以内", "野菜たっぷり", "低糖質", "ベジタリアン可"],
    ingredients: [
      { name: "トマト", amount: "2個" },
      { name: "卵", amount: "3個" },
      { name: "サラダ油", amount: "大さじ2", staple: true },
      { name: "鶏がらスープの素", amount: "小さじ1", staple: true },
      { name: "砂糖", amount: "小さじ1/2", staple: true },
      { name: "塩・こしょう", amount: "少々", staple: true },
    ],
    steps: [
      "トマトをくし形6等分に切る。卵は塩ひとつまみを入れて溶く。",
      "フライパンに油大さじ1を強めの中火で熱し、卵を流して大きく2〜3回混ぜ、半熟で一度取り出す。",
      "残りの油でトマトを1分炒め、鶏がらスープの素と砂糖を加える。",
      "卵を戻し入れ、10秒ほど混ぜて火を止める。こしょうをふる。",
    ],
    tips: [
      "砂糖ひとつまみがトマトの酸味を丸くします。入れないと「すっぱいだけ」になりがち。",
      "卵は8割の火通りで取り出すこと。戻したあとの余熱でちょうどよくなります。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "renji-kabocha-nimono",
    title: "レンジで15分かぼちゃの煮物",
    description: "鍋で煮崩れさせがちなかぼちゃも、レンジなら形が残る。作り置きの副菜として優秀。",
    minutes: 12,
    servings: 3,
    category: "副菜",
    method: "レンジ",
    kcal: 120,
    cost: 70,
    tags: ["作り置き", "お弁当", "洗い物少ない", "野菜たっぷり"],
    ingredients: [
      { name: "かぼちゃ", amount: "1/4個(400g)" },
      { name: "しょうゆ", amount: "大さじ1", staple: true },
      { name: "みりん", amount: "大さじ1.5", staple: true },
      { name: "砂糖", amount: "大さじ1", staple: true },
      { name: "水", amount: "大さじ2", staple: true },
    ],
    steps: [
      "かぼちゃを3cm角に切り、耐熱容器に皮を下にして並べる。",
      "調味料をすべて回しかける。",
      "ふんわりラップをして600Wで6分加熱する。",
      "上下を返して混ぜ、ラップなしでさらに2分加熱し、そのまま5分置いて味を含ませる。",
    ],
    tips: [
      "「加熱後に置く」時間が味の染み込みを作ります。ここを省くと表面だけの味に。",
      "かたいかぼちゃを切るときは、丸ごと600Wで2分ほど加熱すると包丁が入りやすくなります。",
    ],
    handsOff: 8,
    updatedAt: "2026-08-11",
  },
  {
    id: "suihanki-butadon",
    title: "炊飯器で放置豚丼",
    description:
      "材料を入れてスイッチを押すだけ。仕込み5分で、帰宅時には出来上がっている休日仕込みの一品。",
    minutes: 5,
    servings: 3,
    category: "ごはん・丼",
    method: "炊飯器",
    kcal: 560,
    cost: 210,
    tags: ["ほったらかし", "作り置き", "仕込み5分"],
    ingredients: [
      { name: "豚こま切れ肉", amount: "400g" },
      { name: "玉ねぎ", amount: "1個" },
      { name: "しょうゆ", amount: "大さじ4", staple: true },
      { name: "みりん", amount: "大さじ4", staple: true },
      { name: "酒", amount: "大さじ2", staple: true },
      { name: "砂糖", amount: "大さじ1", staple: true },
      { name: "おろししょうが", amount: "小さじ2", staple: true },
    ],
    steps: [
      "玉ねぎを薄切りにする。",
      "炊飯器の内釜に全ての材料を入れ、軽く混ぜる。",
      "通常の炊飯モードで加熱する（早炊きでも可）。",
      "炊き上がったらよく混ぜ、ごはんにのせる。",
    ],
    tips: [
      "内釜の最大調理量を必ず守ること。吹きこぼれの原因になります。機種によっては調理不可なので取扱説明書を確認してください。",
      "汁気が多い場合は保温のままフタを開けて10分置くと煮詰まります。",
    ],
    handsOff: 45,
    updatedAt: "2026-08-11",
  },
  {
    id: "wakame-tamago-soup",
    title: "3分わかめと卵のスープ",
    description: "湯を沸かして注ぐだけ。もう一品ほしいときの隙間を埋める汁物。",
    minutes: 3,
    servings: 2,
    category: "スープ・汁物",
    method: "鍋",
    kcal: 50,
    cost: 40,
    tags: ["10分以内", "節約", "低カロリー"],
    ingredients: [
      { name: "乾燥わかめ", amount: "大さじ1", staple: true },
      { name: "卵", amount: "1個" },
      { name: "水", amount: "400ml", staple: true },
      { name: "鶏がらスープの素", amount: "小さじ2", staple: true },
      { name: "ごま油", amount: "小さじ1/2", staple: true },
      { name: "白ごま", amount: "少々", staple: true },
    ],
    steps: [
      "鍋に水と鶏がらスープの素を入れて沸かす。",
      "わかめを加えて30秒煮る。",
      "沸騰した状態で溶き卵を細く回し入れ、10秒待ってからひと混ぜする。",
      "火を止め、ごま油と白ごまを加える。",
    ],
    tips: [
      "卵をふわふわにする条件は「しっかり沸騰」と「混ぜない10秒」の2つだけです。",
      "水溶き片栗粉を小さじ1加えてから卵を入れると、さらにふんわり仕上がります。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "avocado-natto-don",
    title: "アボカド納豆丼",
    description: "火を一切使わず3分。朝でも夜でも成立する、栄養密度の高い一杯。",
    minutes: 3,
    servings: 1,
    category: "ごはん・丼",
    method: "混ぜるだけ",
    kcal: 520,
    cost: 140,
    tags: ["火を使わない", "10分以内", "ひとり分", "朝食"],
    ingredients: [
      { name: "アボカド", amount: "1/2個" },
      { name: "納豆", amount: "1パック" },
      { name: "温かいごはん", amount: "1杯分" },
      { name: "卵黄", amount: "1個分" },
      { name: "しょうゆ", amount: "小さじ1", staple: true },
      { name: "刻みのり・小ねぎ", amount: "適量" },
    ],
    steps: [
      "アボカドを1.5cm角に切る。",
      "納豆を付属のタレでよく混ぜる。",
      "ごはんにアボカドと納豆をのせ、中央に卵黄を落とす。",
      "しょうゆを回しかけ、のりと小ねぎを散らす。",
    ],
    tips: [
      "アボカドの食べ頃は、皮が黒みを帯びてヘタの周りが軽く沈む程度。かたい場合はりんごと一緒に紙袋に入れると1〜2日で追熟します。",
      "わさびを少量添えると味が締まり、大人向けの一杯になります。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "frypan-gyoza-hanetsuki",
    title: "羽根つき冷凍餃子の焼き方",
    description:
      "冷凍餃子を「店の見た目」に仕上げる手順書。粉と水の比率さえ守れば、羽根は必ず出ます。",
    minutes: 10,
    servings: 2,
    category: "主菜",
    method: "フライパン",
    kcal: 350,
    cost: 160,
    tags: ["10分以内", "冷凍食品アレンジ", "ごちそう感"],
    ingredients: [
      { name: "冷凍餃子", amount: "12個" },
      { name: "水", amount: "100ml", staple: true },
      { name: "薄力粉", amount: "小さじ1", staple: true },
      { name: "サラダ油", amount: "大さじ1", staple: true },
      { name: "ごま油", amount: "小さじ1", staple: true },
    ],
    steps: [
      "水100mlに薄力粉小さじ1を溶かして羽根用の水溶き粉を作る。",
      "フライパンにサラダ油を熱し、冷凍のままの餃子を並べる。",
      "水溶き粉を回し入れ、フタをして中火で6分蒸し焼きにする。",
      "フタを取り、水分が飛んでパチパチ音が変わるまで2〜3分焼く。",
      "仕上げにごま油を回しかけ、30秒焼いて皿をかぶせて返す。",
    ],
    tips: [
      "粉は水100mlに対して小さじ1（約1%）。多すぎると重い羽根、少なすぎると羽根になりません。",
      "解凍せず凍ったまま焼くのが皮を破らないコツ。",
      "「パチパチ」から「チリチリ」に音が変わったら水分が抜けた合図です。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "renji-chawanmushi",
    title: "レンジ茶碗蒸し",
    description: "蒸し器不要。200Wの弱加熱でゆっくり火を通せば、す（穴）が入りません。",
    minutes: 12,
    servings: 2,
    category: "副菜",
    method: "レンジ",
    kcal: 90,
    cost: 90,
    tags: ["洗い物少ない", "低カロリー", "ごちそう感"],
    ingredients: [
      { name: "卵", amount: "1個" },
      { name: "水", amount: "150ml", staple: true },
      { name: "白だし", amount: "大さじ1", staple: true },
      { name: "かまぼこ・しいたけなど", amount: "適量" },
      { name: "三つ葉", amount: "少々" },
    ],
    steps: [
      "卵を溶き、水と白だしを混ぜて茶こしでこす。",
      "耐熱カップに具材を入れ、卵液を静かに注ぐ。",
      "ふんわりラップをして200W（または解凍モード）で6〜8分加熱する。",
      "表面が固まっていれば三つ葉をのせて完成。ゆるければ1分ずつ追加。",
    ],
    tips: [
      "600Wでは一瞬で沸騰して穴だらけになります。必ず200W前後の弱い出力で。",
      "こす工程を省くと舌触りがざらつきます。ここだけは省略しないでください。",
    ],
    handsOff: 8,
    updatedAt: "2026-08-11",
  },
  {
    id: "shio-yakisoba-lemon",
    title: "レモン塩焼きそば",
    description: "ソース焼きそばに飽きたときの一皿。仕上げのレモンで後味が軽くなります。",
    minutes: 10,
    servings: 1,
    category: "麺・パスタ",
    method: "フライパン",
    kcal: 480,
    cost: 150,
    tags: ["10分以内", "ひとり分", "節約"],
    ingredients: [
      { name: "焼きそば麺", amount: "1玉" },
      { name: "豚こま切れ肉", amount: "80g" },
      { name: "キャベツ", amount: "2枚" },
      { name: "鶏がらスープの素", amount: "小さじ1.5", staple: true },
      { name: "酒", amount: "大さじ1", staple: true },
      { name: "ごま油", amount: "大さじ1", staple: true },
      { name: "レモン", amount: "1/4個" },
      { name: "黒こしょう", amount: "適量", staple: true },
    ],
    steps: [
      "キャベツをざく切りにする。麺は袋の口を少し開けて600Wで40秒温めておく。",
      "ごま油で豚肉を炒め、色が変わったらキャベツを加えて1分炒める。",
      "麺と酒を加えてほぐしながら炒め、鶏がらスープの素を全体に振る。",
      "火を止めてレモンを搾り、黒こしょうをたっぷりかける。",
    ],
    tips: [
      "麺を先にレンジで温めておくと、フライパンの上でほぐす時間が半分になり、麺が切れません。",
      "レモンは火を止めてから。加熱すると香りが飛びます。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "renji-purin",
    title: "レンジで2分プリン",
    description: "マグカップひとつ。混ぜて弱加熱するだけで、冷やす時間を除けば実働5分のデザート。",
    minutes: 5,
    servings: 1,
    category: "デザート",
    method: "レンジ",
    kcal: 180,
    cost: 60,
    tags: ["洗い物少ない", "ひとり分", "おやつ"],
    ingredients: [
      { name: "卵", amount: "1個" },
      { name: "牛乳", amount: "120ml" },
      { name: "砂糖", amount: "大さじ1.5", staple: true },
      { name: "バニラエッセンス（お好みで）", amount: "少々" },
    ],
    steps: [
      "マグカップに卵と砂糖を入れてよく混ぜる。",
      "牛乳を少しずつ加えて混ぜ、茶こしでこしながら別のカップに移す。",
      "ラップをせず200Wで4〜5分加熱する。中央が少し揺れる程度で止める。",
      "粗熱をとり、冷蔵庫で1時間以上冷やす。",
    ],
    tips: [
      "加熱直後は中心が固まっていなくてOK。余熱と冷却で固まります。加熱しすぎると分離します。",
      "カラメルは砂糖大さじ2＋水小さじ1を600Wで2分（色づくまで様子見）、熱湯小さじ1を加えて作れます。ハネるので注意。",
    ],
    handsOff: 5,
    updatedAt: "2026-08-11",
  },
  {
    id: "tofu-mizonami-salad",
    title: "崩し豆腐のごまだれサラダ",
    description: "スプーンで崩してかけるだけ。包丁も火も使わず、たんぱく質を1品足せます。",
    minutes: 3,
    servings: 2,
    category: "副菜",
    method: "混ぜるだけ",
    kcal: 140,
    cost: 80,
    tags: ["火を使わない", "10分以内", "包丁なし", "高たんぱく", "低糖質"],
    ingredients: [
      { name: "絹ごし豆腐", amount: "1丁(300g)" },
      { name: "すりごま", amount: "大さじ2", staple: true },
      { name: "しょうゆ", amount: "大さじ1", staple: true },
      { name: "酢", amount: "小さじ2", staple: true },
      { name: "ごま油", amount: "小さじ2", staple: true },
      { name: "砂糖", amount: "小さじ1", staple: true },
      { name: "かつお節", amount: "1パック" },
    ],
    steps: [
      "豆腐を器にスプーンで大きく崩して入れる。",
      "すりごま・しょうゆ・酢・ごま油・砂糖を混ぜてたれを作る。",
      "豆腐にたれをかけ、かつお節をのせる。",
    ],
    tips: [
      "水切りは不要。むしろ水分がたれと混ざって全体になじみます。",
      "きゅうりやトマトを足すとボリュームのある主菜級のサラダになります。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "tonyu-tantan-soup",
    title: "豆乳担々スープ",
    description:
      "ひき肉を炒めて豆乳を注ぐだけ。器の中で完結するのに満足度が高く、これ一杯で主菜を兼ねられます。",
    minutes: 8,
    servings: 2,
    category: "スープ・汁物",
    method: "鍋",
    kcal: 280,
    cost: 150,
    tags: ["10分以内", "高たんぱく", "ごちそう感"],
    ingredients: [
      { name: "豚ひき肉", amount: "100g" },
      { name: "無調整豆乳", amount: "300ml" },
      { name: "水", amount: "150ml", staple: true },
      { name: "すりごま", amount: "大さじ2", staple: true },
      { name: "味噌", amount: "大さじ1", staple: true },
      { name: "鶏がらスープの素", amount: "小さじ1", staple: true },
      { name: "おろしにんにく", amount: "小さじ1/2", staple: true },
      { name: "ごま油", amount: "小さじ1", staple: true },
      { name: "ラー油・小ねぎ（お好みで）", amount: "適量" },
    ],
    steps: [
      "鍋にごま油とにんにくを入れて弱火で温め、香りが立ったらひき肉を加えて中火で炒める。",
      "肉の色が変わったら水と鶏がらスープの素を加え、ひと煮立ちさせる。",
      "火を弱め、豆乳・すりごま・味噌を加えて混ぜ、沸騰させないように温める。",
      "器に注ぎ、ラー油と小ねぎをかける。",
    ],
    tips: [
      "豆乳は沸騰させると分離してざらつきます。鍋肌に細かい泡が出る程度（80℃前後）で火を止めてください。",
      "味噌は最後に加えるのが香りを残すコツ。煮立てると風味が飛びます。",
      "辛さはラー油の後がけで調整すれば、子どもと大人で同じ鍋を分け合えます。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "renji-corn-potage",
    title: "レンジでコーンポタージュ",
    description:
      "缶詰と牛乳をマグカップで混ぜてチンするだけ。ミキサーも鍋も使わず5分、朝の一杯に。",
    minutes: 5,
    servings: 2,
    category: "スープ・汁物",
    method: "レンジ",
    kcal: 160,
    cost: 90,
    tags: ["10分以内", "洗い物少ない", "朝食", "缶詰"],
    ingredients: [
      { name: "クリームコーン缶", amount: "1缶(190g)" },
      { name: "牛乳", amount: "200ml" },
      { name: "コンソメ顆粒", amount: "小さじ1", staple: true },
      { name: "バター", amount: "5g", staple: true },
      { name: "塩・こしょう", amount: "少々", staple: true },
      { name: "乾燥パセリ（お好みで）", amount: "少々" },
    ],
    steps: [
      "耐熱容器にクリームコーン缶とコンソメを入れてよく混ぜる。",
      "牛乳を少しずつ加えながら、ダマにならないよう溶きのばす。",
      "ラップをせず600Wで3分加熱する。",
      "取り出してバターを溶かし混ぜ、塩・こしょうで味を調える。パセリを散らす。",
    ],
    tips: [
      "牛乳を一度に入れると缶の中身が固まりのまま残ります。最初は少量でペースト状にのばしてから残りを加えてください。",
      "ラップをすると吹きこぼれます。深めの容器で、ラップなしが正解です。",
      "粒コーン缶しかない場合は、加熱後にフォークで潰すと近い口当たりになります。",
    ],
    handsOff: 3,
    updatedAt: "2026-08-11",
  },
  {
    id: "gudakusan-tonjiru",
    title: "カット野菜で具だくさん豚汁",
    description:
      "根菜のカット野菜を使えば、皮むきゼロで13分。作った翌日のほうが味がなじむので、多めに作る前提の一品です。",
    minutes: 13,
    servings: 4,
    category: "スープ・汁物",
    method: "鍋",
    kcal: 190,
    cost: 130,
    tags: ["作り置き", "野菜たっぷり", "包丁なし", "節約"],
    ingredients: [
      { name: "豚こま切れ肉", amount: "150g" },
      { name: "豚汁用カット野菜", amount: "1袋(300g)" },
      { name: "水", amount: "700ml", staple: true },
      { name: "顆粒だし", amount: "小さじ2", staple: true },
      { name: "味噌", amount: "大さじ3", staple: true },
      { name: "ごま油", amount: "大さじ1", staple: true },
      { name: "小ねぎ・七味（お好みで）", amount: "適量" },
    ],
    steps: [
      "鍋にごま油を熱し、豚肉を中火で炒める。",
      "肉の色が変わったらカット野菜を加え、全体に油がまわるまで1分炒める。",
      "水と顆粒だしを加え、沸騰したらアクを取って8分煮る。",
      "火を弱め、味噌を溶き入れて火を止める。",
    ],
    tips: [
      "最初に油で炒めるのを省かないこと。根菜の甘みが出て、煮る時間が短くても薄っぺらい味になりません。",
      "味噌を入れてからは煮立てないでください。香りが飛んで塩気だけが立ちます。",
      "冷蔵で3日。温め直すときも沸騰させず、味噌の香りを残すのがおすすめです。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "toaster-yaki-banana",
    title: "トースターで焼きバナナ",
    description:
      "切ってのせて焼くだけ。砂糖を足さなくてもバナナ自身の糖が濃くなり、罪悪感の少ないデザートになります。",
    minutes: 8,
    servings: 1,
    category: "デザート",
    method: "トースター",
    kcal: 150,
    cost: 60,
    tags: ["おやつ", "洗い物少ない", "ひとり分", "砂糖控えめ"],
    ingredients: [
      { name: "バナナ", amount: "1本" },
      { name: "バター", amount: "5g", staple: true },
      { name: "シナモンパウダー（お好みで）", amount: "少々" },
      { name: "はちみつ（お好みで）", amount: "小さじ1" },
    ],
    steps: [
      "バナナを縦半分に切り、アルミホイルにのせる。",
      "切り口にバターを小さくちぎってのせる。",
      "トースター1000Wで6分、縁が色づくまで焼く。",
      "好みでシナモンとはちみつをかける。",
    ],
    tips: [
      "焼くとバナナのでんぷんが糖に変わり、甘みがはっきり増します。追加の砂糖はまず不要です。",
      "アルミホイルは縁を立てて器状にすること。溶けた汁が流れ出て天板が焦げるのを防げます。",
      "熟れすぎたバナナの救済にも向いています。黒い斑点が出たものほど甘く仕上がります。",
    ],
    handsOff: 6,
    updatedAt: "2026-08-11",
  },
  {
    id: "yogurt-tiramisu",
    title: "混ぜるだけヨーグルトティラミス",
    description:
      "水切り不要、加熱なし。ヨーグルトとクリームチーズを混ぜて重ねるだけで、5分でグラスデザートになります。",
    minutes: 5,
    servings: 2,
    category: "デザート",
    method: "混ぜるだけ",
    kcal: 220,
    cost: 130,
    tags: ["火を使わない", "10分以内", "おやつ", "ごちそう感"],
    ingredients: [
      { name: "ギリシャヨーグルト", amount: "200g" },
      { name: "クリームチーズ", amount: "50g" },
      { name: "砂糖", amount: "大さじ2", staple: true },
      { name: "ビスケット", amount: "6枚" },
      { name: "インスタントコーヒー", amount: "小さじ2", staple: true },
      { name: "湯", amount: "大さじ3", staple: true },
      { name: "ココアパウダー", amount: "適量" },
    ],
    steps: [
      "クリームチーズを室温に戻し（または600Wで20秒）、砂糖とヨーグルトを加えてなめらかになるまで混ぜる。",
      "湯にインスタントコーヒーを溶かし、コーヒー液を作る。",
      "ビスケットをコーヒー液にさっとくぐらせ、グラスの底に敷く。",
      "クリームを重ね、ビスケットとクリームをもう一段重ねる。",
      "仕上げに茶こしでココアパウダーをふる。",
    ],
    tips: [
      "ビスケットは「さっとくぐらせる」だけ。浸しすぎると崩れて層になりません。1秒で十分です。",
      "ギリシャヨーグルトを使うのは水切りの手間を省くため。普通のヨーグルトなら大さじ2程度の水分が出るので、量を減らすか一晩水切りしてください。",
      "すぐ食べられますが、冷蔵庫で30分置くとビスケットがなじんでケーキらしい食感になります。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "renji-apple-compote",
    title: "レンジでりんごのコンポート",
    description:
      "切ってチンするだけ。ヨーグルトやトーストに添えられて、冷蔵で4日もつ常備デザートです。",
    minutes: 8,
    servings: 3,
    category: "デザート",
    method: "レンジ",
    kcal: 110,
    cost: 80,
    tags: ["作り置き", "洗い物少ない", "おやつ", "砂糖控えめ"],
    ingredients: [
      { name: "りんご", amount: "1個" },
      { name: "砂糖", amount: "大さじ2", staple: true },
      { name: "レモン汁", amount: "小さじ2", staple: true },
      { name: "バター（お好みで）", amount: "5g", staple: true },
    ],
    steps: [
      "りんごを8等分のくし形に切り、さらに1cm厚のいちょう切りにする（皮はお好みで残す）。",
      "耐熱ボウルに入れ、砂糖とレモン汁を全体にまぶす。",
      "ふんわりラップをして600Wで5分加熱する。",
      "取り出して全体を混ぜ、好みでバターを加えて余熱で溶かす。粗熱がとれたら冷蔵庫へ。",
    ],
    tips: [
      "レモン汁は変色防止だけでなく、甘さを締める役割もあります。省くと味がぼやけます。",
      "皮を残すと色がほんのり赤く染まり、見た目がよくなります。食感が気になる場合だけむいてください。",
      "加熱直後よりも、冷めていく過程で味が入ります。すぐ食べずに冷ますのがおすすめです。",
    ],
    handsOff: 5,
    updatedAt: "2026-08-11",
  },
  {
    id: "toaster-chicken-mayo-panko",
    title: "トースターでチキンのマヨパン粉焼き",
    description:
      "揚げないのに衣はサクサク。並べて焼くだけで、焼いている10分は完全に手が空きます。",
    minutes: 15,
    servings: 2,
    category: "主菜",
    method: "トースター",
    kcal: 380,
    cost: 180,
    tags: ["ほったらかし", "高たんぱく", "ごちそう感", "お弁当"],
    ingredients: [
      { name: "鶏むね肉または鶏もも肉", amount: "1枚(300g)" },
      { name: "マヨネーズ", amount: "大さじ2", staple: true },
      { name: "パン粉", amount: "大さじ4", staple: true },
      { name: "粉チーズ", amount: "大さじ1" },
      { name: "おろしにんにく", amount: "小さじ1/2", staple: true },
      { name: "塩・こしょう", amount: "少々", staple: true },
      { name: "乾燥パセリ（お好みで）", amount: "少々" },
    ],
    steps: [
      "鶏肉を2cm厚のそぎ切りにし、塩・こしょうをふる。",
      "マヨネーズとにんにくを絡める。",
      "パン粉と粉チーズを混ぜ、鶏肉の表面に押しつけるようにまぶす。",
      "アルミホイルを敷いた天板に並べ、トースター1000Wで10〜12分焼く。",
      "焦げそうならアルミホイルを軽くかぶせる。パセリを散らす。",
    ],
    tips: [
      "マヨネーズが油と衣の接着剤を兼ねます。卵と小麦粉の工程を丸ごと省けるのがこのレシピの要点です。",
      "パン粉は「まぶす」より「押しつける」。密着していないと焼いている間に落ちます。",
      "厚みは2cmまで。それより厚いと表面が焦げても中が生のままになります。",
    ],
    handsOff: 11,
    updatedAt: "2026-08-11",
  },
  {
    id: "suihanki-khao-man-gai",
    title: "炊飯器でカオマンガイ",
    description:
      "米と鶏肉を一緒に炊くだけ。仕込み8分で、鶏の旨みを吸ったごはんと蒸し鶏が同時に出来上がります。",
    minutes: 8,
    servings: 3,
    category: "ごはん・丼",
    method: "炊飯器",
    kcal: 520,
    cost: 190,
    tags: ["ほったらかし", "仕込み5分", "高たんぱく", "ごちそう感"],
    ingredients: [
      { name: "米", amount: "2合" },
      { name: "鶏もも肉", amount: "1枚(300g)" },
      { name: "鶏がらスープの素", amount: "大さじ1", staple: true },
      { name: "酒", amount: "大さじ1", staple: true },
      { name: "おろししょうが", amount: "小さじ1", staple: true },
      { name: "しょうゆ", amount: "大さじ2", staple: true },
      { name: "砂糖", amount: "小さじ2", staple: true },
      { name: "酢", amount: "小さじ2", staple: true },
      { name: "ごま油", amount: "小さじ1", staple: true },
      { name: "きゅうり・トマト（お好みで）", amount: "適量" },
    ],
    steps: [
      "米を研いで内釜に入れ、2合の目盛りまで水を注ぐ。",
      "鶏がらスープの素・酒・しょうがを加えて軽く混ぜる。",
      "鶏肉を皮目を上にして米の上にのせ、通常モードで炊飯する。",
      "炊き上がったら鶏肉を取り出して食べやすく切り、ごはんを混ぜる。",
      "しょうゆ・砂糖・酢・ごま油を混ぜてタレを作り、盛りつけて添える。",
    ],
    tips: [
      "水加減は「米だけ」で合わせること。鶏肉から出る肉汁の分まで見込むと水っぽくなります。",
      "鶏肉は米に沈めず上にのせるのが大事。沈めると加熱ムラが出て芯が残ることがあります。",
      "内釜の最大調理量を必ず守り、機種が調理に対応しているか取扱説明書を確認してください。",
    ],
    handsOff: 50,
    updatedAt: "2026-08-11",
  },
  {
    id: "suihanki-kakuni",
    title: "炊飯器でとろとろ豚角煮風",
    description:
      "本来2時間かかる角煮を、炊飯器の保温力に任せて仕込み8分に。休日の朝に仕込んで昼に食べる想定です。",
    minutes: 8,
    servings: 4,
    category: "主菜",
    method: "炊飯器",
    kcal: 450,
    cost: 220,
    tags: ["ほったらかし", "仕込み5分", "作り置き", "ごちそう感"],
    ingredients: [
      { name: "豚バラブロック肉", amount: "500g" },
      { name: "長ねぎの青い部分", amount: "1本分" },
      { name: "しょうゆ", amount: "大さじ4", staple: true },
      { name: "みりん", amount: "大さじ4", staple: true },
      { name: "酒", amount: "大さじ3", staple: true },
      { name: "砂糖", amount: "大さじ2", staple: true },
      { name: "水", amount: "200ml", staple: true },
      { name: "おろししょうが", amount: "小さじ2", staple: true },
      { name: "ゆで卵（お好みで）", amount: "2個" },
    ],
    steps: [
      "豚バラブロックを3cm幅に切る。",
      "内釜に肉と長ねぎ、調味料と水をすべて入れる。",
      "通常の炊飯モードで加熱する。",
      "炊き上がったらそのまま保温で30分置き、味を含ませる。",
      "ゆで卵を加える場合は、保温に入れるタイミングで一緒に沈める。",
    ],
    tips: [
      "炊飯後の保温30分が肝心です。加熱そのものより、この余熱の時間で肉がほぐれ、味が芯まで入ります。",
      "脂が気になる場合は、粗熱をとって冷蔵庫で冷やすと白い脂が固まるので、すくって取り除けます。",
      "内釜の最大調理量を必ず守ってください。脂が多い食材なので、吹きこぼれには特に注意が必要です。機種によっては調理不可です。",
    ],
    handsOff: 80,
    updatedAt: "2026-08-11",
  },
  {
    id: "tuna-shiso-cold-pasta",
    title: "ツナと大葉の冷製パスタ",
    description:
      "茹でて冷やして和えるだけ。火を使うのは麺を茹でる間だけで、夏場でも台所に立つ時間が短く済みます。",
    minutes: 12,
    servings: 1,
    category: "麺・パスタ",
    method: "鍋",
    kcal: 520,
    cost: 170,
    tags: ["ひとり分", "10分台", "缶詰", "夏向け"],
    ingredients: [
      { name: "スパゲッティ(1.4mm)", amount: "100g" },
      { name: "ツナ缶（オイル漬け）", amount: "1缶(70g)" },
      { name: "大葉", amount: "5枚" },
      { name: "ミニトマト", amount: "5個" },
      { name: "めんつゆ(3倍濃縮)", amount: "大さじ1.5", staple: true },
      { name: "オリーブオイル", amount: "大さじ1", staple: true },
      { name: "レモン汁", amount: "小さじ1", staple: true },
      { name: "黒こしょう", amount: "少々", staple: true },
    ],
    steps: [
      "湯を沸かし、塩を加えてパスタを表示時間より1分長く茹でる。",
      "茹でている間に、大葉を千切り、ミニトマトを半分に切る。ボウルにツナ（オイルごと）・めんつゆ・オリーブオイル・レモン汁を混ぜておく。",
      "茹で上がったパスタをザルにあけ、流水でしっかり冷やして水気をよく切る。",
      "ボウルに加えて和え、大葉とトマトを混ぜる。黒こしょうをふる。",
    ],
    tips: [
      "冷製は「表示時間より1分長く」。冷えると麺が締まって硬く感じるため、温かい状態では少し柔らかいくらいが正解です。",
      "水気を切るのが最重要。残っているとソースが薄まって味がぼやけます。ザルで振ってから軽く押さえてください。",
      "ツナのオイルは旨みなので捨てずに使います。ノンオイル缶を使う場合はオリーブオイルを大さじ1追加してください。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "kamatama-butter-udon",
    title: "釜玉バターうどん",
    description:
      "冷凍うどんを茹でて絡めるだけの5分。夜食にも、料理をする気力がない日の夕食にもなります。",
    minutes: 5,
    servings: 1,
    category: "麺・パスタ",
    method: "鍋",
    kcal: 480,
    cost: 110,
    tags: ["10分以内", "ひとり分", "夜食", "節約", "冷凍食品アレンジ"],
    ingredients: [
      { name: "冷凍うどん", amount: "1玉" },
      { name: "卵", amount: "1個" },
      { name: "バター", amount: "10g", staple: true },
      { name: "めんつゆ(3倍濃縮)", amount: "大さじ1", staple: true },
      { name: "小ねぎ・黒こしょう", amount: "適量" },
    ],
    steps: [
      "冷凍うどんを袋の表示どおりに茹でる（または加熱する）。",
      "湯を切って熱いうちに器に移し、バターを加えて溶かしながら混ぜる。",
      "卵を割り入れ、めんつゆを回しかけて手早く混ぜる。",
      "小ねぎと黒こしょうをかける。",
    ],
    tips: [
      "うどんは湯切り後すぐに和えること。温度が下がると卵が絡まず、バターも溶け残ります。",
      "生卵が苦手な場合は、卵黄だけにするか、温泉卵に替えても成立します。",
      "めんつゆの量は麺の水気で変わります。まず大さじ1で混ぜ、薄ければ足してください。",
    ],
    updatedAt: "2026-08-11",
  },
  {
    id: "shiokombu-tuna-cabbage",
    title: "塩昆布とツナのやみつきキャベツ",
    description:
      "ちぎって混ぜるだけの3分。包丁も火も使わず、あと一品ほしいときの隙間を確実に埋めます。",
    minutes: 3,
    servings: 2,
    category: "副菜",
    method: "混ぜるだけ",
    kcal: 130,
    cost: 70,
    tags: ["火を使わない", "10分以内", "包丁なし", "缶詰", "低糖質"],
    ingredients: [
      { name: "キャベツ", amount: "1/4個(250g)" },
      { name: "ツナ缶", amount: "1缶(70g)" },
      { name: "塩昆布", amount: "大さじ2" },
      { name: "ごま油", amount: "大さじ1", staple: true },
      { name: "白ごま", amount: "小さじ1", staple: true },
      { name: "レモン汁（お好みで）", amount: "小さじ1", staple: true },
    ],
    steps: [
      "キャベツを手で一口大にちぎり、ポリ袋かボウルに入れる。",
      "ツナ（オイルごと）・塩昆布・ごま油を加える。",
      "全体をよく混ぜ、1分ほどなじませる。白ごまとレモン汁を加える。",
    ],
    tips: [
      "包丁で切るより手でちぎるほうが断面が粗くなり、調味料の絡みがよくなります。",
      "塩昆布が塩とだしを兼ねているので、他の調味料は不要です。味が薄ければ足すのは塩ではなく塩昆布を。",
      "時間が経つと水が出ます。作り置きには向かないので、食べる直前に和えてください。",
    ],
    updatedAt: "2026-08-11",
  },
];

export function getAllRecipes(): Recipe[] {
  return recipes;
}

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

export function getAllTags(): { tag: string; count: number }[] {
  const map = new Map<string, number>();
  for (const r of recipes) {
    for (const t of r.tags) map.set(t, (map.get(t) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, "ja"));
}

export function getAllCategories(): { category: string; count: number }[] {
  const map = new Map<string, number>();
  for (const r of recipes) map.set(r.category, (map.get(r.category) ?? 0) + 1);
  return [...map.entries()].map(([category, count]) => ({ category, count }));
}

export type SearchParams = {
  q?: string;
  category?: string;
  method?: string;
  tag?: string;
  /** 上限（分） */
  maxMinutes?: number;
  sort?: "time" | "kcal" | "cost";
};

export function searchRecipes(params: SearchParams): Recipe[] {
  const q = params.q?.trim().toLowerCase();
  let out = recipes.filter((r) => {
    if (params.category && r.category !== params.category) return false;
    if (params.method && r.method !== params.method) return false;
    if (params.tag && !r.tags.includes(params.tag)) return false;
    if (params.maxMinutes && r.minutes > params.maxMinutes) return false;
    if (q) {
      const haystack = [
        r.title,
        r.description,
        r.category,
        r.method,
        ...r.tags,
        ...r.ingredients.map((i) => i.name),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  const sort = params.sort ?? "time";
  out = [...out].sort((a, b) => {
    if (sort === "kcal") return a.kcal - b.kcal;
    if (sort === "cost") return a.cost - b.cost;
    return a.minutes - b.minutes;
  });
  return out;
}

/** 詳細ページの関連レシピ（同カテゴリ→同調理法→タグ一致の順で寄せる） */
export function getRelated(recipe: Recipe, limit = 4): Recipe[] {
  const scored = recipes
    .filter((r) => r.id !== recipe.id)
    .map((r) => {
      let score = 0;
      if (r.category === recipe.category) score += 3;
      if (r.method === recipe.method) score += 2;
      score += r.tags.filter((t) => recipe.tags.includes(t)).length;
      return { r, score };
    })
    .sort((a, b) => b.score - a.score || a.r.minutes - b.r.minutes);
  return scored.slice(0, limit).map((s) => s.r);
}
