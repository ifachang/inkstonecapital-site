"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "../lib/gtag";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const sensitiveKeywords = [
  "上市",
  "ipo",
  "客戶",
  "案例",
  "專案",
  "募資",
  "報酬",
  "績效",
  "成功率",
  "投資標的",
  "交易",
  "負面",
  "爭議",
  "合作名單",
];

const quickReplies = [
  "你們提供哪些服務？",
  "如何聯絡你們？",
  "你們的相關公司有哪些？",
];

function getAssistantReply(input: string) {
  const normalized = input.trim().toLowerCase();

  if (!normalized) {
    return "請輸入你的問題，我可以協助你了解公司簡介、服務內容、團隊介紹、相關公司與聯絡方式。";
  }

  if (sensitiveKeywords.some((keyword) => normalized.includes(keyword))) {
    return "此類資訊不透過線上系統提供。若您有進一步合作、服務或專案相關需求，請來信 corp@inkstonecapital.com，我們將由專人與您聯繫。";
  }

  if (
    normalized.includes("服務") ||
    normalized.includes("strategy") ||
    normalized.includes("顧問")
  ) {
    return "墨石資本目前主要介紹三類核心服務：併購與重組顧問、私募融資與過橋融資、上市與資本市場規劃。你也可以直接查看「服務」頁面取得完整說明。";
  }

  if (
    normalized.includes("聯絡") ||
    normalized.includes("email") ||
    normalized.includes("信箱") ||
    normalized.includes("電話") ||
    normalized.includes("contact")
  ) {
    return "你可以透過 corp@inkstonecapital.com 與我們聯繫，或致電 +886 2 7755 7057。若是合作或專案需求，建議直接來信說明。";
  }

  if (
    normalized.includes("團隊") ||
    normalized.includes("成員") ||
    normalized.includes("team")
  ) {
    return "目前網站公開介紹的核心團隊成員為張義發、田江森，以及 Kevin Vassily。你可以前往「團隊」頁面查看各自的背景簡介。";
  }

  if (
    normalized.includes("公司") ||
    normalized.includes("yushan") ||
    normalized.includes("docter") ||
    normalized.includes("大投美國") ||
    normalized.includes("datou") ||
    normalized.includes("brands")
  ) {
    return "目前網站公開列出的相關公司包括 Yushan.AI、Docter Inc. 與大投美國股份有限公司。你可以前往「相關公司」頁面查看簡介與官方連結。";
  }

  if (
    normalized.includes("新聞") ||
    normalized.includes("消息") ||
    normalized.includes("news")
  ) {
    return "網站提供公開新聞與媒體報導整理，首頁顯示摘要，完整列表可在「最新消息」頁面查看。";
  }

  if (
    normalized.includes("你是誰") ||
    normalized.includes("可以做什麼") ||
    normalized.includes("help")
  ) {
    return "我是網站的 AI 客服助理，只提供公開資訊與網站導覽，不提供投資建議，也不回答未公開或敏感專案資訊。";
  }

  return "我目前僅提供網站公開資訊與導覽協助。若你的問題涉及合作、專案或其他細節，請來信 corp@inkstonecapital.com，我們將由專人與您聯繫。";
}

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "您好，我是墨石資本 AI 客服。可協助回答公司簡介、服務、團隊、相關公司與聯絡方式。若涉及敏感專案資訊，我會引導您改以 email 聯繫。",
    },
  ]);

  const canSend = useMemo(() => draft.trim().length > 0, [draft]);

  useEffect(() => {
    if (!open) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  function sendMessage(content: string) {
    const question = content.trim();
    if (!question) return;

    const reply = getAssistantReply(question);
    trackEvent("ai_chat_message_sent", {
      question_type: sensitiveKeywords.some((keyword) =>
        question.toLowerCase().includes(keyword),
      )
        ? "sensitive"
        : "general",
      message_length: question.length,
    });
    setMessages((current) => [
      ...current,
      { role: "user", content: question },
      { role: "assistant", content: reply },
    ]);
    setDraft("");
    setOpen(true);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    sendMessage(draft);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3">
      {open && (
        <div className="w-[22rem] max-w-full overflow-hidden rounded-3xl border border-stone-light/40 bg-ink-dark/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="border-b border-stone-light/30 px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-stone-50">AI 客服助理</div>
                <div className="mt-1 text-[0.7rem] leading-relaxed text-stone-400">
                  僅回答網站公開資訊。敏感問題將導向人工聯繫。
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs text-stone-400 transition hover:text-stone-200"
              >
                關閉
              </button>
            </div>
          </div>

          <div className="max-h-[24rem] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "assistant"
                    ? "mr-6 rounded-2xl border border-stone-light/20 bg-black/35 px-3 py-2 text-xs leading-relaxed text-stone-200"
                    : "ml-6 rounded-2xl bg-accent-gold px-3 py-2 text-xs leading-relaxed text-ink-dark"
                }
              >
                {message.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-stone-light/30 px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickReplies.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    trackEvent("ai_chat_quick_reply_click", {
                      reply_label: item,
                    });
                    sendMessage(item);
                  }}
                  className="rounded-full border border-stone-light/30 px-3 py-1 text-[0.7rem] text-stone-300 transition hover:border-accent-gold/70 hover:text-stone-100"
                >
                  {item}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="輸入你的問題"
                className="min-w-0 flex-1 rounded-full border border-stone-light/30 bg-black/40 px-3 py-2 text-xs text-stone-100 outline-none placeholder:text-stone-500 focus:border-accent-gold/70"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="rounded-full bg-accent-gold px-4 py-2 text-xs font-medium text-ink-dark transition disabled:cursor-not-allowed disabled:opacity-50"
              >
                送出
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          const nextOpen = !open;
          setOpen(nextOpen);
          trackEvent(nextOpen ? "ai_chat_open" : "ai_chat_close", {
            location: "floating_widget",
          });
        }}
        className="rounded-full border border-stone-light/40 bg-accent-gold px-5 py-3 text-sm font-semibold text-ink-dark shadow-[0_14px_35px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5"
      >
        AI 客服
      </button>
    </div>
  );
}
