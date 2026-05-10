"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function GuestInvitationPreview() {
  return (
    <div className="bg-[#0A0A0A] min-h-[100dvh] text-white selection:bg-yellow-500/30 selection:text-white pb-20">
      
      {/* HERO BANNER */}
      <section className="relative h-[80dvh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Cinematic Background Image (Placeholder) */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        
        <div className="relative z-10 px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-yellow-500 mb-6"
          >
            We invite you to celebrate with us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="playfair text-6xl md:text-8xl lg:text-9xl tracking-tight text-white drop-shadow-2xl"
          >
            Sarah <span className="text-yellow-500 font-light italic">&</span> Michael
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-8 text-sm md:text-base tracking-[0.2em] uppercase text-neutral-300"
          >
            October 24th, 2024
          </motion.p>
        </div>
      </section>

      {/* THE DETAILS */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="playfair text-3xl md:text-5xl mb-16 text-yellow-500">The Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col items-center">
            <Calendar className="w-8 h-8 text-yellow-500/50 mb-6" strokeWidth={1} />
            <h3 className="text-xs uppercase tracking-[0.2em] mb-2">When</h3>
            <p className="playfair text-xl">Saturday, Oct 24<br/>2024</p>
          </div>
          
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-12 md:py-0">
            <Clock className="w-8 h-8 text-yellow-500/50 mb-6" strokeWidth={1} />
            <h3 className="text-xs uppercase tracking-[0.2em] mb-2">Time</h3>
            <p className="playfair text-xl">Ceremony at 4:00 PM<br/>Reception to follow</p>
          </div>
          
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-yellow-500/50 mb-6" strokeWidth={1} />
            <h3 className="text-xs uppercase tracking-[0.2em] mb-2">Where</h3>
            <p className="playfair text-xl">The Grand Villa<br/>Lake Como, Italy</p>
          </div>
        </div>
      </section>

      {/* RSVP FORM */}
      <section className="max-w-2xl mx-auto px-6 pt-12">
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[32px] backdrop-blur-md text-center">
          <h2 className="playfair text-3xl mb-2">RSVP</h2>
          <p className="text-neutral-400 text-sm mb-8">Please respond by September 1st.</p>
          
          <form className="flex flex-col gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-yellow-500 mb-2 ml-4">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-yellow-500 mb-2 ml-4">Will you attend?</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors appearance-none cursor-pointer">
                <option>Joyfully Accepts</option>
                <option>Regretfully Declines</option>
              </select>
            </div>
            <button className="mt-4 w-full bg-yellow-500 text-black rounded-full px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-yellow-400 transition-colors">
              Send Reply
            </button>
          </form>
        </div>
      </section>
      
    </div>
  );
}
