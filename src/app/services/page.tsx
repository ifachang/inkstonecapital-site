import type { Metadata } from "next";
import {
  ContactSection,
  ServiceProcessSection,
  StrategySection,
} from "../../components/Sections";
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
        summaryLabel="Advisory"
        summaryTitle="以交易架構與資本規劃為核心"
        summaryPoints={[
          "聚焦企業成長關鍵節點所需之策略與執行支持。",
          "兼顧交易結構、融資安排與市場定位之整體協調。",
          "協助企業建立更具延展性的資本市場路徑。",
        ]}
        highlights={[]}
        visual={
          <div className="overflow-hidden rounded-[1.2rem] border border-stone-light/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.24))] p-4 sm:rounded-[1.5rem] sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[0.62rem] uppercase tracking-[0.16em] text-stone-500 sm:text-[0.64rem] sm:tracking-[0.18em]">
                  Capital Flow
                </div>
                <div className="mt-2 text-sm font-medium text-stone-100 sm:text-base">
                  跨境結構與成長路徑示意
                </div>
              </div>
              <div className="rounded-full border border-accent-gold/30 bg-accent-gold/10 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.15em] text-accent-gold sm:px-3 sm:text-[0.62rem]">
                Visual
              </div>
            </div>
            <svg viewBox="0 0 360 220" aria-hidden="true" className="h-auto w-full">
              <defs>
                <linearGradient id="serviceFlow" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(196,161,90,0.95)" />
                  <stop offset="100%" stopColor="rgba(244,237,216,0.9)" />
                </linearGradient>
                <linearGradient id="serviceBars" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(196,161,90,0.95)" />
                  <stop offset="100%" stopColor="rgba(196,161,90,0.25)" />
                </linearGradient>
              </defs>
              <rect x="18" y="24" width="324" height="172" rx="22" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
              <path
                d="M54 148C92 131 117 83 153 83C195 83 204 124 239 124C273 124 286 85 322 71"
                fill="none"
                stroke="url(#serviceFlow)"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M54 160C88 146 121 123 153 123C191 123 207 148 239 148C272 148 289 131 322 117"
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeDasharray="6 8"
              />
              {[
                { x: 54, y: 148, label: "Assess" },
                { x: 153, y: 83, label: "Structure" },
                { x: 239, y: 124, label: "Execute" },
                { x: 322, y: 71, label: "Expand" },
              ].map((point) => (
                <g key={point.label}>
                  <circle cx={point.x} cy={point.y} r="8" fill="#c4a15a" />
                  <circle cx={point.x} cy={point.y} r="18" fill="rgba(196,161,90,0.12)" />
                  <text x={point.x} y={point.y + 36} textAnchor="middle" fill="rgba(231,227,214,0.8)" fontSize="11" letterSpacing="1.6">
                    {point.label}
                  </text>
                </g>
              ))}
              <g transform="translate(50 38)">
                <text x="0" y="0" fill="rgba(231,227,214,0.72)" fontSize="11" letterSpacing="2.2">
                  DEAL RHYTHM
                </text>
                <rect x="0" y="18" width="18" height="56" rx="5" fill="url(#serviceBars)" />
                <rect x="27" y="0" width="18" height="74" rx="5" fill="rgba(255,255,255,0.18)" />
                <rect x="54" y="28" width="18" height="46" rx="5" fill="rgba(196,161,90,0.42)" />
              </g>
              <g transform="translate(250 126)">
                <rect x="0" y="0" width="78" height="46" rx="12" fill="rgba(7,7,9,0.52)" stroke="rgba(255,255,255,0.08)" />
                <text x="14" y="18" fill="rgba(196,161,90,0.9)" fontSize="10" letterSpacing="1.8">
                  CROSS-BORDER
                </text>
                <text x="14" y="34" fill="rgba(231,227,214,0.78)" fontSize="11">
                  Capital Structuring
                </text>
              </g>
            </svg>
          </div>
        }
      />
      <StrategySection />
      <ServiceProcessSection />
      <ContactSection />
    </main>
  );
}
