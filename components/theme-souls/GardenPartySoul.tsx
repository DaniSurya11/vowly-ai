import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

/* ── 1. Botanical Wrought-Iron Conservatory Pattern ── */
export const GardenPartyPattern = () => (
  <>
    {/* Dappled sunlight — gentle breathing */}
    <motion.div 
      className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      style={{ background: 'radial-gradient(circle at 70% 20%, rgba(132,204,22,0.12) 0%, transparent 50%)' }} 
    />
    {/* Secondary sunbeam */}
    <motion.div 
      className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
      animate={{ opacity: [0.15, 0.35, 0.15] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
      style={{ background: 'radial-gradient(circle at 30% 60%, rgba(163,230,53,0.08) 0%, transparent 40%)' }} 
    />
         
    <svg width="100%" height="100%" className="absolute inset-0 z-[2] opacity-[0.2] pointer-events-none mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="iron-leaves" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Iron Gate Structure */}
          <rect x="0" y="0" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <path d="M60 0 L60 120 M0 60 L120 60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          {/* Botanical Filigree */}
          <path d="M60 60 C 80 40 100 40 120 60 C 100 80 80 80 60 60 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M60 60 C 40 40 20 40 0 60 C 20 80 40 80 60 60 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M60 60 C 80 80 80 100 60 120 C 40 100 40 80 60 60 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M60 60 C 80 40 80 20 60 0 C 40 20 40 40 60 60 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          {/* Iron curls */}
          <path d="M60 0 Q 80 20 60 40" fill="none" stroke="currentColor" strokeWidth="0.25"/>
          <path d="M0 60 Q 20 40 40 60" fill="none" stroke="currentColor" strokeWidth="0.25"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#iron-leaves)" className="text-lime-200" />
    </svg>
  </>
);

/* ── 2. The Ornate Botanical Crest — with growing vine stroke animation ── */
export const GardenPartyDecorator = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 120" className={`w-40 h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Center Iron Medallion */}
    <circle cx="150" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="150" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <path d="M150 35 L150 65 M135 50 L165 50" stroke="currentColor" strokeWidth="0.5" />
    <path d="M140 40 L160 60 M140 60 L160 40" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="150" cy="50" r="3" fill="currentColor" />

    {/* Climbing Ivy Wings — with animated stroke growth */}
    <path d="M135 50 C 100 20 60 40 30 50 C 50 70 90 90 120 70" fill="none" stroke="currentColor" strokeWidth="1.5" 
      strokeDasharray="200" strokeDashoffset="200">
      <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" fill="freeze" />
    </path>
    <path d="M165 50 C 200 20 240 40 270 50 C 250 70 210 90 180 70" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeDasharray="200" strokeDashoffset="200">
      <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" fill="freeze" />
    </path>
    
    {/* Ivy Leaves — fade in after vines grow */}
    <path d="M110 38 C 100 30 80 30 90 45 C 100 55 120 45 110 38 Z" fill="currentColor" opacity="0">
      <animate attributeName="opacity" from="0" to="0.4" dur="1s" begin="2s" fill="freeze" />
    </path>
    <path d="M80 43 C 70 35 50 40 60 55 C 70 65 90 55 80 43 Z" fill="currentColor" opacity="0">
      <animate attributeName="opacity" from="0" to="0.2" dur="1s" begin="2.3s" fill="freeze" />
    </path>
    <path d="M100 68 C 80 75 70 90 90 95 C 110 100 110 80 100 68 Z" fill="currentColor" opacity="0">
      <animate attributeName="opacity" from="0" to="0.3" dur="1s" begin="2.6s" fill="freeze" />
    </path>
    <path d="M190 38 C 200 30 220 30 210 45 C 200 55 180 45 190 38 Z" fill="currentColor" opacity="0">
      <animate attributeName="opacity" from="0" to="0.4" dur="1s" begin="2s" fill="freeze" />
    </path>
    <path d="M220 43 C 230 35 250 40 240 55 C 230 65 210 55 220 43 Z" fill="currentColor" opacity="0">
      <animate attributeName="opacity" from="0" to="0.2" dur="1s" begin="2.3s" fill="freeze" />
    </path>
    <path d="M200 68 C 220 75 230 90 210 95 C 190 100 190 80 200 68 Z" fill="currentColor" opacity="0">
      <animate attributeName="opacity" from="0" to="0.3" dur="1s" begin="2.6s" fill="freeze" />
    </path>

    {/* Bottom Wrought Iron Scrolls */}
    <path d="M120 70 C 130 90 140 100 150 100 C 160 100 170 90 180 70" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M130 75 C 140 90 145 90 150 85 C 155 90 160 90 170 75" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <circle cx="150" cy="100" r="3" fill="currentColor" />
  </svg>
);

/* ── Elegant Botanical Divider ── */
export const GardenPartyDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 30" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Twined Vines */}
    <path d="M0 15 Q 80 25 160 15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <path d="M0 15 Q 80 5 160 15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
    
    {/* Center Leaf Bud */}
    <path d="M185 15 C 180 5 190 5 200 15 C 190 25 180 25 185 15 Z" fill="currentColor" opacity="0.8"/>
    <path d="M215 15 C 220 5 210 5 200 15 C 210 25 220 25 215 15 Z" fill="currentColor" opacity="0.8"/>
    <circle cx="200" cy="15" r="2" fill="#000" opacity="0.5" />
    
    <path d="M240 15 Q 320 25 400 15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    <path d="M240 15 Q 320 5 400 15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
  </svg>
);

/* ── 3. Intelligent Fireflies — organic clustering and wandering ── */
export const GardenPartyParticles = () => (
  <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const wanderX = Math.random() * 80 - 40;
      const wanderY = Math.random() * 60 - 30;
      const size = Math.random() * 4 + 2;
      const dur = Math.random() * 6 + 5;
      const delay = Math.random() * 6;
      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-lime-200"
          style={{
            width: size + 'px',
            height: size + 'px',
            left: `${startX}%`,
            top: `${startY}%`,
            boxShadow: `0 0 ${size * 3}px rgba(163,230,53,0.8)`,
          }}
          animate={{
            x: [0, wanderX, wanderX * -0.6, wanderX * 0.3, 0],
            y: [0, wanderY, wanderY * -0.8, wanderY * 0.5, 0],
            opacity: [0, 0.8, 0.3, 0.9, 0],
            scale: [0.8, 1.3, 0.9, 1.1, 0.8],
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
  </div>
);

/* ── 4. Theme Icon ── */
export const GardenPartyIcon = Leaf;
