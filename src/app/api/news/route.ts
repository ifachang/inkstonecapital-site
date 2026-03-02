import { NextRequest } from "next/server";
import fs from "fs/promises";
import path from "path";

type NewsItem = {
  title: string;
  href: string;
  source: string;
};

const filePath = path.join(process.cwd(), "src", "data", "news.json");

async function readNews(): Promise<NewsItem[]> {
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as NewsItem[];
}

async function writeNews(items: NewsItem[]) {
  await fs.writeFile(filePath, JSON.stringify(items, null, 2), "utf-8");
}

export async function GET() {
  const items = await readNews();
  return Response.json(items);
}

export async function POST(req: NextRequest) {
  const adminToken = process.env.NEWS_ADMIN_TOKEN;
  const headerToken = req.headers.get("x-admin-token");

  if (!adminToken || headerToken !== adminToken) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = (await req.json()) as Partial<NewsItem>;

  if (!body.title || !body.href || !body.source) {
    return new Response("Invalid payload", { status: 400 });
  }

  const items = await readNews();
  const next: NewsItem[] = [
    {
      title: body.title,
      href: body.href,
      source: body.source,
    },
    ...items,
  ];

  await writeNews(next);

  return Response.json({ ok: true });
}

