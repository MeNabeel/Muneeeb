"use client";

import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { socialLinks, SocialLink } from "@/data/portfolio";

interface SocialIconsProps {
  className?: string;
  iconSize?: string;
}

export function SocialIcons({
  className = "",
  iconSize = "text-base",
}: SocialIconsProps) {
  const getIcon = (platformKey: SocialLink["platformKey"]) => {
    switch (platformKey) {
      case "youtube":
        return <FaYoutube className={iconSize} />;
      case "instagram":
        return <FaInstagram className={iconSize} />;
      case "facebook":
        return <FaFacebookF className={iconSize} />;
      case "x":
        return <FaXTwitter className={iconSize} />;
      case "whatsapp":
        return <FaWhatsapp className={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-center space-x-3 sm:space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center text-[#A9B2AE] hover:text-[#8FD3C7] transition-all duration-300 transform hover:scale-110 border-none bg-transparent"
        >
          {getIcon(social.platformKey)}
        </a>
      ))}
    </div>
  );
}
