import type { MetadataRoute } from "next"

/**
 * `output: "export"` 下 sitemap 也是构建期生成的静态文件，
 * 显式声明 force-static 避免 Next 把它当成需要动态渲染的路由。
 */
export const dynamic = "force-static"

const SITE_URL = "https://yorkeducation.eu.cc"

/** 主站 React 路由，对应 app 目录下各 page.tsx。 */
const PAGE_ROUTES = [
  "/",
  "/about",
  "/it-education",
  "/it-education/basics/computer",
  "/it-education/basics/data",
  "/it-education/basics/network",
  "/it-education/programming/scratch",
  "/it-education/programming/python",
  "/it-education/programming/projects",
  "/physics/course",
  "/physics/course/acoustics",
  "/physics/course/optics",
  "/physics/course/thermodynamics",
  "/physics/course/mechanics",
  "/physics/course/electricity",
  "/resources",
  "/tools",
]

/**
 * public/physics/ 下的独立静态站。这些是真实内容页（16 个互动实验 + 实验室首页），
 * 与上面的 React 路由互不重叠，所以要单独列出。
 */
const PHYSICS_PAGES = [
  "/physics/",
  "/physics/01-length.html",
  "/physics/02-frequency.html",
  "/physics/03-noise.html",
  "/physics/04-pinhole.html",
  "/physics/05-reflection.html",
  "/physics/06-rgb.html",
  "/physics/07-lens.html",
  "/physics/08-molecule.html",
  "/physics/09-engine.html",
  "/physics/11-review.html",
  "/physics/12-buoyancy.html",
  "/physics/13-torricelli.html",
  "/physics/14-quiz.html",
  "/physics/15-circuit.html",
  "/physics/16-resistors.html",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [...PAGE_ROUTES, ...PHYSICS_PAGES].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }))
}
