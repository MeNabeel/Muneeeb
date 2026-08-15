"use client";

import React from "react";

interface MarqueeProps {
  words: string[];
  reverse?: boolean;
  className?: string;
}

export function Marquee({ words, reverse = false, className = "" }: MarqueeProps) {
  // Duplicate word array to create a seamless infinite loop
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <div className={`w-full overflow-hidden bg-[#111917] border-y border-[rgba(143,211,199,0.18)] py-4 select-none ${className}`}>
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {repeatedWords.map((word, idx) => (
          <div
            key={`${word}-${idx}`}
            className="flex items-center space-x-8 px-4"
          >
            <span
              className={`text-xl md:text-3xl font-black uppercase tracking-widest ${
                idx % 2 === 0 ? "text-[#E9DDC8]" : "text-[#8FD3C7]"
              }`}
            >
              {word}
            </span>
            <span className="text-[#1F7A70] font-black text-xl md:text-2xl">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
