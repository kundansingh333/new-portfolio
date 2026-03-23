"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", icon: FiGithub, href: "https://github.com/kundansingh333" },
  { name: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/kundankumar333/" },
  { name: "Email", icon: FiMail, href: "mailto:kundankumarsingh2005@gmail.com" },
  { name: "Phone", icon: FiPhone, href: "tel:+919508178598" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6 md:px-12 mt-20 overflow-hidden bg-black/20">
      {/* Subtle top gradient separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
      
      {/* Decorative glow in the center bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Brand/Logo column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-heading text-3xl font-black text-white tracking-tight flex items-center gap-1 group cursor-default">
                Portfolio
                <span className="text-accent group-hover:text-accent-secondary transition-colors duration-500">.</span>
              </span>
              <p className="text-xs font-body text-white/40 tracking-wider uppercase mt-1">
                Kundan Kumar Singh
              </p>
            </div>
            <p className="text-sm font-body text-white/50 text-center md:text-left max-w-xs mt-2 leading-relaxed">
              Building gamified and interactive web experiences with modern technologies. Let's create something amazing together.
            </p>
          </motion.div>

          {/* Quick Links column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <h3 className="text-white font-heading font-bold text-lg tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm font-body text-white/50 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social/Connect column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <h3 className="text-white font-heading font-bold text-lg tracking-wide">Connect</h3>
            <div className="flex gap-3 mt-1">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300"
                    title={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            
            <div className="mt-4 flex flex-col gap-2 items-center md:items-start">
              <a href="mailto:kundankumarsingh2005@gmail.com" className="text-sm font-body text-white/50 hover:text-accent transition-colors flex items-center gap-2">
                <FiMail size={14} className="opacity-70" />
                kundankumarsingh2005@gmail.com
              </a>
              <a href="tel:+919508178598" className="text-sm font-body text-white/50 hover:text-accent transition-colors flex items-center gap-2">
                <FiPhone size={14} className="opacity-70" />
                +91 9508178598
              </a>
            </div>
          </motion.div>
          
        </div>

        {/* Bottom Bar — Copyright & Tech Stack */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-body text-white/40">
            © {new Date().getFullYear()} Kundan Kumar Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs font-body text-white/30">
            <span className="hover:text-white/60 transition-colors cursor-default">Next.js</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="hover:text-white/60 transition-colors cursor-default">Framer Motion</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="hover:text-white/60 transition-colors cursor-default">Three.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
