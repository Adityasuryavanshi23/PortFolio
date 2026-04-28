import {
  profileContact,
  profileSocialLinks,
} from "@/data/portfolio/profile-data";

export type HeroContent = {
  availabilityLabel: string;
  greeting: string;
  firstName: string;
  lastName: string;
  roles: string[];
  tagline: string;
  currentCompany: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  scrollTarget: string;
  socialLinks: typeof profileSocialLinks;
  contactEmailHref: string;
};

export const heroContent: HeroContent = {
  availabilityLabel: "Available for Opportunities",
  greeting: "Hi, I'm",
  firstName: "Aditya",
  lastName: "Suryavanshi",
  roles: [
    "Frontend Developer",
    "React.js Engineer",
    "Next.js Developer",
    "Full Stack Explorer",
  ],
  tagline:
    "Building fast, modern web experiences with React & Next.js. Currently shipping at",
  currentCompany: "Boppo Technologies",
  primaryCta: {
    label: "View My Work",
    href: "#projects",
  },
  secondaryCta: {
    label: "Hire Me",
    href: "#contact",
  },
  scrollTarget: "#about",
  socialLinks: profileSocialLinks,
  contactEmailHref: profileContact.emailHref,
};
