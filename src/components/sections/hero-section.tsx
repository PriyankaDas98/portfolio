"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"; // Changed from ArrowDown to Download

export function HeroSection() {
  // Removed scrollToContact as the button's purpose has changed.
  // A new handler could be added if specific client-side logic is needed for download.
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-secondary/30 relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="block">Hello, I'm</span>
          <span className="block text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          A passionate developer creating digital experiences. Welcome to my story.
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {/* Using <a> tag for direct download functionality */}
            <a href="/resume-placeholder.pdf" download="Your_Name_Resume.pdf">
              Download Resume
              <Download className="ml-2 h-5 w-5" /> {/* Removed animate-bounce */}
            </a>
          </Button>
        </div>
      </div>
       <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
}

// Helper to add some subtle interactivity or visual flair if needed in the future
// For now, the CSS grid pattern handles visual appeal.

