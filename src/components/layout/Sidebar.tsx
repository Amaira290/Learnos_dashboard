"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Award,
  Settings,
  ChevronLeft,
  Zap,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#", active: true },
  { label: "My Courses", icon: BookOpen, href: "#" },
  { label: "Progress", icon: TrendingUp, href: "#" },
  { label: "Achievements", icon: Award, href: "#" },
  { label: "Notifications", icon: Bell, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative hidden md:flex flex-col h-screen bg-bg-surface border-r border-border-subtle shrink-0 overflow-hidden z-20"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-border-subtle min-h-[72px]">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-accent-violet to-accent-purple shrink-0 shadow-glow">
          <Zap size={16} className="text-white" />
        </div>
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden"
            >
              <span className="font-display font-700 text-text-primary text-sm tracking-tight whitespace-nowrap">
                LearnOS
              </span>
              <p className="text-text-muted text-xs whitespace-nowrap">v2.0 Beta</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavButton
            key={item.label}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* User */}
      <div className="px-3 py-4 border-t border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center shrink-0 font-display font-semibold text-white text-sm">
            D
          </div>
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.15 }}
                className="overflow-hidden"
              >
                <p className="text-text-primary text-sm font-medium whitespace-nowrap">Amaira Malik</p>
                <p className="text-text-muted text-xs whitespace-nowrap">SRM Institute</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[72px] mt-4 w-6 h-6 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-glow transition-colors z-30"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <motion.div
          animate={{ rotate: collapsed ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <ChevronLeft size={12} />
        </motion.div>
      </button>
    </motion.aside>
  );
}

function NavButton({
  item,
  collapsed,
}: {
  item: (typeof navItems)[0];
  collapsed: boolean;
}) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      className={cn(
        "relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors group",
        item.active
          ? "text-text-primary"
          : "text-text-secondary hover:text-text-primary"
      )}
    >
      {item.active && (
        <motion.div
          layoutId="sidebar-active"
          className="absolute inset-0 bg-gradient-to-r from-accent-violet/20 to-accent-purple/10 rounded-xl border border-accent-violet/30"
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        />
      )}
      <Icon
        size={18}
        className={cn(
          "shrink-0 relative z-10",
          item.active ? "text-accent-glow" : "text-text-muted group-hover:text-text-secondary"
        )}
      />
      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 font-medium whitespace-nowrap overflow-hidden"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </a>
  );
}
