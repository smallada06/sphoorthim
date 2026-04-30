import React from 'react';

type Project = {
  title: string;
  subtitle?: string;
  year: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
  placeholderText: string;
};

const projects: Project[] = [
  {
    title: "CareFlow: Healthcare Workflow Platform",
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
    title: "AI & Enterprise Transformation Strategy",
    subtitle: "EY Case Competition – 3rd Place",
    year: "2025",
    description: "Designed a digital transformation strategy integrating SAP S/4HANA, SAP BTP, and SAP IBP. Built ROI/TCO model projecting $5.5M+ NPV, 35% ROI, and 3-year breakeven.",
    tags: ["Product Strategy", "Digital Transformation", "Enterprise Systems", "SAP", "Business Analysis"],
    links: [
      { label: "case study", url: "#" }
    ],
    placeholderText: "EY Case Competition cover image"
  },
  {
    title: "Enterprise Digital Transformation Strategy",
    subtitle: "Toyota Material Handling – Finalist",
    year: "2025",
    description: "Designed a digital transformation strategy integrating SAP S/4HANA, SAP BTP, and SAP IBP. Built ROI/TCO model projecting $5.5M+ NPV, 35% ROI, and 3-year breakeven.",
    tags: ["Digital Transformation", "Enterprise Architecture", "SAP", "Supply Chain", "Strategy", "Financial Modeling"],
    links: [
      { label: "case study", url: "#" }
    ],
    placeholderText: "Toyota Material Handling cover image"
  },
  {
    title: "Bike Rental Demand Forecasting",
    subtitle: "Seoul Bike Sharing System",
    year: "2025",
    description: "Analyzed 8,700+ hourly records combining weather and temporal data. Performed feature engineering, EDA, and regression modeling to identify key demand drivers.",
    tags: ["Data Analytics", "Machine Learning", "Forecasting", "Python", "Data Visualization", "Statistical Modeling"],
    links: [
      { label: "case study", url: "#" }
    ],
    placeholderText: "Seoul Bike Sharing cover image"
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

            <div className="flex justify-between items-baseline mb-2">
              <h2 className="font-serif text-[28px] md:text-[32px] text-foreground">
                {project.title}
              </h2>
              <span className="font-sans text-[14px] text-muted-foreground">
                {project.year}
              </span>
            </div>

            {project.subtitle && (
              <p className="font-sans italic text-[14px] text-muted-foreground mb-4">
                {project.subtitle}
              </p>
            )}

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
                <a key={j} href={link.url} className="font-sans text-[12px] uppercase tracking-widest text-foreground hover:text-accent transition-colors">
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