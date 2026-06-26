import type { Metadata } from "next";
import { ContactSection, NewsSection } from "../../../components/Sections";
import { PageLead, SiteHeader } from "../../../components/SiteHeader";
import { createPageMetadata, JsonLd, organizationJsonLd } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "News & Media Coverage",
  description:
    "Browse Inkstone Capital public updates, media coverage, company news and industry commentary.",
  path: "/en/news/",
  locale: "en",
  zhPath: "/news/",
  enPath: "/en/news/",
});

export default function EnglishNewsPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("en")} />
      <SiteHeader currentPath="/en/news/" locale="en" />
      <PageLead eyebrow="News" title="News & Media Coverage" highlights={[]} />
      <NewsSection locale="en" />
      <ContactSection locale="en" />
    </main>
  );
}
