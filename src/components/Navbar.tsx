"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 100) {
      setIsVisible(true);
      setLastScroll(latest);
      return;
    }
    setIsVisible(latest < lastScroll);
    setLastScroll(latest);
  });

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <a
                href="#"
                className="font-heading text-lg font-bold tracking-tight text-white hover:text-accent transition-colors duration-300"
              >
                KKS
                <span className="text-accent">.</span>
              </a>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center space-x-0 lg:gap-1 px-2 lg:px-4 py-1.5 lg:py-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-2 lg:px-4 py-1.5 text-xs lg:text-sm font-body text-white/60 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/[0.05]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Right side */}
              <div className="flex items-center gap-3">
                {/* Download CV */}
                <motion.a
                  href="/Kundan_Kumar_Singh_CV.pdf"
                  download
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-body font-medium text-white bg-gradient-to-r from-accent to-accent-secondary rounded-full hover:opacity-90 transition-opacity duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  CV
                </motion.a>


                {/* Mobile menu toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Toggle menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {mobileMenuOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
                className="font-heading text-2xl text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/Kundan_Kumar_Singh_CV.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="mt-4 flex items-center gap-2 px-6 py-3 text-base font-body font-medium text-white bg-gradient-to-r from-accent to-accent-secondary rounded-full"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
