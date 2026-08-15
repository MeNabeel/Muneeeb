"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, CheckCircle2 } from "lucide-react";
import { personalDetails } from "@/data/portfolio";

export function About() {
  const journeyTimeline = [
    {
      step: "01. Education",
      title: "ICS Physics (2019–2021)",
      institution: "Punjab Group of Colleges, Lahore",
      desc: "Completed Matriculation followed by Intermediate in Computer Science with a focus on physics and modern computing principles.",
      icon: <GraduationCap className="h-4 w-4" />,
    },
    {
      step: "02. Skill Development",
      title: "Social Media Certification",
      institution: "Dankash Institute",
      desc: "Specialized training in Social Media Marketing & Management, mastering digital content distribution and campaign analytics.",
      icon: <Award className="h-4 w-4" />,
    },
    {
      step: "03. Career Progression",
      title: "Professional Roles",
      institution: "Dankash (6m) · Lahore Rang (2y) · Aik News (2m) · Lahore Rang (~1y)",
      desc: "Built hands-on experience starting from intern to full Content Executive across major digital media networks.",
      icon: <Briefcase className="h-4 w-4" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#111917] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Main Personal Journey Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-[#8FD3C7] font-semibold block">
              Personal &amp; Professional Journey
            </span>

            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#F7F4ED] leading-none">
              ABOUT <span className="text-[#8FD3C7]">MUNEEB.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#A9B2AE] leading-relaxed">
              {personalDetails.aboutStory.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Journey Milestone Blocks */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {journeyTimeline.map((item) => (
              <div
                key={item.step}
                className="p-5 bg-[#0B0F0E] shadow-xl border-none space-y-2 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#8FD3C7] font-bold">
                    {item.step}
                  </span>
                  <div className="p-1.5 bg-[#1F7A70]/20 text-[#8FD3C7] group-hover:bg-[#8FD3C7] group-hover:text-[#0B0F0E] transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold uppercase text-[#E9DDC8]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8FD3C7] font-semibold">
                  {item.institution}
                </p>
                <p className="text-xs text-[#A9B2AE] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Clean Expertise List Below Narrative */}
        <div className="pt-8 border-t border-[rgba(143,211,199,0.1)] space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#8FD3C7]">
            Core Professional Expertise
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {personalDetails.expertiseAreas.map((area) => (
              <div
                key={area}
                className="p-3.5 bg-[#0B0F0E] text-center shadow-md hover:shadow-xl transition-all border-none flex flex-col items-center justify-center space-y-2 group"
              >
                <CheckCircle2 className="h-4 w-4 text-[#8FD3C7] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-[#E9DDC8] uppercase tracking-wider leading-tight">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
