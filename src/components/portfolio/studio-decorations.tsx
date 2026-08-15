"use client";

import React from "react";

// Camera Lens Vector Graphic
export function CameraLensSvg({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#8FD3C7] opacity-20 pointer-events-none ${className}`}
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.1" />
      {/* Aperture Blades */}
      <path d="M50 15 L65 35" stroke="currentColor" strokeWidth="1" />
      <path d="M78 35 L68 58" stroke="currentColor" strokeWidth="1" />
      <path d="M72 68 L48 72" stroke="currentColor" strokeWidth="1" />
      <path d="M35 72 L28 48" stroke="currentColor" strokeWidth="1" />
      <path d="M22 42 L42 25" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// Film Reel Vector Graphic
export function FilmReelSvg({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#E9DDC8] opacity-15 pointer-events-none ${className}`}
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      {/* Reel Holes */}
      <circle cx="50" cy="23" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="73" cy="37" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="73" cy="63" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="77" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="27" cy="63" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="27" cy="37" r="8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Film Strip Vertical Border Accents
export function FilmStripSideBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col space-y-2 opacity-15 pointer-events-none select-none ${className}`}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-3 h-2 border border-[#8FD3C7] rounded-[1px] bg-[#8FD3C7]/10"
        />
      ))}
    </div>
  );
}

// Focus Brackets / Crop Marks Frame
export function FocusBrackets({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-10 ${className}`}>
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#8FD3C7]" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#8FD3C7]" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#8FD3C7]" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#8FD3C7]" />
    </div>
  );
}
