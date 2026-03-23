"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionConfig {
  text: string;
  subtitle?: string;
  align: "center" | "left" | "right";
  startProgress: number;
  endProgress: number;
}

const sections: SectionConfig[] = [
  {
    text: "Kundan Kumar Singh",
    subtitle: "Creative Developer",
    align: "center",
    startProgress: 0.0,
    endProgress: 0.25,
  },
  {
    text: "I build digital experiences.",
    align: "left",
    startProgress: 0.3,
    endProgress: 0.55,
  },
  {
    text: "Bridging design\nand engineering.",
    align: "right",
    startProgress: 0.6,
    endProgress: 0.85,
  },
];

function OverlaySection({
  config,
  scrollYProgress,
}: {
  config: SectionConfig;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const { text, subtitle, align, startProgress, endProgress } = config;

  const midPoint = (startProgress + endProgress) / 2;
  const fadeInEnd = startProgress + (midPoint - startProgress) * 0.6;
  const fadeOutStart = midPoint + (endProgress - midPoint) * 0.4;

  const opacity = useTransform(
    scrollYProgress,
    [startProgress, fadeInEnd, fadeOutStart, endProgress],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [startProgress, fadeInEnd, fadeOutStart, endProgress],
    [80, 0, 0, -80]
  );

  const scale = useTransform(
    scrollYProgress,
    [startProgress, fadeInEnd, fadeOutStart, endProgress],
    [0.9, 1, 1, 0.9]
  );

  const alignClasses = {
    center: "items-center justify-center text-center",
    left: "items-start justify-center text-left pl-8 md:pl-20 lg:pl-32",
    right: "items-end justify-center text-right pr-8 md:pr-20 lg:pr-32",
  };

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col ${alignClasses[align]} pointer-events-none`}
      style={{ opacity, y, scale }}
    >
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white whitespace-pre-line leading-[1.1]">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              textShadow: "0 0 60px rgba(139, 92, 246, 0.3), 0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            {char === " " ? "\u00A0" : char === "\n" ? <br /> : char}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p
          className="mt-3 md:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-body text-white/60 tracking-wide"
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default function Overlay({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="absolute inset-0 z-10 pointer-events-none" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full">
        {sections.map((config, i) => (
          <OverlaySection key={i} config={config} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}
