import { GraduationCap, Award, Monitor } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧头像/装饰区 */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-white rounded-3xl border-2 border-gray-200 overflow-hidden">
                <Image
                  src="/photo.jpg"
                  alt="周老师"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </div>

          {/* 右侧介绍 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              关于<span className="text-blue-600"> 周老师</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              一名扎根初中教学一线的物理与信息技术教师。我相信，好的教育不是灌输知识，
              而是点燃学生对世界的好奇心。通过互动实验和编程实践，我努力让每一节课都成为学生探索的起点。
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">物理教学</h3>
                  <p className="text-gray-600 text-sm">十余个互动实验覆盖声、光、热、力、电五大领域</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">信息技术</h3>
                  <p className="text-gray-600 text-sm">编程入门、算法思维，培养数字时代原住民</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">教育理念</h3>
                  <p className="text-gray-600 text-sm">动手探索、互动学习，让知识在体验中生长</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
