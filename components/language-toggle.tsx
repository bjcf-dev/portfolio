"use client";

import { useLang } from "@/lib/language-context";

export function LanguageToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors"
      aria-label={`Switch to ${lang === "en" ? "Spanish" : "English"}`}
    >
      {t("lang.en")} / {t("lang.es")}
    </button>
  );
}
