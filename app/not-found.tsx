import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function NotFound() {
  return (
    <div className="space-y-6 py-8">
      <h1 className="text-2xl font-bold">ページが見つかりませんでした</h1>
      <p style={{ color: "var(--muted)" }}>
        URLが変更されたか、削除された可能性があります。材料名で探し直してみてください。
      </p>
      <SearchBar />
      <Link href="/" className="inline-block hover:underline" style={{ color: "var(--accent)" }}>
        ← トップページへ戻る
      </Link>
    </div>
  );
}
