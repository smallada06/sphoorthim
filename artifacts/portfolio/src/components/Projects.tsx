import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const projects = [
    {
      title: "CareFlow — AI Healthcare Workflow Platform",
      tag: "Healthcare AI · Product Management",
      description: "End-to-end product lifecycle for a nursing home workflow platform. 12 user interviews, RICE roadmap, OKRs, $16M IT portfolio analysis.",
      buttons: [
        { label: "Live Demo", url: "#", icon: ExternalLink },
        { label: "GitHub", url: "#", icon: Github }
      ]
    },
    {
      title: "Vyry Quest — PM Analysis (Phygtl)",
      tag: "Product Analysis · UX Research",
      description: "First-impression PM analysis of an AR campus quest app. Identified critical onboarding friction, terminology gaps, and zero active quests as a dead-end for new users.",
      buttons: [
        { label: "Case Study", url: "#", icon: ExternalLink }
      ]
    },
    {
      title: "Oracle Financial Data Automation",
      tag: "Python · SQL · Automation",
      description: "Built a Python+SQL automation tool replacing manual financial data validation — reducing manual effort by 30% and improving data accuracy across enterprise systems.",
      buttons: [
        { label: "GitHub", url: "#", icon: Github }
      ]
    },
    {
      title: "RagaAI Allergy Clinic Suite — Product Research",
      tag: "AI Product · Healthcare",
      description: "Deep research into RagaAI's 11-agent allergy clinic suite. Mapped full agent architecture, clinical workflows, and key metrics including <3% no-show rate and 85% intake time reduction.",
      buttons: [
        { label: "Case Study", url: "#", icon: ExternalLink }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            <span className="text-primary mr-2 font-mono text-xl">03.</span> Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(79,142,247,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 md:h-56 bg-gradient-to-br from-secondary to-background border-b border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-muted-foreground font-mono text-sm z-10">{project.title} Cover</span>
                {/* <!-- PHOTO: replace this --> */}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-auto">
                  {project.buttons.map((btn, i) => (
                    <Button key={i} variant={i === 0 ? "default" : "outline"} size="sm" className="rounded-full" asChild>
                      <a href={btn.url} target="_blank" rel="noopener noreferrer">
                        {btn.label}
                        <btn.icon className="ml-2 w-4 h-4" />
                        {/* <!-- LINK: add URL here --> */}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
