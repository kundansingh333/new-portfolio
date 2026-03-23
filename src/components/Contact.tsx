// "use client";

// import { useState, Suspense } from "react";
// import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { Environment, PresentationControls, ContactShadows, Html, useGLTF } from "@react-three/drei";

// const socialLinks = [
//   {
//     label: "GitHub",
//     href: "https://github.com/kundansingh333",
//     icon: (
//       <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
//         <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
//       </svg>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/kundankumar333/",
//     icon: (
//       <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//       </svg>
//     ),
//   },
//   {
//     label: "Email",
//     href: "mailto:kundankumarsingh2005@gmail.com",
//     icon: (
//       <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" />
//       </svg>
//     ),
//   },
// ];

// function ContactTerminal({ formElement }: { formElement: React.ReactNode }) {
//   return (
//     <group position={[0, 0, 0]}>
//       {/* Outer high-tech frame */}
//       <mesh position={[0, 0, -0.06]} castShadow receiveShadow>
//         <boxGeometry args={[5.2, 3.2, 0.1]} />
//         <meshPhysicalMaterial 
//           color="#0a0a0f"
//           metalness={0.9}
//           roughness={0.4}
//           clearcoat={0.5}
//         />
//       </mesh>
      
//       {/* Glowing edge accents */}
//       <mesh position={[0, 1.6, -0.06]}>
//         <boxGeometry args={[2.5, 0.02, 0.12]} />
//         <meshBasicMaterial color="#8b5cf6" />
//       </mesh>

//       {/* Screen Base (Behind HTML) */}
//       <mesh position={[0, 0, 0]}>
//         <planeGeometry args={[7, 4]} />
//         <meshBasicMaterial color="#000000" />
//       </mesh>

//       {/* HTML Interface */}
//       <Html
//         transform
//         distanceFactor={1.5}
//         position={[0, 0, 0.01]}
//         rotation={[0, Math.PI, 0]}
//       >
//         <div 
//           className="w-[1200px] h-[800px] bg-[#050508] border border-white/10 rounded-xl flex flex-col justify-center items-center overflow-hidden shadow-2xl select-none"
//           onPointerDown={(e) => e.stopPropagation()}
//         >
//           {formElement}
//         </div>
//       </Html>
//     </group>
//   );
// }

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const formElement = submitted ? (
//     <div className="flex flex-col items-center justify-center text-center p-20 animate-in fade-in zoom-in duration-500">
//       <div className="w-32 h-32 rounded-full bg-emerald-500/20 flex items-center justify-center mb-8 border-[4px] border-emerald-500">
//         <svg className="w-16 h-16 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//         </svg>
//       </div>
//       <h3 className="text-white text-6xl font-bold font-heading mb-4">Message Sent!</h3>
//       <p className="text-white/60 text-2xl font-body max-w-2xl">
//         Thanks for reaching out. Your message has been beamed across the internet and successfully landed in my inbox. I&apos;ll get back to you shortly!
//       </p>
//       <button 
//         onClick={() => setSubmitted(false)}
//         className="mt-12 px-10 py-4 text-xl border border-white/20 rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-all font-body cursor-pointer"
//       >
//         Send another message
//       </button>
//     </div>
//   ) : (
//     <form className="w-[700px] flex flex-col gap-8 p-12" onSubmit={handleSubmit}>
//        <div className="text-center mb-4">
//          <h2 className="text-white text-5xl font-bold font-heading tracking-tight mb-2">Send an Email</h2>
//          <p className="text-white/50 text-xl font-body">Type directly onto the laptop screen to leave a message.</p>
//        </div>
       
//        <div className="flex flex-col gap-3">
//          <label className="text-white/60 uppercase tracking-widest text-lg font-bold font-body">Name</label>
//          <input type="text" required placeholder="Your Identity" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-6 py-5 text-2xl text-white outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all" />
//        </div>
//        <div className="flex flex-col gap-3">
//          <label className="text-white/60 uppercase tracking-widest text-lg font-bold font-body">Email</label>
//          <input type="email" required placeholder="your.email@universe.com" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-6 py-5 text-3xl text-white outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all" />
//        </div>
//        <div className="flex flex-col gap-3">
//          <label className="text-white/60 uppercase tracking-widest text-lg font-bold font-body">Message</label>
//          <textarea required rows={4} placeholder="What's on your mind?" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-6 py-5 text-3xl text-white outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all resize-none" />
//        </div>
//        {/* <button type="submit" className="w-full bg-gradient-to-r from-accent to-accent-secondary py-6 rounded-xl text-4xl font-bold text-white uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer shadow-lg shadow-accent/20 hover:shadow-accent/40 mt-4">
//          Initialize Transmission
//        </button> */}
//        <button
//   type="submit"
//   className="
//     relative w-full overflow-hidden
//     px-10 py-[22px] rounded-2xl
//     text-[22px] font-bold uppercase tracking-[0.18em] text-white
//     cursor-pointer select-none
//     transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]
//     hover:scale-[1.025] hover:-translate-y-px
//     active:scale-[0.975] active:translate-y-px
//   "
//   style={{
//     background: "linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.10) 100%)",
//     backdropFilter: "blur(20px)",
//     WebkitBackdropFilter: "blur(20px)",
//     boxShadow: `
//       0 0 0 1px rgba(255,255,255,0.18),
//       0 4px 24px rgba(0,0,0,0.7),
//       0 1px 0 rgba(255,255,255,0.22) inset,
//       0 -1px 0 rgba(0,0,0,0.5) inset
//     `,
//     textShadow: "0 1px 8px rgba(255,255,255,0.18)",
//   }}
// >
//   {/* Top highlight sheen */}
//   <span
//     className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl pointer-events-none"
//     style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.12), transparent)" }}
//   />
//   {/* Radial crown glow */}
//   <span
//     className="absolute inset-0 rounded-2xl pointer-events-none"
//     style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.15) 0%, transparent 65%)" }}
//   />

//   <span className="relative z-10 flex items-center justify-center gap-3">
//     Initialize Transmission
//   </span>
// </button>
//     </form>
//   );

//   return (
//     <section id="contact" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-12 md:mb-16 max-w-5xl mx-auto">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-xs font-body text-accent uppercase tracking-[0.2em] mb-3"
//           >
//             Say Hello
//           </motion.p>
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
//           >
//             Get In Touch
//           </motion.h2>
//         </div>

//         <div className="grid grid-cols-1 gap-12 items-center max-w-6xl mx-auto">
//           {/* Left — Contact info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="max-w-md"
//           >
//             <p className="font-body text-white/50 leading-relaxed mb-8 text-sm md:text-base">
//               I&apos;m always open to discussing new projects, creative ideas, or
//               opportunities to be part of your vision. Feel free to reach out via the 3D terminal terminal or direct channels below!
//             </p>

//             <div className="space-y-4 mb-10">
//               <a
//                 href="mailto:kundankumarsingh2005@gmail.com"
//                 className="flex items-center gap-4 group"
//               >
//                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/30 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
//                   <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" />
//                   </svg>
//                 </div>
//                 <span className="font-body text-sm md:text-base text-white/50 group-hover:text-white transition-colors duration-300">
//                   kundankumarsingh2005@gmail.com
//                 </span>
//               </a>

//               <a href="tel:+919508178598" className="flex items-center gap-4 group">
//                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/30 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300">
//                   <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//                   </svg>
//                 </div>
//                 <span className="font-body text-sm md:text-base text-white/50 group-hover:text-white transition-colors duration-300">
//                   +91 9508178598
//                 </span>
//               </a>
//             </div>

//             {/* Social links */}
//             <div className="flex items-center gap-4">
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 text-white/40 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] rounded-xl transition-all duration-300 shadow-lg"
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   aria-label={social.label}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right — 3D Computer form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] relative mt-8 lg:mt-0 lg:-ml-10 cursor-grab active:cursor-grabbing"
//           >
//             <Suspense fallback={
//               <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
//                  <div className="w-12 h-12 border-4 border-white/10 border-t-accent rounded-full animate-spin" />
//                  <p className="text-white/40 font-body text-sm animate-pulse">Initializing 3D Interface...</p>
//               </div>
//             }>
//               <Canvas camera={{ position: [0, 0, -8], fov: 45 }}>
//                 <Environment preset="city" />
//                 <ambientLight intensity={0.5} />
//                 <pointLight position={[10, 10, 10]} intensity={1} />
//                 <PresentationControls
//                   global
//                   config={{ mass: 2, tension: 400 }}
//                   snap={{ mass: 4, tension: 1500 }}
//                   rotation={[0, -0.2, 0]}
//                   polar={[-0.2, 0.2]}
//                   azimuth={[-0.5, 0.5]}
//                 >
//                   <ContactTerminal formElement={formElement} />
//                 </PresentationControls>
//                 <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={20} blur={2.5} far={4.5} />
//               </Canvas>
//             </Suspense>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React, { useState, useRef, useEffect } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ identity: '', email: '', message: '' });
  
  // 3D Rotation Refs
  const pivotRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 4, y: -8 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);

  // Handle Mouse/Touch Interaction
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      
      velocity.current = dx * 0.38;
      
      setRotation(prev => ({
        x: Math.max(-18, Math.min(18, prev.x + dy * 0.13)),
        y: prev.y + dx * 0.38
      }));
      
      lastPos.current = { x: clientX, y: clientY };
    };

    const stopDragging = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', stopDragging);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, []);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    lastPos.current = {
      x: 'touches' in e ? e.touches[0].clientX : e.clientX,
      y: 'touches' in e ? e.touches[0].clientY : e.clientY
    };
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.identity && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ background: '#060608', borderRadius: '16px', padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '600px', overflow: 'hidden' }}>
      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '24px', fontFamily: 'monospace' }}>
        ↔ drag to rotate 360°
      </div>

      <div 
        onMouseDown={handleStart} 
        onTouchStart={handleStart}
        style={{ perspective: '1400px', cursor: 'grab', width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <div 
          ref={pivotRef}
          style={{ 
            transformStyle: 'preserve-3d', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isDragging.current ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        >
          {/* MONITOR BOX */}
          <div style={{ width: '620px', height: '360px', position: 'relative', transformStyle: 'preserve-3d' }}>
            
            {/* FRONT FACE */}
            <div className="face-front" style={{
              position: 'absolute', width: '620px', height: '360px', transform: 'translateZ(18px)',
              borderRadius: '14px 14px 10px 10px', background: 'linear-gradient(160deg, #1e1e26 0%, #0d0d11 55%, #18181e 100%)',
              border: '1.5px solid rgba(255,255,255,0.09)', padding: '10px 10px 14px', display: 'flex', flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 6px 8px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
                </div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.13)', letterSpacing: '0.22em', fontFamily: 'monospace' }}>KUNDAN·OS v2</div>
              </div>

              <div style={{ flex: 1, background: '#000', borderRadius: '5px', overflow: 'hidden', position: 'relative' }}>
                {!submitted ? (
                  <div style={{ padding: '14px 18px', zIndex: 2, position: 'relative' }} onPointerDown={e => e.stopPropagation()}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.055)', paddingBottom: '10px' }}>
                      <div className="pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#28c840', boxShadow: '0 0 6px #28c840' }} />
                      <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', fontFamily: 'monospace' }}>contact.terminal — ssh active</span>
                    </div>
                    
                    <form onSubmit={handleSend} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div>
                        <label style={{ fontSize: '9px', color: '#8b5cf6', display: 'block', fontFamily: 'monospace' }}>→ name</label>
                        <input 
                          className="f-input" 
                          type="text" 
                          placeholder="your_identity"
                          onChange={(e) => setFormData({...formData, identity: e.target.value})}
                          style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'white', padding: '7px' }} 
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: '9px', color: '#8b5cf6', display: 'block', fontFamily: 'monospace' }}>→ email</label>
                        <input 
                          className="f-input" 
                          type="email" 
                          placeholder="you@universe.com"
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'white', padding: '7px' }} 
                        />
                      </div>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ fontSize: '9px', color: '#8b5cf6', display: 'block', fontFamily: 'monospace' }}>→ message</label>
                        <textarea 
                          className="f-input" 
                          placeholder="what's on your mind?"
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'white', padding: '7px', height: '60px' }} 
                        />
                      </div>
                      <button type="submit" style={{ gridColumn: '1 / -1', padding: '10px', background: 'rgba(139,92,246,0.2)', border: '1px solid #8b5cf6', color: 'white', cursor: 'pointer', fontFamily: 'monospace' }}>
                        ▶ Initialize Transmission
                      </button>
                    </form>
                  </div>
                ) : (
                  <div style={{ color: 'white', textAlign: 'center', paddingTop: '50px', fontFamily: 'monospace' }}>
                    <h2 style={{ color: '#28c840' }}>Transmission Sent!</h2>
                    <p style={{ fontSize: '12px', marginTop: '10px', opacity: 0.6 }}>Message received from {formData.identity}.</p>
                    <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: '1px solid white', color: 'white', marginTop: '20px', padding: '5px 15px', borderRadius: '20px', cursor: 'pointer' }}>Reset</button>
                  </div>
                )}
              </div>
            </div>

            {/* BACK FACE */}
            <div style={{ position: 'absolute', width: '620px', height: '360px', transform: 'translateZ(-18px) rotateY(180deg)', borderRadius: '14px', background: '#0a0a0e', border: '1px solid rgba(255,255,255,0.05)' }} />
          </div>

          {/* STAND */}
          <div style={{ width: '36px', height: '30px', background: '#1c1c22' }} />
          <div style={{ width: '200px', height: '16px', background: '#1a1a20', borderRadius: '0 0 50% 50%', boxShadow: '0 8px 20px rgba(0,0,0,0.5)' }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;