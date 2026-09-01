import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    <html lang="en">
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
