# PROJECT_CONTEXT.md — Aditya Suryavanshi Portfolio Site

> Yeh file is portfolio project ka **complete context** hai — architecture, data flow, components, styling, aur conventions sab ek jagah.

---

## 1. Project Overview

| Field | Value |
|---|---|
| **Owner** | Aditya Jeetu Suryavanshi (AJS) |
| **Framework** | Next.js 16.2.1 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 + custom CSS variables (OKLCH colors) |
| **Animations** | Framer Motion 12 |
| **UI Components** | Shadcn/UI (Base UI v1 under the hood) |
| **Icons** | Lucide React + React Icons (si — Simple Icons) |
| **Theme** | next-themes (dark/light toggle) |
| **Deployment** | Vercel (frontend) / Netlify (some projects) |
| **Repo** | github.com/Adityasuryavanshi23/PortFolio |

---

## 2. Folder Structure

```
portfolio-site/
├── public/
│   └── Aditya S.Resume Upadated.pdf       # Resume PDF for download
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css                    # All CSS variables + utility classes
│   │   ├── layout.tsx                     # Root layout — fonts, ThemeProvider, TooltipProvider
│   │   └── page.tsx                       # Single page — renders all sections in order
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ui/                            # Shadcn UI primitives
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── separator.tsx
│   │       └── tooltip.tsx
│   ├── data/
│   │   └── portfolio/                     # ← Sabse important folder
│   │       ├── profile-data.ts            # Master contact/social data
│   │       ├── navbar-data.ts
│   │       ├── hero-data.ts
│   │       ├── skills-data.ts
│   │       ├── projects-data.ts
│   │       ├── experience-data.ts
│   │       ├── contact-data.ts
│   │       └── footer-data.ts
│   └── lib/
│       └── utils.ts                       # cn() helper (clsx + tailwind-merge)
```

---

## 3. Key Architecture Pattern

**Data-Component Separation** — Saara content `src/data/portfolio/` mein hai. Components sirf data import karke render karte hain. Koi bhi content change karna ho toh **sirf data files** touch karo, component file nahi.

```
profile-data.ts  ──►  hero-data.ts
                  ──►  contact-data.ts
                  ──►  footer-data.ts
```

`profile-data.ts` **single source of truth** hai email, phone, GitHub, LinkedIn ke liye. Baaki files isko import karti hain.

---

## 4. Page Structure (src/app/page.tsx)

Single-page portfolio. Sections ka order:

```
<Navbar />          fixed top
<Hero />            #hero       — full-screen landing
<Skills />          #skills     — tech stack cards
<Projects />        #projects   — 6 project cards (3-col grid)
<Experience />      #experience — vertical timeline
<Contact />         #contact    — social cards + email CTA
<Footer />          — logo + copyright + social links
```

---

## 5. Data Files — Kya hai kahan

### `profile-data.ts` — Master Data
```ts
profileSocialLinks[]   // GitHub, LinkedIn, Email (LucideIcon + href + label)
profileContact         // email, emailHref, whatsappNumber, whatsappHref, githubHref, linkedinHref
```

### `navbar-data.ts`
```ts
navbarContent: NavbarContent
  brand: "AJS"
  accent: "."
  links: NavLink[]          // About, Skills, Projects, Experience, Contact
  resumeViewUrl             // Canva link
  resumeDownloadUrl         // "/Aditya S.Resume Upadated.pdf"
```

### `hero-data.ts`
```ts
heroContent: HeroContent
  availabilityLabel, greeting, firstName, lastName
  roles[]               // typewriter animation ke liye
  tagline, currentCompany: "Boppo Technologies"
  primaryCta, secondaryCta, scrollTarget
  socialLinks           // from profile-data
  contactEmailHref      // from profile-data
```

### `skills-data.ts`
```ts
skillsContent           // heading text
skillGroups[]           // 4 groups: Frontend, Backend, Database & ORM, Tools & Others
skillGroupIcons         // emoji per category
skillBorderColorMap     // hover border colors
skillTitleColorMap      // title colors
skillDividerMap         // divider gradient colors
skillBadgeMap           // badge colors
```

### `projects-data.ts`
```ts
projectsContent         // heading + githubProfileUrl
projectTechIconMap      // tag → { icon, color, emoji }
projects[]              // 6 projects:
  // 1. BookMate           (React, Tailwind, JSON Server)
  // 2. Full Stack Blog    (Next.js, Express, PostgreSQL, Drizzle ORM, JWT)
  // 3. Freelancer Manager (Next.js, MongoDB, NextAuth, SWR, Formik)
  // 4. CinemaTe           (React, REST API, Tailwind)
  // 5. Chat UI            (React, Tailwind, Framer Motion)
  // 6. JWT Decoder        (React, Tailwind, localStorage, JWT)
```

### `experience-data.ts`
```ts
experienceContent       // heading text
timeline[]              // 3 items:
  // 1. Frontend Developer @ Boppo Technologies (Oct 2025–Present, current: true)
  // 2. Frontend Intern @ Solulab (Jun–Sep 2024)
  // 3. Web Development — Self-taught + Bootcamp (2023–2024)
experienceColorMap      // primary/secondary/accent → dot/border/badge/title classes
```

### `contact-data.ts`
```ts
contactContent: ContactContent
  eyebrow, titleStart, titleHighlight, description[]
  socials[]   // GitHub, LinkedIn, Email, WhatsApp (from profile-data)
  ctaLabel: "Say Hello 👋"
  ctaHref     // mailto from profile-data
```

### `footer-data.ts`
```ts
footerContent
  brand: "AJS", accent: "."
  ownerName: "Aditya Jeetu Suryavanshi"
  builtWith: "Next.js & ❤️"
  socialLinks   // from profile-data
```

---

## 6. Styling System

### Color Theme (OKLCH)
3 main accent colors:
| Token | Dark Mode | Use |
|---|---|---|
| `--primary` | Electric Violet `oklch(0.68 0.28 295)` | Main CTA, headings, glow |
| `--secondary` | Neon Cyan `oklch(0.72 0.19 195)` | Secondary elements |
| `--accent` | Hot Pink `oklch(0.68 0.27 330)` | Accent highlights |

### Custom Utility Classes (globals.css)
```css
.glass          /* glassmorphism card effect */
.border-glow    /* glowing border */
.glow-primary   /* primary color box-shadow glow */
.glow-secondary /* secondary color glow */
.glow-accent    /* accent color glow */
.text-gradient-primary  /* violet → cyan gradient text */
.text-gradient-hot      /* pink → violet gradient text */
.hero-grid      /* background grid lines */
```

### Fonts (layout.tsx)
```
--font-inter        → body text (sans)
--font-space-grotesk → headings
--font-fira-code    → monospace (--font-mono)
```

---

## 7. Components — Key Details

### `Navbar.tsx`
- Fixed top, `z-index: 9999`
- Scroll-aware: shadow appears after 20px scroll
- Resume button: dropdown with View (Canva) + Download (PDF)
- Dark/light toggle (next-themes)
- Mobile: hamburger menu with AnimatePresence

### `Hero.tsx`
- Typewriter effect: `roles[]` array cycling with custom useEffect
- Background: blur blobs + `.hero-grid`
- CTAs: "View My Work" → `#projects`, "Hire Me" → `#contact`
- Social icons from `profileSocialLinks`

### `Skills.tsx`
- 2×2 grid of `SkillGroup` cards
- Each card: emoji icon + colored title + divider + badge pills
- `skillGroups` se data, color maps se styling

### `Projects.tsx`
- 3-col grid (`grid-cols-3`)
- Each card: colored top bar, title, description, tech badges with icons, Live + Code buttons
- `projectTechIconMap` se icon/color lookup

### `Experience.tsx`
- Vertical timeline (left border line)
- 3 items: current job, internship, education
- `current: true` wale pe animated green dot

### `Contact.tsx`
- 4 social cards (GitHub, LinkedIn, Email, WhatsApp)
- "Say Hello 👋" email CTA button

### `Footer.tsx`
- Logo + copyright + social icons
- Year auto-calculated: `new Date().getFullYear()`

---

## 8. Personal Info (Quick Reference)

| Field | Value |
|---|---|
| Name | Aditya Jeetu Suryavanshi |
| Email | adityasuryavanshi239@gmail.com |
| WhatsApp | +91 7875415526 |
| GitHub (main) | github.com/Adityasuryavanshi23 |
| GitHub (alt) | github.com/AdityaSuryavanshi90 |
| LinkedIn | linkedin.com/in/aditya-suryavanshi-58b934381 |
| Current Job | Frontend Developer @ Boppo Technologies Pvt Ltd |
| Brand | AJS. |

---

## 9. Content Update Karna Ho Toh

| Kya update karna hai | Kahan jaao |
|---|---|
| Email / Phone / Social links | `src/data/portfolio/profile-data.ts` |
| Navbar links ya resume URL | `src/data/portfolio/navbar-data.ts` |
| Hero name / tagline / roles | `src/data/portfolio/hero-data.ts` |
| Skills add/remove | `src/data/portfolio/skills-data.ts` |
| Projects add/remove | `src/data/portfolio/projects-data.ts` |
| Job/experience entries | `src/data/portfolio/experience-data.ts` |
| Contact section text | `src/data/portfolio/contact-data.ts` |
| Footer text | `src/data/portfolio/footer-data.ts` |
| Colors / theme | `src/app/globals.css` |
| Page metadata (title/desc) | `src/app/layout.tsx` |
| Resume PDF | `public/` folder |

---

## 10. Dev Commands

```bash
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # ESLint check
```

---

*Last analyzed: Full codebase scan — all components, data files, CSS.*
