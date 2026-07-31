import Link from "next/link";
import type { ReactNode } from "react";

export function LinkButton({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  const className =
    "inline-block rounded-lg border border-card-border px-4 py-1.5 font-sans text-sm text-heading hover:border-accent-strong hover:bg-card-bg";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
