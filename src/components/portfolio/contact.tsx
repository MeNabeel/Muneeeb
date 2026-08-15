"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, CheckCircle2, MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { personalDetails } from "@/data/portfolio";

export function Contact() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Video Production",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setDialogOpen(false);
    setFormData({ name: "", email: "", projectType: "Video Production", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F0E] relative overflow-hidden film-grain">
      {/* Background Radial Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#1F7A70]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        {/* Main Editorial CTA Box */}
        <Card className="p-8 md:p-16 bg-[#111917] border-none teal-glow-lg text-center flex flex-col items-center justify-center space-y-8 relative overflow-hidden rounded-none">
          {/* Corner Decorative Framing */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#8FD3C7]" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#8FD3C7]" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#8FD3C7]" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#8FD3C7]" />

          <motion.div
            className="space-y-4 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-[#8FD3C7] font-semibold">
              Initiate Collaboration
            </span>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F7F4ED] leading-none">
              HAVE A STORY <br />
              <span className="text-[#8FD3C7]">WORTH WATCHING?</span>
            </h2>

            <p className="text-base sm:text-xl text-[#A9B2AE] max-w-xl mx-auto pt-2">
              Let&apos;s create content that connects, engages, and leaves a lasting impact.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* WhatsApp Muneeb Button */}
            <Button
              asChild
              variant="mint"
              size="lg"
              className="text-base px-8 py-6 group cursor-pointer"
            >
              <a
                href={personalDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Muneeb on WhatsApp"
              >
                <MessageCircle className="mr-2.5 h-5 w-5" />
                WhatsApp Muneeb
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>

            {/* Send Email Button */}
            <Button
              asChild
              className="bg-[#E9DDC8] text-[#0B0F0E] font-bold tracking-wider hover:bg-[#F7F4ED] text-base px-8 py-6 rounded-none cursor-pointer"
            >
              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Email Muneeb"
              >
                <Mail className="mr-2.5 h-5 w-5" />
                Send Email
              </a>
            </Button>

            {/* Custom Form Modal Launcher */}
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setDialogOpen(true)}
              className="text-sm px-6 py-6 border-none text-[#A9B2AE] hover:text-[#8FD3C7]"
            >
              Detailed Project Form
            </Button>
          </motion.div>
        </Card>

        {/* Clean Contact Information Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Item */}
          <a
            href={`mailto:${personalDetails.email}`}
            aria-label="Email Muneeb"
            className="p-6 bg-[#111917] shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all group flex items-center space-x-4 border-none"
          >
            <div className="p-3 bg-[#1F7A70]/20 text-[#8FD3C7] group-hover:bg-[#8FD3C7] group-hover:text-[#0B0F0E] transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#A9B2AE]">Direct Email</p>
              <p className="text-sm font-bold text-[#E9DDC8] group-hover:text-[#8FD3C7] transition-colors truncate max-w-[200px] sm:max-w-xs">
                {personalDetails.email}
              </p>
            </div>
          </a>

          {/* Phone Item */}
          <a
            href={`tel:${personalDetails.phoneTel}`}
            aria-label="Call Muneeb"
            className="p-6 bg-[#111917] shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all group flex items-center space-x-4 border-none"
          >
            <div className="p-3 bg-[#1F7A70]/20 text-[#8FD3C7] group-hover:bg-[#8FD3C7] group-hover:text-[#0B0F0E] transition-colors">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#A9B2AE]">Phone / Mobile</p>
              <p className="text-sm font-bold text-[#E9DDC8] group-hover:text-[#8FD3C7] transition-colors">
                {personalDetails.phone}
              </p>
            </div>
          </a>

          {/* WhatsApp Item */}
          <a
            href={personalDetails.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Muneeb on WhatsApp"
            className="p-6 bg-[#111917] shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all group flex items-center space-x-4 border-none"
          >
            <div className="p-3 bg-[#1F7A70]/20 text-[#8FD3C7] group-hover:bg-[#8FD3C7] group-hover:text-[#0B0F0E] transition-colors">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#A9B2AE]">WhatsApp Direct</p>
              <p className="text-sm font-bold text-[#E9DDC8] group-hover:text-[#8FD3C7] transition-colors">
                Chat on WhatsApp
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Interactive Contact Dialog Form */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-xl p-6 sm:p-8 bg-[#111917] border-none shadow-2xl">
          {!formSubmitted ? (
            <>
              <DialogHeader className="space-y-2">
                <DialogTitle className="text-2xl font-black uppercase text-[#E9DDC8]">
                  Start a Conversation
                </DialogTitle>
                <DialogDescription className="text-sm text-[#A9B2AE]">
                  Fill out the details below to discuss video editing, YouTube strategy, or social media management.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-[#E9DDC8]">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0F0E] border border-[rgba(143,211,199,0.15)] p-3 text-sm text-[#F7F4ED] focus:border-[#8FD3C7] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-[#E9DDC8]">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0F0E] border border-[rgba(143,211,199,0.15)] p-3 text-sm text-[#F7F4ED] focus:border-[#8FD3C7] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-[#E9DDC8]">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0B0F0E] border border-[rgba(143,211,199,0.15)] p-3 text-sm text-[#F7F4ED] focus:border-[#8FD3C7] focus:outline-none"
                  >
                    <option value="Video Production">Video Editing & Production</option>
                    <option value="YouTube Growth">YouTube Ecosystem Strategy</option>
                    <option value="Social Management">Social Media Management</option>
                    <option value="Graphic Design">Graphic Design & Branding</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-[#E9DDC8]">Project Outline</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your objectives or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0B0F0E] border border-[rgba(143,211,199,0.15)] p-3 text-sm text-[#F7F4ED] focus:border-[#8FD3C7] focus:outline-none"
                  />
                </div>

                <Button type="submit" variant="mint" className="w-full mt-2">
                  <Send className="mr-2 h-4 w-4" />
                  Send Inquiry
                </Button>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#8FD3C7]/20 text-[#8FD3C7] flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black uppercase text-[#E9DDC8]">Inquiry Received</h3>
              <p className="text-sm text-[#A9B2AE]">
                Thank you for reaching out. Your message has been dispatched successfully.
              </p>
              <Button variant="outline" onClick={handleReset} className="mt-4">
                Close Dialog
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
