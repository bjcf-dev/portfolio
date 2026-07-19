"use client";

import Link from "next/link";
import { Home, FolderKanban, FileText, Mail, Github, Linkedin } from "lucide-react";
import { useLang } from "@/lib/language-context";

const previewMap: Record<string, string> = {
  "/": "/previews/home.svg",
  "/projects": "/previews/projects.svg",
  "/sop": "/previews/sops.svg",
  "/contact": "/previews/contact.svg",
  "github": "/previews/github.svg",
  "linkedin": "/previews/linkedin.svg",
};

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

  const previewKey = (href: string, external?: boolean) =>
    external ? href.includes("github") ? "github" : "linkedin" : href;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="mx-auto flex h-[58px] w-max items-center gap-1.5 rounded-2xl border border-white/30 bg-white/70 p-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/60">
        {items.map(({ href, labelKey, previewKey: previewKeyStr, icon: Icon, external }) => (
          <div key={href} className="group relative">
            {/* Preview card — glass style */}
            <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 w-48 -translate-x-1/2 translate-y-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              <img
                src={previewMap[previewKey(href, external)]}
                alt={t(labelKey)}
                className="w-full rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-black/60 to-transparent px-3 pb-2 pt-6">
                <p className="text-xs font-medium text-white">{t(labelKey)}</p>
                <p className="text-[10px] text-white/70">{t(previewKeyStr)}</p>
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
