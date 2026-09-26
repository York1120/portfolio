import type { Metadata } from "next"

/**
 * 本路由的 page.tsx 是客户端组件（用 useState 做工具卡片的展开/收起），
 * 客户端组件不能导出 metadata，因此把页面标题声明在同级 layout 中。
 */
export const metadata: Metadata = {
  title: "在线工具 | 周老师教学园地",
  description: "为教学管理打造的实用工具：班级排座位系统、AI 教学平台。",
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
