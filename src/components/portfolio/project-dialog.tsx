"use client";

import React from "react";
import { ExternalLink, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/data/portfolio";
import { getYouTubeEmbedUrl } from "@/lib/youtube";

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  if (!project) return null;

  const embedUrl = getYouTubeEmbedUrl(project.youtubeUrl);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-6 sm:p-8 bg-[#111917] border border-[rgba(143,211,199,0.3)]">
        {/* Header Metadata */}
        <DialogHeader className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="mint">{project.category}</Badge>
            {project.platform && (
              <Badge variant="outline">{project.platform}</Badge>
            )}
            {project.date && (
              <span className="text-xs text-[#A9B2AE] ml-auto uppercase tracking-wider">
                {project.date}
              </span>
            )}
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-black uppercase text-[#E9DDC8] tracking-tight">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-[#A9B2AE]">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {/* Video Player or Image Showcase */}
        <div className="mt-4">
          {embedUrl ? (
            <div className="relative w-full aspect-video bg-[#0B0F0E] border border-[rgba(143,211,199,0.2)] overflow-hidden shadow-2xl">
              <iframe
                src={embedUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video bg-[#0B0F0E] border border-[rgba(143,211,199,0.2)] overflow-hidden">
              {/* eslint-disable-next-javascript-ignore */}
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Project Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#8FD3C7] bg-[#1F7A70]/20 border border-[rgba(143,211,199,0.15)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Case Study Breakdown (Only rendered if data exists) */}
        {project.caseStudy && (
          <div className="space-y-6 pt-4">
            <Separator />
            <h4 className="text-xs uppercase tracking-widest text-[#8FD3C7] font-bold">
              Case Study & Strategy Breakdown
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.caseStudy.challenge && (
                <div className="p-4 bg-[#0B0F0E] border border-[rgba(143,211,199,0.12)]">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#E9DDC8] mb-2 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#8FD3C7] mr-2" />
                    The Challenge
                  </h5>
                  <p className="text-xs sm:text-sm text-[#A9B2AE] leading-relaxed">
                    {project.caseStudy.challenge}
                  </p>
                </div>
              )}

              {project.caseStudy.approach && (
                <div className="p-4 bg-[#0B0F0E] border border-[rgba(143,211,199,0.12)]">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#E9DDC8] mb-2 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#8FD3C7] mr-2" />
                    The Approach
                  </h5>
                  <p className="text-xs sm:text-sm text-[#A9B2AE] leading-relaxed">
                    {project.caseStudy.approach}
                  </p>
                </div>
              )}

              {project.caseStudy.content && (
                <div className="p-4 bg-[#0B0F0E] border border-[rgba(143,211,199,0.12)]">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#E9DDC8] mb-2 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#8FD3C7] mr-2" />
                    The Content
                  </h5>
                  <p className="text-xs sm:text-sm text-[#A9B2AE] leading-relaxed">
                    {project.caseStudy.content}
                  </p>
                </div>
              )}

              {project.caseStudy.result && (
                <div className="p-4 bg-[#0B0F0E] border border-[rgba(143,211,199,0.12)]">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#E9DDC8] mb-2 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#8FD3C7] mr-2" />
                    The Result
                  </h5>
                  <p className="text-xs sm:text-sm text-[#A9B2AE] leading-relaxed">
                    {project.caseStudy.result}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(143,211,199,0.15)]">
          <Button variant="ghost" onClick={onClose}>
            Close Preview
          </Button>

          {project.youtubeUrl && (
            <Button asChild variant="mint" className="group">
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-4 w-4 fill-current" />
                Open on YouTube
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
