import React from 'react';
import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "AI PRODUCT MANAGER INTERN",
    date: "MAY, 2026 - AUG, 2026",
    company: "FlairX",
    description: "FlairX is an AI-driven interview platform helping companies hire smarter.",
    bullets: [
      "Conducting market, user, and competitor research focused on AI-driven hiring trends",
      "Collaborating with engineering and AI/ML teams to build and improve AI-powered features",
      "Supporting product roadmaps, PRDs, and AI feature specifications",
      "Working on prompt design and model behavior evaluation",
      "Analyzing interview data to optimize AI performance"
    ],
    tags: ["Product Management", "AI", "PRD Writing", "Prompt Engineering", "User Research"],
    link: "#"
  },
  {
    title: "CUSTOMER SUCCESS & PRODUCT INTERN",
    date: "MAY, 2026 - AUG, 2026",
    company: "RagaAI",
    description: "RagaAI builds healthcare AI agent suites for allergy clinics and radiology workflows.",
    bullets: [
      "Supporting deployment of allergy clinic AI agent suite across US clinics",
      "Working with Practice Managers and clinical staff on adoption and success",
      "Tracking operational metrics including no-show rates and claim denial reduction",
      "Bridging customer feedback into product improvements"
    ],
    tags: ["Healthcare AI", "Customer Success", "AI Agents", "Product", "Clinical Workflows"],
    link: "#"
  },
  {
    title: "ASSOCIATE CONSULTANT",
    date: "AUG, 2023 - APR, 2025",
    company: "Oracle",
    description: "Oracle builds enterprise software powering global financial and banking operations.",
    bullets: [
      "Supported cross-functional coordination across product, engineering, and QA teams",
      "Led Agile/Scrum ceremonies — sprint planning, backlog refinement, release management",
      "Used Jira and Confluence for project documentation and resource tracking",
      "Conducted competitive analysis to support product roadmap and budgeting decisions",
      "Led UAT — designed test plans, coordinated technical reviews, reduced defect rates by 15%",
      "Built Python + SQL automation tool reducing manual reporting effort by 30%"
    ],
    tags: ["Agile/Scrum", "Jira", "Confluence", "Python", "SQL", "UAT", "Stakeholder Management"],
    link: "#"
  },
  {
    title: "GRADUATE ASSISTANT",
    date: "AUG, 2025 - PRESENT",
    company: "Indiana University",
    description: "Supporting program leadership at Indiana University Kelley School of Business.",
    bullets: [
      "Built Excel and Power BI dashboards for program performance tracking",
      "Synthesized operational data into structured reports for leadership decision-making"
    ],
    tags: ["Power BI", "Excel", "Data Analytics", "Reporting"],
    link: null
  }
];

export default function Work() {
  return (
    <div className="animate-in fade-in duration-700 max-w-3xl">
      <h1 className="font-serif text-[56px] md:text-[72px] leading-none text-foreground mb-20">
        Experience.
      </h1>

      <div className="relative border-l border-border ml-2 md:ml-4">
        <div className="flex flex-col gap-16">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-[6px] w-[9px] h-[9px] rounded-full bg-accent" />

              <p className="font-sans uppercase tracking-[0.2em] text-[12px] text-muted-foreground mb-4">
                {exp.title}
              </p>
              
              <div className="mb-6">
                <span className="inline-block border border-border px-3 py-1 font-sans text-[11px] uppercase tracking-widest text-foreground">
                  {exp.date}
                </span>
              </div>

              <h3 className="font-serif text-[28px] text-foreground mb-2">
                {exp.company}
              </h3>
              <p className="font-sans text-[15px] text-foreground mb-6 opacity-80">
                {exp.description}
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-foreground shrink-0 mt-[6px] text-[10px]">−</span>
                    <span className="font-sans text-[15px] text-foreground leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tags.map((tag, j) => (
                  <span key={j} className="font-sans text-[13px] text-muted-foreground">
                    [{tag}]
                  </span>
                ))}
              </div>

              {exp.link && (
                <a href={exp.link} className="inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-widest text-foreground hover:text-accent transition-colors group/link">
                  <span>WEBSITE</span>
                  <ExternalLink size={12} strokeWidth={2} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}