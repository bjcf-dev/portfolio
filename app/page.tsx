"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/language-context";

export default function Home() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    function onScroll() {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.8;
      const progress = Math.min(scrollY / maxScroll, 1);
      const el = heroRef.current;
      if (!el) return;

      el.style.transform = `
        perspective(800px)
        translateZ(${-progress * 60}px)
        translateY(${-progress * 50}px)
        scale(${1 - progress * 0.04})
      `;
      el.style.opacity = `${1 - progress * 0.35}`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="mx-auto max-w-5xl px-4 py-20 md:py-28"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="animate-fade-in flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="group shrink-0">
            <div className="bg-muted overflow-hidden rounded-full p-1 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/photo.jpg"
                alt="Profile"
                className="bg-muted size-36 rounded-full object-cover md:size-44"
              />
            </div>
          </div>

          <div className="animate-fade-in text-center md:text-left" style={{ animationDelay: "0.15s" }}>
            <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl">
              {t("hero.title")}{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t("hero.name")}
              </span>
            </h1>
            <p className="text-muted-foreground mt-3 text-lg leading-relaxed md:text-xl">
              {t("hero.subtitle")}
              <br />
              {t("hero.desc")}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/projects"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all"
              >
                {t("hero.cta.projects")}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/sop"
                className="border-border hover:border-foreground/30 text-foreground inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all"
              >
                {t("hero.cta.sops")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="gradient-drift border-border border-y">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-muted-foreground leading-relaxed">{t("about.p1")}</p>
          <p className="text-muted-foreground mt-4 leading-relaxed">{t("about.p2")}</p>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <p className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-widest">
          {t("cta.label")}
        </p>
        <h2 className="text-foreground mb-4 text-3xl font-bold leading-tight md:text-4xl">
          {t("cta.title")}
        </h2>
        <p className="text-muted-foreground mx-auto mb-10 max-w-lg text-lg leading-relaxed">
          {t("cta.text")}
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/contact"
            className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all"
          >
            {t("cta.button")}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
