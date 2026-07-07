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

      <div className="grid gap-4 sm:grid-cols-2">
        {sops.map((sop) => (
          <div
            key={sop.slug}
            className="border-border bg-card flex flex-col rounded-lg border p-5"
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
              <span className="bg-muted text-muted-foreground rounded px-2 py-0.5 text-xs">
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
    </section>
  );
}
