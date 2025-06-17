export function withBase(pathname = "") {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${pathname}`.replace(/\/{2,}/g, "/");
}
