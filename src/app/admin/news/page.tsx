"use client";

import { FormEvent, useEffect, useState } from "react";

type NewsItem = {
  title: string;
  href: string;
  source: string;
};

export default function NewsAdminPage() {
  const [password, setPassword] = useState("");
  const [tokenValid, setTokenValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<NewsItem[]>([]);
  const [title, setTitle] = useState("");
  const [href, setHref] = useState("");
  const [source, setSource] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("news_admin_token");
    if (saved) {
      setPassword(saved);
      setTokenValid(true);
      void fetchNews(saved);
    }
  }, []);

  async function fetchNews(token: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/news", {
        headers: {
          "x-admin-token": token,
        },
      });
      if (!res.ok) {
        throw new Error("讀取失敗");
      }
      const data = (await res.json()) as NewsItem[];
      setItems(data);
    } catch (e) {
      setError("無法讀取現有新聞列表，請稍後再試。");
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (!password) return;
    setTokenValid(true);
    window.localStorage.setItem("news_admin_token", password);
    void fetchNews(password);
  }

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (!title || !href || !source) {
      setError("請完整填寫標題、連結與來源。");
      return;
    }
    const token = password;
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": token,
        },
        body: JSON.stringify({ title, href, source }),
      });
      if (res.status === 401) {
        setError("密碼錯誤或未設定，請確認後再試。");
        setTokenValid(false);
        return;
      }
      if (!res.ok) {
        throw new Error("新增失敗");
      }
      setMessage("已成功新增一則最新消息。");
      setTitle("");
      setHref("");
      setSource("");
      await fetchNews(token);
    } catch (e) {
      setError("儲存失敗，請稍後再試。");
    }
  }

  return (
    <main className="min-h-screen bg-ink text-stone-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">
          最新消息維護後台
        </h1>
        <p className="mt-2 text-sm text-stone-300">
          此頁面僅供內部維護人員使用，請妥善保管密碼。
        </p>

        {!tokenValid && (
          <form onSubmit={handleLogin} className="mt-6 max-w-sm space-y-3">
            <label className="block text-sm">
              <span className="mb-1 inline-block text-stone-200">
                後台密碼
              </span>
              <input
                type="password"
                className="w-full rounded-md border border-stone-light/60 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent-gold"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="rounded-md bg-accent-gold px-4 py-2 text-sm font-medium text-ink-dark hover:bg-accent-gold/90"
            >
              登入
            </button>
          </form>
        )}

        {tokenValid && (
          <>
            <form
              onSubmit={handleAdd}
              className="mt-8 space-y-3 rounded-xl border border-stone-light/40 bg-black/40 p-4 text-sm"
            >
              <h2 className="text-base font-semibold text-stone-50">
                新增一則最新消息
              </h2>
              <label className="block">
                <span className="mb-1 inline-block text-stone-200">標題</span>
                <input
                  className="w-full rounded-md border border-stone-light/60 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent-gold"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="mb-1 inline-block text-stone-200">
                  連結（URL）
                </span>
                <input
                  className="w-full rounded-md border border-stone-light/60 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent-gold"
                  value={href}
                  onChange={(e) => setHref(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="mb-1 inline-block text-stone-200">來源</span>
                <input
                  className="w-full rounded-md border border-stone-light/60 bg-black/40 px-3 py-2 text-sm outline-none focus:border-accent-gold"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-md bg-accent-gold px-4 py-2 text-sm font-medium text-ink-dark hover:bg-accent-gold/90"
              >
                儲存
              </button>
            </form>

            <section className="mt-8">
              <h2 className="text-base font-semibold text-stone-50">
                現有最新消息（僅供參考）
              </h2>
              {loading && (
                <p className="mt-2 text-sm text-stone-400">讀取中…</p>
              )}
              {!loading && (
                <ul className="mt-3 space-y-2 text-sm">
                  {items.map((item) => (
                    <li
                      key={item.href}
                      className="rounded-md border border-stone-light/40 bg-black/40 px-3 py-2"
                    >
                      <div className="font-medium text-stone-50">
                        {item.title}
                      </div>
                      <div className="text-xs text-stone-400">
                        {item.source} — {item.href}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}

        {error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}
        {message && (
          <p className="mt-4 text-sm text-emerald-400">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}

