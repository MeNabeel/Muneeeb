"use client";

import React from "react";
import Image from "next/image";
import { channelLogos } from "@/data/portfolio";

export function ChannelMarquee() {
  // Duplicate logos array to ensure continuous seamless infinite scrolling
  const repeatedLogos1 = [...channelLogos, ...channelLogos, ...channelLogos, ...channelLogos, ...channelLogos];
  const repeatedLogos2 = [...channelLogos, ...channelLogos, ...channelLogos, ...channelLogos, ...channelLogos].reverse();

  return (
    <div className="w-full bg-[#111917] py-10 border-t border-[rgba(143,211,199,0.12)] space-y-6 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-4">
        <span className="text-[11px] uppercase tracking-widest text-[#8FD3C7] font-bold block">
          Broadcasting Networks &amp; Media Partners
        </span>
        <h3 className="text-lg font-black uppercase tracking-wider text-[#F7F4ED] mt-1">
          CHANNELS &amp; NETWORKS
        </h3>
      </div>

      {/* STRIP 1: Moving Left */}
      <div className="w-full overflow-hidden py-2 bg-[#0B0F0E]/40 border-y border-[rgba(143,211,199,0.06)]">
        <div className="animate-marquee flex items-center space-x-16">
          {repeatedLogos1.map((item, idx) => (
            <div
              key={`logo1-${item.name}-${idx}`}
              className="flex items-center space-x-4 px-6 shrink-0 group cursor-pointer"
            >
              <div className="relative h-12 w-28 sm:h-14 sm:w-36 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(143,211,199,0.2)]"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F7F4ED] transition-colors hidden sm:inline-block">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* STRIP 2: Moving Right */}
      <div className="w-full overflow-hidden py-2 bg-[#0B0F0E]/40 border-b border-[rgba(143,211,199,0.06)]">
        <div className="animate-marquee-reverse flex items-center space-x-16">
          {repeatedLogos2.map((item, idx) => (
            <div
              key={`logo2-${item.name}-${idx}`}
              className="flex items-center space-x-4 px-6 shrink-0 group cursor-pointer"
            >
              <div className="relative h-12 w-28 sm:h-14 sm:w-36 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(143,211,199,0.2)]"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F7F4ED] transition-colors hidden sm:inline-block">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
