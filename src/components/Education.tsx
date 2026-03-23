"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  score: string;
  period: string;
  gradient: string;
}

const educationData: EducationEntry[] = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    score: "CGPA: 7.74",
    period: "Aug 2023 – Aug 2027",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    institution: "S D Vidyapith",
    location: "Samastipur, Bihar, India",
    degree: "Intermediate",
    score: "Percentage: 76.8%",
    period: "Apr 2020 – Jul 2022",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    institution: "ST Stephens School",
    location: "Samastipur, Bihar, India",
    degree: "Matriculation",
    score: "Percentage: 89.2%",
    period: "Apr 2019 – Apr 2020",
    gradient: "from-emerald-500 to-teal-500",
  },
];

function EduCard({
  entry,
  index,
}: {
  entry: EducationEntry;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative"
    >
      {/* Timeline connector */}
      {index < educationData.length - 1 && (
        <div className="absolute left-[19px] top-[56px] bottom-[-24px] w-[1px] bg-gradient-to-b from-white/10 to-transparent" />
      )}

      <div className="flex items-start gap-5">
        {/* Timeline dot */}
        <div className={`relative flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${entry.gradient} flex items-center justify-center mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 4 4 6 4s6-2 6-4v-5" />
          </svg>
        </div>

        {/* Content card */}
        <div className="flex-1 p-4 md:p-5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.05]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
            <h3 className="font-heading text-sm md:text-base font-semibold text-white tracking-tight">
              {entry.institution}
            </h3>
            <span className="text-[10px] md:text-xs font-body text-white/25 whitespace-nowrap">
              {entry.period}
            </span>
          </div>
          <p className="text-xs md:text-sm font-body text-white/50 mb-1">{entry.degree}</p>
          <div className="flex items-center gap-2.5">
            <span className="text-xs md:text-sm font-body text-accent/70 font-medium">{entry.score}</span>
            <span className="text-[10px] md:text-xs font-body text-white/25">·</span>
            <span className="text-[10px] md:text-xs font-body text-white/30">{entry.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-body text-accent uppercase tracking-[0.2em] mb-3"
        >
          Academic Background
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
        >
          Education
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {educationData.map((entry, i) => (
          <EduCard key={entry.institution} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
