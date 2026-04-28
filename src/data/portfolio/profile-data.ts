import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProfileSocialLink = {
  icon: LucideIcon;
  href: string;
  label: string;
};

export const profileSocialLinks: ProfileSocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/Adityasuryavanshi23",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aditya-suryavanshi-58b934381/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:adityasuryavanshi239@gmail.com",
    label: "Email",
  },
];

export const profileContact = {
  email: "adityasuryavanshi239@gmail.com",
  emailHref: "mailto:adityasuryavanshi239@gmail.com",
  githubHref: "https://github.com/Adityasuryavanshi23",
  linkedinHref: "https://www.linkedin.com/in/aditya-suryavanshi-58b934381/",
} as const;
