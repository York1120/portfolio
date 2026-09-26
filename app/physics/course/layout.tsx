import type { Metadata } from "next"

/**
 * 本路由的 page.tsx 是客户端组件（用 useState 做实验条目的展开/收起），
 * 客户端组件不能导出 metadata，因此把页面标题声明在同级 layout 中。
 * 子路由（acoustics / optics / ...）各自在 page.tsx 里声明自己的标题，会覆盖本层。
 */
export const metadata: Metadata = {
  title: "物理互动实验平台 | 周老师教学园地",
  description: "覆盖声学、光学、热学、力学、电学的初中物理互动实验与课程讲义。",
}

export default function PhysicsCourseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
