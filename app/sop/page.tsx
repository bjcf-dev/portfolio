"use client";

import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { sops } from "@/data/sops";
import { useLang } from "@/lib/language-context";

export default function SOPsPage() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-foreground mb-2 text-3xl font-bold tracking-tight">
        {t("sops.title")}
      </h1>
      <p className="text-muted-foreground mb-10 text-lg">
        {t("sops.intro")}
      </p>

      <div className="relative">
        {/* Gradiente de fondo para el glass */}
        <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-400/5 via-transparent to-orange-400/5 dark:from-amber-400/10 dark:to-orange-400/10" />

        <div className="relative grid gap-4 sm:grid-cols-2">
          {sops.map((sop) => (
            <div
              key={sop.slug}
              className="flex flex-col rounded-xl border border-white/30 bg-white/60 p-5 shadow-lg shadow-black/5 backdrop-blur-md transition-all hover:-translate-y-1 hover:scale-[1.02] hover:border-white/50 hover:bg-white/80 hover:shadow-xl dark:border-white/10 dark:bg-black/30 dark:shadow-black/20 dark:hover:border-white/20 dark:hover:bg-black/50"
            >
            <div className="flex-1">
              <Link
                href={`/sop/${sop.slug}`}
                className="text-foreground hover:text-foreground/80 mb-1 block font-semibold transition-colors"
              >
                {sop.title}
              </Link>
              <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
                {sop.description}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700/50 dark:text-slate-300">
                {sop.language}
              </span>
              <a
                href={`https://raw.githubusercontent.com/bjcf-dev/${sop.repo}/main/${sop.path}`}
                download
                className="text-muted-foreground hover:text-foreground ml-auto flex items-center gap-1 transition-colors"
              >
                <Download className="size-3.5" />
                .md
              </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
