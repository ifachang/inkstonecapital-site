import type { Metadata } from "next";
import {
  ContactSection,
  ServiceProcessSection,
  StrategySection,
} from "../../../components/Sections";
import { PageLead, SiteHeader } from "../../../components/SiteHeader";
import { createPageMetadata, JsonLd, organizationJsonLd } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services & Strategy",
  description:
    "Learn about Inkstone Capital's core services, including M&A and restructuring advisory, private placement, bridge financing and capital-market planning.",
  path: "/en/services/",
  locale: "en",
  zhPath: "/services/",
  enPath: "/en/services/",
});

export default function EnglishServicesPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("en")} />
      <SiteHeader currentPath="/en/services/" locale="en" />
      <PageLead
        eyebrow="Services"
        title="Services & Strategy"
        summaryLabel="Advisory"
        summaryTitle="Transaction structure and capital planning at the core"
        summaryPoints={[
          "Focused support for strategic and execution needs at critical company-growth stages.",
          "Coordination across transaction structure, financing arrangement and market positioning.",
          "Helping companies build more extensible paths toward capital markets.",
        ]}
        highlights={[]}
      />
      <StrategySection locale="en" />
      <ServiceProcessSection locale="en" />
      <ContactSection locale="en" />
    </main>
  );
}
