"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Link as LinkIcon, Users, Edit3, Settings } from "lucide-react";

export default function DashboardPage() {
  // Dummy Data for visual
  const myInvitations = [
    {
      id: "sarah-michael-2024",
      coupleNames: "Sarah & Michael",
      date: "Oct 24, 2024",
      status: "Published",
      rsvps: 142,
      theme: "Royal Gold"
    }
  ];

  return (
    <div className="min-h-[100dvh] bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-500 mb-2">Welcome Back</p>
            <h1 className="playfair text-4xl">Client Portal</h1>
          </div>
          <Link 
            href="/create"
            className="rounded-full border border-yellow-500/50 bg-yellow-500/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
          >
            Create New +
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-10 backdrop-blur-md"
        >
          <h2 className="text-xl font-medium mb-8">My Events</h2>

          {myInvitations.map((inv) => (
            <div key={inv.id} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 rounded-2xl bg-black/50 border border-white/5">
              <div>
                <h3 className="playfair text-2xl text-yellow-500 mb-1">{inv.coupleNames}</h3>
                <p className="text-neutral-400 text-sm mb-4">{inv.date} • {inv.theme}</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-neutral-300 uppercase tracking-wider">{inv.status}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl px-6 py-3 border border-white/10 flex-1 md:flex-none">
                  <Users className="w-5 h-5 text-neutral-400 mb-1" />
                  <p className="text-xl font-light">{inv.rsvps}</p>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-500">RSVPs</p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                  <Link 
                    href="/invite/preview"
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-xl px-4 py-3 text-xs uppercase tracking-widest"
                  >
                    <LinkIcon className="w-4 h-4" /> Link
                  </Link>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-xl px-4 py-3 text-xs uppercase tracking-widest">
                    <Edit3 className="w-4 h-4" /> Edit
                  </button>
                  <button className="flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-xl px-4 py-3">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
