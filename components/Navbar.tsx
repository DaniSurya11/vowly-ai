"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Transparent at the top, frosted glass when scrolled
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    if (latest > lastY && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setLastY(latest);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Templates", href: "/#templates" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Blog", href: "/#blog" },
  ];

  return (
    <>
      <motion.nav 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 transition-colors duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-transparent"
        }`}
      >
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center group relative z-50">
          <span className="playfair text-xl tracking-[0.25em] text-white transition-colors duration-300 group-hover:text-neutral-300">
            VOWLY
          </span>
        </Link>

        {/* Middle: Links */}
        <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-neutral-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-4 relative z-50">
          <Link 
            href="/create" 
            className="hidden sm:inline-block bg-[#E3C290] text-black px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-[#D4AF37] transition-all hover:scale-105 shadow-[0_0_15px_rgba(227,194,144,0.3)]"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 group flex items-center justify-center w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-neutral-400 group-hover:text-[#D4AF37] transition-colors">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <div className="flex flex-col items-end justify-center gap-[6px] text-neutral-400 group-hover:text-[#D4AF37] transition-colors">
                <div className="h-[1.2px] w-6 bg-current rounded-full"></div>
                <div className="h-[1.2px] w-[14px] bg-current rounded-full transition-all duration-300 group-hover:w-6"></div>
              </div>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.3 } }}
            className="fixed inset-0 z-40 h-[100dvh] w-[100dvw] bg-black/95 backdrop-blur-sm flex flex-col items-center pt-[100px] pb-[calc(3rem+env(safe-area-inset-bottom))] overflow-y-auto lg:hidden"
          >
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col items-center gap-10 w-full my-auto"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
                    closed: { opacity: 0, y: 20, transition: { duration: 0.3 } }
                  }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-medium text-neutral-300 hover:text-white transition-colors playfair"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Footer Extra Links */}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
                  closed: { opacity: 0, y: 20, transition: { duration: 0.3 } }
                }}
                className="mt-12 mb-8 flex flex-col items-center gap-5 text-[10px] tracking-[0.3em] uppercase text-neutral-500"
              >
                <div className="w-8 h-px bg-yellow-500/30 mb-2"></div>
                <Link href="#" className="hover:text-yellow-500 transition-colors">Instagram</Link>
                <Link href="#" className="hover:text-yellow-500 transition-colors">Contact Concierge</Link>
                <Link href="#" className="hover:text-yellow-500 transition-colors">Client Login</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
