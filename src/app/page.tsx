import Image from "next/image";
import { Hero } from "../components/Hero";
import {
  AboutSection,
  StrategySection,
  NewsSection,
  TeamSection,
  ContactSection,
} from "../components/Sections";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <header className="border-b border-stone-light/40 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/inkstone-logo.png"
                alt="Inkstone Capital 墨石資本標誌"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] text-stone-900">
                <span className="text-[0.9rem] text-stone-100">墨石資本</span>
              </div>
              <div className="text-xs text-stone-300">Inkstone Capital</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-xs text-stone-300 md:flex">
            <a href="#about" className="hover:text-accent-gold/90">
              關於我們
            </a>
            <a href="#strategy" className="hover:text-accent-gold/90">
              投資策略
            </a>
            <a href="#news" className="hover:text-accent-gold/90">
              最新消息
            </a>
            <a href="#team" className="hover:text-accent-gold/90">
              團隊
            </a>
            <a href="#contact" className="hover:text-accent-gold/90">
              聯絡
            </a>
          </nav>
        </div>
      </header>
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <div id="strategy">
        <StrategySection />
      </div>
      <div id="news">
        <NewsSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}

