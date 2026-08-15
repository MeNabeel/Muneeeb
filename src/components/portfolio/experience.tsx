"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { experienceTimeline } from "@/data/portfolio";
import { FilmReelSvg } from "./studio-decorations";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#111917] relative overflow-hidden film-grain">
      {/* Background Film Reel Graphic */}
      <div className="absolute top-10 right-10 pointer-events-none hidden lg:block animate-lens-slow">
        <FilmReelSvg className="w-56 h-56 opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(143,211,199,0.1)] pb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8FD3C7] font-semibold mb-2 block">
              Professional Timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F7F4ED]">
              CAREER <span className="text-[#8FD3C7]">EXPERIENCE.</span>
            </h2>
          </div>

          <div className="flex items-center space-x-2 px-3 py-1 bg-[#0B0F0E] text-[10px] font-mono text-[#8FD3C7] border border-[rgba(143,211,199,0.15)]">
            <Clock className="h-3 w-3" />
            <span>SEQ_TIMELINE: 00:01:24:12</span>
          </div>
        </div>

        {/* Timeline Items List */}
        <div className="relative space-y-8 before:content-[''] before:absolute before:top-2 before:bottom-2 before:left-3 md:before:left-1/2 before:w-[2px] before:bg-[rgba(143,211,199,0.15)] before:-translate-x-1/2">
          {experienceTimeline.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.id}
                className="relative flex flex-col md:flex-row items-start md:items-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Timeline Dot Marker */}
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0B0F0E] border-2 border-[#8FD3C7] group-hover:bg-[#8FD3C7] group-hover:scale-125 transition-all duration-300 z-10" />

                {/* Content Box */}
                <div
                  className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                    isEven ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="p-6 bg-[#0B0F0E] shadow-xl hover:shadow-2xl border-none transition-all group-hover:bg-[#0B0F0E]/90 relative overflow-hidden">
                    {/* Timecode Badge */}
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#8FD3C7] bg-[#1F7A70]/20 px-2.5 py-1 inline-block mb-3">
                      {item.period}
                    </span>

                    <h3 className="text-xl font-bold uppercase text-[#E9DDC8]">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#8FD3C7] mt-1 mb-4">
                      {item.company}
                    </p>

                    <ul
                      className={`space-y-2 text-xs text-[#A9B2AE] ${
                        isEven ? "md:text-right" : "text-left"
                      }`}
                    >
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="leading-relaxed">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
