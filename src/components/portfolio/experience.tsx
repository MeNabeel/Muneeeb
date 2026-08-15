"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { experienceTimeline } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0B0F0E] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 border-b border-[rgba(143,211,199,0.15)] pb-8">
          <span className="text-xs uppercase tracking-widest text-[#8FD3C7] font-semibold mb-2 block">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F7F4ED]">
            PROFESSIONAL <span className="text-[#8FD3C7]">EXPERIENCE.</span>
          </h2>
          <p className="text-base text-[#A9B2AE] mt-2 max-w-xl">
            Key editorial, broadcast, and social media leadership roles across tier-1 Pakistani news networks and print design studios.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[1px] bg-[rgba(143,211,199,0.2)] -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experienceTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* Timeline Point Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10 hidden md:flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#111917] border-2 border-[#8FD3C7] flex items-center justify-center shadow-[0_0_15px_rgba(143,211,199,0.4)]">
                      <div className="w-2.5 h-2.5 bg-[#8FD3C7] rounded-full" />
                    </div>
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full md:w-[calc(50%-3rem)]">
                    <Card className="p-6 md:p-8 bg-[#111917] border border-[rgba(143,211,199,0.18)] hover:border-[#8FD3C7] transition-all duration-300 group hover:shadow-[0_0_30px_rgba(143,211,199,0.1)]">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center space-x-2 text-xs font-bold text-[#8FD3C7] uppercase tracking-wider">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{item.period}</span>
                        </div>
                        {item.isCurrent && (
                          <Badge variant="mint" className="text-[10px]">
                            Present Role
                          </Badge>
                        )}
                      </div>

                      {/* Company & Role */}
                      <h3 className="text-xl md:text-2xl font-black uppercase text-[#E9DDC8] tracking-tight group-hover:text-[#8FD3C7] transition-colors mb-1">
                        {item.role}
                      </h3>

                      <div className="flex items-center space-x-2 text-sm text-[#A9B2AE] font-semibold uppercase tracking-wider mb-6">
                        <Building2 className="h-4 w-4 text-[#1F7A70]" />
                        <span>{item.company}</span>
                      </div>

                      {/* Responsibilities List */}
                      <div className="space-y-2.5 pt-4 border-t border-[rgba(143,211,199,0.1)]">
                        {item.responsibilities.map((resp, i) => (
                          <div
                            key={i}
                            className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#A9B2AE] leading-relaxed"
                          >
                            <ChevronRight className="h-4 w-4 text-[#8FD3C7] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
