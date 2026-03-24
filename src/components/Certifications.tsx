"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
  gradient: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Nov 2025",
    link: "https://drive.google.com/file/d/1EA1lvZXOK2iosTQLqN1iCMXtwdSjFNb-/view?usp=drive_link",
    gradient: "from-orange-500 to-amber-500",
    image: "/certificates/postman.png",
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1gcmU0MsJPPnpAUf9ruXq7zs0yN3ZyhpA/view?usp=drive_link",
    gradient: "from-blue-500 to-indigo-500",
    image: "/certificates/nptel.png",
  },
  {
    title: "MERN Stack Development",
    issuer: "Apna College",
    date: "May 2024",
    link: "https://drive.google.com/file/d/1NepVP6H23dMgTbHxsyfYRE-KlPeX13jX/view?usp=drive_link",
    gradient: "from-emerald-500 to-teal-500",
    image: "/certificates/apna-college.png",
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "Dec 2024",
    link: "https://drive.google.com/file/d/1bH2JLggrCW9UI3m7eXujhseRMftCy7QI/view?usp=drive_link",
    gradient: "from-violet-500 to-purple-500",
    image: "/certificates/ibm.png",
  },
];



function CertCard({
  cert,
  index,
}: {
  cert: Certificate;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group"
    >
      <Tilt
        options={{ max: 25, scale: 1.02, speed: 450 }}
        className="relative p-4 md:p-5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.05] min-h-[340px] flex flex-col overflow-hidden group"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0 pointer-events-none"
          style={{
            boxShadow:
              "inset 0 0 40px rgba(139, 92, 246, 0.05), 0 0 40px rgba(139, 92, 246, 0.03)",
          }}
        />

        {/* Certificate image */}
        <div className="absolute top-0 left-0 w-full h-[180px] group-hover:h-full group-hover:bg-black/80 overflow-hidden rounded-2xl z-20 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
          <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-20`} />
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="w-full h-full object-cover group-hover:object-contain opacity-90 group-hover:opacity-100 transition-all duration-700"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          
          {/* Visit Link Button (Only visible on hover in the corner) */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center items-end m-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div
              onClick={() => window.open(cert.link, "_blank")}
              className="bg-black/60 backdrop-blur-md border border-white/20 px-4 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/80 hover:scale-105 transition-all z-30 group/btn"
            >
              <span className="text-white text-xs font-heading font-bold mr-2">Visit Link</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transform group-hover/btn:translate-x-1 transition-transform">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content (Sits below the original image height, gets covered physically on hover) */}
        <div className="relative z-10 pt-[160px] md:pt-[170px] pointer-events-none">
          <div className="mt-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
            <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${cert.gradient} mb-3`} />
            <h3 className="font-heading text-base md:text-lg font-bold text-white tracking-tight mb-2 leading-snug">
              {cert.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs md:text-sm font-body text-white/40">{cert.issuer}</span>
              <span className="text-[10px] md:text-xs font-body text-white/25">{cert.date}</span>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-body text-accent uppercase tracking-[0.2em] mb-3"
        >
          Credentials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
        >
          Certifications
        </motion.h2>
      </div>

      {/* Certificates grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {certificates.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>

    </section>
  );
}
