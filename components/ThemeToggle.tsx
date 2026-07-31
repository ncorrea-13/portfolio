"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-card-border bg-card-bg text-heading hover:border-accent-strong"
    >
      {mounted ? "◐" : ""}
    </button>
  );
}
