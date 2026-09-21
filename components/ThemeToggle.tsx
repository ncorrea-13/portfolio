"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { useLocale } from "./LocaleProvider";
import styles from "./Toggle.module.css";

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
      className={styles.btn}
    >
      {mounted ? "◐" : ""}
    </button>
  );
}
