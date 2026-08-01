"use client";

import { useSyncExternalStore } from "react";
import { useLocale } from "./LocaleProvider";

function subscribe() {
  return () => {};
}

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return (
    <button
      type="button"
      aria-label={locale === "en" ? "Switch language" : "Cambiar idioma"}
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-card-border bg-card-bg font-sans text-[11px] font-semibold text-heading hover:border-accent-strong"
    >
      {mounted ? (locale === "en" ? "ES" : "EN") : ""}
    </button>
  );
}
