import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const roles = [
    {
      title: "AI Product Manager Intern",
      company: "FlairX",
      location: "Remote",
      dates: "May 2026 to Aug 2026",
      highlights: [
        "Prompt design, product roadmaps, AI feature specs, user research, GTM strategy"
      ]
    },
    {
      title: "Customer Success & Product Intern",
      company: "RagaAI",
      location: "On-site",
      dates: "May 2026 to Aug 2026",
      highlights: [
        "Healthcare AI agent deployment, allergy clinic suite, customer success"
      ]
    },
    {
      title: "Graduate Assistant",
      company: "Indiana University",
      location: "Bloomington, IN",
      dates: "Aug 2025 to Present",
      highlights: [
        "Excel/Power BI dashboards, data reporting, process analysis"
      ]
    },
    {
      title: "Associate Consultant",
      company: "Oracle",
      location: "Bangalore, India",
      dates: "Aug 2023 to Apr 2025",
      highlights: [
        "PRDs, UAT, Agile/Scrum",
        "Python+SQL automation (30% effort reduction)",
        "Flexcube banking for Middle East & Africa banks"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            <span className="text-primary mr-2 font-mono text-xl">02.</span> Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-6 space-y-12">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(79,142,247,0.3)]">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mt-1">
                      {role.company} <span className="text-border mx-2">•</span> {role.location}
                    </p>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-mono whitespace-nowrap self-start">
                    {role.dates}
                  </div>
                </div>

                <ul className="space-y-2">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
