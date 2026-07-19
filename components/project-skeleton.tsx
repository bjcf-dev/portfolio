export function ProjectSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-white/30 bg-white/60 p-5 shadow-lg shadow-black/5 backdrop-blur-md dark:border-white/10 dark:bg-black/30 dark:shadow-black/20">
      <div className="bg-slate-300/50 mb-3 h-5 w-3/5 rounded dark:bg-slate-600/50" />
      <div className="bg-slate-300/50 mb-2 h-4 w-full rounded dark:bg-slate-600/50" />
      <div className="bg-slate-300/50 mb-4 h-4 w-4/5 rounded dark:bg-slate-600/50" />
      <div className="flex items-center gap-4">
        <div className="bg-slate-300/50 h-4 w-16 rounded dark:bg-slate-600/50" />
        <div className="bg-slate-300/50 h-4 w-12 rounded dark:bg-slate-600/50" />
      </div>
    </div>
  );
}
