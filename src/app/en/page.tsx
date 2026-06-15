import type { Metadata } from "next";
import { Hero } from "../../components/Hero";
import {
  AboutSection,
  ContactSection,
  HomeShowcaseSection,
  InsightsSection,
} from "../../components/Sections";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Inkstone Capital focuses on cross-border capital markets, M&A and restructuring, private financing and listing strategy for growth companies.",
  alternates: {
    canonical: "/en/",
    languages: {
      "zh-Hant": "/",
      en: "/en/",
    },
  },
};

export default function EnglishHomePage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
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
