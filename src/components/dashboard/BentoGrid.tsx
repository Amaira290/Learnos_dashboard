"use client";

import { motion } from "framer-motion";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { StatsTile } from "@/components/dashboard/StatsTile";
import type { Course } from "@/types";

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 24 } } };

interface BentoGridProps { courses: Course[]; }

export function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-2"><HeroTile streak={7} /></motion.div>
      <motion.div variants={itemVariants} className="col-span-1"><StatsTile /></motion.div>
      {courses.map((course, index) => (<motion.div key={course.id} variants={itemVariants}><CourseCard course={course} index={index} /></motion.div>))}
      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-2"><ActivityTile /></motion.div>
    </motion.div>
  );
}
