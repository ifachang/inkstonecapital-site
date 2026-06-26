import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "../../../components/Sections";
import { SiteHeader } from "../../../components/SiteHeader";
import { JsonLd, organizationJsonLd, siteName, siteUrl } from "../../../lib/seo";

const secUrl =
  "https://www.sec.gov/Archives/edgar/data/1903464/000121390026072040/ea0295833-8k425_aimfin1.htm";

const articleTitle =
  "AIMUF 補充 SEC 8-K：Jonathan Bond 與 William Koschak 擬加入合併後 PubCo 獨立董事名單";
const articleDescription =
  "根據 Aimfinity Investment Corp. I 於 2026 年 6 月 25 日提交 SEC 的 8-K 補充公告，Jonathan Bond 與 William Koschak 將被加入 Docter 業務合併後 PubCo 的獨立董事候選人名單。";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: "/news/sec-aimfinity-docter-independent-director-nominees/",
  },
  openGraph: {
    type: "article",
    url: `${siteUrl}/news/sec-aimfinity-docter-independent-director-nominees/`,
    siteName,
    title: `${articleTitle} | ${siteName}`,
    description: articleDescription,
    locale: "zh_TW",
    images: [
      {
        url: "/jonathan-bond-sec-8k.jpg",
        alt: "Jonathan Bond portrait used as news illustration",
      },
    ],
    publishedTime: "2026-06-26",
    authors: ["Inkstone Capital"],
    section: "SEC Filing",
  },
  twitter: {
    card: "summary_large_image",
    title: `${articleTitle} | ${siteName}`,
    description: articleDescription,
    images: ["/jonathan-bond-sec-8k.jpg"],
  },
};

const governanceItems = [
  ["Filing", "Form 8-K / Rule 425 written communication"],
  ["Registrant", "Aimfinity Investment Corp. I"],
  ["Business combination", "Aimfinity Investment Corp. I 與 Docter Inc."],
  ["Date of report", "June 23, 2026"],
];

const directorHighlights = [
  {
    name: "Jonathan Bond",
    body:
      "SEC 文件稱 Jonathan Bond 具超過 35 年廣告與行銷產業創業經驗，目前擔任 BondWorld 執行長，並曾共同創辦 The Heart Monitors。文件並列示其於 ONAR Holding Corporation、Inuvo Inc. 及多家廣告、媒體與行銷公司之董事與管理經驗。",
  },
  {
    name: "William Frank Koschak",
    body:
      "SEC 文件稱 William Koschak 具近 35 年公司治理、資本市場、財務與策略交易經驗，目前擔任 AdvancementCFO / Everest Advisors LLC 相關顧問業務之執行長，並曾任 Calyxt, Inc. 財務長及 KPMG LLP 合夥人。",
  },
];

const businessUpdates = [
  {
    title: "Taiwan SECOM subsidiary shipment",
    body:
      "Docter 已完成向台灣新光保全全資子公司之首批產品出貨，公告稱初始出貨價值約新台幣 166 萬元，並依客戶討論指出該訂單預期可能屬於估計總值約新台幣 7,500 萬元之較大專案的一部分。",
  },
  {
    title: "Leeway Biomedical mmWave order",
    body:
      "Docter 取得 Leeway Biomedical 300 台 iCARE sleep sensing device 客製化毫米波感測設備訂單，公告列示未稅金額約新台幣 226.8 萬元；若測試階段符合預期，初步討論指出需求可能擴大至台灣全國約 10,000 台。",
  },
  {
    title: "Anticipated hospital projects",
    body:
      "公告提及未來三個月若干醫院專案可能推進，包括高雄榮民總醫院、童綜合醫院及高雄醫學大學附設中和紀念醫院相關智慧病房或居家遠距智慧醫療應用；最終採購仍須依各醫院正式招標程序決定。",
  },
];

export default function SecAimfinityDocterIndependentDirectorNomineesPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <JsonLd data={organizationJsonLd("zh")} />
      <SiteHeader currentPath="/news/" />
      <article className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#050506_0%,#101116_52%,#15161a_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <Link
            href="/news/"
            className="text-sm text-accent-gold transition hover:text-[#d3af67]"
          >
            ← 返回最新消息
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-accent-gold/35 bg-accent-gold/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-accent-gold">
              SEC Filing
            </div>
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
              AIMUF / Docter Business Combination
            </div>
            <div className="text-xs text-stone-500">2026.06.26</div>
          </div>

          <h1 className="mt-5 max-w-4xl text-[2rem] font-semibold tracking-tight text-stone-50 sm:text-5xl">
            {articleTitle}
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-stone-300/92 sm:text-lg sm:leading-9">
            Aimfinity Investment Corp. I 於美國 SEC 提交 Form 8-K 補充公告，針對其與 Docter Inc.
            擬議業務合併相關 proxy materials 補充資訊，新增 Jonathan Bond 與 William Frank Koschak
            為合併後 PubCo 之獨立董事候選人。
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-stone-400 sm:text-base sm:leading-8">
            The filing supplements AIMUF&apos;s definitive proxy materials for the proposed business combination with Docter Inc.,
            and also discloses selected business development updates related to Docter&apos;s Taiwan market activities.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(300px,1.08fr)] lg:items-stretch">
            <div className="overflow-hidden border border-stone-light/25 bg-black/35">
              <div
                className="min-h-[520px] bg-cover bg-center"
                role="img"
                aria-label="Jonathan Bond portrait used as news illustration"
                style={{ backgroundImage: "url(/jonathan-bond-sec-8k.jpg)" }}
              />
              <div className="border-t border-stone-light/18 bg-black/45 px-4 py-3 text-xs leading-6 text-stone-400">
                Jonathan Bond photo used as article illustration.
              </div>
            </div>
            <div className="border border-stone-light/24 bg-white/[0.035] p-5 sm:p-6">
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                Filing Snapshot
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {governanceItems.map(([label, value]) => (
                  <div key={label} className="border border-stone-light/18 bg-black/24 p-4">
                    <div className="text-[0.64rem] uppercase tracking-[0.16em] text-stone-500">
                      {label}
                    </div>
                    <div className="mt-2 text-sm font-medium leading-6 text-stone-100">{value}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-8 text-stone-300/92">
                SEC 文件指出，Mr. Koschak 與 Mr. Bond 將各自擔任 PubCo audit committee、compensation committee
                及 nominating and corporate governance committee 成員。公告亦載明，董事會判定兩人符合 Nasdaq Listing Rule
                5605(a)(2) 及 Exchange Act Rule 10A-3 下的獨立性要求。
              </p>
              <a
                href={secUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border border-accent-gold/45 bg-accent-gold/10 px-5 py-2.5 text-sm font-medium text-accent-gold transition hover:border-accent-gold hover:bg-accent-gold/15"
              >
                查看 SEC 原始公告
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="space-y-5">
              <section className="border border-stone-light/22 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                  Governance Update
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-stone-50">
                  補充獨立董事候選人，強化合併後治理架構揭露
                </h2>
                <p className="mt-4 text-sm leading-8 text-stone-300/92 sm:text-base">
                  根據本次 8-K，除先前 definitive proxy statement 已揭露之合併後董事與高階主管外，PubCo
                  預計新增 William Frank Koschak 與 Jonathan Bond 為獨立董事候選人。文件亦更新合併後預期董事與管理層名單，
                  包括 I-Fa Chang、Crystal Wu、Hsin-Ming Huang、Kevin D. Vassily、Teng-Wei Chen、Jonathan Tien、
                  William Frank Koschak 與 Jonathan Bond。
                </p>
              </section>

              <section className="border border-stone-light/22 bg-black/22 p-5 sm:p-6">
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                  Independent Director Nominees
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {directorHighlights.map((item) => (
                    <div key={item.name} className="border border-stone-light/20 bg-white/[0.035] p-4">
                      <h3 className="text-base font-semibold text-stone-50">{item.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-stone-300/90">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="border border-stone-light/22 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                  Business Development Updates
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-stone-50">
                  Docter 台灣市場業務進展同步揭露
                </h2>
                <div className="mt-5 space-y-4">
                  {businessUpdates.map((item) => (
                    <div key={item.title} className="border border-stone-light/18 bg-black/24 p-4">
                      <div className="text-[0.64rem] uppercase tracking-[0.16em] text-accent-gold">
                        {item.title}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-stone-300/90">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="border border-stone-light/24 bg-white/[0.035] p-5">
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                Important Notice
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-300/90">
                本文為依 SEC 公開文件整理之公司動態摘要，不構成證券招攬、要約或投資建議。SEC 文件中涉及 proposed business
                combination、客戶訂單、醫院專案與未來營收機會之描述包含 forward-looking statements，實際結果可能因交易完成條件、
                採購程序、客戶測試、政府標案與其他風險因素而有重大差異。
              </p>
              <div className="mt-5 border-t border-stone-light/15 pt-5">
                <div className="text-[0.64rem] uppercase tracking-[0.16em] text-stone-500">
                  Source
                </div>
                <a
                  href={secUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm leading-6 text-accent-gold transition hover:text-[#d3af67]"
                >
                  SEC Form 8-K filed by Aimfinity Investment Corp. I
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <ContactSection />
    </main>
  );
}
