"use client";

import React from "react";

interface EditorTimelineProps {
  timecode?: string;
  className?: string;
}

export function EditorTimeline({
  timecode = "00:04:15:18",
  className = "",
}: EditorTimelineProps) {
  return (
    <div
      className={`w-full bg-[#111917]/90 border-y border-[rgba(143,211,199,0.12)] p-4 font-mono text-xs select-none relative overflow-hidden backdrop-blur-md ${className}`}
    >
      {/* Top Ruler & Timecode */}
      <div className="flex items-center justify-between border-b border-[rgba(143,211,199,0.1)] pb-2 mb-3 text-[10px] uppercase tracking-widest text-[#A9B2AE]">
        <div className="flex items-center space-x-3">
          <span className="text-[#8FD3C7] font-bold">NLE TIMELINE</span>
          <span className="text-[#E9DDC8]">SEQUENCE_01</span>
        </div>
        <div className="flex items-center space-x-2 text-[#8FD3C7] font-bold">
          <span className="w-2 h-2 rounded-full bg-[#8FD3C7] animate-rec" />
          <span>{timecode}</span>
        </div>
      </div>

      {/* Track Layout Container */}
      <div className="space-y-2 relative">
        {/* Playhead Vertical Line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-[#8FD3C7] z-20 shadow-[0_0_10px_#8FD3C7] animate-playhead">
          <div className="w-2.5 h-2 bg-[#8FD3C7] -translate-x-[4px] -translate-y-1 polygon-triangle" />
        </div>

        {/* TRACK 1: VIDEO */}
        <div className="flex items-center space-x-3">
          <span className="w-12 text-[10px] font-bold text-[#8FD3C7] uppercase shrink-0">
            V1: VID
          </span>
          <div className="flex-1 h-4 bg-[#0B0F0E] relative overflow-hidden flex items-center px-1 space-x-1 border border-[rgba(143,211,199,0.08)]">
            <div className="h-2.5 w-[25%] bg-[#1F7A70]/60 border-r border-[#8FD3C7]" />
            <div className="h-2.5 w-[40%] bg-[#1F7A70]/80 border-r border-[#8FD3C7]" />
            <div className="h-2.5 w-[20%] bg-[#1F7A70]/50 border-r border-[#8FD3C7]" />
          </div>
        </div>

        {/* TRACK 2: AUDIO */}
        <div className="flex items-center space-x-3">
          <span className="w-12 text-[10px] font-bold text-[#E9DDC8] uppercase shrink-0">
            A1: AUD
          </span>
          <div className="flex-1 h-4 bg-[#0B0F0E] relative overflow-hidden flex items-center px-1 space-x-1 border border-[rgba(143,211,199,0.08)]">
            <div className="h-2.5 w-[30%] bg-[#E9DDC8]/30 border-r border-[#E9DDC8]" />
            <div className="h-2.5 w-[35%] bg-[#E9DDC8]/40 border-r border-[#E9DDC8]" />
            <div className="h-2.5 w-[15%] bg-[#E9DDC8]/20 border-r border-[#E9DDC8]" />
          </div>
        </div>

        {/* TRACK 3: MOTION FX */}
        <div className="flex items-center space-x-3">
          <span className="w-12 text-[10px] font-bold text-[#8FD3C7] uppercase shrink-0">
            FX: MOT
          </span>
          <div className="flex-1 h-4 bg-[#0B0F0E] relative overflow-hidden flex items-center px-1 space-x-1 border border-[rgba(143,211,199,0.08)]">
            <div className="h-2.5 w-[15%] bg-[#8FD3C7]/40 border-r border-[#8FD3C7]" />
            <div className="h-2.5 w-[50%] bg-[#8FD3C7]/60 border-r border-[#8FD3C7]" />
          </div>
        </div>
      </div>
    </div>
  );
}
