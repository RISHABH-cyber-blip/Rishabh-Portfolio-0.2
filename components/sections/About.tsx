"use client";

import { motion } from "framer-motion";
import { skills, socials } from "@/lib/data";
import GithubHeatmap from "@/components/GithubHeatmap";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="py-40">
      <div className="mx-auto max-w-[1240px] px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-[640px] text-center"
        >
          <span className="eyebrow justify-center">WHO AM I</span>
          <h2 className="font-display mt-4 text-4xl font-extrabold md:text-5xl">
            3D Web Developer &amp; Frontend Freelancer
          </h2>
        </motion.div>

        <div className="grid gap-9 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="glass relative overflow-hidden p-9"
            >
              <span className="font-display absolute right-5 top-2 text-8xl text-primary opacity-20">
                &quot;
              </span>
              <p className="font-display relative text-xl font-bold italic leading-snug md:text-2xl">
                It&apos;s not a bug, it&apos;s an undocumented feature.
              </p>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mt-6 text-[15.5px] leading-relaxed text-muted"
            >
              I build visually striking, interactive websites using React, Three.js and GSAP —
              the kind that make clients stop scrolling. I care more about the experience feeling
              alive than just looking good in a screenshot.
            </motion.p>
          </div>

          <div>
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="mb-4 block font-mono text-xs tracking-wider text-primary"
            >
              TECH ARSENAL
            </motion.span>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ show: { transition: { staggerChildren: 0.04 } } }}
              className="flex flex-wrap gap-2.5"
            >
              {skills.map((s) => (
                <motion.div key={s} variants={fadeUp} className="chip cursor-hover">
                  {s}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-7"
            >
              <GithubHeatmap username={socials.githubUsername} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
