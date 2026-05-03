export type NavLink = {
  label: string;
  href: string;
};

export type NavbarContent = {
  brand: string;
  accent: string;
  links: NavLink[];
  resumeViewUrl: string;
  resumeDownloadUrl: string;
};

export const navbarContent: NavbarContent = {
  brand: "AJS",
  accent: ".",
  links: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  resumeViewUrl: "https://canva.link/lxob6czwpvg1tf2",
  resumeDownloadUrl: "/Aditya Suryavanshi Updated.pdf",
};
