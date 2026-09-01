"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ArrowUpRight, Play } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

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
        className="glass flex h-full flex-col gap-5 p-3.5 transition-transform duration-150 ease-out [transform-style:preserve-3d]"
      >
        <div
          className="group relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-accent/15 to-primary/15 cursor-hover"
          onClick={() => project.video && setPlaying(true)}
        >
          {/* Swap for a real <Image src={project.image} .../> once you have thumbnails */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:bg-black/40 group-hover:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-transform duration-300 group-hover:scale-110">
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
              className="cursor-hover flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border py-2.5 text-xs font-semibold transition-colors hover:border-accent/50"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={project.live}
              className="cursor-hover flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent py-2.5 text-xs font-semibold text-[#051014]"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-[600] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setPlaying(false)}
        >
          <video src={project.video} controls autoPlay className="max-h-[80vh] max-w-3xl rounded-xl" />
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

        <div className="grid gap-7 md:grid-cols-3">
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
