import { Suspense } from "react";

// Force dynamic rendering — this page depends on live Supabase data
export const dynamic = "force-dynamic";
import { getCourses } from "@/lib/supabase";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import Loading from "./loading";
import { Search, Bell } from "lucide-react";

// This is a React Server Component — data fetching happens server-side
async function DashboardContent() {
  const courses = await getCourses();
  return <BentoGrid courses={courses} />;
}

export default function HomePage() {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-base">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Topbar */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-bg-base/80 backdrop-blur-xl border-b border-border-subtle">
          <div>
            <h2 className="font-display font-semibold text-text-primary text-base">Dashboard</h2>
            <p className="text-text-muted text-xs">Track your learning journey</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-elevated border border-border-subtle text-text-muted text-sm hover:border-border-glow hover:text-text-secondary transition-colors">
              <Search size={14} />
              <span className="hidden sm:inline text-xs">Search...</span>
              <kbd className="hidden sm:inline text-xs bg-bg-card px-1.5 py-0.5 rounded border border-border-subtle font-mono">⌘K</kbd>
            </button>
            <button className="relative w-9 h-9 rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border-glow transition-colors">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-violet rounded-full" />
            </button>
          </div>
        </header>

        {/* Bento grid */}
        <section className="p-6 pb-24 md:pb-6">
          <Suspense fallback={<Loading />}>
            <DashboardContent />
          </Suspense>
        </section>
      </main>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  );
}
