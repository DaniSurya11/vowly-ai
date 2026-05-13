"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type SunsetCinemaHeroProps = {
  names: string;
  date: string;
  location: string;
  tagline?: string;
};

const heroImage = "/images/bg-cinematic.png";
const browserChromeTone = "#d2824f";

type OrnamentVariant = "name" | "detail";

function SunsetCinemaOrnament({ variant }: { variant: OrnamentVariant }) {
  const isName = variant === "name";

  return (
    <svg
      className={
        isName
          ? "sunset-cinema-ornament sunset-cinema-ornament--name mt-4"
          : "sunset-cinema-ornament sunset-cinema-ornament--detail my-2.5"
      }
      viewBox={isName ? "0 0 240 28" : "0 0 150 22"}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="sunset-cinema-ornament-line"
        d={isName ? "M14 14H92" : "M10 11H55"}
      />
      <path
        className="sunset-cinema-ornament-line"
        d={isName ? "M148 14H226" : "M95 11H140"}
      />
      <path
        className="sunset-cinema-ornament-ray"
        d={isName ? "M120 3V25M109 14H131" : "M75 4V18M68 11H82"}
      />
      <path
        className="sunset-cinema-ornament-mark"
        d={
          isName
            ? "M120 7.5L126.5 14L120 20.5L113.5 14Z"
            : "M75 6.5L79.5 11L75 15.5L70.5 11Z"
        }
      />
      {isName ? (
        <>
          <circle className="sunset-cinema-ornament-dot" cx="100" cy="14" r="1.7" />
          <circle className="sunset-cinema-ornament-dot" cx="140" cy="14" r="1.7" />
        </>
      ) : null}
    </svg>
  );
}

export default function SunsetCinemaHero({
  names,
  date,
  location,
  tagline = "A sunset story written by love.",
}: SunsetCinemaHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleAmpRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  const [firstNameRaw, secondNameRaw] = names.split("&");
  const firstName = firstNameRaw?.trim() || names;
  const secondName = secondNameRaw?.trim() || "";

  useEffect(() => {
    const existingMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]'
    );
    const meta = existingMeta ?? document.createElement("meta");
    const previousContent = existingMeta?.getAttribute("content");

    if (!existingMeta) {
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", browserChromeTone);

    return () => {
      if (existingMeta && previousContent) {
        existingMeta.setAttribute("content", previousContent);
      } else if (existingMeta) {
        existingMeta.removeAttribute("content");
      } else {
        meta.remove();
      }
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageWrapRef.current;
    const glow = glowRef.current;

    if (!hero || !image || !glow) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          eyebrowRef.current,
          titleRef.current,
          titleAmpRef.current,
          taglineRef.current,
          detailsRef.current,
          scrollCueRef.current,
        ],
        {
          autoAlpha: 0,
          y: 14,
        }
      );
      gsap.set(ctaRef.current, { autoAlpha: 1, y: 0 });
      gsap.set(image, { scale: 1.04, yPercent: 1.1 });

      if (prefersReducedMotion) {
        gsap.set(
          [
            eyebrowRef.current,
            titleRef.current,
            titleAmpRef.current,
            taglineRef.current,
            detailsRef.current,
            ctaRef.current,
            scrollCueRef.current,
          ],
          {
            autoAlpha: 1,
            y: 0,
          }
        );
        gsap.set(image, { autoAlpha: 0.96, scale: 1, yPercent: 0 });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .to(image, { autoAlpha: 0.96, scale: 1, yPercent: 0, duration: 1.55 })
        .to(eyebrowRef.current, { autoAlpha: 1, y: 0, duration: 0.72 }, "-=1.18")
        .to(titleRef.current, { autoAlpha: 1, y: 0, duration: 1.02 }, "-=0.42")
        .to(titleAmpRef.current, { autoAlpha: 1, y: 0, duration: 0.72 }, "-=0.74")
        .to(taglineRef.current, { autoAlpha: 1, y: 0, duration: 0.72 }, "-=0.38")
        .to(detailsRef.current, { autoAlpha: 1, y: 0, duration: 0.74 }, "-=0.34")
        .to(scrollCueRef.current, { autoAlpha: 1, y: 0, duration: 0.62 }, "-=0.22");

      gsap.to(glow, {
        xPercent: 7,
        yPercent: -6,
        scale: 1.14,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(image, {
        yPercent: -1.1,
        scale: 1.018,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(scrollCueRef.current, {
        y: 4,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, hero);

    const moveImage = gsap.quickTo(image, "xPercent", {
      duration: 1.5,
      ease: "power3.out",
    });
    const moveGlow = gsap.quickTo(glow, "xPercent", {
      duration: 2,
      ease: "power3.out",
    });

    const handlePointerMove = (event: PointerEvent) => {
      if (prefersReducedMotion) return;

      const progress = event.clientX / window.innerWidth - 0.5;
      moveImage(progress * -1.35);
      moveGlow(progress * 5);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      data-invite-preview-hero
      className="sunset-cinema-hero relative isolate flex h-[100svh] w-full items-center justify-center overflow-hidden px-6 text-center"
      aria-label="Wedding invitation hero"
    >
      <div className="sunset-cinema-base absolute inset-0 -z-30" />

      <div
        ref={imageWrapRef}
        className="sunset-cinema-image-wrap absolute inset-0 -z-20 opacity-0"
        aria-hidden="true"
      >
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="sunset-cinema-image object-cover object-center"
        />
      </div>

      <div className="sunset-cinema-warm-wash absolute inset-0 -z-10" />
      <div className="sunset-cinema-readability absolute inset-0 -z-10" />
      <div className="sunset-cinema-vignette absolute inset-0 -z-10" />

      <div
        ref={glowRef}
        className="sunset-cinema-glow absolute left-1/2 top-[34%] -z-10 h-64 w-64 -translate-x-1/2 rounded-full sm:h-96 sm:w-96"
      />

      <svg
        className="sunset-cinema-grain pointer-events-none absolute inset-0 z-10 h-full w-full"
        aria-hidden="true"
      >
        <filter id="sunset-cinema-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.78" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#sunset-cinema-grain)" />
      </svg>

      <div className="sunset-cinema-dust pointer-events-none absolute inset-0 z-10" />

      <div
        data-sunset-hero-frame
        className="sunset-cinema-frame relative z-20 mx-auto flex h-full w-full max-w-[430px] flex-col justify-between sm:max-w-[460px]"
      >
        <div className="flex shrink-0 flex-col items-center">
          <p
            ref={eyebrowRef}
            className="sunset-cinema-eyebrow text-[0.58rem] font-medium uppercase tracking-[0.54em]"
          >
            The Wedding Of
          </p>

          <h1
            ref={titleRef}
            className="sunset-cinema-title playfair mt-6 flex flex-col items-center font-normal uppercase leading-[0.85] tracking-[0.06em]"
          >
            <span>{firstName}</span>
            <span
              ref={titleAmpRef}
              className="my-2 text-[0.42em] lowercase leading-none tracking-normal"
            >
              &
            </span>
            <span>{secondName}</span>
          </h1>

          <SunsetCinemaOrnament variant="name" />

          <p
            ref={taglineRef}
            className="sunset-cinema-tagline playfair mt-3 max-w-[18rem] text-pretty italic leading-[1.5]"
          >
            {tagline}
          </p>
        </div>

        <div className="sunset-cinema-lower flex shrink-0 flex-col items-center pt-6">
          <div
            ref={detailsRef}
            className="sunset-cinema-details flex flex-col items-center"
          >
            <p className="sunset-cinema-label text-[0.58rem] font-medium uppercase tracking-[0.46em]">
              Date
            </p>
            <p className="sunset-cinema-detail-value playfair mt-1.5 uppercase tracking-[0.34em]">
              {date}
            </p>

            <SunsetCinemaOrnament variant="detail" />

            <p className="sunset-cinema-label text-[0.58rem] font-medium uppercase tracking-[0.46em]">
              Location
            </p>
            <p className="sunset-cinema-location playfair mt-1.5 uppercase tracking-[0.24em]">
              {location}
            </p>
          </div>

          <button
            ref={ctaRef}
            type="button"
            className="sunset-cinema-cta mt-4 inline-flex h-14 min-w-[18rem] items-center justify-center gap-4 rounded-full border px-8 text-[0.62rem] font-semibold uppercase tracking-[0.32em] transition duration-500 focus:outline-none focus:ring-2 active:scale-[0.98]"
          >
            <span className="relative z-10 text-base leading-none">*</span>
            <span className="relative z-10">Open Invitation</span>
          </button>

          <div
            ref={scrollCueRef}
            className="sunset-cinema-scroll-cue mt-3 flex h-7 w-9 items-center justify-center"
            aria-hidden="true"
          >
            <span className="relative h-6 w-px bg-current before:absolute before:bottom-0 before:left-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-current" />
          </div>
        </div>
      </div>
    </section>
  );
}
