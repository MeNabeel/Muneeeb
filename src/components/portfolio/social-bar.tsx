"use client";

import React from "react";
import { Play, Camera, Globe, Video, Share2 } from "lucide-react";
import { socialLinks, SocialLink } from "@/data/portfolio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SocialBar() {
  const getIcon = (iconName: SocialLink["iconName"]) => {
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
    <TooltipProvider>
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center space-y-6">
        <div className="w-[1px] h-16 bg-[rgba(143,211,199,0.2)]" />

        <div className="flex flex-col space-y-4">
          {socialLinks.map((platform) => (
            <Tooltip key={platform.name}>
              <TooltipTrigger asChild>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Muneeb on ${platform.name}`}
                  className="p-3 border border-[rgba(143,211,199,0.15)] bg-[#0B0F0E]/80 backdrop-blur-sm text-[#A9B2AE] hover:text-[#8FD3C7] hover:border-[#8FD3C7] hover:bg-[#111917] transition-all duration-300 group"
                >
                  <span className="transition-transform group-hover:scale-110">
                    {getIcon(platform.iconName)}
                  </span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right">
                {platform.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        <div className="w-[1px] h-16 bg-[rgba(143,211,199,0.2)]" />
      </div>
    </TooltipProvider>
  );
}
