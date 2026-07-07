"use client";

import { useLang } from "@/lib/language-context";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-foreground mb-2 text-3xl font-bold tracking-tight">{t("contact.title")}</h1>
      <p className="text-muted-foreground mb-10 text-lg">{t("contact.intro")}</p>

      <a
        href="mailto:bj.90.cf@gmail.com"
        className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all"
      >
        bj.90.cf@gmail.com
      </a>
    </section>
  );
}
