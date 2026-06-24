import { FlaskConical, ExternalLink } from "lucide-react"

const categories = [
  {
    name: "声学",
    description: "从频率、振幅到噪声监测，建立声音的物理图像。",
    experiments: [
      { title: "频率发声器", desc: "调节频率与振幅，观察波形变化，理解音调、响度与振动参数的关系。", href: "https://yorkphysics.eu.cc/02-frequency.html", level: "基础" },
      { title: "噪声检测仪", desc: "模拟环境噪声分贝监测与波形可视化，认识噪声强弱与生活场景。", href: "https://yorkphysics.eu.cc/03-noise.html", level: "进阶" },
    ],
  },
  {
    name: "光学",
    description: "围绕直线传播、反射、折射、色光与透镜成像逐步推进。",
    experiments: [
      { title: "小孔成像虚拟实验", desc: "拖动物体与光屏，观察倒立实像，理解光沿直线传播的成像结果。", href: "https://yorkphysics.eu.cc/04-pinhole.html", level: "基础" },
      { title: "光的三原色组合游戏", desc: "调节 RGB 三色光强度，观察色光叠加和视觉混合效果。", href: "https://yorkphysics.eu.cc/06-rgb.html", level: "基础" },
      { title: "凸透镜成像虚拟实验", desc: "拖动物体、透镜与光屏，实时显示光路、像距与成像性质变化。", href: "https://yorkphysics.eu.cc/07-lens.html", level: "挑战" },
      { title: "光的反射与折射定律", desc: "验证反射定律和折射规律，支持水、玻璃、钻石等介质切换。", href: "https://yorkphysics.eu.cc/10-refraction.html", level: "挑战" },
    ],
  },
  {
    name: "热学",
    description: "把微观热运动和热机工作过程转化为可观察模型。",
    experiments: [
      { title: "分子热运动微观示意图", desc: "展示固、液、气三态分子运动差异，通过温度滑块观察运动快慢。", href: "https://yorkphysics.eu.cc/08-molecule.html", level: "基础" },
      { title: "四冲程汽油机示意图", desc: "动画演示进气、压缩、做功、排气四个冲程，支持速度调节。", href: "https://yorkphysics.eu.cc/09-engine.html", level: "进阶" },
    ],
  },
  {
    name: "力学",
    description: "从长度测量到浮力图像和大气压测定，连接实验现象与定量表达。",
    experiments: [
      { title: "长度读取训练平台", desc: "练习刻度尺读数、估读与厘米/毫米单位换算，支持随机题目训练。", href: "https://yorkphysics.eu.cc/01-length.html", level: "基础" },
      { title: "木块浮力图像", desc: "调节水深观察浮力四阶段变化曲线，连接现象、受力和图像表达。", href: "https://yorkphysics.eu.cc/12-buoyancy.html", level: "进阶" },
      { title: "托里拆利实验", desc: "切换液体、调节倾角与海拔，理解液柱高度和大气压测量关系。", href: "https://yorkphysics.eu.cc/13-torricelli.html", level: "挑战" },
    ],
  },
  {
    name: "电学",
    description: "从简单电路到欧姆定律，理解电学基本规律。",
    experiments: [
      { title: "电路连接与欧姆定律", desc: "调节电压和电阻，观察电流变化，验证 I = U / R。", href: "https://yorkphysics.eu.cc/15-circuit.html", level: "基础" },
      { title: "电阻的串联与并联", desc: "搭建串并联电路，观察总电阻变化规律。", href: "https://yorkphysics.eu.cc/16-resistors.html", level: "进阶" },
    ],
  },
  {
    name: "知识测验",
    description: "通过趣味测验固巩所学知识。",
    experiments: [
      { title: "初中物理知识点复习", desc: "系统梳理初中物理各章节核心知识点。", href: "https://yorkphysics.eu.cc/11-review.html", level: "基础" },
      { title: "《物理原来很有趣》测验", desc: "趣味物理知识测验，检验你的物理素养。", href: "https://yorkphysics.eu.cc/14-quiz.html", level: "进阶" },
    ],
  },
]

function getLevelStyle(level: string) {
  if (level === "基础") return "bg-green-50 text-green-600"
  if (level === "进阶") return "bg-orange-50 text-orange-600"
  return "bg-red-50 text-red-600"
}

function getLevelLabel(level: string) {
  if (level === "基础") return "⭐ 基础"
  if (level === "进阶") return "⭐⭐ 进阶"
  return "⭐⭐⭐ 挑战"
}

export default function PhysicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <FlaskConical className="w-4 h-4" />
          物理教学
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">物理互动实验平台</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          让抽象的物理规律在屏幕上清晰呈现。覆盖声学、光学、热学、力学、电学与知识测验。
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category.name}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.experiments.map((exp) => (
                <a
                  key={exp.title}
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${getLevelStyle(exp.level)}`}>
                      {getLevelLabel(exp.level)}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{exp.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exp.desc}</p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
