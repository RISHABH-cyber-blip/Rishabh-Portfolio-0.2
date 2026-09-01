"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import profileImage from "./Rishabh.jpeg";

const NAME = "Rishabh";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const onTilt = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y - r.height / 2) / r.height) * -10;
    const ry = ((x - r.width / 2) / r.width) * 10;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const resetTilt = () => {
    if (cardRef.current) cardRef.current.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-28">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-14 px-8 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="font-display flex flex-wrap text-[64px] font-extrabold leading-[0.92] tracking-tight md:text-[104px]">
            {NAME.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: 90, opacity: 0, rotate: 6 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-5 max-w-[480px] text-xl text-muted md:text-2xl"
          >
            Web Developer — building{" "}
            <span className="font-semibold text-primary">immersive, 3D-driven</span> interfaces
            that feel alive, not templated.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn btn-solid cursor-hover">
              View Work
            </a>
            <a href="#contact" className="btn btn-ghost cursor-hover">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-14 flex gap-9"
          >
            {[
              ["3+", "YRS BUILDING"],
              ["12+", "PROJECTS SHIPPED"],
              ["100%", "CLIENT-FOCUSED"],
            ].map(([num, label]) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-display text-2xl font-bold text-accent">{num}</span>
                <span className="font-mono text-[11px] tracking-wider text-faint">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex justify-center [perspective:1200px]"
        >
          <div
            ref={cardRef}
            onMouseMove={onTilt}
            onMouseLeave={resetTilt}
            className="glass relative h-[380px] w-[300px] overflow-hidden rounded-[28px] transition-transform duration-150 ease-out [transform-style:preserve-3d]"
            style={{
              background: "linear-gradient(160deg, rgba(0,229,255,0.1), rgba(124,92,255,0.1))",
            }}
          >
            <Image
              src={profileImage}
              alt="Rishabh"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 text-faint">
        <span className="font-mono text-[11px] tracking-[0.14em]">SCROLL</span>
        <div className="h-9 w-px animate-cue bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
