import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeveloperWafi",
  description: "DeveloperWafi - Welcome My Personal Protfolio Page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
          <link rel="icon" href="/logo.png" sizes="any" />
    </head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
