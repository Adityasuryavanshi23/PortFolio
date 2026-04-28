export type SkillGroupColor = "primary" | "secondary" | "accent";

export type SkillGroup = {
  category: string;
  color: SkillGroupColor;
  skills: string[];
};

export type SkillsContent = {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
};

export const skillsContent: SkillsContent = {
  eyebrow: "What I Know",
  titleStart: "Tech",
  titleHighlight: "Stack",
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    color: "primary",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    color: "secondary",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Middleware",
      "API Testing (Postman)",
    ],
  },
  {
    category: "Database & ORM",
    color: "accent",
    skills: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Drizzle ORM",
      "Firebase Firestore",
      "MongoDB Atlas",
    ],
  },
  {
    category: "Tools & Others",
    color: "primary",
    skills: [
      "Git & GitHub",
      "MCP Tools",
      "AI Dev Tools",
      "Vercel",
      "Netlify",
      "VS Code",
    ],
  },
];

export const skillGroupIcons: Record<string, string> = {
  Frontend: "⚡",
  Backend: "🔧",
  "Database & ORM": "🗄️",
  "Tools & Others": "🛠️",
};

export const skillBorderColorMap: Record<SkillGroupColor, string> = {
  primary: "hover:border-primary/60 hover:shadow-primary/10",
  secondary: "hover:border-secondary/60 hover:shadow-secondary/10",
  accent: "hover:border-accent/60 hover:shadow-accent/10",
};

export const skillTitleColorMap: Record<SkillGroupColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

export const skillDividerMap: Record<SkillGroupColor, string> = {
  primary: "from-primary/40 to-transparent",
  secondary: "from-secondary/40 to-transparent",
  accent: "from-accent/40 to-transparent",
};

export const skillBadgeMap: Record<SkillGroupColor, string> = {
  primary: "border-primary/30 text-primary bg-primary/10 hover:bg-primary/20",
  secondary:
    "border-secondary/30 text-secondary bg-secondary/10 hover:bg-secondary/20",
  accent: "border-accent/30 text-accent bg-accent/10 hover:bg-accent/20",
};
