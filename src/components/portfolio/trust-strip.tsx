"use client";

import React from "react";
import { motion } from "framer-motion";
import { trustOrganizations } from "@/data/portfolio";

export function TrustStrip() {
  return (
    <section className="py-12 bg-[#0B0F0E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="md:w-1/3">
            <p className="text-xs uppercase tracking-widest text-[#8FD3C7] font-semibold mb-1">
              Professional Footprint
            </p>
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-[#F7F4ED]">
              Organizations & Networks
            </h2>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {trustOrganizations.map((org, index) => (
              <motion.div
                key={org.name}
                className="p-5 bg-[#111917] shadow-lg hover:shadow-2xl border-none transition-all group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-sm font-black uppercase tracking-wider text-[#E9DDC8] group-hover:text-[#8FD3C7] transition-colors">
                  {org.name}
                </p>
                <p className="text-xs text-[#A9B2AE] mt-1">
                  {org.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
