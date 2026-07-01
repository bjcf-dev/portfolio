"use client";

import { useTheme } from "next-themes";
import { BookOpen, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const themes = ["light", "dark", "rustmode"] as const;
const icons = [Sun, Moon, BookOpen] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Theme toggle placeholder"
        className="rounded-md p-2 opacity-50"
        disabled
      >
        <Sun className="h-5 w-5" />
      </button>
    );
  }

  const currentIndex = Math.max(0, themes.indexOf(theme as (typeof themes)[number]));
  const nextIndex = (currentIndex + 1) % themes.length;
  const Icon = icons[currentIndex];

  return (
    <button
      onClick={() => setTheme(themes[nextIndex])}
      aria-label={`Current theme: ${theme}. Click to switch to ${themes[nextIndex]}.`}
      className="rounded-md p-2 transition-colors hover:bg-muted"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
