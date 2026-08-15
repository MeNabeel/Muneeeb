import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muneeb — Social & Digital Media Expert",
  description:
    "Portfolio of Muneeb, a Social & Digital Media Expert specializing in video editing, content strategy, social media management and digital content.",
  keywords: [
    "Muneeb",
    "Video Editor",
    "Social Media Manager",
    "Content Strategist",
    "Digital Media Expert",
    "YouTube Executive",
    "Graphic Designer",
  ],
  authors: [{ name: "Muneeb" }],
  openGraph: {
    title: "Muneeb — Social & Digital Media Expert",
    description:
      "Cinematic portfolio of Muneeb, Video Editor, Content Strategist & Social Media Manager.",
    url: "https://muneeb-portfolio.com",
    siteName: "Muneeb Portfolio",
    images: [
      {
        url: "/images/muneebprof.png",
        width: 1200,
        height: 630,
        alt: "Muneeb - Social & Digital Media Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muneeb — Social & Digital Media Expert",
    description:
      "Cinematic portfolio of Muneeb, Video Editor, Content Strategist & Social Media Manager.",
    images: ["/images/muneebprof.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${sansFont.variable} ${displayFont.variable}`}>
      <body className="bg-[#0B0F0E] text-[#F7F4ED] font-sans antialiased selection:bg-[#1F7A70] selection:text-[#F7F4ED]">
        {children}
      </body>
    </html>
  );
}
