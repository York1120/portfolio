import { ArrowLeft, Monitor, Code, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 max-sm:py-8">
      <Link href="/it-education" className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" />
        返回信息技术
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 max-sm:p-5 md:p-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
            <Code className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-1">🚀 进阶</span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">趣味项目实践</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          通过完成四个趣味编程项目，综合运用 Python 所学知识，培养解决实际问题的能力。
          每个项目都包含需求分析、代码实现和拓展挑战。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">项目一：猜数字游戏</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">综合运用循环与条件判断，实现一个经典的猜数字游戏。</p>
              <ul className="space-y-2">
                {["程序随机生成 1-100 之间的数字", "玩家输入猜测的数字", "程序提示「大了」或「小了」", "猜中后显示猜测次数", "拓展：设置难度级别（数字范围不同）"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">项目二：简易计算器</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">学习函数定义与调用，制作一个支持四则运算的计算器。</p>
              <ul className="space-y-2">
                {["定义加减乘除四个函数", "用户输入两个数字和运算符", "调用对应函数计算结果", "处理除数为零的错误", "拓展：支持连续运算和括号"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">项目三：贪吃蛇游戏</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">用 turtle 模块实现经典贪吃蛇游戏，学习列表与坐标管理。</p>
              <ul className="space-y-2">
                {["用列表存储蛇身的每个坐标", "键盘控制蛇的移动方向", "食物随机生成，吃到后蛇身增长", "撞墙或撞到自己游戏结束", "拓展：计分系统和加速机制"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">项目四：天气查询工具</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">调用免费天气 API，学习网络请求和数据解析。</p>
              <ul className="space-y-2">
                {["了解 API 的基本概念", "用 requests 库发送网络请求", "解析 JSON 格式的返回数据", "提取温度、湿度、天气状况等信息", "拓展：支持多个城市查询和天气图标"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 bg-orange-50 border border-orange-100 rounded-xl p-6 max-sm:p-4">
          <h3 className="font-bold text-gray-900 mb-2">项目展示与代码评审</h3>
          <p className="text-gray-600 text-sm">完成所有项目后，组织课堂展示和代码评审。同学们互相学习不同的实现思路，分享编程技巧和解决问题的方法。</p>
        </div>
      </div>
    </div>
  )
}
