import type { Metadata } from "next";
import { Hero } from "../components/Hero";
import {
  AboutSection,
  ContactSection,
  HomeShowcaseSection,
  InsightsSection,
} from "../components/Sections";
import { SiteHeader } from "../components/SiteHeader";
import { createPageMetadata, JsonLd, organizationJsonLd } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "首頁",
  description:
    "墨石資本專注於跨境資本市場、併購重組、私募融資與上市規劃，協助成長型企業連結資本與實體經濟。",
  path: "/",
  locale: "zh",
  zhPath: "/",
  enPath: "/en/",
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("zh")} />
      <SiteHeader currentPath="/" />
      <Hero />
      <AboutSection />
      <HomeShowcaseSection />
      <InsightsSection />
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
