import React from 'react';

const projects = [
  {
    title: "CareFlow",
    year: "2026",
    description: "Healthcare workflow management platform for nursing homes. Built end-to-end from 12 user interviews through RICE roadmap, OKRs, and $16M IT portfolio analysis.",
    tags: ["Healthcare", "Product Management", "User Research", "RICE", "AI"],
    links: [
      { label: "live demo", url: "#" },
      { label: "case study", url: "#" }
    ],
    placeholderText: "CareFlow cover image"
  },
  {
    title: "Vyry Quest — PM Analysis",
    year: "2026",
    description: "First-impression PM teardown of an AR campus quest app. Identified critical onboarding gaps, terminology friction, and zero active quests as a dead-end new user experience.",
    tags: ["UX Research", "Product Analysis", "Onboarding", "AR"],
    links: [
      { label: "case study", url: "#" }
    ],
    placeholderText: "Vyry Quest cover image"
  },
  {
    title: "Oracle Financial Automation",
    year: "2025",
    description: "Python + SQL automation tool replacing 10+ hours of weekly manual financial data validation — reducing effort by 30%.",
    tags: ["Python", "SQL", "Automation", "Oracle"],
    links: [
      { label: "GitHub", url: "#" }
    ],
    placeholderText: "Oracle Automation cover image"
  },
  {
    title: "RagaAI Allergy Clinic Research",
    year: "2026",
    description: "Deep product research into RagaAI's 11-agent allergy clinic suite. Mapped full agent architecture, clinical workflows, and key metrics including <3% no-show rate.",
    tags: ["Healthcare AI", "Product Research", "AI Agents", "Clinical"],
    links: [
      { label: "case study", url: "#" }
    ],
    placeholderText: "RagaAI Research cover image"
  }
];

export default function Projects() {
  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="font-serif text-[56px] md:text-[72px] leading-none text-foreground mb-12">
        Selected Work.
      </h1>

      <div className="w-full h-px bg-border mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-background to-border/30 border border-border flex items-center justify-center mb-8">
              <span className="font-serif italic text-muted-foreground opacity-60">
                {project.placeholderText}
              </span>
              {/* IMAGE PLACEHOLDER: replace this */}
            </div>

            <div className="flex justify-between items-baseline mb-4">
              <h2 className="font-serif text-[28px] md:text-[32px] text-foreground">
                {project.title}
              </h2>
              <span className="font-sans text-[14px] text-muted-foreground">
                {project.year}
              </span>
            </div>

            <div className="w-full h-px bg-border mb-6" />

            <p className="font-sans text-[15px] leading-relaxed text-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, j) => (
                <span key={j} className="font-sans text-[13px] text-muted-foreground">
                  [{tag}]
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4">
              {project.links.map((link, j) => (
                <a key={j} href={link.url} className="font-sans text-[12px] uppercase tracking-widest text-foreground hover:opacity-60 transition-opacity">
                  {link.label} →
                  {/* LINK: add URL here */}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}