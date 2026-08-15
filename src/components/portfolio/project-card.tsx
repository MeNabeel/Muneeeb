"use client";

import React from "react";
import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/portfolio";
import { getYouTubeThumbnailUrl } from "@/lib/youtube";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const hasVideo = Boolean(project.youtubeUrl);
  // Auto-generate YouTube thumbnail if available, otherwise use custom thumbnail
  const autoThumbnail = getYouTubeThumbnailUrl(project.youtubeUrl);
  const displayThumbnail = autoThumbnail || project.thumbnail;

  return (
    <Card
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer overflow-hidden bg-[#111917] border-none hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 flex flex-col h-full rounded-none"
    >
      {/* Thumbnail Aspect Frame */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#0B0F0E]">
        <Image
          src={displayThumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark Hover Overlay */}
        <div className="absolute inset-0 bg-[#0B0F0E]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-3 p-4 text-center">
          {hasVideo ? (
            <div className="p-3.5 bg-[#8FD3C7] text-[#0B0F0E] rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
              <Play className="h-6 w-6 fill-current ml-0.5" />
            </div>
          ) : (
            <div className="p-3.5 bg-[#1F7A70] text-[#F7F4ED] rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
              <ArrowUpRight className="h-6 w-6" />
            </div>
          )}

          <span className="text-xs font-black uppercase tracking-widest text-[#F7F4ED] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {hasVideo ? "Watch Project" : "View Details"}
          </span>
        </div>

        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="mint" className="text-[10px] tracking-widest shadow-md border-none">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[#A9B2AE]">
            <span>{project.platform || "Digital Content"}</span>
            {project.date && <span>{project.date}</span>}
          </div>

          <h3 className="text-lg font-bold uppercase tracking-tight text-[#E9DDC8] group-hover:text-[#8FD3C7] transition-colors leading-snug line-clamp-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#A9B2AE] line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags Footer */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[rgba(143,211,199,0.08)]">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-[#8FD3C7]/80 uppercase tracking-wider"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
