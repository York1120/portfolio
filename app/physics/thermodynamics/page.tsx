import { ArrowLeft, FlaskConical, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ThermodynamicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/physics" className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 text-sm">
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">热学</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          热学从微观分子运动的角度理解温度、内能和热传递，把看不见的热现象转化为可理解的物理模型。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">分子热运动</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">一切物质的分子都在不停地做无规则运动。</p>
              <ul className="space-y-2">
                {["扩散现象：不同物质相互接触时彼此进入对方", "分子热运动与温度有关：温度越高运动越剧烈", "固液气三态的分子排列和运动特点", "分子间存在引力和斥力", "练习：解释生活中的扩散现象"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">内能与热量</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">内能是物体内部所有分子动能和势能的总和。</p>
              <ul className="space-y-2">
                {["内能的定义：分子动能 + 分子势能", "改变内能的方式：做功和热传递", "热量：热传递过程中传递的能量", "比热容：单位质量的物质温度升高 1°C 吸收的热量", "热值：燃料完全燃烧放出的热量"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">热机</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">热机是将内能转化为机械能的装置。</p>
              <ul className="space-y-2">
                {["热机的种类：蒸汽机、内燃机、汽轮机", "四冲程汽油机：进气、压缩、做功、排气", "做功冲程：内能转化为机械能", "压缩冲程：机械能转化为内能", "热机效率：有用功与燃料完全燃烧放热之比"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">互动实验</h3>
          <div className="flex flex-wrap gap-2">
            <a href="https://yorkphysics.eu.cc/08-molecule.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">分子热运动 <ExternalLink className="w-3 h-3" /></a>
            <a href="https://yorkphysics.eu.cc/09-engine.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">四冲程汽油机 <ExternalLink className="w-3 h-3" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
