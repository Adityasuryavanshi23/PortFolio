import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profileContact } from "@/data/portfolio/profile-data";

export type ContactSocialCard = {
  icon: LucideIcon;
  label: string;
  handle: string;
  href: string;
  color: string;
};

export type ContactContent = {
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  description: string[];
  socials: ContactSocialCard[];
  ctaLabel: string;
  ctaHref: string;
};

export const contactContent: ContactContent = {
  eyebrow: "Get In Touch",
  titleStart: "Let's",
  titleHighlight: "Connect",
  description: [
    "Open to freelance work, full-time roles, or just a tech chat.",
    "Drop a message — I usually reply fast.",
  ],
  socials: [
    {
      icon: Github,
      label: "GitHub",
      handle: "@Adityasuryavanshi23",
      href: profileContact.githubHref,
      color: "hover:border-primary/50 hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "aditya-suryavanshi",
      href: profileContact.linkedinHref,
      color: "hover:border-secondary/50 hover:text-secondary",
    },
    {
      icon: Mail,
      label: "Email",
      handle: profileContact.email,
      href: profileContact.emailHref,
      color: "hover:border-accent/50 hover:text-accent",
    },
  ],
  ctaLabel: "Say Hello 👋",
  ctaHref: profileContact.emailHref,
};
