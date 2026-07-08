"use client"

import { useState } from "react"
import { FlaskConical, ExternalLink, ChevronDown, BookOpen, BrainCircuit } from "lucide-react"

interface Experiment {
  title: string
  desc: string
  href: string
  level: string
  details: string[]
}

interface Category {
  name: string
  description: string
  experiments: Experiment[]
}

const categories: Category[] = [
  {
    name: "声学",
    description: "从频率、振幅到噪声监测，建立声音的物理图像。",
    experiments: [
      {
        title: "频率发声器", desc: "调节频率与振幅，观察波形变化，理解音调、响度与振动参数的关系。", href: "https://yorkphysics.eu.cc/02-frequency.html", level: "基础",
        details: ["调节频率滑块，观察波形疏密变化，理解音调与频率的关系", "调节振幅滑块，观察波形高低变化，理解响度与振幅的关系", "支持正弦波、方波、三角波三种波形切换", "实时显示当前频率值和振幅值"],
      },
      {
        title: "噪声检测仪", desc: "模拟环境噪声分贝监测与波形可视化，认识噪声强弱与生活场景。", href: "https://yorkphysics.eu.cc/03-noise.html", level: "进阶",
        details: ["模拟不同场景（图书馆、街道、工地）的噪声水平", "实时显示分贝值和波形图", "对比不同噪声源的能量差异", "了解噪声等级划分标准"],
      },
    ],
  },
  {
    name: "光学",
    description: "围绕直线传播、反射、折射、色光与透镜成像逐步推进。",
    experiments: [
      {
        title: "小孔成像虚拟实验", desc: "拖动物体与光屏，观察倒立实像，理解光沿直线传播的成像结果。", href: "https://yorkphysics.eu.cc/04-pinhole.html", level: "基础",
        details: ["拖拽蜡烛位置，观察像的大小和方向变化", "调节小孔大小，观察成像清晰度变化", "拖拽光屏位置，观察像的清晰度变化", "理解小孔成像的原理：光沿直线传播"],
      },
      {
        title: "光的三原色组合游戏", desc: "调节 RGB 三色光强度，观察色光叠加和视觉混合效果。", href: "https://yorkphysics.eu.cc/06-rgb.html", level: "基础",
        details: ["分别调节红、绿、蓝三色光强度（0-255）", "观察色光叠加后的混合颜色", "了解 RGB 色彩模型原理", "尝试混合出黄色、品红、青色和白色"],
      },
      {
        title: "凸透镜成像虚拟实验", desc: "拖动物体、透镜与光屏，实时显示光路、像距与成像性质变化。", href: "https://yorkphysics.eu.cc/07-lens.html", level: "挑战",
        details: ["拖拽蜡烛改变物距，观察像的大小、正倒和虚实变化", "实时显示光路图和像距数值", "自动标注成像规律：u>2f、f<u<2f、u<f", "总结凸透镜成像规律口诀"],
      },
      {
        title: "光的反射与折射定律", desc: "验证反射定律和折射规律，支持水、玻璃、钻石等介质切换。", href: "https://yorkphysics.eu.cc/10-refraction.html", level: "挑战",
        details: ["调节入射角，观察反射角和折射角的变化", "切换不同介质（水、玻璃、钻石），比较折射率差异", "验证反射定律：反射角等于入射角", "观察全反射现象及其临界角"],
      },
    ],
  },
  {
    name: "热学",
    description: "把微观热运动和热机工作过程转化为可观察模型。",
    experiments: [
      {
        title: "分子热运动微观示意图", desc: "展示固、液、气三态分子运动差异，通过温度滑块观察运动快慢。", href: "https://yorkphysics.eu.cc/08-molecule.html", level: "基础",
        details: ["切换固态、液态、气态三种状态，观察分子排列差异", "调节温度滑块，观察分子运动速度变化", "固态分子在平衡位置附近振动", "气态分子自由运动，碰撞容器壁"],
      },
      {
        title: "四冲程汽油机示意图", desc: "动画演示进气、压缩、做功、排气四个冲程，支持速度调节。", href: "https://yorkphysics.eu.cc/09-engine.html", level: "进阶",
        details: ["动画演示四个冲程的完整工作循环", "标注每个冲程中活塞、气门和曲轴的状态", "调节播放速度，便于观察细节", "了解内燃机的工作原理和能量转化"],
      },
    ],
  },
  {
    name: "力学",
    description: "从长度测量到浮力图像和大气压测定，连接实验现象与定量表达。",
    experiments: [
      {
        title: "长度读取训练平台", desc: "练习刻度尺读数、估读与厘米/毫米单位换算，支持随机题目训练。", href: "https://yorkphysics.eu.cc/01-length.html", level: "基础",
        details: ["随机生成刻度尺读数题目", "支持厘米和毫米两种单位", "即时反馈正确/错误，显示正确答案", "统计正确率和平均答题时间"],
      },
      {
        title: "木块浮力图像", desc: "调节水深观察浮力四阶段变化曲线，连接现象、受力和图像表达。", href: "https://yorkphysics.eu.cc/12-buoyancy.html", level: "进阶",
        details: ["调节水深，观察木块从漂浮到完全浸没的过程", "实时显示浮力-深度变化曲线", "标注四个阶段：漂浮、部分浸没、完全浸没、沉底", "理解阿基米德原理的定量表达"],
      },
      {
        title: "托里拆利实验", desc: "切换液体、调节倾角与海拔，理解液柱高度和大气压测量关系。", href: "https://yorkphysics.eu.cc/13-torricelli.html", level: "挑战",
        details: ["切换水和水银两种液体，观察液柱高度差异", "调节玻璃管倾角，观察液柱垂直高度不变", "调节海拔高度，观察大气压随海拔的变化", "理解托里拆利实验测量大气压的原理"],
      },
    ],
  },
  {
    name: "电学",
    description: "从简单电路到欧姆定律，理解电学基本规律。",
    experiments: [
      {
        title: "电路连接与欧姆定律", desc: "调节电压和电阻，观察电流变化，验证 I = U / R。", href: "https://yorkphysics.eu.cc/15-circuit.html", level: "基础",
        details: ["搭建简单电路，连接电源、电阻和电流表", "调节电源电压，观察电流变化", "更换不同阻值的电阻，观察电流变化", "验证欧姆定律：I = U / R"],
      },
      {
        title: "电阻的串联与并联", desc: "搭建串并联电路，观察总电阻变化规律。", href: "https://yorkphysics.eu.cc/16-resistors.html", level: "进阶",
        details: ["搭建两个电阻的串联电路，测量总电阻", "搭建两个电阻的并联电路，测量总电阻", "比较串并联电路中电流和电压的分配规律", "理解串并联电路在实际中的应用"],
      },
    ],
  },
  {
    name: "知识测验",
    description: "通过趣味测验巩固所学知识。",
    experiments: [
      {
        title: "初中物理知识点复习", desc: "系统梳理初中物理各章节核心知识点。", href: "https://yorkphysics.eu.cc/11-review.html", level: "基础",
        details: ["按章节分类梳理核心知识点", "包含声学、光学、热学、力学、电学五大模块", "每个知识点配有典型例题", "支持知识点搜索和快速定位"],
      },
      {
        title: "《物理原来很有趣》测验", desc: "趣味物理知识测验，检验你的物理素养。", href: "https://yorkphysics.eu.cc/14-quiz.html", level: "进阶",
        details: ["涵盖生活物理、科学史、实验原理等多维度", "选择题形式，即时反馈正确答案和解析", "测验结束后显示得分和排名", "错题自动收录，方便复习巩固"],
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
              {category.experiments.map((exp) => {
                const key = category.name + "-" + exp.title
                const isExpanded = expandedExp === key
                return (
                  <div
                    key={exp.title}
                    className="bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <span className={"inline-block text-xs font-medium px-2.5 py-0.5 rounded-full " + getLevelStyle(exp.level)}>
                          {getLevelLabel(exp.level)}
                        </span>
                        <a href={exp.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
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
                        <ul className="space-y-2">
                          {exp.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">
                                {i + 1}
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={exp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                        >
                          打开实验 <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      {/* 复习与测验区域 */}
      <div id="review" className="mt-16 scroll-mt-20">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">知识点复习</h2>
          </div>
          <p className="text-gray-600 mb-6">系统梳理初中物理各章节核心知识点，点击进入在线复习平台。</p>
          <a
            href="https://yorkphysics.eu.cc/11-review.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            <BookOpen className="w-5 h-5" />
            进入复习平台
          </a>
        </div>
      </div>

      <div id="quiz" className="mt-8 scroll-mt-20">
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">物理测验</h2>
          </div>
          <p className="text-gray-600 mb-6">趣味物理知识测验，检验你的物理素养。选择题形式，即时反馈。</p>
          <a
            href="https://yorkphysics.eu.cc/14-quiz.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200"
          >
            <BrainCircuit className="w-5 h-5" />
            开始测验
          </a>
        </div>
      </div>
    </div>
  )
}
