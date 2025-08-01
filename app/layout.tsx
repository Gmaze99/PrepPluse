import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monoSans = Mona_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepPluse",
  description: "AI Powered Platform for Interview Preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
