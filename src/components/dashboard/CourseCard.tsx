"use client";

import { motion } from "framer-motion";
import {
  Layers, Network, Code2, Zap, BookOpen, Database,
  Globe, Cpu, BarChart, Lock, Terminal, Palette,
} from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { Course } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Layers, Network, Code2, Zap, BookOpen, Database,
  Globe, Cpu, BarChart, Lock, Terminal, Palette,
};

const gradients = [
  "from-violet-500/20 via-purple-500/10 to-transparent",
  "from-cyan-500/20 via-teal-500/10 to-transparent",
  "from-indigo-500/20 via-blue-500/10 to-transparent",
  "from-fuchsia-500/20 via-pink-500/10 to-transparent",
];

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const Icon = iconMap[course.icon_name] ?? BookOpen;
  const gradient = gradients[index % gradients.length];

  return (
    <motion.article
      whileHover={{ scale: 1.018, y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle grain group cursor-pointer shadow-card"
    >
      {/* Mesh background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />

      {/* Hover glow border */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 rounded-2xl border border-accent-violet/40 shadow-glow pointer-events-none"
      />

      <div className="relative z-10 p-5 flex flex-col gap-4">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-center group-hover:border-accent-violet/40 transition-colors">
          <Icon size={18} className="text-accent-glow" />
        </div>

        {/* Title */}
        <div>
          <h3 className="font-display font-semibold text-text-primary text-sm leading-snug">
            {course.title}
          </h3>
          <p className="text-text-muted text-xs mt-0.5 font-mono">
            {course.progress}% complete
          </p>
        </div>

        {/* Progress */}
        <ProgressBar value={course.progress} />
      </div>
    </motion.article>
  );
}
