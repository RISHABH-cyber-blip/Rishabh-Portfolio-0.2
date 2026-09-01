import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata = { title: "Blog — Rishabh" };

export default function BlogPage() {
  return (
    <main className="relative z-10 min-h-screen px-8 pb-32 pt-40">
      <div className="mx-auto max-w-[1000px]">
        <span className="eyebrow">FROM THE BLOG</span>
        <h1 className="font-display mt-4 mb-16 text-4xl font-extrabold md:text-5xl">
          Writing on the web
        </h1>

        <div className="grid gap-7 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="cursor-hover glass group overflow-hidden p-1.5"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-accent/15 to-primary/15 transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="p-6">
                <span className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-[11px] font-medium text-primary">
                  {post.tag}
                </span>
                <h2 className="font-display mb-2 text-xl font-bold">{post.title}</h2>
                <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
