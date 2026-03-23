"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "⟨/⟩",
    skills: ["C", "C++", "Java", "JavaScript", "Python", "HTML", "CSS", "PHP"],
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Frameworks",
    icon: "⚡",
    skills: ["Node.js", "React.js", "Next.js", "Express.js", "Tailwind CSS", "Bootstrap"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Tools & Platforms",
    icon: "🔧",
    skills: ["MySQL", "MongoDB", "Git & GitHub", "Figma", "VS Code", "Postman"],
    gradient: "from-emerald-500 to-teal-500",
  }
];

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group"
    >
      <Tilt
        options={{ max: 25, scale: 1.02, speed: 450 }}
        className="relative p-5 md:p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.05] h-full"
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0 pointer-events-none"
          style={{
            boxShadow:
              "inset 0 0 60px rgba(139, 92, 246, 0.05), 0 0 60px rgba(139, 92, 246, 0.03)",
          }}
        />

        <div className="relative z-10 w-full">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-sm opacity-80`}
            >
              {category.icon}
            </div>
            <h3 className="font-heading text-base md:text-lg font-semibold text-white tracking-tight">
              {category.title}
            </h3>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <motion.span
                key={skill}
                className="px-2.5 py-1 text-xs font-body text-white/50 bg-white/[0.04] border border-white/[0.06] rounded-md transition-all duration-300 hover:text-white/80 hover:border-white/[0.15] hover:bg-white/[0.08] cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-body text-accent uppercase tracking-[0.2em] mb-3"
        >
          Technical Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
        >
          Skills
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, i) => (
          <SkillCard key={category.title} category={category} index={i} />
        ))}
      </div>


    </section>
  );
}
