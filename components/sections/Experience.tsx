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

        <div className="relative mx-auto max-w-[900px]">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 via-primary/50 to-transparent md:block" />

          {experience.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative mb-8 flex flex-col gap-3 md:mb-10 md:block"
              >
                <span className="relative left-1 top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_#00E5FF] md:absolute md:left-1/2 md:top-7 md:-translate-x-1/2" />

                <div className={isLeft ? "md:w-1/2 md:pr-12" : "md:ml-auto md:w-1/2 md:pl-12"}>
                  <div className={`glass p-6 ${isLeft ? "md:mr-2" : "md:ml-2"}`}>
                    <h3 className="font-display text-lg font-bold">{item.role}</h3>
                    <span className="mb-0.5 block text-sm text-primary">{item.org}</span>
                    <span className="mb-3 block font-mono text-xs text-faint">{item.dates}</span>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
