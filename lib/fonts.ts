import { Bricolage_Grotesque, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Used by components/BenefitsHover only — named --font-benefits-display (not
// --font-display) because that token is already mapped to Neue Haas sitewide.
export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-benefits-display",
  display: "swap",
});
