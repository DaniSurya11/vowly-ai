import React from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';

/* ── 1. 35mm Film Grain & Randomized Light Leaks (Background Layer) ── */
export const VintageFilmPattern = () => (
  <>
    {/* Warm Light Leaks — erratic cinematic flicker */}
    <motion.div 
      className="absolute top-0 right-0 w-[150%] h-[150%] bg-orange-600/20 blur-[60px] rounded-full mix-blend-screen pointer-events-none" 
      style={{ transform: 'translate(30%, -30%)' }} 
      animate={{ opacity: [0.2, 0.5, 0.1, 0.4, 0.3, 0.6, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
    <motion.div 
      className="absolute bottom-0 left-0 w-[120%] h-[120%] bg-yellow-500/10 blur-[50px] rounded-full mix-blend-screen pointer-events-none" 
      style={{ transform: 'translate(-20%, 20%)' }} 
      animate={{ opacity: [0.3, 0.1, 0.4, 0.2, 0.5, 0.2] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
    />

    {/* Projector Malfunction Glitch (White Flashes) */}
    <motion.div
      className="absolute inset-0 bg-white mix-blend-overlay pointer-events-none z-[10]"
      animate={{ opacity: [0, 0, 0, 0.8, 0, 0, 0.4, 0] }}
      transition={{ duration: 8, repeat: Infinity, times: [0, 0.4, 0.41, 0.42, 0.43, 0.8, 0.81, 0.82] }}
    />

    {/* Cinematic Grain Base */}
    <svg width="100%" height="100%" className="absolute inset-0 z-[1] opacity-[0.25] pointer-events-none mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
      <filter id="film-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.4 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#film-grain)" />
      
      {/* Rapid Jumping Scratches */}
      <defs>
        <pattern id="scratches" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
          <motion.line x1="50" y1="0" x2="50" y2="300" stroke="currentColor" strokeWidth="0.5" opacity="0.4" 
            animate={{ x1: [50, 55, 48, 52], x2: [50, 55, 48, 52] }} transition={{ duration: 0.2, repeat: Infinity }} />
          <motion.line x1="150" y1="50" x2="150" y2="250" stroke="currentColor" strokeWidth="0.25" opacity="0.3" 
            animate={{ x1: [150, 140, 160], x2: [150, 140, 160] }} transition={{ duration: 0.3, repeat: Infinity }} />
          <motion.line x1="250" y1="0" x2="250" y2="300" stroke="currentColor" strokeWidth="0.5" opacity="0.2" 
            animate={{ x1: [250, 252, 248], x2: [250, 252, 248] }} transition={{ duration: 0.15, repeat: Infinity }} />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#scratches)" className="text-orange-200" />
    </svg>
  </>
);

/* ── 2. Art-Deco Cinema Crest (Mockup Decorator) ── */
export const VintageFilmDecorator = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 120" className={`w-40 h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Deco Frame Top */}
    <path d="M100 20 L200 20 L210 30 L90 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M110 25 L190 25" stroke="currentColor" strokeWidth="0.5" />
    
    {/* Sunburst Center — spinning slowly */}
    <g style={{ transformOrigin: '150px 70px' }}>
      <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
      <path d="M150 70 L150 20 M150 70 L100 35 M150 70 L200 35 M150 70 L90 70 M150 70 L210 70" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </g>
    
    {/* Deco Pillars */}
    <rect x="135" y="40" width="30" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="140" y="45" width="20" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
    
    {/* Geometric Wings */}
    <path d="M135 50 L80 50 L80 60 L135 60" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M135 65 L90 65 L90 70 L135 70" fill="none" stroke="currentColor" strokeWidth="1" />
    
    <path d="M165 50 L220 50 L220 60 L165 60" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M165 65 L210 65 L210 70 L165 70" fill="none" stroke="currentColor" strokeWidth="1" />

    {/* Film Reels Nodes — spinning reels */}
    <g style={{ transformOrigin: '80px 55px' }}>
      <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="4s" repeatCount="indefinite" />
      <circle cx="80" cy="55" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M75 55 L85 55 M80 50 L80 60" stroke="currentColor" strokeWidth="0.5" />
    </g>
    <g style={{ transformOrigin: '220px 55px' }}>
      <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
      <circle cx="220" cy="55" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M215 55 L225 55 M220 50 L220 60" stroke="currentColor" strokeWidth="0.5" />
    </g>
  </svg>
);

/* ── Vintage Filmstrip Divider — Jittery Y-Axis Motion ── */
export const VintageFilmDivider = ({ className = "" }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 400 20" 
    className={`w-full h-auto ${className}`} 
    xmlns="http://www.w3.org/2000/svg"
    animate={{ y: [0, -2, 1, 0, 2, -1, 0] }}
    transition={{ duration: 0.2, repeat: Infinity, ease: "steps(3)" }}
  >
    {/* Filmstrip Edges */}
    <line x1="0" y1="5" x2="160" y2="5" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.2s" repeatCount="indefinite" />
    </line>
    <line x1="0" y1="15" x2="160" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    
    {/* Center Art Deco Node */}
    <path d="M175 10 L185 0 L215 0 L225 10 L215 20 L185 20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="190" y="5" width="20" height="10" fill="currentColor" opacity="0.8" />
    <line x1="200" y1="0" x2="200" y2="20" stroke="#000" strokeWidth="1" opacity="0.5"/>

    <line x1="240" y1="5" x2="400" y2="5" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.2s" repeatCount="indefinite" />
    </line>
    <line x1="240" y1="15" x2="400" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </motion.svg>
);

/* ── 3. Dust Scratches Particles (Atmosphere) ── */
export const VintageFilmParticles = () => (
  <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden mix-blend-overlay">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-orange-200"
        style={{
          width: '1px',
          height: Math.random() * 100 + 50 + 'px',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0,
        }}
        animate={{
          opacity: [0, Math.random() * 0.4 + 0.2, 0],
          y: [0, Math.random() * 50 - 25],
        }}
        transition={{
          duration: Math.random() * 0.5 + 0.1,
          repeat: Infinity,
          ease: "steps(3)",
          delay: Math.random() * 2,
        }}
      />
    ))}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`dust-${i}`}
        className="absolute rounded-full bg-orange-100"
        style={{
          width: Math.random() * 3 + 1 + 'px',
          height: Math.random() * 3 + 1 + 'px',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0,
        }}
        animate={{
          opacity: [0, Math.random() * 0.6 + 0.2, 0],
          scale: [1, Math.random() * 2 + 1, 1],
        }}
        transition={{
          duration: Math.random() * 0.2 + 0.1,
          repeat: Infinity,
          ease: "steps(2)",
          delay: Math.random() * 3,
        }}
      />
    ))}
  </div>
);

/* ── 4. Theme Icon ── */
export const VintageFilmIcon = Film;
