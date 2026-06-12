"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, TrendingUp, Award, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const mobileNav = [
  { label: "Home", icon: LayoutDashboard, active: true },
  { label: "Courses", icon: BookOpen },
  { label: "Progress", icon: TrendingUp },
  { label: "Awards", icon: Award },
  { label: "Settings", icon: Settings },
];

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-bg-surface/90 backdrop-blur-xl border-t border-border-subtle px-2 pb-safe">
      <div className="flex items-center justify-around py-2">
        {mobileNav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={cn(
                "relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors",
                item.active ? "text-accent-glow" : "text-text-muted"
              )}
            >
              {item.active && (
                <motion.div
                  layoutId="mobile-active"
                  className="absolute inset-0 bg-accent-violet/15 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <Icon size={20} className="relative z-10" />
              <span className="text-[10px] font-medium relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
