import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <main className="relative z-10 min-h-screen px-8 pb-32 pt-40">
      <article className="mx-auto max-w-[720px]">
        <Link href="/blog" className="cursor-hover mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <div className="mb-8 aspect-[16/7] rounded-3xl bg-gradient-to-br from-accent/15 to-primary/15" />

        <span className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-[11px] font-medium text-primary">
          {post.tag}
        </span>
        <h1 className="font-display mb-3 text-4xl font-extrabold leading-tight md:text-5xl">
          {post.title}
        </h1>
        <span className="font-mono text-xs text-faint">{post.readingTime}</span>

        <div className="mt-10 flex flex-col gap-6">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[17px] leading-[1.8] text-muted">
              {p}
            </p>
          ))}
        </div>

        <Link href="/blog" className="cursor-hover mt-14 inline-flex items-center gap-2 text-sm text-accent">
          <ArrowLeft size={16} /> Back to blog
        </Link>
      </article>
    </main>
  );
}
