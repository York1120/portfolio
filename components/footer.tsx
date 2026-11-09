import { Mail } from "lucide-react"
import Link from "next/link"
import { FooterYear } from "@/components/footer-year"

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
              <li><a href="/physics/" className="text-gray-400 hover:text-white transition-colors">物理教学</a></li>
              <li><Link href="/it-education" className="text-gray-400 hover:text-white transition-colors">信息技术</Link></li>
              <li><Link href="/tools" className="text-gray-400 hover:text-white transition-colors">在线工具</Link></li>
            </ul>
          </div>

          {/* 教学资源 */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">教学资源</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">课件下载</Link></li>
              <li><Link href="/resources#plans" className="text-gray-400 hover:text-white transition-colors">教案分享</Link></li>
              <li><Link href="/resources#exams" className="text-gray-400 hover:text-white transition-colors">试题库</Link></li>
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
          <p>&copy; <FooterYear buildYear={new Date().getFullYear()} /> 周老师教学园地 · 保留所有权利</p>

          {/*
            备案信息（工信部 + 公安联网备案均为强制展示项）。
            注意：
            1. ICP 号必须原样展示并链接到 beian.miit.gov.cn，不可拆行或加空格。
            2. 公安备案尚无「粤公网安备 ×× 号」正式编号，暂以数据码跳转官方查询页；
               拿到正式编号后，把下面的文字替换即可，href 不必改。
          */}
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-300"
            >
              粤ICP备2026169766号
            </a>
            <span aria-hidden="true" className="text-gray-700">
              |
            </span>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=f623891cea7755205a7787259005b838"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-300"
            >
              公安联网备案
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
