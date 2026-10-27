import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/content/routes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/Providers";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import styles from "./layout.module.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const description =
  "DevOps & Platform Engineering · Full Stack Software Developer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nicolás Correa",
  description,
  openGraph: {
    title: "Nicolás Correa",
    description,
    url: "/",
    siteName: "Nicolás Correa · Portfolio",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Nicolás Correa · DevOps & Full Stack" },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body>
        <Providers>
          <Nav />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
