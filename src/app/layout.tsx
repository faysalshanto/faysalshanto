import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faysal Ibne Safir Shanto | Digital Marketer",
  description: "Portfolio of Faysal Ibne Safir Shanto - Digital Marketer & Startup Founder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#060913] text-gray-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}