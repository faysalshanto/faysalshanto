import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://faysalshanto.vercel.app'),
  title: "Faysal Ibne Safir Shanto | Digital Marketer, Startup Founder & Student Leader",
  description: "Official portfolio of Faysal Ibne Safir Shanto — Digital Marketer, Founder of Maglyn, and Student Leader exploring AI, startups, and financial innovation.",
  keywords: [
    "Faysal Ibne Safir Shanto",
    "Digital Marketer",
    "Startup Founder",
    "Maglyn",
    "Student Leader",
    "BUBT",
    "Flowmingo AI",
    "Marketing",
    "Financial Innovation"
  ],
  authors: [{ name: "Faysal Ibne Safir Shanto" }],
  openGraph: {
    title: "Faysal Ibne Safir Shanto | Digital Marketer, Startup Founder & Student Leader",
    description: "Official portfolio of Faysal Ibne Safir Shanto — Digital Marketer, Founder of Maglyn, and Student Leader exploring AI, startups, and financial innovation.",
    url: "https://faysalshanto.vercel.app",
    siteName: "Faysal Ibne Safir Shanto",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Faysal Ibne Safir Shanto",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faysal Ibne Safir Shanto | Digital Marketer, Startup Founder & Student Leader",
    description: "Official portfolio of Faysal Ibne Safir Shanto — Digital Marketer, Founder of Maglyn, and Student Leader exploring AI, startups, and financial innovation.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}