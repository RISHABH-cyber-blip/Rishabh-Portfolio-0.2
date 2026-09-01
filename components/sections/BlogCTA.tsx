"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogCTA() {
  return (
    <div className="mx-auto max-w-[1240px] px-8">
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative my-16 overflow-hidden rounded-[32px] border border-border px-8 py-28 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,229,255,0.1), rgba(124,92,255,0.14))",
        }}
      >
        <div className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-accent opacity-30 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-primary opacity-30 blur-[90px]" />
        <span className="eyebrow relative justify-center">FROM THE BLOG</span>
        <h2 className="font-display relative mx-auto mt-4 max-w-[640px] text-4xl font-extrabold md:text-5xl">
          I write about the web too
        </h2>
        <Link href="/blog" className="btn btn-solid cursor-hover relative mt-9 inline-flex">
          Read the Blog
        </Link>
      </motion.section>
    </div>
  );
}
