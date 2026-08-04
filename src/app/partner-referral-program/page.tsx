import type { Metadata } from "next";
import { ContactSection } from "../../components/Sections";
import { PartnerReferralProgram } from "../../components/PartnerReferralProgram";
import { SiteHeader } from "../../components/SiteHeader";
import { createPageMetadata, JsonLd, organizationJsonLd } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "合作夥伴推薦計畫",
  description:
    "了解墨石資本 Partner Referral Program。合格合作夥伴可介紹企業客戶的公司金融、跨境交易、資本市場規劃與策略合作機會，所有案件均須經合規審查與書面約定。",
  path: "/partner-referral-program/",
  locale: "zh",
  zhPath: "/partner-referral-program/",
  enPath: "/en/partner-referral-program/",
});

export default function PartnerReferralProgramPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("zh")} />
      <SiteHeader currentPath="/partner-referral-program/" />
      <PartnerReferralProgram />
      <ContactSection />
    </main>
  );
}
