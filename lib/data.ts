export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "React Three Fiber",
  "GSAP",
  "Framer Motion",
  "Spline",
  "Git",
  "Supabase",
  "Appwrite",
];

export const socials = {
  linkedin: "https://www.linkedin.com/in/rishabh-mishra-884691309/recent-activity/all/",
  github: "https://github.com/RISHABH-cyber-blip?tab=repositories",
  githubUsername: "RISHABH-cyber-blip",
  instagram: "https://www.instagram.com/coding_rishabh?igsi=MWI0ZWc2YmpzcnlhZQ==",
  portfolio: "https://rishabh-cyber-blip.github.io/Rishabh-Portfolio/",
  whatsappNumber: "918076062578", // country code + number, no + or spaces
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  video?: string;
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Aurele",
    description: "Aurele — a full-stack luxury watch e-commerce demo with real auth and payments, styled in an editorial dark theme with a drag-to-rotate hero.",
    image: "/projects/placeholder-1.jpg",
    github: "https://github.com/RISHABH-cyber-blip/AURELE",
    live: "aurele-nine.vercel.app",
  },
  {
    slug: "project-two",
    name: "MhLegacyLaw",
    description: "A modern legal services website with a focus on user experience and responsive design.",
    image: "/projects/placeholder-2.jpg",
    github: "#",
    live: "#",
  },
  {
    slug: "project-three",
    name: "[Project 3 Name]",
    description: "[1–2 line description — what it does and what makes it visually interesting.]",
    image: "/projects/placeholder-3.jpg",
    github: "#",
    live: "#",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  { name: "[Client Name]", role: "[Client Role / Company]", quote: "[A short, specific quote about the results you delivered.]" },
  { name: "[Client Name]", role: "[Client Role / Company]", quote: "[A short, specific quote about the results you delivered.]" },
  { name: "[Client Name]", role: "[Client Role / Company]", quote: "[A short, specific quote about the results you delivered.]" },
];

export type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Web Developer",
    org: "Self-Employed",
    dates: "2023 — Present",
    description: "[Short description of freelance work — clients, focus areas, notable outcomes.]",
  },
  {
    role: "[Role Title]",
    org: "[Company / Client]",
    dates: "[Dates]",
    description: "[Short description of responsibilities and impact.]",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  readingTime: string;
  content: string; // markdown-ish plain text paragraphs, split by \n\n
};

export const blogPosts: BlogPost[] = [
  {
    slug: "react-three-fiber-for-beginners",
    title: "React Three Fiber for Beginners",
    tag: "3D / React",
    excerpt: "How I got comfortable adding real 3D scenes to React apps without learning raw Three.js first.",
    readingTime: "6 min read",
    content:
      "React Three Fiber lets you describe a Three.js scene using React components instead of imperative setup code.\n\nThe biggest shift is thinking in terms of a scene graph: every mesh, light, and camera is just a component that can accept props and re-render.\n\nStart small — a single rotating shape with a light — before reaching for physics, post-processing, or loaded models.",
  },
  {
    slug: "gsap-scrolltrigger-basics",
    title: "GSAP ScrollTrigger Basics",
    tag: "Animation",
    excerpt: "The core mental model behind scroll-driven animation, and the mistakes that cause janky reveals.",
    readingTime: "5 min read",
    content:
      "ScrollTrigger ties any GSAP animation to scroll position using a trigger element and a start/end range.\n\nThe most common mistake is animating layout properties like width or top instead of transform and opacity, which causes jank on lower-end devices.\n\nUse toggleActions to control whether an animation replays, reverses, or stays put as the user scrolls back up.",
  },
  {
    slug: "prompting-ai-for-threejs-code",
    title: "Prompting AI to Write Three.js Code (Without Learning It From Scratch)",
    tag: "Workflow",
    excerpt: "My actual process for directing AI tools to generate 3D web code as a director, not a Three.js expert.",
    readingTime: "7 min read",
    content:
      "I treat myself as the creative director and the AI as the implementer — I describe the feeling I want, not the API calls.\n\nBeing specific about constraints (performance budget, mobile fallback, color palette) gets far better results than vague prompts.\n\nI always ask for the simplest version first, then iterate in small, reviewable steps rather than one giant generation.",
  },
];
