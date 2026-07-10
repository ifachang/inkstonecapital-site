import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "../../../components/Sections";
import { SiteHeader } from "../../../components/SiteHeader";
import { JsonLd, organizationJsonLd, siteName, siteUrl } from "../../../lib/seo";

const articleTitle = "重要公告：未授權第三方代理、用印或代開發票聲明";
const articleDescription =
  "墨石國際股份有限公司及黑雷資本投資有限公司聲明，兩公司未授權任何第三方以公司或品牌名義刻印、簽約、代開發票、代收款項或代理承諾，並與沁騰實業股份有限公司及其關係企業、關聯公司或實質控制之公司無任何業務往來。";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: "/news/notice-unauthorized-representation/",
  },
  openGraph: {
    type: "article",
    url: `${siteUrl}/news/notice-unauthorized-representation/`,
    siteName,
    title: `${articleTitle} | ${siteName}`,
    description: articleDescription,
    locale: "zh_TW",
    publishedTime: "2026-06-15",
    authors: ["Inkstone International Co., Ltd.", "Black Lightning Capital Investment Limited"],
    section: "Company Notice",
  },
  twitter: {
    card: "summary",
    title: `${articleTitle} | ${siteName}`,
    description: articleDescription,
  },
};

const noticeItems = [
  "「墨石資本」為墨石國際股份有限公司使用之品牌名稱。除經墨石國際股份有限公司或黑雷資本投資有限公司正式書面授權外，任何第三方均不得以墨石國際股份有限公司、墨石資本、黑雷資本投資有限公司或其他相似名稱之名義，進行刻印、簽署合約、代開發票、代收款項、代理承諾、對外洽商或其他足以使第三人誤認為取得授權之行為。",
  "任何未經正式書面授權之文件、印章、合約、發票、收據、付款指示、合作承諾或其他對外表示，均不代表墨石國際股份有限公司或黑雷資本投資有限公司之立場，兩公司亦不因此承擔任何法律責任。",
  "墨石國際股份有限公司及黑雷資本投資有限公司與沁騰實業股份有限公司及其關係企業、關聯公司或實質控制之公司，均無任何業務合作、委任、代理、授權、投資、財務往來或其他商業往來關係。若任何人以墨石國際股份有限公司、墨石資本或黑雷資本投資有限公司名義主張與前述公司存在合作、授權或交易關係，均非兩公司所為，亦未經兩公司確認或同意。",
  "為保障交易安全，任何第三方如接獲涉及墨石國際股份有限公司、墨石資本或黑雷資本投資有限公司之合作邀約、付款通知、簽約請求、發票開立或文件用印要求，請務必先透過官方聯繫管道進行查證。未經查證而逕行交易、付款、簽約或交付資料者，相關風險應由當事人自行承擔。",
  "墨石國際股份有限公司及黑雷資本投資有限公司保留就任何未經授權使用公司名稱、品牌名稱、印章、文件、名義或造成第三人誤認之行為，依法追究民事、刑事及其他法律責任之權利。",
] as const;

export default function UnauthorizedRepresentationNoticePage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("zh")} />
      <SiteHeader currentPath="/news/" />
      <article className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#050506_0%,#101116_54%,#15161a_100%)]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <Link
            href="/news/"
            className="text-sm text-accent-gold transition hover:text-[#d3af67]"
          >
            ← 返回最新消息
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-accent-gold/35 bg-accent-gold/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-accent-gold">
              Company Notice
            </div>
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
              Official Statement
            </div>
            <div className="text-xs text-stone-500">2026-06-15</div>
          </div>

          <h1 className="mt-5 max-w-3xl text-[2rem] font-semibold tracking-tight text-stone-50 sm:text-5xl">
            {articleTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-300/92 sm:text-lg sm:leading-9">
            公告日期：2026-06-15
          </p>

          <section className="mt-8 border border-stone-light/24 bg-white/[0.035] p-5 sm:p-7">
            <p className="text-base leading-8 text-stone-200 sm:text-lg">
              墨石國際股份有限公司及黑雷資本投資有限公司特此聲明：
            </p>

            <div className="mt-6 space-y-5 text-sm leading-8 text-stone-300/92 sm:text-base">
              {noticeItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-light/18 pt-6 text-sm leading-8 text-stone-300/92 sm:text-base">
              <p>特此公告。</p>
              <div className="mt-6 space-y-1 font-medium text-stone-100">
                <p>墨石國際股份有限公司</p>
                <p>黑雷資本投資有限公司</p>
              </div>
            </div>
          </section>
        </div>
      </article>
      <ContactSection />
    </main>
  );
}
