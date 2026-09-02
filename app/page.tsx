"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Experience from "@/components/sections/Experience";
import BlogCTA from "@/components/sections/BlogCTA";
import Contact from "@/components/sections/Contact";

// Canvas/WebGL only exists in the browser — prerendering this on the server
// (Next.js's default for static pages) crashes the build. ssr:false skips
// server rendering for this component and mounts it client-side only.
const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative z-10">
      <Background3D />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
      <BlogCTA />
      <Contact />
    </main>
  );
}