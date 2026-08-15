"use client";

import React from "react";
import { Play, Camera, Globe, Video, Share2, MessageCircle, Mail } from "lucide-react";
import { socialLinks, SocialLink } from "@/data/portfolio";

interface SocialIconsProps {
  className?: string;
  iconSize?: string; // e.g. "h-5 w-5"
  showLabels?: boolean;
}

export function SocialIcons({
  className = "",
  iconSize = "h-5 w-5",
  showLabels = false,
}: SocialIconsProps) {
  const getIcon = (iconName: SocialLink["iconName"]) => {
    switch (iconName) {
      case "Play":
        return <Play className={`${iconSize} fill-current ml-0.5`} />;
      case "Camera":
        return <Camera className={iconSize} />;
      case "Globe":
        return <Globe className={iconSize} />;
      case "Video":
        return <Video className={iconSize} />;
      case "Share2":
        return <Share2 className={iconSize} />;
      case "MessageCircle":
        return <MessageCircle className={iconSize} />;
      case "Mail":
        return <Mail className={iconSize} />;
      default:
        return <Share2 className={iconSize} />;
    }
  };

  return (
    <div className={`flex items-center space-x-5 ${className}`}>
      {socialLinks.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target={platform.url.startsWith("mailto:") ? "_self" : "_blank"}
          rel={platform.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={platform.ariaLabel}
          title={platform.name}
          className="text-[#A9B2AE] hover:text-[#8FD3C7] transition-all duration-300 transform hover:scale-115 hover:-translate-y-1 inline-flex items-center space-x-2 border-none outline-none focus-visible:text-[#8FD3C7]"
        >
          {getIcon(platform.iconName)}
          {showLabels && (
            <span className="text-xs uppercase tracking-wider font-semibold">
              {platform.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
