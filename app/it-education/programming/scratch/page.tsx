import { ArrowLeft, Monitor, Code, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ScratchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/it-education" className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" />
        返回信息技术
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
            <Code className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <span className="inline-block bg-green-50 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-1">🌱 入门</span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Scratch 基础</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Scratch 是 MIT 开发的图形化编程语言，通过拖拽积木块的方式学习编程，无需记忆复杂的语法。
          本课程适合零基础学生，帮助建立编程思维。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第一课：认识 Scratch</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">了解 Scratch 编程环境的基本组成，学会创建第一个项目。</p>
              <ul className="space-y-2">
                {["舞台区：角色表演的地方", "积木区：存放所有编程积木", "脚本区：拖拽积木编写程序", "角色区：管理所有角色", "第一个程序：让小猫动起来"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第二课：顺序与运动</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">学习顺序结构，让角色按照指令一步一步执行动作。</p>
              <ul className="space-y-2">
                {["移动积木：让角色前进/后退指定步数", "转向积木：左转/右转指定角度", "坐标系统：理解 x 和 y 坐标", "外观积木：切换造型、说对话、改变大小", "练习：让小猫在舞台上走出正方形"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第三课：循环结构</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">用循环积木让重复的动作自动化执行。</p>
              <ul className="space-y-2">
                {["重复执行积木：无限循环", "重复执行 N 次积木：有限循环", "循环嵌套：循环里面套循环", "练习：绘制多彩螺旋图案", "挑战：制作循环动画"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第四课：条件判断</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">用如果-那么积木让角色根据条件做出不同反应。</p>
              <ul className="space-y-2">
                {["如果-那么积木：条件成立时执行", "如果-那么-否则积木：双分支判断", "侦测积木：碰到颜色、碰到边缘", "运算积木：比较大小、逻辑运算", "练习：制作接苹果小游戏"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">第五课：变量与列表</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">用变量存储数据，用列表管理多个数据项。</p>
              <ul className="space-y-2">
                {["创建变量：给数据取个名字", "修改变量值：增加、减少、设为", "变量在游戏中的应用：计分、计时", "列表：存储多个数据", "练习：制作问答游戏（含计分功能）"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 bg-purple-50 border border-purple-100 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">综合项目：动画故事</h3>
          <p className="text-gray-600 text-sm mb-4">综合运用顺序、循环、条件判断和变量，制作一个包含多个场景的动画故事。</p>
          <div className="flex flex-wrap gap-2">
            {["场景切换", "角色对话", "背景音乐", "用户交互"].map((t) => (
              <span key={t} className="text-xs bg-white text-purple-600 px-2.5 py-1 rounded-full border border-purple-200">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
