import type { Metadata } from "next";
import {
  CompanyEcosystemSection,
  ContactSection,
  PortfolioSection,
} from "../../components/Sections";
import { PageLead, SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "相關公司",
  description:
    "了解墨石資本網站介紹的相關公司與品牌，包括 Yushan.AI、Docter Inc. 與大頭叔叔。",
  alternates: {
    canonical: "/companies/",
  },
};

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <SiteHeader currentPath="/companies/" />
      <PageLead
        eyebrow="Companies"
        title="相關公司"
        summaryLabel="Ecosystem"
        summaryTitle="以產業關聯呈現生態布局"
        summaryPoints={[
          "集中整理目前官網所揭露之相關公司與品牌節點。",
          "從技術、健康科技到消費品牌，對照不同市場方向與應用場景。",
          "協助訪客快速理解各項布局與墨石資本關注主題之連動關係。",
        ]}
        highlights={[]}
      />
      <PortfolioSection />
      <CompanyEcosystemSection />
      <ContactSection />
    </main>
  );
}
