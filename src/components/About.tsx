"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";
import { FaCode, FaLaptopCode, FaServer, FaCloud, FaInfinity } from "react-icons/fa";

const roles = [
  {
    title: "Web Developer",
    icon: <FaLaptopCode className="w-10 h-10 mb-3 text-white/80 group-hover:text-white transition-colors" />,
  },
  {
    title: "Cloud Engineer",
    icon: <FaCloud className="w-10 h-10 mb-3 text-white/80 group-hover:text-white transition-colors" />,
  },
  {
    title: "DevOps Engineer",
    icon: <FaInfinity className="w-10 h-10 mb-3 text-white/80 group-hover:text-white transition-colors" />,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
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
        Overview
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white/60 font-body text-[15px] md:text-[17px] max-w-3xl leading-relaxed mb-16"
      >
        I am a versatile technology professional focusing on scalable software solutions. As a Web Developer, I build dynamic, responsive user experiences. As a Cloud Engineer, I design resilient, high-availability architectures. And as a DevOps Engineer, I streamline deployments, automate workflows, and bridge the gap between development and IT operations to deliver robust systems faster.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {roles.map((role, index) => (
          <motion.div
            key={role.title + index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group"
          >
            <Tilt
              options={{ max: 25, scale: 1.05, speed: 400, glare: true, "max-glare": 0.5 }}
              className="w-full relative p-[1px] rounded-2xl overflow-hidden min-h-[220px]"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-white/10 opacity-50" />
              
              {/* Inner Glass Container */}
              <div className="absolute inset-[1px] bg-black/40 backdrop-blur-2xl rounded-2xl flex justify-center items-center flex-col p-6 transition-all duration-500 overflow-hidden group-hover:bg-black/30">
                
                {/* Diagonal Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />

                {/* Subtle Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none"
                />

                <div className="relative z-10 flex flex-col items-center">
                  {role.icon}
                  <h3 className="text-white/90 text-[18px] font-bold text-center font-heading drop-shadow-md">
                    {role.title}
                  </h3>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
