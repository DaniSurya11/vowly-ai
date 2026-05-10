"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Sparkles, Music, Wind } from "lucide-react";
import Link from "next/link";

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
  };

  const triggerError = () => {
    setError(true);
    setTimeout(() => setError(false), 500);
  };

  const loadingMessages = [
    "Analyzing visual tone & mood...",
    "Selecting cinematic color palette...",
    "Composing dynamic layout...",
    "Crafting emotional storytelling...",
    "Finalizing luxury details..."
  ];
  
  const [loadingText, setLoadingText] = useState(loadingMessages[0]);

  useEffect(() => {
    if (step === 4) {
      let i = 0;
      const interval = setInterval(() => {
        i += 1;
        if (i < loadingMessages.length) {
          setLoadingText(loadingMessages[i]);
        } else {
          clearInterval(interval);
          setStep(5);
        }
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="relative min-h-[100dvh] bg-black text-white flex flex-col overflow-x-hidden pt-28 pb-12">
      {/* Ambient Background */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[800px] aspect-square bg-[radial-gradient(circle,rgba(161,98,7,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />

      {/* Progress Bar */}
      {step < 4 && (
        <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
          <motion.div 
            className="h-full bg-yellow-500"
            initial={{ width: "0%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      )}

      <div className="relative z-10 w-full max-w-2xl px-6 mx-auto my-auto">
        {/* Back Button */}
        {step > 1 && step < 4 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="absolute -top-16 left-6 flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
        )}

        <AnimatePresence mode="wait">
          
          {/* STEP 1: BASIC INFO */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col gap-10"
            >
              <div className="text-center mb-4">
                <p className="text-yellow-500 uppercase tracking-[0.2em] text-xs mb-4">Step 01</p>
                <h1 className="playfair text-4xl md:text-5xl leading-tight">
                  The Beginning
                </h1>
                <p className="text-neutral-400 mt-4 text-sm">Tell us the core details of your celebration.</p>
              </div>

              <motion.div animate={error ? { x: [-10, 10, -8, 8, -5, 5, 0] } : {}} transition={{ duration: 0.4 }} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-yellow-500 mb-2 ml-4">Couple Names</label>
                  <input 
                    type="text" 
                    autoFocus
                    placeholder="Dani & Ellena" 
                    value={data.names}
                    onChange={(e) => { setError(false); setData({ ...data, names: e.target.value }); }}
                    className={`w-full bg-white/5 focus:bg-white/10 border ${error && !data.names ? 'border-red-500' : 'border-white/10'} hover:border-white/30 rounded-full px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-yellow-500 mb-2 ml-4">Wedding Date</label>
                  <input 
                    type="date" 
                    value={data.date}
                    onChange={(e) => { setError(false); setData({ ...data, date: e.target.value }); }}
                    className={`w-full bg-white/5 focus:bg-white/10 border ${error && !data.date ? 'border-red-500' : 'border-white/10'} hover:border-white/30 rounded-full px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors [color-scheme:dark]`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-yellow-500 mb-2 ml-4">Location</label>
                  <input 
                    type="text" 
                    placeholder="Lake Como, Italy" 
                    value={data.location}
                    onChange={(e) => { setError(false); setData({ ...data, location: e.target.value }); }}
                    className={`w-full bg-white/5 focus:bg-white/10 border ${error && !data.location ? 'border-red-500' : 'border-white/10'} hover:border-white/30 rounded-full px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors`}
                  />
                </div>
              </motion.div>

              <button 
                onClick={validateAndNext}
                className="flex items-center justify-center gap-2 text-black bg-yellow-500 hover:bg-yellow-400 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-colors"
              >
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: STYLE SELECTION */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col gap-8"
            >
              <div className="text-center">
                <p className="text-yellow-500 uppercase tracking-[0.2em] text-xs mb-4">Step 02</p>
                <h1 className="playfair text-4xl md:text-5xl">Visual Direction</h1>
                <p className="text-neutral-400 mt-4 text-sm">Select the cinematic style that matches your dream.</p>
              </div>

              <motion.div animate={error ? { x: [-10, 10, -8, 8, -5, 5, 0] } : {}} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-4">
              {[
                "Royal Gold", "Soft Romance", "Dark Luxury", "Garden Party", "Minimal Elegant"
              ].map((t) => (
                <button
                  key={t}
                  onClick={() => { setError(false); setData({ ...data, theme: t }); }}
                  className={`p-5 rounded-2xl border transition-all text-left group ${data.theme === t ? 'border-yellow-500 bg-yellow-500/10' : 'border-white/10 bg-white/5 hover:border-yellow-500/50 hover:bg-white/10'}`}
                >
                  <h3 className={`playfair text-lg ${data.theme === t ? 'text-yellow-500' : 'text-white'}`}>{t}</h3>
                </button>
              ))}
              </motion.div>

              <button 
                onClick={validateAndNext}
                className="flex items-center justify-center gap-2 text-black bg-yellow-500 hover:bg-yellow-400 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-colors mt-4"
              >
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 3: VIBE & ATMOSPHERE */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col gap-8"
            >
              <div className="text-center">
                <p className="text-yellow-500 uppercase tracking-[0.2em] text-xs mb-4">Step 03</p>
                <h1 className="playfair text-4xl md:text-5xl">Cinematic Tone</h1>
                <p className="text-neutral-400 mt-4 text-sm">How do you want your guests to feel?</p>
              </div>

              <motion.div animate={error ? { x: [-10, 10, -8, 8, -5, 5, 0] } : {}} className="space-y-8 mt-4">
                {/* Music */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-white">
                    <Music className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs uppercase tracking-widest">Music Vibe</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["Jazz", "Orchestra", "Piano", "Romantic Pop"].map(m => (
                      <button
                        key={m}
                        onClick={() => { setError(false); setData({ ...data, music: m }); }}
                        className={`px-5 py-2.5 rounded-full border text-sm transition-colors ${data.music === m ? 'border-yellow-500 bg-yellow-500/20 text-yellow-500' : 'border-white/10 text-neutral-400 hover:border-white/40'}`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Atmosphere */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-white">
                    <Wind className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs uppercase tracking-widest">Atmosphere</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["Elegant", "Emotional", "Luxury", "Cinematic", "Modern"].map(a => (
                      <button
                        key={a}
                        onClick={() => { setError(false); setData({ ...data, atmosphere: a }); }}
                        className={`px-5 py-2.5 rounded-full border text-sm transition-colors ${data.atmosphere === a ? 'border-yellow-500 bg-yellow-500/20 text-yellow-500' : 'border-white/10 text-neutral-400 hover:border-white/40'}`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              <button 
                onClick={validateAndNext}
                className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-full border border-yellow-500/50 bg-black/60 backdrop-blur-xl py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all mt-8"
              >
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-black">
                  Generate My Wedding <Sparkles className="w-4 h-4" />
                </span>
                <div className="absolute top-0 left-0 z-0 h-full w-0 bg-yellow-500 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />
              </button>
            </motion.div>
          )}

          {/* STEP 4: PROCESSING */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-center justify-center gap-12 text-center"
            >
              <div className="relative flex items-center justify-center w-40 h-40 mx-auto">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 m-auto w-32 h-32 rounded-full border border-dashed border-yellow-500/40"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 m-auto w-40 h-40 rounded-full border border-dashed border-white/10"
                />
                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse relative z-10" />
              </div>

              <div>
                <h1 className="playfair text-3xl mb-4">AI is Crafting Your Blueprint</h1>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-neutral-400 tracking-wide text-sm uppercase"
                  >
                    {loadingText}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* STEP 5: SUCCESS */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-center justify-center gap-12 text-center"
            >
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.5, bounce: 0.5 }}
                  className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-yellow-500/50"
                >
                  <Sparkles className="w-10 h-10 text-yellow-500" />
                </motion.div>
                <h1 className="playfair text-4xl md:text-5xl mb-4">Your Blueprint is Ready</h1>
                <p className="text-neutral-400">The AI has generated a complete JSON config for your cinematic invitation.</p>
              </div>

              <Link 
                href="/invite/preview"
                className="group relative overflow-hidden flex items-center gap-2 border border-yellow-500/50 bg-black px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all shadow-[0_4px_20px_rgba(212,175,55,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                  View Masterpiece <ChevronRight className="w-5 h-5" />
                </span>
                <div className="absolute top-0 left-0 z-0 h-full w-0 bg-yellow-500 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />
              </Link>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
