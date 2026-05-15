import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { AssistantWidget } from "../components/AssistantWidget";
import "../styles/globals.css";

const siteUrl = "https://www.inkstonecapital.com";
const gaMeasurementId = "G-Y125F58WC5";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Inkstone Capital 墨石資本",
    template: "%s | Inkstone Capital 墨石資本",
  },
  description:
    "Inkstone Capital 墨石資本專注跨境資本市場、併購重組、私募融資與上市規劃，服務成長型企業與產業升級機會。",
  keywords: [
    "Inkstone Capital",
    "墨石資本",
    "併購重組",
    "私募融資",
    "上市規劃",
    "跨境資本市場",
    "投資顧問",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Inkstone Capital 墨石資本",
    title: "Inkstone Capital 墨石資本",
    description:
      "專注跨境資本市場、併購重組、私募融資與上市規劃的專業投資與顧問機構。",
    locale: "zh_TW",
    images: [
      {
        url: "/inkstone-logo.jpg",
        width: 512,
        height: 512,
        alt: "Inkstone Capital 墨石資本標誌",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Inkstone Capital 墨石資本",
    description:
      "專注跨境資本市場、併購重組、私募融資與上市規劃的專業投資與顧問機構。",
    images: ["/inkstone-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Inkstone Capital 墨石資本",
        url: siteUrl,
        logo: `${siteUrl}/inkstone-logo.jpg`,
        email: "corp@inkstonecapital.com",
        telephone: "+886-2-7755-7057",
        address: {
          "@type": "PostalAddress",
          addressCountry: "TW",
          addressLocality: "Kaohsiung",
          streetAddress: "高雄市輔仁路 155 號 4 樓",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Inkstone Capital 墨石資本",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "zh-Hant",
      },
    ],
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <AssistantWidget />
      </body>
    </html>
  );
}
