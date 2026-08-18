"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { trustOrganizations } from "@/data/portfolio";

export function TrustStrip() {
  return (
    <section className="py-12 bg-[#0B0F0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="md:w-1/3">
            <p className="text-xs uppercase tracking-widest text-[#8FD3C7] font-semibold mb-1">
              Professional Footprint
            </p>
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-[#F7F4ED]">
              Organizations &amp; Experience
            </h2>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {trustOrganizations.map((org, index) => (
              <motion.div
                key={org.name}
                className="p-5 bg-[#111917] shadow-lg hover:shadow-2xl hover:bg-[#15201d] border-none transition-all duration-300 group flex flex-col justify-between rounded-none"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Logo Image: Always preserves original colors, zero grayscale/invert filters */}
                <div className="relative h-12 w-28 mb-3 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    fill
                    className="object-contain object-left pointer-events-none"
                  />
                </div>
                <div>
                  {/* Scoped Title Text: Always stays crisp white #F7F4ED without hover color shift */}
                  <p className="text-sm font-black uppercase tracking-wider text-[#F7F4ED] transition-none">
                    {org.name}
                  </p>
                  <p className="text-xs text-[#A9B2AE] mt-0.5">
                    {org.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
