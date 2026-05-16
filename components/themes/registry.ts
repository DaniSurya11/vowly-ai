import CelestialRoyalGoldTheme, {
  celestialRoyalGoldDefaultData,
  type CelestialRoyalGoldThemeData,
} from "@/components/themes/CelestialRoyalGoldTheme";

export type WeddingThemeId = "celestial_royal_gold";

export type WeddingThemeRegistryItem = {
  id: WeddingThemeId;
  name: string;
  description: string;
  component: typeof CelestialRoyalGoldTheme;
  defaultData: CelestialRoyalGoldThemeData;
};

export const weddingThemes: Record<WeddingThemeId, WeddingThemeRegistryItem> = {
  celestial_royal_gold: {
    id: "celestial_royal_gold",
    name: "Celestial Royal Gold",
    description: "A dark editorial wedding theme with royal gold details and sacred cinematic pacing.",
    component: CelestialRoyalGoldTheme,
    defaultData: celestialRoyalGoldDefaultData,
  },
};

export function getWeddingTheme(themeId: WeddingThemeId) {
  return weddingThemes[themeId];
}
