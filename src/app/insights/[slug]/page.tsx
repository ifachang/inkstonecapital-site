import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactSection } from "../../../components/Sections";
import { SiteHeader } from "../../../components/SiteHeader";
import { insightItems } from "../../../data/insights";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insightItems.find((item) => item.slug === slug);

  if (!insight) {
    return {};
  }

  return {
    title: `${insight.volume}｜${insight.title}`,
    description: insight.excerpt,
    alternates: {
      canonical: `/insights/${insight.slug}/`,
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = insightItems.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <SiteHeader currentPath="/news/" />
      <article className="border-b border-stone-light/35 bg-[linear-gradient(180deg,#050506_0%,#101116_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <Link
            href="/#insights"
            className="text-sm text-accent-gold transition hover:text-[#d3af67]"
          >
            ← 返回觀點與動態
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-accent-gold/35 bg-accent-gold/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-accent-gold">
              {insight.volume}
            </div>
            <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
              {insight.category}
            </div>
            <div className="text-xs text-stone-500">{insight.date}</div>
          </div>
          <h1 className="mt-5 max-w-4xl text-[2rem] font-semibold tracking-tight text-stone-50 sm:text-5xl">
            {insight.title}
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-stone-300/92 sm:text-lg sm:leading-9">
            {insight.subtitle}
          </p>

          <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-stone-light/25 bg-black/28">
            <div className="relative aspect-[16/7] min-h-[260px]">
              <Image
                src={insight.imageSrc}
                alt={insight.imageAlt}
                fill
                sizes="(min-width: 1024px) 980px, 100vw"
                className={
                  insight.slug === "vol-1-direct-listing-vs-ipo"
                    ? "object-contain p-8"
                    : "object-cover"
                }
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
            <div className="space-y-6">
              <section className="rounded-[1.5rem] border border-stone-light/22 bg-white/[0.035] p-5 sm:p-6">
                <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                  Executive View
                </div>
                <p className="mt-3 text-sm leading-8 text-stone-200/92 sm:text-base">
                  {insight.zh}
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-400">
                  {insight.en}
                </p>
              </section>

              {insight.body.map((section) => (
                <section
                  key={section.heading}
                  className="rounded-[1.5rem] border border-stone-light/22 bg-black/22 p-5 sm:p-6"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-stone-50">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-8 text-stone-300/92 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside className="rounded-[1.5rem] border border-stone-light/24 bg-white/[0.035] p-5">
              <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                More Issues
              </div>
              <div className="mt-4 space-y-3">
                {insightItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}/`}
                    className={
                      item.slug === insight.slug
                        ? "block rounded-2xl border border-accent-gold/45 bg-accent-gold/10 p-4"
                        : "block rounded-2xl border border-stone-light/18 bg-black/22 p-4 transition hover:border-accent-gold/70"
                    }
                  >
                    <div className="text-[0.64rem] uppercase tracking-[0.16em] text-accent-gold">
                      {item.volume}
                    </div>
                    <div className="mt-2 text-sm font-medium leading-6 text-stone-100">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>

              {insight.sources.length > 0 ? (
                <div className="mt-6 border-t border-stone-light/15 pt-5">
                  <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                    Sources
                  </div>
                  <div className="mt-3 space-y-2">
                    {insight.sources.map((source) => (
                      <a
                        key={source.href}
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-accent-gold transition hover:text-[#d3af67]"
                      >
                        {source.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </article>
      <ContactSection />
    </main>
  );
}
