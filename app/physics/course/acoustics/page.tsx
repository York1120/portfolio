import { ArrowLeft, FlaskConical, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AcousticsPage() {
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">声学</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          声音是由物体振动产生的。从频率、振幅到噪声监测，本课程帮助你建立声音的完整物理图像。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">声音的产生与传播</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">声音由物体振动产生，通过介质（固体、液体、气体）传播。</p>
              <ul className="space-y-2">
                {["声音的产生：一切发声的物体都在振动", "传播需要介质：真空不能传声", "声速：在固体中最快，气体中最慢", "回声：声音遇到障碍物反射回来", "人耳听到声音的过程"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">声音的特性</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">音调、响度和音色是声音的三个主要特性。</p>
              <ul className="space-y-2">
                {["音调：由频率决定，频率越高音调越高", "响度：由振幅决定，振幅越大响度越大", "音色：由发声体材料和结构决定", "超声波与次声波：人耳听不到的声音", "练习：区分不同乐器的音色"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">噪声的危害与控制</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 mb-4">了解噪声的来源、危害以及控制方法。</p>
              <ul className="space-y-2">
                {["噪声的定义：从物理和环保两个角度", "噪声的等级：分贝（dB）为单位", "噪声的危害：影响听力、睡眠和健康", "控制噪声的三条途径：声源处、传播中、人耳处", "练习：分析生活中的噪声控制措施"].map((item, i) => (
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
          <p className="text-gray-600 text-sm mb-3">通过互动实验直观理解声学概念。</p>
          <div className="flex flex-wrap gap-2">
            <a href="/physics/02-frequency.html" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">
              频率发声器 <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/physics/03-noise.html" className="inline-flex items-center gap-1 text-sm bg-white text-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">
              噪声检测仪 <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
