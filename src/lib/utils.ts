import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ActivityDay } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateActivityData(): ActivityDay[] {
  const days: ActivityDay[] = [];
  const today = new Date();

  for (let i = 119; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const rand = Math.random();
    days.push({
      date: date.toISOString().split("T")[0],
      count: rand > 0.6 ? Math.floor(rand * 8) : 0,
    });
  }

  return days;
}

export function getActivityColor(count: number): string {
  if (count === 0) return "bg-bg-elevated";
  if (count <= 2) return "bg-accent-violet/40";
  if (count <= 4) return "bg-accent-violet/70";
  return "bg-accent-glow";
}

export function getCurrentStreak(data: ActivityDay[]): number {
  let streak = 0;
  const reversed = [...data].reverse();
  for (const day of reversed) {
    if (day.count > 0) streak++;
    else break;
  }
  return streak;
}
