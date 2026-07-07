"use client";

import Link from "next/link";
import { Home, FolderKanban, FileText, Mail, Github, Linkedin } from "lucide-react";
import { useLang } from "@/lib/language-context";

export function Dock() {
  const { t } = useLang();

  const items: Array<{
    href: string;
    labelKey: string;
    previewKey: string;
    icon: typeof Home;
    external?: boolean;
  }> = [
    { href: "/", labelKey: "dock.home", previewKey: "dock.preview.home", icon: Home },
    { href: "/projects", labelKey: "dock.projects", previewKey: "dock.preview.projects", icon: FolderKanban },
    { href: "/sop", labelKey: "dock.sops", previewKey: "dock.preview.sops", icon: FileText },
    { href: "/contact", labelKey: "dock.contact", previewKey: "dock.preview.contact", icon: Mail },
    { href: "https://github.com/bjcf-dev", labelKey: "dock.github", previewKey: "dock.preview.github", icon: Github, external: true },
    { href: "https://linkedin.com/in/bjcf", labelKey: "dock.linkedin", previewKey: "dock.preview.linkedin", icon: Linkedin, external: true },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="mx-auto flex h-[58px] w-max items-center gap-1.5 rounded-2xl border border-slate-200 bg-white/70 p-2 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-black/60">
        {items.map(({ href, labelKey, previewKey, icon: Icon, external }) => (
          <div key={href} className="group relative">
            {/* Preview tooltip */}
            <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-700 dark:bg-black/80">
              <div className="flex items-center gap-2">
                <Icon className="text-foreground size-4 shrink-0" />
                <div className="text-left">
                  <p className="text-foreground whitespace-nowrap text-xs font-medium">
                    {t(labelKey)}
                  </p>
                  <p className="text-muted-foreground whitespace-nowrap text-[10px]">
                    {t(previewKey)}
                  </p>
                </div>
              </div>
            </div>

            {/* Dock icon */}
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-transparent p-2.5 transition-all duration-200 hover:scale-110 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
              >
                <Icon className="text-foreground size-5" />
              </a>
            ) : (
              <Link
                href={href}
                className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-transparent p-2.5 transition-all duration-200 hover:scale-110 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
              >
                <Icon className="text-foreground size-5" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
