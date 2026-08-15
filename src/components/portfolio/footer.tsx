"use client";

import React from "react";
import { Play, Camera, Globe, Video, Share2 } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Play":
        return <Play className="h-4 w-4 fill-current ml-0.5" />;
      case "Camera":
        return <Camera className="h-4 w-4" />;
      case "Globe":
        return <Globe className="h-4 w-4" />;
      case "Video":
        return <Video className="h-4 w-4" />;
      case "Share2":
        return <Share2 className="h-4 w-4" />;
      default:
        return <Share2 className="h-4 w-4" />;
    }
  };

  return (
    <footer className="py-12 bg-[#0B0F0E] border-t border-[rgba(143,211,199,0.15)] text-xs text-[#A9B2AE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="flex items-center space-x-2">
          <a href="#" className="text-xl font-black tracking-tighter text-[#F7F4ED]">
            MUNEEB<span className="text-[#8FD3C7]">.</span>
          </a>
        </div>

        {/* Center: Title */}
        <div className="uppercase tracking-widest text-[#E9DDC8] font-semibold text-center">
          Social & Digital Media Expert
        </div>

        {/* Right: Social Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-3">
            {socialLinks.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Muneeb on ${platform.name}`}
                className="p-2 border border-[rgba(143,211,199,0.15)] text-[#A9B2AE] hover:text-[#8FD3C7] hover:border-[#8FD3C7] transition-colors"
              >
                {getIcon(platform.iconName)}
              </a>
            ))}
          </div>

          <div className="uppercase tracking-wider text-[11px] text-[#A9B2AE]">
            &copy; {currentYear} MUNEEB. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
