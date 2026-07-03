import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    href: "mailto:bj.90.cf@gmail.com",
    label: "bj.90.cf@gmail.com",
    icon: Mail,
  },
  {
    href: "https://github.com/bjcf-dev",
    label: "github.com/bjcf-dev",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/bjcf",
    label: "linkedin.com/in/bjcf",
    icon: Linkedin,
  },
] as const;

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-foreground mb-2 text-3xl font-bold tracking-tight">Contact</h1>
      <p className="text-muted-foreground mb-10 text-lg">
        Let&apos;s connect — reach out through any of these channels.
      </p>

      <div className="flex flex-col gap-4">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-card hover:border-foreground/30 flex items-center gap-4 rounded-lg border p-4 transition-colors"
          >
            <Icon className="text-muted-foreground size-5 shrink-0" />
            <span className="text-foreground">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
