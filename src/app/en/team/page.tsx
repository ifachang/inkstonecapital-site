import type { Metadata } from "next";
import Image from "next/image";
import {
  ContactSection,
  TeamOperatingSection,
  TeamSection,
} from "../../../components/Sections";
import { PageLead, SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Investment Team",
  description:
    "Meet Inkstone Capital's team and advisors across cross-border capital markets, technology investment, health technology and consumer sectors.",
  alternates: {
    canonical: "/en/team/",
    languages: {
      "zh-Hant": "/team/",
      en: "/en/team/",
    },
  },
};

export default function EnglishTeamPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <SiteHeader currentPath="/en/team/" locale="en" />
      <PageLead
        eyebrow="Team"
        title="Investment Team"
        summaryLabel="People"
        summaryTitle="Diverse backgrounds supporting decision-making and execution"
        summaryPoints={[
          "Coverage across capital markets, technology investment, health and consumer industries.",
          "Industry understanding and practical judgment for companies at different stages.",
          "Advisor and partner networks extending the team's professional perspective and resource access.",
        ]}
        highlights={[]}
        visual={
          <div className="overflow-hidden rounded-[1.2rem] border border-stone-light/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.24))] p-3 sm:rounded-[1.5rem] sm:p-4">
            <div className="relative overflow-hidden rounded-[1rem] border border-stone-light/14 bg-white/5 sm:rounded-[1.2rem]">
              <div className="absolute left-3 top-3 z-10 rounded-full border border-black/10 bg-white/78 px-3 py-1 text-[0.58rem] uppercase tracking-[0.16em] text-slate-700 backdrop-blur-sm sm:left-4 sm:top-4 sm:text-[0.62rem]">
                Team Collaboration
              </div>
              <Image
                src="/team-boardroom-photo.png"
                alt="Professional investment team meeting in a bright conference room"
                width={1693}
                height={929}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
              <div className="border-t border-stone-light/12 bg-white/70 px-4 py-3 text-[0.78rem] leading-relaxed text-slate-700 backdrop-blur-sm sm:px-5 sm:text-[0.82rem]">
                A professional setting for strategy discussion, industry judgment and cross-disciplinary collaboration.
              </div>
            </div>
          </div>
        }
      />
      <TeamSection locale="en" />
      <TeamOperatingSection locale="en" />
      <ContactSection locale="en" />
    </main>
  );
}
