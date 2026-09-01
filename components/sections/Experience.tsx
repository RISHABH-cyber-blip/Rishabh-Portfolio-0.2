"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="mx-auto max-w-[1240px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-[600px] text-center"
        >
          <span className="eyebrow justify-center">EXPERIENCE</span>
          <h2 className="font-display mt-4 text-4xl font-extrabold md:text-5xl">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-[820px] before:absolute before:left-3.5 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-accent/50 before:via-primary/50 before:to-transparent md:before:left-1/2">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative mb-8 grid grid-cols-[30px_1fr] items-start gap-0 md:grid-cols-[1fr_40px_1fr]"
            >
              <span className="relative top-1.5 h-3 w-3 justify-self-start rounded-full bg-accent shadow-[0_0_12px_#00E5FF] md:col-start-2 md:justify-self-center" />

              <div
                className={`glass p-6 md:col-start-3 ${i % 2 === 1 ? "md:col-start-1 md:row-start-1 md:text-right" : ""}`}
              >
                <h3 className="font-display text-lg font-bold">{item.role}</h3>
                <span className="mb-0.5 block text-sm text-primary">{item.org}</span>
                <span className="mb-3 block font-mono text-xs text-faint">{item.dates}</span>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
