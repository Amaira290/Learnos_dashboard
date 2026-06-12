"use client";

import { motion } from "framer-motion";
import { Flame, Calendar, Star } from "lucide-react";

interface HeroTileProps {
  streak: number;
}

export function HeroTile({ streak }: HeroTileProps) {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle grain col-span-full lg:col-span-2 min-h-[200px] flex flex-col justify-between p-6 shadow-card">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 bg-mesh-card pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-accent-violet/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-accent-cyan/8 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <Calendar size={13} className="text-text-muted" />
          <span className="text-text-muted text-xs font-mono">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <h1 className="font-display text-2xl lg:text-3xl font-semibold text-text-primary mt-1 leading-tight">
          {greeting}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-cyan">Amaira Malik</span> 👋
        </h1>
        <p className="text-text-secondary text-sm mt-1.5">
          Ready to level up today? You&apos;re on a roll.
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-4 mt-4">
        {/* Streak Badge */}
        <motion.div
          animate={{ boxShadow: ["0 0 8px rgba(251,191,36,0.3)", "0 0 20px rgba(251,191,36,0.6)", "0 0 8px rgba(251,191,36,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30"
        >
          <Flame size={15} className="text-amber-400" />
          <span className="text-amber-300 font-display font-semibold text-sm">{streak} day streak</span>
        </motion.div>

        {/* XP Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent-violet/10 border border-accent-violet/30">
          <Star size={13} className="text-accent-glow" />
          <span className="text-accent-glow font-display font-semibold text-sm">2,840 XP</span>
        </div>
      </div>
    </div>
  );
}
