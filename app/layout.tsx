import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Noto_Sans_SC } from "next/font/google"

const notoSansSC = Noto_Sans_SC({
  /**
   * 关于子集声明的实测结论（2026-09-26，别再重复排查了）：
   *
   * 1. `subsets: ["chinese-simplified", ...]` **不可用** —— `next build` 会直接报
   *    "Unknown subset `chinese-simplified` for font `Noto Sans SC`"，
   *    可用子集只有 `cyrillic` / `latin` / `latin-ext` / `vietnamese`。
   *    也就是说这个中文字体的 CJK 部分**无法通过 subsets 声明**，
   *    它无论如何都会随 `latin` 一起被打包进来。写 `["latin"]` 不是笔误，
   *    而是当前 API 下唯一合理的选择。
   *
   * 2. 产物实测：101 个 woff2 / 4.6 MB / 304 条 @font-face。但
   *    101 个 unicode-range 分片 × 3 个字重 = 303 条规则，却只对应
   *    101 个文件 —— Google 给的是可变字体，400/500/700 复用同一批文件。
   *    所以「减少字重」一个字节都省不下来。
   *
   * 3. `display: "swap"` 是 next/font 的默认值（产物里每条 @font-face 都带
   *    font-display:swap），这里显式写出来只是表明意图；也不会产生任何
   *    font preload 标签（实测 `as="font"` 命中 0 次），不存在预加载洪泛。
   *
   * 4. 因此这 4.6 MB 是「用 next/font/google 自托管全套中文可变字体」的
   *    固有成本，且只影响部署产物大小：CSS 里的 unicode-range 会让浏览器
   *    只下载页面实际出现字符命中的那几个分片，用户侧不需要下完 4.6 MB。
   *
   * 真要把部署产物也压下来，只有两条路（都需要单独决策，不要顺手改）：
   *   a) 改用系统字体栈（PingFang SC / Microsoft YaHei），产物 0 字节，
   *      但字形会随用户系统变化；
   *   b) 加一步字体子集化（pyftsubset 只保留站点实际用到的汉字），
   *      产物可降到几百 KB，代价是**每次新增文案都可能需要重新生成子集**，
   *      否则新字会静默回落到备用字体。
   */
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-sc",
})

export const metadata: Metadata = {
  // 注意：这里不使用 title.template —— 实测在引入中间层 layout 后，
  // template 不会往下继承（子路由会输出裸标题）。因此各页面一律写全标题。
  title: "周老师教学园地 | 初中物理 · 信息技术",
  description: "周老师个人教学网站，提供初中物理互动实验、信息技术教学、教学资源下载与在线工具。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSansSC.variable} font-sans antialiased overflow-x-hidden`}>
        <Navigation />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
