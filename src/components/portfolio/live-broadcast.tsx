"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Radio } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

const LIVE_YOUTUBE_URL = "https://www.youtube.com/live/idF5EYaKyf0?si=IkU2pJSy01oEFro-";

export function LiveBroadcast() {
  return (
    <motion.aside
      aria-label="YouTube Live Telecast Managed by Muneeb"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-none"
    >
      <motion.a
        href={LIVE_YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch YouTube Live telecast managed by Muneeb"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-auto flex items-center space-x-3 bg-[#111917]/95 backdrop-blur-md p-3 sm:p-3.5 border border-[#8FD3C7]/40 shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:border-[#8FD3C7] hover:bg-[#15201d] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#8FD3C7] focus:ring-offset-2 focus:ring-offset-[#0B0F0E]"
      >
        {/* Pulsing Red LIVE Indicator Badge */}
        <div className="relative flex items-center justify-center shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1F7A70]/30 text-red-500 flex items-center justify-center relative">
            <Radio className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 animate-rec" />
          </div>
        </div>

        {/* Text Details (Desktop Full Card / Mobile Compact Pill) */}
        <div className="text-left flex flex-col justify-center pr-1">
          <div className="flex items-center space-x-1.5">
            <span className="px-1.5 py-0.5 bg-red-600/90 text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-white uppercase rounded-[1px]">
              LIVE
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E9DDC8] flex items-center">
              YouTube Live
              <FaYoutube className="ml-1.5 h-3 w-3 text-red-500 inline" />
            </span>
          </div>

          <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8FD3C7] font-semibold mt-0.5">
            Managed by Muneeb
          </p>
        </div>

        {/* External Link Arrow Icon */}
        <div className="p-1 text-[#A9B2AE] group-hover:text-[#8FD3C7] transition-colors shrink-0">
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </motion.a>
    </motion.aside>
  );
}
