"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  skillBadgeMap,
  skillBorderColorMap,
  skillDividerMap,
  skillGroupIcons,
  skillGroups,
  skillsContent,
  skillTitleColorMap,
} from "@/data/portfolio/skills-data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {skillsContent.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {skillsContent.titleStart}{" "}
            <span className="text-gradient-primary">
              {skillsContent.titleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Skill cards — strict 2×2 equal-height grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="h-full"
            >
              <Card
                className={`h-full flex flex-col p-5 md:p-7 glass border border-border/70 rounded-2xl transition-all duration-300 hover:shadow-xl ${skillBorderColorMap[group.color]}`}
              >
                {/* Card header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-xl leading-none">
                    {skillGroupIcons[group.category]}
                  </span>
                  <h3
                    className={`text-xs md:text-sm font-bold uppercase tracking-widest ${skillTitleColorMap[group.color]}`}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  className={`h-px w-full mb-5 bg-linear-to-r ${skillDividerMap[group.color]}`}
                />

                {/* Badges */}
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium px-3 py-1 cursor-default transition-all duration-200 ${skillBadgeMap[group.color]}`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
