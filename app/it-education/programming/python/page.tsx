import { ArrowLeft, Monitor, Code, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Python 入门 | 周老师教学园地",
  description: "初中生 Python 入门：环境搭建、变量与数据类型、条件判断、循环语句与 turtle 绘图。",
}

export default function PythonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 max-sm:py-8">
      <Link href="/it-education" className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" />
        返回信息技术
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 max-sm:p-5 md:p-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
            <Code className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <span className="inline-block bg-green-50 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-1">🌱 入门</span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Python 入门</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Python 是一种简洁易读的编程语言，适合作为初中生的第一门代码编程语言。
          本课程从环境搭建开始，逐步学习变量、条件判断、循环等核心概念。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第一课：环境搭建与第一个程序</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">安装 Python 并编写第一个程序。</p>
              <ul className="space-y-2">
                {["下载并安装 Python", "认识 IDLE 编程环境", "编写第一个程序：print('Hello World!')", "运行程序并查看输出", "练习：用 print 输出自己的名字和年龄"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第二课：变量与数据类型</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">学习用变量存储不同类型的数据。</p>
              <ul className="space-y-2">
                {["变量：给数据取名字", "整数 int：age = 12", "浮点数 float：pi = 3.14", "字符串 str：name = 'Alice'", "布尔值 bool：is_student = True", "type() 函数查看数据类型"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第三课：条件判断</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">用 if-elif-else 让程序做出决策。</p>
              <ul className="space-y-2">
                {["if 语句：条件成立时执行", "比较运算符：> < == !=", "elif：多个条件判断", "else：所有条件都不满足时", "逻辑运算符：and or not", "练习：成绩等级判断程序"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第四课：循环语句</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">用 for 和 while 循环让重复工作自动化。</p>
              <ul className="space-y-2">
                {["for 循环：遍历 range()", "while 循环：条件成立时重复", "break：跳出循环", "continue：跳过本次循环", "循环嵌套：循环里面套循环", "练习：打印九九乘法表"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第五课：turtle 绘图</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">用 turtle 模块画图，让编程变得有趣又直观。</p>
              <ul className="space-y-2">
                {["导入 turtle 模块", "前进后退：forward() backward()", "转向：left() right()", "画笔控制：penup() pendown() color()", "画正方形、三角形、五角星", "练习：绘制彩色螺旋图案"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
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
