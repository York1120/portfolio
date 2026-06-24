import { Calendar, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "如何用互动实验突破物理教学难点",
    excerpt: "结合具体教学案例，分享互动实验在声学、光学等章节中的实际应用效果，以及学生的反馈数据。",
    date: "2026年6月",
    category: "教学心得",
    readTime: "5 分钟",
  },
  {
    title: "初中信息技术课编程入门教学设计",
    excerpt: "从 Scratch 到 Python，设计适合初中生的编程入门课程路径，兼顾趣味性与知识性。",
    date: "2026年5月",
    category: "课程设计",
    readTime: "8 分钟",
  },
  {
    title: "班级排座位系统的开发故事",
    excerpt: "一个解决实际教学管理需求的小工具是如何从想法变成现实的，分享技术选型与开发心得。",
    date: "2026年4月",
    category: "技术分享",
    readTime: "6 分钟",
  },
  {
    title: "用 Canvas 制作物理互动实验的技术实践",
    excerpt: "探讨如何使用 HTML5 Canvas 实现物理模拟，包括碰撞检测、粒子系统与实时渲染。",
    date: "2026年3月",
    category: "技术分享",
    readTime: "10 分钟",
  },
  {
    title: "关于计算思维培养的几点思考",
    excerpt: "在信息技术教学中，如何将计算思维融入日常课堂，而不只是教学生操作软件。",
    date: "2026年2月",
    category: "教学心得",
    readTime: "7 分钟",
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">教学博客</h1>
        <p className="text-gray-600 text-lg">分享教学心得、技术探索与教育思考</p>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <article
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors cursor-pointer">
                阅读全文 <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
