"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { ProjectSkeleton } from "@/components/project-skeleton";

interface Repo {
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
}

const CACHE_KEY = "github-repos";

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      setRepos(JSON.parse(cached));
      return;
    }

    fetch("https://api.github.com/users/bjcf-dev/repos?sort=updated&per_page=20")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
      })
      .catch((e: Error) => setError(e.message));
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-foreground mb-8 text-3xl font-bold tracking-tight">Projects</h1>

      {error && (
        <p className="text-destructive text-sm">Failed to load: {error}</p>
      )}

      {!repos && !error && (
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectSkeleton key={i} />
          ))}
        </div>
      )}

      {repos && (
        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <ProjectCard
              key={repo.name}
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
              language={repo.language}
              url={repo.html_url}
            />
          ))}
        </div>
      )}
    </section>
  );
}
