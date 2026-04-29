import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/sphoorthi-s-malladad" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
            <Github className="w-5 h-5" />
            {/* <!-- LINK: add URL here --> */}
          </a>
          <a href="mailto:smallada@iu.edu" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground font-mono text-center">
          Designed & Built by Sphoorthi Malladad © 2026
        </p>
      </div>
    </footer>
  );
}
