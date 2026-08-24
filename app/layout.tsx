import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "@fontsource-variable/inter";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const neueHaas = localFont({
  src: [
    { path: "../public/fonts/neue-haas-grotesk-text-pro-55-roman.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/neue-haas-grotesk-text-pro-65-medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/neue-haas-grotesk-text-pro-75-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-neue-haas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HotelliBI | Control total de tu hotel",
  description: "Inteligencia comercial para tomar mejores decisiones hoteleras.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${hankenGrotesk.variable} ${neueHaas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
