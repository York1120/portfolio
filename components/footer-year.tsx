"use client"

import { useEffect, useState } from "react"

/**
 * 页脚版权年份。
 *
 * 背景：`next.config.mjs` 设了 `output: "export"`，页面在 `next build` 时就被预渲染成
 * 静态 HTML。如果直接写 `new Date().getFullYear()`，取到的是"构建那一刻"的年份并被
 * 固化进 HTML —— 跨年后只要没有重新部署，站点就会一直显示去年的年份。
 *
 * 做法：服务端把构建年份作为首屏兜底值传进来（保证无 JS 时也有正确内容），
 * 客户端挂载后再校正为当前年份。两值相同时不会触发 re-render，
 * 因此也不会产生 hydration 不匹配告警。
 */
export function FooterYear({ buildYear }: { buildYear: number }) {
  const [year, setYear] = useState(buildYear)

  useEffect(() => {
    const current = new Date().getFullYear()
    setYear((prev) => (prev === current ? prev : current))
  }, [])

  return <>{year}</>
}
