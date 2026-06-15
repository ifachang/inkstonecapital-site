import type { Metadata } from "next";
import { ContactSection, NewsSection } from "../../components/Sections";
import { PageLead, SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "最新消息與媒體報導",
  description:
    "瀏覽墨石資本最新消息與媒體報導，掌握公司相關公開新聞、品牌動態與產業觀點。",
  alternates: {
    canonical: "/news/",
    languages: {
      "zh-Hant": "/news/",
      en: "/en/news/",
    },
  },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <SiteHeader currentPath="/news/" />
      <PageLead
        eyebrow="News"
        title="最新消息與媒體報導"
        highlights={[]}
      />
      <NewsSection />
      <ContactSection />
    </main>
  );
}
