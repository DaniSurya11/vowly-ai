import type { Metadata } from "next";
import RoyalGoldSoul, {
  defaultRoyalGoldData,
} from "@/components/theme-souls/RoyalGoldSoul";

export const metadata: Metadata = {
  title: "Royal Gold Soul | Vowly AI",
  description: "Premium mobile-first royal wedding invitation theme preview for Vowly AI.",
};

export default function RoyalGoldSoulPreviewPage() {
  return <RoyalGoldSoul data={defaultRoyalGoldData} />;
}
