import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "周老师教学园地 | 初中物理 · 信息技术",
    short_name: "教学园地",
    description: "周老师个人教学网站，提供初中物理互动实验、信息技术教学、教学资源下载与在线工具。",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      { src: "/icons/logo-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
