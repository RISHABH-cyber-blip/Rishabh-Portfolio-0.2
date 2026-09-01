import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";

// Swap for Clash Display / Satoshi via Fontshare @font-face if you own a license —
// Sora is used here as a free, similar-feeling geometric display alternative.
const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Rishabh — 3D Web Developer",
  description:
    "Portfolio of Rishabh, a 3D web developer and frontend freelancer building immersive, interactive web experiences.",
};

// TODO: set your real WhatsApp number (with country code, no + or spaces)
export const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <CustomCursor />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
