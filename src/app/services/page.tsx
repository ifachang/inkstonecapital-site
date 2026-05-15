import type { Metadata } from "next";
import { ContactSection, StrategySection } from "../../components/Sections";
import { PageLead, SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "服務與策略",
  description:
    "了解墨石資本的核心服務，包括併購與重組顧問、私募融資與過橋融資，以及上市與資本市場規劃。",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <SiteHeader currentPath="/services/" />
      <PageLead
        eyebrow="Services"
        title="服務與策略"
        description="本頁集中整理墨石資本核心服務與策略方向，涵蓋交易架構、資本規劃與企業成長所需之整體顧問支持。"
        summaryLabel="Advisory"
        summaryTitle="以交易架構與資本規劃為核心"
        summaryPoints={[
          "聚焦企業成長關鍵節點所需之策略與執行支持。",
          "兼顧交易結構、融資安排與市場定位之整體協調。",
          "協助企業建立更具延展性的資本市場路徑。",
        ]}
        highlights={[
          { label: "3 Focus Areas", value: "併購、融資、資本市場" },
          { label: "Execution", value: "策略與落地同步推進" },
          { label: "Cross-Border", value: "跨境結構整合能力" },
        ]}
      />
      <StrategySection />
      <ContactSection />
    </main>
  );
}
