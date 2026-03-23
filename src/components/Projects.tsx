"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  bullets: string[];
  tags: ProjectTag[];
  link: string;
  github: string;
  live: string;
  period: string;
  gradient: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Unilancer",
    description: "Freelance marketplace for the university ecosystem",
    bullets: [
      "Developed a comprehensive freelance marketplace enabling students to bid on projects, offer specialized gigs, and coordinate campus events.",
    ],
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Tailwind CSS", color: "text-cyan-400" },
      { name: "Express", color: "text-fuchsia-400" },
      { name: "Node.js", color: "text-emerald-400" },
      { name: "MongoDB", color: "text-green-400" },
    ],
    link: "#",
    github: "https://github.com/kundansingh333/Unilancer",
    live: "https://www.unilancer.online",
    period: "Aug 2025 – Dec 2025",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    images: [
      "/projects/unilancer-1.png",
      "/projects/unilancer-2.png",
      "/projects/unilancer-3.png",
      "/projects/unilancer-4.png",
      "/projects/unilancer-5.png",
    ],
  },
  {
    title: "Wanderlust",
    description: "Short-term rentals for travelers",
    bullets: [
      "Built a short-term rental platform connecting travelers with unique accommodations through searchable listings.",
    ],
    tags: [
      { name: "HTML", color: "text-orange-400" },
      { name: "CSS", color: "text-blue-500" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Node.js", color: "text-emerald-400" },
      { name: "Express", color: "text-fuchsia-400" },
      { name: "MongoDB", color: "text-green-400" },
      { name: "EJS", color: "text-pink-400" },
    ],
    link: "#",
    github: "https://github.com/kundansingh333/major_project",
    live: "https://wanderlust-1.onrender.com",
    period: "Jul 2023 – Jan 2024",
    gradient: "from-cyan-500/20 to-blue-500/20",
    images: [
      "/projects/wanderlust-1.png",
      "/projects/wanderlust-2.png",
      "/projects/wanderlust-3.png",
      "/projects/wanderlust-4.png",
      "/projects/wanderlust-5.png",
    ],
  },
  {
    title: "Back2U",
    description: "Centralized lost and found management system",
    bullets: [
      "Designed a campus-wide Lost & Found system where users register found items and report lost belongings.",
    ],
    tags: [
      { name: "HTML", color: "text-orange-400" },
      { name: "Tailwind CSS", color: "text-cyan-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "PHP", color: "text-indigo-400" },
      { name: "SQL", color: "text-sky-400" }
    ],
    link: "#",
    github: "https://github.com/kundansingh333/back2U",
    live: "http://back2u.great-site.net/",
    period: "Jul 2023 – Jan 2024",
    gradient: "from-emerald-500/20 to-teal-500/20",
    images: [
      "/projects/back2u-1.png",
      "/projects/back2u-2.png",
      "/projects/back2u-3.png",
      "/projects/back2u-4.png",
      "/projects/back2u-5.png",
    ],
  },

  {
    title: "MakeCook",
    description: "Recipe generator and instanlty order from zomato or swiggy ",
    bullets: [
      "A comprehensive recipe generator that suggests recipes based on available ingredients and allows users to order food instantly from Zomato or Swiggy.",
    ],
    tags: [
      { name: "Python", color: "text-orange-400" },
      { name: "CSS", color: "text-cyan-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      
    ],
    link: "#",
    github: "https://github.com/kundansingh333/recipegenerator",
    live: "https://makecook.netlify.app/",
    period: "March 2025 – April 2025",
    gradient: "from-emerald-500/20 to-teal-500/20",
    images: [
      "/projects/makecook-1.png",
      "/projects/makecook-2.png",
      "/projects/makecook-3.png",
      "/projects/makecook-4.png",
      "/projects/makecook-5.png",
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const imageCount = project.images.length;
  // Each image takes 100% width, strip is imageCount * 100% wide
  // On hover, translate from 0 to -(imageCount - 1) * 100%
  const stripWidth = `${imageCount * 100}%`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 450,
        }}
        className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 w-full hover:border-white/[0.15] hover:bg-white/[0.05] transition-colors duration-500"
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0 pointer-events-none"
          style={{
            boxShadow:
              "inset 0 0 60px rgba(139, 92, 246, 0.05), 0 0 80px rgba(139, 92, 246, 0.03)",
          }}
        />

        <div className="relative w-full h-[230px] z-10 rounded-2xl overflow-hidden bg-white/[0.02]">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10 pointer-events-none`} />
          
          {/* Scrolling image strip — plays stepped animation on hover */}
          <div
            className="project-scroll-strip absolute top-0 left-0 h-full flex"
            style={{
              width: stripWidth,
              "--img-count": imageCount,
            } as React.CSSProperties}
          >
            {project.images.map((img, i) => (
              <div
                key={i}
                className="relative h-full overflow-hidden"
                style={{ width: `${100 / imageCount}%` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${project.title.toLowerCase()}${i}/600/350`}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Image counter indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.images.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-white/40"
              />
            ))}
          </div>

          <div className="absolute inset-0 flex justify-end m-3 gap-2 z-20">
            <div
              onClick={() => window.open(project.github !== "#" ? project.github : undefined, "_blank")}
              className="bg-black/60 backdrop-blur-md border border-white/20 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/80 hover:scale-110 transition-all z-30"
              title="View Source Code"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </div>
            <div
              onClick={() => window.open(project.live !== "#" ? project.live : undefined, "_blank")}
              className="bg-black/60 backdrop-blur-md border border-white/20 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/80 hover:scale-110 transition-all z-30"
              title="Live Demo"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5 relative z-10">
          <h3 className="text-white font-bold text-[20px] md:text-[24px] font-heading">{project.title}</h3>
          <p className="mt-2 text-white/50 text-[13px] md:text-[14px] font-body line-clamp-3">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 relative z-10">
          {project.tags.map((tag) => (
            <p key={`${project.title}-${tag.name}`} className={`text-[12px] md:text-[13px] font-medium ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-body text-accent uppercase tracking-[0.2em] mb-3"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
        >
          Projects
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
