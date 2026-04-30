import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-start animate-in fade-in duration-700">
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

      {/* Right Column */}
      <div className="relative md:mt-16">
        <div className="absolute -top-12 right-12 md:-left-8 md:-top-16 flex items-end gap-2 text-accent -rotate-12">
          <span className="font-serif italic text-lg">projects</span>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" className="rotate-[120deg]">
            <path d="M10 90 Q 50 10 90 10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M70 10 L 90 10 L 90 30" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          {/* Main Card */}
          <div className="border border-border p-8 bg-background hover:bg-secondary transition-colors cursor-pointer group">
            <p className="font-sans uppercase tracking-[0.2em] text-[11px] text-muted-foreground mb-4">
              LATEST PROJECT
            </p>
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="font-serif text-[28px] md:text-[32px] leading-tight text-foreground">
                CareFlow — Healthcare Workflow Platform
              </h3>
            </div>
            <p className="font-sans text-[13px] uppercase tracking-wider text-muted-foreground mb-6">
              APR, 2026
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-foreground mb-8">
              End-to-end product lifecycle for a nursing home workflow platform. 12 user interviews, RICE roadmap, OKRs, $16M IT portfolio analysis.
            </p>
            <Link to="/projects" className="font-sans text-[13px] uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
              READ <span className="text-accent">→</span>
              {/* LINK: add specific URL here later */}
            </Link>
          </div>

          {/* Sub Card 1 */}
          <div className="border border-border p-6 bg-background hover:bg-secondary transition-colors cursor-pointer group flex justify-between items-center gap-4">
            <h4 className="font-serif text-[20px] text-foreground truncate">
              Oracle Financial Automation
            </h4>
            <span className="font-sans text-[13px] text-muted-foreground shrink-0">2025</span>
          </div>

          {/* Sub Card 2 */}
          <div className="border border-border p-6 bg-background hover:bg-secondary transition-colors cursor-pointer group flex justify-between items-center gap-4">
            <h4 className="font-serif text-[20px] text-foreground truncate">
              Vyry Quest PM Analysis
            </h4>
            <span className="font-sans text-[13px] text-muted-foreground shrink-0">2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}