import Background3D from "@/components/Background3D";
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
