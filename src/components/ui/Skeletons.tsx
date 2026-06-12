export function CourseSkeleton() {
  return (
    <div className="rounded-2xl bg-bg-card border border-border-subtle p-5 flex flex-col gap-4">
      <div className="w-10 h-10 rounded-xl skeleton" />
      <div className="space-y-2">
        <div className="h-4 rounded-lg skeleton w-3/4" />
        <div className="h-3 rounded-lg skeleton w-1/3" />
      </div>
      <div className="h-1.5 rounded-full skeleton" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="rounded-2xl bg-bg-card border border-border-subtle p-6 col-span-full lg:col-span-2 min-h-[200px] flex flex-col justify-between">
      <div className="space-y-3">
        <div className="h-3 skeleton rounded w-40" />
        <div className="h-8 skeleton rounded w-3/4" />
        <div className="h-4 skeleton rounded w-1/2" />
      </div>
      <div className="flex gap-3 mt-4">
        <div className="h-8 w-32 skeleton rounded-xl" />
        <div className="h-8 w-28 skeleton rounded-xl" />
      </div>
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="rounded-2xl bg-bg-card border border-border-subtle p-5">
      <div className="h-4 skeleton rounded w-24 mb-4" />
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-3 rounded-xl skeleton h-20" />
        ))}
      </div>
    </div>
  );
}
