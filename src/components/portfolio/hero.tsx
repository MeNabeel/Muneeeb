"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Video, Share2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { personalDetails } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden film-grain">
      {/* Editorial Background Text Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[16vw] font-black tracking-widest text-[#8FD3C7]/[0.025] uppercase whitespace-nowrap z-0"
        aria-hidden="true"
      >
        CREATE
      </div>

      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#1F7A70]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#8FD3C7]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Thin Editorial Accent Lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-[rgba(143,211,199,0.06)] hidden lg:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-[rgba(143,211,199,0.06)] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Bio */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label Badge */}
          <div>
            <Badge variant="default" className="px-3 py-1 text-[11px] tracking-widest">
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

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-[#A9B2AE] max-w-xl leading-relaxed">
            {personalDetails.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild variant="mint" size="lg" className="group">
              <a href="#work">
                View My Work
                <ArrowDownRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="group">
              <a href="#contact">
                Let&apos;s Talk
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Cinematic Media Frame & Floating Badges */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Media Frame Container */}
          <div className="relative w-full max-w-md aspect-[4/5] bg-[#111917] p-3 border border-[rgba(143,211,199,0.25)] teal-glow shadow-2xl overflow-hidden group">
            {/* Image Overlay lighting */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={personalDetails.portraitImage}
                alt="Muneeb - Video Editor & Social Media Expert"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top grayscale-[20%] contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-transparent to-transparent opacity-60" />
            </div>

            {/* Corner Editorial Marks */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#8FD3C7]" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#8FD3C7]" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#8FD3C7]" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#8FD3C7]" />
          </div>

          {/* Floating Card 1: Video Editing */}
          <motion.div
            className="absolute -top-4 -left-4 sm:-left-8 z-20"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Card className="p-3 sm:p-4 bg-[#0B0F0E]/90 backdrop-blur-md border-[rgba(143,211,199,0.3)] shadow-xl flex items-center space-x-3">
              <div className="p-2 bg-[#1F7A70]/30 text-[#8FD3C7]">
                <Video className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#A9B2AE]">Focus</p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E9DDC8]">
                  Video Editing
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Floating Card 2: Social Media */}
          <motion.div
            className="absolute top-1/2 -right-4 sm:-right-8 z-20 -translate-y-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Card className="p-3 sm:p-4 bg-[#0B0F0E]/90 backdrop-blur-md border-[rgba(143,211,199,0.3)] shadow-xl flex items-center space-x-3">
              <div className="p-2 bg-[#1F7A70]/30 text-[#8FD3C7]">
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#A9B2AE]">Reach</p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E9DDC8]">
                  Social Media
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Floating Card 3: Content Strategy */}
          <motion.div
            className="absolute -bottom-6 left-6 sm:left-10 z-20"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <Card className="p-3 sm:p-4 bg-[#0B0F0E]/90 backdrop-blur-md border-[rgba(143,211,199,0.3)] shadow-xl flex items-center space-x-3">
              <div className="p-2 bg-[#1F7A70]/30 text-[#8FD3C7]">
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#A9B2AE]">Vision</p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E9DDC8]">
                  Content Strategy
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
