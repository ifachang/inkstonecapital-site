import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(path);
    }
  }

  return files;
}

const files = await walk("out/en").catch(() => []);

for (const file of files) {
  const html = await readFile(file, "utf8");
  const updated = html.replace("<html lang=\"zh-Hant\"", "<html lang=\"en\"");

  if (updated !== html) {
    await writeFile(file, updated);
  }
}
