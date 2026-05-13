import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import Image from 'next/image';

/* ── 1. BACKGROUND LAYERS: Cinematic Premium Experience ── */
export const RoyalGoldPattern = () => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 1.05 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
    className="absolute inset-0 overflow-hidden pointer-events-none"
  >
    {/* 1. ROUND LAYER (Background) */}
    <div className="absolute inset-0 z-[0]">
      <Image 
        src="/themes/royal/bg.webp" 
        alt="Royal Background" 
        fill
        className="object-cover object-center"
        priority
      />
      {/* Darken overlay for cinematic contrast */}
      <div className="absolute inset-0 bg-black/60" />
    </div>

    {/* 2. LIGHTING LAYER */}
    <motion.div 
      className="absolute inset-0 z-[1] mix-blend-screen opacity-50"
      animate={{ 
        y: [0, -30, 0], 
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image 
        src="/themes/royal/gold-light.png" 
        alt="Gold Light" 
        fill
        className="object-cover"
        priority
      />
    </motion.div>


    {/* 4. FLORAL OVERLAY */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 0.7, x: 0 }}
      transition={{ delay: 1, duration: 2 }}
      className="absolute top-[-5%] right-[-10%] w-[75%] max-w-[600px] aspect-square z-[3] pointer-events-none"
    >
      <Image 
        src="/themes/royal/gold-floral-top.png" 
        alt="Floral Top" 
        fill
        className="object-contain object-top right-0"
      />
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 0.7, x: 0 }}
      transition={{ delay: 1.2, duration: 2 }}
      className="absolute bottom-[-10%] left-[-10%] w-[75%] max-w-[600px] aspect-square z-[3] pointer-events-none"
    >
      <Image 
        src="/themes/royal/gold-floral-bottom.png" 
        alt="Floral Bottom" 
        fill
        className="object-contain object-bottom left-0"
      />
    </motion.div>

    {/* 5. GRAIN TEXTURE */}
    <div 
      className="absolute inset-0 z-[4] mix-blend-soft-light opacity-[0.15] pointer-events-none"
      style={{ backgroundImage: "url('/themes/royal/grain.png')", backgroundRepeat: 'repeat', backgroundSize: '150px' }}
    />
    
    {/* Base Vignette for Content Depth */}
    <div className="absolute inset-0 z-[5] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
  </motion.div>
);

/* ── 2. The Ornate Crest (Mockup Decorator) - MINIMAL EDITORIAL ── */
export const RoyalGoldDecorator = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`w-12 h-auto opacity-90 ${className}`} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-50" />
    <path d="M50 15 L50 85 M15 50 L85 50" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
    <path d="M45 45 L55 55 M45 55 L55 45" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </svg>
);

/* ── Elegant Divider for Layout - MINIMAL EDITORIAL ── */
export const RoyalDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full flex items-center justify-center gap-4 ${className} opacity-60`}>
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
    <div className="w-1.5 h-1.5 rotate-45 bg-current opacity-80" />
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
  </div>
);

/* ── 3. Gold Flakes Particles (Replaced by Image Overlay) ── */
export const RoyalGoldParticles = () => null;

/* ── 4. Theme Icon ── */
export const RoyalGoldIcon = Crown;

