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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-none"
    >
      <motion.a
        href={LIVE_YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch YouTube Live telecast managed by Muneeb"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-auto flex items-center space-x-2 sm:space-x-2.5 bg-[#111917]/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 border border-[#8FD3C7]/30 shadow-lg hover:border-[#8FD3C7]/80 hover:bg-[#15201d] opacity-65 hover:opacity-100 hover:shadow-[0_0_20px_rgba(143,211,199,0.3)] transition-all duration-300 group focus:outline-none focus:ring-1 focus:ring-[#8FD3C7] rounded-[1px] w-fit max-w-[165px] sm:max-w-none"
      >
        {/* Pulsing Red LIVE Dot */}
        <div className="relative flex items-center justify-center shrink-0">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-rec" />
        </div>

        {/* LIVE Text Tag */}
        <span className="px-1 py-0.2 bg-red-600/90 text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-white uppercase rounded-[1px] shrink-0">
          LIVE
        </span>

        {/* YouTube Live Label (Desktop Full / Mobile Compact Pill) */}
        <div className="flex items-center space-x-1 shrink-0">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E9DDC8]">
            YouTube <span className="hidden sm:inline">Live</span>
          </span>
          <FaYoutube className="h-3 w-3 text-red-500 inline shrink-0 ml-0.5" />
        </div>

        {/* Desktop-only Managed by Muneeb Tag */}
        <span className="hidden sm:inline text-[9px] uppercase tracking-widest text-[#8FD3C7] font-semibold border-l border-[rgba(143,211,199,0.2)] pl-2">
          Managed by Muneeb
        </span>

        {/* External Link Arrow Icon */}
        <ExternalLink className="h-3 w-3 text-[#A9B2AE] group-hover:text-[#8FD3C7] transition-colors shrink-0 hidden sm:inline" />
      </motion.a>
    </motion.aside>
  );
}
