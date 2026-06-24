import { FlaskConical, Monitor, BookOpen, Wrench } from "lucide-react"
import Link from "next/link"

const fields = [
  {
    title: "物理教学",
    description: "初中物理互动实验平台，覆盖声学、光学、热学、力学、电学，让抽象概念可视化。",
    icon: FlaskConical,
    href: "/physics",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "信息技术",
    description: "编程入门、信息技术基础教学，培养学生的计算思维与数字化创新能力。",
    icon: Monitor,
    href: "/it-education",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "教学资源",
    description: "精选课件、教案和试题库，为教师同行提供高质量的教学参考资料。",
    icon: BookOpen,
    href: "/resources",
    lightColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "在线工具",
    description: "班级排座位系统、AI 教学平台等实用工具，提升教学管理效率。",
    icon: Wrench,
    href: "/tools",
    lightColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">教学领域</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            围绕物理与信息技术两大核心学科，提供丰富的教学资源与实用工具
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.map((field) => {
            const Icon = field.icon
            return (
              <Link
                key={field.title}
                href={field.href}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${field.lightColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${field.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{field.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{field.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}