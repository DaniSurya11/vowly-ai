import React from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

/* ── 1. Clean Architectural Lines — with Subtle Pulse (Background Layer) ── */
export const MinimalElegantPattern = () => (
  <>
    {/* Subtle central glow — breathing */}
    <motion.div 
      className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
      animate={{ opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200,200,200,0.1) 0%, transparent 60%)' }} 
    />
         
    <svg width="100%" height="100%" className="absolute inset-0 z-[2] opacity-[0.1] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="minimal-lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.1" opacity="0.3"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#minimal-lines)" className="text-stone-300" />
      {/* Outer framing line */}
      <rect x="20" y="20" width="calc(100% - 40px)" height="calc(100% - 40px)" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-stone-300" opacity="0.2" />
    </svg>

    {/* Architectural light sweep — very subtle */}
    <motion.div 
      className="absolute inset-0 z-[3] pointer-events-none"
      animate={{ x: ['-100%', '200%'] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatDelay: 10 }}
      style={{ 
        width: '15%', 
        background: 'linear-gradient(90deg, transparent, rgba(200,200,200,0.03), transparent)',
      }}
    />
  </>
);

/* ── 2. Interlocking Monogram Rings (Mockup Decorator) ── */
export const MinimalElegantDecorator = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 120" className={`w-40 h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Clean Typography Frame */}
    <rect x="130" y="20" width="40" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="135" y="25" width="30" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    
    {/* Interlocking Rings — slow rotation illusion via dash */}
    <circle cx="150" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" 
      strokeDasharray="3 2">
      <animateTransform attributeName="transform" type="rotate" from="0 150 40" to="360 150 40" dur="60s" repeatCount="indefinite" />
    </circle>
    <circle cx="150" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="1"
      strokeDasharray="3 2">
      <animateTransform attributeName="transform" type="rotate" from="360 150 60" to="0 150 60" dur="60s" repeatCount="indefinite" />
    </circle>
    
    <path d="M150 25 C158 25 165 32 165 40" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M150 75 C142 75 135 68 135 60" fill="none" stroke="currentColor" strokeWidth="1.5" />

    {/* Structural Side Lines */}
    <line x1="20" y1="50" x2="110" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <line x1="190" y1="50" x2="280" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <circle cx="110" cy="50" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="190" cy="50" r="2" fill="currentColor" opacity="0.8"/>
  </svg>
);

/* ── Perfectly Proportioned Minimal Divider ── */
export const MinimalElegantDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 20" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2="190" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <circle cx="200" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="200" cy="10" r="1" fill="currentColor" />
    <line x1="210" y1="10" x2="400" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
  </svg>
);

/* ── 3. Frosted Atmospheric Dust — with backdrop blur distortion ── */
export const MinimalElegantParticles = () => (
  <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
    {[...Array(12)].map((_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const size = Math.random() * 3 + 2;
      const driftY = Math.random() * -80 - 40;
      const driftX = Math.random() * 40 - 20;
      const dur = Math.random() * 14 + 12;
      const delay = Math.random() * 8;
      return (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size + 'px',
            height: size + 'px',
            left: `${startX}%`,
            top: `${startY}%`,
            backgroundColor: 'rgba(200,200,200,0.4)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
          }}
          animate={{
            y: [0, driftY],
            x: [0, driftX],
            opacity: [0, 0.5, 0.3, 0],
            scale: [0.8, 1.2, 0.9],
          }}
          transition={{
            duration: dur,
            repeat: Infinity,
            ease: "linear",
            delay: delay,
          }}
        />
      );
    })}
  </div>
);

/* ── 4. Theme Icon ── */
export const MinimalElegantIcon = Gem;
