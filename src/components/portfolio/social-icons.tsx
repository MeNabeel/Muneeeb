"use client";

import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { socialLinks, SocialLink } from "@/data/portfolio";

interface SocialIconsProps {
  className?: string;
  iconSize?: string; // e.g. "text-lg" or "text-xl"
  showLabels?: boolean;
}

export function SocialIcons({
  className = "",
  iconSize = "text-lg",
  showLabels = false,
}: SocialIconsProps) {
  const getIcon = (platformKey: SocialLink["platformKey"]) => {
    switch (platformKey) {
      case "youtube":
        return <FaYoutube className={iconSize} />;
      case "instagram":
        return <FaInstagram className={iconSize} />;
      case "facebook":
        return <FaFacebookF className={iconSize} />;
      case "tiktok":
        return <FaTiktok className={iconSize} />;
      case "x":
        return <FaXTwitter className={iconSize} />;
      case "whatsapp":
        return <FaWhatsapp className={iconSize} />;
      default:
        return <FaXTwitter className={iconSize} />;
    }
  };

  return (
    <div className={`flex items-center space-x-5 ${className}`}>
      {socialLinks.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.ariaLabel}
          title={platform.name}
          className="text-[#A9B2AE] hover:text-[#8FD3C7] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 inline-flex items-center space-x-2 border-none outline-none focus-visible:text-[#8FD3C7]"
        >
          {getIcon(platform.platformKey)}
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
