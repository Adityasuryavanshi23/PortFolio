"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { heroContent } from "@/data/portfolio/hero-data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = heroContent.roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % heroContent.roles.length);
          setTyping(true);
        }, 0);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-14 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/5 blur-[80px]" />
        {/* Grid lines */}
        <div className="hero-grid absolute inset-0 opacity-70 dark:opacity-25" />
      </div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Badge className="border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-wider text-emerald-700 dark:text-emerald-300">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-600 animate-pulse dark:bg-emerald-300" />
          {heroContent.availabilityLabel}
        </Badge>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4"
      >
        {heroContent.greeting}{" "}
        <span className="text-gradient-primary">{heroContent.firstName}</span>
        <br />
        <span className="text-foreground/90">{heroContent.lastName}</span>
      </motion.h1>

      {/* Typewriter role */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-xl md:text-2xl font-semibold text-primary mb-6 h-9 flex items-center justify-center gap-1"
      >
        <span>{displayed}</span>
        <span className="w-0.5 h-6 bg-primary animate-pulse ml-0.5 rounded" />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed mb-10"
      >
        {heroContent.tagline}{" "}
        <span className="text-secondary font-medium">
          {heroContent.currentCompany}
        </span>
        .
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-12"
      >
        <Button
          render={<a href={heroContent.primaryCta.href} />}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary font-bold px-8"
        >
          {heroContent.primaryCta.label}
        </Button>
        <Button
          render={<a href={heroContent.secondaryCta.href} />}
          variant="outline"
          size="lg"
          className="border-primary/40 hover:border-primary text-foreground hover:bg-primary/10 px-8"
        >
          {heroContent.secondaryCta.label}
        </Button>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex items-center gap-5 mb-16"
      >
        {heroContent.socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-xl glass border-glow flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href={heroContent.scrollTarget}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
