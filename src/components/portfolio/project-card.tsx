"use client";

import React from "react";
import Image from "next/image";
import { Play, ArrowUpRight, Film, Clock, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/portfolio";
import { FocusBrackets } from "./studio-decorations";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  // Generate pseudo timecodes for video editing suite aesthetic
  const getTimecode = (id: string) => {
    const num = parseInt(id.replace(/\D/g, "") || "1", 10);
    const mins = String((num * 2 + 1) % 10).padStart(2, "0");
    const secs = String((num * 14 + 12) % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <Card
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      aria-label={`View project details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="bg-[#111917] border-none shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-500 group cursor-pointer overflow-hidden relative flex flex-col justify-between rounded-none focus:outline-none focus:ring-1 focus:ring-[#8FD3C7] w-full"
    >
      <div>
        {/* Thumbnail Preview Box with NLE Corner Markers & Play Overlay */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#0B0F0E]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />

          {/* Film Frame Crop Brackets */}
          <FocusBrackets />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111917] via-transparent to-transparent opacity-80" />

          {/* Laser Scan Line on Hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8FD3C7]/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none" />

          {/* Badges: Category (Top-Left) & Views / Duration (Top-Right) */}
          <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between z-20">
            <Badge variant="mint" className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider border-none px-2 py-0.5">
              {project.category}
            </Badge>

            <div className="flex items-center space-x-2">
              {project.views && (
                <div className="flex items-center space-x-1 px-1.5 sm:px-2 py-0.5 bg-[#0B0F0E]/90 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-[#E9DDC8] border border-[rgba(233,221,200,0.3)] shadow-lg font-bold">
                  <Eye className="h-3 w-3 text-[#8FD3C7]" />
                  <span>{project.views}</span>
                </div>
              )}

              <div className="hidden sm:flex items-center space-x-1 px-1.5 sm:px-2 py-0.5 bg-[#0B0F0E]/80 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-[#8FD3C7] border border-[rgba(143,211,199,0.2)]">
                <Clock className="h-3 w-3" />
                <span>{getTimecode(project.id)}</span>
              </div>
            </div>
          </div>

          {/* Hover Play Icon Badge */}
          {project.youtubeUrl && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#8FD3C7]/90 text-[#0B0F0E] flex items-center justify-center transform scale-90 group-hover:scale-100 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl">
                <Play className="h-5 sm:h-6 w-5 sm:w-6 fill-current ml-0.5" />
              </div>
            </div>
          )}

          {/* Mini NLE Timeline Track at Bottom of Thumbnail */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#0B0F0E]/90 flex items-center px-0.5 z-20">
            <div className="h-1 bg-[#1F7A70] w-1/3" />
            <div className="h-1 bg-[#8FD3C7] w-1/2" />
            <div className="h-1 bg-[#E9DDC8]/50 w-1/6" />
            <div className="absolute top-0 bottom-0 w-1 bg-[#8FD3C7] animate-playhead shadow-[0_0_8px_#8FD3C7]" />
          </div>
        </div>

        {/* Card Content Body */}
        <CardContent className="p-4 sm:p-6 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#A9B2AE]">
            <span className="uppercase tracking-widest text-[#8FD3C7] font-semibold flex items-center">
              <Film className="h-3 w-3 mr-1" />
              {project.platform || "Media Project"}
            </span>
            {project.date && <span>{project.date}</span>}
          </div>

          <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase text-[#F7F4ED] group-hover:text-[#8FD3C7] transition-colors line-clamp-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-xs text-[#A9B2AE] line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </CardContent>
      </div>

      {/* Footer Action */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 flex items-center justify-between text-xs font-bold text-[#E9DDC8] group-hover:text-[#8FD3C7] transition-colors border-t border-[rgba(143,211,199,0.08)] mt-2">
        <span className="uppercase tracking-wider text-[11px]">Inspect Sequence</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Card>
  );
}
