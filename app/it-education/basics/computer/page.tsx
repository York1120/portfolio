import { ArrowLeft, Monitor, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ComputerBasicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/it-education" className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" />
        返回信息技术
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <span className="inline-block bg-green-50 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-1">🌱 入门</span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">计算机基础</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          认识计算机的硬件组成和软件系统，掌握操作系统的基本操作，为后续学习打下坚实基础。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">计算机的发展历史</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">了解计算机从诞生到现在的演变过程。</p>
              <ul className="space-y-2">
                {["第一代：电子管计算机（1946-1958）—— ENIAC 占地 170 平方米", "第二代：晶体管计算机（1958-1964）—— 体积缩小、功耗降低", "第三代：集成电路计算机（1964-1971）—— 性能大幅提升", "第四代：大规模集成电路（1971-至今）—— 个人电脑普及", "第五代：人工智能计算机（现在和未来）—— 智能化的新纪元"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">硬件组成</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">认识计算机的主要硬件部件及其功能。</p>
              <ul className="space-y-2">
                {["CPU（中央处理器）：计算机的大脑，负责运算和控制", "内存（RAM）：临时存储正在运行的程序和数据", "硬盘（HDD/SSD）：永久存储文件和程序", "主板：连接所有硬件的电路板", "输入设备：键盘、鼠标、麦克风", "输出设备：显示器、打印机、音箱"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">软件分类</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">了解系统软件和应用软件的区别。</p>
              <ul className="space-y-2">
                {["系统软件：操作系统（Windows/macOS/Linux）", "系统软件：驱动程序、编译器等", "应用软件：办公软件（Word、Excel、PPT）", "应用软件：浏览器、游戏、设计工具", "开源软件与商业软件的区别"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">操作系统基本操作</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">掌握 Windows 操作系统的常用操作。</p>
              <ul className="space-y-2">
                {["桌面与任务栏：图标、开始菜单、系统托盘", "文件管理：新建、复制、移动、删除文件和文件夹", "窗口操作：最大化、最小化、关闭、切换", "系统设置：显示设置、网络设置、用户账户", "快捷键：Ctrl+C 复制、Ctrl+V 粘贴、Alt+Tab 切换"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">键盘指法训练</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">学习正确的键盘指法，提升打字速度和准确率。</p>
              <ul className="space-y-2">
                {["认识键盘分区：主键盘区、功能键区、数字键区", "基准键位：ASDF JKL;", "正确坐姿和手指分工", "常用在线打字练习平台推荐", "目标：每分钟 40 个中文字符"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
