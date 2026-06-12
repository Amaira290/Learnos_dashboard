"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface ProgressBarProps {
  value: number;
  className?: string;
}

export function ProgressBar({ value, className = "" }: ProgressBarProps) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return (
    <div ref={ref} className={`relative h-1.5 rounded-full bg-bg-elevated overflow-hidden ${className}`}>
      <motion.div
        style={{ width: spring.get() === 0 ? "0%" : undefined }}
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
        initial={{ width: "0%" }}
        animate={inView ? { width: `${value}%` } : { width: "0%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
      {/* Shimmer */}
      <motion.div
        className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ left: "-2rem" }}
        animate={inView ? { left: "110%" } : { left: "-2rem" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      />
    </div>
  );
}
