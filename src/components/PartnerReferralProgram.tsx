import Link from "next/link";
import { localizedPath, type Locale } from "../lib/i18n";

const partnerOsUrl = "https://partner.inkstonecapital.com/";

const content = {
  zh: {
    eyebrow: "Partner Referral Program",
    title: "合作夥伴推薦計畫",
    intro:
      "墨石資本歡迎專業服務機構、產業顧問、企業家、投資與跨境服務夥伴，介紹具備公司金融、跨境交易、資本市場規劃、策略合作或國際市場拓展需求之企業客戶。",
    ctaPrimary: "前往 Partner OS",
    ctaSecondary: "聯絡我們",
    snapshot: [
      ["Focus", "企業服務機會介紹"],
      ["Scope", "公司金融、跨境交易、資本市場規劃"],
      ["Review", "衝突檢查、合規確認、書面約定"],
    ],
    eligibleTitle: "適合介紹的機會",
    eligibleBody:
      "本計畫聚焦企業客戶與專業服務合作，不面向一般投資大眾募集資金或推介金融商品。",
    eligibleItems: [
      "正在評估併購、重組、策略投資或跨境交易的企業。",
      "需要私募融資、過橋融資、上市前資本規劃或治理準備的成長型公司。",
      "尋求美國、台灣或大中華區策略合作、產業資源或市場拓展支持的企業團隊。",
      "律師、會計師、顧問、產業專家或企業家網絡中的合格企業服務機會。",
    ],
    processTitle: "合作流程",
    processItems: [
      ["01", "初步提交", "合作夥伴可透過 Partner OS 或官方聯繫窗口提交企業服務機會與基本背景。"],
      ["02", "內部審查", "墨石資本進行衝突檢查、案件適配性、合規風險與資訊完整度評估。"],
      ["03", "正式接洽", "如案件適合，後續溝通、委任條件與文件安排均由墨石資本自行確認。"],
      ["04", "書面約定", "任何合作安排、角色範圍或費用條款，均須另以正式書面文件約定後始得成立。"],
    ],
    complianceTitle: "合規與角色限制",
    complianceBody:
      "本計畫僅適用於合格合作夥伴介紹企業服務機會，不構成證券招攬、投資建議、承銷、經紀、居間、代理或任何金融商品之推介。",
    restrictions: [
      "Partner 不得代表墨石資本作出承諾、報價、保證、法律意見、稅務意見或投資建議。",
      "Partner 不得收受款項、代簽文件、代開發票、傳遞投資文件或與第三方協商交易條件。",
      "Partner 不得向投資人招攬投資、銷售證券、承諾報酬、保證上市結果或以成交金額對外宣稱分潤安排。",
      "所有潛在案件均由墨石資本自行評估是否接受委任，墨石資本保留拒絕、暫停或終止案件評估之權利。",
    ],
    privacyTitle: "提交資訊前請確認",
    privacyBody:
      "提交 referral 前，請確認您已取得被介紹方同意，並確認所提供資訊真實、合法且可供墨石資本用於初步聯繫、案件評估、衝突檢查與合規審查。請勿提交未經授權之個人資料、機密資訊、內線消息或任何受法律限制揭露之資料。",
    note:
      "本頁資訊僅為合作方式說明，不構成任何要約、承諾、投資建議或法律意見。實際合作內容應以雙方正式書面文件為準。",
  },
  en: {
    eyebrow: "Partner Referral Program",
    title: "Partner Referral Program",
    intro:
      "Inkstone Capital welcomes professional service firms, industry advisors, entrepreneurs, investment partners and cross-border service partners to introduce corporate clients with needs in corporate finance, cross-border transactions, capital-market planning, strategic cooperation or international market expansion.",
    ctaPrimary: "Open Partner OS",
    ctaSecondary: "Contact us",
    snapshot: [
      ["Focus", "Corporate advisory opportunity referrals"],
      ["Scope", "Corporate finance, cross-border transactions and capital-market planning"],
      ["Review", "Conflict checks, compliance review and written agreement"],
    ],
    eligibleTitle: "Referral Opportunities",
    eligibleBody:
      "The program is designed for corporate clients and professional service cooperation. It is not a public fundraising channel and does not promote financial products to retail investors.",
    eligibleItems: [
      "Companies evaluating M&A, restructuring, strategic investment or cross-border transactions.",
      "Growth companies seeking private financing, bridge financing, pre-listing capital planning or governance preparation.",
      "Corporate teams seeking strategic cooperation, industry resources or market-expansion support across the United States, Taiwan or Greater China.",
      "Qualified corporate advisory opportunities from lawyers, accountants, consultants, industry specialists or entrepreneur networks.",
    ],
    processTitle: "How It Works",
    processItems: [
      ["01", "Initial submission", "Partners may submit basic corporate background and advisory opportunities through Partner OS or Inkstone Capital's official contact channels."],
      ["02", "Internal review", "Inkstone Capital reviews conflicts, fit, compliance risks and information completeness."],
      ["03", "Formal engagement discussion", "If the opportunity is suitable, all follow-up communication, engagement terms and documentation are confirmed directly by Inkstone Capital."],
      ["04", "Written agreement", "Any cooperation arrangement, role scope or fee term becomes effective only after execution of formal written documentation."],
    ],
    complianceTitle: "Compliance and Role Limitations",
    complianceBody:
      "The program is limited to qualified partner introductions of corporate advisory opportunities. It does not constitute securities solicitation, investment advice, underwriting, brokerage, finder activity, agency or promotion of any financial product.",
    restrictions: [
      "Partners may not make commitments, quotes, guarantees, legal advice, tax advice or investment advice on behalf of Inkstone Capital.",
      "Partners may not receive funds, sign documents, issue invoices, transmit investment documents or negotiate transaction terms with third parties.",
      "Partners may not solicit investors, sell securities, promise returns, guarantee listing outcomes or publicly describe transaction-based compensation arrangements.",
      "All potential matters are evaluated independently by Inkstone Capital, which may decline, pause or terminate any review at its discretion.",
    ],
    privacyTitle: "Before Submitting Information",
    privacyBody:
      "Before submitting a referral, please confirm that you have obtained the referred party's consent and that the information provided is accurate, lawful and available for Inkstone Capital's initial contact, matter assessment, conflict checks and compliance review. Do not submit unauthorized personal data, confidential information, inside information or any information restricted from disclosure by law.",
    note:
      "This page is for program information only and does not constitute an offer, commitment, investment advice or legal advice. Actual cooperation terms are governed solely by formal written documentation.",
  },
} satisfies Record<Locale, {
  eyebrow: string;
  title: string;
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  snapshot: Array<[string, string]>;
  eligibleTitle: string;
  eligibleBody: string;
  eligibleItems: string[];
  processTitle: string;
  processItems: Array<[string, string, string]>;
  complianceTitle: string;
  complianceBody: string;
  restrictions: string[];
  privacyTitle: string;
  privacyBody: string;
  note: string;
}>;

export function PartnerReferralProgram({ locale = "zh" }: { locale?: Locale }) {
  const copy = content[locale];

  return (
    <>
      <section className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#050506_0%,#101116_55%,#17191d_100%)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end lg:py-20">
          <div>
            <div className="text-[0.64rem] uppercase tracking-[0.22em] text-stone-400">
              {copy.eyebrow}
            </div>
            <h1 className="mt-4 max-w-3xl text-[2rem] font-semibold tracking-tight text-stone-50 sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-300/92 sm:text-lg sm:leading-9">
              {copy.intro}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={partnerOsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-accent-gold px-6 py-3 text-sm font-semibold text-ink-dark transition hover:bg-[#d3af67]"
              >
                {copy.ctaPrimary}
              </a>
              <Link
                href={localizedPath(locale, "/#contact")}
                className="inline-flex justify-center rounded-full border border-stone-light/45 bg-white/[0.03] px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-accent-gold/70 hover:bg-white/[0.06]"
              >
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="border border-stone-light/24 bg-white/[0.035] p-5 sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
              Program Snapshot
            </div>
            <div className="mt-5 space-y-3">
              {copy.snapshot.map(([label, value]) => (
                <div key={label} className="border border-stone-light/18 bg-black/24 p-4">
                  <div className="text-[0.64rem] uppercase tracking-[0.16em] text-accent-gold">
                    {label}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-6 text-stone-100">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-light/35 bg-[#101114]">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <div>
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
              Eligibility
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50">
              {copy.eligibleTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-300/90 sm:text-base sm:leading-8">
              {copy.eligibleBody}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {copy.eligibleItems.map((item) => (
              <div key={item} className="border border-stone-light/20 bg-white/[0.035] p-4">
                <p className="text-sm leading-7 text-stone-300/92">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#101114_0%,#15161a_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
              Process
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50">
              {copy.processTitle}
            </h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {copy.processItems.map(([step, title, body]) => (
              <div key={step} className="border border-stone-light/20 bg-black/24 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent-gold/35 bg-accent-gold/10 text-xs font-semibold text-accent-gold">
                  {step}
                </div>
                <h3 className="mt-4 text-base font-semibold text-stone-50">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300/90">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-light/35 bg-[#0b0c0f]">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="border border-stone-light/24 bg-white/[0.035] p-5 sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
              Compliance
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50">
              {copy.complianceTitle}
            </h2>
            <p className="mt-4 text-sm leading-8 text-stone-300/92 sm:text-base">
              {copy.complianceBody}
            </p>
          </div>

          <div className="space-y-3">
            {copy.restrictions.map((item) => (
              <div key={item} className="border border-stone-light/18 bg-black/28 p-4">
                <p className="text-sm leading-7 text-stone-300/92">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-light/35 bg-[#101114]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="border border-accent-gold/30 bg-accent-gold/10 p-5 sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-accent-gold">
              Privacy & Submission
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50">
              {copy.privacyTitle}
            </h2>
            <p className="mt-4 text-sm leading-8 text-stone-200/92 sm:text-base">
              {copy.privacyBody}
            </p>
          </div>
          <p className="mt-5 text-xs leading-6 text-stone-500 sm:text-sm sm:leading-7">
            {copy.note}
          </p>
        </div>
      </section>
    </>
  );
}
