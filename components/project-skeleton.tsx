export function ProjectSkeleton() {
  return (
    <div className="border-border bg-card animate-pulse rounded-lg border p-5">
      <div className="bg-muted mb-3 h-5 w-3/5 rounded" />
      <div className="bg-muted mb-2 h-4 w-full rounded" />
      <div className="bg-muted mb-4 h-4 w-4/5 rounded" />
      <div className="flex items-center gap-4">
        <div className="bg-muted h-4 w-16 rounded" />
        <div className="bg-muted h-4 w-12 rounded" />
      </div>
    </div>
  );
}
