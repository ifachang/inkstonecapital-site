import type { Metadata } from "next";
import Image from "next/image";
import {
  ContactSection,
  TeamOperatingSection,
  TeamSection,
} from "../../components/Sections";
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
        visual={
          <div className="overflow-hidden rounded-[1.2rem] border border-stone-light/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.24))] p-3 sm:rounded-[1.5rem] sm:p-4">
            <div className="relative overflow-hidden rounded-[1rem] border border-stone-light/14 bg-white/5 sm:rounded-[1.2rem]">
              <div className="absolute left-3 top-3 z-10 rounded-full border border-black/10 bg-white/78 px-3 py-1 text-[0.58rem] uppercase tracking-[0.16em] text-slate-700 backdrop-blur-sm sm:left-4 sm:top-4 sm:text-[0.62rem]">
                Team Collaboration
              </div>
              <Image
                src="/team-meeting-illustration.svg"
                alt="Illustration of a professional team meeting in a bright conference room"
                width={1200}
                height={800}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
              <div className="border-t border-stone-light/12 bg-white/70 px-4 py-3 text-[0.78rem] leading-relaxed text-slate-700 backdrop-blur-sm sm:px-5 sm:text-[0.82rem]">
                以專業會議場景呈現團隊在策略研議、產業判斷與跨域協作中的工作情境。
              </div>
            </div>
          </div>
        }
      />
      <TeamSection />
      <TeamOperatingSection />
      <ContactSection />
    </main>
  );
}
