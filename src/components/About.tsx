"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa";

const roles = [
  {
    title: "Web Developer",
    icon: <FaLaptopCode className="w-12 h-12 mb-4 text-white" />,
  },
  {
    title: "Web Developer",
    icon: <FaCode className="w-12 h-12 mb-4 text-white" />,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xs font-body text-accent uppercase tracking-[0.2em] mb-3"
      >
        Introduction
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8"
      >
        Overview.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white/60 font-body text-[15px] md:text-[17px] max-w-3xl leading-relaxed mb-16"
      >
        I'm a skilled Full Stack Developer with experience in JavaScript and experties in frameworks like React, Node.js, and Express.js. I have a passion for coding and love to learn new things. I'm a quick learner and a team player. I have a strong foundation in frontend and backend and I'm always looking to improve my skills.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
        {roles.map((role, index) => (
          <motion.div
            key={role.title + index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group"
          >
            <Tilt
              options={{ max: 45, scale: 1.05, speed: 450 }}
              className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 min-h-[260px] flex justify-center items-center flex-col hover:border-white/[0.15] hover:bg-white/[0.05] transition-all relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 60px rgba(139, 92, 246, 0.05)",
                }}
              />
              <div className="relative z-10 flex flex-col items-center">
                {role.icon}
                <h3 className="text-white text-[20px] font-bold text-center font-heading">
                  {role.title}
                </h3>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
