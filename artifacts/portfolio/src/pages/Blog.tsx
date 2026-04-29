import React from 'react';

{/* PLACEHOLDER: write and link real articles before launching */}

const articles = [
  {
    title: "Why PM is Really Just Asking Better Questions",
    date: "APR 29, 2026",
    description: "Product managers don't ship features. They ship decisions. And the quality of those decisions depends entirely on the quality of the questions asked before the first line of code is written.",
    link: "#"
  },
  {
    title: "What I Learned Doing 12 User Interviews for CareFlow",
    date: "DEC 15, 2025",
    description: "What users say they need and what they actually need are almost never the same thing. Here's what I discovered running real user interviews for a healthcare workflow product.",
    link: "#"
  },
  {
    title: "The Allergy Clinic Agent: A PM's Breakdown of RagaAI's Suite",
    date: "APR 20, 2026",
    description: "A deep dive into 11 AI agents built for allergy clinics — how they work, what problems they solve, and what the product decisions behind them reveal about building AI for healthcare.",
    link: "#"
  }
];

export default function Blog() {
  return (
    <div className="animate-in fade-in duration-700 max-w-4xl">
      <h1 className="font-serif text-[56px] md:text-[72px] leading-none text-foreground mb-12">
        Thoughts.
      </h1>

      <div className="w-full h-px bg-border mb-12" />

      <div className="flex flex-col">
        {articles.map((article, i) => (
          <React.Fragment key={i}>
            <div className="py-8 group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 mb-4">
                <h2 className="font-serif text-[28px] md:text-[32px] text-foreground group-hover:opacity-70 transition-opacity">
                  {article.title}
                </h2>
                <span className="font-sans text-[13px] uppercase tracking-widest text-muted-foreground shrink-0">
                  {article.date}
                </span>
              </div>
              
              <p className="font-sans text-[15px] leading-relaxed text-foreground/80 max-w-3xl mb-6">
                {article.description}
              </p>

              <a href={article.link} className="font-sans text-[12px] uppercase tracking-widest text-foreground hover:opacity-60 transition-opacity">
                READ →
                {/* LINK: add article URL */}
              </a>
            </div>
            {i < articles.length - 1 && <div className="w-full h-px bg-border" />}
          </React.Fragment>
        ))}
      </div>
      <div className="w-full h-px bg-border mt-8" />
    </div>
  );
}