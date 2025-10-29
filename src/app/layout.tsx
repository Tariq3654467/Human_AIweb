import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Using Inter as closest Google Fonts alternative to Benton Sans
// Both are clean, modern sans-serif fonts with excellent readability
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Humanbrand AI – Brand OS | Transform Marketing Chaos into Command",
  description: "AI-Powered Brand OS for Data-Driven Command. Transform marketing chaos into operational command through the alchemy of human creativity and AI precision.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased dots-background`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
