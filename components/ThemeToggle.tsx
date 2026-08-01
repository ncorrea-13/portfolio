"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { useLocale } from "./LocaleProvider";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale } = useLocale();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return (
    <button
      type="button"
      aria-label={locale === "en" ? "Switch theme" : "Cambiar tema"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-card-border bg-card-bg text-heading hover:border-accent-strong"
    >
      {mounted ? "◐" : ""}
    </button>
  );
}
