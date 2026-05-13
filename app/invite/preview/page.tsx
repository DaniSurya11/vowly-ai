"use client";

import { useState, useEffect } from "react";
import SunsetCinemaHero from "@/components/invite/SunsetCinemaHero";

type PreviewData = {
  inputData?: {
    names?: string;
    date?: string;
    location?: string;
  };
  cinematicTagline?: string;
};

const fallbackInvitation = {
  names: "SIGIT & MILA",
  date: "16 September 2026",
  location: "Pandawa Beach, Bali",
  tagline: "A sunset story written by love.",
};

export default function GuestInvitationPreview() {
  const [aiData, setAiData] = useState<PreviewData | null>(null);

  useEffect(() => {
    let isActive = true;

    const frame = window.requestAnimationFrame(() => {
      const saved = localStorage.getItem("vowly_ai_result");
      if (!saved) return;

      try {
        const parsedData = JSON.parse(saved) as PreviewData;
        if (isActive) setAiData(parsedData);
      } catch (e) {
        console.error("Failed to parse AI data", e);
      }
    });

    return () => {
      isActive = false;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const isLoaded = Boolean(aiData);
  const names =
    isLoaded && aiData.inputData?.names
      ? aiData.inputData.names
      : fallbackInvitation.names;
  const location =
    isLoaded && aiData.inputData?.location
      ? aiData.inputData.location
      : fallbackInvitation.location;
  const date =
    isLoaded && aiData.inputData?.date
      ? aiData.inputData.date
      : fallbackInvitation.date;
  const tagline =
    isLoaded && aiData.cinematicTagline
      ? aiData.cinematicTagline
      : fallbackInvitation.tagline;

  return <SunsetCinemaHero names={names} date={date} location={location} tagline={tagline} />;
}
