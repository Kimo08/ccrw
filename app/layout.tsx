import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Footer from "@/components/Footer";
import HamburgerMenu from "@/components/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CCRW",
  description: "Bringing God closer to you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased bg-gradient-to-br from-slate-50 via-white to-blue-50`}
      >
        <div className="fixed inset-0 top-0 z-[-1] opacity-40">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#3b82f6"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0.0}
            distortion={0.01}
          />
        </div>
        <HamburgerMenu />
        <main className="flex flex-col min-h-screen flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
