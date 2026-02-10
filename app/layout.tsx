import type { Metadata } from "next";
import "./globals.css";

import { Inter, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Cinematic Developer Portfolio",
  description:
    "High-end software engineer portfolio experience built with Next.js, Tailwind, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <ThemeProvider>
          <header className="fixed left-0 right-0 top-0 z-30 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <span className="glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]">
              Presenting Me
            </span>
            <ThemeToggle />
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
