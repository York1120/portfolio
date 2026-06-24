import { Monitor } from "lucide-react"

const topics = [
  {
    id: "programming",
    title: "编程入门",
    description: "从 Scratch 图形化编程到 Python 代码编程，循序渐进培养计算思维。",
    items: [
      { title: "Scratch 基础", desc: "认识 Scratch 界面，学习顺序、循环与条件结构。", level: "入门" },
      { title: "Python 入门", desc: "变量、数据类型、条件判断与循环语句。", level: "入门" },
      { title: "趣味项目实践", desc: "用编程制作小游戏、绘图工具等趣味项目。", level: "进阶" },
    ],
  },
  {
    id: "basics",
    title: "信息技术基础",
    description: "掌握计算机基础操作、网络应用与数字素养。",
    items: [
      { title: "计算机基础", desc: "认识计算机硬件、软件与操作系统基本操作。", level: "入门" },
      { title: "网络与信息安全", desc: "互联网应用基础、信息瞴别与网络安全意识。", level: "入门" },
      { title: "数据处理入门", desc: "电子表格基础操作、数据整理与简单分析。", level: "进阶" },
    ],
  },
]

function getLevelStyle(level: string) {
  return level === "入门" ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"
}

function getLevelLabel(level: string) {
  return level === "入门" ? "🌱 入门" : "🚀 进阶"
}

export default function ITEducationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Monitor className="w-4 h-4" />
          信息技术
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">信息技术教学</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          培养计算思维与数字素养，让每一位学生都能在信息时代自信前行。
        </p>
      </div>

      <div className="space-y-16">
        {topics.map((topic) => (
          <section key={topic.id} id={topic.id}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{topic.title}</h2>
              <p className="text-gray-600">{topic.description}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {topic.items.map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all">
                  <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 ${getLevelStyle(item.level)}`}>
                    {getLevelLabel(item.level)}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
