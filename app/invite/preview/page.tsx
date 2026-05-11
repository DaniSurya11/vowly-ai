"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Lock } from "lucide-react";

/* ── Soul Component Imports ── */
import { RoyalGoldPattern, RoyalGoldParticles, RoyalGoldDecorator, RoyalDivider } from "@/components/theme-souls/RoyalGoldSoul";
import { SoftRomancePattern, SoftRomanceParticles, SoftRomanceDecorator, SoftRomanceDivider } from "@/components/theme-souls/SoftRomanceSoul";
import { DarkLuxuryPattern, DarkLuxuryParticles, DarkLuxuryDecorator, DarkLuxuryDivider } from "@/components/theme-souls/DarkLuxurySoul";
import { GardenPartyPattern, GardenPartyParticles, GardenPartyDecorator, GardenPartyDivider } from "@/components/theme-souls/GardenPartySoul";
import { MinimalElegantPattern, MinimalElegantParticles, MinimalElegantDecorator, MinimalElegantDivider } from "@/components/theme-souls/MinimalElegantSoul";
import { VintageFilmPattern, VintageFilmParticles, VintageFilmDecorator, VintageFilmDivider } from "@/components/theme-souls/VintageFilmSoul";

const souls: Record<string, any> = {
  "Royal Gold": { Pattern: RoyalGoldPattern, Particles: RoyalGoldParticles, Decorator: RoyalGoldDecorator, Divider: RoyalDivider },
  "Soft Romance": { Pattern: SoftRomancePattern, Particles: SoftRomanceParticles, Decorator: SoftRomanceDecorator, Divider: SoftRomanceDivider },
  "Dark Luxury": { Pattern: DarkLuxuryPattern, Particles: DarkLuxuryParticles, Decorator: DarkLuxuryDecorator, Divider: DarkLuxuryDivider },
  "Garden Party": { Pattern: GardenPartyPattern, Particles: GardenPartyParticles, Decorator: GardenPartyDecorator, Divider: GardenPartyDivider },
  "Minimal Elegant": { Pattern: MinimalElegantPattern, Particles: MinimalElegantParticles, Decorator: MinimalElegantDecorator, Divider: MinimalElegantDivider },
  "Vintage Film": { Pattern: VintageFilmPattern, Particles: VintageFilmParticles, Decorator: VintageFilmDecorator, Divider: VintageFilmDivider },
};

/* ── Custom Theme SVG Masks for Photos ── */
const themeMasks: Record<string, string> = {
  "Royal Gold": "url(#mask-royal-shield)",
  "Soft Romance": "url(#mask-floral-oval)",
  "Dark Luxury": "url(#mask-sharp-diamond)",
  "Garden Party": "url(#mask-archway)",
  "Minimal Elegant": "url(#mask-perfect-circle)",
  "Vintage Film": "url(#mask-film-frame)",
};

export default function GuestInvitationPreview() {
  const [aiData, setAiData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [unsealed, setUnsealed] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('vowly_ai_result');
    if (saved) {
      try {
        setAiData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse AI data", e);
      }
    }
  }, []);

  // Safe fallbacks while loading or if no data
  const isLoaded = mounted && aiData;
  const names = isLoaded && aiData.heroTitle ? aiData.heroTitle : "Sarah & Michael";
  
  // Format dates safely
  let dateFormatted = "October 24th, 2024";
  let dateShort = "Saturday, Oct 24";
  let yearStr = "2024";
  
  if (isLoaded && aiData.inputData?.date) {
    try {
      const d = new Date(aiData.inputData.date);
      dateFormatted = d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      dateShort = d.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric' });
      yearStr = d.getFullYear().toString();
    } catch(e) {}
  }

  const location = isLoaded && aiData.inputData?.location ? aiData.inputData.location : "Lake Como, Italy";
  const tagline = isLoaded && aiData.cinematicTagline ? aiData.cinematicTagline : "Where elegance meets eternity.";
  
  // Extract theme colors safely
  const primaryColor = isLoaded && aiData.colorPalette && aiData.colorPalette.length > 0 ? aiData.colorPalette[0] : "#EAB308"; // Fallback to yellow-500
  const bgColor = isLoaded && aiData.colorPalette && aiData.colorPalette.length > 2 ? aiData.colorPalette[2] : "#0A0A0A";
  const themeDesc = isLoaded && aiData.themeDescription ? aiData.themeDescription : "";

  // Get active soul
  const activeThemeName = isLoaded && aiData.recommendedTheme ? aiData.recommendedTheme : "Royal Gold";
  const ActiveSoul = souls[activeThemeName] || souls["Royal Gold"];

  if (!mounted) return <div className="min-h-[100dvh] bg-black" />;
  return (
    <div className={`min-h-[100dvh] text-white selection:bg-white/30 selection:text-white pb-20 transition-colors duration-1000 overflow-x-hidden ${unsealed ? '' : 'h-[100dvh] overflow-hidden'}`} style={{ backgroundColor: bgColor }}>
      
      {/* ── THE MINIMALIST COVER (Replaces Fake Wax Seal) ── */}
      <AnimatePresence>
        {!unsealed && (
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer bg-black"
            onClick={() => setUnsealed(true)}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative z-10 flex flex-col items-center gap-12"
            >
              {/* Clean Typography Monogram */}
              <div className="flex items-center justify-center border border-white/20 w-32 h-32 rounded-full">
                <span className="playfair text-4xl text-white tracking-widest font-light">
                  {names.split('&')[0].trim().charAt(0)}&{names.split('&')[1]?.trim().charAt(0) || 'G'}
                </span>
              </div>

              <p className="text-[10px] uppercase tracking-[0.5em] font-light text-white/50">
                Enter
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SVG Defs for Masks ── */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="mask-royal-shield" clipPathUnits="objectBoundingBox">
            <path d="M0.5 0 L1 0.1 L1 0.7 C1 0.9 0.5 1 0.5 1 C0.5 1 0 0.9 0 0.7 L0 0.1 Z" />
          </clipPath>
          <clipPath id="mask-floral-oval" clipPathUnits="objectBoundingBox">
            <path d="M0.5 0 C0.8 0 1 0.25 1 0.5 C1 0.75 0.8 1 0.5 1 C0.2 1 0 0.75 0 0.5 C0 0.25 0.2 0 0.5 0 Z" />
          </clipPath>
          <clipPath id="mask-sharp-diamond" clipPathUnits="objectBoundingBox">
            <path d="M0.5 0 L1 0.5 L0.5 1 L0 0.5 Z" />
          </clipPath>
          <clipPath id="mask-archway" clipPathUnits="objectBoundingBox">
            <path d="M0 0.4 C0 0.1 0.2 0 0.5 0 C0.8 0 1 0.1 1 0.4 L1 1 L0 1 Z" />
          </clipPath>
          <clipPath id="mask-perfect-circle" clipPathUnits="objectBoundingBox">
            <circle cx="0.5" cy="0.5" r="0.5" />
          </clipPath>
          <clipPath id="mask-film-frame" clipPathUnits="objectBoundingBox">
            <path d="M0 0.05 L1 0.05 L1 0.95 L0 0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* HERO BANNER */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center overflow-hidden pb-32">
        
        {/* The Soul (Background & Particles & Lighting) */}
        <div className="absolute inset-0 bg-[#070503]" />
        <div className="absolute inset-0 z-0">
           <ActiveSoul.Pattern />
           <ActiveSoul.Particles />
        </div>
        
        {/* Gradient Overlay for bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 z-[5]" style={{ background: `linear-gradient(to top, #070503, transparent)` }} />
        
        <div className="relative z-10 px-6 w-full max-w-md mx-auto flex flex-col items-center mt-12">
          
          {/* THE WEDDING OF */}
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 0.7, letterSpacing: "0.4em" }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-[8px] uppercase tracking-[0.4em] mb-8 font-light"
            style={{ color: primaryColor }}
          >
            The Wedding Of
          </motion.p>

          {/* The Tiara Crest / Decorator with Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="mb-8 opacity-80 relative flex justify-center"
            style={{ color: primaryColor }}
          >
            <ActiveSoul.Decorator className="w-16 h-auto" />
          </motion.div>

          {/* BRYAN and GABRIELLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="flex flex-col items-center gap-4 mb-10 w-full"
          >
            <h1 className="playfair text-5xl md:text-6xl tracking-[0.15em] font-light uppercase" style={{ color: primaryColor }}>
              {names.split('&')[0].trim()}
            </h1>
            <div className="flex items-center justify-center gap-4 w-full opacity-60">
              <span className="text-[10px] uppercase tracking-widest font-light" style={{ color: primaryColor }}>and</span>
            </div>
            <h1 className="playfair text-5xl md:text-6xl tracking-[0.15em] font-light uppercase" style={{ color: primaryColor }}>
              {names.split('&')[1]?.trim() || 'GABRIELLE'}
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full max-w-[120px] mb-8 opacity-40 h-[1px]"
            style={{ backgroundColor: primaryColor, transformOrigin: 'center' }}
          />

          {/* DATE BLOCK */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.5 }}
            className="flex flex-col items-center gap-3 mb-10 w-full max-w-[240px]"
            style={{ color: primaryColor }}
          >
            <p className="text-[9px] tracking-[0.3em] font-medium uppercase opacity-80">May</p>
            <div className="flex items-center justify-between w-full border-y py-3" style={{ borderColor: `${primaryColor}4d` }}>
              <span className="text-[8px] tracking-[0.2em] uppercase opacity-70 flex-1 text-left">Saturday</span>
              <span className="playfair text-4xl leading-none px-4" style={{ filter: `drop-shadow(0 0 8px ${primaryColor}66)` }}>14</span>
              <span className="text-[8px] tracking-[0.2em] uppercase opacity-70 flex-1 text-right">2026</span>
            </div>
            <p className="text-[8px] tracking-[0.2em] font-medium uppercase opacity-70">At 05.00 PM</p>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1.5 }}
            className="flex flex-col items-center gap-1.5 mb-12 opacity-60"
            style={{ color: primaryColor }}
          >
            <p className="text-[9px] tracking-[0.2em] uppercase font-medium">The Manor House</p>
            <p className="text-[8px] tracking-[0.2em] uppercase opacity-70">Bandung, Indonesia</p>
          </motion.div>

          {/* SAVE THE DATE BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="px-8 py-3 border text-[9px] tracking-[0.3em] uppercase transition-all active:scale-95"
            style={{ color: primaryColor, borderColor: `${primaryColor}66`, backgroundColor: 'transparent' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${primaryColor}1a`; e.currentTarget.style.borderColor = primaryColor; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = `${primaryColor}66`; }}
          >
            Save The Date
          </motion.button>
          
        </div>
      </section>

      {/* ── THE NARRATIVE ARC (Editorial Magazine Style) ── */}
      <section className="relative z-10 w-full bg-black py-32 border-t" style={{ borderColor: `${primaryColor}1a` }}>
        
        <div className="text-center mb-20 px-6">
          <h2 className="playfair text-sm tracking-[0.4em] uppercase mb-4" style={{ color: primaryColor }}>Chapter I</h2>
          <div className="w-[1px] h-12 mx-auto opacity-30" style={{ backgroundColor: primaryColor }} />
        </div>

        {/* Layout Engine for Narrative */}
        {activeThemeName === "Vintage Film" || activeThemeName === "Garden Party" ? (
          /* Horizontal Journey Layout */
          <div className="w-full overflow-x-auto pb-12 px-6 flex gap-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {[
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
              "https://images.unsplash.com/photo-1519741497674-611481863552",
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
              "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
              "https://images.unsplash.com/photo-1606800052052-a08af7148866"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="shrink-0 snap-center relative"
              >
                {activeThemeName === "Vintage Film" ? (
                  <div className="w-64 h-80 bg-black p-2 border border-neutral-800 relative">
                    <div className="absolute top-0 bottom-0 left-1 w-2 flex flex-col justify-between py-2"><div className="w-1.5 h-2 bg-white/20"/><div className="w-1.5 h-2 bg-white/20"/><div className="w-1.5 h-2 bg-white/20"/><div className="w-1.5 h-2 bg-white/20"/></div>
                    <img src={`${img}?q=80&w=800&auto=format&fit=crop`} alt="Gallery" className="w-full h-full object-cover grayscale opacity-80" />
                    <div className="absolute top-0 bottom-0 right-1 w-2 flex flex-col justify-between py-2"><div className="w-1.5 h-2 bg-white/20"/><div className="w-1.5 h-2 bg-white/20"/><div className="w-1.5 h-2 bg-white/20"/><div className="w-1.5 h-2 bg-white/20"/></div>
                  </div>
                ) : (
                  <div className="w-64 h-72 bg-white p-3 pb-12 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform">
                    <img src={`${img}?q=80&w=800&auto=format&fit=crop`} alt="Gallery" className="w-full h-full object-cover" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        ) : activeThemeName === "Dark Luxury" || activeThemeName === "Minimal Elegant" ? (
          /* Asymmetrical Editorial Layout */
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="md:col-span-7 h-[60vh] relative"
            >
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-70" alt="Main" />
              <div className="absolute bottom-6 left-6 max-w-xs">
                <p className="playfair text-3xl mb-2" style={{ color: primaryColor }}>I. The First Glance</p>
                <p className="text-xs opacity-60 tracking-widest leading-relaxed">It started with a look across a crowded room. Time stood completely still.</p>
              </div>
            </motion.div>
            
            <div className="md:col-span-5 flex flex-col gap-8 md:pt-32">
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="h-64 bg-neutral-900 w-full md:w-5/6 ml-auto">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Story 2" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} className="h-80 bg-neutral-900 w-full md:w-3/4">
                <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Story 3" />
              </motion.div>
            </div>
          </div>

        ) : (
          /* Symmetrical Classic Layout (Royal Gold, Soft Romance) */
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-16">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full max-w-md relative p-2 border" style={{ borderColor: `${primaryColor}4d` }}>
              <div className="p-1 border" style={{ borderColor: `${primaryColor}80` }}>
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover opacity-90" alt="Portrait" />
              </div>
            </motion.div>
            
            <p className="playfair text-xl text-center max-w-lg leading-loose italic" style={{ color: primaryColor }}>
              "Two souls, one heart. A journey that began with a whisper and will echo into eternity."
            </p>

            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              <motion.img initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" className="w-full aspect-square object-cover border border-white/10 opacity-80" />
              <motion.img initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop" className="w-full aspect-square object-cover border border-white/10 opacity-80" />
            </div>
          </div>
        )}
      </section>

      {/* GLASS BOTTOM NAV (Clean Editorial Version) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[280px] z-50">
        <div 
          className="flex items-center justify-between px-6 py-3 rounded-full border bg-black/90 backdrop-blur-xl"
          style={{ borderColor: `${primaryColor}26` }}
        >
          {[
            { label: "01", active: true },
            { label: "02", active: false },
            { label: "03", active: false },
            { label: "04", active: false }
          ].map((item) => (
            <button key={item.label} className="flex flex-col items-center p-2" style={{ opacity: item.active ? 1 : 0.4 }}>
              <span className="text-[10px] font-light tracking-widest" style={{ color: primaryColor }}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── THE DETAILS & ITINERARY ── */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="playfair text-3xl md:text-5xl mb-16" style={{ color: primaryColor }}>The Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center">
            <Calendar className="w-8 h-8 mb-6 opacity-60" style={{ color: primaryColor }} strokeWidth={1} />
            <h3 className="text-xs uppercase tracking-[0.2em] mb-2">When</h3>
            <p className="playfair text-xl">{dateShort}<br/>{yearStr}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0">
            <Clock className="w-8 h-8 mb-6 opacity-60" style={{ color: primaryColor }} strokeWidth={1} />
            <h3 className="text-xs uppercase tracking-[0.2em] mb-2">Time</h3>
            <p className="playfair text-xl">Ceremony at 4:00 PM<br/>Reception to follow</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-6 opacity-60" style={{ color: primaryColor }} strokeWidth={1} />
            <h3 className="text-xs uppercase tracking-[0.2em] mb-2">Where</h3>
            <p className="playfair text-xl whitespace-pre-wrap">{location.replace(/,\s*/g, '\n')}</p>
          </motion.div>
        </div>

        {/* Map Placeholder & Add to Calendar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-64 md:h-96 relative border flex items-center justify-center overflow-hidden mb-8"
          style={{ borderColor: `${primaryColor}33`, backgroundColor: '#0A0A0A' }}
        >
          {/* Faux Dark Map Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="relative flex flex-col items-center gap-4 z-10 p-6 bg-black/60 backdrop-blur-md rounded-2xl border" style={{ borderColor: `${primaryColor}4d` }}>
             <MapPin className="w-6 h-6" style={{ color: primaryColor }} />
             <p className="text-xs tracking-widest uppercase">View Interactive Map</p>
          </div>
        </motion.div>

        <button 
          className="px-8 py-4 border text-[9px] tracking-[0.3em] uppercase transition-all hover:bg-white hover:text-black"
          style={{ borderColor: primaryColor, color: primaryColor }}
        >
          Add to Calendar
        </button>
      </section>

      {/* ── THE CONSTELLATION GUESTBOOK & RSVP ── */}
      <section className="relative z-10 max-w-2xl mx-auto px-6 py-20 pb-40">
        
        {/* Generative Guestbook Visualization (Faux Constellation) */}
        <div className="w-full h-48 mb-12 relative flex items-center justify-center">
           <div className="absolute inset-0 opacity-50 flex items-center justify-center">
             <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
               <path d="M50 100 L150 50 L250 120 L350 80" fill="none" stroke={primaryColor} strokeWidth="0.5" strokeDasharray="4 4" className="opacity-30" />
               <circle cx="50" cy="100" r="3" fill={primaryColor} className="animate-pulse" />
               <circle cx="150" cy="50" r="4" fill={primaryColor} className="animate-pulse" style={{ animationDelay: '1s' }} />
               <circle cx="250" cy="120" r="2" fill={primaryColor} className="animate-pulse" style={{ animationDelay: '0.5s' }} />
               <circle cx="350" cy="80" r="5" fill={primaryColor} className="animate-pulse" style={{ animationDelay: '1.5s' }} />
             </svg>
           </div>
           <div className="z-10 text-center">
             <p className="playfair text-xl italic mb-2" style={{ color: primaryColor }}>"A universe of wishes."</p>
             <p className="text-[8px] uppercase tracking-[0.3em] opacity-50">Tap a star to read a wish</p>
           </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border p-8 md:p-12 text-center bg-black"
          style={{ borderColor: `${primaryColor}26` }}
        >
          <h2 className="playfair text-2xl mb-2" style={{ color: primaryColor }}>RSVP</h2>
          <p className="text-[10px] opacity-50 mb-12 uppercase tracking-[0.2em]">Respond by September 1st</p>
          
          <form className="flex flex-col gap-8 text-left" onSubmit={(e) => { e.preventDefault(); alert('RSVP Submitted.'); }}>
            <div>
              <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b px-2 py-2 text-white focus:outline-none transition-colors text-xs font-light tracking-widest" style={{ borderColor: `${primaryColor}33` }} required />
            </div>
            <div>
              <div className="relative">
                <select className="w-full bg-transparent border-b px-2 py-2 text-white focus:outline-none appearance-none cursor-pointer text-xs font-light tracking-widest" style={{ borderColor: `${primaryColor}33` }}>
                  <option className="bg-black">Joyfully Accepts</option>
                  <option className="bg-black">Regretfully Declines</option>
                </select>
              </div>
            </div>
            <button 
              type="submit"
              className="mt-8 w-full border px-6 py-4 text-[10px] font-light uppercase tracking-[0.3em] transition-colors hover:bg-white hover:text-black" 
              style={{ borderColor: primaryColor, color: primaryColor }}
            >
              Submit
            </button>
          </form>
        </motion.div>
      </section>
      
    </div>
  );
}
