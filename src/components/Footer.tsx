"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16 px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-heading text-lg font-bold text-white tracking-tight">
              KKS<span className="text-accent">.</span>
            </span>
            <span className="text-xs font-body text-white/20">|</span>
            <p className="text-xs font-body text-white/20">
              © {new Date().getFullYear()} Kundan Kumar Singh
            </p>
          </div>
          <p className="text-xs font-body text-white/20">
            Built with Next.js, Framer Motion & Canvas
          </p>
        </div>
      </div>
    </footer>
  );
}
