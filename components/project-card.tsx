import { Star, ChevronDown } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string | null;
  stars: number;
  language: string | null;
  url: string;
  skills: string[];
}

const HIGHLIGHT_LANGS = ["Rust", "TypeScript"];

export function ProjectCard({ name, description, stars, language, url, skills }: ProjectCardProps) {
  const isHighlight = language && HIGHLIGHT_LANGS.includes(language);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-xl border border-white/30 bg-white/60 p-5 shadow-lg shadow-black/5 backdrop-blur-md transition-all hover:-translate-y-1 hover:scale-[1.02] hover:border-white/50 hover:bg-white/80 hover:shadow-xl dark:border-white/10 dark:bg-black/30 dark:shadow-black/20 dark:hover:border-white/20 dark:hover:bg-black/50"
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

      {/* Skills — reveal on hover */}
      <div className="max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-48">
        <div className="pt-4">
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700/50 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* chevron indicator */}
      <ChevronDown className="text-muted-foreground/40 group-hover:text-muted-foreground mx-auto mt-2 size-4 transition-all duration-300 group-hover:rotate-180" />
    </a>
  );
}
