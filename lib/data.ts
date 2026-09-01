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
    description: "MH Legal — a lawyer-firm site with advocate profiles, animated stats, and a video-based legal-insights blog.",
    image: "/projects/placeholder-2.jpg",
    github: "https://github.com/RISHABH-cyber-blip/govind_law",
    live: "govind-law.vercel.app",
  },
  {
    slug: "project-three",
    name: "Iphone model",
    description: "A pixel-perfect iPhone 12 Pro landing page clone with a 3D model, scroll-animated stats, and a marquee feature ticker.",
    image: "/projects/placeholder-3.jpg",
    github: "https://github.com/RISHABH-cyber-blip/apple-website",
    live: "https://apple-website-ten-teal.vercel.app/",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  { name: "Govind", role: "Lawyer", quote: "Rishabh transformed our legal website into a modern, responsive platform that has significantly improved our online presence." },
  { name: "Shiva", role: "Client", quote: "Rishabh's attention to detail and technical expertise helped us to think about a website that truly represents our brand." },
  { name: "Rishikesh", role: "Client", quote: "Rishabh delivered a stunning website that exceeded our expectations and has been a great asset to our business." },
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
    description: "Freelance web developer building production-grade, full-stack sites for real clients — from a law firm's marketing site (MH Legal) to a full e-commerce platform with real auth and payments (Aurele) — plus pixel-perfect clone work (Apple iPhone 12 Pro) showcasing animation and 3D polish.",
  },
  {
    role: "Data Science Intern",
    org: "Thiranex",
    dates: "2 months",
    description: "Completed a two-month data science internship at Thiranex, working on real-world data workflows and analysis tasks.",
  },
  {
    role: "web developer",
    org: "College Major Project",
    dates: "6 months",
    description: "A system for remotely tracking patient vitals and health data, built as a major college project — [add: what stack, what it actually monitored, any standout feature like real-time alerts or a dashboard].",
  },
  {
    role: "learner",
    org: "Aws cloud computing",
    dates: "3 months",
    description: "Completed a three-month learning journey in AWS cloud computing, focusing on core services and deployment strategies.",
  }
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
