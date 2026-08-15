"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SocialIcons } from "./social-icons";
import { personalDetails } from "@/data/portfolio";
import { useAppDispatch, useAppSelector } from "@/store";
import { setMobileMenuOpen } from "@/store/portfolioSlice";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.portfolio.mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F0E]/90 backdrop-blur-md py-4 border-b border-[rgba(143,211,199,0.1)] shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          className="text-2xl md:text-3xl font-black tracking-tighter text-[#F7F4ED] hover:text-[#8FD3C7] transition-colors group flex items-center"
        >
          MUNEEB
          <span className="text-[#8FD3C7] group-hover:animate-pulse ml-0.5">
            .
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-[#A9B2AE] hover:text-[#8FD3C7] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8FD3C7] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA (No social icons in header) */}
        <div className="hidden lg:flex items-center">
          <Button
            asChild
            variant="mint"
            size="default"
            className="group font-bold tracking-wider"
          >
            <a href="#contact">
              Let&apos;s Talk
              <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Sheet */}
        <div className="lg:hidden flex items-center">
          <Sheet
            open={mobileMenuOpen}
            onOpenChange={(open) => dispatch(setMobileMenuOpen(open))}
          >
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open Navigation Menu">
                <Menu className="h-6 w-6 text-[#F7F4ED]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0B0F0E] border-l border-[rgba(143,211,199,0.15)] flex flex-col justify-between p-6">
              <div>
                <SheetHeader className="text-left border-b border-[rgba(143,211,199,0.12)] pb-6 mb-6">
                  <SheetTitle className="text-2xl font-black text-[#F7F4ED] tracking-tighter">
                    MUNEEB<span className="text-[#8FD3C7]">.</span>
                  </SheetTitle>
                  <p className="text-xs uppercase tracking-widest text-[#8FD3C7] mt-1">
                    Social & Digital Media Expert
                  </p>
                </SheetHeader>

                <nav className="flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => dispatch(setMobileMenuOpen(false))}
                      className="text-base font-bold uppercase tracking-widest text-[#A9B2AE] hover:text-[#8FD3C7] transition-colors border-b border-[rgba(143,211,199,0.08)] pb-2.5"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-6 pt-6 border-t border-[rgba(143,211,199,0.12)]">
                <div className="flex justify-center">
                  <SocialIcons iconSize="text-xl" />
                </div>

                <Button
                  asChild
                  variant="mint"
                  className="w-full justify-between"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                >
                  <a href={personalDetails.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact Muneeb on WhatsApp">
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
