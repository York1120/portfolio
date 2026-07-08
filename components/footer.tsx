import { Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* 品牌简介 */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">York</span>
              </div>
              <span className="text-lg font-bold">周老师教学园地</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              初中物理 · 信息技术教师，致力于用互动实验和技术工具让课堂更有趣、更高效。
            </p>
          </div>

          {/* 快速导航 */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">快速导航</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
              <li><Link href="/physics" className="text-gray-400 hover:text-white transition-colors">物理教学</Link></li>
              <li><Link href="/it-education" className="text-gray-400 hover:text-white transition-colors">信息技术</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">教学博客</Link></li>
            </ul>
          </div>

          {/* 教学资源 */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">教学资源</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">课件下载</Link></li>
              <li><Link href="/resources#plans" className="text-gray-400 hover:text-white transition-colors">教案分享</Link></li>
              <li><Link href="/resources#exams" className="text-gray-400 hover:text-white transition-colors">试题库</Link></li>
              <li><Link href="/tools" className="text-gray-400 hover:text-white transition-colors">在线工具</Link></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">联系方式</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:mynameisyork@163.com" className="hover:text-white transition-colors">
                  mynameisyork@163.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 周老师教学园地 · 保留所有权利</p>
        </div>
      </div>
    </footer>
  )
}
