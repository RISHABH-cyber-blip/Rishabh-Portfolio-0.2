"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 z-[500] w-[calc(100%-2rem)] max-w-[1080px] -translate-x-1/2 rounded-full border border-border bg-[#080a0d]/60 px-6 py-3.5 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-display text-[19px] font-extrabold cursor-hover">
          Rishabh
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="cursor-hover relative text-sm text-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/#contact" className="cursor-hover hidden rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-[#051014] md:inline-block">
          Hire Me
        </a>
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <ul className="mt-4 flex flex-col gap-4 border-t border-border pt-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted">
                {l.label}
              </a>
            </li>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} className="rounded-full bg-accent px-5 py-2.5 text-center text-[13px] font-semibold text-[#051014]">
            Hire Me
          </a>
        </ul>
      )}
    </nav>
  );
}
