# Rishabh — Portfolio (Next.js 14)

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you deploy — fill these in

| What | Where |
|---|---|
| Your photo | `components/sections/Hero.tsx` — replace the placeholder div with `<Image src="/your-photo.jpg" ... />` |
| GitHub username | `lib/data.ts` → `socials.githubUsername` |
| WhatsApp number | `lib/data.ts` → `socials.whatsappNumber` (country code + number, no `+` or spaces) — powers both the floating WhatsApp button and the contact section |
| LinkedIn / Instagram / portfolio URLs | `lib/data.ts` → `socials` |
| Projects (images, links, descriptions) | `lib/data.ts` → `projects` |
| Client testimonials | `lib/data.ts` → `testimonials` — use real quotes only |
| Work experience | `lib/data.ts` → `experience` |
| Blog posts | `lib/data.ts` → `blogPosts` |

## Notes

- **GitHub heatmap** calls `/api/github-contributions`, a server route that pulls live data from the free `github-contributions-api.jogruber.de` service (no token needed) and filters it to the current month. It falls back to a demo pattern if the username isn't set or the request fails.
- **Fonts**: uses Sora (display) + Inter (body) + JetBrains Mono via `next/font/google` as free stand-ins for Clash Display/Satoshi. Swap in the real fonts by adding `@font-face` rules and updating `app/layout.tsx` if you have a license for them.
- **3D background** (`components/Background3D.tsx`) uses React Three Fiber — wireframe shapes + a particle field that react to mouse position. It's only mounted on the home page for performance; the blog pages stay lightweight.
- **WhatsApp button**: floating on every page (`components/WhatsAppButton.tsx`), pre-fills a starter message so leads can message you in one tap from mobile or desktop.
- Contact form currently just shows an alert on submit — wire the `onSubmit` in `components/sections/Contact.tsx` to Supabase, Appwrite, or an API route + email service when ready.
- Deploy on Vercel: `vercel deploy`, or connect the GitHub repo directly.
"# Rishabh-Portfolio-2" 
"# Rishabh-Portfolio-0.2" 
