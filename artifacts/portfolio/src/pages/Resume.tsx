import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function Resume() {
  return (
    <div className="animate-in fade-in duration-700 flex flex-col h-full">
      <h1 className="font-serif text-[56px] md:text-[72px] leading-none text-foreground mb-12">
        Resume.
      </h1>

      <div className="flex gap-4 mb-12">
        <a href="#" className="border border-border rounded-full px-6 py-2 font-sans text-[12px] uppercase tracking-widest text-foreground hover:bg-[#EBE5DB] transition-colors">
          DOWNLOAD
          {/* DOWNLOAD: add direct PDF download link */}
        </a>
        <a href="#" className="border border-border rounded-full px-6 py-2 font-sans text-[12px] uppercase tracking-widest text-foreground hover:bg-[#EBE5DB] transition-colors">
          LINK
          {/* LINK: add Google Drive resume link */}
        </a>
      </div>

      <div className="relative w-full max-w-4xl aspect-[1/1.4] md:aspect-[8.5/11] border border-border bg-background flex flex-col items-center justify-center p-8 mx-auto shadow-sm">
        <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <Maximize2 size={20} strokeWidth={1.5} />
        </button>

        <span className="font-serif italic text-[18px] text-muted-foreground/60 text-center max-w-[200px]">
          Resume preview — embed PDF or image here
        </span>
        
        {/* RESUME: embed PDF or image here */}
        {/* LINK: add Google Drive resume link */}
        {/* DOWNLOAD: add direct PDF download link */}
      </div>
    </div>
  );
}