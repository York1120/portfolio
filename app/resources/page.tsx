import type React from "react"
import { BookOpen, Download, FileText, GraduationCap } from "lucide-react"

const resourceCategories = [
  {
    id: "courseware",
    title: "课件下载",
    description: "精选物理与信息技术教学课件，可直接用于课堂教学。",
    icon: "Download",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    items: [
      "八年级物理《声现象》课件",
      "八年级物理《光现象》课件",
      "九年级物理《欧姆定律》课件",
      "信息技术《Python 入门》课件",
    ],
  },
  {
    id: "plans",
    title: "教案分享",
    description: "详细教学设计方案，包含教学目标、重难点与课堂活动设计。",
    icon: "FileText",
    color: "text-green-600",
    bgColor: "bg-green-50",
    items: [
      "《凸透镜成像》教学设计",
      "《电路连接》实验课教案",
      "《Scratch 编程》单元教案",
      "《网络信息安全》主题教案",
    ],
  },
  {
    id: "exams",
    title: "试题库",
    description: "单元测试、期中期末试题与中考模拟题。",
    icon: "GraduationCap",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    items: [
      "八年级物理单元测试题",
      "九年级物理中考模拟卷",
      "信息技术基础练习题",
      "编程思维训练题集",
    ],
  },
]

const iconMap: Record<string, React.ElementType> = {
  Download, FileText, GraduationCap
}

export default function ResourcesPage() {
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
          const Icon = iconMap[cat.icon]
          return (
            <section key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 ${cat.bgColor} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{cat.title}</h2>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {cat.items.map((item) => (
                  <div key={item} className="bg-white border border-gray-200 rounded-xl px-5 py-4 hover:shadow-sm hover:border-blue-200 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Download className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
        <p className="text-gray-600">
          资源正在持续更新中。如需特定资源，欢迎通过邮箱联系周老师。
        </p>
      </div>
    </div>
  )
}
