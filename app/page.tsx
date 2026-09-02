import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Experience from "@/components/sections/Experience";
import BlogCTA from "@/components/sections/BlogCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative z-10">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(98,188,255,0.18),_transparent_38%),radial-gradient(circle_at_bottom,_rgba(153,102,255,0.14),_transparent_42%)]" />
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