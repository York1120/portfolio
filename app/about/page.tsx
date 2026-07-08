import { Mail, GraduationCap, Monitor, Award, FlaskConical } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">关于周老师</h1>
        <p className="text-gray-600 text-lg">一名热爱教学的初中物理与信息技术教师</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* 头像 */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-4xl font-bold">York</span>
            </div>
          </div>

          {/* 简介 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">你好，我是周老师</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                我是一名初中物理与信息技术教师，多年扎根教学一线。我相信，好的教育不是灌输知识，
                而是点燃学生对世界的好奇心。
              </p>
              <p>
                在物理教学中，我开发了一系列互动实验工具，将抽象的物理规律转化为可视化的交互体验，
                帮助学生在动手探索中理解声学、光学、热学、力学和电学的核心概念。
              </p>
              <p>
                在信息技术教学中，我注重培养学生的计算思维和数字素养，从 Scratch 图形化编程到 Python
                代码编程，循序渐进地引导学生进入编程世界。
              </p>
              <p>
                此外，我还开发了班级排座位系统、AI 教学平台等实用工具，希望通过技术手段提升教学管理效率，
                让教师能将更多精力投入到教学本身。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 教学领域 */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">教学领域</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <FlaskConical className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-gray-900">物理教学</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            覆盖声学、光学、热学、力学、电学五大领域，十余个互动实验，让物理学习更直观。
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Monitor className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-gray-900">信息技术</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            编程入门、计算思维培养，帮助学生在数字时代掌握核心素养。
          </p>
        </div>
      </div>

      {/* 联系方式 */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">联系方式</h2>
        <div className="inline-flex items-center gap-2 text-gray-600">
          <Mail className="w-5 h-5 text-blue-600" />
          <a href="mailto:mynameisyork@163.com" className="text-blue-600 hover:text-blue-700 font-medium">
            mynameisyork@163.com
          </a>
        </div>
      </div>
    </div>
  )
}
