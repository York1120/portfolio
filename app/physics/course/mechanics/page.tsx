import { ArrowLeft, FlaskConical, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MechanicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/physics/course" className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" />
        返回物理教学
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            <FlaskConical className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <span className="inline-block bg-green-50 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-1">⭐ 基础</span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">力学</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          力学研究物体的运动和力的关系，从长度测量到浮力分析，连接实验现象与定量表达。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">长度与时间的测量</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">测量是物理学的基础，学会正确使用测量工具。</p>
              <ul className="space-y-2">
                {["长度的单位：米（m）、厘米（cm）、毫米（mm）", "刻度尺的使用：选、放、看、读、记", "估读：读到分度值的下一位", "时间的测量：秒表的使用", "误差与错误：误差不可避免，错误可以避免"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">浮力</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">浮力是浸在液体中的物体受到的向上的力。</p>
              <ul className="space-y-2">
                {["浮力的方向：竖直向上", "阿基米德原理：F浮 = G排 = ρ液 g V排", "物体的浮沉条件：密度比较法", "漂浮、悬浮、沉底三种状态", "浮力的应用：轮船、潜水艇、气球"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">大气压强</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">大气对浸在它里面的物体产生的压强叫大气压强。</p>
              <ul className="space-y-2">
                {["大气压的存在：马德堡半球实验", "大气压的测量：托里拆利实验", "标准大气压：1.013×10⁵ Pa", "大气压随海拔升高而减小", "气压计：测量大气压的仪器"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">互动实验</h3>
          <div className="flex flex-wrap gap-2">
            <a href="/physics/01-length.html" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">长度读取训练 <ArrowRight className="w-3 h-3" /></a>
            <a href="/physics/12-buoyancy.html" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">木块浮力图像 <ArrowRight className="w-3 h-3" /></a>
            <a href="/physics/13-torricelli.html" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">托里拆利实验 <ArrowRight className="w-3 h-3" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
