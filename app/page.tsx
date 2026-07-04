import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Code2,
  Database,
  Cloud,
  Cpu,
  Shell,
} from "lucide-react";

const skills = [
  { icon: Cpu, label: "Solana", sub: "Anchor, Pinocchio, Codama" },
  { icon: Code2, label: "TypeScript", sub: "React, Next.js, Node.js" },
  { icon: Shell, label: "Rust", sub: "CLI, WASM, on-chain programs" },
  { icon: Database, label: "Backend", sub: "Node.js, Python, Postgres" },
  { icon: Cloud, label: "DevOps", sub: "GitHub Actions, Docker, VPS" },
  { icon: FileText, label: "SOPs", sub: "Arquitectura, guías, estándares" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-20 md:py-28">
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
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Billy
              </span>
            </h1>
            <p className="text-muted-foreground mt-3 text-lg leading-relaxed md:text-xl">
              Senior Architect. Solana & Rust engineer.
              <br />
              Building on-chain systems, tooling, and standards.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/projects"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all"
              >
                View Projects
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/sop"
                className="border-border hover:border-foreground/30 text-foreground inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all"
              >
                Browse SOPs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-border bg-muted/30 border-y">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-foreground mb-8 text-center text-2xl font-bold tracking-tight">
            Stack &amp; Expertise
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="border-border bg-card hover:border-foreground/30 group rounded-lg border p-5 transition-all hover:-translate-y-0.5"
              >
                <div className="bg-muted group-hover:bg-foreground/10 mb-3 inline-flex rounded-lg p-2.5 transition-colors">
                  <Icon className="text-foreground size-5" />
                </div>
                <h3 className="text-foreground font-semibold">{label}</h3>
                <p className="text-muted-foreground mt-0.5 text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h2 className="text-foreground mb-3 text-2xl font-bold tracking-tight">
          Want to see the code?
        </h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-md text-lg">
          Everything here is open source. Check the repos, read the SOPs, or reach out.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/projects"
            className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="border-border hover:border-foreground/30 text-foreground inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all"
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
