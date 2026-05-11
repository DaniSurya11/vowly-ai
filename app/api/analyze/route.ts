import { NextRequest, NextResponse } from "next/server";

/* ══════════════════════════════════════════════════════════════════
   VOWLY AI — Cinematic Wedding Atmosphere Analysis Engine
   ══════════════════════════════════════════════════════════════════ */

const SYSTEM_PROMPT = `You are VOWLY AI,
an elite cinematic wedding creative director and luxury emotional experience designer.

Your purpose is to transform wedding information into a deeply personalized cinematic wedding atmosphere.

You are NOT a generic AI assistant.

You behave like:
* luxury wedding art director
* cinematic mood designer
* emotional storyteller
* premium invitation stylist
* visual atmosphere architect

━━━━━━━━━━━━━━━━━━━
AVAILABLE THEMES
━━━━━━━━━━━━━━━━━━━

1. Royal Gold
   Luxury cinematic black and gold wedding atmosphere with editorial elegance, timeless sophistication, glowing premium visuals.

2. Soft Romance
   Dreamy soft pink romantic wedding atmosphere with delicate floral visuals, emotional storytelling, cinematic softness.

3. Dark Luxury
   Modern dark cinematic wedding with minimal premium elegance, deep contrast, editorial luxury mood.

4. Garden Party
   Fresh outdoor wedding atmosphere with natural greenery, warm sunlight, floral romance, elegant organic celebration.

5. Minimal Elegant
   Clean luxury wedding aesthetic with white space, timeless typography, modern sophistication, refined minimalism.

6. Vintage Film
   Classic nostalgic wedding atmosphere with cinematic film grain, warm tones, timeless emotional romance.

━━━━━━━━━━━━━━━━━━━
YOUR RESPONSIBILITIES
━━━━━━━━━━━━━━━━━━━

You must:
1. deeply analyze emotional atmosphere
2. determine cinematic wedding direction
3. select the BEST matching theme
4. generate emotional storytelling
5. generate luxury invitation hero copy
6. generate visual direction
7. generate atmosphere styling direction
8. generate cinematic UI mood
9. generate premium preview direction
10. generate section styling guidance

━━━━━━━━━━━━━━━━━━━
ANALYSIS PRIORITIES
━━━━━━━━━━━━━━━━━━━

Focus on:
* emotional intimacy
* elegance level
* romance intensity
* storytelling warmth
* cinematic atmosphere
* visual chemistry
* premium aesthetic direction
* luxury wedding feeling

━━━━━━━━━━━━━━━━━━━
OUTPUT REQUIREMENTS
━━━━━━━━━━━━━━━━━━━

Return ONLY valid JSON.
Do NOT explain.
Do NOT add markdown.
Do NOT add commentary.

━━━━━━━━━━━━━━━━━━━
OUTPUT FORMAT
━━━━━━━━━━━━━━━━━━━

{
  "recommendedTheme": "",
  "confidenceReason": "",
  "heroTitle": "",
  "heroSubtitle": "",
  "cinematicTagline": "",
  "themeDescription": "",
  "visualDirection": "",
  "backgroundStyle": "",
  "lightingStyle": "",
  "animationStyle": "",
  "particleStyle": "",
  "previewMood": "",
  "colorPalette": [],
  "fontPairing": {
    "heading": "",
    "body": ""
  },
  "sectionStyle": {
    "hero": "",
    "gallery": "",
    "countdown": "",
    "story": "",
    "rsvp": ""
  }
}`;

/* ── Intelligent local fallback when no OpenAI key ── */
function generateLocalAnalysis(input: {
  bride_name: string;
  groom_name: string;
  wedding_date: string;
  location: string;
  love_story: string;
  theme?: string;
  music?: string;
  atmosphere?: string;
}) {
  const { bride_name, groom_name, wedding_date, location, love_story, theme, music, atmosphere } = input;
  const story = (love_story || "").toLowerCase();
  const loc = (location || "").toLowerCase();
  const atmo = (atmosphere || "").toLowerCase();
  const mus = (music || "").toLowerCase();

  // Theme inference logic
  let recommendedTheme = theme || "Royal Gold";

  if (!theme) {
    // Keyword-based analysis
    const scores: Record<string, number> = {
      "Royal Gold": 0,
      "Soft Romance": 0,
      "Dark Luxury": 0,
      "Garden Party": 0,
      "Minimal Elegant": 0,
      "Vintage Film": 0,
    };

    // Location signals
    if (loc.match(/garden|park|outdoor|forest|vineyard|ranch|countryside/)) scores["Garden Party"] += 3;
    if (loc.match(/ballroom|palace|castle|manor|estate|grand/)) scores["Royal Gold"] += 3;
    if (loc.match(/museum|gallery|loft|rooftop|modern|studio/)) scores["Dark Luxury"] += 3;
    if (loc.match(/beach|lake|chapel|church|villa/)) scores["Soft Romance"] += 2;
    if (loc.match(/barn|rustic|vintage|classic|heritage/)) scores["Vintage Film"] += 3;

    // Story emotional signals
    if (story.match(/romantic|tender|sweet|gentle|soft|delicate|blush/)) scores["Soft Romance"] += 2;
    if (story.match(/luxury|opulent|grand|majestic|regal|elegant/)) scores["Royal Gold"] += 2;
    if (story.match(/modern|sleek|minimal|sophisticated|chic/)) scores["Dark Luxury"] += 2;
    if (story.match(/nature|outdoor|garden|bloom|flowers|sun/)) scores["Garden Party"] += 2;
    if (story.match(/classic|nostalgi|vintage|timeless|old|retro|film/)) scores["Vintage Film"] += 2;
    if (story.match(/clean|simple|pure|understated|quiet/)) scores["Minimal Elegant"] += 2;

    // Atmosphere signals
    if (atmo === "elegant") { scores["Royal Gold"] += 2; scores["Minimal Elegant"] += 1; }
    if (atmo === "emotional") { scores["Soft Romance"] += 2; scores["Vintage Film"] += 1; }
    if (atmo === "luxury") { scores["Dark Luxury"] += 2; scores["Royal Gold"] += 1; }
    if (atmo === "cinematic") { scores["Dark Luxury"] += 2; scores["Vintage Film"] += 1; }
    if (atmo === "modern") { scores["Minimal Elegant"] += 2; scores["Dark Luxury"] += 1; }

    // Music signals
    if (mus === "jazz") { scores["Vintage Film"] += 2; scores["Dark Luxury"] += 1; }
    if (mus === "orchestra") { scores["Royal Gold"] += 2; scores["Soft Romance"] += 1; }
    if (mus === "piano") { scores["Minimal Elegant"] += 2; scores["Soft Romance"] += 1; }
    if (mus === "romantic pop") { scores["Soft Romance"] += 2; scores["Garden Party"] += 1; }

    recommendedTheme = Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0];
  }

  const dateFormatted = wedding_date
    ? new Date(wedding_date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "a special day";

  const themeData: Record<string, {
    confidenceReason: string; heroTitle: string; heroSubtitle: string;
    cinematicTagline: string; themeDescription: string; visualDirection: string;
    backgroundStyle: string; lightingStyle: string; animationStyle: string;
    particleStyle: string; previewMood: string; colorPalette: string[];
    fontPairing: { heading: string; body: string };
    sectionStyle: { hero: string; gallery: string; countdown: string; story: string; rsvp: string };
  }> = {
    "Royal Gold": {
      confidenceReason: `The ${atmo || "elegant"} atmosphere combined with ${mus || "orchestral"} undertones and the setting in ${location || "a grand venue"} calls for regal opulence.`,
      heroTitle: `${bride_name} & ${groom_name}`,
      heroSubtitle: `A Royal Celebration — ${dateFormatted}`,
      cinematicTagline: "Where elegance meets eternity.",
      themeDescription: "A cinematic black and gold atmosphere radiating timeless sophistication and editorial grandeur.",
      visualDirection: "Deep blacks layered with warm gold accents, sharp typographic hierarchy, and dramatic negative space.",
      backgroundStyle: "Pure black canvas with subtle gold radial gradient and floating particle system",
      lightingStyle: "Warm amber spotlighting with cinematic vignette edges and soft gold rim lighting",
      animationStyle: "Slow reveal fade-ins, parallax depth layers, smooth gold shimmer transitions",
      particleStyle: "Sparse floating gold dust with gentle drift — subtle, never overwhelming",
      previewMood: "Opulent premiere night — the feeling of a velvet curtain slowly rising",
      colorPalette: ["#D4AF37", "#8B5E1A", "#050505", "#F5F5F5", "#1a1507"],
      fontPairing: { heading: "Playfair Display", body: "Inter" },
      sectionStyle: {
        hero: "Full viewport dramatic reveal with gold typography on pure black, floating particles",
        gallery: "Masonry grid with gold-bordered frames and cinematic hover zoom",
        countdown: "Elegant gold numerals on dark matte, subtle pulse animation",
        story: "Editorial layout with alternating image-text blocks and gold accents",
        rsvp: "Glassmorphism card with gold-outlined inputs and premium submit button"
      }
    },
    "Soft Romance": {
      confidenceReason: `The tender emotional qualities of this love story from ${location || "a dreamy venue"} with ${mus || "melodic"} undertones naturally gravitate toward romantic softness.`,
      heroTitle: `${bride_name} & ${groom_name}`,
      heroSubtitle: `An Intimate Romance — ${dateFormatted}`,
      cinematicTagline: "A love letter written in petals and light.",
      themeDescription: "A dreamy soft-pink romantic atmosphere with delicate floral visuals and emotional cinematic softness.",
      visualDirection: "Blush tones layered with cream whites, soft focus backgrounds, and delicate serif typography.",
      backgroundStyle: "Warm cream gradient with soft pink blush undertones and subtle floral overlays",
      lightingStyle: "Golden hour warmth with diffused soft glow and romantic lens flare accents",
      animationStyle: "Gentle floating animations, soft parallax drift, petal-fall micro-interactions",
      particleStyle: "Floating rose petals with soft blur and gentle descent",
      previewMood: "A quiet sunset garden — intimate, warm, breathless with anticipation",
      colorPalette: ["#F4728A", "#FFD1DC", "#FFF5F5", "#110a0d", "#D4A574"],
      fontPairing: { heading: "Playfair Display", body: "Inter" },
      sectionStyle: {
        hero: "Soft focus background with centered couple names in elegant serif, petal particles",
        gallery: "Rounded frame grid with soft shadow, hover scale with pink glow",
        countdown: "Handwritten-style numerals on cream, gentle heartbeat pulse",
        story: "Romantic scroll narrative with alternating soft imagery and italic text",
        rsvp: "Soft rounded card with blush accents and warm input fields"
      }
    },
    "Dark Luxury": {
      confidenceReason: `The ${atmo || "cinematic"} mood with ${mus || "ambient"} notes and the modern setting of ${location || "an editorial venue"} demands sophisticated dark minimalism.`,
      heroTitle: `${bride_name} & ${groom_name}`,
      heroSubtitle: `A Modern Affair — ${dateFormatted}`,
      cinematicTagline: "Silence speaks louder in silver and shadow.",
      themeDescription: "A modern dark cinematic atmosphere with minimal premium elegance and deep editorial contrast.",
      visualDirection: "Ultra-dark backgrounds with silver-white typography, sharp contrast, and architectural composition.",
      backgroundStyle: "Near-black canvas with subtle cool-toned gradients and sharp geometric accents",
      lightingStyle: "Cool silver rim lighting with deep shadow contrast and minimal ambient glow",
      animationStyle: "Precise slide-in reveals, sharp scale transitions, smooth opacity fades",
      particleStyle: "Sparse silver motes with slow vertical drift — barely visible, deeply atmospheric",
      previewMood: "A private gallery opening at midnight — exclusive, curated, magnetic",
      colorPalette: ["#B4B4D2", "#1a1a2e", "#040406", "#E0E0E0", "#0a0a14"],
      fontPairing: { heading: "Playfair Display", body: "Inter" },
      sectionStyle: {
        hero: "Full dark viewport with oversized white typography and silver accent lines",
        gallery: "Minimal grid with sharp borders and monochrome hover transitions",
        countdown: "Clean sans-serif numerals on dark, subtle silver pulse",
        story: "Editorial column layout with high-contrast image-text pairing",
        rsvp: "Dark glass card with silver-outlined inputs and smooth hover states"
      }
    },
    "Garden Party": {
      confidenceReason: `The natural beauty of ${location || "an outdoor setting"} combined with ${mus || "light"} melodies creates an organic, sunlit garden celebration.`,
      heroTitle: `${bride_name} & ${groom_name}`,
      heroSubtitle: `A Garden Celebration — ${dateFormatted}`,
      cinematicTagline: "Where love blooms under open skies.",
      themeDescription: "A fresh outdoor atmosphere with natural greenery, warm sunlight, and elegant organic celebration.",
      visualDirection: "Natural greens with warm earth tones, organic textures, and sunlit photography direction.",
      backgroundStyle: "Warm green gradient with natural light leaks and botanical overlay patterns",
      lightingStyle: "Natural sunlight filtering through foliage with warm golden highlights",
      animationStyle: "Organic sway motions, gentle breeze drift, natural growth reveals",
      particleStyle: "Floating botanical elements — small leaves and light speckles in warm light",
      previewMood: "A sun-drenched garden at golden hour — joyful, alive, warmly elegant",
      colorPalette: ["#789A5A", "#4A6B2D", "#080b06", "#F5F0E8", "#D4C5A0"],
      fontPairing: { heading: "Playfair Display", body: "Inter" },
      sectionStyle: {
        hero: "Natural imagery backdrop with warm overlay, botanical frame accents",
        gallery: "Organic rounded frames with natural shadow and warm hover glow",
        countdown: "Earthy styled numerals with botanical decorative accents",
        story: "Flowing narrative with nature photography and handwritten-style accents",
        rsvp: "Warm paper-textured card with green accents and organic border styling"
      }
    },
    "Minimal Elegant": {
      confidenceReason: `The ${atmo || "modern"} sensibility combined with ${mus || "delicate"} tones and the refined setting of ${location || "a sophisticated venue"} calls for clean luxury minimalism.`,
      heroTitle: `${bride_name} & ${groom_name}`,
      heroSubtitle: `Simply Beautiful — ${dateFormatted}`,
      cinematicTagline: "Elegance is the art of subtraction.",
      themeDescription: "A clean luxury aesthetic with generous white space, timeless typography, and modern refined minimalism.",
      visualDirection: "Warm whites with subtle gold accents, expansive negative space, and deliberate typographic hierarchy.",
      backgroundStyle: "Warm ivory gradient with subtle texture and clean geometric accents",
      lightingStyle: "Soft diffused natural light with warm undertones and clean highlights",
      animationStyle: "Deliberate fade-ins, clean slide reveals, measured breathing space transitions",
      particleStyle: "Nearly invisible warm motes — felt more than seen, pure ambiance",
      previewMood: "A perfectly curated art book — considered, refined, breathtakingly simple",
      colorPalette: ["#E6DCC8", "#C4B896", "#0b0a08", "#F8F5F0", "#3D3929"],
      fontPairing: { heading: "Playfair Display", body: "Inter" },
      sectionStyle: {
        hero: "Expansive white space with centered serif names and minimal gold accent line",
        gallery: "Clean edge-to-edge grid with subtle shadow and warm scale hover",
        countdown: "Refined serif numerals with generous spacing on clean background",
        story: "Single-column editorial with generous margins and measured image placement",
        rsvp: "Clean white card with warm borders and understated gold accents"
      }
    },
    "Vintage Film": {
      confidenceReason: `The nostalgic warmth from ${location || "a timeless venue"} and ${mus || "classic"} atmosphere evokes cinematic film grain and emotional romance.`,
      heroTitle: `${bride_name} & ${groom_name}`,
      heroSubtitle: `A Timeless Love — ${dateFormatted}`,
      cinematicTagline: "Some love stories deserve a film grain.",
      themeDescription: "A classic nostalgic atmosphere with cinematic film grain, warm tones, and timeless emotional romance.",
      visualDirection: "Warm amber and sepia tones with film grain texture, vintage typography, and analog photography feel.",
      backgroundStyle: "Deep warm brown gradient with subtle film grain overlay and vignette edges",
      lightingStyle: "Warm tungsten lighting with soft film flare and natural analog warmth",
      animationStyle: "Film-strip reveals, gentle grain flicker, slow cross-dissolve transitions",
      particleStyle: "Film dust motes floating in warm light — nostalgic and dreamy",
      previewMood: "Discovering old love letters in a sunlit attic — deeply emotional and timeless",
      colorPalette: ["#A05014", "#D4A574", "#0e0804", "#F5E6D0", "#6B3A1F"],
      fontPairing: { heading: "Playfair Display", body: "Inter" },
      sectionStyle: {
        hero: "Sepia-toned full viewport with grain overlay and warm serif typography",
        gallery: "Polaroid-style frames with warm border and vintage hover lift effect",
        countdown: "Vintage typewriter-style numerals with warm amber glow",
        story: "Film-strip layout with alternating sepia images and warm narrative text",
        rsvp: "Aged paper textured card with warm brown accents and vintage styling"
      }
    }
  };

  const data = themeData[recommendedTheme] || themeData["Royal Gold"];

  return {
    recommendedTheme,
    ...data,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      bride_name = "",
      groom_name = "",
      wedding_date = "",
      location = "",
      love_story = "",
      theme = "",
      music = "",
      atmosphere = "",
    } = body;

    const apiKey = process.env.OPENAI_API_KEY;

    /* ── If OpenAI API key is available, use GPT ── */
    if (apiKey) {
      const userPrompt = `Bride Name:\n${bride_name}\n\nGroom Name:\n${groom_name}\n\nWedding Date:\n${wedding_date}\n\nWedding Location:\n${location}\n\nLove Story:\n${love_story}\n\nMusic Preference:\n${music}\n\nAtmosphere:\n${atmosphere}\n\nManually Selected Theme (if any):\n${theme}`;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4o",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.8,
          max_tokens: 1200,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("OpenAI API error:", errorText);
        // Fallback to local analysis
        const localResult = generateLocalAnalysis({ bride_name, groom_name, wedding_date, location, love_story, theme, music, atmosphere });
        return NextResponse.json({ success: true, source: "local", data: localResult });
      }

      const result = await response.json();
      const content = result.choices?.[0]?.message?.content || "";

      // Parse JSON from response (handle potential markdown wrapping)
      let parsed;
      try {
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
      } catch {
        console.error("Failed to parse OpenAI response:", content);
        const localResult = generateLocalAnalysis({ bride_name, groom_name, wedding_date, location, love_story, theme, music, atmosphere });
        return NextResponse.json({ success: true, source: "local", data: localResult });
      }

      return NextResponse.json({ success: true, source: "openai", data: parsed });
    }

    /* ── No API key — use intelligent local analysis ── */
    const localResult = generateLocalAnalysis({ bride_name, groom_name, wedding_date, location, love_story, theme, music, atmosphere });
    return NextResponse.json({ success: true, source: "local", data: localResult });

  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to analyze wedding atmosphere" },
      { status: 500 }
    );
  }
}
