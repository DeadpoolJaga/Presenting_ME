import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cinematic Developer Portfolio',
  description: 'High-end software engineer portfolio experience built with Next.js, Tailwind, and Framer Motion.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider>
          <header className="fixed left-0 right-0 top-0 z-30 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <span className="glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]">Presenting Me</span>
            <ThemeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
