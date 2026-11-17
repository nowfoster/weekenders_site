/** A nav item is active on its own page and on its sub-pages (e.g. /stories/nadine). */
export function isActive(href: string, current: string) {
  return href === current || (href !== "/" && current.startsWith(`${href}/`));
}
