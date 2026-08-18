"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalDetails } from "@/data/portfolio";
import { FilmStripSideBar } from "./studio-decorations";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0B0F0E] relative overflow-hidden film-grain">
      {/* Film Strip Side Accents */}
      <div className="absolute left-2 top-0 bottom-0 py-8 hidden lg:flex items-center">
        <FilmStripSideBar />
      </div>
      <div className="absolute right-2 top-0 bottom-0 py-8 hidden lg:flex items-center">
        <FilmStripSideBar />
      </div>

      {/* Studio Lighting Beam Accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#1F7A70]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2">
            <Badge variant="mint" className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 border-none">
              Background &amp; Story
            </Badge>
            <span className="text-xs font-mono text-[#8FD3C7] opacity-60">// SEQ: 02</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F7F4ED] leading-tight">
            {personalDetails.aboutHeading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A9B2AE] leading-relaxed">
            From computer science fundamentals in Lahore to content management at leading digital broadcast networks.
          </p>
        </div>

        {/* 4 Story Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Academic Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-[#111917] border-none shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all p-6 sm:p-8 relative overflow-hidden group h-full flex flex-col justify-between rounded-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8FD3C7] uppercase tracking-widest font-bold">
                    01. Education
                  </span>
                  <div className="p-2 bg-[#1F7A70]/20 text-[#8FD3C7] group-hover:bg-[#8FD3C7] group-hover:text-[#0B0F0E] transition-colors">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase text-[#E9DDC8]">
                  ICS Physics &amp; Media Certification
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-[#A9B2AE]">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#8FD3C7] font-bold mt-0.5">•</span>
                    <span>Completed Matriculation in Lahore, Pakistan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#8FD3C7] font-bold mt-0.5">•</span>
                    <span>Intermediate in Computer Science (ICS Physics) — Punjab Group of Colleges (2019–2021)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#8FD3C7] font-bold mt-0.5">•</span>
                    <span>Social Media Marketing &amp; Management Certification — Dankash Institute</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-[rgba(143,211,199,0.08)] flex items-center justify-between text-[11px] text-[#A9B2AE]">
                <span>PGC Lahore &amp; Dankash</span>
                <span className="font-mono text-[#8FD3C7]">2019 — 2021+</span>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Skill Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-[#111917] border-none shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all p-6 sm:p-8 relative overflow-hidden group h-full flex flex-col justify-between rounded-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8FD3C7] uppercase tracking-widest font-bold">
                    02. Skill Specialization
                  </span>
                  <div className="p-2 bg-[#1F7A70]/20 text-[#8FD3C7] group-hover:bg-[#8FD3C7] group-hover:text-[#0B0F0E] transition-colors">
                    <Compass className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase text-[#E9DDC8]">
                  Digital Media &amp; Production Stack
                </h3>

                <p className="text-xs sm:text-sm text-[#A9B2AE] leading-relaxed">
                  Specialized in multi-platform publishing, headline news video editing, thumbnail graphics, audience retention strategies, and search engine optimization across digital channels.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {[
                    "Video Editing",
                    "Content Strategy",
                    "YouTube SEO",
                    "Thumbnail Design",
                    "Reels & Shorts",
                  ].map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-[#0B0F0E] text-[10px] font-mono text-[#8FD3C7] border border-[rgba(143,211,199,0.15)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[rgba(143,211,199,0.08)] flex items-center justify-between text-[11px] text-[#A9B2AE]">
                <span>Practical Mastery</span>
                <span className="font-mono text-[#8FD3C7]">5+ Years</span>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Career Progression (EXACT USER SPECIFICATION) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-[#111917] border-none shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all p-6 sm:p-8 relative overflow-hidden group h-full flex flex-col justify-between rounded-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8FD3C7] uppercase tracking-widest font-bold">
                    03. Career Progression
                  </span>
                  <div className="p-2 bg-[#1F7A70]/20 text-[#8FD3C7] group-hover:bg-[#8FD3C7] group-hover:text-[#0B0F0E] transition-colors">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase text-[#E9DDC8]">
                  Professional Roles
                </h3>

                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8FD3C7]">
                  Dankash (6m) · Lahore Rang (2y) · Aik News (2m) · Lahore Rang (~1y)
                </p>

                <p className="text-xs sm:text-sm text-[#A9B2AE] leading-relaxed">
                  Built hands-on experience starting from intern to full Content Executive across major digital media networks.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[rgba(143,211,199,0.08)] flex items-center justify-between text-[11px] text-[#A9B2AE]">
                <span>Growth Path</span>
                <span className="font-mono text-[#8FD3C7]">Intern → Executive</span>
              </div>
            </Card>
          </motion.div>

          {/* Card 4: Current Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-[#111917] border-none shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all p-6 sm:p-8 relative overflow-hidden group h-full flex flex-col justify-between rounded-none border-l-2 border-[#8FD3C7]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8FD3C7] uppercase tracking-widest font-bold">
                    04. Current Expertise
                  </span>
                  <div className="p-2 bg-[#8FD3C7] text-[#0B0F0E] transition-colors">
                    <Award className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase text-[#E9DDC8]">
                  Content Executive — Lahore Rang
                </h3>

                <p className="text-xs sm:text-sm text-[#A9B2AE] leading-relaxed">
                  Managing digital content execution, social strategy, YouTube channel curation, and video production workflows at Nai Baat Media Network / Lahore Rang.
                </p>

                <div className="p-3 bg-[#0B0F0E] border border-[rgba(143,211,199,0.2)] text-xs text-[#E9DDC8] space-y-1">
                  <p className="font-bold text-[#8FD3C7] uppercase tracking-wider text-[10px]">
                    Current Role Scope
                  </p>
                  <p className="text-[#A9B2AE] text-[11px]">
                    Content Management · Video Editing · Strategy · Engagement
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[rgba(143,211,199,0.08)] flex items-center justify-between text-[11px] text-[#A9B2AE]">
                <span>Lahore Rang</span>
                <span className="font-mono text-[#8FD3C7]">Active Position</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
