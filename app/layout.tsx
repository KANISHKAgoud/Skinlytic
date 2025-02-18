import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skinlytic",
  description: "Skinlytic is an advanced AI-powered skin disease detection platform that allows users to upload skin images and receive instant analysis. Using deep learning, Skinlytic identifies potential skin conditions and provides insights to help users take informed steps toward better skin health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative flex flex-col min-h-screen">

          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
          
        </div>
      </body>
    </html>
  );
}
