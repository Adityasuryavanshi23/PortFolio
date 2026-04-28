import { profileSocialLinks } from "@/data/portfolio/profile-data";

export type FooterContent = {
  brand: string;
  accent: string;
  ownerName: string;
  builtWith: string;
  socialLinks: typeof profileSocialLinks;
};

export const footerContent: FooterContent = {
  brand: "AJS",
  accent: ".",
  ownerName: "Aditya Jeetu Suryavanshi",
  builtWith: "Next.js & ❤️",
  socialLinks: profileSocialLinks,
};
