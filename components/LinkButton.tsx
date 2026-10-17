import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

export function LinkButton({
  href,
  external,
  primary,
  children,
}: {
  href: string;
  external?: boolean;
  primary?: boolean;
  children: ReactNode;
}) {
  const className = primary ? `${styles.btn} ${styles.primary}` : styles.btn;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
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
