"use client";

import { useSyncExternalStore } from "react";
import { useLocale } from "./LocaleProvider";
import styles from "./Toggle.module.css";

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
      className={`${styles.btn} ${styles.lang}`}
    >
      {mounted ? (locale === "en" ? "ES" : "EN") : ""}
    </button>
  );
}
