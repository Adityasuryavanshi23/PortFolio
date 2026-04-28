"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Mail } from "lucide-react";
import { contactContent } from "@/data/portfolio/contact-data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* bg glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-primary/8 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {contactContent.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {contactContent.titleStart}{" "}
            <span className="text-gradient-primary">
              {contactContent.titleHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {contactContent.description[0]}
            <br />
            {contactContent.description[1]}
          </p>
        </motion.div>

        {/* Social cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {contactContent.socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                whileHover={{ y: -4 }}
              >
                <Card
                  className={`glass border-glow p-5 flex flex-col items-center gap-3 text-center cursor-pointer transition-all duration-300 ${s.color}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/35">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{s.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-40">
                      {s.handle}
                    </p>
                  </div>
                  <ExternalLink size={12} className="text-muted-foreground" />
                </Card>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            render={<a href={contactContent.ctaHref} />}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary font-bold px-10"
          >
            <Mail size={16} className="mr-2" />
            {contactContent.ctaLabel}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
