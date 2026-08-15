"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Video, Share2, Lightbulb, Palette, Globe, TrendingUp } from "lucide-react";
import { personalDetails } from "@/data/portfolio";

export function About() {
  const pillarIcons = [
    { name: "Video Editing", icon: <Video className="h-5 w-5" /> },
    { name: "Social Media Management", icon: <Share2 className="h-5 w-5" /> },
    { name: "Content Strategy", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Graphic Design", icon: <Palette className="h-5 w-5" /> },
    { name: "YouTube Ecosystem", icon: <Globe className="h-5 w-5" /> },
    { name: "Audience Growth", icon: <TrendingUp className="h-5 w-5" /> },
  ];

  return (
    <section id="about" className="py-24 bg-[#111917] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Editorial Copy */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-[#8FD3C7] font-semibold block">
              Editorial Overview
            </span>

            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#F7F4ED] leading-none">
              {personalDetails.aboutHeading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#A9B2AE] leading-relaxed">
              {personalDetails.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[rgba(143,211,199,0.1)] grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalDetails.expertiseAreas.map((area) => (
                <div key={area} className="flex items-center space-x-3 text-xs sm:text-sm text-[#E9DDC8] uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4 text-[#8FD3C7] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Strategic Pillars Matrix (Borderless cards) */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {pillarIcons.map((pillar) => (
              <div
                key={pillar.name}
                className="p-6 bg-[#0B0F0E] shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all group flex flex-col justify-between h-36 border-none"
              >
                <div className="p-2.5 bg-[#1F7A70]/20 text-[#8FD3C7] w-fit group-hover:bg-[#8FD3C7] group-hover:text-[#0B0F0E] transition-colors">
                  {pillar.icon}
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E9DDC8] group-hover:text-[#8FD3C7] transition-colors leading-tight">
                  {pillar.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
