"use client";

import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const achievements = [
  {
    title: "LeetCode",
    stat: "200+",
    description: "DSA Problems Solved",
    link: "https://leetcode.com/u/kundan_333/",
    color: "#eab308", // Yellow
  },
  {
    title: "GeeksforGeeks",
    stat: "100+",
    description: "Coding Challenges",
    link: "https://www.geeksforgeeks.org/profile/kundansingh333?tab=activity",
    color: "#22c55e", // Green
  },
  {
    title: "HackerRank",
    stat: "5*",
    description: "Problem Solving",
    link: "https://www.hackerrank.com/profile/kundankumarsing7",
    color: "#0ea5e9", // Sky blue
  },
];

const icons: Record<string, React.ElementType> = {
  LeetCode: SiLeetcode,
  GeeksforGeeks: SiGeeksforgeeks,
  HackerRank: SiHackerrank,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-body text-accent uppercase tracking-[0.2em] mb-3"
        >
          Programming Milestones
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
        >
          Achievements
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
        {achievements.map((a, i) => {
          const Icon = icons[a.title];
          return (
            <motion.a
              key={a.title}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col items-center text-center p-6 md:p-8 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.05]"
            >
              {/* Glow overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${a.color}15 0%, transparent 70%)`
                }}
              />

              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                style={{ background: `${a.color}15` }}
              >
                {Icon && <Icon size={26} style={{ color: a.color }} />}
              </div>

              {/* Stat */}
              <span 
                className="text-4xl md:text-5xl font-black font-heading mb-2 tracking-tight"
                style={{ color: a.color }}
              >
                {a.stat}
              </span>

              {/* Text */}
              <div className="flex-1 flex flex-col justify-start w-full mb-6">
                <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{a.title}</h3>
                <p className="text-xs md:text-sm text-white/50 leading-snug">{a.description}</p>
              </div>

              {/* View Profile Link */}
              <div 
                className="mt-auto flex items-center gap-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300"
                style={{ color: a.color }}
              >
                View Profile 
                <FiExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
