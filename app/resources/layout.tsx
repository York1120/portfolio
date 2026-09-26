import type { Metadata } from "next"

/**
 * 本路由的 page.tsx 是客户端组件（用 useState 做资源的展开/收起），
 * 客户端组件不能导出 metadata，因此把页面标题声明在同级 layout 中。
 */
export const metadata: Metadata = {
  title: "教学资源 | 周老师教学园地",
  description: "初中物理与信息技术课件、教案与试题库资源，持续更新中。",
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
