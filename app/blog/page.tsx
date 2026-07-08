import { getAllPosts } from "@/lib/blog"
import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">教学博客</h1>
        <p className="text-gray-600 text-lg">分享教学心得、技术探索与教育思考</p>
      </div>

      <BlogList posts={posts} />
    </div>
  )
}
