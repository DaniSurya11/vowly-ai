import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

/* ── 1. The Obsidian Grid Pattern & Reactive Lens Flares (Background Layer) ── */
export const DarkLuxuryPattern = () => (
  <>
    {/* Anamorphic Lens Flare — now slowly drifting horizontally */}
    <motion.div 
      className="absolute top-1/3 left-0 w-[150%] h-[2px] bg-indigo-500 blur-[8px] mix-blend-screen pointer-events-none"
      animate={{ x: ['-20%', '10%', '-20%'], opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute top-1/3 left-0 w-[80%] h-[1px] bg-blue-300 blur-[2px] mix-blend-screen pointer-events-none"
      animate={{ x: ['-10%', '15%', '-10%'], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    {/* Electric Grid Pulse — white energy line sweeps across the grid every 8s */}
    <motion.div 
      className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen"
      animate={{ x: ['-100%', '200%'] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
      style={{ 
        width: '5%', 
        background: 'linear-gradient(90deg, transparent, rgba(200,200,255,0.06), transparent)',
      }}
    />
    
    <svg width="100%" height="100%" className="absolute inset-0 z-[1] opacity-[0.1] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dark-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {/* Intersection Nodes */}
          <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.8"/>
          {/* Diagonal architectural slash */}
          <line x1="0" y1="80" x2="80" y2="0" stroke="currentColor" strokeWidth="0.25" opacity="0.3" strokeDasharray="2 2" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dark-grid)" className="text-slate-400" />
      
      {/* Heavy vignette shadows for cinematic depth */}
      <rect x="0" y="0" width="100%" height="100%" fill="url(#vignette)" />
      <defs>
        <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
          <stop offset="40%" stopColor="transparent" />
          <stop offset="100%" stopColor="#040406" />
        </radialGradient>
      </defs>
    </svg>
  </>
);

/* ── 2. The Obsidian Shard Crest (Mockup Decorator) ── */
export const DarkLuxuryDecorator = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 120" className={`w-40 h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Geometric Core with inner pulse */}
    <path d="M150 10 L165 40 L150 70 L135 40 Z" fill="currentColor" opacity="0.2" />
    <path d="M150 10 L165 40 L150 70 L135 40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M150 10 L150 70" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M135 40 L165 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    
    {/* Inner diamond — glowing pulse */}
    <path d="M150 25 L157 40 L150 55 L143 40 Z" fill="currentColor" opacity="0.1">
      <animate attributeName="opacity" values="0.05;0.2;0.05" dur="4s" repeatCount="indefinite" />
    </path>

    {/* Outer Floating Shards */}
    <path d="M120 20 L130 35 L120 50 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    <path d="M180 20 L170 35 L180 50 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    
    {/* Minimalist Wings */}
    <path d="M110 40 L40 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M190 40 L260 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M90 45 L50 45" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <path d="M210 45 L250 45" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    
    <circle cx="40" cy="40" r="1.5" fill="currentColor" />
    <circle cx="260" cy="40" r="1.5" fill="currentColor" />
  </svg>
);

/* ── Sharp Minimalist Divider ── */
export const DarkLuxuryDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 20" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2="180" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    
    {/* Center Diamond Blade */}
    <path d="M185 10 L200 5 L215 10 L200 15 Z" fill="currentColor" opacity="0.8" />
    <path d="M175 10 L200 0 L225 10 L200 20 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    
    <line x1="220" y1="10" x2="400" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

/* ── 3. Anamorphic Light Streaks — cinematic horizontal flickers ── */
export const DarkLuxuryParticles = () => (
  <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
    {/* Horizontal light streaks */}
    {[...Array(12)].map((_, i) => {
      const w = Math.random() * 40 + 15;
      const startY = Math.random() * 100;
      const dur = Math.random() * 6 + 4;
      const delay = Math.random() * 8;
      return (
        <motion.div
          key={i}
          className="absolute bg-slate-200"
          style={{
            width: w + 'px',
            height: '1px',
            left: '-10%',
            top: `${startY}%`,
            boxShadow: '0 0 12px 3px rgba(180,180,210,0.4)',
          }}
          animate={{
            x: [0, 800],
            opacity: [0, 0.4, 0],
            scaleX: [0.5, 2, 0.5],
          }}
          transition={{
            duration: dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        />
      );
    })}
    {/* Vertical micro-glitch flashes */}
    {[...Array(5)].map((_, i) => {
      const x = Math.random() * 100;
      const delay = Math.random() * 10;
      return (
        <motion.div
          key={`glitch-${i}`}
          className="absolute bg-white/30"
          style={{
            width: '1px',
            height: Math.random() * 60 + 20 + 'px',
            left: `${x}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.15, repeat: Infinity, repeatDelay: Math.random() * 8 + 4, delay }}
        />
      );
    })}
  </div>
);

/* ── 4. Theme Icon ── */
export const DarkLuxuryIcon = Hexagon;
