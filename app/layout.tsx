import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  other:{
    "google-site-verification": "20xIlTGx1OdEV8L7OZ5fK6xj15az7ueXP8v8pAwTLD8"

  },
  title: "NetNerve | AI Powered PCAP Analysis",
  description: "AI-powered platform for analyzing PCAP and CAP files. Instantly detect anomalies, threats, and patterns in your network traffic.",
  keywords: [
    "NetNerve",
    "AI Powered PCAP Analysis",
    "Network Traffic Analysis",
    "PCAP Analysis",
    "CAP File Analysis",
    "Network Monitoring",
    "Packet Analyzer",
    "PCAP",
    "CAP",
    "AI",
    "Network Security",
    "Cybersecurity",
    "Threat Detection",
    "Network Analysis",
    "Packet Capture",
    "Real-time Analysis"
  ],authors: [{ name: "Shubham Bhat" }],
  creator: "Shubham Bhat",
  openGraph: {
    title: "NetNerve | AI Powered PCAP Analysis",
    description: "AI-powered platform for analyzing PCAP and CAP files. Instantly detect anomalies, threats, and patterns in your network traffic.",
    url: "https://netnerve.vercel.app",
    siteName: "Packet Analyzer",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Toaster/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
