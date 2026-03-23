"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kundansingh333",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kundankumar333/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:kundankumarsingh2005@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" />
      </svg>
    ),
  },
];

import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [formData, setFormData] = useState({ identity: '', email: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);
  
  // 3D Rotation Refs
  const pivotRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 4, y: -8 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);

  // Keyboard state
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  // Handle Keystrokes globally
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPressedKeys(prev => {
        const next = new Set(prev);
        // Normalize space bar, etc.
        const key = e.key === ' ' ? 'space' : e.key.toLowerCase();
        next.add(key);
        return next;
      });
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      setPressedKeys(prev => {
        const next = new Set(prev);
        const key = e.key === ' ' ? 'space' : e.key.toLowerCase();
        next.delete(key);
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

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
        x: Math.max(-60, Math.min(60, prev.x + dy * 0.2)),
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

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.identity && formData.email && formData.message && formRef.current) {
      setStatus('sending');
      
      try {
        // NOTE: You need to replace these with your actual EmailJS credentials
        // Get them by creating a free account at https://www.emailjs.com/
        await emailjs.sendForm(
          'service_n33lzkg', // Replace with your Service ID
          'template_cs3xgum', // Replace with your Template ID
          formRef.current,
          'bBTPAuFjJH1Iz_xSu' // Replace with your Public Key
        );
        
        setSubmitted(true);
        setStatus('idle');
      } catch (error) {
        console.error('Email failed to send:', error);
        setStatus('error');
      }
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
      {/* Header — matches Achievements */}
      <div className="max-w-5xl mx-auto mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-body text-accent uppercase tracking-[0.2em] mb-3"
        >
          Say Hello
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-white/50 leading-relaxed mt-4 text-sm md:text-base max-w-2xl"
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out via the
          terminal below or through my direct channels!
        </motion.p>
      </div>

      {/* 3D Computer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
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
                    <div style={{ padding: '14px 18px', zIndex: 2, position: 'relative' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.055)', paddingBottom: '10px' }}>
                        <div className="pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#28c840', boxShadow: '0 0 6px #28c840' }} />
                        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', fontFamily: 'monospace' }}>contact.terminal — ssh active</span>
                      </div>
                      
                      <form ref={formRef} onSubmit={handleSend} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ fontSize: '9px', color: '#8b5cf6', display: 'block', fontFamily: 'monospace' }}>→ name</label>
                          <input 
                            className="f-input" 
                            type="text" 
                            name="user_name"
                            placeholder="your_identity"
                            required
                            onPointerDown={e => e.stopPropagation()}
                            onChange={(e) => setFormData({...formData, identity: e.target.value})}
                            style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'white', padding: '7px' }} 
                          />
                        </div>
                        <div>
                          <label style={{ fontSize: '9px', color: '#8b5cf6', display: 'block', fontFamily: 'monospace' }}>→ email</label>
                          <input 
                            className="f-input" 
                            type="email" 
                            name="user_email"
                            placeholder="you@universe.com"
                            required
                            onPointerDown={e => e.stopPropagation()}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'white', padding: '7px' }} 
                          />
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                          <label style={{ fontSize: '9px', color: '#8b5cf6', display: 'block', fontFamily: 'monospace' }}>→ message</label>
                          <textarea 
                            className="f-input" 
                            name="message"
                            placeholder="what's on your mind?"
                            required
                            onPointerDown={e => e.stopPropagation()}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'white', padding: '7px', height: '60px' }} 
                          />
                        </div>
                        
                        {status === 'error' && (
                          <div style={{ gridColumn: '1 / -1', color: '#ef4444', fontSize: '11px', fontFamily: 'monospace', textAlign: 'center' }}>
                            Failed to send. Please check your EmailJS credentials.
                          </div>
                        )}
                        
                        <button 
                          type="submit" 
                          disabled={status === 'sending'}
                          style={{ gridColumn: '1 / -1', padding: '10px', background: 'rgba(139,92,246,0.2)', border: '1px solid #8b5cf6', color: 'white', cursor: status === 'sending' ? 'not-allowed' : 'pointer', fontFamily: 'monospace', opacity: status === 'sending' ? 0.7 : 1 }}
                        >
                          {status === 'sending' ? '▶ Transmitting...' : '▶ Send Message'}
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
          
            {/* 3D KEYBOARD */}
            <div 
              style={{
                position: 'absolute',
                top: '360px',
                width: '520px',
                height: '190px',
                transformStyle: 'preserve-3d',
                transform: 'translateZ(120px) translateY(10px) rotateX(12deg)', 
              }}
            >
              {/* Keyboard Backplate (to hide keys from behind) */}
              <div style={{
                position: 'absolute',
                inset: 0,
                transform: 'translateZ(-10px)',
                background: '#0d0d11',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.9)',
              }} />

              {/* Keyboard Top Base */}
              <div style={{
                position: 'absolute',
                inset: 0,
                transform: 'translateZ(0px)',
                background: 'linear-gradient(160deg, #1c1c24 0%, #0d0d11 100%)',
                border: '2px solid rgba(255,255,255,0.06)',
                borderTop: '2px solid rgba(255,255,255,0.15)',
                borderRadius: '12px 12px 8px 8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8), inset 0 2px 0 rgba(255,255,255,0.05)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {/* Keyboard Rows */}
                {[
                  ['1','2','3','4','5','6','7','8','9','0','-','='],
                  ['q','w','e','r','t','y','u','i','o','p','[',']'],
                  ['a','s','d','f','g','h','j','k','l',';','\''],
                  ['z','x','c','v','b','n','m',',','.','/'],
                  ['space']
                ].map((row, rIndex) => (
                  <div key={rIndex} style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    {row.map(key => {
                      const isPressed = pressedKeys.has(key);
                      return (
                        <div
                          key={key}
                          style={{
                            width: key === 'space' ? '260px' : '34px',
                            height: '34px',
                            background: isPressed ? 'linear-gradient(180deg, #9333ea, #7e22ce)' : 'linear-gradient(180deg, #1a1a20, #131317)',
                            border: `1px solid ${isPressed ? '#c084fc' : 'rgba(255,255,255,0.08)'}`,
                            borderBottom: `2px solid ${isPressed ? '#7e22ce' : 'rgba(255,255,255,0.02)'}`,
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: isPressed ? 'translateY(3px)' : 'translateY(0)',
                            boxShadow: isPressed 
                              ? '0 0 20px rgba(168, 85, 247, 0.8), inset 0 2px 5px rgba(255,255,255,0.3)' 
                              : '0 4px 6px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)',
                            transition: 'all 0.05s',
                            color: isPressed ? '#ffffff' : 'rgba(255,255,255,0.3)',
                            fontSize: '11px',
                            fontFamily: 'monospace',
                            textTransform: 'uppercase'
                          }}
                        >
                          {key === 'space' ? '' : key}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col items-center mt-48 md:mt-64"
      >
        <p className="font-body text-white/40 text-xs uppercase tracking-[0.15em] mb-6">
          Find me on
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white/40 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] rounded-xl transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        
      </motion.div>
    </section>
  );
};

export default Contact;