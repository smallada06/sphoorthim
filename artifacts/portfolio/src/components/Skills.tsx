import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillGroups = [
    {
      title: "Product",
      skills: ["Product Management", "PRD Writing", "Roadmapping", "RICE Framework", "OKRs", "User Research", "Agile/Scrum", "Waterfall", "UAT", "Stakeholder Management", "GTM Strategy", "North Star Metrics", "Competitive Analysis"]
    },
    {
      title: "Tools",
      skills: ["Jira", "Confluence", "Figma", "Miro", "Power BI", "GitHub", "Notion", "Vercel", "Lovable", "Replit"]
    },
    {
      title: "Technical",
      skills: ["Python", "SQL", "Excel (Advanced)", "Power BI", "Prompt Engineering", "Claude AI", "ChatGPT", "Azure DevOps (learning)"]
    },
    {
      title: "Soft Skills",
      skills: ["Cross-functional Communication", "Problem Solving", "Data-Driven Decision Making", "Fast Learner", "Detail-Oriented"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            <span className="text-primary mr-2 font-mono text-xl">04.</span> Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-card border border-border text-muted-foreground rounded-full text-sm hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
