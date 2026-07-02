import { Star, GitFork } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string | null;
  stars: number;
  language: string | null;
  url: string;
}

const HIGHLIGHT_LANGS = ["Rust", "TypeScript"];

export function ProjectCard({ name, description, stars, language, url }: ProjectCardProps) {
  const isHighlight = language && HIGHLIGHT_LANGS.includes(language);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="border-border bg-card hover:border-foreground/30 block rounded-lg border p-5 transition-colors"
    >
      <h3 className="text-foreground mb-1 font-semibold">{name}</h3>
      {description && (
        <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">{description}</p>
      )}
      <div className="flex items-center gap-4 text-sm">
        {language && (
          <span
            className={
              isHighlight
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            }
          >
            {language}
          </span>
        )}
        {stars > 0 && (
          <span className="text-muted-foreground flex items-center gap-1">
            <Star className="size-3.5" />
            {stars}
          </span>
        )}
      </div>
    </a>
  );
}
