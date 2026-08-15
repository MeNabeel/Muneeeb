"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Video, Share2, Lightbulb, RefreshCw, GraduationCap, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalDetails } from "@/data/portfolio";

export function Hero() {
  const [isFlippedManual, setIsFlippedManual] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [autoFlipIndex, setAutoFlipIndex] = useState(0);

  // Auto-flip every 5 seconds, pausing when user hovers over the card
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setAutoFlipIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const isFlipped = (autoFlipIndex % 2 === 1) || isFlippedManual || isHovered;

  const handleCardClick = () => {
    setIsFlippedManual(!isFlippedManual);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlippedManual(!isFlippedManual);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden film-grain">
      {/* Editorial Background Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[16vw] font-black tracking-widest text-[#8FD3C7]/[0.02] uppercase whitespace-nowrap z-0"
        aria-hidden="true"
      >
        CREATE
      </div>

      {/* Subtle Background Radial Lighting Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#1F7A70]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#8FD3C7]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Subtitle & Warm Beige Primary CTA */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label Badge */}
          <div>
            <Badge variant="default" className="px-3 py-1 text-[11px] tracking-widest border-none">
              {personalDetails.fullTitle}
            </Badge>
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase text-[#F7F4ED]">
              {personalDetails.heroHeadline.line1}
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase text-[#8FD3C7] drop-shadow-[0_0_25px_rgba(143,211,199,0.25)]">
              {personalDetails.heroHeadline.accent}
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase text-[#F7F4ED]">
              {personalDetails.heroHeadline.line2}
            </h1>
          </div>

          {/* Role Subtitle */}
          <p className="text-lg md:text-xl font-bold uppercase tracking-widest text-[#E9DDC8]">
            {personalDetails.subTitle}
          </p>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-[#A9B2AE] max-w-xl leading-relaxed">
            {personalDetails.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Warm Beige Primary Button */}
            <Button
              asChild
              className="bg-[#E9DDC8] text-[#0B0F0E] font-bold tracking-wider hover:bg-[#F7F4ED] shadow-lg hover:shadow-[0_0_25px_rgba(233,221,200,0.3)] transition-all h-12 px-7 rounded-none group cursor-pointer"
            >
              <a href="#work">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            {/* Subtle Borderless Secondary Button */}
            <Button
              asChild
              variant="ghost"
              className="text-[#E9DDC8] hover:text-[#8FD3C7] font-semibold tracking-wider h-12 px-6 rounded-none group cursor-pointer border-none"
            >
              <a href="#contact">
                Let&apos;s Talk
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>

            {/* WhatsApp Contact Button */}
            <Button
              asChild
              variant="mint"
              className="h-12 px-6 rounded-none group cursor-pointer"
            >
              <a
                href={personalDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Muneeb on WhatsApp"
              >
                <FaWhatsapp className="mr-2 h-4 w-4 text-base" />
                WhatsApp Muneeb
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: 3D Interactive Profile Flip Card */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 3D Flip Card Container */}
          <div
            tabIndex={0}
            role="button"
            aria-label="Profile card. Auto flips every 5 seconds. Hover or press Enter to flip for bio details."
            onClick={handleCardClick}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="perspective-1000 w-full max-w-md aspect-[4/5] relative cursor-pointer group focus:outline-none focus:ring-1 focus:ring-[#8FD3C7]"
          >
            <div
              className={`w-full h-full relative transition-transform duration-700 transform-style-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* FRONT OF PROFILE CARD */}
              <div className="absolute inset-0 w-full h-full bg-[#111917] p-2 teal-glow shadow-2xl overflow-hidden backface-hidden">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={personalDetails.portraitImage}
                    alt="Muneeb - Video Editor & Social Media Expert"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top grayscale-[10%] contrast-105 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-transparent to-transparent opacity-80" />

                  {/* Corner Accent Markers */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#8FD3C7]" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#8FD3C7]" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#8FD3C7]" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#8FD3C7]" />

                  {/* Top Right: 5+ YEARS Experience Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-[#0B0F0E]/90 backdrop-blur-md px-3 py-1.5 border border-[#8FD3C7]/40 shadow-xl flex items-center space-x-1.5">
                    <Award className="h-3.5 w-3.5 text-[#8FD3C7]" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#E9DDC8]">
                      5+ Years Exp
                    </span>
                  </div>

                  {/* Top Left: Flip Indicator */}
                  <div className="absolute top-4 left-4 z-20 bg-[#0B0F0E]/80 backdrop-blur-md px-2.5 py-1 flex items-center space-x-1 text-[10px] uppercase tracking-wider text-[#8FD3C7]">
                    <RefreshCw className="h-3 w-3 animate-spin" />
                    <span>Auto Flip</span>
                  </div>

                  {/* Front Bottom-Left Overlay Details (Name completely un-obscured) */}
                  <div className="absolute bottom-6 left-6 z-20 text-left space-y-1">
                    <p className="text-xs uppercase tracking-widest text-[#8FD3C7] font-bold">
                      {personalDetails.fullTitle}
                    </p>
                    <h3 className="text-2xl font-black uppercase text-[#F7F4ED]">
                      MUNEEB<span className="text-[#8FD3C7]">.</span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* BACK OF PROFILE CARD (NO BUTTONS AS REQUESTED) */}
              <div className="absolute inset-0 w-full h-full bg-[#111917] p-8 flex flex-col justify-between text-left rotate-y-180 backface-hidden teal-glow shadow-2xl border-t-2 border-[#8FD3C7]">
                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="flex items-center justify-between border-b border-[rgba(143,211,199,0.12)] pb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-[#8FD3C7]">
                      Professional Profile
                    </span>
                    <Badge variant="mint" className="text-[10px] border-none font-bold">
                      5+ YEARS EXP
                    </Badge>
                  </div>

                  {/* Bio Paragraph */}
                  <p className="text-xs sm:text-sm text-[#A9B2AE] leading-relaxed">
                    Social & Digital Media Professional from Lahore specializing in video production, content management, social strategy, and audience growth across digital platforms.
                  </p>

                  {/* Education & Skill Highlights */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2 text-xs text-[#E9DDC8]">
                      <GraduationCap className="h-4 w-4 text-[#8FD3C7] shrink-0 mt-0.5" />
                      <span>
                        ICS Physics (Punjab Group of Colleges) &amp; Dankash Institute Certified
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <p className="text-[11px] uppercase tracking-wider text-[#E9DDC8] font-bold">
                        Core Competencies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Social Management",
                          "Content Strategy",
                          "Audience Engagement",
                          "Video Production",
                          "Performance Analysis",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#8FD3C7] bg-[#1F7A70]/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Back Footer (Clean text signature, no buttons) */}
                <div className="pt-4 border-t border-[rgba(143,211,199,0.12)] text-xs text-[#A9B2AE] flex items-center justify-between">
                  <span className="uppercase tracking-widest font-bold text-[#E9DDC8]">
                    MUNEEB<span className="text-[#8FD3C7]">.</span>
                  </span>
                  <span className="uppercase tracking-wider text-[10px]">
                    Lahore, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Label Badges (Desktop) — Positioned on Top-Left & Bottom-Right to avoid hiding name overlay! */}
            <div className="absolute -top-4 -left-4 sm:-left-6 z-30 pointer-events-none">
              <div className="p-3 bg-[#0B0F0E]/90 backdrop-blur-md shadow-xl flex items-center space-x-3">
                <div className="p-1.5 bg-[#1F7A70]/30 text-[#8FD3C7]">
                  <Video className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#A9B2AE]">Focus</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E9DDC8]">Video Editing</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 sm:-right-6 z-30 pointer-events-none -translate-y-1/2">
              <div className="p-3 bg-[#0B0F0E]/90 backdrop-blur-md shadow-xl flex items-center space-x-3">
                <div className="p-1.5 bg-[#1F7A70]/30 text-[#8FD3C7]">
                  <Share2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#A9B2AE]">Reach</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E9DDC8]">Social Media</p>
                </div>
              </div>
            </div>

            {/* BOTTOM RIGHT FLOATING BADGE (Safe from bottom-left name watermark) */}
            <div className="absolute -bottom-4 right-4 sm:right-6 z-30 pointer-events-none">
              <div className="p-3 bg-[#0B0F0E]/90 backdrop-blur-md shadow-xl flex items-center space-x-3">
                <div className="p-1.5 bg-[#1F7A70]/30 text-[#8FD3C7]">
                  <Lightbulb className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#A9B2AE]">Vision</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E9DDC8]">Content Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
