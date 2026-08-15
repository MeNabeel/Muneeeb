"use client";

import React from "react";
import { SocialIcons } from "./social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Video Editing",
    "Content Strategy",
    "Social Media Management",
    "YouTube Management",
    "Graphic Design",
  ];

  return (
    <footer className="py-16 bg-[#0B0F0E] border-t border-[rgba(143,211,199,0.1)] text-xs text-[#A9B2AE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#top" className="text-2xl font-black tracking-tighter text-[#F7F4ED] inline-block">
              MUNEEB<span className="text-[#8FD3C7]">.</span>
            </a>
            <p className="text-xs uppercase tracking-widest text-[#E9DDC8] font-bold">
              Social & Digital Media Expert
            </p>
            <p className="text-xs text-[#A9B2AE] max-w-sm leading-relaxed">
              Combining video editing, design, social strategy, and audience-focused storytelling for news networks and digital media brands.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E9DDC8]">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#8FD3C7] transition-colors uppercase tracking-wider text-[11px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E9DDC8]">
              Specializations
            </p>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="uppercase tracking-wider text-[11px]">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Social Bar & Copyright */}
        <div className="pt-8 border-t border-[rgba(143,211,199,0.08)] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Borderless Social Icons */}
          <SocialIcons iconSize="h-5 w-5" />

          {/* Copyright */}
          <div className="uppercase tracking-wider text-[11px] text-[#A9B2AE]">
            &copy; {currentYear} MUNEEB. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
