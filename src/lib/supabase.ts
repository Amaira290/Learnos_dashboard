import { createClient } from "@supabase/supabase-js";
import type { Course } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }

  return data ?? [];
}

export async function getSeedSQL(): Promise<string> {
  return `
-- Create courses table
create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null default 'BookOpen',
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table courses enable row level security;

-- Allow public read access
create policy "Allow public read" on courses
  for select using (true);

-- Seed data
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Layers'),
  ('System Design Fundamentals', 42, 'Network'),
  ('TypeScript Deep Dive', 90, 'Code2'),
  ('Next.js App Router', 30, 'Zap');
`;
}
