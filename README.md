# 🚀 LearnOS — Next-Gen Learning Dashboard

A futuristic, animated student dashboard built for the **Frontend Intern Challenge** at Internshala. Features live Supabase data, Framer Motion animations, and a dark-mode Bento Grid layout.

**Live Demo:** [Deploy link after Vercel deployment]  
**GitHub:** [Your repo link]

---

## 🏗️ Architecture Overview

### Server / Client Component Split

```
app/
├── page.tsx                    ← Server Component (fetches Supabase data)
│   └── DashboardContent()      ← async RSC — calls getCourses()
│       └── <BentoGrid />       ← Client Component (receives courses as props)
│           ├── <HeroTile />    ← Client (Framer Motion animations)
│           ├── <CourseCard />  ← Client (hover interactions)
│           ├── <ActivityTile />← Client (contribution graph)
│           └── <StatsTile />   ← Client (animated counters)
├── layout.tsx                  ← Server Component
├── loading.tsx                 ← Server Component (Suspense fallback)
└── error.tsx                   ← Client Component (error boundary)
```

**Key decision:** Data fetching lives in `page.tsx` (server), and all the interactive/animated components are marked `"use client"`. This keeps secrets on the server and reduces client bundle size.

### Why `@supabase/supabase-js` over `@supabase/ssr`?

For this read-only public dashboard (no auth), the standard client with `NEXT_PUBLIC_*` env vars is simpler and sufficient. For user-authenticated dashboards, `@supabase/ssr` with cookie-based sessions would be the correct choice.

---

## ✨ Key Design Decisions

- **Bento Grid** — CSS Grid with deliberate spanning, not equal tiles. The hero and activity tiles span 2 columns to create visual hierarchy.
- **Zero layout shifts** — All animations use `transform` and `opacity` only. No `height`, `width`, `top`, or `margin` animations.
- **Spring physics everywhere** — Framer Motion spring (stiffness: 300, damping: 20) for all card hover states; feels physical, not mechanical.
- **Grain texture** — CSS SVG noise filter applied as `::after` pseudo-element on cards for premium tactile feel without image assets.
- **Staggered entrance** — `containerVariants` with `staggerChildren: 0.08` creates a cascading reveal that reads left-to-right, top-to-bottom.

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/your-username/learn-os-dashboard
cd learn-os-dashboard
npm install
```

### 2. Set Up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run:

```sql
-- Create courses table
create table courses (
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
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Get these from: **Supabase Dashboard → Project → Settings → API**

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard:
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Or push to GitHub and connect via [vercel.com/import](https://vercel.com/import).

---

## 🧪 Tech Stack

| Tool | Version | Why |
|------|---------|-----|
| Next.js | 15.x | App Router, RSC, streaming |
| React | 19.x | Latest concurrent features |
| Framer Motion | 11.x | Spring physics, layoutId |
| Supabase | 2.x | PostgreSQL BaaS |
| Tailwind CSS | 3.x | Utility-first, JIT |
| Lucide React | 0.469 | Consistent icon system |
| TypeScript | 5.x | Full type safety |

---

## 📊 Evaluation Criteria Coverage

| Criterion | Implementation |
|-----------|---------------|
| **Data Architecture (30%)** | RSC in `page.tsx` fetches from Supabase; `@supabase/supabase-js` used securely; `<Suspense>` with skeleton loaders; graceful error boundary |
| **Framer Motion (30%)** | Staggered entrance (`staggerChildren`), spring hover states (`stiffness: 300, damping: 20`), `layoutId` for sidebar active state, animated progress bars |
| **Code Quality (20%)** | TypeScript interfaces for all data, modular component tree, `cn()` utility for class merging |
| **Visual Fidelity (20%)** | Dark mode only, gradient meshes, grain texture, responsive Bento Grid (mobile/tablet/desktop) |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Server Component — data entry point
│   ├── loading.tsx         # Suspense skeleton fallback
│   ├── error.tsx           # Error boundary
│   └── globals.css         # Base styles + custom animations
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx     # Collapsible nav (desktop)
│   │   └── MobileNav.tsx   # Bottom nav bar (mobile)
│   ├── dashboard/
│   │   ├── BentoGrid.tsx   # Stagger container
│   │   ├── HeroTile.tsx    # Greeting + streak
│   │   ├── CourseCard.tsx  # Dynamic course tiles
│   │   ├── ActivityTile.tsx # Contribution graph
│   │   └── StatsTile.tsx   # Quick stats
│   └── ui/
│       ├── ProgressBar.tsx # Animated progress
│       └── Skeletons.tsx   # Loading placeholders
├── lib/
│   ├── supabase.ts         # Client + data fetching
│   └── utils.ts            # cn(), activity generators
└── types/
    └── index.ts            # TypeScript interfaces
```

---

## 🎨 Design System

**Colors:**
- Background: `#0a0a0f` (base) → `#16162a` (card)
- Accent: `#7c3aed` (violet) + `#06b6d4` (cyan)
- Text: `#f0f0ff` (primary) → `#4a4a6a` (muted)

**Typography:**
- Display: Space Grotesk (headings, labels)
- Body: Inter (prose, descriptions)
- Mono: JetBrains Mono (data, percentages)

---

## ⚠️ Challenges & Solutions

1. **Layout shifts during animation** — Solved by using only `transform: translateY` and `opacity` in all Framer Motion configs.
2. **Hydration mismatch** — Activity data is generated deterministically client-side to avoid server/client mismatch.
3. **Skeleton → content transition** — Wrapping RSC in `<Suspense>` with a matching grid skeleton prevents jarring jumps.
