"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative">
      <Navbar />

      {/* Scroll sequence zone — Introduction */}
      <section id="intro">
        <div ref={scrollContainerRef} className="relative" style={{ height: "500vh" }}>
          <ScrollyCanvas containerRef={scrollContainerRef} />
          <Overlay containerRef={scrollContainerRef} />
        </div>
      </section>

      {/* Content sections */}
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
