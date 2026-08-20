import type { MetadataRoute } from "next";
import { insightItems } from "../data/insights";

const siteUrl = "https://www.inkstonecapital.com";

export const dynamic = "force-static";

function pageEntry({
  path,
  zhPath,
  enPath,
  changeFrequency,
  priority,
  lastModified,
}: {
  path: string;
  zhPath: string;
  enPath: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
  lastModified: Date;
}): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        "zh-Hant": `${siteUrl}${zhPath}`,
        en: `${siteUrl}${enPath}`,
        "x-default": `${siteUrl}${zhPath}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    pageEntry({ path: "/", zhPath: "/", enPath: "/en/", lastModified: now, changeFrequency: "weekly", priority: 1 }),
    pageEntry({ path: "/en/", zhPath: "/", enPath: "/en/", lastModified: now, changeFrequency: "weekly", priority: 0.9 }),
    pageEntry({ path: "/services/", zhPath: "/services/", enPath: "/en/services/", lastModified: now, changeFrequency: "monthly", priority: 0.9 }),
    pageEntry({ path: "/en/services/", zhPath: "/services/", enPath: "/en/services/", lastModified: now, changeFrequency: "monthly", priority: 0.82 }),
    pageEntry({ path: "/partner-referral-program/", zhPath: "/partner-referral-program/", enPath: "/en/partner-referral-program/", lastModified: now, changeFrequency: "monthly", priority: 0.78 }),
    pageEntry({ path: "/en/partner-referral-program/", zhPath: "/partner-referral-program/", enPath: "/en/partner-referral-program/", lastModified: now, changeFrequency: "monthly", priority: 0.7 }),
    pageEntry({ path: "/team/", zhPath: "/team/", enPath: "/en/team/", lastModified: now, changeFrequency: "monthly", priority: 0.8 }),
    pageEntry({ path: "/en/team/", zhPath: "/team/", enPath: "/en/team/", lastModified: now, changeFrequency: "monthly", priority: 0.72 }),
    pageEntry({ path: "/companies/", zhPath: "/companies/", enPath: "/en/companies/", lastModified: now, changeFrequency: "monthly", priority: 0.8 }),
    pageEntry({ path: "/en/companies/", zhPath: "/companies/", enPath: "/en/companies/", lastModified: now, changeFrequency: "monthly", priority: 0.72 }),
    {
      url: `${siteUrl}/inkwater/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/inkwater/technology/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${siteUrl}/inkwater/applications/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${siteUrl}/inkwater/deployments/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${siteUrl}/inkwater/partners/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    pageEntry({ path: "/news/", zhPath: "/news/", enPath: "/en/news/", lastModified: now, changeFrequency: "weekly", priority: 0.8 }),
    pageEntry({ path: "/en/news/", zhPath: "/news/", enPath: "/en/news/", lastModified: now, changeFrequency: "weekly", priority: 0.72 }),
    {
      url: `${siteUrl}/news/hong-kong-mid-levels-chan-wing-sun-visit/`,
      lastModified: new Date("2026-08-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/news/sec-aimfinity-docter-independent-director-nominees/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/news/notice-unauthorized-representation/`,
      lastModified: new Date("2026-06-15"),
      changeFrequency: "monthly",
      priority: 0.52,
    },
    {
      url: `${siteUrl}/news/ishigaki-beef-direct-taiwan-visit/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...insightItems.map((item) => ({
      url: `${siteUrl}/insights/${item.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}
