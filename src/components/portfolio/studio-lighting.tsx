"use client";

import React, { useEffect, useState } from "react";

export function StudioLighting() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Interactive Subtle Cursor Spotlight Beam */}
      {mounted && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-out opacity-20 hidden md:block"
          style={{
            transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
            background:
              "radial-gradient(circle, rgba(143, 211, 199, 0.15) 0%, rgba(31, 122, 112, 0.05) 45%, transparent 70%)",
          }}
        />
      )}

      {/* Primary Ambient Studio Spotlight (Teal) */}
      <div className="absolute -top-40 left-1/3 w-[800px] h-[800px] bg-[#1F7A70]/15 rounded-full blur-[180px] animate-studio-pulse" />

      {/* Secondary Soft Studio Spotlight (Warm Beige) */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-[#E9DDC8]/5 rounded-full blur-[160px] animate-studio-pulse" style={{ animationDelay: "-4s" }} />

      {/* Subtle Studio Light Beam Lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#8FD3C7]/10 to-transparent opacity-40" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#8FD3C7]/10 to-transparent opacity-40" />
    </div>
  );
}
