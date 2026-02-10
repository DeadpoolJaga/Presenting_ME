'use client';

import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-[hsl(var(--border))]" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group relative grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.8)] transition hover:scale-105"
      aria-label="Toggle theme"
    >
      <SunMedium className="h-4 w-4 rotate-0 scale-100 transition group-hover:rotate-12 dark:-rotate-90 dark:scale-0" />
      <MoonStar className="absolute h-4 w-4 rotate-90 scale-0 transition group-hover:rotate-0 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
