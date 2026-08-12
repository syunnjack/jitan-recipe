import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";

// Measurement ID for the GA4 property "jitan-recipe (https://jitan-recipe.vercel.app)" (549625527).
const gaMeasurementId = "G-DVN33XWXVD";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | 10分で作れる時短レシピを調理時間と器具から探す`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  verification: {
    // Google Search Console のサイト所有権確認（削除すると確認が外れる）
    google: "rXC-95Nht0TXH4SKWRGhBgzAyFyerQdVgHfPj6MUhUY",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "ja",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="ja">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header
          className="no-print border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="text-lg font-bold tracking-tight">
              🍳 {site.name}
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/search?maxMinutes=10" className="hover:underline">
                10分以内
              </Link>
              <Link href="/search?method=レンジ" className="hover:underline">
                レンジ
              </Link>
              <Link href="/search" className="hover:underline">
                すべて
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>

        <footer
          className="no-print mt-16 border-t"
          style={{ borderColor: "var(--line)" }}
        >
          <div
            className="mx-auto max-w-4xl px-4 py-8 text-sm"
            style={{ color: "var(--muted)" }}
          >
            <p>
              掲載しているカロリー・金額は一般的な材料からの概算です。実際の値は使用する商品により異なります。
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </footer>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
        </Script>
      </body>
    </html>
  );
}
