import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://faysalshanto.vercel.app"),
  title: "Faysal Ibne Safir Shanto | Digital Marketer, Startup Founder & Student Leader",
  description:
    "Official portfolio of Faysal Ibne Safir Shanto. Digital Marketer, Startup Founder, Media & Publication Secretary at BUBT Business Club.",
  keywords: [
    "Faysal Ibne Safir Shanto",
    "Faysal Shanto",
    "Faysal Safir",
    "BUBT Business Club",
    "Voice of Business",
    "Digital Marketer Bangladesh",
    "Maglyn Founder",
  ],
  authors: [{ name: "Faysal Ibne Safir Shanto", url: "https://faysalshanto.vercel.app" }],
  creator: "Faysal Ibne Safir Shanto",
  publisher: "Faysal Ibne Safir Shanto",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://faysalshanto.vercel.app",
  },
  openGraph: {
    title: "Faysal Ibne Safir Shanto | Digital Marketer, Startup Founder & Student Leader",
    description:
      "Official portfolio of Faysal Ibne Safir Shanto. Digital Marketer, Startup Founder, Media & Publication Secretary at BUBT Business Club.",
    url: "https://faysalshanto.vercel.app",
    siteName: "Faysal Ibne Safir Shanto",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Faysal Ibne Safir Shanto — Digital Marketer & Startup Founder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faysal Ibne Safir Shanto | Digital Marketer, Startup Founder & Student Leader",
    description:
      "Official portfolio of Faysal Ibne Safir Shanto. Digital Marketer, Startup Founder, Media & Publication Secretary at BUBT Business Club.",
    images: ["/profile.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faysal Ibne Safir Shanto",
  alternateName: ["Faysal Shanto", "Faysal Safir"],
  url: "https://faysalshanto.vercel.app",
  image: "https://faysalshanto.vercel.app/profile.jpg",
  jobTitle: "Digital Marketer, Startup Founder & Student Leader",
  description:
    "Official portfolio of Faysal Ibne Safir Shanto. Digital Marketer, Startup Founder, Media & Publication Secretary at BUBT Business Club.",
  worksFor: [
    {
      "@type": "Organization",
      name: "Maglyn",
      url: "https://www.facebook.com/maglyn.official/",
    },
    {
      "@type": "Organization",
      name: "BUBT Business Club",
      url: "https://faysalshanto.vercel.app/voice-of-business",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bangladesh University of Business and Technology (BUBT)",
  },
  sameAs: [
    "https://www.linkedin.com/in/faysal-ibne-safir-shanto/",
    "https://www.facebook.com/faysal.ibne.safir.shanto",
    "https://www.instagram.com/faysal.shanto",
    "https://faysalshanto.vercel.app",
  ],
  knowsAbout: [
    "Digital Marketing",
    "Brand Identity Design",
    "Startup Growth & Building",
    "Public Speaking & Media Leadership",
    "Visual Communications",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}