import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { AssistantWidget } from "../components/AssistantWidget";
import { createPageMetadata, siteName, siteUrl } from "../lib/seo";
import "../styles/globals.css";

const gaMeasurementId = "G-Y125F58WC5";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...createPageMetadata({
    title: siteName,
    description:
      "Inkstone Capital 墨石資本專注跨境資本市場、併購重組、私募融資與上市規劃，服務成長型企業與產業升級機會。",
    path: "/",
    locale: "zh",
    zhPath: "/",
    enPath: "/en/",
  }),
  title: {
    default: "Inkstone Capital 墨石資本",
    template: "%s | Inkstone Capital 墨石資本",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-screen bg-ink text-white">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
        {children}
        <AssistantWidget />
      </body>
    </html>
  );
}
