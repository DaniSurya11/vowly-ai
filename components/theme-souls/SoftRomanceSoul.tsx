import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

/* ── 1. The Breathing Silk Floral Pattern (Background) ── */
export const SoftRomancePattern = () => (
  <>
    {/* Soft Ethereal Glow — slow breathing pulse */}
    <motion.div 
      className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ background: 'radial-gradient(circle at 50% 30%, rgba(244,114,130,0.15) 0%, transparent 60%)' }} 
    />
    
    {/* Second warm glow — offset breathing */}
    <motion.div 
      className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
      animate={{ opacity: [0.2, 0.45, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      style={{ background: 'radial-gradient(circle at 70% 70%, rgba(244,114,130,0.1) 0%, transparent 50%)' }} 
    />

    {/* Breathing Silk Floral SVG — the whole pattern gently scales */}
    <motion.svg 
      width="100%" height="100%" 
      className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen text-pink-300" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{ scale: [1, 1.015, 1], opacity: [0.12, 0.18, 0.12] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: 'center center' }}
    >
      <defs>
        <pattern id="soft-floral" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
          <path d="M50 150 Q 100 100 150 150 T 250 150" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
          <path d="M100 200 Q 150 150 200 200 T 300 200" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.4"/>
          {/* Roses/Peonies */}
          <circle cx="150" cy="150" r="20" fill="currentColor" opacity="0.1" />
          <path d="M150 130 C 160 130 170 140 170 150 C 170 160 160 170 150 170 C 140 170 130 160 130 150 C 130 140 140 130 150 130" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.8"/>
          <path d="M150 140 C 155 140 160 145 160 150 C 160 155 155 160 150 160 C 145 160 140 155 140 150 C 140 145 145 140 150 140" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
          {/* Floating Silk Ribbons */}
          <path d="M170 150 Q 200 130 220 160 Q 240 190 260 140" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <path d="M130 150 Q 100 170 80 140 Q 60 110 40 160" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#soft-floral)" />
    </motion.svg>
  </>
);

/* ── 2. The Intricate Floral Ribbon Crest ── */
export const SoftRomanceDecorator = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 120" className={`w-40 h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Center Rose/Peony Symbol with blooming pulse */}
    <circle cx="150" cy="40" r="12" fill="currentColor" opacity="0.2">
      <animate attributeName="r" values="12;14;12" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.2;0.35;0.2" dur="4s" repeatCount="indefinite" />
    </circle>
    <path d="M150 28 C 158 28 162 35 162 40 C 162 48 155 52 150 52 C 145 52 138 48 138 40 C 138 35 142 28 150 28" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M150 34 C 154 34 156 37 156 40 C 156 44 153 46 150 46 C 147 46 144 44 144 40 C 144 37 146 34 150 34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
    <circle cx="150" cy="40" r="2" fill="currentColor" />

    {/* Sweeping Botanical Branches */}
    <path d="M130 40 C 100 20 60 30 30 60 C 20 70 40 90 70 80 C 100 70 120 50 140 45" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M170 40 C 200 20 240 30 270 60 C 280 70 260 90 230 80 C 200 70 180 50 160 45" fill="none" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Leaves & Buds */}
    <path d="M110 35 C 100 25 80 30 90 40 C 100 50 120 45 110 35" fill="currentColor" opacity="0.3" />
    <path d="M190 35 C 200 25 220 30 210 40 C 200 50 180 45 190 35" fill="currentColor" opacity="0.3" />
    <circle cx="70" cy="50" r="2" fill="currentColor" />
    <circle cx="230" cy="50" r="2" fill="currentColor" />
    <circle cx="50" cy="70" r="3" fill="currentColor" opacity="0.5"/>
    <circle cx="250" cy="70" r="3" fill="currentColor" opacity="0.5"/>

    {/* Elegant Ribbon Swoop underneath */}
    <path d="M80 90 C 120 110 180 110 220 90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    <path d="M100 100 C 130 120 170 120 200 100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

/* ── Delicate Rose Vine Divider ── */
export const SoftRomanceDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 30" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="15" x2="160" y2="15" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    
    {/* Center Floral Knot */}
    <path d="M160 15 Q 180 0 200 15 Q 220 30 240 15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    <path d="M160 15 Q 180 30 200 15 Q 220 0 240 15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    <circle cx="200" cy="15" r="3" fill="currentColor" opacity="0.8"/>
    <circle cx="200" cy="15" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>

    {/* Small leaves */}
    <path d="M180 8 C 185 5 190 10 185 12 Z" fill="currentColor" opacity="0.4" />
    <path d="M220 22 C 215 25 210 20 215 18 Z" fill="currentColor" opacity="0.4" />

    <line x1="240" y1="15" x2="400" y2="15" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
  </svg>
);

/* ── 3. Organically Swaying Falling Petals ── */
export const SoftRomanceParticles = () => (
  <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
    {[...Array(18)].map((_, i) => {
      const size = Math.random() * 8 + 5;
      const startX = Math.random() * 100;
      const swayAmount = Math.random() * 60 + 30;
      const dur = Math.random() * 12 + 18;
      const delay = Math.random() * 12;
      const blurVal = Math.random() * 1.5;
      return (
        <motion.div
          key={i}
          className="absolute rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm bg-pink-300 shadow-[0_0_8px_rgba(244,114,130,0.5)]"
          style={{
            width: size + 'px',
            height: size * 0.8 + 'px',
            left: `${startX}%`,
            top: '-5%',
            filter: `blur(${blurVal}px)`,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, swayAmount, -swayAmount * 0.7, swayAmount * 0.5, -swayAmount * 0.3],
            rotate: [0, 90, 200, 320, 400, 500],
            opacity: [0, 0.6, 0.5, 0.4, 0],
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
export const SoftRomanceIcon = Heart;
