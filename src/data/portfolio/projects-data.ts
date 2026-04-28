import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type ProjectTechMeta = {
  icon: IconType | null;
  color: string;
  emoji?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
  gradient: string;
  glowColor: string;
  accentColor: string;
};

export type ProjectsContent = {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
  githubProfileUrl: string;
  viewAllLabel: string;
};

export const projectsContent: ProjectsContent = {
  eyebrow: "What I've Built",
  titleStart: "Featured",
  titleHighlight: "Projects",
  description: "Personal projects I've built from scratch — shipped and live.",
  githubProfileUrl: "https://github.com/Adityasuryavanshi23",
  viewAllLabel: "View All on GitHub",
};

export const projectTechIconMap: Record<string, ProjectTechMeta> = {
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Framer Motion": { icon: SiFramer, color: "#BB4AEF" },
  "Firebase Auth": { icon: SiFirebase, color: "#FFA000" },
  Firestore: { icon: SiFirebase, color: "#FF6F00" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Next.js": { icon: SiNextdotjs, color: "var(--tech-neutral-icon)" },
  "Node.js": { icon: SiNodedotjs, color: "#68A063" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  "JSON Server": { icon: null, color: "#F59E0B", emoji: "🗄️" },
  "REST API": { icon: null, color: "#10B981", emoji: "🔗" },
  "Protected Routes": { icon: null, color: "#8B5CF6", emoji: "🔒" },
  localStorage: { icon: null, color: "#F59E0B", emoji: "💾" },
  JWT: { icon: null, color: "#00B4D8", emoji: "🔑" },
  "Express.js": { icon: SiExpress, color: "var(--tech-neutral-icon)" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  "Drizzle ORM": { icon: null, color: "#C5F74F", emoji: "🌿" },
  "Auth & JWT": { icon: null, color: "#00B4D8", emoji: "🔑" },
  CRUD: { icon: null, color: "#10B981", emoji: "⚡" },
  NextAuth: { icon: null, color: "var(--tech-neutral-icon)", emoji: "🔐" },
  SWR: { icon: null, color: "#F9A8D4", emoji: "⚡" },
  Formik: { icon: null, color: "#172B4D", emoji: "📝" },
  Yup: { icon: null, color: "#8B5CF6", emoji: "✅" },
};

export const projects: Project[] = [
  {
    title: "BookMate",
    description:
      "A full-featured book management platform with product listing, search, filtering and a responsive UI. Developed backend APIs using JSON Server for managing products and orders.",
    tags: ["React.js", "Tailwind CSS", "JSON Server", "REST API"],
    live: "https://as-bookmate.netlify.app/",
    github: "https://github.com/Adityasuryavanshi23/BookMate",
    gradient: "from-primary/20 to-secondary/10",
    glowColor: "hover:glow-primary",
    accentColor: "text-primary",
  },
  {
    title: "Full Stack Blog Platform",
    description:
      "A production-grade full-stack blog app with Next.js on the frontend and an Express.js + PostgreSQL backend powered by Drizzle ORM. Implements JWT-based auth, request validation, protected middleware, full CRUD for blog posts, and an admin-only delete gate — demonstrating real-world full-stack integration from DB schema to UI.",
    tags: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Auth & JWT",
      "CRUD",
    ],
    live: "",
    github: "https://github.com/AdityaSuryavanshi90/Blog-PlatForm",
    gradient: "from-accent/20 to-primary/10",
    glowColor: "hover:glow-accent",
    accentColor: "text-accent",
  },
  {
    title: "Freelancer Manager",
    description:
      "A full-stack freelancer management platform built with Next.js App Router and MongoDB. Lets users track clients, projects, and tasks from a single dashboard. Built with Next.js API routes for the backend, NextAuth for authentication, SWR for client-side data caching, and Formik + Yup for form handling and validation — a complete real-world Next.js full-stack app.",
    tags: [
      "Next.js",
      "MongoDB",
      "NextAuth",
      "SWR",
      "Formik",
      "Yup",
      "Tailwind CSS",
    ],
    live: "https://freelancer-manager-platform.vercel.app/",
    github:
      "https://github.com/Adityasuryavanshi23/Freelancer-Manager-Platform",
    gradient: "from-primary/20 to-accent/10",
    glowColor: "hover:glow-primary",
    accentColor: "text-primary",
  },
  {
    title: "CinemaTe",
    description:
      "A movie discovery platform built using a public movie API. Features dynamic search, filtering, and detailed movie pages with a fully responsive design.",
    tags: ["React.js", "REST API", "Tailwind CSS"],
    live: "https://cinemate-cn.netlify.app/",
    github: "https://github.com/Adityasuryavanshi23/Cinema",
    gradient: "from-secondary/20 to-accent/10",
    glowColor: "hover:glow-secondary",
    accentColor: "text-secondary",
  },
  {
    title: "Chat UI",
    description:
      "A sleek, fully responsive chat interface inspired by modern AI chat apps. Features a collapsible sidebar for conversation history, animated message bubbles with smooth entry transitions, a built-in AI co-pilot suggestion box for smart replies, and a seamless dark/light mode toggle — all wired with dummy data to simulate a real messaging experience.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    live: "https://chatui-ap.netlify.app/",
    github: "https://github.com/Adityasuryavanshi23/CHAT-UI",
    gradient: "from-secondary/20 to-primary/10",
    glowColor: "hover:glow-secondary",
    accentColor: "text-secondary",
  },
  {
    title: "JWT Decoder",
    description:
      "A developer utility tool to instantly decode and inspect JWT tokens — breaking them down into header, payload, and signature sections with syntax highlighting. Features token expiry validation, auto-decode on input, localStorage caching so your last token persists across sessions, and a clean dark/light mode UI built for everyday developer workflows.",
    tags: ["React.js", "Tailwind CSS", "localStorage", "JWT"],
    live: "https://jwt-decoder.netlify.app/",
    github: "https://github.com/Adityasuryavanshi23/JwtDecoder",
    gradient: "from-accent/20 to-secondary/10",
    glowColor: "hover:glow-accent",
    accentColor: "text-accent",
  },
];
