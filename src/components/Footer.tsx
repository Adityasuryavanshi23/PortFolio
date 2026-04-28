"use client";

import { motion } from "framer-motion";
import { footerContent } from "@/data/portfolio/footer-data";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <span className="text-xl font-bold text-gradient-primary">
            {footerContent.brand}
            <span className="text-accent">{footerContent.accent}</span>
          </span>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} {footerContent.ownerName} — Built with{" "}
            {footerContent.builtWith}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {footerContent.socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
