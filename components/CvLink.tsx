"use client";

import { useLocale } from "./LocaleProvider";
import { LinkButton } from "./LinkButton";

export function CvLink({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  return (
    <LinkButton href={locale === "en" ? "/cv-en.pdf" : "/cv.pdf"} external>
      {children}
    </LinkButton>
  );
}
