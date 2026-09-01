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
    excerpt: "A plain-English introduction to the React renderer that makes Three.js feel natural inside component-based apps.",
    readingTime: "8 min read",
    content:
      "React Three Fiber is a React renderer for Three.js. In plain terms, it lets you build a 3D scene using JSX instead of writing a long chain of imperative Three.js setup code. If you already know React, the mental model feels familiar: the scene is a tree of components, and each component can hold state, props, and effects. Instead of manually creating a camera, scene, and mesh with new THREE.Mesh(), you describe them as <Canvas>, <mesh>, <ambientLight>, and so on.\n\nThis is one of the biggest reasons developers love it. You can keep the logic of your interface and your 3D scene in the same app structure. A component can react to hover, click, or animation state without leaving React. That means the same state-driven workflow you use for UI elements can also drive your 3D objects.\n\nThe first thing to install is the core pair: three and @react-three/fiber. If you are using TypeScript, you also want the type definitions for Three.js. Once installed, the usual starting point is a <Canvas> component, which creates the webgl context and provides a render loop. Inside it, you add lights and objects like meshes, cameras, and materials. This is the basic building block of every scene.\n\nA very simple example looks like this in concept: a component called Box uses a ref to access the mesh, then updates its rotation every frame with useFrame. The mesh contains a boxGeometry and a meshStandardMaterial. The Canvas wraps the scene and includes ambientLight and pointLight. That is enough to create a rotating cube, and it is a great way to understand how R3F works. The object does not live in the DOM; it exists in the Three.js scene graph, but the component API still feels like React.\n\nThe most important mental shift is that every mesh, camera, light, and group is just a React component. That means you can keep your scene declarative: a group of objects inside a component, passed props like position, rotation, scale, and color. You can store state with useState, respond to interaction with onClick and onPointerOver, and subscribe to animation updates with useFrame. This is the exact same idea as React components in the 2D UI, just translated to 3D.\n\nA beginner often worries that they need to master raw Three.js first. The docs suggest that you should still have a basic understanding of Three.js concepts such as scene, camera, mesh, geometry, and material, but you do not need to write all of the low-level setup yourself. R3F is not replacing Three.js; it is expressing Three.js in JSX. If a new built-in Three.js feature gets added, it is generally available in R3F almost immediately because the API maps directly to Three.js objects.\n\nThe official documentation also makes a useful point: React Three Fiber has no real performance penalty compared with plain Three.js. It renders outside of React, and React’s scheduling can even help with scale in complex scenes. The real performance decisions still come from how you structure the scene: avoid unnecessary re-renders, reuse geometry and materials, and keep the number of objects under control. If you start with one rotating box, one light, and a basic plane, you will learn the important principles without drowning in complexity.\n\nThe best way to begin is to keep your first project small and interactive. Try a rotating cube, then add hover state, then a group of cubes, then a simple glowing particle effect. Once those concepts feel natural, you can move to more advanced stacks like Drei helpers, post-processing, or physics integrations. The real magic of React Three Fiber is that it gives you a familiar React workflow for an unfamiliar 3D world. That combination is exactly why it has become so popular in modern web experiences.\n\nIf you remember one rule, let it be this: start with the scene graph, not with the most complicated effect. Build slowly, keep each component responsible, and let Three.js do the heavy lifting while React keeps the structure readable. That is the beginner-friendly path into 3D web development."
  },
  {
    slug: "gsap-scrolltrigger-basics",
    title: "GSAP ScrollTrigger Basics",
    tag: "Animation",
    excerpt: "A beginner-friendly look at how ScrollTrigger binds animation to the scroll position and makes complex motion feel polished.",
    readingTime: "7 min read",
    content:
      "ScrollTrigger is one of the most useful GSAP plugins because it lets animations react to how far a user has scrolled. Instead of building motion that runs on its own, you tie it to a trigger element and define where the animation should start and end. This makes it perfect for revealing content, pinning sections, parallax motion, and scroll-driven storytelling. In a simple setup, you animate an element when it enters the viewport and then let it reverse when the user scrolls back out. The plugin works almost like a scroll-aware timeline.\n\nThe simplest example is a box that moves to the right when it enters the viewport. You create a GSAP tween and attach a scrollTrigger configuration to it. A common pattern is to pass the element or selector as the trigger, and then define start and end values. For example, the trigger can be the element itself, and the animation can start when the top of that element hits the center of the viewport. This means the animation only begins when the user reaches the right point in the scroll. The trigger becomes the scroll boundary for the motion.\n\nThe key values to learn are start, end, trigger, scrub, and toggleActions. The start property tells ScrollTrigger when the animation should begin, while end defines when it should finish. You can use strings like top center, bottom top, or even relative values such as +=500. These strings make it easy to describe relationships between the trigger and the viewport without doing math in your head. If you use an element like a section as the trigger, the plugin calculates those values based on the actual page position.\n\nScrub is one of the most powerful options because it makes the animation follow the scrollbar directly. When scrub is true or a number like 1, the animation is linked to scroll progress so it acts more like a smooth controller than a simple on/off reveal. This is useful for text fades, image transforms, or timeline-based storytelling where the motion should feel physically connected to the scroll. If you set scrub: 1, the animation temporarily lags behind the scroll position, making the movement feel more natural and less abrupt.\n\nPinning is another classic ScrollTrigger feature. When you pin an element, it stays fixed while the rest of the content continues to scroll beneath it. This is often used for sticky sections, product showcases, or tutorial steps. The plugin temporarily fixes the element in place and then releases it when the trigger ends. Because this can feel dramatic if done poorly, the docs strongly recommend avoiding unnecessary animation on the pinned element itself. Instead, animate children inside the pinned area so the measurements remain stable and the effect stays smooth.\n\nScrollTrigger also gives you callbacks like onEnter, onLeave, onEnterBack, and onLeaveBack. These are extremely useful when you want to trigger state changes, animate headings, or enable complex interactions without tying everything to a single tween. For example, you can use onToggle to detect when a section becomes active and update a progress indicator or change a navigation state. This is where ScrollTrigger stops being just a plugin and starts acting like a controller for your whole interaction model.\n\nThe docs also point out an important design principle: use transforms and opacity rather than animating layout properties such as width, top, or left when possible. Layout changes often cause expensive browser reflow and make scrolling feel janky, especially on lower-end devices. GSAP already optimizes animation with transforms, which is why motion tends to stay smooth when it is tied to transform-based properties. This is a practical rule that makes a huge difference in real projects.\n\nFor development, markers are a huge help. Setting markers: true overlays the trigger bounds in the page so you can visually confirm where the start and end points are. This makes debugging much easier, especially when the animation is not firing at the exact moment you expect. GSAP is designed to be flexible, so once you understand trigger points, scrub, and pinning, you can build a lot of advanced ideas without writing a lot of custom scroll logic.\n\nIf you are just starting, the best approach is to build one small scroll animation at a time: a fade-in, a parallax card, then a pinned section, and finally a timeline with different phases. ScrollTrigger becomes much easier once you treat scroll as a timeline of states rather than as a single continuous event. That mental model is what makes the plugin feel easy to control and very powerful in production websites.\n\nIn short, ScrollTrigger is not just for decoration. It is a tool for making the page respond to the user’s movement in a purposeful way. Once you understand the trigger, the start/end window, and the idea of scroll progress, you are already well on your way to creating modern, polished motion that feels intentional rather than random."
  },
  {
    slug: "ai-prompting-threejs-code",
    title: "Prompting AI to Write Three.js Code Without Learning It From Scratch",
    tag: "Workflow",
    excerpt: "A practical process for directing AI tools to generate 3D web code without memorizing every Three.js API.",
    readingTime: "6 min read",
    content:
      "AI tools can be incredibly useful for 3D web work, but they are most effective when you treat them as implementation partners rather than magical code generators. The best prompts describe the goal, the constraints, and the effect you want to achieve. Instead of asking for a random Three.js example, it is much more effective to say what kind of experience you want: a warm glow, an interactive rotating object, a subtle background effect, or a performance-friendly scene that works on mobile. The more specific you are, the better the output tends to be.\n\nThis approach works because AI does not really think like a designer by default. It needs a clear direction: color palette, motion direction, camera framing, object count, and the intended interaction. If you want a hero section with a floating cube that rotates slowly and reacts to cursor movement, you should say that directly. If you also care about performance or mobile compatibility, you should mention those constraints too. Good prompts are basically design briefs.\n\nA helpful habit is to ask for the simplest version first. If you want a 3D product card, ask for a bare-bones scene with one mesh, one light, and one interaction. Once that works, you can ask for improvements like ambient fog, a more dramatic camera angle, better material shading, or more realistic lighting. This keeps the process incremental and easier to debug. It also makes the code more readable because each change is focused on one idea instead of a giant block of generated content.\n\nAnother useful rule is to always review the generated code against the real Three.js mental model. You do not need to memorize every API, but you should understand the role of a mesh, camera, geometry, material, and scene. If the AI gives you a component that creates a sphere and a point light, you should be able to explain why those elements belong together. That understanding makes it much easier to adjust the code when the result is close but not perfect.\n\nThis is where prompts become more powerful when paired with structure. Instead of asking for one huge component, ask for smaller building blocks: a Box component, a Room component, and a SceneShell component. That helps the AI produce cleaner, easier-to-manage code. It also makes debugging much easier because each component has a single job. In practice, this is how experienced developers use AI: not to replace their knowledge, but to accelerate their iteration speed.\n\nYou should also treat AI-generated 3D code as a starting point, not a final answer. A generated snippet might be visually exciting, but there are usually subtle issues around lighting, performance, mobile support, or event handling. This is normal. The correct workflow is to review, test, and refine. It is often far more productive to ask, “Can you simplify this and explain why it works?” than to generate a giant code block and hope it is correct on the first try.\n\nThe most important skill is learning how to direct the model instead of trying to out-code it. If you understand the principles of scene composition and animation, you can quickly spot whether a generated scene is structurally sound. That makes the AI much more useful. You become the creative director, and the AI becomes the implementation tool. This is how modern web teams use AI: as a speed boost, not as a replacement for understanding.\n\nIn the end, the goal is not to memorize every detail of Three.js. The goal is to know enough to guide the output toward a strong result. Once you can describe the scene, the motion, and the constraints clearly, AI can create surprisingly solid starting points. From there, your own judgment and debugging will shape it into something production-ready."
  },
];
