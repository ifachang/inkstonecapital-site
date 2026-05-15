import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "最新消息更新說明",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewsAdminPage() {
  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">
          最新消息更新說明
        </h1>
        <p className="mt-2 text-sm text-stone-300">
          這個網站已改為純靜態版，不再提供線上後台寫入功能。
        </p>
        <div className="mt-8 rounded-xl border border-stone-light/40 bg-black/40 p-5 text-sm text-stone-300">
          <p className="leading-relaxed">
            若要更新首頁的「最新消息與媒體報導」，請編輯
            <span className="mx-1 font-mono text-stone-100">src/data/news.json</span>
            內的內容，完成後重新執行 build，再把產出的靜態檔重新上傳。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-stone-300">
            <li>修改新聞標題、連結與來源。</li>
            <li>執行 <span className="font-mono text-stone-100">npm run build</span>。</li>
            <li>上傳 <span className="font-mono text-stone-100">out/</span> 目錄中的檔案到主機。</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
