import type { Metadata } from "next";
import {
  CompanyEcosystemSection,
  ContactSection,
  PortfolioSection,
} from "../../../components/Sections";
import { PageLead, SiteHeader } from "../../../components/SiteHeader";
import { createPageMetadata, JsonLd, organizationJsonLd } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Affiliated Companies",
  description:
    "Learn about companies and brands introduced by Inkstone Capital, including Yushan.AI, Docter Inc. and Datou America Inc.",
  path: "/en/companies/",
  locale: "en",
  zhPath: "/companies/",
  enPath: "/en/companies/",
});

export default function EnglishCompaniesPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("en")} />
      <SiteHeader currentPath="/en/companies/" locale="en" />
      <PageLead
        eyebrow="Companies"
        title="Affiliated Companies"
        summaryLabel="Ecosystem"
        summaryTitle="Industry context for the current ecosystem"
        summaryPoints={[
          "A consolidated view of related companies and brands currently introduced on this website.",
          "Themes spanning technology, health technology and consumer brands across market directions and use cases.",
          "A quick way to understand how each company connects with Inkstone Capital's areas of focus.",
        ]}
        highlights={[]}
      />
      <PortfolioSection locale="en" />
      <CompanyEcosystemSection locale="en" />
      <ContactSection locale="en" />
    </main>
  );
}
