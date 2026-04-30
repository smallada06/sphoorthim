import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 md:items-center animate-in fade-in duration-700">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-serif text-[64px] md:text-[80px] leading-[0.9] text-foreground tracking-tight">
            SPHOORTHI
          </h1>
          <h1 className="font-serif italic text-[64px] md:text-[80px] leading-[0.9] text-foreground tracking-tight">
            MALLADAD
          </h1>
        </div>

        <p className="font-sans uppercase tracking-[0.3em] text-[12px] text-muted-foreground mt-4">
          PRODUCT MANAGER
        </p>

        <p className="font-sans text-[20px] md:text-[24px] text-foreground mt-2 flex items-center gap-3">
          <span className="inline-block w-4 h-4 bg-accent rounded-[4px]" />
          AI PM Intern @ FlairX
        </p>

        <p className="font-sans text-[16px] text-foreground leading-relaxed max-w-md mt-4">
          Working at the intersection of AI and product strategy, translating ambiguous problems into shipped, usable products.
        </p>

        <div className="flex flex-col gap-3 mt-8">
          <div className="flex items-center gap-5">
            <a href="#" className="text-foreground hover:opacity-60 transition-opacity">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-foreground hover:opacity-60 transition-opacity">
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-foreground hover:opacity-60 transition-opacity">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-foreground hover:opacity-60 transition-opacity">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>
          <p className="font-sans text-[13px] text-muted-foreground">Links :)</p>
        </div>
      </div>

      {/* Right Column — card stack with deck-shuffle hover */}
      <div className="relative">
        {/* Card stack: CareFlow on top, Oracle and Vyry peek from behind */}
        <div className="relative group/stack">
          {/* Main Card (CareFlow) — top of deck */}
          <div className="relative z-30 border border-border bg-background p-10 md:p-12 transition-shadow duration-500 group-hover/stack:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
            <p className="font-sans uppercase tracking-[0.2em] text-[11px] text-muted-foreground mb-5">
              LATEST PROJECT
            </p>
            <h3 className="font-serif text-[28px] md:text-[32px] leading-tight text-foreground mb-4">
              CareFlow — Healthcare Workflow Platform
            </h3>
            <p className="font-sans text-[13px] uppercase tracking-wider text-muted-foreground mb-6">
              APR, 2026
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-foreground mb-8">
              End-to-end product lifecycle for a nursing home workflow platform. 12 user interviews, RICE roadmap, OKRs, $16M IT portfolio analysis.
            </p>
            <Link to="/projects" className="font-sans text-[13px] uppercase tracking-widest text-foreground hover:text-accent transition-colors">
              READ <span className="text-accent">→</span>
              {/* LINK: add specific URL here later */}
            </Link>
          </div>

          {/* Oracle — peeks ~16px behind CareFlow, slides down on hover */}
          <div
            className="relative z-20 mx-3 -mt-[60px] transition-all duration-500 ease-out group-hover/stack:mt-3 group-hover/stack:translate-x-1 group-hover/stack:-rotate-1"
            style={{ willChange: 'transform' }}
          >
            <div className="relative overflow-hidden border border-border bg-background p-6 flex justify-between items-center gap-4">
              <h4 className="font-serif text-[20px] text-foreground truncate">
                Oracle Financial Automation
              </h4>
              <span className="font-sans text-[13px] text-muted-foreground shrink-0">2025</span>
              {/* Charcoal "back-of-card" overlay that fades in when stack fans out */}
              <div className="absolute inset-0 bg-[#2A2A2A]/80 opacity-0 group-hover/stack:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>

          {/* Vyry — peeks further behind, slides further on hover */}
          <div
            className="relative z-10 mx-6 -mt-[60px] transition-all duration-500 ease-out group-hover/stack:mt-3 group-hover/stack:translate-x-2 group-hover/stack:rotate-1"
            style={{ willChange: 'transform' }}
          >
            <div className="relative overflow-hidden border border-border bg-background p-6 flex justify-between items-center gap-4">
              <h4 className="font-serif text-[20px] text-foreground truncate">
                Vyry Quest PM Analysis
              </h4>
              <span className="font-sans text-[13px] text-muted-foreground shrink-0">2026</span>
              <div className="absolute inset-0 bg-[#2A2A2A]/80 opacity-0 group-hover/stack:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}