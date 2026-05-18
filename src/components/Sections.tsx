import Image from "next/image";
import Link from "next/link";
import newsItems from "../data/news.json";
import { TrackedEmailLink } from "./TrackedEmailLink";

const affiliatedCompanies = [
  {
    href: "https://www.yushan.ai/",
    category: "AI Infrastructure",
    name: "Yushan.AI",
    description:
      "聚焦地端大型語言模型與企業級 AI 應用，強調隱私保護、離線運作與產業落地能力。",
    domain: "www.yushan.ai",
    imageSrc: "/company-yushan-ai.png",
    imageAlt: "Yushan.AI official logo",
    imageClassName: "object-contain p-8 sm:p-10",
  },
  {
    href: "https://www.docter.one/",
    category: "Health Technology",
    name: "Docter Inc.",
    description:
      "以 AI 智慧照護、健康管理與非接觸式感測技術為核心，提供醫療與居家照護解決方案。",
    domain: "www.docter.one",
    imageSrc: "/company-docter.jpg",
    imageAlt: "Docter official company image",
    imageClassName: "object-cover",
  },
  {
    href: "https://uncle-datou.com/",
    category: "Consumer Brand",
    name: "大頭叔叔",
    description:
      "以創意包裝與台灣在地零食為特色的消費品牌，涵蓋爆米花、果乾與聯名商品等產品線。",
    domain: "uncle-datou.com",
    imageSrc: "/company-uncle-datou.webp",
    imageAlt: "大頭叔叔 official product image",
    imageClassName: "object-cover",
  },
] as const;

const insightThemes = [
  {
    label: "Capital View",
    title: "跨境資本市場不只是募資窗口，更是企業治理與節奏重整的起點",
    body:
      "墨石資本關注的不僅是交易是否完成，更在於企業是否已準備好承接更高密度的資訊揭露、跨市場溝通與長期資本配置要求。",
  },
  {
    label: "Industry Signal",
    title: "AI、健康科技與消費品牌的下一輪競爭，將回到可驗證的商業化能力",
    body:
      "無論是模型、產品或品牌聲量，最終仍需回到市場接受度、營運效率與擴張路徑。這也是我們觀察相關公司與產業節點時的核心判準。",
  },
] as const;

const featuredInsight = {
  volume: "Vol. 1",
  title: "Direct Listing vs IPO",
  subtitle: "當企業準備走向公開市場，選擇的不只是上市方式，更是價格形成、股東結構與市場敘事的起點。",
  zh:
    "Direct Listing 與傳統 IPO 的差異，不只在承銷流程，而在企業希望如何進入市場。IPO 的優勢在於承銷商可協助定價、配售與穩定初期交易，較適合需要募資、希望建立機構股東基礎，或仍需市場教育的新創與成長公司。Direct Listing 則更強調市場化定價與流動性釋放，既有股東可直接進場交易，成本結構通常更精簡，但也意味著公司必須具備更高品牌辨識度、成熟財務揭露能力，以及足以承受首日波動的投資人溝通準備。對管理層而言，真正的問題不是哪種形式較新，而是哪種方式更符合企業現階段的資本需求與敘事能力。",
  en:
    "The real distinction between a Direct Listing and a traditional IPO is strategic, not procedural. An IPO is often better for companies that need primary capital, want underwriter support on price discovery, and benefit from building a stable base of institutional investors before public trading begins. A Direct Listing can be more efficient and market-driven, allowing existing shareholders to sell without the same underwriting structure, but it places greater pressure on the issuer’s brand visibility, disclosure discipline, and investor communication. For management teams, the better path is not the newer format or the cheaper headline. It is the route that best matches capital needs, shareholder objectives, and the company’s readiness to let the market set the narrative from day one.",
  imageSrc: "/insight-d-boral.png",
  imageAlt: "D. Boral Capital official logo",
} as const;

function SocialIcon({
  platform,
  className = "h-4 w-4",
}: {
  platform: "facebook" | "x" | "threads" | "linkedin";
  className?: string;
}) {
  if (platform === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M13.5 21v-7.2H16l.4-2.8h-2.9V9.2c0-.8.3-1.4 1.5-1.4h1.6V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.8H8v2.8h2.5V21h3Z" />
      </svg>
    );
  }

  if (platform === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.2L6.7 21H3.6l7.3-8.3L3.4 3h6.2l4.3 5.7L18.9 3Zm-1.1 16h1.7L8.7 4.9H6.9L17.8 19Z" />
      </svg>
    );
  }

  if (platform === "threads") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.7 10.7c-.3-2.3-1.8-4-4.7-4-3.4 0-5.4 2.2-5.4 5.6 0 3.4 2 5.6 5.5 5.6 2.8 0 4.7-1.4 5.2-3.7.4-1.8-.2-3.3-1.8-4.2-1.5-.9-3.5-1.3-5.8-1.2" />
        <path d="M17.2 13.4c0 2.8-2.1 4.9-5 4.9-2.7 0-4.6-1.5-4.6-3.7 0-2.1 1.6-3.4 4.3-3.4 2.4 0 4.4.5 5.3 2.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.9 8.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM5.5 9.8h2.8V18H5.5V9.8Zm4.6 0h2.7V11h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 2 3.5 4.5V18h-2.8v-3.5c0-.8 0-1.9-1.2-1.9s-1.4.9-1.4 1.8V18h-2.8V9.8Z" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section className="border-b border-stone-light/40 bg-[linear-gradient(180deg,#0f1013_0%,#111216_54%,#15161a_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-7 sm:gap-10 lg:grid-cols-[1.1fr_minmax(320px,0.9fr)] lg:items-start">
          <div className="space-y-6 sm:space-y-7">
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
                About Inkstone Capital
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
                以資本市場經驗為基礎，為企業建立跨境成長框架
              </h2>
            </div>
            <p className="text-sm leading-8 text-stone-300/90 sm:text-base">
              墨石資本（Inkstone Capital）成立於 2012 年，由張義發先生於美國華盛頓州 Mercer Island 創立，
              目前營運據點位於高雄市，並在美國與中國大陸擁有長期合作夥伴。團隊深耕跨境資本市場與企業財務顧問服務，
              協助客戶在不同法域之間銜接資本與策略資源。
            </p>
            <p className="text-sm leading-8 text-stone-300/82 sm:text-base">
              我們專注服務成長中的中小企業（Small Cap），涵蓋傳統產業升級、新經濟與科技應用等領域，透過併購重組、
              私募融資、上市規劃與過橋融資等工具，協助企業完成從在地成長到登陸美國 Nasdaq / NYSE 資本市場的關鍵里程碑，
              同時兼顧公司治理與長期價值。
            </p>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-stone-light/25 bg-black/25 p-4">
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                  Mandate
                </div>
                <div className="mt-2 text-sm font-semibold text-stone-100">成長企業資本規劃</div>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">
                  聚焦中小企業在募資、交易與市場布局的關鍵決策。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-light/25 bg-black/25 p-4">
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                  Execution
                </div>
                <div className="mt-2 text-sm font-semibold text-stone-100">結構與執行並重</div>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">
                  從架構設計到交易節奏協調，兼顧落地可行性。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-light/25 bg-black/25 p-4">
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                  Network
                </div>
                <div className="mt-2 text-sm font-semibold text-stone-100">跨境資源銜接</div>
                <p className="mt-2 text-xs leading-relaxed text-stone-400">
                  結合資本市場、產業夥伴與區域合作網絡。
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-stone-light/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.25))] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[2rem] sm:p-5">
            <div className="rounded-[1.25rem] border border-stone-light/25 bg-black/35 p-4 text-xs text-stone-300 sm:rounded-[1.5rem] sm:p-5 sm:text-sm">
              <div className="flex items-center justify-between border-b border-stone-light/20 pb-4">
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                    Core principles
                  </div>
                  <div className="mt-2 text-lg font-semibold text-stone-100">
                    紀律 · 獨立 · 穩健
                  </div>
                </div>
                <div className="rounded-full border border-accent-gold/35 bg-accent-gold/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-accent-gold">
                  Principles
                </div>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  {
                    title: "跨境結構設計經驗",
                    body: "熟悉多地監管與資本市場規則，為企業量身訂製兼顧成長與風險控管的交易架構。",
                  },
                  {
                    title: "長期實務與落地能力",
                    body: "結合理論與實務操作，從洽談、估值、盡職調查到交割與整合，提供一站式顧問服務。",
                  },
                  {
                    title: "與企業家並肩同行",
                    body: "以前瞻策略與務實執行為核心，陪伴企業從在地走向區域乃至國際資本市場。",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-stone-light/20 bg-white/5 p-4"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent-gold/35 bg-accent-gold/10 text-[0.68rem] font-semibold text-accent-gold">
                        0{index + 1}
                      </span>
                      <div className="font-medium text-stone-100">{item.title}</div>
                    </div>
                    <p className="text-[0.8rem] leading-relaxed text-stone-300/90">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OverviewSection() {
  const previewNews = newsItems.slice(0, 3);

  return (
    <section className="border-b border-stone-light/40 bg-[linear-gradient(180deg,#15161a_0%,#17191d_45%,#1e1f23_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.7rem] border border-stone-light/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.22))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.34)] sm:rounded-[2rem] sm:p-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                  Site structure
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50">
                  完整呈現核心資訊與專業內容
                </h2>
              </div>
              <div className="hidden rounded-full border border-accent-gold/35 bg-accent-gold/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-accent-gold sm:block">
                Structured
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-stone-300/90">
              本網站採分頁式資訊架構，將服務內容、團隊介紹、相關公司與最新消息分別整理於獨立頁面，
              以提升資訊呈現的清晰度、閱讀效率與整體瀏覽體驗，並有利於後續內容擴充與品牌長期發展。
            </p>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
              <Link
                href="/services/"
                className="rounded-2xl border border-stone-light/25 bg-black/28 p-4 transition hover:border-accent-gold/80 hover:bg-white/[0.06]"
              >
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">Services</div>
                <div className="mt-2 text-sm font-semibold text-stone-100">服務頁</div>
                <p className="mt-2 text-xs leading-relaxed text-stone-300/85">
                  集中整理併購重組、私募融資與上市規劃等核心服務。
                </p>
              </Link>
              <Link
                href="/team/"
                className="rounded-2xl border border-stone-light/25 bg-black/28 p-4 transition hover:border-accent-gold/80 hover:bg-white/[0.06]"
              >
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">Team</div>
                <div className="mt-2 text-sm font-semibold text-stone-100">團隊頁</div>
                <p className="mt-2 text-xs leading-relaxed text-stone-300/85">
                  將核心成員與顧問背景獨立陳列，避免首頁資訊過長。
                </p>
              </Link>
              <Link
                href="/companies/"
                className="rounded-2xl border border-stone-light/25 bg-black/28 p-4 transition hover:border-accent-gold/80 hover:bg-white/[0.06]"
              >
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">Companies</div>
                <div className="mt-2 text-sm font-semibold text-stone-100">相關公司頁</div>
                <p className="mt-2 text-xs leading-relaxed text-stone-300/85">
                  拆開介紹 AI、健康科技與消費品牌等相關布局。
                </p>
              </Link>
              <Link
                href="/news/"
                className="rounded-2xl border border-stone-light/25 bg-black/28 p-4 transition hover:border-accent-gold/80 hover:bg-white/[0.06]"
              >
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">News</div>
                <div className="mt-2 text-sm font-semibold text-stone-100">最新消息頁</div>
                <p className="mt-2 text-xs leading-relaxed text-stone-300/85">
                  首頁只放摘要，完整新聞列表放到獨立頁面閱讀。
                </p>
              </Link>
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-stone-light/35 bg-black/45 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:rounded-[2rem] sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                  Latest highlights
                </div>
                <div className="mt-2 text-xl font-semibold text-stone-50">
                  首頁新聞摘要
                </div>
              </div>
              <Link href="/news/" className="text-xs text-accent-gold">
                查看全部
              </Link>
            </div>
            <div className="mt-5 space-y-3">
              {previewNews.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-stone-light/25 bg-black/25 px-4 py-4 transition hover:border-accent-gold/80 hover:bg-white/[0.05]"
                >
                  <div className="mb-2 text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">
                    Media Coverage
                  </div>
                  <div className="text-sm font-medium text-stone-100">{item.title}</div>
                  <div className="mt-1 text-xs text-stone-400">{item.source}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InsightsSection() {
  const latestUpdates = newsItems.slice(0, 3);

  return (
    <section
      id="insights"
      className="border-b border-stone-light/40 bg-[radial-gradient(circle_at_top_right,rgba(196,161,90,0.16),transparent_24%),linear-gradient(180deg,#0f1013_0%,#131519_44%,#191b20_100%)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-6 grid gap-5 sm:mb-8 sm:gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-end">
          <div className="rounded-[1.7rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.18))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.3)] sm:rounded-[2rem] sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Insights & Updates
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
              觀點與動態
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-300/90 sm:text-base">
              用較精煉的方式整理墨石資本對產業與資本市場的觀察，同時收錄近期公開動態，讓訪客更快掌握我們正在關注的議題與節奏。
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-stone-light/25 bg-black/30 p-4 text-sm text-stone-300 shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-5">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Editorial Use
            </div>
            <p className="mt-3 leading-relaxed">
              這個區塊適合後續持續新增產業短評、交易觀察、媒體露出與墨石最新進展，作為品牌內容更新的固定入口。
            </p>
          </div>
        </div>

        <article className="mb-5 overflow-hidden rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.22))] shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:mb-6 sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[minmax(0,1.16fr)_minmax(300px,0.84fr)]">
            <div className="p-5 sm:p-6 lg:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-accent-gold/35 bg-accent-gold/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-accent-gold">
                  {featuredInsight.volume}
                </div>
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                  Featured Insight
                </div>
              </div>
              <h3 className="mt-4 text-[1.65rem] font-semibold tracking-tight text-stone-50 sm:text-[2rem]">
                {featuredInsight.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-300/88 sm:text-base sm:leading-8">
                {featuredInsight.subtitle}
              </p>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[1.35rem] border border-stone-light/20 bg-black/25 p-4 sm:rounded-[1.5rem]">
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">中文</div>
                  <p className="mt-3 text-sm leading-7 text-stone-200/92">{featuredInsight.zh}</p>
                </div>
                <div className="rounded-[1.35rem] border border-stone-light/20 bg-black/25 p-4 sm:rounded-[1.5rem]">
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">English</div>
                  <p className="mt-3 text-sm leading-7 text-stone-200/92">{featuredInsight.en}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-stone-light/15 bg-[radial-gradient(circle_at_top,rgba(196,161,90,0.18),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.16))] p-5 lg:border-l lg:border-t-0 lg:p-7">
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">Illustration</div>
              <div className="relative mt-4 aspect-[16/10] rounded-[1.45rem] border border-stone-light/20 bg-black/35">
                <Image
                  src={featuredInsight.imageSrc}
                  alt={featuredInsight.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-contain p-6 sm:p-8"
                />
              </div>
              <div className="mt-4 text-xs leading-6 text-stone-400">
                Visual reference sourced from D. Boral Capital’s official site and used here as an illustrative market-facing brand element for this topic.
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)]">
          <div className="grid gap-4 sm:gap-5">
            {insightThemes.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.7rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                    {item.label}
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent-gold/30 bg-accent-gold/10 text-[0.72rem] font-semibold text-accent-gold">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-8 text-stone-50 sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-300/90 sm:text-[0.95rem] sm:leading-8">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[1.7rem] border border-stone-light/30 bg-black/35 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-stone-light/15 pb-4">
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                  Recent Updates
                </div>
                <div className="mt-2 text-xl font-semibold text-stone-50">
                  墨石近期動態
                </div>
              </div>
              <Link href="/news/" className="text-xs text-accent-gold">
                查看全部
              </Link>
            </div>
            <div className="mt-5 space-y-3">
              {latestUpdates.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-stone-light/20 bg-white/[0.03] px-4 py-4 transition hover:border-accent-gold/80 hover:bg-white/[0.05]"
                >
                  <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">
                    Update
                  </div>
                  <div className="mt-2 text-sm font-medium leading-7 text-stone-100">
                    {item.title}
                  </div>
                  <div className="mt-2 text-xs text-stone-400">{item.source}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeShowcaseSection() {
  const latestUpdates = newsItems.slice(0, 2);
  const advisoryTracks = [
    {
      label: "01",
      title: "交易與重組",
      body: "協助企業釐清併購、整合、股權調整與跨境交易的可行架構。",
      href: "/services/",
    },
    {
      label: "02",
      title: "融資與資本規劃",
      body: "依企業階段配置私募、過橋融資、策略投資人與長期資本市場路徑。",
      href: "/services/",
    },
    {
      label: "03",
      title: "產業與生態連結",
      body: "聚焦 AI、健康科技與消費品牌等主題，串接企業成長所需資源。",
      href: "/companies/",
    },
  ];

  return (
    <section className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#15161a_0%,#101115_52%,#0d0e11_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-7 flex flex-col gap-4 sm:mb-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
              What We Build Around
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
              從資本結構到產業落地，形成可延展的成長路徑
            </h2>
            <p className="mt-4 text-sm leading-8 text-stone-300/90 sm:text-base">
              首頁以更精簡的方式呈現墨石資本的核心工作面向，讓訪客能快速理解服務、團隊、相關公司與最新動態之間的關聯。
            </p>
          </div>
          <Link
            href="/services/"
            className="inline-flex w-fit rounded-full border border-accent-gold/45 bg-accent-gold/10 px-5 py-2.5 text-sm font-medium text-accent-gold transition hover:border-accent-gold hover:bg-accent-gold/15"
          >
            查看完整服務
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {advisoryTracks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[1.6rem] border border-stone-light/25 bg-white/[0.035] p-5 transition hover:border-accent-gold/70 hover:bg-white/[0.055] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.68rem] uppercase tracking-[0.2em] text-accent-gold">
                  {item.label}
                </span>
                <span className="text-sm text-stone-500 transition group-hover:text-accent-gold">
                  →
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-50">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300/88">{item.body}</p>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="rounded-[1.8rem] border border-stone-light/25 bg-[linear-gradient(135deg,rgba(196,161,90,0.14),rgba(255,255,255,0.035)_42%,rgba(0,0,0,0.18))] p-5 sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Featured Perspective
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-50 sm:text-2xl">
              {featuredInsight.title}
            </h3>
            <p className="mt-3 text-sm leading-8 text-stone-300/90">
              {featuredInsight.subtitle}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {insightThemes.map((item) => (
                <div key={item.title} className="rounded-2xl border border-stone-light/20 bg-black/20 p-4">
                  <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">
                    {item.label}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-stone-200/90">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-stone-light/25 bg-black/28 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                  Recent Updates
                </div>
                <h3 className="mt-2 text-xl font-semibold text-stone-50">最新動態摘要</h3>
              </div>
              <Link href="/news/" className="text-xs text-accent-gold">
                全部消息
              </Link>
            </div>
            <div className="mt-5 space-y-3">
              {latestUpdates.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-stone-light/18 bg-white/[0.035] px-4 py-4 transition hover:border-accent-gold/70 hover:bg-white/[0.055]"
                >
                  <div className="text-sm font-medium leading-7 text-stone-100">{item.title}</div>
                  <div className="mt-1 text-xs text-stone-400">{item.source}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StrategySection() {
  return (
    <section className="border-b border-stone-light/40 bg-[linear-gradient(180deg,#111216_0%,#14161a_48%,#1b1d21_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-6 grid gap-5 sm:mb-8 sm:gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end">
          <div className="rounded-[1.7rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.18))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.3)] sm:rounded-[2rem] sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Advisory Scope
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
              服務與策略
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-300/90 sm:text-base">
              我們結合投資銀行與產業顧問的視角，為企業設計兼顧股權、債權與結構性工具的整體方案，
              協助企業於關鍵節點取得所需資金與夥伴。
            </p>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3">
              {[
                ["Structuring", "交易架構與資本安排"],
                ["Execution", "跨團隊協調與節奏管理"],
                ["Positioning", "市場定位與成長規劃"],
              ].map(([label, text]) => (
                <div key={label} className="rounded-2xl border border-stone-light/20 bg-black/25 p-4">
                  <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">{label}</div>
                  <div className="mt-2 text-sm font-medium text-stone-100">{text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-stone-light/30 bg-black/35 p-4 text-sm text-stone-300 shadow-[0_18px_40px_rgba(0,0,0,0.25)] sm:rounded-[2rem] sm:p-5">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Approach
            </div>
            <p className="mt-3 leading-relaxed">
              墨石資本以結構設計、交易可行性與執行節奏為核心，協助企業在不同發展階段建立合宜的資本市場方案。
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          <div className="rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:border-accent-gold/70">
            <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-400">
              M&A / Restructuring
            </div>
            <div className="mt-3 text-base font-semibold text-stone-100">
              併購與重組顧問
            </div>
            <p className="mt-3 text-sm leading-7 text-stone-300/90">
              協助企業評估標的、設計交易架構並進行談判與整合，包含跨境併購與產業整合專案。
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:border-accent-gold/70">
            <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-400">
              Private Placement
            </div>
            <div className="mt-3 text-base font-semibold text-stone-100">
              私募融資與過橋融資
            </div>
            <p className="mt-3 text-sm leading-7 text-stone-300/90">
              為成長期企業媒合策略投資人與金融機構，設計股權、可轉換工具與過橋融資解決方案。
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:border-accent-gold/70">
            <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-400">
              Capital Markets
            </div>
            <div className="mt-3 text-base font-semibold text-stone-100">
              上市與資本市場規劃
            </div>
            <p className="mt-3 text-sm leading-7 text-stone-300/90">
              依產業屬性與公司階段，協助評估適合的資本市場（含美股與亞洲市場），並規劃上市前準備與持續性資訊揭露。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceProcessSection() {
  const steps = [
    ["01", "Initial Review", "釐清公司階段、股權結構、資金需求與策略目標。"],
    ["02", "Structure Design", "設計交易架構、投資條件、時程與關鍵文件需求。"],
    ["03", "Market Alignment", "協調投資人、策略夥伴、顧問與跨境資源。"],
    ["04", "Execution Support", "支援談判、溝通、節奏管理與後續資本市場準備。"],
  ];

  return (
    <section className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#1b1d21_0%,#111216_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
              Engagement Model
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
              以階段式流程降低交易不確定性
            </h2>
            <p className="mt-4 text-sm leading-8 text-stone-300/90 sm:text-base">
              墨石資本的工作重點不只在於提出方案，更在於將策略轉換為可執行的節奏、文件、溝通對象與資本市場準備。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map(([index, title, body]) => (
              <div key={title} className="rounded-[1.35rem] border border-stone-light/22 bg-white/[0.035] p-5">
                <div className="text-[0.68rem] font-semibold text-accent-gold">{index}</div>
                <h3 className="mt-3 text-base font-semibold text-stone-100">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-300/88">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewsSection() {
  return (
    <section className="border-b border-stone-light/40 bg-[linear-gradient(180deg,#0b0c0f_0%,#101114_42%,#17191d_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-6 grid gap-5 sm:mb-8 sm:gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-end">
          <div className="rounded-[1.7rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.16))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.3)] sm:rounded-[2rem] sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Media & Updates
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
              最新消息與媒體報導
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-300/90 sm:text-base">
              以下連結節錄自公開媒體與專欄，涵蓋墨石資本相關資訊、創辦人觀點以及團隊成員在人工智慧與產業應用上的分享。
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-stone-light/25 bg-black/30 p-4 text-sm text-stone-300 shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-5">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Notice
            </div>
            <p className="mt-3 leading-relaxed">
              連結將開啟外部網站，相關內容與觀點由各原發布單位與作者提供，本站僅就公開資訊進行整理與索引。
            </p>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {newsItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[1.35rem] border border-stone-light/30 bg-black/35 px-4 py-4 text-sm text-stone-200 shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition hover:border-accent-gold/80 hover:bg-white/[0.04] sm:rounded-[1.6rem] sm:px-5 sm:py-5"
            >
              <div className="mb-3 text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">
                External Coverage
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="max-w-3xl text-[0.95rem] font-medium text-stone-50 sm:text-base">{item.title}</div>
                <div className="text-xs text-stone-400 sm:text-right">
                  {item.source}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="border-b border-stone-light/40 bg-[linear-gradient(180deg,#0f1013_0%,#111216_44%,#17191d_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-6 grid gap-5 sm:mb-8 sm:gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-end">
          <div className="rounded-[1.7rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.18))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.3)] sm:rounded-[2rem] sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Team Overview
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
            投資團隊
          </h2>
            <p className="mt-4 text-sm leading-8 text-stone-300/90 sm:text-base">
              團隊成員具多年投資銀行、資本市場與企業經營實務經驗，熟悉跨境規範與產業動態，
              能在不同總體環境下為企業與投資人設計合宜的解決方案。
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-stone-light/25 bg-black/30 p-4 text-sm text-stone-300 shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-5">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Perspective
            </div>
            <p className="mt-3 leading-relaxed">
              團隊背景橫跨資本市場、科技、醫美健康與跨界整合，能就企業不同發展階段提供更貼近實務的策略支援。
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-stone-100">
                  張義發 I-fa Chang
                </div>
                <div className="text-xs text-stone-400">
                  創辦人兼負責人
                </div>
                <div className="mt-1 text-[0.7rem] text-stone-400">
                  E-mail：
                  <TrackedEmailLink
                    email="ivan@inkstonecapital.com"
                    context="team_ivan"
                    className="ml-1 font-mono text-stone-200 hover:text-accent-gold"
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-stone-300/90">
              墨石資本創辦人，長期專注於中小企業跨境資本運作與國際市場佈局，具備豐富實務案例與產業人脈。
              近年亦參與多項新經濟與科技相關投資與企業發展規劃。
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-stone-100">
                  田江森 Jiangsen Tian
                </div>
                <div className="text-xs text-stone-400">
                  首席科技投資長
                </div>
                <div className="mt-1 text-[0.7rem] text-stone-400">
                  E-mail：
                  <TrackedEmailLink
                    email="tian@partner.inkstonecapital.com"
                    context="team_jiangsen_tian"
                    className="ml-1 font-mono text-stone-200 hover:text-accent-gold"
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-stone-300/90">
              美國紐約市立大學電腦科學博士，曾任貝爾實驗室研究員與創業公司技術主管，後加入微軟亞洲研究院，
              歷任技術轉化工程總監與副院長等職務，累積超過二十年人工智慧與雲端服務研發經驗。
              目前亦擔任 Yushan.AI 首席人工智慧科學家，專注於AI技術在實體經濟與產業升級中的應用。
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-stone-100">
                  Kevin Vassily
                </div>
                <div className="text-xs text-stone-400">
                  Senior Advisor
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-stone-300/90">
              Kevin Vassily 具跨資本市場、金融科技與上市公司治理經驗，曾於 2021 年出任 iPower Inc.（Nasdaq: IPW）
              的 Chief Financial Officer，並於同年加入董事會，後於 2025 年離任。加入 iPower 前，他曾擔任 Facteus 的市場發展副總裁，
              亦曾於 Go Capture、Woodseer 與 Prometheus Fund 等機構參與策略、產品與業務發展工作，長期涉獵資本市場、
              數據服務與跨境投資相關領域。
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-stone-100">
                  孔靖媛 Nico Kung
                </div>
                <div className="text-xs text-stone-400">
                  醫美與抗衰老產業顧問
                </div>
                <div className="mt-1 text-[0.7rem] text-stone-400">
                  E-mail：
                  <TrackedEmailLink
                    email="nico.kung@partner.inkstonecapital.com"
                    context="team_nico_kung"
                    className="ml-1 font-mono text-stone-200 hover:text-accent-gold"
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-stone-300/90">
              孔靖媛女士為資深醫學美容與抗衰老領域專業人士，於醫美健康產業深耕逾二十年，
              長期專注於醫學美容技術應用、抗衰老管理及美容健康產業發展，累積豐富的專業實務經驗與產業洞察能力。
              其職業生涯曾於中國及韓國醫學美容相關機構從事專業工作與產業交流，熟悉亞洲醫學美容產業技術發展與市場趨勢，
              具備跨國產業經驗與國際視野。
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-stone-100">
                  陳柏銘 Chen Po-Ming
                </div>
                <div className="text-xs text-stone-400">
                  資源整合與跨界策展顧問
                </div>
                <div className="mt-1 text-[0.7rem] text-stone-400">
                  E-mail：
                  <TrackedEmailLink
                    email="popoming.chen@partner.inkstonecapital.com"
                    context="team_chen_po_ming"
                    className="ml-1 font-mono text-stone-200 hover:text-accent-gold"
                  />
                </div>
              </div>
              <a
                href="/cv-chen-po-ming.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-light/40 px-3 py-1 text-[0.7rem] text-stone-300 transition hover:border-accent-gold/70 hover:text-stone-100"
              >
                查看 CV
              </a>
            </div>
            <p className="mt-4 text-sm leading-7 text-stone-300/90">
              畢業於世新大學公共傳播學系，專長資源整合、PR 規劃與跨界策展，產業經歷橫跨電影、公關、視覺科技、
              文旅與園區開發。曾任 BD ART 弼達多媒體藝術行銷有限公司總經理、The Pan Bay 大鵬灣國際開發有限公司總管理處總監、
              杭州晴光科技有限公司創辦人暨執行長等職務，並參與新北市電影藝術節、宜蘭國際綠色影展、文旅景區規劃與 BOT 開發案等專案。
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-400">
              目前掛職安泰商業銀行股份有限公司副董事長特別助理，並擔任象藝創意有限公司業務總監。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamOperatingSection() {
  const capabilities = [
    ["Capital Markets", "資本市場與上市規劃判斷"],
    ["Technology", "AI 與新經濟產業理解"],
    ["Health & Consumer", "健康科技、醫美與消費品牌洞察"],
    ["Cross-Functional", "資源整合、品牌、內容與合作推進"],
  ];

  return (
    <section className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#17191d_0%,#101115_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[1.8rem] border border-stone-light/25 bg-white/[0.035] p-5 sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
              How We Work
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
              以多元專業形成共同決策框架
            </h2>
            <p className="mt-4 text-sm leading-8 text-stone-300/90 sm:text-base">
              團隊分工以議題為核心，依專案需求組合資本市場、技術、產業與品牌資源，讓策略判斷與實際執行能保持一致。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map(([title, body]) => (
              <div key={title} className="rounded-[1.25rem] border border-stone-light/22 bg-black/24 p-4">
                <div className="text-[0.64rem] uppercase tracking-[0.18em] text-accent-gold">
                  {title}
                </div>
                <div className="mt-2 text-sm leading-7 text-stone-200">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section className="border-b border-stone-light/40 bg-[linear-gradient(180deg,#17191d_0%,#14161a_45%,#0f1013_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-6 grid gap-5 sm:mb-8 sm:gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-end">
          <div className="rounded-[1.7rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.18))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.3)] sm:rounded-[2rem] sm:p-6">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Affiliated Companies
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
              相關公司
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-300/90 sm:text-base">
              墨石資本長期關注人工智慧、健康科技與消費品牌等領域，以下為目前網站所介紹的相關公司與品牌。
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-stone-light/25 bg-black/30 p-4 text-sm text-stone-300 shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-5">
            <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
              Navigation
            </div>
            <p className="mt-3 leading-relaxed">
              點擊各卡片即可前往品牌或公司官方網站，以了解其產品定位、技術方向與市場發展。
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {affiliatedCompanies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.2))] shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:border-accent-gold/80 hover:bg-white/[0.04]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-stone-light/15 bg-[radial-gradient(circle_at_top,rgba(196,161,90,0.18),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.08))]">
                <Image
                  src={company.imageSrc}
                  alt={company.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={`${company.imageClassName} transition duration-500 group-hover:scale-[1.03]`}
                />
              </div>
              <div className="p-6">
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-400">
                  {company.category}
                </div>
                <div className="mt-3 text-base font-semibold text-stone-100">{company.name}</div>
                <p className="mt-3 text-sm leading-7 text-stone-300/90">{company.description}</p>
                <div className="mt-4 text-xs text-accent-gold">{company.domain}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyEcosystemSection() {
  const themes = [
    ["AI Infrastructure", "Yushan.AI", "地端模型、企業 AI、資料安全與產業應用。"],
    ["Health Technology", "Docter Inc.", "非接觸式感測、智慧照護與健康管理場景。"],
    ["Consumer Brand", "大頭叔叔", "在地食品品牌、創意包裝與消費市場拓展。"],
  ];

  return (
    <section className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#0f1013_0%,#15161a_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-7 max-w-3xl">
          <div className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
            Ecosystem Map
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
            以產業主題理解相關公司的策略位置
          </h2>
          <p className="mt-4 text-sm leading-8 text-stone-300/90 sm:text-base">
            相關公司不是單純名單，而是墨石資本關注的產業方向：技術基礎、健康服務與消費品牌如何進入可擴張的商業化階段。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {themes.map(([theme, company, body]) => (
            <div key={theme} className="rounded-[1.5rem] border border-stone-light/24 bg-white/[0.035] p-5">
              <div className="text-[0.64rem] uppercase tracking-[0.18em] text-accent-gold">
                {theme}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-stone-50">{company}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300/90">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="border-t border-stone-light/20 bg-[linear-gradient(180deg,#0d0e11_0%,#09090b_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:py-18">
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-[1.8rem] border border-stone-light/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.18))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:rounded-[2.2rem] sm:p-7">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
                  Contact
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
                  聯絡我們
                </h2>
              </div>
              <div className="hidden rounded-full border border-accent-gold/35 bg-accent-gold/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-accent-gold sm:block">
                Reach Us
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-300/90 sm:text-base sm:leading-8">
              如欲進一步了解墨石資本，或分享合作與投資機會，歡迎透過電話或電子郵件與我們聯繫。我們將依需求安排後續溝通，提供更適切的交流與協作方式。
            </p>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-stone-light/20 bg-black/25 p-4">
                <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">
                  Telephone
                </div>
                <div className="mt-2 font-mono text-sm text-stone-100">+886 2 7755 7057</div>
              </div>
              <div className="rounded-2xl border border-stone-light/20 bg-black/25 p-4">
                <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">
                  E-mail
                </div>
                <div className="mt-2 text-sm">
                  <TrackedEmailLink
                    email="corp@inkstonecapital.com"
                    context="contact_section"
                    className="font-mono text-stone-100 hover:text-accent-gold"
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-stone-light/20 bg-black/25 p-4">
                <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">
                  Taiwan Office
                </div>
                <div className="mt-2 font-mono text-sm leading-relaxed text-stone-100">
                  高雄市輔仁路 155 號 4 樓
                </div>
              </div>
              <div className="rounded-2xl border border-stone-light/20 bg-black/25 p-4">
                <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">
                  U.S. Presence
                </div>
                <div className="mt-2 font-mono text-sm leading-relaxed text-stone-100">
                  Mercer Island, Washington, United States
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-[1.15rem] border border-stone-light/20 bg-black/25 p-4 sm:mt-5 sm:rounded-2xl">
              <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-500">
                Social Media
              </div>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {[
                  ["Facebook", "https://www.facebook.com/Ifachang/", "facebook"],
                  ["X", "https://x.com/ifachang_us", "x"],
                  ["Threads", "https://www.threads.com/@ifachang", "threads"],
                  ["LinkedIn", "https://www.linkedin.com/in/ifachang/", "linkedin"],
                ].map(([label, href, platform]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-light/25 bg-white/[0.04] text-stone-200 transition hover:border-accent-gold/70 hover:bg-accent-gold/10 hover:text-stone-50"
                  >
                    <SocialIcon platform={platform as "facebook" | "x" | "threads" | "linkedin"} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-5">
            <div className="rounded-[1.7rem] border border-stone-light/28 bg-black/30 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-5">
              <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                Communication
              </div>
              <div className="mt-3 text-base font-semibold text-stone-100 sm:text-lg">
                以需求導向安排後續接洽
              </div>
              <div className="mt-4 space-y-2.5 sm:space-y-3">
                {[
                  "初步了解服務方向與合作需求。",
                  "釐清可公開資訊與後續討論範圍。",
                  "由團隊評估適合的聯繫窗口與回覆節奏。",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-stone-light/18 bg-white/[0.04] px-3.5 py-3 sm:rounded-2xl sm:px-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-accent-gold/35 bg-accent-gold/10 text-[0.64rem] font-semibold text-accent-gold">
                        0{index + 1}
                      </span>
                      <p className="text-[0.82rem] leading-relaxed text-stone-300/90">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.7rem] border border-stone-light/28 bg-black/35 p-4 text-xs text-stone-400 shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-5">
              <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-500">
                Notice
              </div>
              <p className="mt-3 leading-relaxed">
                本網站內容僅供一般資訊之用，不構成任何形式之證券招攬、要約或投資建議。投資涉及風險，過去績效不代表未來表現。
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-light/25 pt-5 text-[0.7rem] text-stone-500">
          © {new Date().getFullYear()} Inkstone Capital 墨石資本. All rights reserved.
        </div>
      </div>
    </section>
  );
}
