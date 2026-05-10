"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Sparkles, Music, Wind, Heart } from "lucide-react";
import Link from "next/link";

/* ── Full atmosphere config per theme (Safari-optimized: vibrant, sharp, performant) ── */
const themeAtmosphere: Record<string, {
  pageBg: string; glowColor: string; accent: string; accentBorder: string;
  btnBg: string; btnText: string; previewBg: string; previewBorder: string;
  particleColor: string; labelColor: string; swatch: string;
  image: string; bgImage?: string; previewImage?: string; aiMsg: string[];
}> = {
  "Royal Gold": {
    pageBg: "#100c04", glowColor: "rgba(217,158,0,0.40)", accent: "text-amber-400",
    accentBorder: "border-amber-500", btnBg: "bg-amber-500 hover:bg-amber-400",
    btnText: "text-black", previewBg: "bg-[#140f04]", previewBorder: "border-amber-500/25",
    particleColor: "rgba(217,158,0,0.25)", labelColor: "text-amber-500/90",
    swatch: "from-amber-400 to-amber-700", image: "/themes/card-royal-gold.png",
    bgImage: "/themes/bg-royal.png",
    aiMsg: ["Majestic gold palette detected.", "Matching typography with royal ambiance...", "Crafting opulent visual direction."],
  },
  "Soft Romance": {
    pageBg: "#110a0d", glowColor: "rgba(244,114,130,0.38)", accent: "text-pink-300",
    accentBorder: "border-pink-400", btnBg: "bg-pink-400 hover:bg-pink-300",
    btnText: "text-black", previewBg: "bg-[#12090c]", previewBorder: "border-pink-400/25",
    particleColor: "rgba(244,114,130,0.22)", labelColor: "text-pink-400/90",
    swatch: "from-pink-300 to-rose-500", image: "/themes/card-soft-romance.png",
    bgImage: "/themes/bg-softromance.png",
    aiMsg: ["Soft romantic composition recognized.", "Composing tender romantic atmosphere...", "Weaving ethereal elegance."],
  },
  "Dark Luxury": {
    pageBg: "#040406", glowColor: "rgba(180,180,210,0.20)", accent: "text-slate-200",
    accentBorder: "border-slate-400", btnBg: "bg-white hover:bg-slate-100",
    btnText: "text-black", previewBg: "bg-[#050508]", previewBorder: "border-slate-400/15",
    particleColor: "rgba(180,180,210,0.12)", labelColor: "text-slate-400",
    swatch: "from-slate-600 to-slate-950", image: "/themes/card-dark-luxury.png",
    bgImage: "/themes/bg-darkluxury.png",
    aiMsg: ["Cinematic editorial direction selected.", "Analyzing mysterious visual depth...", "Designing dark editorial experience."],
  },
  "Garden Party": {
    pageBg: "#080b06", glowColor: "rgba(120,150,90,0.32)", accent: "text-lime-300",
    accentBorder: "border-lime-500/60", btnBg: "bg-lime-500 hover:bg-lime-400",
    btnText: "text-black", previewBg: "bg-[#090c06]", previewBorder: "border-lime-500/20",
    particleColor: "rgba(120,150,90,0.18)", labelColor: "text-lime-400/80",
    swatch: "from-lime-600/80 to-green-950", image: "/themes/card-garden-party.png",
    bgImage: "/themes/bg-gardenparty.png",
    aiMsg: ["Luxury botanical atmosphere identified.", "Composing elegant garden aesthetic...", "Crafting organic editorial narrative."],
  },
  "Minimal Elegant": {
    pageBg: "#0b0a08", glowColor: "rgba(230,220,200,0.22)", accent: "text-amber-200",
    accentBorder: "border-amber-300/40", btnBg: "bg-amber-200 hover:bg-amber-100",
    btnText: "text-neutral-900", previewBg: "bg-[#0c0b08]", previewBorder: "border-amber-200/15",
    particleColor: "rgba(230,220,200,0.12)", labelColor: "text-amber-300/70",
    swatch: "from-amber-100 to-stone-300", image: "/themes/card-minimal-elegant.png",
    bgImage: "/themes/bg-minimal-elegant.png",
    aiMsg: ["Clean modern aesthetic selected.", "Distilling visual purity...", "Crafting timeless editorial layout."],
  },
  "Vintage Film": {
    pageBg: "#0e0804", glowColor: "rgba(160,80,20,0.35)", accent: "text-orange-300",
    accentBorder: "border-orange-500", btnBg: "bg-orange-500 hover:bg-orange-400",
    btnText: "text-black", previewBg: "bg-[#0f0904]", previewBorder: "border-orange-500/25",
    particleColor: "rgba(160,80,20,0.18)", labelColor: "text-orange-400/90",
    swatch: "from-orange-700 to-stone-800", image: "/themes/card-dark-luxury.png",
    bgImage: "/themes/bg-fintagefilm.png",
    aiMsg: ["Warm cinematic grain detected.", "Analyzing nostalgic color chemistry...", "Composing vintage storytelling tone."],
  },
};

const themeNames = Object.keys(themeAtmosphere);
const defaultAtmo = themeAtmosphere["Royal Gold"];

export default function CreateInvitation() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    names: "",
    date: "",
    location: "",
    theme: "",
    music: "",
    atmosphere: ""
  });

  /* ── AI feedback text state ── */
  const [aiText, setAiText] = useState("");
  const [aiTextVisible, setAiTextVisible] = useState(false);

  /* ── Navigation ── */
  const validateAndNext = () => {
    if (step === 1 && (!data.names.trim() || !data.date || !data.location.trim())) {
      triggerError();
      return;
    }
    if (step === 2 && !data.theme) {
      triggerError();
      return;
    }
    if (step === 3 && (!data.music || !data.atmosphere)) {
      triggerError();
      return;
    }
    setError(false);
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerError = () => {
    setError(true);
    setTimeout(() => setError(false), 500);
  };

  /* ── AI Processing messages (dynamic based on user choices) ── */
  const loadingMessages = useMemo(() => [
    "Analyzing your love story...",
    `Orchestrating the ${data.theme || "cinematic"} aesthetic...`,
    `Weaving ${data.atmosphere || "emotional"} atmosphere with ${data.music || "melodic"} harmonies...`,
    "Composing your cinematic narrative...",
    "Finalizing every luxury detail..."
  ], [data.theme, data.atmosphere, data.music]);
  
  const [loadingText, setLoadingText] = useState(loadingMessages[0]);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (step === 4) {
      let i = 0;
      setLoadingText(loadingMessages[0]);
      setLoadingProgress(0);
      const interval = setInterval(() => {
        i += 1;
        if (i < loadingMessages.length) {
          setLoadingText(loadingMessages[i]);
          setLoadingProgress((i / loadingMessages.length) * 100);
        } else {
          clearInterval(interval);
          setLoadingProgress(100);
          setTimeout(() => {
            setStep(5);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 600);
        }
      }, 1800);
      return () => clearInterval(interval);
    }
  }, [step, loadingMessages]);

  /* ── Active atmosphere ── */
  const atmo = data.theme ? themeAtmosphere[data.theme] : null;

  /* ── Handle theme selection with AI feedback ── */
  const handleThemeSelect = (themeName: string) => {
    setError(false);
    setData({ ...data, theme: themeName });
    const cfg = themeAtmosphere[themeName];
    if (cfg) {
      const msg = cfg.aiMsg[Math.floor(Math.random() * cfg.aiMsg.length)];
      setAiText(msg);
      setAiTextVisible(true);
      setTimeout(() => setAiTextVisible(false), 2800);
    }
  };

  /* ── Background image for active theme ── */
  const activeBgImage = (step === 2 || step === 3) && atmo && atmo.bgImage ? atmo.bgImage : null;

  return (
    <div className="relative min-h-[100dvh] w-full max-w-[100vw] bg-black text-white flex flex-col overflow-x-hidden pt-24 md:pt-28 pb-[calc(3rem+env(safe-area-inset-bottom))]">

      {/* ── Theme Background Image ── */}
      <AnimatePresence>
        {activeBgImage && (
          <motion.div
            key={activeBgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <img src={activeBgImage} alt="" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Progress Bar ── */}
      {step < 4 && (
        <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-50">
          <motion.div 
            className="h-full bg-yellow-500"
            initial={{ width: "0%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      )}

      <div className="relative z-10 w-full max-w-2xl px-6 mx-auto">
        <AnimatePresence mode="wait">
          
          {/* ════════════════════════════════════════════ */}
          {/* STEP 1: YOUR STORY BEGINS                   */}
          {/* ════════════════════════════════════════════ */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col gap-8 md:gap-10"
            >
              <div className="text-center mb-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                  className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-5 border border-yellow-500/20"
                >
                  <Heart className="w-5 h-5 text-yellow-500" />
                </motion.div>
                <p className="text-yellow-500 uppercase tracking-[0.25em] text-[10px] mb-3">Chapter One</p>
                <h1 className="playfair text-3xl md:text-5xl leading-tight">
                  Tell Us Your Story
                </h1>
                <p className="text-neutral-400 mt-3 text-sm max-w-sm mx-auto leading-relaxed">Every masterpiece begins with a name, a date, and a place where dreams come alive.</p>
              </div>

              <motion.div animate={error ? { x: [-10, 10, -8, 8, -5, 5, 0] } : {}} transition={{ duration: 0.4 }} className="space-y-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-yellow-500/80 mb-2 ml-4">Who&apos;s love are we celebrating?</label>
                  <input 
                    type="text" 
                    autoFocus
                    placeholder="Romeo & Juliet" 
                    value={data.names}
                    onChange={(e) => { setError(false); setData({ ...data, names: e.target.value }); }}
                    className={`w-full bg-white/[0.03] focus:bg-white/[0.07] border ${error && !data.names ? 'border-red-500/60' : 'border-white/10'} hover:border-white/20 rounded-2xl px-6 py-4 text-base text-white placeholder:text-neutral-600 focus:outline-none focus:border-yellow-500/60 transition-all duration-300`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-yellow-500/80 mb-2 ml-4">When is the magical day?</label>
                  <input 
                    type="date" 
                    value={data.date}
                    onChange={(e) => { setError(false); setData({ ...data, date: e.target.value }); }}
                    className={`w-full bg-white/[0.03] focus:bg-white/[0.07] border ${error && !data.date ? 'border-red-500/60' : 'border-white/10'} hover:border-white/20 rounded-2xl px-6 py-4 text-base text-white focus:outline-none focus:border-yellow-500/60 transition-all duration-300 [color-scheme:dark]`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-yellow-500/80 mb-2 ml-4">Where will this memory be made?</label>
                  <input 
                    type="text" 
                    placeholder="Lake Como, Italy" 
                    value={data.location}
                    onChange={(e) => { setError(false); setData({ ...data, location: e.target.value }); }}
                    className={`w-full bg-white/[0.03] focus:bg-white/[0.07] border ${error && !data.location ? 'border-red-500/60' : 'border-white/10'} hover:border-white/20 rounded-2xl px-6 py-4 text-base text-white placeholder:text-neutral-600 focus:outline-none focus:border-yellow-500/60 transition-all duration-300`}
                  />
                </div>
              </motion.div>

              <button 
                onClick={validateAndNext}
                className="group flex items-center justify-center gap-3 text-black bg-yellow-500 hover:bg-yellow-400 py-4 rounded-2xl font-semibold uppercase tracking-[0.15em] text-xs transition-all duration-300 active:scale-[0.98]"
              >
                Write Our First Chapter <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          )}

          {/* ════════════════════════════════════════════ */}
          {/* STEP 2: VISUAL DIRECTION (with ambient glow) */}
          {/* ════════════════════════════════════════════ */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col gap-5 md:gap-7"
            >
              {/* Inline Back */}
              <button 
                onClick={() => { setStep(step - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="flex items-center gap-1.5 text-neutral-500 hover:text-white transition-colors text-[10px] font-medium uppercase tracking-widest self-start"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Back
              </button>

              <div className="text-center">
                <p className={`uppercase tracking-[0.25em] text-[10px] mb-2 transition-colors duration-500 ${atmo ? atmo.labelColor : 'text-amber-500/80'}`}>Chapter Two</p>
                <h1 className="playfair text-3xl md:text-5xl">How Do You Picture Your Dream?</h1>
                <p className="text-neutral-400 mt-2 text-xs md:text-sm leading-relaxed max-w-md mx-auto">Choose a visual tone. Watch the atmosphere adapt in real-time.</p>
              </div>

              {/* ── Theme Grid (Image Cards) ── */}
              <motion.div animate={error ? { x: [-10, 10, -8, 8, -5, 5, 0] } : {}} className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3">
              {themeNames.map((name) => {
                const cfg = themeAtmosphere[name];
                const isActive = data.theme === name;
                return (
                  <motion.button
                    key={name}
                    onClick={() => handleThemeSelect(name)}
                    whileTap={{ scale: 0.97 }}
                    className={`relative rounded-xl md:rounded-2xl border overflow-hidden transition-all duration-500 ${isActive ? `${cfg.accentBorder} scale-[1.02]` : 'border-white/10 hover:border-white/25'}`}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3]">
                      <img src={cfg.image} alt={name} className="w-full h-full object-cover" loading="lazy" />
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      {/* Theme name */}
                      <span className={`absolute bottom-2.5 left-3 playfair text-xs md:text-sm transition-colors duration-300 ${isActive ? cfg.accent : 'text-white'}`}>{name}</span>
                    </div>
                    {/* Selected badge */}
                    {isActive && (
                      <motion.div
                        layoutId="themeCheck"
                        className={`absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center ${cfg.btnBg.split(' ')[0]}`}
                        transition={{ type: "spring", bounce: 0.4 }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
              </motion.div>

              {/* ── Live Preview + AI Insight ── */}
              <AnimatePresence mode="wait">
                {atmo && (
                  <motion.div
                    key={data.theme}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    className={`relative overflow-hidden rounded-2xl border ${atmo.previewBorder} ${atmo.previewBg} p-4 md:p-6`}
                  >
                    <p className={`text-[9px] uppercase tracking-[0.3em] mb-4 text-center ${atmo.labelColor}`}>Live Preview</p>
                    <div className="flex gap-3 items-start">
                      {/* Phone mockup image */}
                      <div className="flex-1 flex justify-center">
                        <img 
                          src={atmo.image} 
                          alt="Preview" 
                          className="w-full max-w-[180px] rounded-xl"
                          loading="lazy"
                        />
                      </div>
                      {/* AI Insight */}
                      <div className="flex-1 flex flex-col gap-3 pt-2">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className={`w-3 h-3 ${atmo.accent}`} />
                          <span className={`text-[9px] font-semibold uppercase tracking-wider ${atmo.accent}`}>AI Insight</span>
                        </div>
                        <p className="text-[10px] md:text-xs text-white/60 leading-relaxed italic">
                          {aiText || atmo.aiMsg[0]}
                        </p>
                        <p className="text-[8px] text-white/30 tracking-wider">Crafting a {data.theme.toLowerCase()} wedding experience.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Themed CTA Button ── */}
              <button 
                onClick={validateAndNext}
                className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold uppercase tracking-[0.15em] text-[10px] md:text-xs transition-all duration-500 active:scale-[0.98] ${atmo ? `${atmo.btnBg} ${atmo.btnText}` : 'bg-amber-500 hover:bg-amber-400 text-black'}`}
              >
                Set This Mood <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* ════════════════════════════════════════════ */}
          {/* STEP 3: EMOTIONAL ATMOSPHERE                 */}
          {/* ════════════════════════════════════════════ */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col gap-8"
            >
              {/* Inline Back */}
              <button 
                onClick={() => { setStep(step - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="flex items-center gap-1.5 text-neutral-500 hover:text-white transition-colors text-[10px] font-medium uppercase tracking-widest self-start"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Back
              </button>

              <div className="text-center">
                <p className="text-yellow-500 uppercase tracking-[0.25em] text-[10px] mb-3">Chapter Three</p>
                <h1 className="playfair text-3xl md:text-5xl leading-tight">What Atmosphere Describes<br className="hidden md:block" /> Your Love Story?</h1>
                <p className="text-neutral-400 mt-3 text-sm leading-relaxed max-w-md mx-auto">Set the soundtrack and the feeling. This is the soul of your invitation.</p>
              </div>

              <motion.div animate={error ? { x: [-10, 10, -8, 8, -5, 5, 0] } : {}} className="space-y-8 mt-2">
                {/* Music */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-white">
                    <Music className="w-4 h-4 text-yellow-500" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium">What melody sets the mood?</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {["Jazz", "Orchestra", "Piano", "Romantic Pop"].map(m => (
                      <motion.button
                        key={m}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setError(false); setData({ ...data, music: m }); }}
                        className={`min-h-[44px] flex items-center justify-center px-5 py-2.5 rounded-2xl border text-sm transition-all duration-300 ${data.music === m ? 'border-yellow-500 bg-yellow-500/15 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'border-white/10 text-neutral-400 hover:border-white/30 bg-white/[0.02]'}`}
                      >
                        {m}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Atmosphere */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-white">
                    <Wind className="w-4 h-4 text-yellow-500" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium">How should your guests feel?</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {["Elegant", "Emotional", "Luxury", "Cinematic", "Modern"].map(a => (
                      <motion.button
                        key={a}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setError(false); setData({ ...data, atmosphere: a }); }}
                        className={`min-h-[44px] flex items-center justify-center px-5 py-2.5 rounded-2xl border text-sm transition-all duration-300 ${data.atmosphere === a ? 'border-yellow-500 bg-yellow-500/15 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'border-white/10 text-neutral-400 hover:border-white/30 bg-white/[0.02]'}`}
                      >
                        {a}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              <button 
                onClick={validateAndNext}
                className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-2xl border border-yellow-500/40 bg-black/60 backdrop-blur-xl py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all mt-4 active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-black">
                  Craft Our Story <Sparkles className="w-4 h-4" />
                </span>
                <div className="absolute top-0 left-0 z-0 h-full w-0 bg-yellow-500 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />
              </button>
            </motion.div>
          )}

          {/* ════════════════════════════════════════════ */}
          {/* STEP 4: CINEMATIC AI PROCESSING              */}
          {/* ════════════════════════════════════════════ */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-center justify-center gap-10 md:gap-14 text-center min-h-[60dvh]"
            >
              {/* Cinematic Orb */}
              <div className="relative flex items-center justify-center w-48 h-48 mx-auto">
                {/* Outer pulse ring */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-yellow-500/20"
                />
                {/* Rotating ring 1 */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 m-auto w-36 h-36 rounded-full border border-dashed border-yellow-500/30"
                />
                {/* Rotating ring 2 (counter) */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 m-auto w-44 h-44 rounded-full border border-dashed border-white/[0.06]"
                />
                {/* Inner glow */}
                <motion.div
                  animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-20 h-20 rounded-full bg-yellow-500/10 blur-xl"
                />
                {/* Center icon */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-10 h-10 text-yellow-500 relative z-10" />
                </motion.div>
              </div>

              <div className="space-y-6 max-w-sm mx-auto">
                <h1 className="playfair text-2xl md:text-3xl">AI is Crafting Your Masterpiece</h1>
                
                {/* Progress bar */}
                <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-500"
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingText}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5 }}
                    className="text-neutral-400 tracking-wide text-xs md:text-sm italic"
                  >
                    {loadingText}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ════════════════════════════════════════════ */}
          {/* STEP 5: YOUR MASTERPIECE IS READY            */}
          {/* ════════════════════════════════════════════ */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-center justify-center gap-10 md:gap-12 text-center min-h-[60dvh]"
            >
              <div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.3, bounce: 0.5 }}
                  className="w-20 h-20 bg-yellow-500/15 rounded-full flex items-center justify-center mx-auto mb-8 border border-yellow-500/30"
                >
                  <Sparkles className="w-10 h-10 text-yellow-500" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="playfair text-3xl md:text-5xl mb-4"
                >
                  Your Masterpiece is Ready
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-neutral-400 text-sm max-w-sm mx-auto leading-relaxed"
                >
                  The AI has woven {data.names || "your story"} into a cinematic {data.theme || "luxury"} wedding experience.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Link 
                  href="/invite/preview"
                  className="group relative overflow-hidden flex items-center gap-3 border border-yellow-500/40 bg-black px-10 py-4 rounded-2xl font-semibold uppercase tracking-[0.15em] text-xs transition-all active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-black">
                    View Your Masterpiece <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <div className="absolute top-0 left-0 z-0 h-full w-0 bg-yellow-500 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />
                </Link>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
