"use client";

import React from "react";
import { SocialIcons } from "./social-icons";

export function SocialBar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center space-y-6">
      <div className="w-[1px] h-16 bg-[rgba(143,211,199,0.15)]" />
      <SocialIcons className="flex-col space-x-0 space-y-5" iconSize="h-5 w-5" />
      <div className="w-[1px] h-16 bg-[rgba(143,211,199,0.15)]" />
    </div>
  );
}
