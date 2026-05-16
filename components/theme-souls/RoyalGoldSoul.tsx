"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import {
  CalendarDays,
  Church,
  GlassWater,
  Heart,
  Home,
  Images,
  Mail,
  Utensils,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-royal-cormorant",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-royal-script",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-royal-inter",
});

type CountdownUnit = {
  label: string;
  value: string;
};

type RoyalGoldEvent = {
  title: string;
  time: string;
  venue: string;
  city: string;
  icon: "ceremony" | "cocktail" | "reception";
};

type RoyalGoldGalleryItem = {
  title: string;
  imageUrl: string;
};

export type RoyalGoldSoulData = {
  eyebrow: string;
  bride: string;
  groom: string;
  day: string;
  month: string;
  year: string;
  weekday: string;
  time: string;
  venue: string;
  city: string;
  story: string;
  rsvpText: string;
  countdown: CountdownUnit[];
  events: RoyalGoldEvent[];
  gallery: RoyalGoldGalleryItem[];
};

const defaultRoyalGoldData: RoyalGoldSoulData = {
  eyebrow: "The Wedding Of",
  groom: "Bryan",
  bride: "Gabrielle",
  month: "May",
  day: "14",
  year: "2026",
  weekday: "Saturday",
  time: "05.00 PM",
  venue: "The Manor House",
  city: "Bandung, Indonesia",
  story:
    "From the moment we met, we knew this was the beginning of something beautiful.",
  rsvpText: "Please confirm your attendance before April 14th, 2026",
  countdown: [
    { value: "128", label: "Days" },
    { value: "14", label: "Hours" },
    { value: "32", label: "Minutes" },
    { value: "45", label: "Seconds" },
  ],
  events: [
    {
      title: "Holy Matrimony",
      time: "05.00 PM",
      venue: "The Manor House",
      city: "Bandung",
      icon: "ceremony",
    },
    {
      title: "Cocktail Hour",
      time: "06.30 PM",
      venue: "The Manor House",
      city: "Bandung",
      icon: "cocktail",
    },
    {
      title: "Wedding Reception",
      time: "07.30 PM",
      venue: "The Manor House",
      city: "Bandung",
      icon: "reception",
    },
  ],
  gallery: [
    {
      title: "Golden Vow",
      imageUrl: "/assets/themes/royal-gold/gallery-1.webp",
    },
    {
      title: "Royal Table",
      imageUrl: "/assets/themes/royal-gold/gallery-2.webp",
    },
    {
      title: "Sacred Bloom",
      imageUrl: "/assets/themes/royal-gold/gallery-3.webp",
    },
  ],
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
} as const;

const navItems = [
  { label: "Home", href: "#royal-hero", icon: Home },
  { label: "Story", href: "#royal-story", icon: Heart },
  { label: "Details", href: "#royal-events", icon: CalendarDays },
  { label: "Gallery", href: "#royal-gallery", icon: Images },
  { label: "RSVP", href: "#royal-rsvp", icon: Mail },
] as const;

const royalGoldAssetRoot = "/assets/themes/royal-gold";

const royalGoldAssets = {
  bg: `${royalGoldAssetRoot}/bg`,
  crest: `${royalGoldAssetRoot}/royal-crest`,
  divider: `${royalGoldAssetRoot}/divider`,
  goldLight: `${royalGoldAssetRoot}/gold-light`,
  goldDust: `${royalGoldAssetRoot}/gold-dust`,
  floralTop: `${royalGoldAssetRoot}/floral-top`,
  floralBottom: `${royalGoldAssetRoot}/floral-bottom`,
  cornerFrame: `${royalGoldAssetRoot}/corner-frame`,
  grain: `${royalGoldAssetRoot}/grain`,
  rsvpBottom: `${royalGoldAssetRoot}/rsvp-bottom`,
} as const;

function imageSetStyle(basePath: string): CSSProperties {
  const webp = `url('${basePath}.webp') type('image/webp')`;
  const png = `url('${basePath}.png') type('image/png')`;
  const value = `image-set(${webp}, ${png})`;
  const webkitValue = `-webkit-image-set(${webp}, ${png})`;
  const style = { backgroundImage: value } as CSSProperties & {
    WebkitBackgroundImage?: string;
  };

  style.WebkitBackgroundImage = webkitValue;

  return style;
}

function mergeRoyalGoldData(data?: Partial<RoyalGoldSoulData>): RoyalGoldSoulData {
  return {
    ...defaultRoyalGoldData,
    ...data,
    countdown: data?.countdown ?? defaultRoyalGoldData.countdown,
    events: data?.events ?? defaultRoyalGoldData.events,
    gallery: data?.gallery ?? defaultRoyalGoldData.gallery,
  };
}

function EventIcon({
  icon,
  className = "h-8 w-8",
}: {
  icon: RoyalGoldEvent["icon"];
  className?: string;
}) {
  const iconClassName = `${className} text-[#F6C453]`;
  const strokeWidth = 1.15;

  if (icon === "ceremony") {
    return <Church className={iconClassName} strokeWidth={strokeWidth} />;
  }

  if (icon === "cocktail") {
    return <GlassWater className={iconClassName} strokeWidth={strokeWidth} />;
  }

  return <Utensils className={iconClassName} strokeWidth={strokeWidth} />;
}

function SectionCard({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`relative isolate scroll-mt-24 overflow-hidden rounded-[17px] border border-[#D4AF37]/25 bg-black/[0.55] px-[18px] text-center shadow-[inset_0_1px_0_rgba(245,230,179,0.1),inset_0_-34px_76px_rgba(212,175,55,0.045),0_22px_70px_rgba(0,0,0,0.58)] backdrop-blur-[4px] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#050505]/85" />
      <SectionAtmosphere />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(245,230,179,0.08),transparent_42%),linear-gradient(180deg,rgba(245,230,179,0.04),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-[7px] z-[2] rounded-[12px] border border-[#F5E6B3]/[0.055]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#F5E6B3]/38 to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 bottom-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/16 to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

function SectionAtmosphere({ className = "" }: { className?: string }) {
  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(246,196,83,0.105),transparent_37%),radial-gradient(circle_at_82%_78%,rgba(212,175,55,0.055),transparent_30%)] ${className}`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.055] mix-blend-screen"
        style={imageSetStyle(royalGoldAssets.goldDust)}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.045] mix-blend-soft-light"
        style={imageSetStyle(royalGoldAssets.grain)}
      />
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[10px] flex flex-col items-center">
      <h2
        className="text-[1.42rem] font-semibold uppercase leading-none tracking-[0.18em] text-[#F5D47E] [text-shadow:0_0_22px_rgba(212,175,55,0.28)]"
        style={{ fontFamily: "var(--font-royal-cormorant)" }}
      >
        {children}
      </h2>
      <RsvpOrnament className="mt-[6px] h-[18px] w-full max-w-[222px]" />
    </div>
  );
}

function RsvpOrnament({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`relative ${className}`}
      initial={{ opacity: 0, scaleX: 0.72 }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{
        opacity: 1,
        scaleX: 1,
        transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/72 to-transparent" />
      <span className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#F5E6B3]/75 bg-[#050505] shadow-[0_0_10px_rgba(246,196,83,0.42)]" />
    </motion.div>
  );
}

function DateBlock({ invitation }: { invitation: RoyalGoldSoulData }) {
  return (
    <div className="mx-auto mt-7 grid max-w-[260px] grid-cols-[1fr_auto_1fr] items-center gap-4 text-[#D4AF37]">
      <div className="border-y border-[#D4AF37]/35 py-2">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
          {invitation.weekday}
        </p>
      </div>
      <div className="min-w-[58px]">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em]">
          {invitation.month}
        </p>
        <p
          className="mt-1 text-[3.15rem] font-medium leading-none text-[#F5E6B3]"
          style={{ fontFamily: "var(--font-royal-cormorant)" }}
        >
          {invitation.day}
        </p>
      </div>
      <div className="border-y border-[#D4AF37]/35 py-2">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
          {invitation.year}
        </p>
      </div>
    </div>
  );
}

function EventDetailsSection({ invitation }: { invitation: RoyalGoldSoulData }) {
  return (
    <motion.section
      id="royal-events"
      {...fadeUp}
      className="relative isolate scroll-mt-24 overflow-hidden rounded-[21px] border border-[#D4AF37]/25 bg-black/[0.55] px-[18px] pb-[24px] pt-[20px] text-center shadow-[inset_0_1px_0_rgba(245,230,179,0.1),inset_0_-34px_76px_rgba(212,175,55,0.045),0_22px_70px_rgba(0,0,0,0.58)] backdrop-blur-[4px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#050505]/85" />
      <SectionAtmosphere className="opacity-80" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(245,230,179,0.08),transparent_42%),linear-gradient(180deg,rgba(245,230,179,0.04),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-[7px] z-[2] rounded-[15px] border border-[#F5E6B3]/[0.055]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#F5E6B3]/38 to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 bottom-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/16 to-transparent" />

      <div className="relative z-10 flex flex-col items-center">
        <h2
          className="text-[1.55rem] font-semibold uppercase leading-none tracking-[0.17em] text-[#F5D47E] [text-shadow:0_0_22px_rgba(212,175,55,0.28)]"
          style={{ fontFamily: "var(--font-royal-cormorant)" }}
        >
          Event Details
        </h2>
        <RsvpOrnament className="mt-[8px] h-[18px] w-full max-w-[222px]" />

        <div className="mt-[22px] grid w-full grid-cols-3">
          {invitation.events.map((event, index) => (
            <article
              key={event.title}
              className="relative flex min-h-[142px] flex-col items-center px-[8px]"
            >
              {index < invitation.events.length - 1 ? (
                <span className="absolute right-0 top-[2px] h-[142px] w-px bg-gradient-to-b from-transparent via-[#D4AF37]/58 to-transparent" />
              ) : null}
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-[#F6C453]/12 blur-[14px]" />
                <EventIcon
                  className={`relative drop-shadow-[0_0_10px_rgba(246,196,83,0.22)] ${
                    event.icon === "cocktail" ? "h-[48px] w-[48px]" : "h-[43px] w-[43px]"
                  }`}
                  icon={event.icon}
                />
              </div>
              <h3 className="mt-[14px] min-h-[18px] whitespace-nowrap text-[0.54rem] font-bold uppercase leading-none tracking-[0.065em] text-[#D4AF37]">
                {event.title}
              </h3>
              <p className="mt-[13px] text-[0.76rem] font-semibold leading-none text-white/78">
                {event.time}
              </p>
              <p className="mt-[9px] text-[0.69rem] font-medium leading-[1.55] text-white/62">
                {event.venue}
                <br />
                {event.city}
              </p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function GallerySection({ invitation }: { invitation: RoyalGoldSoulData }) {
  return (
    <motion.section
      id="royal-gallery"
      {...fadeUp}
      className="relative isolate scroll-mt-24 overflow-hidden rounded-[21px] border border-[#D4AF37]/25 bg-black/[0.55] px-[13px] pb-[15px] pt-[16px] text-center shadow-[inset_0_1px_0_rgba(245,230,179,0.1),inset_0_-34px_76px_rgba(212,175,55,0.045),0_22px_70px_rgba(0,0,0,0.58)] backdrop-blur-[4px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#050505]/85" />
      <SectionAtmosphere className="opacity-70" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(245,230,179,0.08),transparent_42%),linear-gradient(180deg,rgba(245,230,179,0.04),transparent_38%),radial-gradient(circle_at_92%_94%,rgba(212,175,55,0.08),transparent_28%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.16, 0.34, 0.16], x: [-26, 26, -26] }}
        className="pointer-events-none absolute -bottom-8 right-0 z-0 h-28 w-36 rounded-full bg-[#D4AF37]/18 blur-2xl"
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="pointer-events-none absolute inset-[7px] z-[2] rounded-[15px] border border-[#F5E6B3]/[0.055]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#F5E6B3]/38 to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 bottom-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/16 to-transparent" />

      <div className="relative z-10 flex flex-col items-center">
        <h2
          className="text-[1.58rem] font-semibold uppercase leading-none tracking-[0.18em] text-[#F5D47E] [text-shadow:0_0_22px_rgba(212,175,55,0.28)]"
          style={{ fontFamily: "var(--font-royal-cormorant)" }}
        >
          Gallery
        </h2>
        <RsvpOrnament className="mt-[7px] h-[18px] w-full max-w-[222px]" />

        <div className="mt-[13px] grid w-full grid-cols-3 gap-[10px]">
          {invitation.gallery.map((item, index) => (
            <motion.figure
              key={item.title}
              className="group relative overflow-hidden rounded-[8px] border border-[#D4AF37]/48 bg-[#130D04] shadow-[inset_0_0_0_1px_rgba(246,196,83,0.08),0_6px_18px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              style={{ aspectRatio: "1.58 / 1" }}
              viewport={{ once: true, margin: "-90px" }}
              whileHover={{ y: -2, transition: { duration: 0.35 } }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: index * 0.09,
                  duration: 0.78,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              <Image
                alt={item.title}
                className="h-full w-full object-cover opacity-90 sepia-[0.32] saturate-[0.86] contrast-[1.04] brightness-[0.84] transition duration-700 group-hover:scale-[1.045]"
                fill
                loading="lazy"
                sizes="(max-width: 430px) 28vw, 118px"
                src={item.imageUrl}
                unoptimized
              />
              <figcaption className="sr-only">{item.title}</figcaption>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,236,173,0.26),transparent_36%),linear-gradient(180deg,rgba(246,196,83,0.08),rgba(0,0,0,0.42))]" />
            </motion.figure>
          ))}
        </div>

        <a
          href="#royal-rsvp"
          className="group mt-[14px] inline-flex flex-col items-center text-[0.66rem] font-semibold uppercase leading-none tracking-[0.25em] text-[#F6C453] [text-shadow:0_0_13px_rgba(212,175,55,0.22)]"
        >
          View Gallery
          <motion.span
            aria-hidden="true"
            className="mt-[9px] h-px w-[62px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            initial={{ scaleX: 0.62, opacity: 0.6 }}
            whileHover={{ scaleX: 1, opacity: 1 }}
          />
        </a>
      </div>
    </motion.section>
  );
}

function RsvpSection({ invitation }: { invitation: RoyalGoldSoulData }) {
  return (
    <section
      id="royal-rsvp"
      className="relative isolate scroll-mt-24 overflow-hidden rounded-[28px] border border-[#D4AF37]/25 bg-black/[0.55] px-8 py-9 text-center shadow-[inset_0_1px_0_rgba(245,230,179,0.1),inset_0_-34px_76px_rgba(212,175,55,0.045),0_22px_70px_rgba(0,0,0,0.58)] backdrop-blur-[4px] sm:px-12 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#050505]/85" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(245,230,179,0.08),transparent_42%),linear-gradient(180deg,rgba(245,230,179,0.04),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-[7px] z-[2] rounded-[22px] border border-[#F5E6B3]/[0.055]" />
      <div className="pointer-events-none absolute inset-x-10 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#F5E6B3]/38 to-transparent" />
      <div className="pointer-events-none absolute inset-x-10 bottom-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/16 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-[310px] flex-col items-center">
        <h2
          className="text-[2.08rem] font-semibold uppercase leading-none tracking-[0.18em] text-[#F5E6B3] [text-shadow:0_0_22px_rgba(212,175,55,0.28)]"
          style={{ fontFamily: "var(--font-royal-cormorant)" }}
        >
          Kindly RSVP
        </h2>
        <div className="relative mt-[15px] h-[18px] w-full max-w-[222px]">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/72 to-transparent" />
          <span className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#F5E6B3]/75 bg-[#050505] shadow-[0_0_10px_rgba(246,196,83,0.42)]" />
        </div>
        <p className="mt-5 max-w-[270px] text-[0.9rem] font-medium leading-[1.6rem] text-[#D9A94C]/88 [text-shadow:0_0_12px_rgba(0,0,0,0.72)]">
          {invitation.rsvpText}
        </p>
        <button
          className="group relative mt-7 inline-flex h-[50px] min-w-[188px] items-center justify-center gap-3 overflow-hidden rounded-[15px] border border-[#D4AF37]/82 bg-black/35 px-8 text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#F6C453] shadow-[inset_0_0_0_1px_rgba(245,230,179,0.07),0_0_18px_rgba(212,175,55,0.12)] transition-[border-color,background-color,box-shadow,color] duration-300 ease-out hover:border-[#F5E6B3]/90 hover:bg-[#0B0905]/72 hover:text-[#F5E6B3] hover:shadow-[inset_0_0_0_1px_rgba(245,230,179,0.12),0_0_26px_rgba(212,175,55,0.24)]"
        >
          <span className="absolute inset-0 bg-[linear-gradient(105deg,transparent,rgba(246,196,83,0.13),transparent)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative">RSVP NOW</span>
          <Mail className="relative h-[17px] w-[17px]" strokeWidth={1.25} />
        </button>
      </div>
    </section>
  );
}

export default function RoyalGoldSoul({
  data,
}: {
  data?: Partial<RoyalGoldSoulData>;
}) {
  const invitation = mergeRoyalGoldData(data);

  return (
    <main
      className={`${cormorant.variable} ${greatVibes.variable} ${inter.variable} min-h-[100dvh] bg-[#050505] text-[#F5E6B3]`}
      style={{ fontFamily: "var(--font-royal-inter)" }}
    >
      <div className="mx-auto min-h-[100dvh] max-w-[430px] bg-[#050505]">
        <div className="relative isolate min-h-[100dvh] overflow-hidden">
          <div
            className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[100dvh] max-w-[430px] bg-cover bg-center"
            style={imageSetStyle(royalGoldAssets.bg)}
          />
          <div
            className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[100dvh] max-w-[430px] bg-cover bg-center opacity-90 mix-blend-screen"
            style={imageSetStyle(royalGoldAssets.goldLight)}
          />
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.42, 0.72, 0.42], y: [0, -16, 0] }}
            className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[165vh] max-w-[430px] bg-cover bg-top mix-blend-screen"
            style={imageSetStyle(royalGoldAssets.goldDust)}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[100dvh] max-w-[430px] bg-[radial-gradient(circle_at_80%_72%,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_18%_62%,rgba(212,175,55,0.1),transparent_24%),linear-gradient(180deg,transparent_48%,rgba(0,0,0,0.76)_100%)]" />
          <div
            className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[100dvh] max-w-[430px] bg-cover bg-center opacity-[0.08] mix-blend-soft-light"
            style={imageSetStyle(royalGoldAssets.grain)}
          />

          <div
            className="pointer-events-none absolute -right-5 top-0 z-10 h-[318px] w-[210px] bg-contain bg-top bg-no-repeat opacity-80"
            style={imageSetStyle(royalGoldAssets.floralTop)}
          />
          <div
            className="pointer-events-none absolute -left-8 top-[330px] z-10 h-[295px] w-[188px] bg-contain bg-bottom bg-no-repeat opacity-74"
            style={imageSetStyle(royalGoldAssets.floralBottom)}
          />

          <section
            id="royal-hero"
            className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-7 pb-8 pt-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <p className="text-[0.78rem] font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
                {invitation.eyebrow}
              </p>
              <div
                aria-hidden="true"
                className="mx-auto mt-8 h-[86px] w-[220px] bg-contain bg-center bg-no-repeat"
                style={imageSetStyle(royalGoldAssets.crest)}
              />
              <h1
                className="mt-8 text-[4.15rem] font-medium uppercase leading-[0.94] tracking-[0.105em] text-[#F5E6B3] [text-shadow:0_0_25px_rgba(212,175,55,0.34)]"
                style={{ fontFamily: "var(--font-royal-cormorant)" }}
              >
                <span className="block">{invitation.groom}</span>
                <span
                  className="my-2 block text-[2.35rem] lowercase tracking-normal text-[#F6C453]"
                  style={{ fontFamily: "var(--font-royal-script)" }}
                >
                  and
                </span>
                <span className="block">{invitation.bride}</span>
              </h1>
              <div className="relative mx-auto mt-5 h-5 w-full max-w-[260px]">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                  style={imageSetStyle(royalGoldAssets.divider)}
                />
              </div>
              <DateBlock invitation={invitation} />
              <p className="mt-5 text-[0.76rem] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                At {invitation.time}
              </p>
              <p className="mt-6 text-[0.88rem] font-semibold uppercase tracking-[0.28em] text-[#F6C453]">
                {invitation.venue}
              </p>
              <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-[0.19em] text-white/68">
                {invitation.city}
              </p>
              <a
                href="#royal-story"
                className="relative mt-7 inline-flex min-h-10 items-center justify-center overflow-hidden rounded-[4px] border border-[#D4AF37]/70 px-6 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#F5E6B3] transition duration-500 hover:bg-[#D4AF37] hover:text-black"
              >
                <span className="absolute inset-0 bg-[linear-gradient(100deg,transparent,rgba(246,196,83,0.18),transparent)]" />
                <span className="relative">Save The Date</span>
              </a>
            </motion.div>
          </section>

          <div className="relative z-20 space-y-3 px-4 pb-28">
            <SectionCard id="royal-story" className="px-5 pb-[16px] pt-[16px]">
              <SectionTitle>Our Story</SectionTitle>
              <p
                className="mx-auto mt-[2px] max-w-[248px] text-[0.94rem] font-medium italic leading-[1.4] text-[#D9A94C]"
                style={{ fontFamily: "var(--font-royal-cormorant)" }}
              >
                &quot;{invitation.story}&quot;
              </p>
              <a
                href="#royal-countdown"
                className="relative mt-[14px] inline-flex flex-col items-center text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#F6C453] [text-shadow:0_0_12px_rgba(212,175,55,0.18)]"
              >
                <span className="pointer-events-none absolute -bottom-[6px] left-1/2 h-[18px] w-[86px] -translate-x-1/2 rounded-full bg-[#D4AF37]/16 blur-[12px]" />
                Read More
                <span className="mt-[8px] h-px w-[56px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </a>
            </SectionCard>

            <SectionCard id="royal-countdown" className="pb-[16px] pt-[16px]">
              <SectionTitle>Countdown</SectionTitle>
              <div className="mt-[12px] grid grid-cols-4 divide-x divide-[#D4AF37]/42">
                {invitation.countdown.map((item) => (
                  <div key={item.label} className="min-w-0 px-[6px]">
                    <p
                      className="text-[1.9rem] font-medium leading-none text-[#F6C453] [text-shadow:0_0_16px_rgba(212,175,55,0.24)]"
                      style={{ fontFamily: "var(--font-royal-cormorant)" }}
                    >
                      {item.value}
                    </p>
                    <p className="mt-[7px] text-[0.53rem] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <EventDetailsSection invitation={invitation} />

            <GallerySection invitation={invitation} />

            <RsvpSection invitation={invitation} />
          </div>

          <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[430px] px-4 pb-[calc(0.7rem+env(safe-area-inset-bottom))]">
            <div className="grid grid-cols-5 rounded-[22px] border border-[#D4AF37]/25 bg-black/78 px-2 py-3 shadow-[0_-18px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(245,230,179,0.08)] backdrop-blur-md">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === 0;

                return (
                  <a
                    key={item.label}
                    aria-label={item.label}
                    className={`flex flex-col items-center gap-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] transition ${
                      isActive ? "text-[#F6C453]" : "text-white/72 hover:text-[#F6C453]"
                    }`}
                    href={item.href}
                  >
                    <Icon
                      className={`h-6 w-6 ${isActive ? "fill-[#F6C453]/75" : ""}`}
                      strokeWidth={1.25}
                    />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}

export { defaultRoyalGoldData };
