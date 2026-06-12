import { CourseSkeleton, HeroSkeleton, StatsSkeleton } from "@/components/ui/Skeletons";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <HeroSkeleton />
      </div>
      <div className="col-span-1">
        <StatsSkeleton />
      </div>
      {[1, 2, 3, 4].map((i) => (
        <CourseSkeleton key={i} />
      ))}
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <div className="rounded-2xl bg-bg-card border border-border-subtle p-6 h-48 skeleton" />
      </div>
    </div>
  );
}
