import type { Metadata } from "next";
import { Hero } from "../../components/Hero";
import {
  AboutSection,
  ContactSection,
  HomeShowcaseSection,
  InsightsSection,
} from "../../components/Sections";
import { SiteHeader } from "../../components/SiteHeader";
import { createPageMetadata, JsonLd, organizationJsonLd } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description:
    "Inkstone Capital focuses on cross-border capital markets, M&A and restructuring, private financing and listing strategy for growth companies.",
  path: "/en/",
  locale: "en",
  zhPath: "/",
  enPath: "/en/",
});

export default function EnglishHomePage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("en")} />
      <SiteHeader currentPath="/en/" locale="en" />
      <Hero locale="en" />
      <AboutSection locale="en" />
      <HomeShowcaseSection locale="en" />
      <InsightsSection locale="en" />
      <div id="contact">
        <ContactSection locale="en" />
      </div>
    </main>
  );
}
