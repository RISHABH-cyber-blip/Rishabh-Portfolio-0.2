"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ArrowUpRight, Play, X } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const onTilt = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.transform = `rotateX(${((y - r.height / 2) / r.height) * -8}deg) rotateY(${((x - r.width / 2) / r.width) * 8}deg)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <div className="[perspective:1000px]">
      <div
        ref={ref}
        onMouseMove={onTilt}
        onMouseLeave={reset}
        className="glass flex h-full min-h-[560px] flex-col gap-5 p-3.5 transition-transform duration-150 ease-out [transform-style:preserve-3d]"
      >
        <div
          className="group relative aspect-[16/11] overflow-hidden rounded-[22px] border border-transparent bg-gradient-to-br from-accent/15 to-primary/15 transition-all duration-300 hover:border-white/15 hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
          onMouseEnter={() => project.video && setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onClick={() => project.video && setPlaying(true)}
        >
          {project.video ? (
            <video
              src={project.video}
              muted
              loop
              playsInline
              autoPlay={hovering}
              className="h-full w-full object-cover transition-all duration-300 ease-out"
              style={{ transform: "none" }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-black/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <Play size={22} fill="white" className="text-white" />
              </div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
            Preview
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-lg shadow-black/20">
              <Play size={22} fill="white" className="text-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-2 pb-2">
          <h3 className="font-display mb-2 text-xl font-bold">{project.name}</h3>
          <p className="mb-5 text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="mt-auto flex gap-2.5">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="cursor-hover flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border py-2.5 text-xs font-semibold transition-colors hover:border-accent/50"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="cursor-hover flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent py-2.5 text-xs font-semibold text-[#051014]"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-[600] flex items-center justify-center bg-[#05070a]/80 p-4 backdrop-blur-xl transition-all duration-300"
          onClick={() => setPlaying(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[26px] border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all duration-300 animate-[fadeIn_0.24s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setPlaying(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
            >
              <X size={18} />
            </button>
            <video src={project.video} controls autoPlay playsInline className="block aspect-video w-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-[1240px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-[600px] text-center"
        >
          <span className="eyebrow justify-center">SELECTED WORK</span>
          <h2 className="font-display mt-4 text-4xl font-extrabold md:text-5xl">Projects</h2>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-3 xl:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
