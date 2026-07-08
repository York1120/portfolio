"use client"

import { useState } from "react"
import { FlaskConical, ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Experiment {
  title: string
  desc: string
  level: string
  details: string[]
  href: string
}

interface Category {
  name: string
  description: string
  href: string
  experiments: Experiment[]
}

const categories: Category[] = [
  {
    name: "声学",
    description: "从频率、振幅到噪声监测，建立声音的物理图像。",
    href: "/physics/acoustics",
    experiments: [
      {
        title: "频率发声器", desc: "调节频率与振幅，观察波形变化，理解音调、响度与振动参数的关系。", level: "基础",
        href: "/physics/acoustics",
        details: ["调节频率滑块，观察波形疏密变化，理解音调与频率的关系", "调节振幅滑块，观察波形高低变化，理解响度与振幅的关系", "支持正弦波、方波、三角波三种波形切换", "实时显示当前频率值和振幅值"],
      },
      {
        title: "噪声检测仪", desc: "模拟环境噪声分贝监测与波形可视化，认识噪声强弱与生活场景。", level: "进阶",
        href: "/physics/acoustics",
        details: ["模拟不同场景（图书馆、街道、工地）的噪声水平", "实时显示分贝值和波形图", "对比不同噪声源的能量差异", "了解噪声等级划分标准"],
      },
    ],
  },
  {
    name: "光学",
    description: "围绕直线传播、反射、折射、色光与透镜成像逐步推进。",
    href: "/physics/optics",
    experiments: [
      {
        title: "小孔成像虚拟实验", desc: "拖动物体与光屏，观察倒立实像，理解光沿直线传播的成像结果。", level: "基础",
        href: "/physics/optics",
        details: ["拖拽蜡烛位置，观察像的大小和方向变化", "调节小孔大小，观察成像清晰度变化", "拖拽光屏位置，观察像的清晰度变化", "理解小孔成像的原理：光沿直线传播"],
      },
      {
        title: "光的三原色组合游戏", desc: "调节 RGB 三色光强度，观察色光叠加和视觉混合效果。", level: "基础",
        href: "/physics/optics",
        details: ["分别调节红、绿、蓝三色光强度（0-255）", "观察色光叠加后的混合颜色", "了解 RGB 色彩模型原理", "尝试混合出黄色、品红、青色和白色"],
      },
      {
        title: "凸透镜成像虚拟实验", desc: "拖动物体、透镜与光屏，实时显示光路、像距与成像性质变化。", level: "挑战",
        href: "/physics/optics",
        details: ["拖拽蜡烛改变物距，观察像的大小、正倒和虚实变化", "实时显示光路图和像距数值", "自动标注成像规律：u>2f、f<u<2f、u<f", "总结凸透镜成像规律口诀"],
      },
      {
        title: "光的反射与折射定律", desc: "验证反射定律和折射规律，支持水、玻璃、钻石等介质切换。", level: "挑战",
        href: "/physics/optics",
        details: ["调节入射角，观察反射角和折射角的变化", "切换不同介质（水、玻璃、钻石），比较折射率差异", "验证反射定律：反射角等于入射角", "观察全反射现象及其临界角"],
      },
    ],
  },
  {
    name: "热学",
    description: "把微观热运动和热机工作过程转化为可观察模型。",
    href: "/physics/thermodynamics",
    experiments: [
      {
        title: "分子热运动微观示意图", desc: "展示固、液、气三态分子运动差异，通过温度滑块观察运动快慢。", level: "基础",
        href: "/physics/thermodynamics",
        details: ["切换固态、液态、气态三种状态，观察分子排列差异", "调节温度滑块，观察分子运动速度变化", "固态分子在平衡位置附近振动", "气态分子自由运动，碰撞容器壁"],
      },
      {
        title: "四冲程汽油机示意图", desc: "动画演示进气、压缩、做功、排气四个冲程，支持速度调节。", level: "进阶",
        href: "/physics/thermodynamics",
        details: ["动画演示四个冲程的完整工作循环", "标注每个冲程中活塞、气门和曲轴的状态", "调节播放速度，便于观察细节", "了解内燃机的工作原理和能量转化"],
      },
    ],
  },
  {
    name: "力学",
    description: "从长度测量到浮力图像和大气压测定，连接实验现象与定量表达。",
    href: "/physics/mechanics",
    experiments: [
      {
        title: "长度读取训练平台", desc: "练习刻度尺读数、估读与厘米/毫米单位换算，支持随机题目训练。", level: "基础",
        href: "/physics/mechanics",
        details: ["随机生成刻度尺读数题目", "支持厘米和毫米两种单位", "即时反馈正确/错误，显示正确答案", "统计正确率和平均答题时间"],
      },
      {
        title: "木块浮力图像", desc: "调节水深观察浮力四阶段变化曲线，连接现象、受力和图像表达。", level: "进阶",
        href: "/physics/mechanics",
        details: ["调节水深，观察木块从漂浮到完全浸没的过程", "实时显示浮力-深度变化曲线", "标注四个阶段：漂浮、部分浸没、完全浸没、沉底", "理解阿基米德原理的定量表达"],
      },
      {
        title: "托里拆利实验", desc: "切换液体、调节倾角与海拔，理解液柱高度和大气压测量关系。", level: "挑战",
        href: "/physics/mechanics",
        details: ["切换水和水银两种液体，观察液柱高度差异", "调节玻璃管倾角，观察液柱垂直高度不变", "调节海拔高度，观察大气压随海拔的变化", "理解托里拆利实验测量大气压的原理"],
      },
    ],
  },
  {
    name: "电学",
    description: "从简单电路到欧姆定律，理解电学基本规律。",
    href: "/physics/electricity",
    experiments: [
      {
        title: "电路连接与欧姆定律", desc: "调节电压和电阻，观察电流变化，验证 I = U / R。", level: "基础",
        href: "/physics/electricity",
        details: ["搭建简单电路，连接电源、电阻和电流表", "调节电源电压，观察电流变化", "更换不同阻值的电阻，观察电流变化", "验证欧姆定律：I = U / R"],
      },
      {
        title: "电阻的串联与并联", desc: "搭建串并联电路，观察总电阻变化规律。", level: "进阶",
        href: "/physics/electricity",
        details: ["搭建两个电阻的串联电路，测量总电阻", "搭建两个电阻的并联电路，测量总电阻", "比较串并联电路中电流和电压的分配规律", "理解串并联电路在实际中的应用"],
      },
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
  const [expandedExp, setExpandedExp] = useState<string | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <FlaskConical className="w-4 h-4" />
          物理教学
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">物理互动实验平台</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          让抽象的物理规律在屏幕上清晰呈现。覆盖声学、光学、热学、力学、电学五大领域。
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category.name}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <Link
                href={category.href}
                className="hidden sm:inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors flex-shrink-0"
              >
                进入学习 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.experiments.map((exp) => {
                const key = category.name + "-" + exp.title
                const isExpanded = expandedExp === key
                return (
                  <div key={exp.title} className="bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all duration-300">
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <span className={"inline-block text-xs font-medium px-2.5 py-0.5 rounded-full " + getLevelStyle(exp.level)}>
                          {getLevelLabel(exp.level)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{exp.desc}</p>
                      <button
                        onClick={() => setExpandedExp(isExpanded ? null : key)}
                        className="inline-flex items-center gap-1 text-blue-600 text-xs font-medium hover:text-blue-700 transition-colors"
                      >
                        {isExpanded ? "收起详情" : "查看实验内容"}
                        <ChevronDown className={"w-3 h-3 transition-transform " + (isExpanded ? "rotate-180" : "")} />
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="px-5 pb-5 border-t border-gray-100 pt-3 animate-fade-in-down">
                        <ul className="space-y-2 mb-3">
                          {exp.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                        <Link href={exp.href} className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                          进入课程 <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="mt-3 sm:hidden">
              <Link href={category.href} className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                进入学习 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

