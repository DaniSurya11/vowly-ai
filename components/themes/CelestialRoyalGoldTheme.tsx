"use client";

import { ArrowDown, CalendarDays, Heart, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useId } from "react";

export type CelestialRoyalGoldEvent = {
  title: string;
  time: string;
  date?: string;
  venue?: string;
  address?: string;
};

export type CelestialRoyalGoldStory = {
  year: string;
  title: string;
  body: string;
};

export type CelestialRoyalGoldGalleryItem = {
  title: string;
  imageUrl: string;
};

export type CelestialRoyalGoldThemeData = {
  bride: string;
  groom: string;
  date: string;
  venue: string;
  quote: string;
  intro?: string;
  story?: CelestialRoyalGoldStory[];
  events?: CelestialRoyalGoldEvent[];
  gallery?: CelestialRoyalGoldGalleryItem[];
  closing?: string;
};

export const celestialRoyalGoldDefaultData: CelestialRoyalGoldThemeData = {
  bride: "Aulia",
  groom: "Dani",
  date: "12 December 2026",
  venue: "The Royal Garden Ballroom",
  quote: "And We created you in pairs.",
  intro:
    "With grateful hearts, we invite you to witness the sacred beginning of our forever.",
  story: [
    {
      year: "2021",
      title: "First Constellation",
      body: "A quiet meeting became the first light of a story neither of us wanted to rush.",
    },
    {
      year: "2024",
      title: "A Promise Kept",
      body: "Through distance, prayers, and ordinary days, love grew into something steady and true.",
    },
    {
      year: "2026",
      title: "Written in Gold",
      body: "We step into marriage with family, faith, and the people who made our journey luminous.",
    },
  ],
  events: [
    {
      title: "Akad Nikah",
      time: "09.00 WIB",
      date: "Saturday, 12 December 2026",
      venue: "The Royal Garden Ballroom",
      address: "Jakarta, Indonesia",
    },
    {
      title: "Wedding Reception",
      time: "19.00 WIB",
      date: "Saturday, 12 December 2026",
      venue: "The Royal Garden Ballroom",
      address: "Jakarta, Indonesia",
    },
  ],
  gallery: [
    {
      title: "Royal Portrait",
      imageUrl:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "Sacred Vow",
      imageUrl:
        "https://images.unsplash.com/photo-1529634895480-3cdb4dd905eb?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "Evening Garden",
      imageUrl:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop",
    },
  ],
  closing:
    "Your prayers and presence are the most beautiful gifts as we begin this blessed chapter.",
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
} as const;

const noiseTexture = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23f5edcf' fill-opacity='.28'%3E%3Crect x='6' y='10' width='1' height='1'/%3E%3Crect x='31' y='5' width='1' height='1'/%3E%3Crect x='20' y='27' width='1' height='1'/%3E%3Crect x='42' y='38' width='1' height='1'/%3E%3C/g%3E%3C/svg%3E\")",
};

export function GoldCornerFrameSVG({ className = "" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f4df9c" stopOpacity="0.84" />
          <stop offset="55%" stopColor="#caa24a" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#b09143" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <path d="M2 18V2h16M82 2h16v16M98 82v16H82M18 98H2V82" stroke={`url(#${gradientId})`} strokeWidth="0.55" />
      <path d="M7 24V7h17M76 7h17v17M93 76v17H76M24 93H7V76" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.45" />
    </svg>
  );
}

export function CelestialMonogramSVG({ className = "" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 80 80"
    >
      <defs>
        <linearGradient id={gradientId} x1="24" x2="56" y1="16" y2="64">
          <stop offset="0%" stopColor="#f5dfa0" />
          <stop offset="100%" stopColor="#a77d2d" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="28" stroke={`url(#${gradientId})`} strokeOpacity="0.52" strokeWidth="0.8" />
      <circle cx="40" cy="40" r="20" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.7" />
      <path d="M40 24 56 40 40 56 24 40 40 24Z" stroke={`url(#${gradientId})`} strokeWidth="1" />
      <path d="M40 30 50 40 40 50 30 40 40 30Z" stroke="currentColor" strokeOpacity="0.36" strokeWidth="0.7" />
      <path d="M40 14v7M40 59v7M14 40h7M59 40h7" stroke="currentColor" strokeOpacity="0.42" strokeWidth="0.65" />
      <circle cx="40" cy="40" r="1.4" fill="currentColor" fillOpacity="0.72" />
    </svg>
  );
}

export function ThinOrnamentDividerSVG({ className = "" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 260 16">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="260" y1="8" y2="8">
          <stop offset="0%" stopColor="#c9a24a" stopOpacity="0" />
          <stop offset="45%" stopColor="#d6b862" stopOpacity="0.52" />
          <stop offset="55%" stopColor="#d6b862" stopOpacity="0.52" />
          <stop offset="100%" stopColor="#c9a24a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 8h110M150 8h110" stroke={`url(#${gradientId})`} strokeWidth="0.65" />
      <path d="M130 3.5 134.5 8 130 12.5 125.5 8 130 3.5Z" stroke="#d6b862" strokeOpacity="0.58" strokeWidth="0.75" />
    </svg>
  );
}

export function StarDustSVG({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 430 900">
      <g stroke="currentColor" strokeLinecap="round" strokeOpacity="0.22" strokeWidth="0.7">
        <path d="M54 94v8M50 98h8M347 132v6M344 135h6M102 286v6M99 289h6M366 420v8M362 424h8M70 612v6M67 615h6M320 734v7M316.5 737.5h7" />
      </g>
      <g fill="currentColor" fillOpacity="0.22">
        <circle cx="112" cy="124" r="0.9" />
        <circle cx="286" cy="92" r="0.7" />
        <circle cx="379" cy="246" r="0.8" />
        <circle cx="54" cy="360" r="0.7" />
        <circle cx="142" cy="510" r="0.8" />
        <circle cx="336" cy="580" r="0.7" />
        <circle cx="88" cy="760" r="0.8" />
        <circle cx="258" cy="820" r="0.7" />
      </g>
      <g stroke="currentColor" strokeOpacity="0.16" strokeWidth="0.6">
        <path d="M210 188 214 192 210 196 206 192 210 188ZM254 646 258 650 254 654 250 650 254 646ZM172 406 175 409 172 412 169 409 172 406Z" />
      </g>
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-9 flex flex-col items-center justify-center gap-4 text-[#c8a247]/80">
      <ThinOrnamentDividerSVG className="h-4 w-full max-w-[260px] text-[#d6b862]" />
      <p className="text-[9px] font-semibold uppercase tracking-[0.38em]">{children}</p>
    </div>
  );
}

function EditorialPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-[#080706] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-[#d6b862]/16" />
      <GoldCornerFrameSVG className="pointer-events-none absolute inset-4 text-[#d6b862] opacity-90" />
      {children}
    </div>
  );
}

function FadeSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section id={id} {...fadeUp} className={`relative px-6 py-20 ${className}`}>
      <ThinOrnamentDividerSVG className="pointer-events-none absolute left-1/2 top-0 h-4 w-36 -translate-x-1/2 text-[#d6b862] opacity-35" />
      {children}
    </motion.section>
  );
}

export default function CelestialRoyalGoldTheme({
  data = celestialRoyalGoldDefaultData,
}: {
  data?: Partial<CelestialRoyalGoldThemeData>;
}) {
  const invitation = {
    ...celestialRoyalGoldDefaultData,
    ...data,
    story: data.story ?? celestialRoyalGoldDefaultData.story,
    events: data.events ?? celestialRoyalGoldDefaultData.events,
    gallery: data.gallery ?? celestialRoyalGoldDefaultData.gallery,
  };

  const coupleNames = `${invitation.bride} & ${invitation.groom}`;

  return (
    <main className="min-h-[100dvh] bg-[#050403] text-white">
      <div className="mx-auto min-h-[100dvh] max-w-[430px] overflow-hidden bg-[#070604]">
        <div className="relative">
          <div className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[100dvh] max-w-[430px] bg-[#050403]" />
          <div
            className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[100dvh] max-w-[430px] opacity-[0.025]"
            style={noiseTexture}
          />
          <StarDustSVG className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[100dvh] max-w-[430px] text-[#d6b862] opacity-28" />

          <section className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-8 py-14 text-center">
            <div className="relative w-full bg-[#070604] px-6 py-16">
              <div className="pointer-events-none absolute inset-0 border border-[#d6b862]/12" />
              <GoldCornerFrameSVG className="pointer-events-none absolute inset-0 text-[#d6b862]" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full"
              >
                <CelestialMonogramSVG className="mx-auto mb-11 h-16 w-16 text-[#d6b862]" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.46em] text-[#c8a247]/80">
                  The Wedding of
                </p>
                <h1 className="playfair mt-8 text-[4.35rem] font-medium leading-[0.88] tracking-wide">
                  <span className="block text-[#f5eedc]">{invitation.bride}</span>
                  <span className="my-6 block text-2xl font-light text-[#d8c58a]/58">&</span>
                  <span className="block text-[#b99036]">{invitation.groom}</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 mt-12 w-full"
              >
                <p className="text-[11px] uppercase tracking-[0.36em] text-white/68">{invitation.date}</p>
                <ThinOrnamentDividerSVG className="mx-auto mt-8 h-4 w-full max-w-[260px] text-[#d6b862]" />
                <a
                  href="#intro"
                  className="group relative mt-11 inline-flex overflow-hidden rounded-full border border-[#d6b862]/55 bg-[#090807] px-9 py-[1.125rem] text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5eedc] transition duration-500 hover:border-[#f4df9c] hover:bg-[#e9d18b] hover:text-[#050403]"
                >
                  <GoldCornerFrameSVG className="pointer-events-none absolute inset-1 text-[#d6b862] opacity-70" />
                  <span className="relative z-10">Open Invitation</span>
                </a>
              </motion.div>
            </div>

            <motion.a
              href="#intro"
              aria-label="Scroll to invitation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              transition={{ opacity: { delay: 1.4, duration: 1 }, y: { duration: 2.2, repeat: Infinity } }}
              className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-yellow-500/55"
            >
              <span className="h-10 w-px bg-[#d6b862]/45" />
              <ArrowDown className="h-4 w-4" strokeWidth={1.2} />
            </motion.a>
          </section>

          <div className="relative z-10">
            <FadeSection id="intro">
              <SectionLabel>Couple Intro</SectionLabel>
              <EditorialPanel className="p-8 text-center">
                <CelestialMonogramSVG className="mx-auto mb-7 h-12 w-12 text-[#d6b862] opacity-85" />
                <h2 className="playfair text-[2.65rem] leading-[1.02] text-white">{coupleNames}</h2>
                <ThinOrnamentDividerSVG className="mx-auto mt-7 h-4 w-full max-w-[240px] text-[#d6b862]" />
                <p className="mt-7 text-[15px] leading-8 tracking-wide text-white/64">{invitation.intro}</p>
              </EditorialPanel>
            </FadeSection>

            <FadeSection className="pt-10">
              <SectionLabel>Sacred Quote</SectionLabel>
              <div className="relative px-5 py-4 text-center">
                <GoldCornerFrameSVG className="pointer-events-none absolute inset-0 text-[#d6b862] opacity-70" />
                <p className="playfair text-[2.75rem] leading-[1.08] text-[#efe4c6]">"{invitation.quote}"</p>
                <p className="mt-8 text-[9px] font-medium uppercase tracking-[0.38em] text-white/36">A sacred reminder</p>
              </div>
            </FadeSection>

            <FadeSection>
              <SectionLabel>Love Story</SectionLabel>
              <div className="space-y-6">
                {invitation.story?.map((item, index) => (
                  <EditorialPanel key={item.title} className="p-7">
                    <div className="absolute left-7 top-7 h-[calc(100%-3.5rem)] w-px bg-[#d6b862]/18" />
                    <div className="relative pl-9">
                      <span className="absolute left-[-2px] top-1 h-3 w-3 rotate-45 border border-[#d6b862]/55 bg-[#070604]" />
                      <p className="text-[9px] font-semibold uppercase tracking-[0.36em] text-yellow-500/68">
                        {String(index + 1).padStart(2, "0")} / {item.year}
                      </p>
                      <h3 className="playfair mt-4 text-[1.72rem] leading-tight text-white">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 tracking-wide text-white/58">{item.body}</p>
                    </div>
                  </EditorialPanel>
                ))}
              </div>
            </FadeSection>

            <FadeSection>
              <SectionLabel>Event Details</SectionLabel>
              <div className="space-y-6">
                {invitation.events?.map((event) => (
                  <EditorialPanel key={event.title} className="p-7">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-yellow-500/24 bg-white/[0.025]">
                        <CalendarDays className="h-5 w-5 text-yellow-200/80" strokeWidth={1.25} />
                      </div>
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.36em] text-yellow-500/68">
                          {event.time}
                        </p>
                        <h3 className="playfair mt-3 text-[2rem] leading-tight text-white">{event.title}</h3>
                        <p className="mt-4 text-sm leading-6 text-white/62">{event.date}</p>
                      </div>
                    </div>
                    <div className="mt-7 rounded-3xl border border-yellow-500/18 bg-black/20 p-5">
                      <div className="flex gap-3 text-white/64">
                        <MapPin className="mt-1 h-4 w-4 shrink-0 text-yellow-300/70" strokeWidth={1.3} />
                        <div>
                          <p className="text-sm font-semibold tracking-wide text-white/82">{event.venue}</p>
                          <p className="mt-1 text-xs leading-5 tracking-wide text-white/48">{event.address}</p>
                        </div>
                      </div>
                    </div>
                  </EditorialPanel>
                ))}
              </div>
            </FadeSection>

            <FadeSection>
              <SectionLabel>Gallery Preview</SectionLabel>
              <div className="grid grid-cols-2 gap-3.5">
                {invitation.gallery?.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group relative overflow-hidden rounded-3xl border border-[#d6b862]/18 bg-[#080706] ${
                      index === 0 ? "col-span-2 h-80" : "h-52"
                    }`}
                  >
                    <GoldCornerFrameSVG className="pointer-events-none absolute inset-4 text-[#d6b862] opacity-65" />
                    <StarDustSVG className="pointer-events-none absolute inset-0 h-full w-full text-[#d6b862] opacity-35" />
                    <CelestialMonogramSVG className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-[#d6b862] opacity-20 transition duration-700 group-hover:opacity-32" />
                    <div className="absolute inset-x-7 top-7 h-px bg-[#d6b862]/16" />
                    <div className="absolute inset-x-7 bottom-14 h-px bg-[#d6b862]/16" />
                    <p className="absolute bottom-5 left-5 text-[9px] font-semibold uppercase tracking-[0.34em] text-yellow-100/84">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </FadeSection>

            <FadeSection>
              <EditorialPanel className="p-8 text-center">
                <Heart className="mx-auto h-6 w-6 text-yellow-300/70" strokeWidth={1.15} />
                <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.38em] text-yellow-500/68">
                  RSVP
                </p>
                <h2 className="playfair mt-5 text-[2.75rem] leading-[1.02]">Reserve Your Blessing</h2>
                <p className="mt-6 text-sm leading-7 tracking-wide text-white/58">
                  Kindly confirm your attendance and send a prayer for the couple.
                </p>
                <button className="group relative mt-9 inline-flex overflow-hidden rounded-full border border-[#d6b862]/60 bg-[#e8ce86] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#050403] transition duration-500 hover:bg-[#f2dfa6]">
                  <GoldCornerFrameSVG className="pointer-events-none absolute inset-1 text-[#6f5b24] opacity-45" />
                  <span className="relative z-10 inline-flex items-center gap-3">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                    RSVP Now
                  </span>
                </button>
              </EditorialPanel>
            </FadeSection>

            <FadeSection className="pb-28 text-center">
              <SectionLabel>With Love</SectionLabel>
              <h2 className="playfair text-[3.35rem] leading-[0.98] text-[#efe4c6]">{coupleNames}</h2>
              <p className="mx-auto mt-8 max-w-xs text-sm leading-8 tracking-wide text-white/58">
                {invitation.closing}
              </p>
              <ThinOrnamentDividerSVG className="mx-auto mt-11 h-4 w-full max-w-[260px] text-[#d6b862]" />
              <p className="mt-9 text-[9px] uppercase tracking-[0.42em] text-white/35">
                {invitation.venue}
              </p>
            </FadeSection>
          </div>
        </div>
      </div>
    </main>
  );
}
