export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-light/40 bg-gradient-to-b from-ink-dark via-ink to-stone">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:py-32">
        <div className="flex-1 space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-stone-light/60 bg-stone/60 px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone-200/80 backdrop-blur">
            Inkstone Capital
            <span className="h-1 w-1 rounded-full bg-accent-gold" />
            墨石資本
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-stone-200">連結資本與實體經濟</span>
            <span className="block bg-gradient-to-r from-accent-gold to-stone-100 bg-clip-text text-transparent">
              穩健推動企業成長
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-stone-300/80 sm:text-base">
            墨石資本（Inkstone Capital）由張義發先生於 2012 年創立，業務橫跨美國、台灣與中國大陸，
            專注協助中小企業在關鍵轉型期完成資本結構優化與國際化佈局。
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-accent-gold px-6 py-2.5 text-sm font-medium text-ink-dark shadow-[0_0_0_1px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:bg-accent-gold/90 hover:shadow-[0_18px_35px_rgba(0,0,0,0.45)]">
              與我們交流
            </button>
            <button className="rounded-full border border-stone-light/70 px-6 py-2.5 text-sm font-medium text-stone-100/90 transition hover:border-accent-gold/80 hover:bg-stone/60">
              了解投資理念
            </button>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-xs text-stone-400">
            <div>
              <div className="text-sm font-semibold text-stone-100">深耕中小企業</div>
              <div>聚焦實體與新經濟領域</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-100">服務範疇</div>
              <div>併購重組 · 私募融資 · 上市規劃</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-100">區域佈局</div>
              <div>美國 · 台灣 · 中國大陸</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-stone-light/50 bg-gradient-to-br from-ink-dark via-stone to-ink/80 p-6 shadow-[0_32px_80px_rgba(0,0,0,0.65)]">
            <div className="mb-4 flex items-center justify-between text-xs text-stone-400">
              <span>Portfolio resilience</span>
              <span>Multi-cycle view</span>
            </div>
            <div className="space-y-5">
              <div className="rounded-2xl bg-black/50 p-4">
                <div className="mb-2 flex items-center justify-between text-xs text-stone-400">
                  <span>Long-term IRR</span>
                  <span className="text-accent-gold/90">Illustrative</span>
                </div>
                <div className="flex items-end gap-1">
                  <div className="h-10 flex-1 rounded-t-md bg-gradient-to-t from-stone-light/70 to-stone-300/80" />
                  <div className="h-14 flex-1 rounded-t-md bg-gradient-to-t from-stone-light/70 to-stone-100" />
                  <div className="h-20 flex-1 rounded-t-md bg-gradient-to-t from-stone-light/70 to-accent-gold" />
                  <div className="h-16 flex-1 rounded-t-md bg-gradient-to-t from-stone-light/70 to-stone-200" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-stone-300">
                <div className="rounded-xl border border-stone-light/40 bg-black/40 p-3">
                  <div className="text-[0.7rem] uppercase tracking-[0.16em] text-stone-400">Focus</div>
                  <div className="mt-1 text-sm font-semibold text-stone-100">價值成長</div>
                  <p className="mt-1 text-[0.75rem] leading-relaxed">
                    尋找基本面紮實且具結構性成長空間的企業。
                  </p>
                </div>
                <div className="rounded-xl border border-stone-light/40 bg-black/40 p-3">
                  <div className="text-[0.7rem] uppercase tracking-[0.16em] text-stone-400">Approach</div>
                  <div className="mt-1 text-sm font-semibold text-stone-100">深度研究</div>
                  <p className="mt-1 text-[0.75rem] leading-relaxed">
                    結合理性估值與產業洞察，堅持獨立思考。
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-stone-light/40 bg-black/30 px-4 py-3 text-xs text-stone-300">
                <div>
                  <div className="text-[0.7rem] uppercase tracking-[0.16em] text-stone-400">
                    Alignment
                  </div>
                  <div className="mt-1 text-sm font-semibold text-stone-100">
                    與企業、投資人長期同路
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[0.7rem] text-accent-gold/90">
                  Long-term partner
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

