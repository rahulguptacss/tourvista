import type { PackageItem } from "../types";

export function toCountrySlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function matchesCountry(pkg: PackageItem, country: string) {
  const selected = country.trim().toLowerCase();
  if (!selected) return false;

  return (
    (pkg.country || "").trim().toLowerCase() === selected ||
    pkg.location.trim().toLowerCase() === selected
  );
}
