"use client"

import { useState } from "react"
import { BookOpen, Download, FileText, GraduationCap, ChevronDown, Eye, ExternalLink } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ResourceItem {
  title: string
  description: string
  topics: string[]
  grade: string
  format: string
  file?: string
}

interface ResourceCategory {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
  items: ResourceItem[]
}

const resourceCategories: ResourceCategory[] = [
  {
    id: "courseware",
    title: "课件下载",
    description: "精选物理与信息技术教学课件，可直接用于课堂教学。",
    icon: Download,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    items: [
      {
        title: "八年级物理《声现象》课件",
        description: "涵盖声音的产生与传播、声音的特性、声的利用等核心知识点，配有互动实验链接。",
        topics: ["声音的产生与传播", "音调、响度、音色", "噪声的危害与控制"],
        grade: "八年级", format: "PPTX",
        file: "/resources/声现象-课件说明.txt",
      },
      {
        title: "八年级物理《光现象》课件",
        description: "光的直线传播、反射定律、平面镜成像、光的折射，配套小孔成像互动实验。",
        topics: ["光的直线传播", "光的反射定律", "平面镜成像", "光的折射"],
        grade: "八年级", format: "PPTX",
        file: "/resources/光现象-课件说明.txt",
      },
      {
        title: "九年级物理《欧姆定律》课件",
        description: "电流与电压、电阻的关系，欧姆定律的应用，配套电路互动实验。",
        topics: ["电流与电压关系", "欧姆定律", "电阻的串并联"],
        grade: "九年级", format: "PPTX",
        file: "/resources/欧姆定律-课件说明.txt",
      },
      {
        title: "信息技术《Python 入门》课件",
        description: "从环境搭建到基础语法，适合初中生的 Python 入门教学。",
        topics: ["Python 环境", "变量与数据类型", "条件与循环", "turtle 绘图"],
        grade: "七年级", format: "PPTX",
        file: "/resources/Python入门-课件说明.txt",
      },
    ],
  },
  {
    id: "plans",
    title: "教案分享",
    description: "详细教学设计方案，包含教学目标、重难点与课堂活动设计。",
    icon: FileText,
    color: "text-green-600",
    bgColor: "bg-green-50",
    items: [
      {
        title: "《凸透镜成像》教学设计",
        description: "通过互动实验探究凸透镜成像规律，包含 5 个教学环节和分组实验方案。",
        topics: ["探究凸透镜成像规律", "物距与像距的关系", "成像规律应用"],
        grade: "八年级", format: "DOCX",
      },
      {
        title: "《电路连接》实验课教案",
        description: "学生动手连接串并联电路，学习电路图绘制与故障排查。",
        topics: ["串联电路连接", "并联电路连接", "电路故障排查"],
        grade: "九年级", format: "DOCX",
      },
      {
        title: "《Scratch 编程》单元教案",
        description: "6 课时的 Scratch 编程单元设计，从界面认识到综合项目。",
        topics: ["顺序与循环", "条件分支", "变量与列表", "综合项目"],
        grade: "七年级", format: "DOCX",
      },
      {
        title: "《网络信息安全》主题教案",
        description: "结合真实案例，培养学生的网络安全意识和信息辨别能力。",
        topics: ["密码安全", "隐私保护", "网络诈骗识别", "健康上网"],
        grade: "七年级", format: "DOCX",
      },
    ],
  },
  {
    id: "exams",
    title: "试题库",
    description: "单元测试、期中期末试题与中考模拟题。",
    icon: GraduationCap,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    items: [
      {
        title: "八年级物理单元测试题",
        description: "声现象、光现象、物态变化等章节的单元测试卷，含参考答案。",
        topics: ["声现象", "光现象", "物态变化"],
        grade: "八年级", format: "PDF",
      },
      {
        title: "九年级物理中考模拟卷",
        description: "按照中考题型和难度设计的模拟试卷，含详细解析。",
        topics: ["力学综合", "电学综合", "热学与光学"],
        grade: "九年级", format: "PDF",
      },
      {
        title: "信息技术基础练习题",
        description: "计算机基础、网络应用、信息安全等知识点的配套练习。",
        topics: ["计算机基础", "网络应用", "信息安全"],
        grade: "七年级", format: "PDF",
      },
      {
        title: "编程思维训练题集",
        description: "不依赖具体编程语言的思维训练题，培养计算思维。",
        topics: ["逻辑推理", "算法思维", "模式识别", "问题分解"],
        grade: "七年级", format: "PDF",
      },
    ],
  },
]

export default function ResourcesPage() {
  const [expandedCat, setExpandedCat] = useState<string | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <BookOpen className="w-4 h-4" />
          教学资源
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">教学资源</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          为教师同行提供高质量的课件、教案与试题资源。
        </p>
      </div>

      <div className="space-y-12">
        {resourceCategories.map((cat) => {
          const Icon = cat.icon
          return (
            <section key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-6">
                <div className={"w-10 h-10 " + cat.bgColor + " rounded-xl flex items-center justify-center"}>
                  <Icon className={"w-5 h-5 " + cat.color} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{cat.title}</h2>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {cat.items.map((item) => {
                  const isExpanded = expandedCat === cat.id + "-" + item.title
                  return (
                    <div
                      key={item.title}
                      className="bg-white border border-gray-200 rounded-xl hover:shadow-sm hover:border-blue-200 transition-all"
                    >
                      <button
                        onClick={() => setExpandedCat(isExpanded ? null : cat.id + "-" + item.title)}
                        className="w-full text-left px-5 py-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <Download className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <span className="text-gray-700 text-sm font-medium truncate">{item.title}</span>
                          </div>
                          <ChevronDown className={"w-4 h-4 text-gray-400 flex-shrink-0 transition-transform " + (isExpanded ? "rotate-180" : "")} />
                        </div>
                        <div className="flex items-center gap-2 mt-2 ml-7">
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{item.grade}</span>
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{item.format}</span>
                        </div>
                      </button>
                      {isExpanded && (
                        <div className="px-5 pb-5 border-t border-gray-100 pt-3 animate-fade-in-down ml-7">
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {item.topics.map((t) => (
                              <span key={t} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{t}</span>
                            ))}
                          </div>
                          {item.file ? (
                            <a
                              href={item.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              预览资源
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-gray-400 text-sm">
                              <Eye className="w-3.5 h-3.5" />
                              资源准备中
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
        <p className="text-gray-600 mb-4">
          资源正在持续更新中。如需特定资源，欢迎通过邮箱联系周老师。
        </p>
        <a
          href="mailto:mynameisyork@163.com"
          className="inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          发送邮件 <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
