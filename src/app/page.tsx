"use client";

import React from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { SocialBar } from "@/components/portfolio/social-bar";
import { Hero } from "@/components/portfolio/hero";
import { Marquee } from "@/components/portfolio/marquee";
import { TrustStrip } from "@/components/portfolio/trust-strip";
import { FeaturedWork } from "@/components/portfolio/featured-work";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { heroMarqueeWords, skillsMarqueeWords } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0F0E] text-[#F7F4ED] selection:bg-[#1F7A70] selection:text-[#F7F4ED]">
      {/* Glassmorphic Sticky Header */}
      <Navbar />

      {/* Floating Desktop Social Bar */}
      <SocialBar />

      {/* Hero Section */}
      <Hero />

      {/* Hero Marquee */}
      <Marquee words={heroMarqueeWords} />

      {/* Organization Experience Trust Strip */}
      <TrustStrip />

      {/* Featured Work Grid with YouTube Modal */}
      <FeaturedWork />

      {/* Editorial About Section */}
      <About />

      {/* Career Timeline */}
      <Experience />

      {/* Skills Matrix */}
      <Skills />

      {/* Skills Marquee */}
      <Marquee words={skillsMarqueeWords} reverse />

      {/* Call to Action Contact Section */}
      <Contact />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
