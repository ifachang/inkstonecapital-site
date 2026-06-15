import type { Metadata } from "next";
import { ContactSection, NewsSection } from "../../../components/Sections";
import { PageLead, SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "News & Media Coverage",
  description:
    "Browse Inkstone Capital public updates, media coverage, company news and industry commentary.",
  alternates: {
    canonical: "/en/news/",
    languages: {
      "zh-Hant": "/news/",
      en: "/en/news/",
    },
  },
};

export default function EnglishNewsPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <SiteHeader currentPath="/en/news/" locale="en" />
      <PageLead eyebrow="News" title="News & Media Coverage" highlights={[]} />
      <NewsSection locale="en" />
      <ContactSection locale="en" />
    </main>
  );
}
