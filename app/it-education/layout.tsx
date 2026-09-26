import type { Metadata } from "next"

/**
 * 本路由的 page.tsx 是客户端组件（用 useState 做课程条目的展开/收起），
 * 客户端组件不能导出 metadata，因此把页面标题声明在同级 layout 中。
 */
export const metadata: Metadata = {
  title: "信息技术教学 | 周老师教学园地",
  description: "培养计算思维与数字素养：Scratch 与 Python 编程入门、信息技术基础、数据处理。",
}

export default function ITEducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
