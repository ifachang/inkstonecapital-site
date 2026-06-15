export type Locale = "zh" | "en";

export function localizedPath(locale: Locale, path: string) {
  if (locale === "zh") return path;
  if (path === "/") return "/en/";
  if (path.startsWith("/#")) return `/en/${path.slice(1)}`;
  if (path.startsWith("/")) return `/en${path}`;
  return path;
}

export function alternatePath(locale: Locale, path: string) {
  if (locale === "zh") return localizedPath("en", path);
  if (path === "/en/") return "/";
  return path.replace(/^\/en/, "") || "/";
}
