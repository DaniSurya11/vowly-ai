"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const { scrollY, scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);



  if (!mounted) return <div className="min-h-[100dvh] bg-black" />;

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-black text-white">

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-yellow-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />



      {/* HERO SECTION */}
      <section className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center pt-28 pb-12">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="mb-2 md:mb-4 text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-yellow-500 whitespace-nowrap"
        >
          AI Wedding Invitation Generator
        </motion.p>

        <h1 className="playfair max-w-5xl text-4xl sm:text-5xl font-semibold leading-[1.1] md:leading-[0.9] md:text-8xl flex flex-col items-center tracking-tight">
          <span className="block overflow-hidden pb-1">
            <motion.span
              initial={{ y: "120%", rotate: 3 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="block origin-top-left text-center"
            >
              Your Love Story
            </motion.span>
          </span>
          <span className="block overflow-visible mt-0 md:-mt-2">
            <span className="inline-flex items-center gap-3 md:gap-4">
              <span className="overflow-hidden block pb-1">
                <motion.span
                  initial={{ y: "120%", rotate: 3 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                  className="block origin-top-left"
                >
                  Designed by
                </motion.span>
              </span>
              <motion.span
                initial={{ scale: 0.5, opacity: 0, filter: "blur(12px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
                className="inline-block perspective-[1000px] will-change-transform will-change-filter"
              >
                <motion.span
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", delay: 2.5 }}
                  className="inline-block bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  AI
                </motion.span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "backOut", delay: 0.7 }}
                className="inline-block"
              >
                ✨
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="mt-8 max-w-xl text-neutral-400 md:text-lg drop-shadow-md"
        >
          Create cinematic wedding invitations with AI-generated themes,
          romantic visuals, elegant motion, and personalized storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="mt-10 inline-block"
        >
          <MagneticButton>
            <Link
              href="/create"
              className="group relative overflow-hidden block rounded-full border border-yellow-500/40 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Generate Your Wedding
              </span>
              <div className="absolute top-0 left-0 z-0 h-full w-0 bg-yellow-500 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />
            </Link>
          </MagneticButton>
        </motion.div>
      </section>

      {/* Anamorphic Lens Flare Divider */}
      <div className="relative z-10 w-full flex justify-center py-10 mt-10 overflow-hidden">
        <div className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-40" />
        <div className="absolute w-[60%] h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent blur-[1px] opacity-70" />
        <div className="absolute w-[20%] h-[8px] bg-yellow-500/40 blur-md rounded-[100%]" />
      </div>

      {/* HOW IT WORKS */}
      <section className="relative z-10 px-6 py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
              AI Wedding Workflow
            </p>
            <h2 className="playfair text-5xl leading-tight md:text-7xl">
              Designed By AI
              <br />
              Personalized For You
            </h2>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Tell Your Story",
                desc: "Input couple names, wedding date, music vibe, and your romantic atmosphere.",
              },
              {
                number: "02",
                title: "Upload Prewedding",
                desc: "AI analyzes your photos and matches cinematic color grading automatically.",
              },
              {
                number: "03",
                title: "AI Generates Design",
                desc: "Themes, typography, motion, and visual storytelling are crafted instantly.",
              },
              {
                number: "04",
                title: "Share Your Wedding",
                desc: "Publish your luxury wedding website and share it beautifully with guests.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 p-5 md:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <p className="text-xs md:text-sm tracking-[0.3em] text-yellow-500">
                    {step.number}
                  </p>
                  <h3 className="playfair mt-4 md:mt-6 text-2xl md:text-3xl leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 md:mt-6 text-sm leading-relaxed text-neutral-400">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="relative z-10 px-6 py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
              AI Generated Themes
            </p>
            <h2 className="playfair text-4xl md:text-6xl">
              Every Wedding
              <br />
              Feels Unique
            </h2>
          </div>
          <div className="relative">
            {/* Mobile Swipeable Carousel */}
            <div className="sm:hidden flex w-[calc(100%+3rem)] -mx-6 overflow-x-auto snap-x snap-mandatory px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-4 w-max pr-6">
                {[
                  "Dark Luxury", "Soft Romance", "Royal Gold",
                ].map((theme, i) => (
                  <div
                    key={i}
                    className="w-[280px] shrink-0 snap-center group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex flex-col items-start text-left">
                      <div className="mb-6 h-[240px] w-full rounded-[24px] bg-gradient-to-b from-yellow-800/20 to-black" />
                      <h3 className="playfair text-2xl font-medium leading-tight">
                        {theme}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                        AI-crafted cinematic wedding atmosphere with elegant motion.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Dark Luxury",
                "Soft Romance",
                "Royal Gold",
              ].map((theme) => (
                <div
                  key={theme}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex flex-col items-start text-left">
                    <div className="mb-6 h-[320px] w-full rounded-[24px] bg-gradient-to-b from-yellow-800/20 to-black" />
                    <h3 className="playfair text-2xl font-medium leading-tight">
                      {theme}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                      AI-crafted cinematic wedding atmosphere with elegant motion and storytelling.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC PREVIEW */}
      <section className="relative z-10 px-6 py-16 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
              AI Cinematic Experience
            </p>
            <h2 className="playfair text-5xl leading-tight md:text-7xl">
              Wedding Websites
              <br />
              That Feel Alive
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
              Vowly AI transforms your love story into a cinematic digital
              experience with elegant motion, emotional atmosphere,
              and AI-generated visual storytelling.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="rounded-full bg-yellow-500 px-7 py-4 font-medium text-black transition-all hover:scale-105 active:scale-95">
                Try Vowly AI
              </button>
              <button className="rounded-full border border-white/10 px-7 py-4 text-white transition-all hover:border-yellow-500/40 active:scale-95">
                View Themes
              </button>
            </div>
          </div>
          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="absolute h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(161,98,7,0.2)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative h-[580px] w-full max-w-[320px] overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#1b140f] to-black shadow-2xl">
              <div className="h-[65%] bg-[linear-gradient(to_bottom,rgba(212,175,55,0.15),transparent)]" />
              <div className="p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-500">
                  Dani & Ellena
                </p>
                <h3 className="playfair text-4xl leading-tight">
                  A Royal
                  <br />
                  Celebration
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-neutral-400">
                  Elegant wedding atmosphere with cinematic storytelling,
                  romantic music, and immersive mobile experience.
                </p>
              </div>
            </div>
            <div className="absolute -left-10 bottom-10 hidden w-[220px] rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:block">
              <p className="text-xs uppercase tracking-[0.2em] text-yellow-500">
                AI Generated
              </p>
              <h4 className="playfair mt-3 text-2xl">
                Royal Gold
              </h4>
              <p className="mt-3 text-sm text-neutral-400">
                Personalized luxury wedding theme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-10 px-6 py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-500">
              Loved by Couples
            </p>
            <h2 className="playfair text-2xl sm:text-4xl md:text-6xl whitespace-nowrap">
              Emotional & Unforgettable
            </h2>
          </div>
          <div className="overflow-hidden sm:overflow-visible -mx-6 sm:mx-0 w-[calc(100%+3rem)] sm:w-full">
            <div className="flex w-max sm:w-full animate-marquee-mobile sm:animate-none hover:[animation-play-state:paused] active:[animation-play-state:paused] sm:grid sm:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-6 sm:px-2 pb-8">
              {[
                {
                  quote: "It felt like watching a luxury movie trailer of our love story. Our guests were blown away.",
                  name: "Sarah & Michael",
                  theme: "Royal Gold"
                },
                {
                  quote: "The AI understood our vibe perfectly. The subtle animations and music brought tears to my eyes.",
                  name: "Elena & David",
                  theme: "Soft Romance"
                },
                {
                  quote: "We didn't know anything about design, but Vowly made it look like we hired an expensive agency.",
                  name: "Jessica & Tom",
                  theme: "Dark Luxury"
                },
                // Duplicated for infinite horizontal scroll on mobile
                {
                  quote: "It felt like watching a luxury movie trailer of our love story. Our guests were blown away.",
                  name: "Sarah & Michael",
                  theme: "Royal Gold",
                  dup: true
                },
                {
                  quote: "The AI understood our vibe perfectly. The subtle animations and music brought tears to my eyes.",
                  name: "Elena & David",
                  theme: "Soft Romance",
                  dup: true
                },
                {
                  quote: "We didn't know anything about design, but Vowly made it look like we hired an expensive agency.",
                  name: "Jessica & Tom",
                  theme: "Dark Luxury",
                  dup: true
                }
              ].map((testi, i) => (
                <div
                  key={i}
                  className={`group relative border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 hover:-translate-y-2 shrink-0 w-[280px] sm:w-full ${testi.dup ? 'sm:hidden ' : ''}${i % 2 === 1
                    ? 'rounded-[24px] rounded-tr-[4px] md:rounded-[32px]'
                    : 'rounded-[24px] rounded-tl-[4px] md:rounded-[32px]'
                    }`}
                >
                  <div className="mb-4 md:mb-6 flex gap-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="h-4 w-4 md:h-5 md:w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed md:text-lg md:leading-relaxed text-neutral-300 mb-6 md:mb-8">&quot;{testi.quote}&quot;</p>
                  <div>
                    <p className="playfair text-lg md:text-xl text-white">{testi.name}</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-yellow-500 mt-1">{testi.theme}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 px-6 py-20 md:py-40 text-center">
        <div className="relative mx-auto max-w-4xl">
          <h2 className="playfair text-5xl leading-tight md:text-8xl">
            Begin Your
            <br />
            Forever
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400">
            Join the platform to experience the future of wedding invitations.
            Cinematic, luxurious, and uniquely yours.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <MagneticButton>
              <Link
                href="/create"
                className="group relative overflow-hidden inline-block rounded-full border border-yellow-500/40 bg-transparent px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Generate Your Wedding
                </span>
                <div className="absolute top-0 left-0 z-0 h-full w-0 bg-yellow-500 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* GRAND FINALE FOOTER */}
      <footer className="relative z-10 border-t border-white/5 bg-black pt-20 pb-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 mb-16 md:mb-20">
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 mb-4">The Inner Circle</p>
              <h4 className="playfair text-3xl md:text-4xl text-white mb-2">Join the Waitlist</h4>
              <p className="text-sm text-neutral-400 max-w-sm">Be the first to know when our premium AI tools launch to the public.</p>
            </div>
            <div className="flex w-full md:max-w-md border-b border-white/20 pb-2 transition-colors focus-within:border-yellow-500">
              <input type="email" placeholder="Enter your email" className="bg-transparent w-full focus:outline-none text-white placeholder:text-neutral-600 font-medium" />
              <button className="text-yellow-500 uppercase tracking-wider text-xs font-bold hover:text-yellow-400 transition-colors ml-4">Join</button>
            </div>
          </div>

          {/* MASSIVE WORDMARK */}
          <h2 className="playfair text-[20vw] leading-none tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-600 to-black select-none pointer-events-none w-full text-center">
            VOWLY
          </h2>

          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-6 mt-10 md:mt-0 pt-10 border-t border-white/5 text-[10px] md:text-xs tracking-widest uppercase text-neutral-600">
            <p>© 2024 Vowly AI. All rights reserved.</p>
            <div className="flex gap-6 md:gap-8">
              <a href="#" className="hover:text-yellow-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">TikTok</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Overlay Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,black_85%)]" />

      {/* Noise Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>


    </main>
  );
}