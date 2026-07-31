import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nicolás Correa",
  description:
    "Full-stack developer · Sysadmin & homelab · Red Team Trainee",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%231e1e1e%22/><text x=%2250%22 y=%2268%22 font-size=%2250%22 font-family=%22monospace%22 fill=%22%23c9b8ff%22 text-anchor=%22middle%22>&gt;_</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body className="min-h-screen font-serif text-[16px] leading-[1.7]">
        <Providers>
          <Nav />
          <main className="mx-auto max-w-3xl px-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
