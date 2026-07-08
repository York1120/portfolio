import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        返回博客列表
      </Link>

      <article className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>

        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

        <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-gray-600 prose-li:leading-relaxed prose-strong:text-gray-900">
          {post.content}
        </div>
      </article>
    </div>
  )
}
