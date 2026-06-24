import type React from "react"
import { Wrench, ExternalLink, Cpu, Users } from "lucide-react"

const tools = [
  {
    title: "班级排座位系统",
    description: "智能排座位工具，支持自定义规则、随机排座、导出座位表，让班级管理更高效。",
    href: "https://yorkeducation.eu.cc/",
    icon: "Users",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    hoverBorder: "hover:border-emerald-400",
  },
  {
    id: "ai",
    title: "AI 教学平台",
    description: "免登录的 AI 教学辅助平台，支持智能问答、文本生成等，为教学提供 AI 助力。",
    href: "https://yorkai.eu.cc/",
    icon: "Cpu",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-400",
  },
]

const iconMap: Record<string, React.ElementType> = { Users, Cpu }

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
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
          const Icon = iconMap[tool.icon]
          return (
            <a
              key={tool.title}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white border-2 ${tool.borderColor} ${tool.hoverBorder} rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-14 h-14 ${tool.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-7 h-7 ${tool.color}`} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{tool.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{tool.description}</p>
              <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                立即使用 <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
