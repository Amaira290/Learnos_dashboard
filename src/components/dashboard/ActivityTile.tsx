"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { generateActivityData, getActivityColor, getCurrentStreak } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function ActivityTile() {
  const [activityData, setActivityData] = useState<ReturnType<typeof generateActivityData>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const data = generateActivityData();
    setActivityData(data);
    setMounted(true);
  }, []);

  const streak = getCurrentStreak(activityData);
  const totalContributions = activityData.filter((d) => d.count > 0).length;

  const weeks: (typeof activityData)[] = [];
  for (let i = 0; i < activityData.length; i += 7) {
    weeks.push(activityData.slice(i, i + 7));
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle grain col-span-full lg:col-span-2 p-6 shadow-card">
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent-cyan/6 blur-3xl pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity size={15} className="text-accent-cyan" />
            <h2 className="font-display font-semibold text-text-primary text-sm">Learning Activity</h2>
          </div>
          <div className="text-text-muted text-xs font-mono">{mounted ? `${totalContributions} active days` : "—"}</div>
        </div>
        {mounted ? (
          <div className="flex gap-1 overflow-x-auto pb-1">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((day, dIdx) => (
                  <motion.div key={day.date} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: (wIdx * 7 + dIdx) * 0.003, type: "spring", stiffness: 300, damping: 20 }} title={`${day.date}: ${day.count} sessions`} className={cn("w-3 h-3 rounded-sm transition-transform hover:scale-125 cursor-default", getActivityColor(day.count))} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="h-24 skeleton rounded-xl" />
        )}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-text-muted text-xs">Less</span>
          {[0, 2, 4, 6].map((count) => (<div key={count} className={cn("w-3 h-3 rounded-sm", getActivityColor(count))} />))}
          <span className="text-text-muted text-xs">More</span>
        </div>
      </div>
    </div>
  );
}
