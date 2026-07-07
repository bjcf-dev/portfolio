"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLang } from "@/lib/language-context";

const links = [
  { href: "/", key: "nav.home" as const },
  { href: "/projects", key: "nav.projects" as const },
  { href: "/sop", key: "nav.sops" as const },
  { href: "/contact", key: "nav.contact" as const },
];

export function Navbar() {
  const { t } = useLang();

  return (
    <nav className="border-border bg-background border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-foreground text-lg font-bold tracking-tight">
          Billy Flores
        </Link>
        <div className="flex items-center gap-4">
          {links.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t(key)}
            </Link>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
