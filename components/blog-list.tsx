"use client"

import { useState, useMemo } from "react"
import { Calendar, ArrowRight, Tag, Search } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog"

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const allCategories = [...new Set(posts.map((p) => p.category))]

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchSearch =
        !searchQuery ||
        post.title.includes(searchQuery) ||
        post.excerpt.includes(searchQuery)
      const matchCategory = !activeCategory || post.category === activeCategory
      return matchSearch && matchCategory
    })
  }, [searchQuery, activeCategory, posts])

  return (
    <>
      {/* 搜索与筛选 */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索文章..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className={"px-3 py-2 rounded-lg text-sm font-medium transition-colors " + (!activeCategory ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200")}
          >
            全部
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={"px-3 py-2 rounded-lg text-sm font-medium transition-colors " + (activeCategory === cat ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200")}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 文章列表 */}
      <div className="space-y-6">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">没有找到匹配的文章</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory(null) }}
              className="mt-3 text-blue-600 text-sm font-medium hover:text-blue-700"
            >
              清除筛选条件
            </button>
          </div>
        ) : (
          filtered.map((post) => (
            <Link key={post.slug} href={"/blog/" + post.slug}>
              <article className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                    阅读全文 <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            </Link>
          ))
        )}
      </div>
    </>
  )
}
