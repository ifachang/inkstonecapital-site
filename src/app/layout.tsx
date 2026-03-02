import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Inkstone Capital | 墨石資本",
  description: "Inkstone Capital 墨石資本 — 專注成長型與產業升級機會的專業投資機構。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-screen bg-ink text-white">
        {children}
      </body>
    </html>
  );
}

