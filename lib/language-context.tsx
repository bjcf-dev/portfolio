"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang } from "@/lib/translations";

interface LangContext {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const Ctx = createContext<LangContext | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "es") setLang(stored);
  }, []);

  function handleSetLang(l: Lang) {
    setLang(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }

  function t(key: string): string {
    return (translations[lang] as Record<string, string>)[key] ?? (translations.en as Record<string, string>)[key] ?? key;
  }

  return (
    <Ctx.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be inside LangProvider");
  return ctx;
}
