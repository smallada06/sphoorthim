import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: "2+ Years at Oracle" },
    { label: "12 User Interviews (CareFlow)" },
    { label: "3rd Place EY Case Competition" },
    { label: "Graduating Dec 2026" }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            <span className="text-primary mr-2 font-mono text-xl">01.</span> About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I spent two years at Oracle close enough to the product to realize that what I wanted was the conversation before the code. Now I'm pursuing my MSIS at Indiana University Kelley, building toward a career in product management at the intersection of AI and human experience.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border flex items-center justify-center text-center">
                  <span className="font-medium text-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden border border-border group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-card to-background flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-muted-foreground font-mono text-sm">Secondary Photo</p>
              {/* <!-- PHOTO: replace this --> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
