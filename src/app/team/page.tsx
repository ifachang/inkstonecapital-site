import type { Metadata } from "next";
import { ContactSection, TeamSection } from "../../components/Sections";
import { PageLead, SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "投資團隊",
  description:
    "查看墨石資本核心團隊與顧問成員介紹，了解跨境資本市場、科技投資與醫美健康產業背景。",
  alternates: {
    canonical: "/team/",
  },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <SiteHeader currentPath="/team/" />
      <PageLead
        eyebrow="Team"
        title="投資團隊"
        description="本頁集中呈現墨石資本核心團隊與顧問成員之專業背景，便於完整說明各成員在資本市場、產業發展與跨境合作領域的專業經驗與角色定位。"
        summaryLabel="People"
        summaryTitle="以多元背景支撐決策與執行"
        summaryPoints={[
          "涵蓋資本市場、科技投資、醫美健康與跨界整合經驗。",
          "結合產業理解與實務判斷，支援不同階段之企業需求。",
          "透過顧問與合作網絡延伸團隊的專業視角與資源連結。",
        ]}
        highlights={[
          { label: "Core Team", value: "投資與顧問成員整合" },
          { label: "Industry Range", value: "科技、健康、消費品牌" },
          { label: "Experience", value: "跨境與產業協作視野" },
        ]}
      />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
