"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";

type Locale = "es" | "en";

const EVENT = "locale-change";
const COOKIE_DOMAIN = ".ncorrea.com.ar";

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Locale {
  const fromCookie = document.cookie.match(/(?:^|; )locale=(en|es)/)?.[1];
  return (fromCookie ?? localStorage.getItem("locale")) === "en" ? "en" : "es";
}

function getServerSnapshot(): Locale {
  return "es";
}

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem("locale", next);
    document.cookie = `locale=${next}; Domain=${COOKIE_DOMAIN}; Path=/; Max-Age=31536000; SameSite=Lax`;
    document.documentElement.lang = next;
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
