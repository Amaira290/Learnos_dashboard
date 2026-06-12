"use client";

import { motion } from "framer-motion";
import { Clock, Target, Trophy, TrendingUp } from "lucide-react";

const stats = [
  { label: "Hours Learned", value: "142h", icon: Clock, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { label: "Goals Met", value: "12/15", icon: Target, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  { label: "Certificates", value: "3", icon: Trophy, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { label: "Week Growth", value: "+18%", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
];

export function StatsTile() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle grain p-5 shadow-card">
      <div className="absolute inset-0 bg-mesh-card pointer-events-none" />
      <h2 className="font-display font-semibold text-text-primary text-sm mb-4 relative z-10">
        Quick Stats
      </h2>
      <div className="grid grid-cols-2 gap-3 relative z-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
              className={`flex flex-col gap-2 p-3 rounded-xl border ${stat.bg} ${stat.border}`}
            >
              <Icon size={14} className={stat.color} />
              <div>
                <p className={`font-display font-bold text-lg ${stat.color}`}>{stat.value}</p>
                <p className="text-text-muted text-xs">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
