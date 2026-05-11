import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

/* ── 1. The Living Royal Damask Pattern & God-Ray (Background Layer) ── */
export const RoyalGoldPattern = () => (
  <>
    {/* Animated Volumetric God Ray — slow breathing pulse */}
    <motion.div 
      className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%]" 
           style={{ background: 'conic-gradient(from 120deg at 0% 0%, transparent 0deg, rgba(255,215,0,0.15) 30deg, rgba(255,215,0,0.05) 60deg, transparent 90deg)' }} />
    </motion.div>

    {/* Shimmering Sweep — a golden light sweep across the damask */}
    <motion.div 
      className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen"
      animate={{ x: ['-100%', '200%'] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
      style={{ 
        width: '30%', 
        background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.08), transparent)',
      }}
    />

    {/* High-Fidelity Background Asset */}
    <div 
      className="absolute inset-0 z-[0] bg-cover bg-center bg-no-repeat opacity-80 mix-blend-lighten" 
      style={{ backgroundImage: "url('/themes/bg-royal.png')" }} 
    />
  </>
);

/* ── 2. The Ornate Tiara Crest (Mockup Decorator) - HIGH FIDELITY ── */
export const RoyalGoldDecorator = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 120" className={`w-40 h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Center High Crown */}
    <path d="M150 10 L158 35 L142 35 Z" fill="currentColor" />
    <circle cx="150" cy="5" r="4" fill="currentColor" />
    
    <path d="M140 45 C145 30 155 30 160 45 L170 80 C155 70 145 70 130 80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    
    {/* Pulsing center jewel */}
    <circle cx="150" cy="55" r="6" fill="currentColor" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="150" cy="55" r="2" fill="#000" opacity="0.5"/>

    {/* Flanking Pillars */}
    <path d="M125 35 L130 75 M175 35 L170 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="125" cy="30" r="3" fill="currentColor" />
    <circle cx="175" cy="30" r="3" fill="currentColor" />

    {/* Grand Filigree Left */}
    <path d="M130 80 C 100 60 80 20 60 40 C 40 60 70 90 100 80" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M100 80 C 80 100 40 90 20 110 C 0 130 -10 90 10 70 C 30 50 60 70 80 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
    <path d="M60 40 C 50 30 30 40 40 60" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="60" cy="40" r="3" fill="currentColor" />
    <circle cx="20" cy="110" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="80" cy="60" r="2" fill="currentColor" />

    {/* Grand Filigree Right */}
    <path d="M170 80 C 200 60 220 20 240 40 C 260 60 230 90 200 80" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M200 80 C 220 100 260 90 280 110 C 300 130 310 90 290 70 C 270 50 240 70 220 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
    <path d="M240 40 C 250 30 270 40 260 60" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="240" cy="40" r="3" fill="currentColor" />
    <circle cx="280" cy="110" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="220" cy="60" r="2" fill="currentColor" />

    {/* Intricate Bottom Base */}
    <path d="M90 90 C 120 110 180 110 210 90" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M100 95 C 130 110 170 110 200 95" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M120 105 L 150 120 L 180 105" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="150" cy="120" r="4" fill="currentColor" />
  </svg>
);

/* ── Elegant Divider for Layout - HIGH FIDELITY ── */
export const RoyalDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 30" className={`w-full h-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Left Line */}
    <line x1="0" y1="15" x2="160" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M140 15 Q 150 5 160 15 Q 150 25 140 15" fill="currentColor" opacity="0.3" />
    
    {/* Center Diamond / Flourish */}
    <path d="M185 15 L195 5 L205 15 L195 25 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M190 15 L195 10 L200 15 L195 20 Z" fill="currentColor" opacity="0.8" />
    
    <path d="M175 15 C 180 5 190 5 195 15 C 190 25 180 25 175 15 Z" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M225 15 C 220 5 210 5 205 15 C 210 25 220 25 225 15 Z" fill="none" stroke="currentColor" strokeWidth="1" />

    <circle cx="170" cy="15" r="2" fill="currentColor" />
    <circle cx="230" cy="15" r="2" fill="currentColor" />

    {/* Right Line */}
    <line x1="240" y1="15" x2="400" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M260 15 Q 250 5 240 15 Q 250 25 260 15" fill="currentColor" opacity="0.3" />
  </svg>
);

/* ── 3. Gold Flakes Particles — Organic Tumbling Physics ── */
export const RoyalGoldParticles = () => (
  <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
    {[...Array(30)].map((_, i) => {
      const size = Math.random() * 4 + 1;
      const startX = Math.random() * 100;
      const drift = Math.random() * 80 - 40;
      const dur = Math.random() * 12 + 10;
      const delay = Math.random() * 10;
      return (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-br from-amber-200 to-amber-500"
          style={{
            width: size + 'px',
            height: size * 0.6 + 'px',
            left: `${startX}%`,
            top: '-5%',
            borderRadius: '1px',
            boxShadow: '0 0 6px rgba(251,191,36,0.8)',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, drift, drift * -0.5, drift * 0.8],
            rotate: [0, 180, 360, 540, 720],
            opacity: [0, 0.8, 0.6, 0.3, 0],
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
export const RoyalGoldIcon = Crown;
