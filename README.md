# Muneeb — Cinematic Creative Portfolio

A **premium, highly creative, cinematic portfolio website** for **Muneeb**, a professional **Social & Digital Media Expert, Video Editor, Social Media Manager, Content Strategist, and Graphic Designer**.

Built like a modern creative studio showcase and editorial magazine, combining dark obsidian aesthetics with controlled mint teal lighting accents and smooth motion animations.

---

## 🌟 Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (`Button`, `Card`, `Badge`, `Dialog`, `Sheet`, `Separator`, `Tooltip`, `Tabs`, `ScrollArea`)
- **Icons**: [Lucide React](https://lucide.dev/) (100% vector icons, zero emojis)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 🎨 Color System & Aesthetics

- **Deep Obsidian** (`#0B0F0E`): Main background
- **Dark Forest** (`#111917`): Component & card backgrounds
- **Mint Teal** (`#8FD3C7`): High-impact bright accent
- **Professional Teal** (`#1F7A70`): Primary brand accent
- **Cream Beige** (`#E9DDC8`): Warm typography & subheadings
- **Main Text** (`#F7F4ED`) & **Secondary Text** (`#A9B2AE`)
- **Film Grain Overlay**: Custom noise texture + radial teal ambient glows

---

## 🚀 Key Sections & Features

1. **Sticky Glass Navbar**:
   - Scroll-triggered glassmorphism blur
   - Desktop navigation & `Let's Talk` CTA button
   - Mobile responsive menu powered by shadcn `Sheet`

2. **Cinematic Hero**:
   - Oversized editorial typography: `I CREATE CONTENT THAT MOVES.`
   - Dark studio portrait media frame with subtle teal rim lighting
   - Animated floating badge cards (`VIDEO EDITING`, `SOCIAL MEDIA`, `CONTENT STRATEGY`)
   - Low-opacity background watermark (`CREATE`)

3. **Featured Work & YouTube Integration**:
   - Category filter tabs (*YouTube Content*, *Social Media*, *Video Editing*, *Graphic Design*, *Digital Strategy*)
   - Interactive hover cards with dark overlay, play icon reveal, and teal border glow
   - Safe YouTube embed modal (`getYouTubeVideoId`) supporting watch URLs, shorts, and shortened links
   - Expandable case study breakdown (*The Challenge*, *The Approach*, *The Content*, *The Result*)

4. **Verified Experience Timeline**:
   - Chronological timeline reflecting Muneeb's real CV background across tier-1 Pakistani news networks:
     - **Lahore Rang / Neo News** — Assistant Content Manager (2025 — Present)
     - **Dunya News** — YouTube Executive (Oct 2024 — Jan 2025)
     - **Lahore Rang / Neo News** — Social Media Executive (Jan 2023 — Oct 2024)
     - **Ali Scan** — Graphic Designer (Apr 2017 — Dec 2022)

5. **Tools of the Craft**:
   - Interactive cards for Photoshop, Premiere, Illustrator, CorelDRAW, InPage, YouTube, Facebook, Instagram, TikTok, Twitter/X

6. **Continuous Marquees**:
   - Dual-speed marquee banners respecting `prefers-reduced-motion`

7. **Editorial Contact Modal**:
   - High-impact CTA banner (`HAVE A STORY WORTH WATCHING?`) with an interactive inquiry form dialog

---

## 📁 Directory Structure

```text
muneeb/
├── app/
│   ├── layout.tsx         # Root layout with fonts, metadata, dark theme class
│   ├── page.tsx           # Single-page cinematic scroll portfolio assembling components
│   └── globals.css        # Custom color variables, film grain texture, marquee animations
├── components/
│   ├── ui/                # shadcn/ui primitives
│   └── portfolio/
│       ├── navbar.tsx          # Sticky glass navbar & mobile sheet nav
│       ├── hero.tsx            # Cinematic hero with oversized typography & media frame
│       ├── social-bar.tsx      # Vertical desktop social bar
│       ├── marquee.tsx         # Smooth continuous marquee
│       ├── trust-strip.tsx     # Organization highlights (Neo News, Dunya News, Ali Scan)
│       ├── featured-work.tsx   # Filterable project grid
│       ├── project-card.tsx    # Responsive work card with hover play indicator
│       ├── project-dialog.tsx  # Modal with lazy-loaded YouTube iframe embed & case study
│       ├── about.tsx           # Editorial Overview ("MORE THAN JUST EDITING.")
│       ├── experience.tsx      # Dual-mode career timeline
│       ├── skills.tsx          # Technical stack matrix
│       ├── contact.tsx         # Editorial CTA banner & inquiry modal
│       └── footer.tsx          # Dynamic minimal footer
├── data/
│   └── portfolio.ts        # Centralized structured data (Projects, Experience, Skills, Socials)
├── lib/
│   ├── youtube.ts          # Safe YouTube video ID extraction helper & URL validator
│   └── utils.ts            # shadcn helper utilities (cn)
└── public/
    └── images/             # High-quality cinematic portraits & project thumbnails
```

---

## ⚙️ How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MeNabeel/Muneeeb.git
   cd Muneeeb
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## ✏️ How to Edit Portfolio Content

All portfolio content is stored in `data/portfolio.ts`. You can edit YouTube URLs, project descriptions, skills, and personal information directly without touching UI components:

```ts
export const featuredWork: Project[] = [
  {
    id: "project-01",
    title: "Project Title",
    category: "YouTube Content",
    description: "Replace with project description",
    thumbnail: "/images/thumbnail-youtube.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];
```

---

## 📄 License

Created for **Muneeb**. All rights reserved.
