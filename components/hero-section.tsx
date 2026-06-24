import { FlaskConical, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <FlaskConical className="w-4 h-4" />
            初中物理 · 信息技术教师
          </div>

          {/* 标题 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            你好，我是
            <span className="text-blue-600"> 周老师</span>
            <br />
            让知识在互动中
            <span className="text-orange-500"> 生动起来</span>
          </h1>

          {/* 描述 */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
            一名热爱教学的初中物理与信息技术教师。通过互动实验、编程实践和数字化工具，
            帮助学生在动手探索中理解抽象概念，培养科学思维与信息素养。
          </p>

          {/* 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/physics"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              <FlaskConical className="w-5 h-5" />
              进入物理实验室
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-3.5 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              了解更多
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-40 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10" />
    </section>
  )
}
