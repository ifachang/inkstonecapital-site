export function AboutSection() {
  return (
    <section className="border-b border-stone-light/40 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-start">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-stone-50 sm:text-2xl">
              關於墨石資本
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-300/90 sm:text-base">
              墨石資本（Inkstone Capital）成立於 2012 年，由張義發先生於美國華盛頓州 Mercer Island 創立，
              目前營運據點位於高雄市，並在美國與中國大陸擁有長期合作夥伴。團隊深耕跨境資本市場與企業財務顧問服務，
              協助客戶在不同法域之間銜接資本與策略資源。
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-300/80 sm:text-base">
              我們專注服務成長中的中小企業（Small Cap），涵蓋傳統產業升級、新經濟與科技應用等領域，透過併購重組、
              私募融資、上市規劃與過橋融資等工具，協助企業完成從在地成長到登陸美國 Nasdaq / NYSE 資本市場的關鍵里程碑，
              同時兼顧公司治理與長期價值。
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-stone-light/40 bg-gradient-to-br from-black/60 via-stone/80 to-ink/80 p-5 text-xs text-stone-300 sm:text-sm">
            <div className="flex items-center justify-between border-b border-stone-light/30 pb-3">
              <div>
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-400">
                  Core principles
                </div>
                <div className="mt-1 font-medium text-stone-100">
                  紀律 · 獨立 · 穩健
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-gold" />
                <div>
                  <div className="font-medium text-stone-100">跨境結構設計經驗</div>
                  <p className="text-[0.8rem] leading-relaxed text-stone-300/90">
                    熟悉多地監管與資本市場規則，為企業量身訂製兼顧成長與風險控管的交易架構。
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-gold" />
                <div>
                  <div className="font-medium text-stone-100">長期實務與落地能力</div>
                  <p className="text-[0.8rem] leading-relaxed text-stone-300/90">
                    結合理論與實務操作，從洽談、估值、盡職調查到交割與整合，提供一站式顧問服務。
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-gold" />
                <div>
                  <div className="font-medium text-stone-100">與企業家並肩同行</div>
                  <p className="text-[0.8rem] leading-relaxed text-stone-300/90">
                    以前瞻策略與務實執行為核心，陪伴企業從在地走向區域乃至國際資本市場。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StrategySection() {
  return (
    <section className="border-b border-stone-light/40 bg-gradient-to-b from-ink to-stone">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-stone-50 sm:text-2xl">
              服務與策略
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-300/90 sm:text-base">
              我們結合投資銀行與產業顧問的視角，為企業設計兼顧股權、債權與結構性工具的整體方案，
              協助企業於關鍵節點取得所需資金與夥伴。
            </p>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-stone-400 sm:text-sm">
            以下範疇為示意，可依實際基金策略調整。待你提供具體定位與案例後，我可以為你改寫成精準版本。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-stone-light/40 bg-black/40 p-5">
            <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-400">
              M&A / Restructuring
            </div>
            <div className="mt-2 text-sm font-semibold text-stone-100">
              併購與重組顧問
            </div>
            <p className="mt-2 text-xs leading-relaxed text-stone-300/90">
              協助企業評估標的、設計交易架構並進行談判與整合，包含跨境併購與產業整合專案。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-light/40 bg-black/40 p-5">
            <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-400">
              Private Placement
            </div>
            <div className="mt-2 text-sm font-semibold text-stone-100">
              私募融資與過橋融資
            </div>
            <p className="mt-2 text-xs leading-relaxed text-stone-300/90">
              為成長期企業媒合策略投資人與金融機構，設計股權、可轉換工具與過橋融資解決方案。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-light/40 bg-black/40 p-5">
            <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-400">
              Capital Markets
            </div>
            <div className="mt-2 text-sm font-semibold text-stone-100">
              上市與資本市場規劃
            </div>
            <p className="mt-2 text-xs leading-relaxed text-stone-300/90">
              依產業屬性與公司階段，協助評估適合的資本市場（含美股與亞洲市場），並規劃上市前準備與持續性資訊揭露。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import fs from "fs/promises";
import path from "path";

async function loadNews() {
  const filePath = path.join(process.cwd(), "src", "data", "news.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as { title: string; href: string; source: string }[];
}

export async function NewsSection() {
  const newsItems = await loadNews();
  return (
    <section className="border-b border-stone-light/40 bg-ink-dark">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-stone-50 sm:text-2xl">
              最新消息與媒體報導
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-300/90 sm:text-base">
              以下連結節錄自公開媒體與專欄，涵蓋墨石資本相關資訊、創辦人觀點以及團隊成員在人工智慧與產業應用上的分享。
            </p>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-stone-500 sm:text-sm">
            連結將開啟外部網站，相關內容與觀點由各原發布單位與作者提供。
          </p>
        </div>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-stone-light/40 bg-black/40 px-4 py-3 text-sm text-stone-200 transition hover:border-accent-gold/80 hover:bg-black/60"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="font-medium text-stone-50">{item.title}</div>
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
    <section className="border-b border-stone-light/40 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-xl font-semibold tracking-tight text-stone-50 sm:text-2xl">
            投資團隊
          </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-300/90 sm:text-base">
              團隊成員具多年投資銀行、資本市場與企業經營實務經驗，熟悉跨境規範與產業動態，
              能在不同總體環境下為企業與投資人設計合宜的解決方案。
            </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-stone-light/40 bg-black/40 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-stone-100">
                  張義發 I-fa Chang
                </div>
                <div className="text-xs text-stone-400">
                  創辦人兼負責人
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-stone-300/90">
              墨石資本創辦人，長期專注於中小企業跨境資本運作與國際市場佈局，具備豐富實務案例與產業人脈。
              近年亦參與多項新經濟與科技相關投資與企業發展規劃。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-light/40 bg-black/40 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-stone-100">
                  田江森 Jiangsen Tian
                </div>
                <div className="text-xs text-stone-400">
                  首席科技投資長
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-stone-300/90">
              美國紐約市立大學電腦科學博士，曾任貝爾實驗室研究員與創業公司技術主管，後加入微軟亞洲研究院，
              歷任技術轉化工程總監與副院長等職務，累積超過二十年人工智慧與雲端服務研發經驗。
              目前亦擔任 Yushan.AI 首席人工智慧科學家，專注於AI技術在實體經濟與產業升級中的應用。
            </p>
          </div>
          <div className="rounded-2xl border border-stone-light/40 bg-black/40 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-stone-100">
                  團隊成員（示意）
                </div>
                <div className="text-xs text-stone-400">
                  Senior Advisor / Partner
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-stone-300/90">
              此處可放入其他核心成員或顧問的背景說明，包括產業專長、過往任職機構與代表性專案，待未來名單確認後再行補充。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="bg-ink-dark">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-stone-50 sm:text-xl">
              聯絡我們
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-300/90 sm:text-base">
              如欲進一步了解墨石資本，或分享合作與投資機會，歡迎透過電話或電子郵件與我們聯繫。
            </p>
            <div className="mt-4 space-y-2 text-sm text-stone-300">
              <div>
                電話：
                <span className="font-mono">+886 2 7755 7057</span>
              </div>
              <div>
                E-mail：
                <span className="font-mono">corp@inkstonecapital.com</span>
              </div>
              <div>
                地址：
                <span className="font-mono">高雄市輔仁路 155 號 4 樓</span>
              </div>
              <div className="text-xs text-stone-500">
                上述信箱為示意，可依實際聯絡方式調整。
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-stone-light/40 bg-black/40 p-4 text-xs text-stone-400">
            <div className="text-[0.7rem] uppercase tracking-[0.18em] text-stone-500">
              Notice
            </div>
            <p className="mt-2 leading-relaxed">
              本網站內容僅供一般資訊之用，不構成任何形式之證券招攬、要約或投資建議。
              投資涉及風險，過去績效不代表未來表現。
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-light/40 pt-4 text-[0.7rem] text-stone-500">
          © {new Date().getFullYear()} Inkstone Capital 墨石資本. All rights reserved.
        </div>
      </div>
    </section>
  );
}

