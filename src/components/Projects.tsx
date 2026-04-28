"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  projectTechIconMap,
  projects,
  projectsContent,
} from "@/data/portfolio/projects-data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* bg glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {projectsContent.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {projectsContent.titleStart}{" "}
            <span className="text-gradient-primary">
              {projectsContent.titleHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            {projectsContent.description}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <Card
                className={`h-full flex flex-col glass border-glow ${project.glowColor} transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient top bar */}
                <div
                  className={`h-1.5 w-full bg-linear-to-r ${project.gradient}`}
                />

                <CardHeader className="pb-2 pt-5 px-6">
                  <h3 className={`text-xl font-bold ${project.accentColor}`}>
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="flex-1 px-6 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const tech = projectTechIconMap[tag];
                      const IconComp = tech?.icon;
                      return (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="flex items-center gap-1.5 border-border/70 bg-muted/60 px-2 py-0.5 text-xs text-foreground/80"
                        >
                          {IconComp ? (
                            <IconComp
                              size={11}
                              style={{ color: tech.color, flexShrink: 0 }}
                            />
                          ) : tech?.emoji ? (
                            <span className="text-[10px] leading-none">
                              {tech.emoji}
                            </span>
                          ) : null}
                          {tag}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-5 flex gap-3">
                  {project.live && (
                    <Button
                      render={
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      size="sm"
                      className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 font-semibold gap-1.5"
                      variant="ghost"
                    >
                      <ExternalLink size={14} /> Live
                    </Button>
                  )}
                  <Button
                    render={
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    size="sm"
                    variant="ghost"
                    className="border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground gap-1.5"
                  >
                    <Github size={14} /> Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button
            render={
              <a
                href={projectsContent.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 gap-2"
          >
            <Github size={16} /> {projectsContent.viewAllLabel}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
