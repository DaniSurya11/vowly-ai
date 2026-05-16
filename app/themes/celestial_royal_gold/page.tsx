import type { Metadata } from "next";
import { getWeddingTheme } from "@/components/themes/registry";

export const metadata: Metadata = {
  title: "Celestial Royal Gold | Vowly AI",
  description: "Premium mobile-first wedding invitation theme preview for Vowly AI.",
};

export default function CelestialRoyalGoldPreviewPage() {
  const theme = getWeddingTheme("celestial_royal_gold");
  const ThemeComponent = theme.component;

  return <ThemeComponent data={theme.defaultData} />;
}
