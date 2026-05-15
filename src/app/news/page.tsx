import type { Metadata } from "next";
import { ContactSection, NewsSection } from "../../components/Sections";
import { PageLead, SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "最新消息與媒體報導",
  description:
    "瀏覽墨石資本最新消息與媒體報導，掌握公司相關公開新聞、品牌動態與產業觀點。",
  alternates: {
    canonical: "/news/",
  },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <SiteHeader currentPath="/news/" />
      <PageLead
        eyebrow="News"
        title="最新消息與媒體報導"
        description="本頁彙整墨石資本相關公開新聞、媒體報導與團隊動態，便於集中掌握品牌近期資訊與外部關注焦點。"
        summaryLabel="Updates"
        summaryTitle="以重點脈絡整理公開資訊"
        summaryPoints={[
          "集中呈現與墨石資本相關之公開新聞、活動與媒體內容。",
          "保留摘要導覽與外部連結，方便快速掌握近期訊息。",
          "讓品牌動態與對外曝光內容維持清楚、可持續擴充的閱讀節奏。",
        ]}
        highlights={[
          { label: "Coverage", value: "公開媒體與外部報導" },
          { label: "Highlights", value: "品牌動態與團隊訊息" },
          { label: "Archive", value: "持續擴充的內容索引" },
        ]}
      />
      <NewsSection />
      <ContactSection />
    </main>
  );
}
