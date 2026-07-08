import { ArrowLeft, FlaskConical, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function OpticsPage() {
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">光学</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          光沿直线传播，遇到不同介质时会发生反射和折射。本课程从光的直线传播到透镜成像，逐步深入。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">光的直线传播</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">光在同种均匀介质中沿直线传播。</p>
              <ul className="space-y-2">
                {["光源：自身能发光的物体（太阳、电灯、蜡烛）", "光线：用带箭头的直线表示光的传播路径", "小孔成像：倒立的实像，像的大小与物距和像距有关", "日食和月食：光的直线传播的例证", "光速：真空中约 3×10⁸ m/s"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">光的反射定律</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">反射光线、入射光线和法线在同一平面内，反射角等于入射角。</p>
              <ul className="space-y-2">
                {["反射定律的三条内容", "镜面反射：平行光入射，平行光反射", "漫反射：平行光入射，向各个方向反射", "两种反射都遵循反射定律", "练习：画反射光路图"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">平面镜成像</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">平面镜成等大、正立的虚像，像与物关于镜面对称。</p>
              <ul className="space-y-2">
                {["成像特点：等大、正立、虚像", "像与物到镜面的距离相等", "像与物的连线与镜面垂直", "平面镜的应用：穿衣镜、潜望镜", "练习：确定平面镜中像的位置"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">光的折射</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">光从一种介质斜射入另一种介质时，传播方向发生偏折。</p>
              <ul className="space-y-2">
                {["折射现象：筷子在水中弯折、池水变浅", "折射规律：入射角与折射角的关系", "光从空气射入水中：折射角小于入射角", "光从水中射入空气：折射角大于入射角", "全反射现象及其条件"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">凸透镜成像规律</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">凸透镜成像规律是光学部分的核心和难点。</p>
              <ul className="space-y-2">
                {["u > 2f：倒立缩小的实像（照相机）", "u = 2f：倒立等大的实像", "f < u < 2f：倒立放大的实像（投影仪）", "u = f：不成像（平行光源）", "u < f：正立放大的虚像（放大镜）"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">互动实验</h3>
          <p className="text-gray-600 text-sm mb-3">通过互动实验直观理解光学概念。</p>
          <div className="flex flex-wrap gap-2">
            <a href="https://yorkphysics.eu.cc/04-pinhole.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">小孔成像 <ExternalLink className="w-3 h-3" /></a>
            <a href="https://yorkphysics.eu.cc/06-rgb.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">三原色组合 <ExternalLink className="w-3 h-3" /></a>
            <a href="https://yorkphysics.eu.cc/07-lens.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">凸透镜成像 <ExternalLink className="w-3 h-3" /></a>
            <a href="https://yorkphysics.eu.cc/10-refraction.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">反射与折射 <ExternalLink className="w-3 h-3" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
