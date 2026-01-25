import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Metal_Mania } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Nav/Navbar";
import { Footer } from "./Components/Footer/Footer";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"]
});

const metalMania = Metal_Mania({
  variable: "--font-metalMania",
  subsets: ["latin"],
  weight: ["400"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WaveCast",
  description: "Podcasting made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${metalMania.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
