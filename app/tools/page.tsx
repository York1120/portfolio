"use client"

import { useState } from "react"
import { Wrench, ExternalLink, Cpu, Users, ChevronDown, CheckCircle } from "lucide-react"

import type { LucideIcon } from "lucide-react"
interface Tool {
  title: string
  description: string
  href: string
  icon: LucideIcon
  color: string
  bgColor: string
  borderColor: string
  hoverBorder: string
  features: string[]
  screenshots: string[]
  id?: string
}

const tools: Tool[] = [
  {
    title: "班级排座位系统",
    description: "智能排座位工具，支持自定义规则、随机排座、导出座位表，让班级管理更高效。",
    href: "https://seating.yorkeducation.eu.cc/",
    icon: Users,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    hoverBorder: "hover:border-emerald-400",
    features: [
      "支持自定义教室布局：设置行数、列数、特殊座位",
      "多维度约束：身高、视力、性别、学习小组",
      "一键随机排座与手动微调",
      "座位表导出为图片或打印",
      "支持多班级管理，保存排座历史",
    ],
    screenshots: ["座位网格布局", "约束条件设置", "排座结果预览", "导出与打印"],
  },
  {
    id: "ai",
    title: "AI 教学平台",
    description: "免登录的 AI 教学辅助平台，支持智能问答、文本生成等，为教学提供 AI 助力。",
    href: "https://ai.yorkeducation.eu.cc/",
    icon: Cpu,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-400",
    features: [
      "智能问答：解答物理、信息技术等学科问题",
      "文本生成：自动生成教案、试题、课堂活动方案",
      "免登录使用，打开即用",
      "支持中英文双语交互",
      "持续更新知识库，覆盖初中全学科",
    ],
    screenshots: ["智能问答界面", "教案生成", "试题生成", "多轮对话"],
  },
]

export default function ToolsPage() {
  const [expandedTool, setExpandedTool] = useState<string | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 max-sm:py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Wrench className="w-4 h-4" />
          在线工具
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">在线工具</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          为教学管理量身打造的实用工具，提升工作效率。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tools.map((tool) => {
          const Icon = tool.icon
          const isExpanded = expandedTool === tool.title
          return (
            <div
              key={tool.title}
              id={tool.id}
              className={"bg-white border-2 " + tool.borderColor + " rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"}
            >
              <div className="p-8 max-sm:p-5">
                <div className={"w-14 h-14 " + tool.bgColor + " rounded-2xl flex items-center justify-center mb-5"}>
                  <Icon className={"w-7 h-7 " + tool.color} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{tool.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.features.slice(0, 3).map((f) => (
                    <span key={f} className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {f}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedTool(isExpanded ? null : tool.title)}
                  className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors mb-4"
                >
                  {isExpanded ? "收起详情" : "查看全部功能"}
                  <ChevronDown className={"w-3.5 h-3.5 transition-transform " + (isExpanded ? "rotate-180" : "")} />
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-100 pt-4 mb-4 animate-fade-in-down">
                    <ul className="space-y-2 mb-4">
                      {tool.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.screenshots.map((s) => (
                        <div key={s} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-xs text-gray-500">
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                  立即使用
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* 工具开发计划 */}
      <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-8 max-sm:p-5 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4">即将推出的工具</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "成绩分析系统", desc: "自动分析考试成绩，生成多维度的学情报告" },
            { title: "课堂随机点名器", desc: "公平随机点名，记录学生课堂参与情况" },
            { title: "作业管理平台", desc: "在线布置、提交和批改作业，减轻教师负担" },
          ].map((t) => (
            <div key={t.title} className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-1">{t.title}</h3>
              <p className="text-gray-500 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
