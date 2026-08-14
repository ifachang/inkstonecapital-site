import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "../../../components/Sections";
import { SiteHeader } from "../../../components/SiteHeader";
import { JsonLd, organizationJsonLd, siteName, siteUrl } from "../../../lib/seo";

const pagePath = "/news/hong-kong-mid-levels-chan-wing-sun-visit/";
const pageTitle = "墨石資本到訪 Hanten 與 YGM 主席陳永燊香港半山別墅";
const pageDescription =
  "墨石資本團隊到訪 Hanten 與 YGM 主席陳永燊位於香港半山的別墅，從半山老宅、城市夜景與維港視角，記錄香港商業文化與城市記憶。";
const pageImage = "/hong-kong-mid-levels-chan-wing-sun-visit.jpg";

const notes = [
  "今日到訪 Hanten 與 YGM 主席陳永燊位於香港半山的別墅。",
  "站在半山，望向香港城市與維港景色，會突然理解香港電影裡那些熟悉場景從何而來。半山、老宅、城市夜景，繁華就在山下，安靜卻留在山上。",
  "對墨石資本而言，香港不只是國際金融中心，也是一座由產業家、家族企業、資本市場與城市文化共同構成的商業城市。許多真正的香港，不只在中環的高樓裡，也藏在半山的燈火之間。",
  "原來，電影裡的香港，真的存在。",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "article",
    url: `${siteUrl}${pagePath}`,
    siteName,
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    locale: "zh_TW",
    images: [
      {
        url: pageImage,
        alt: "Hanten 與 YGM 主席陳永燊與墨石資本代表於香港半山夜景前合影",
      },
    ],
    publishedTime: "2026-08-14",
    authors: ["Inkstone Capital"],
    section: "Hong Kong Visit",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    images: [pageImage],
  },
};

export default function HongKongMidLevelsChanWingSunVisitPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: pageDescription,
    datePublished: "2026-08-14",
    dateModified: "2026-08-14",
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}${pagePath}`,
    url: `${siteUrl}${pagePath}`,
    inLanguage: "zh-Hant",
    image: `${siteUrl}${pageImage}`,
    articleSection: "Hong Kong Visit",
    keywords: "Inkstone Capital, Hong Kong, Mid-Levels, Hanten, YGM, Chan Wing Sun, 陳永燊",
  };

  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("zh")} />
      <JsonLd data={articleJsonLd} />
      <SiteHeader currentPath="/news/" />
      <article className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#050506_0%,#101116_52%,#15161a_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <Link
            href="/news/"
            className="text-sm text-accent-gold transition hover:text-[#d3af67]"
          >
            ← 返回最新消息
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-accent-gold/35 bg-accent-gold/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-accent-gold">
              Hong Kong Visit
            </div>
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
              Mid-Levels / Victoria Harbour
            </div>
            <div className="text-xs text-stone-500">2026.08.14</div>
          </div>

          <h1 className="mt-5 max-w-4xl text-[2rem] font-semibold tracking-tight text-stone-50 sm:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-stone-300/92 sm:text-lg sm:leading-9">
            從香港半山望向城市與維港，記錄一次關於商業、城市記憶與香港文化氣質的拜訪。
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-stone-400 sm:text-base sm:leading-8">
            Hong Kong, just like in the movies.
          </p>

          <div className="mt-8 overflow-hidden border border-stone-light/25 bg-ink">
            <div className="relative min-h-[360px] p-6 sm:min-h-[460px] sm:p-8">
              <img
                src={pageImage}
                alt="Hanten 與 YGM 主席陳永燊與墨石資本代表於香港半山夜景前合影"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/58 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/18 to-transparent" />
              <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-end">
                <div className="max-w-xl">
                  <div className="text-[0.68rem] uppercase tracking-[0.2em] text-accent-gold">
                    Hong Kong / Mid-Levels
                  </div>
                  <p className="mt-4 text-2xl font-semibold leading-tight text-stone-50 sm:text-4xl">
                    有些香港，不是在中環的高樓裡，而是藏在半山的燈火之間。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="space-y-5">
              <section className="border border-stone-light/22 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                  Visit Note
                </div>
                <div className="mt-4 space-y-4 text-sm leading-8 text-stone-300/92 sm:text-base">
                  {notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </section>
            </div>

            <aside className="border border-stone-light/24 bg-white/[0.035] p-5">
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                Context
              </div>
              <div className="mt-4 space-y-4">
                {[
                  ["Location", "香港半山"],
                  ["Host", "Hanten 與 YGM 主席陳永燊"],
                  ["Theme", "香港商業文化與城市記憶"],
                  ["View", "城市與維港"],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-stone-light/15 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-[0.64rem] uppercase tracking-[0.16em] text-stone-500">
                      {label}
                    </div>
                    <div className="mt-2 text-sm font-medium leading-6 text-stone-100">{value}</div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </article>
      <ContactSection />
    </main>
  );
}
