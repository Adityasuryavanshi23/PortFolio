"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  experienceColorMap,
  experienceContent,
  timeline,
} from "@/data/portfolio/experience-data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
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
            {experienceContent.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Experience &amp;{" "}
            <span className="text-gradient-primary">
              {experienceContent.titleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-secondary/30 to-transparent" />

          <div className="space-y-10 pl-16">
            {timeline.map((item, i) => {
              const c = experienceColorMap[item.color];
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className={`absolute -left-10 top-1 w-8 h-8 rounded-xl flex items-center justify-center border ${c.border} glass`}
                  >
                    <Icon size={14} className={c.title} />
                  </div>

                  {/* Card */}
                  <div
                    className={`glass border ${c.border} rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className={`font-bold text-lg ${c.title}`}>
                          {item.title}
                        </h3>
                        <p className="text-foreground font-medium text-sm">
                          {item.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground">
                          {item.period}
                        </span>
                        {item.current && (
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse dark:bg-emerald-300" />
                            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                              Current
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={`text-xs ${c.badge}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
