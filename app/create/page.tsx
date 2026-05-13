"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type HTMLMotionProps } from "framer-motion";
import { useRouter } from "next/navigation";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const }
} satisfies Omit<HTMLMotionProps<"div">, "ref">;

const slowFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 2, ease: "easeInOut" as const }
} satisfies Omit<HTMLMotionProps<"div">, "ref">;

export default function CreateInvitation() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    names: "",
    date: "",
    location: "",
  });

  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const loadingMessages = [
    "Analyzing warm sunset atmosphere...",
    "Detecting editorial romantic chemistry...",
    "Understanding cinematic emotional tone...",
    "Crafting your experience..."
  ];

  useEffect(() => {
    if (step === 4) {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if (i < loadingMessages.length) {
          setLoadingMsgIdx(i);
        } else {
          clearInterval(interval);
          setTimeout(() => setStep(5), 1000);
        }
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleComplete = () => {
    localStorage.setItem('vowly_ai_result', JSON.stringify({ 
      success: true, 
      inputData: data,
      recommendedTheme: "Sunset Cinema Editorial"
    }));
    router.push('/invite/preview');
  };

  return (
    <div className="relative min-h-[100dvh] w-full max-w-[100vw] bg-[#030303] text-white overflow-hidden selection:bg-white/20 font-sans">
      
      {/* ── Global Cinematic Ambient Background ── */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 50% 40%, rgba(255,230,200,0.08) 0%, transparent 60%)' }}
      />
      
      <div className="relative z-10 w-full h-[100dvh] flex flex-col">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Emotional Intro */}
          {step === 1 && (
            <motion.div key="step1" {...slowFade} className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <motion.h1 
                {...fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-wide text-white/90 max-w-lg leading-tight playfair"
              >
                Craft your cinematic wedding story.
              </motion.h1>
              <motion.p 
                {...fadeUp} transition={{ delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }} 
                className="text-xs md:text-sm text-white/40 tracking-[0.2em] uppercase mb-20"
              >
                A timeless digital experience powered by AI.
              </motion.p>
              <motion.button 
                {...fadeUp} transition={{ delay: 0.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setStep(2)}
                className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70 border border-white/10 px-10 py-5 hover:bg-white hover:text-black hover:border-white transition-all duration-700 active:scale-95"
              >
                Begin Your Story
              </motion.button>
            </motion.div>
          )}

          {/* STEP 2: Couple Setup */}
          {step === 2 && (
            <motion.div key="step2" className="flex-1 flex flex-col justify-center p-8 max-w-xl mx-auto w-full">
              <motion.p {...fadeUp} className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-16 text-center">
                Chapter I
              </motion.p>
              
              <div className="space-y-14">
                <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 1.2 }}>
                  <input 
                    type="text" 
                    placeholder="Couple Names" 
                    value={data.names}
                    onChange={(e) => setData({ ...data, names: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 pb-4 text-2xl md:text-3xl font-light text-white/90 focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20 playfair tracking-wide"
                  />
                </motion.div>
                <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 1.2 }}>
                  <input 
                    type="text" 
                    placeholder="Wedding Date (e.g. Oct 24, 2026)" 
                    value={data.date}
                    onChange={(e) => setData({ ...data, date: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 pb-4 text-xl md:text-2xl font-light text-white/90 focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20 playfair tracking-wide"
                  />
                </motion.div>
                <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 1.2 }}>
                  <input 
                    type="text" 
                    placeholder="Venue Location" 
                    value={data.location}
                    onChange={(e) => setData({ ...data, location: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 pb-4 text-xl md:text-2xl font-light text-white/90 focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20 playfair tracking-wide"
                  />
                </motion.div>
              </div>

              <motion.div {...fadeUp} transition={{ delay: 0.5, duration: 1.2 }} className="mt-20 flex justify-center">
                <button 
                  onClick={() => setStep(3)}
                  className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors duration-500"
                >
                  Continue
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 3: Upload Moments */}
          {step === 3 && (
            <motion.div key="step3" className="flex-1 flex flex-col justify-center p-8 max-w-xl mx-auto w-full text-center">
              <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-white/90 playfair">
                Share moments that feel like you.
              </motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.1, duration: 1.2 }} className="text-[10px] text-white/40 tracking-[0.2em] uppercase mb-16">
                Upload 3–8 meaningful photos.
              </motion.p>
              
              <motion.div 
                {...fadeUp} transition={{ delay: 0.2, duration: 1.2 }} 
                className="w-full aspect-[4/5] md:aspect-video border border-dashed border-white/10 flex flex-col items-center justify-center hover:bg-white/[0.02] hover:border-white/30 transition-all duration-700 cursor-pointer group mb-16 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 group-hover:text-white/60 transition-colors duration-700 relative z-10">
                  Tap to browse gallery
                </p>
              </motion.div>

              <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 1.2 }}>
                <button 
                  onClick={() => setStep(4)}
                  className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-black bg-white px-10 py-5 hover:bg-white/90 transition-all duration-500 active:scale-95"
                >
                  Analyze Story
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 4: AI Analysis Screen (The Magic Moment) */}
          {step === 4 && (
            <motion.div key="step4" {...slowFade} className="flex-1 flex flex-col items-center justify-center p-8 text-center relative">
              {/* Soft blur cinematic background */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], filter: ["blur(40px)", "blur(60px)", "blur(40px)"], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-64 h-64 bg-amber-500/20 rounded-full"
              />
              
              <div className="relative z-10 h-20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingMsgIdx}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl font-light tracking-wide text-white/80 playfair italic"
                  >
                    {loadingMessages[loadingMsgIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Theme Recommendation */}
          {step === 5 && (
            <motion.div key="step5" {...slowFade} className="flex-1 flex flex-col justify-center items-center p-6 w-full h-full relative">
              
              {/* Premium Background Visual */}
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Cinematic Background" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />
              </div>

              <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">
                <motion.p {...fadeUp} className="text-[9px] uppercase tracking-[0.4em] text-amber-500/60 mb-6">
                  AI Recommendation
                </motion.p>
                <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-light tracking-wider mb-12 text-white/90 playfair">
                  Sunset Cinema Editorial
                </motion.h2>

                {/* Subtle Parallax Mockup Placeholder */}
                <motion.div 
                  {...fadeUp} transition={{ delay: 0.2, duration: 1.6 }}
                  className="w-48 md:w-56 aspect-[9/19] bg-black border border-white/10 rounded-3xl p-2 mb-16 shadow-[0_0_40px_rgba(255,200,100,0.05)] overflow-hidden relative"
                >
                  <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover rounded-2xl opacity-80" alt="Theme Preview" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <p className="text-[8px] tracking-widest uppercase text-white/50">{data.date || 'Oct 24, 2026'}</p>
                  </div>
                </motion.div>

                <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="w-full flex flex-col gap-4">
                  <button 
                    onClick={handleComplete}
                    className="w-full border border-white/20 bg-white/5 backdrop-blur-md px-6 py-5 text-[10px] tracking-[0.3em] uppercase text-white hover:bg-white hover:text-black transition-all duration-700"
                  >
                    Use This Experience
                  </button>
                  <button 
                    onClick={() => setStep(4)}
                    className="w-full px-6 py-4 text-[9px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-500"
                  >
                    Generate Another Direction
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
