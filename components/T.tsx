"use client";

import { useLocale } from "./LocaleProvider";

export function T({ es, en }: { es: string; en: string }) {
  const { locale } = useLocale();
  return <>{locale === "en" ? en : es}</>;
}
