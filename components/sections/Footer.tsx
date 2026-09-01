"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border px-8 py-11">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-5">
        <span className="text-[13px] text-faint">
          © {new Date().getFullYear()} Rishabh. Built with code and curiosity.
        </span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="glass cursor-hover flex h-11 w-11 items-center justify-center"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
