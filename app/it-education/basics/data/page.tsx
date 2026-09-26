import { ArrowLeft, Monitor, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "数据处理入门 | 周老师教学园地",
  description: "电子表格基础操作、数据格式化、公式与函数、排序筛选与图表制作。",
}

export default function DataPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 max-sm:py-8">
      <Link href="/it-education" className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" />
        返回信息技术
      </Link>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 max-sm:p-5 md:p-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <span className="inline-block bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-1">🚀 进阶</span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">数据处理入门</h1>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          学习使用电子表格软件进行数据录入、整理、计算和可视化分析，培养用数据说话的能力。
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">电子表格基础</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">认识电子表格界面，掌握基本操作。</p>
              <ul className="space-y-2">
                {["工作簿、工作表、单元格的概念", "行号与列标：A1 表示第一列第一行", "单元格选中与区域选择", "工作表的新建、重命名、移动和删除", "保存与打开电子表格文件"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">数据输入与格式化</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">学会输入不同类型的数据并美化表格。</p>
              <ul className="space-y-2">
                {["文本、数字、日期等数据类型的输入", "自动填充：快速输入序列数据", "单元格格式：字体、颜色、边框、对齐", "合并单元格与自动换行", "条件格式：让数据一目了然"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">公式与函数</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">用公式和函数自动计算数据。</p>
              <ul className="space-y-2">
                {["公式基础：以 = 开头", "SUM 函数：求和", "AVERAGE 函数：求平均值", "COUNTIF 函数：按条件计数", "相对引用与绝对引用的区别"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">数据排序与筛选</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">快速从大量数据中找到需要的信息。</p>
              <ul className="space-y-2">
                {["单列排序：升序与降序", "多列排序：按主次关键字排序", "自动筛选：按条件显示数据", "自定义筛选：大于、小于、包含等条件", "练习：对班级成绩表进行排序和筛选"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">图表制作</h2>
            <div className="bg-gray-50 rounded-xl p-6 max-sm:p-4">
              <p className="text-gray-600 mb-4">用图表直观展示数据中的规律。</p>
              <ul className="space-y-2">
                {["柱状图：比较不同类别的数据", "折线图：展示数据的变化趋势", "饼图：显示各部分占比", "图表美化：标题、颜色、标签", "练习：将班级成绩数据制作成图表"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
