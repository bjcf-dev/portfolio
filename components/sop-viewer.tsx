"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { sops, type SOPEntry } from "@/data/sops";
import { renderMarkdown } from "@/lib/markdown";

function findSop(slug: string): SOPEntry | undefined {
  return sops.find((s) => s.slug === slug);
}

export function SOPViewer({ slug }: { slug: string }) {
  const sop = findSop(slug);
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sop) return;
    const cached = sessionStorage.getItem(`sop-${sop.slug}`);
    if (cached) {
      setContent(cached);
      return;
    }

    const url = `https://raw.githubusercontent.com/bjcf-dev/${sop.repo}/main/${sop.path}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        setContent(text);
        sessionStorage.setItem(`sop-${sop.slug}`, text);
      })
      .catch((e: Error) => setError(e.message));
  }, [sop]);

  if (!sop) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-destructive">SOP not found.</p>
        <Link href="/sop" className="text-foreground mt-4 block underline underline-offset-2">
          ← Back to SOPs
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/sop"
        className="text-muted-foreground hover:text-foreground mb-6 flex items-center gap-1 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to SOPs
      </Link>

      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-foreground text-2xl font-bold tracking-tight">{sop.title}</h1>
          <p className="text-muted-foreground mt-1 text-sm">{sop.description}</p>
        </div>
        <a
          href={`https://raw.githubusercontent.com/bjcf-dev/${sop.repo}/main/${sop.path}`}
          download
          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/60 px-4 py-2 text-sm shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/50 dark:bg-slate-800/40"
        >
          <Download className="size-4" />
          .md
        </a>
      </div>

      {error && (
        <p className="text-destructive text-sm">Failed to load: {error}</p>
      )}

      {!content && !error && (
        <div className="space-y-3">
          <div className="bg-muted h-6 w-3/5 animate-pulse rounded" />
          <div className="bg-muted h-4 w-full animate-pulse rounded" />
          <div className="bg-muted h-4 w-4/5 animate-pulse rounded" />
          <div className="bg-muted h-4 w-2/5 animate-pulse rounded" />
        </div>
      )}

      {content && (
        <article className="prose-muted prose-headings:text-foreground prose">
          {renderMarkdown(content)}
        </article>
      )}
    </section>
  );
}
