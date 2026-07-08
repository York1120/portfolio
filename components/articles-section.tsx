import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

export function ArticlesSection() {
  const articles = blogPosts.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">教学博客</h2>
            <p className="text-gray-600 mt-2">分享教学心得、技术探索与教育思考</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            查看全部文章
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={"/blog/" + article.slug}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span className="inline-block bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
