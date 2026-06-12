"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8">
      <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
        <AlertTriangle size={20} className="text-red-400" />
      </div>
      <div className="text-center">
        <h2 className="font-display font-semibold text-text-primary mb-1">
          Something went wrong
        </h2>
        <p className="text-text-secondary text-sm max-w-sm">
          {error.message || "Failed to load dashboard data. Check your Supabase connection."}
        </p>
      </div>
      <button
        onClick={reset}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-violet/20 border border-accent-violet/30 text-accent-glow text-sm font-medium hover:bg-accent-violet/30 transition-colors"
      >
        <RefreshCw size={14} />
        Try again
      </button>
    </div>
  );
}
