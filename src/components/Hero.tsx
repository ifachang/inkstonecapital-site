import Link from "next/link";

const operatingStats = [
  {
    label: "Founded",
    value: "2012",
    detail: "Established in Mercer Island",
  },
  {
    label: "Coverage",
    value: "3 Regions",
    detail: "United States · Taiwan · Greater China",
  },
  {
    label: "Core Work",
    value: "Capital Structuring",
    detail: "M&A, private placement, listing strategy",
  },
];

const serviceSignals = [
  "併購重組與跨境交易架構",
  "私募融資與策略資本媒合",
  "上市規劃與資本市場準備",
  "企業成長與產業升級顧問",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-light/40 bg-[radial-gradient(circle_at_top_left,rgba(196,161,90,0.22),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,#050506_0%,#0a0a0b_44%,#16171a_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent-gold/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-wrap items-center gap-2.5 text-[0.64rem] uppercase tracking-[0.16em] text-stone-400 sm:gap-3 sm:text-[0.72rem] sm:tracking-[0.22em]">
              <span className="rounded-full border border-stone-light/50 bg-white/5 px-3 py-1">
                Inkstone Capital
              </span>
              <span className="h-1 w-1 rounded-full bg-accent-gold" />
              <span>Strategic Capital Advisory</span>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <h1 className="max-w-4xl text-[2.2rem] font-semibold tracking-tight text-stone-50 sm:text-5xl xl:text-6xl">
                以跨境視野整合
                <span className="mt-2 block bg-gradient-to-r from-accent-gold via-stone-100 to-stone-300 bg-clip-text text-transparent">
                  資本、市場與企業成長節奏
                </span>
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-stone-300/88 sm:text-base sm:leading-8">
                墨石資本長期聚焦中小企業資本結構優化、跨境融資安排與上市前策略規劃，
                以兼顧交易結構、產業理解與執行節奏的方式，協助企業在關鍵轉型期建立更穩健的成長路徑。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {operatingStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.15rem] border border-stone-light/30 bg-black/30 p-3.5 shadow-[0_16px_35px_rgba(0,0,0,0.25)] sm:rounded-2xl sm:p-4"
                >
                  <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                    {item.label}
                  </div>
                  <div className="mt-2 text-base font-semibold text-stone-50 sm:text-lg">{item.value}</div>
                  <div className="mt-1 text-xs leading-relaxed text-stone-400">{item.detail}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/#contact"
                className="w-full rounded-full bg-accent-gold px-6 py-3 text-center text-sm font-semibold text-ink-dark shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#d3af67] sm:w-auto"
              >
                與我們交流
              </Link>
              <Link
                href="/services/"
                className="w-full rounded-full border border-stone-light/50 bg-white/5 px-6 py-3 text-center text-sm font-medium text-stone-100 transition hover:border-accent-gold/70 hover:bg-white/8 sm:w-auto"
              >
                查看核心服務
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-12 hidden h-40 w-40 rounded-full bg-accent-gold/12 blur-3xl lg:block" />
            <div className="rounded-[1.7rem] border border-stone-light/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.16))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.45)] sm:rounded-[2rem] sm:p-5">
              <div className="rounded-[1.35rem] border border-stone-light/25 bg-black/35 p-4 sm:rounded-[1.6rem] sm:p-5">
                <div className="flex items-start justify-between gap-4 border-b border-stone-light/20 pb-4">
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">
                      Strategic Focus
                    </div>
                    <div className="mt-2 text-lg font-semibold text-stone-50 sm:text-xl">
                      Cross-Border Capital Dashboard
                    </div>
                  </div>
                  <div className="rounded-full border border-accent-gold/35 bg-accent-gold/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-accent-gold">
                    Active
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
                  {serviceSignals.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.15rem] border border-stone-light/20 bg-white/5 px-4 py-3.5 text-sm leading-relaxed text-stone-200 sm:rounded-2xl sm:py-4"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-accent-gold" />
                        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone-500">
                          Focus
                        </span>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 sm:mt-5 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[1.15rem] border border-stone-light/20 bg-black/28 p-4 sm:rounded-2xl">
                    <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                      Regional Matrix
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        ["United States", "資本市場與架構設計"],
                        ["Taiwan", "產業鏈結與成長策略"],
                        ["Greater China", "跨境資源與合作網絡"],
                      ].map(([title, detail]) => (
                        <div key={title} className="flex items-start justify-between gap-3 text-sm">
                          <div className="font-medium text-stone-100">{title}</div>
                          <div className="max-w-[10rem] text-right text-xs leading-relaxed text-stone-400">
                            {detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.15rem] border border-stone-light/20 bg-black/28 p-4 sm:rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div className="text-[0.68rem] uppercase tracking-[0.2em] text-stone-500">
                        Capital Readiness
                      </div>
                      <div className="text-xs text-accent-gold">Illustrative</div>
                    </div>
                    <div className="mt-4 flex items-end gap-2">
                      <div className="flex-1 rounded-t-xl bg-gradient-to-t from-stone-light to-stone-400/80" style={{ height: 82 }} />
                      <div className="flex-1 rounded-t-xl bg-gradient-to-t from-stone-light to-stone-300/85" style={{ height: 124 }} />
                      <div className="flex-1 rounded-t-xl bg-gradient-to-t from-accent-gold/80 to-accent-gold" style={{ height: 164 }} />
                      <div className="flex-1 rounded-t-xl bg-gradient-to-t from-stone-light to-stone-200/85" style={{ height: 138 }} />
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-stone-500">
                      <div>Assess</div>
                      <div>Structure</div>
                      <div>Execute</div>
                      <div>Expand</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
