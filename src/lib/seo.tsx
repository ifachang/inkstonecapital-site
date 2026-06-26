import type { Metadata } from "next";
import type { Locale } from "./i18n";

export const siteUrl = "https://www.inkstonecapital.com";
export const siteName = "Inkstone Capital 墨石資本";
export const defaultOgImage = {
  url: "/inkstone-logo.jpg",
  width: 512,
  height: 512,
  alt: "Inkstone Capital logo",
};

const localeConfig = {
  zh: {
    openGraphLocale: "zh_TW",
    alternateLocale: "en_US",
    keywords: [
      "Inkstone Capital",
      "墨石資本",
      "併購重組",
      "私募融資",
      "上市規劃",
      "跨境資本市場",
      "投資顧問",
      "中小企業資本規劃",
      "美股上市顧問",
    ],
  },
  en: {
    openGraphLocale: "en_US",
    alternateLocale: "zh_TW",
    keywords: [
      "Inkstone Capital",
      "cross-border capital markets",
      "M&A advisory",
      "private placement",
      "bridge financing",
      "listing strategy",
      "small cap advisory",
      "Taiwan investment advisory",
      "US capital markets",
    ],
  },
} satisfies Record<Locale, {
  openGraphLocale: string;
  alternateLocale: string;
  keywords: string[];
}>;

type SeoPage = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  zhPath: string;
  enPath: string;
  image?: typeof defaultOgImage;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  locale,
  zhPath,
  enPath,
  image = defaultOgImage,
  type = "website",
}: SeoPage): Metadata {
  const config = localeConfig[locale];
  const absoluteUrl = `${siteUrl}${path}`;
  const pageTitle = title === siteName ? siteName : `${title} | ${siteName}`;

  return {
    title: {
      absolute: pageTitle,
    },
    description,
    keywords: config.keywords,
    alternates: {
      canonical: path,
      languages: {
        "zh-Hant": zhPath,
        en: enPath,
        "x-default": zhPath,
      },
    },
    openGraph: {
      type,
      url: absoluteUrl,
      siteName,
      title: pageTitle,
      description,
      locale: config.openGraphLocale,
      alternateLocale: [config.alternateLocale],
      images: [image],
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
      images: [image.url],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function organizationJsonLd(locale: Locale) {
  const inLanguage = locale === "en" ? "en" : "zh-Hant";
  const address =
    locale === "en"
      ? {
          "@type": "PostalAddress",
          addressCountry: "TW",
          addressLocality: "Kaohsiung",
          streetAddress: "4F, No. 155, Furen Road",
        }
      : {
          "@type": "PostalAddress",
          addressCountry: "TW",
          addressLocality: "Kaohsiung",
          streetAddress: "高雄市輔仁路 155 號 4 樓",
        };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        alternateName: ["Inkstone Capital", "墨石資本"],
        url: siteUrl,
        logo: `${siteUrl}/inkstone-logo.jpg`,
        email: "corp@inkstonecapital.com",
        telephone: "+886-2-7755-7057",
        address,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: locale === "en" ? `${siteUrl}/en/` : siteUrl,
        name: siteName,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage,
      },
    ],
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
