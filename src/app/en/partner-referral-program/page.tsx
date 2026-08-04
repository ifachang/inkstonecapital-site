import type { Metadata } from "next";
import { ContactSection } from "../../../components/Sections";
import { PartnerReferralProgram } from "../../../components/PartnerReferralProgram";
import { SiteHeader } from "../../../components/SiteHeader";
import { createPageMetadata, JsonLd, organizationJsonLd } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Partner Referral Program",
  description:
    "Learn about Inkstone Capital's Partner Referral Program for qualified partners introducing corporate advisory opportunities in corporate finance, cross-border transactions, capital-market planning and strategic cooperation, subject to compliance review and written agreement.",
  path: "/en/partner-referral-program/",
  locale: "en",
  zhPath: "/partner-referral-program/",
  enPath: "/en/partner-referral-program/",
});

export default function EnglishPartnerReferralProgramPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("en")} />
      <SiteHeader currentPath="/en/partner-referral-program/" locale="en" />
      <PartnerReferralProgram locale="en" />
      <ContactSection locale="en" />
    </main>
  );
}
