'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeModeButton() {
  const { theme, setTheme } = useTheme();

  const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  async function toggleDark(e: React.MouseEvent<HTMLButtonElement>) {
    const { clientX: x, clientY: y } = e;
    const isDark = theme === 'dark';

    if (!enableTransitions()) {
      setTheme(theme === 'light' ? 'dark' : 'light');
      return;
    }

    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
    ];

    await (
      document as Document & {
        startViewTransition?: (
          callback: () => Promise<void>
        ) => Promise<{ ready: Promise<void> }>;
      }
    ).startViewTransition?.(async () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    })?.ready;

    document.documentElement.animate(
      { clipPath: !isDark ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${!isDark ? 'old' : 'new'}(root)`,
      }
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleDark}
      className="relative inline-flex items-center justify-center h-9 w-9 rounded-md border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-800 cursor-pointer" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400 cursor-pointer" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
