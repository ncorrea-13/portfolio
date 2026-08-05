"use client";

import { useLocale } from "./LocaleProvider";

type LocalizedText = { es: string; en: string };
type Tag = string | LocalizedText;

function resolve(text: LocalizedText, locale: "es" | "en") {
  return locale === "en" ? text.en : text.es;
}

export function TagGroup({
  label,
  tags,
  color,
}: {
  label: LocalizedText;
  tags: readonly Tag[];
  color: string;
}) {
  const { locale } = useLocale();

  return (
    <div className="mb-5">
      <p className="mb-2 flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-wide text-muted">
        <span
          className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        {resolve(label, locale)}
      </p>
      <div className="grid grid-cols-2 gap-2 font-mono text-[13px] sm:flex sm:flex-wrap">
        {tags.map((tag) => {
          const text = typeof tag === "string" ? tag : resolve(tag, locale);
          const key = typeof tag === "string" ? tag : tag.es;
          return (
            <span
              key={key}
              className="rounded-full border bg-code-bg px-3 py-1.5 text-center text-code-text sm:text-left"
              style={{ borderColor: color }}
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
