import Link from "next/link";
import { CATEGORIES, METHODS, TIME_FILTERS } from "@/lib/site";

type Current = {
  q?: string;
  category?: string;
  method?: string;
  tag?: string;
  maxMinutes?: number;
  sort?: string;
};

/** 現在の絞り込みを保ったままキーを1つだけ差し替えたURLを作る（同じ値なら解除） */
function buildHref(current: Current, key: keyof Current, value: string) {
  const params = new URLSearchParams();
  const next: Record<string, string | undefined> = {
    q: current.q,
    category: current.category,
    method: current.method,
    tag: current.tag,
    maxMinutes: current.maxMinutes ? String(current.maxMinutes) : undefined,
    sort: current.sort,
  };
  next[key] = next[key] === value ? undefined : value;
  for (const [k, v] of Object.entries(next)) {
    if (v) params.set(k, v);
  }
  const qs = params.toString();
  return qs ? `/search?${qs}` : "/search";
}

function Chip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className="rounded-full border px-3 py-1 text-sm transition-colors"
      style={{
        borderColor: active ? "var(--accent)" : "var(--line)",
        background: active ? "var(--accent)" : "transparent",
        color: active ? "#fff" : "inherit",
      }}
    >
      {children}
    </Link>
  );
}

export default function FilterBar({ current }: { current: Current }) {
  const groups: { label: string; key: keyof Current; items: { label: string; value: string }[] }[] =
    [
      {
        label: "調理時間",
        key: "maxMinutes",
        items: TIME_FILTERS.map((t) => ({ label: t.label, value: String(t.value) })),
      },
      {
        label: "調理器具",
        key: "method",
        items: METHODS.map((m) => ({ label: m, value: m })),
      },
      {
        label: "カテゴリ",
        key: "category",
        items: CATEGORIES.map((c) => ({ label: c, value: c })),
      },
      {
        label: "並び替え",
        key: "sort",
        items: [
          { label: "時間が短い順", value: "time" },
          { label: "カロリーが低い順", value: "kcal" },
          { label: "安い順", value: "cost" },
        ],
      },
    ];

  return (
    <div className="no-print space-y-3">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-wrap items-center gap-2">
          <span className="w-20 shrink-0 text-xs font-bold" style={{ color: "var(--muted)" }}>
            {g.label}
          </span>
          {g.items.map((item) => {
            const currentValue =
              g.key === "maxMinutes"
                ? current.maxMinutes
                  ? String(current.maxMinutes)
                  : undefined
                : (current[g.key] as string | undefined);
            const active =
              currentValue === item.value ||
              (g.key === "sort" && !current.sort && item.value === "time");
            return (
              <Chip key={item.value} href={buildHref(current, g.key, item.value)} active={active}>
                {item.label}
              </Chip>
            );
          })}
        </div>
      ))}

      {current.tag && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 shrink-0 text-xs font-bold" style={{ color: "var(--muted)" }}>
            タグ
          </span>
          <Chip href={buildHref(current, "tag", current.tag)} active>
            #{current.tag} ✕
          </Chip>
        </div>
      )}
    </div>
  );
}
