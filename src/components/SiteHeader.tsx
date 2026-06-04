import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/services/", label: "服務" },
  { href: "/team/", label: "團隊" },
  { href: "/companies/", label: "相關公司" },
  { href: "/#insights", label: "觀點與動態" },
  { href: "/news/", label: "最新消息" },
  { href: "/#contact", label: "聯絡" },
];

export function SiteHeader({ currentPath = "/" }: { currentPath?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-light/40 bg-[rgba(5,5,6,0.82)] backdrop-blur-xl">
      <div className="border-b border-stone-light/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[0.64rem] uppercase tracking-[0.16em] text-stone-400 sm:px-6 sm:text-[0.68rem] sm:tracking-[0.18em]">
          <div className="hidden items-center gap-3 sm:flex">
            <span>Cross-Border Advisory</span>
            <span className="h-1 w-1 rounded-full bg-accent-gold/80" />
            <span>United States · Taiwan · Greater China</span>
          </div>
          <div className="ml-auto text-right text-stone-500">
            Inkstone Capital Strategic Advisory Platform
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="group flex items-center gap-3 sm:gap-5">
          <div className="relative h-16 w-16 rounded-[1.35rem] border border-stone-light/30 bg-black/35 p-2.5 transition group-hover:border-accent-gold/60 sm:h-24 sm:w-24 sm:rounded-[1.75rem] sm:p-3">
            <Image
              src="/inkstone-logo.jpg"
              alt="Inkstone Capital 墨石資本標誌"
              fill
              sizes="(max-width: 640px) 64px, 96px"
              className="object-contain p-1.5 sm:p-2"
              priority
            />
          </div>
          <div>
            <div className="text-[0.58rem] uppercase tracking-[0.2em] text-stone-500 sm:text-[0.68rem] sm:tracking-[0.28em]">
              Inkstone Capital
            </div>
            <div className="mt-1 text-sm font-semibold tracking-[0.12em] text-stone-100 sm:text-base sm:tracking-[0.18em]">
              墨石資本
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = item.href === currentPath;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-full border border-accent-gold/50 bg-accent-gold/12 px-4 py-2 text-xs font-medium text-accent-gold"
                    : "rounded-full border border-transparent px-4 py-2 text-xs font-medium text-stone-300 transition hover:border-stone-light/50 hover:bg-white/5 hover:text-stone-100"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-stone-light/10 md:hidden">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 text-sm [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => {
            const active = item.href === currentPath;
            return (
              <Link
                key={`${item.href}-mobile`}
                href={item.href}
                className={
                  active
                    ? "whitespace-nowrap rounded-full border border-accent-gold/50 bg-accent-gold/12 px-3.5 py-2 text-xs font-medium text-accent-gold"
                    : "whitespace-nowrap rounded-full border border-stone-light/20 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-stone-300 transition hover:border-stone-light/50 hover:bg-white/5 hover:text-stone-100"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function PageLead({
  eyebrow,
  title,
  description,
  summaryLabel = "Insight",
  summaryTitle = "以結構化方式展開資訊",
  summaryPoints = [
    "將品牌、服務與團隊資訊分別整理，降低閱讀干擾。",
    "以摘要導流搭配獨立內容頁，兼顧深度與瀏覽效率。",
    "保留後續增修空間，讓網站能隨業務與團隊成長延展。",
  ],
  highlights = [
    { label: "Structured", value: "分頁資訊架構" },
    { label: "Focused", value: "重點內容清晰導覽" },
    { label: "Scalable", value: "支援後續內容擴充" },
  ],
  visual,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  summaryLabel?: string;
  summaryTitle?: string;
  summaryPoints?: string[];
  highlights?: Array<{ label: string; value: string }>;
  visual?: ReactNode;
}) {
  return (
    <section className="border-b border-stone-light/30 bg-[linear-gradient(180deg,#050506_0%,#101116_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:items-end">
          <div>
            <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-400 sm:text-[0.7rem] sm:tracking-[0.24em]">
              {eyebrow}
            </div>
            <h1 className="mt-3 text-[1.95rem] font-semibold tracking-tight text-stone-50 sm:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-300/90 sm:text-base sm:leading-8">
                {description}
              </p>
            ) : null}
            {highlights.length > 0 ? (
              <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-stone-light/20 bg-white/[0.035] px-4 py-3.5 sm:py-4"
                  >
                    <div className="text-[0.62rem] uppercase tracking-[0.16em] text-stone-500 sm:text-[0.64rem] sm:tracking-[0.18em]">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm font-medium text-stone-100">{item.value}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="rounded-[1.35rem] border border-stone-light/25 bg-white/[0.035] p-4 text-sm text-stone-300 sm:rounded-[1.75rem] sm:p-5">
            <div className="flex items-start justify-between gap-4 border-b border-stone-light/15 pb-4">
              <div>
                <div className="text-[0.64rem] uppercase tracking-[0.18em] text-stone-500 sm:text-[0.68rem] sm:tracking-[0.22em]">Perspective</div>
                <div className="mt-2 text-base font-semibold text-stone-100 sm:text-lg">{summaryTitle}</div>
              </div>
              <div className="rounded-full border border-accent-gold/35 bg-accent-gold/10 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.15em] text-accent-gold sm:px-3 sm:text-[0.65rem] sm:tracking-[0.18em]">
                {summaryLabel}
              </div>
            </div>
            <div className="mt-4 space-y-2.5 sm:space-y-3">
              {summaryPoints.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-stone-light/15 bg-black/18 px-3.5 py-3 sm:px-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-accent-gold/35 bg-accent-gold/10 text-[0.64rem] font-semibold text-accent-gold">
                      0{index + 1}
                    </span>
                    <p className="text-[0.8rem] leading-relaxed text-stone-300/90 sm:text-[0.82rem]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            {visual ? <div className="mt-4 sm:mt-5">{visual}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
