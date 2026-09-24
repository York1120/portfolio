"use client"

import { useState } from "react"
import { Monitor, ChevronDown, Code, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface LessonItem {
  title: string
  desc: string
  level: string
  details: string[]
  href: string
}

interface Topic {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
  items: LessonItem[]
}

const topics: Topic[] = [
  {
    id: "programming",
    title: "编程入门",
    description: "从 Scratch 图形化编程到 Python 代码编程，循序渐进培养计算思维。",
    icon: Code,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    items: [
      {
        title: "Scratch 基础",
        desc: "认识 Scratch 界面，学习顺序、循环与条件结构。",
        level: "入门",
        href: "/it-education/programming/scratch",
        details: [
          "认识 Scratch 编程环境：舞台区、积木区、脚本区",
          "学习顺序结构：让角色按步骤移动、说话",
          "学习循环结构：使用重复执行积木控制动画",
          "学习条件判断：用如果-那么积木实现分支逻辑",
          "实战项目：制作一个简单的动画故事",
        ],
      },
      {
        title: "Python 入门",
        desc: "变量、数据类型、条件判断与循环语句。",
        level: "入门",
        href: "/it-education/programming/python",
        details: [
          "Python 环境搭建与第一个程序",
          "变量与数据类型：数字、字符串、布尔值",
          "条件判断：if-elif-else 语句",
          "循环语句：for 循环与 while 循环",
          "实战项目：用 turtle 模块画几何图形",
        ],
      },
      {
        title: "趣味项目实践",
        desc: "用编程制作小游戏、绘图工具等趣味项目。",
        level: "进阶",
        href: "/it-education/programming/projects",
        details: [
          "项目一：猜数字游戏 — 综合运用循环与条件",
          "项目二：简易计算器 — 函数定义与调用",
          "项目三：贪吃蛇游戏 — 列表与坐标管理",
          "项目四：天气查询工具 — API 调用入门",
          "项目展示与代码评审",
        ],
      },
    ],
  },
  {
    id: "basics",
    title: "信息技术基础",
    description: "掌握计算机基础操作、网络应用与数字素养。",
    icon: BookOpen,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    items: [
      {
        title: "计算机基础",
        desc: "认识计算机硬件、软件与操作系统基本操作。",
        level: "入门",
        href: "/it-education/basics/computer",
        details: [
          "计算机的发展历史与分类",
          "硬件组成：CPU、内存、硬盘、主板、外设",
          "软件分类：系统软件与应用软件",
          "操作系统基本操作：文件管理、系统设置",
          "键盘指法训练与打字速度提升",
        ],
      },
      {
        title: "网络与信息安全",
        desc: "互联网应用基础、信息识别与网络安全意识。",
        level: "入门",
        href: "/it-education/basics/network",
        details: [
          "互联网的工作原理：IP 地址、DNS、HTTP",
          "搜索引擎使用技巧与信息筛选",
          "网络信息安全：密码安全、隐私保护",
          "识别网络诈骗与虚假信息",
          "健康上网：时间管理与内容选择",
        ],
      },
      {
        title: "数据处理入门",
        desc: "电子表格基础操作、数据整理与简单分析。",
        level: "进阶",
        href: "/it-education/basics/data",
        details: [
          "电子表格界面认识与基本操作",
          "数据输入与格式化",
          "公式与函数：SUM、AVERAGE、COUNTIF",
          "数据排序与筛选",
          "图表制作：柱状图、折线图、饼图",
        ],
      },
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 max-sm:py-8">
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

      <div className="space-y-16 max-sm:space-y-10">
        {topics.map((topic) => {
          const Icon = topic.icon
          return (
            <section key={topic.id} id={topic.id}>
              <div className="flex items-center gap-3 mb-6">
                <div className={"w-10 h-10 " + topic.bgColor + " rounded-xl flex items-center justify-center"}>
                  <Icon className={"w-5 h-5 " + topic.color} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{topic.title}</h2>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {topic.items.map((item) => {
                  const isExpanded = expandedItem === topic.id + "-" + item.title
                  return (
                    <div
                      key={item.title}
                      className="bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="p-5">
                        <span className={"inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 " + getLevelStyle(item.level)}>
                          {getLevelLabel(item.level)}
                        </span>
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>

                        <button
                          onClick={() => setExpandedItem(isExpanded ? null : topic.id + "-" + item.title)}
                          className="inline-flex items-center gap-1 text-blue-600 text-xs font-medium hover:text-blue-700 transition-colors"
                        >
                          {isExpanded ? "收起详情" : "查看课程内容"}
                          <ChevronDown className={"w-3 h-3 transition-transform " + (isExpanded ? "rotate-180" : "")} />
                        </button>

                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-gray-100 animate-fade-in-down">
                            <ul className="space-y-1.5 mb-3">
                              {item.details.slice(0, 3).map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <span className="w-4 h-4 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium mt-0.5">
                                    {i + 1}
                                  </span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={item.href}
                              className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                            >
                              进入课程 <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      {/* 学习路径图 */}
      <div className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-8 max-sm:p-5 md:p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">推荐学习路径</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: "1", title: "计算机基础操作", desc: "掌握基本操作技能" },
            { step: "2", title: "Scratch 图形化编程", desc: "培养编程思维" },
            { step: "3", title: "Python 代码编程", desc: "进阶编程能力" },
            { step: "4", title: "综合项目实践", desc: "解决实际问题" },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                {s.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
