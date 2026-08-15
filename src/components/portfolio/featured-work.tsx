"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredWork, Project } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { ProjectDialog } from "./project-dialog";
import { ChannelMarquee } from "./channel-marquee";
import { useAppDispatch, useAppSelector } from "@/store";
import { setActiveCategory, openProjectDialog } from "@/store/portfolioSlice";

export function FeaturedWork() {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state) => state.portfolio.activeCategory);

  const categories = [
    "All",
    "YouTube Content",
    "Social Media",
    "Video Editing",
    "Graphic Design",
    "Digital Strategy",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? featuredWork
      : featuredWork.filter((p) => p.category === selectedCategory);

  const handleSelectProject = (project: Project) => {
    dispatch(openProjectDialog(project));
  };

  return (
    <section id="work" className="pt-24 pb-12 bg-[#0B0F0E] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[rgba(143,211,199,0.1)] pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8FD3C7] font-semibold mb-2 block">
              Portfolio Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F7F4ED]">
              FEATURED <span className="text-[#8FD3C7]">WORK.</span>
            </h2>
            <p className="text-base text-[#A9B2AE] mt-2 max-w-xl">
              Selected work across video, social media and digital content strategy.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <Tabs
            defaultValue="All"
            value={selectedCategory}
            onValueChange={(val) => dispatch(setActiveCategory(val))}
            className="w-full md:w-auto"
          >
            <TabsList className="flex-wrap h-auto bg-[#111917] p-1 border-none shadow-md">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="text-[11px] py-1.5 px-3">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              layout
            >
              <ProjectCard project={project} onSelect={handleSelectProject} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#111917]/50">
            <p className="text-[#A9B2AE] uppercase tracking-wider text-sm">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* DUAL MOVING LOGO MARQUEE STRIPS AT END OF FEATURED WORK */}
      <ChannelMarquee />

      {/* Modal Dialog */}
      <ProjectDialog />
    </section>
  );
}
