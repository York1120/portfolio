import { ArrowLeft, FlaskConical, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ElectricityPage() {
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">电学</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          从简单电路到欧姆定律，理解电学基本规律，掌握电路分析和计算的方法。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">电路的基本概念</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">了解电路的组成和基本连接方式。</p>
              <ul className="space-y-2">
                {["电路的组成：电源、导线、开关、用电器", "电流：电荷的定向移动，用 I 表示", "电压：推动电荷流动的力，用 U 表示", "电阻：导体对电流的阻碍作用，用 R 表示", "电路图：用符号表示电路的连接方式"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">串联与并联</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">串联和并联是两种基本的电路连接方式。</p>
              <ul className="space-y-2">
                {["串联电路：元件首尾相连，电流只有一条路径", "串联特点：电流处处相等，电压之和等于总电压", "并联电路：元件并列连接，电流有多条路径", "并联特点：电压处处相等，电流之和等于总电流", "练习：识别生活中的串并联电路"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">欧姆定律</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">欧姆定律是电学中最基本的定律。</p>
              <ul className="space-y-2">
                {["欧姆定律内容：I = U / R", "电流与电压成正比（电阻一定时）", "电流与电阻成反比（电压一定时）", "欧姆定律的应用：计算电流、电压、电阻", "练习：用欧姆定律解决电路问题"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">电阻的串并联</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">电阻串联和并联时总电阻的计算方法。</p>
              <ul className="space-y-2">
                {["串联总电阻：R总 = R1 + R2 + ...", "串联后总电阻变大，相当于增加了导体的长度", "并联总电阻：1/R总 = 1/R1 + 1/R2 + ...", "并联后总电阻变小，相当于增加了导体的横截面积", "练习：计算串并联电路的总电阻"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">互动实验</h3>
          <div className="flex flex-wrap gap-2">
            <a href="https://yorkphysics.eu.cc/15-circuit.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">电路与欧姆定律 <ExternalLink className="w-3 h-3" /></a>
            <a href="https://yorkphysics.eu.cc/16-resistors.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">电阻串并联 <ExternalLink className="w-3 h-3" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
