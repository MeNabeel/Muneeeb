"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#111917] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 border-b border-[rgba(143,211,199,0.1)] pb-8">
          <span className="text-xs uppercase tracking-widest text-[#8FD3C7] font-semibold mb-2 block">
            Technical Stack & Ecosystems
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F7F4ED]">
            TOOLS OF THE <span className="text-[#8FD3C7]">CRAFT.</span>
          </h2>
          <p className="text-base text-[#A9B2AE] mt-2 max-w-xl">
            High-performance digital creation tools, graphic prepress suites, and platform management ecosystems.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillsData.map((category, catIdx) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center space-x-3">
                {catIdx === 0 ? (
                  <Wrench className="h-5 w-5 text-[#8FD3C7]" />
                ) : (
                  <Globe className="h-5 w-5 text-[#8FD3C7]" />
                )}
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#E9DDC8]">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                  >
                    <Card className="p-6 bg-[#0B0F0E] border-none shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between h-full rounded-none">
                      {/* Top Accent Line Reveal on Hover */}
                      <div className="w-0 group-hover:w-full h-[2px] bg-[#8FD3C7] transition-all duration-500 absolute top-0 left-0" />

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-bold uppercase tracking-tight text-[#F7F4ED] group-hover:text-[#8FD3C7] group-hover:scale-[1.02] transition-transform duration-300 origin-left">
                            {skill.name}
                          </h4>
                          <Badge variant="outline" className="text-[9px] border-none bg-[#1F7A70]/20 text-[#8FD3C7]">
                            {skill.category}
                          </Badge>
                        </div>

                        <p className="text-xs text-[#A9B2AE] group-hover:text-[#F7F4ED] transition-colors leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
