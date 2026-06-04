import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "../../../components/Sections";
import { SiteHeader } from "../../../components/SiteHeader";

const photos = [
  {
    src: "/ishigaki-beef-visit-01.png",
    alt: "Ishigaki cattle at a local inspection site in Okinawa",
    label: "Source Visit",
    caption: "石垣牛產地現地訪查",
  },
  {
    src: "/ishigaki-beef-visit-02.png",
    alt: "Nico Kung visiting Okinawa during the Ishigaki beef project study",
    label: "Okinawa Field Study",
    caption: "Nico Kung 親赴沖繩考察",
  },
  {
    src: "/ishigaki-beef-visit-03.png",
    alt: "Ishigaki cattle facility reviewed during the project study",
    label: "Facility Context",
    caption: "石垣牛相關設施與供應鏈環境",
  },
] as const;

const checkpoints = [
  {
    title: "源頭設施核備",
    titleEn: "Approved origin facility",
    body: "石垣牛若要正式商用直送台灣，源頭屠宰、分切、包裝流程需銜接台灣核准輸入設施與日本官方出口要求。",
  },
  {
    title: "檢疫與衛生雙文件",
    titleEn: "Quarantine and health documents",
    body: "進口批次需配合日本官方證明文件、台灣邊境食品輸入查驗與動植物防疫檢疫程序，確保流程可被完整追溯。",
  },
  {
    title: "冷鏈與最短航線",
    titleEn: "Cold chain and shortest route",
    body: "石垣島與台灣距離近，項目評估重點包含船運、空運與冷藏冷凍條件，讓高端肉品在鮮度、成本與穩定性之間取得平衡。",
  },
] as const;

export const metadata: Metadata = {
  title: "Nico Kung 親赴沖繩考察石垣牛直送台灣項目",
  description:
    "墨石資本顧問 Nico Kung 親赴沖繩考察石垣牛直送台灣項目，聚焦源頭設施、輸入文件、邊境查驗與冷鏈物流可行性。",
  alternates: {
    canonical: "/news/ishigaki-beef-direct-taiwan-visit/",
  },
};

export default function IshigakiBeefDirectTaiwanVisitPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
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
              Project Visit
            </div>
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
              Okinawa / Ishigaki Beef
            </div>
            <div className="text-xs text-stone-500">2026.06.04</div>
          </div>

          <h1 className="mt-5 max-w-4xl text-[2rem] font-semibold tracking-tight text-stone-50 sm:text-5xl">
            Nico Kung 親赴沖繩考察石垣牛直送台灣項目
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-stone-300/92 sm:text-lg sm:leading-9">
            墨石資本顧問 Nico Kung 近日前往沖繩，針對石垣牛從產地、認證、檢疫到冷鏈運輸的可行性進行現地訪查，
            評估石垣島至台灣高端和牛正式商用直送路徑。
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-stone-400 sm:text-base sm:leading-8">
            Nico Kung visited Okinawa for an on-site review of a potential Ishigaki beef direct-to-Taiwan route,
            focusing on origin readiness, official documentation, border inspection requirements and temperature-controlled logistics.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
            <div
              className="relative min-h-[320px] overflow-hidden border border-stone-light/25 bg-black/35 bg-cover bg-center sm:min-h-[520px]"
              role="img"
              aria-label={photos[0].alt}
              style={{ backgroundImage: `url(${photos[0].src})` }}
            >
              <PhotoCaption label={photos[0].label} caption={photos[0].caption} />
            </div>
            <div className="grid gap-3">
              {photos.slice(1).map((photo) => (
                <div
                  key={photo.src}
                  className="relative min-h-[250px] overflow-hidden border border-stone-light/25 bg-black/35 bg-cover bg-center"
                  role="img"
                  aria-label={photo.alt}
                  style={{ backgroundImage: `url(${photo.src})` }}
                >
                  <PhotoCaption label={photo.label} caption={photo.caption} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="space-y-5">
              <section className="border border-stone-light/22 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                  Project Summary
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-stone-50">
                  從產地到台灣餐桌，重點不只是距離，而是合規流程能否銜接
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-8 text-stone-300/92 sm:text-base">
                  <p>
                    石垣島與台灣距離極近，理論上具備縮短物流時間與降低運輸成本的優勢；但高端生鮮肉品的跨境流通並非旅客攜帶商品，
                    必須走正式商用進口貿易渠道，並經過輸出國設施、官方證明、台灣邊境查驗與冷鏈配送等多重環節。
                  </p>
                  <p>
                    本次訪查聚焦於石垣牛直送台灣的可行性判斷：包括當地供應鏈條件、肉品處理設施是否能符合輸台要求、
                    日本端證明文件如何銜接，以及抵台後的檢疫、食品查驗、海關與冷鏈配送流程。
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-stone-400">
                  The visit frames Ishigaki beef as a cross-border trade and compliance project, not a simple sourcing trip.
                  The key question is whether origin facilities, Japan-issued certificates, Taiwan border inspection and cold-chain execution can operate as one reliable route.
                </p>
              </section>

              <section className="border border-stone-light/22 bg-black/22 p-5 sm:p-6">
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                  Compliance Focus
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {checkpoints.map((item) => (
                    <div key={item.title} className="border border-stone-light/20 bg-white/[0.035] p-4">
                      <div className="text-[0.64rem] uppercase tracking-[0.16em] text-accent-gold">
                        {item.titleEn}
                      </div>
                      <h3 className="mt-3 text-base font-semibold text-stone-50">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-stone-300/90">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="border border-stone-light/24 bg-white/[0.035] p-5">
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                Field Notes
              </div>
              <div className="mt-4 space-y-4">
                {[
                  ["Location", "沖繩 / 石垣牛供應鏈"],
                  ["Advisor", "Nico Kung"],
                  ["Focus", "源頭、文件、查驗、冷鏈"],
                  ["Route", "石垣島至台灣"],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-stone-light/15 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-[0.64rem] uppercase tracking-[0.16em] text-stone-500">
                      {label}
                    </div>
                    <div className="mt-2 text-sm font-medium leading-6 text-stone-100">{value}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-6 text-stone-500">
                實際進口仍須以台灣主管機關最新核准輸入設施名單、邊境查驗規定、日本官方證明文件與海關申報結果為準。
              </p>
            </aside>
          </div>
        </div>
      </article>
      <ContactSection />
    </main>
  );
}

function PhotoCaption({ label, caption }: { label: string; caption: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 to-transparent p-4">
      <div className="text-[0.64rem] uppercase tracking-[0.18em] text-accent-gold">
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-stone-50">{caption}</div>
    </div>
  );
}
