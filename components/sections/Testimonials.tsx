"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="overflow-hidden py-32">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-14 max-w-[600px] px-8 text-center"
      >
        <span className="eyebrow justify-center">WHAT CLIENTS SAY</span>
        <h2 className="font-display mt-4 text-4xl font-extrabold md:text-5xl">Testimonials</h2>
      </motion.div>

      <div className="group flex">
        <div className="marquee-track animate-marquee group-hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div key={i} className="glass w-[380px] shrink-0 p-7">
              <div className="mb-4 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-muted">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border border-border bg-white/5" />
                <div>
                  <h4 className="font-display text-sm font-bold">{t.name}</h4>
                  <span className="text-xs text-primary">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
