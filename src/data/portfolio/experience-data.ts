import { Award, Briefcase, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ExperienceColor = "primary" | "secondary" | "accent";

export type TimelineItem = {
  type: "work" | "internship" | "education";
  icon: LucideIcon;
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  color: ExperienceColor;
  current: boolean;
};

export type ExperienceContent = {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
};

export const experienceContent: ExperienceContent = {
  eyebrow: "Journey So Far",
  titleStart: "Experience & Timeline",
  titleHighlight: "Timeline",
};

export const timeline: TimelineItem[] = [
  {
    type: "work",
    icon: Briefcase,
    title: "Frontend Developer",
    company: "Boppo Technologies Pvt Ltd",
    period: "Oct 2025 – Present",
    description:
      "Working as a Frontend Developer building and maintaining web applications using React.js, Next.js, Node.js and Tailwind CSS. Handling real-world client projects independently.",
    tags: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
    color: "primary",
    current: true,
  },
  {
    type: "internship",
    icon: Award,
    title: "Frontend Intern",
    company: "Solulab",
    period: "Jun 2024 – Sep 2024",
    description:
      "Learned real-world React workflows and component-based development. Worked on production-grade UI components and understood industry-level code practices.",
    tags: ["React.js", "Component Architecture", "UI Development"],
    color: "secondary",
    current: false,
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Web Development",
    company: "Self-taught + Bootcamp",
    period: "2023 – 2024",
    description:
      "Mastered frontend fundamentals, then expanded into fullstack — Node.js, Express, MongoDB, PostgreSQL, JWT auth, and API development.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    color: "accent",
    current: false,
  },
];

export type ExperienceColorTokens = {
  dot: string;
  border: string;
  badge: string;
  title: string;
};

export const experienceColorMap: Record<
  ExperienceColor,
  ExperienceColorTokens
> = {
  primary: {
    dot: "bg-primary",
    border: "border-primary/40",
    badge: "border-primary/30 text-primary bg-primary/10",
    title: "text-primary",
  },
  secondary: {
    dot: "bg-secondary",
    border: "border-secondary/40",
    badge: "border-secondary/30 text-secondary bg-secondary/10",
    title: "text-secondary",
  },
  accent: {
    dot: "bg-accent",
    border: "border-accent/40",
    badge: "border-accent/30 text-accent bg-accent/10",
    title: "text-accent",
  },
};
