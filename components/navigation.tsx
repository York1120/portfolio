"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

interface NavChild {
  label: string
  href: string
  /** 使用原生 <a>，强制整页跳转 */
  plain?: boolean
}

interface NavItem {
  label: string
  href?: string
  /** 使用原生 <a>，强制整页跳转（/physics/ 是独立的静态实验室站点，不归 React 路由管辖） */
  plain?: boolean
  children?: NavChild[]
}

const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  {
    label: "物理教学",
    href: "/physics/",
    plain: true,
    children: [
      { label: "声学", href: "/physics/#acoustics", plain: true },
      { label: "光学", href: "/physics/#optics", plain: true },
      { label: "热学", href: "/physics/#thermal", plain: true },
      { label: "力学", href: "/physics/#mechanics", plain: true },
      { label: "电学", href: "/physics/#electricity", plain: true },
      { label: "课程讲义", href: "/physics/course" },
    ],
  },
  {
    label: "信息技术",
    href: "/it-education",
    children: [
      { label: "编程入门", href: "/it-education#programming" },
      { label: "信息技术基础", href: "/it-education#basics" },
    ],
  },
  {
    label: "教学资源",
    href: "/resources",
    children: [
      { label: "课件下载", href: "/resources#courseware" },
      { label: "教案分享", href: "/resources#plans" },
      { label: "试题库", href: "/resources#exams" },
    ],
  },
  {
    label: "在线工具",
    href: "/tools",
    children: [
      { label: "班级排座位系统", href: "/tools" },
      { label: "AI 教学平台", href: "/tools#ai" },
    ],
  },
  { label: "关于我", href: "/about" },
]

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

/**
 * plain=true 时输出原生 <a>，触发整页跳转。
 * /physics/ 是独立打包的静态站点（自带 style.css / 脚本），必须整页加载。
 */
function NavLink({
  href,
  plain,
  className,
  onClick,
  children,
}: {
  href: string
  plain?: boolean
  className?: string
  onClick?: () => void
  children: ReactNode
}) {
  if (plain) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const isActive = (href?: string) => {
    if (!href) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const isParentActive = (item: NavItem) => {
    if (item.href && isActive(item.href)) return true
    if (item.children) return item.children.some((c) => isActive(c.href))
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-2">
      <div className="glass-nav relative max-w-7xl mx-auto rounded-2xl border border-white/50 bg-white/55 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 shadow-[0_8px_32px_rgba(31,38,135,0.12),0_2px_8px_rgba(31,38,135,0.08)] hover:bg-white/70 hover:backdrop-blur-3xl hover:shadow-[0_12px_40px_rgba(31,38,135,0.16),0_4px_12px_rgba(31,38,135,0.10)]">
        <div className="flex items-center justify-between h-14 px-3 sm:px-5">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">York</span>
            </div>
            <span className="text-lg font-bold text-gray-900 hidden sm:block max-sm:block">周老师教学园地</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <NavLink
                    href={item.href!}
                    plain={item.plain}
                    onClick={() => setOpenDropdown(null)}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isParentActive(item) ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </NavLink>
                ) : (
                  <Link
                    href={item.href!}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive(item.href) ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-fade-in-down">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          href={child.href}
                          plain={child.plain}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            isActive(child.href) ? "text-blue-600 bg-blue-50 font-medium" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          )}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            className="md:hidden p-2 max-sm:p-2.5 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="菜单"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/50 bg-white/60 max-sm:max-h-[72vh] max-sm:overflow-y-auto max-sm:overscroll-contain">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="flex items-center">
                      <NavLink
                        href={item.href!}
                        plain={item.plain}
                        className={cn(
                          "flex-1 px-3 py-2 max-sm:py-3 rounded-lg text-sm font-medium transition-colors",
                          isParentActive(item) ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                      <button
                        aria-label={`展开 ${item.label}`}
                        className="p-2 rounded-lg text-gray-700 hover:bg-gray-50"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      >
                        <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === item.label ? "rotate-180" : "")} />
                      </button>
                    </div>
                    {openDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1 pb-2">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            href={child.href}
                            plain={child.plain}
                            className={cn(
                              "block px-3 py-2 max-sm:py-3 rounded-lg text-sm transition-colors",
                              isActive(child.href) ? "text-blue-600 bg-blue-50 font-medium" : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            )}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className={cn(
                      "block px-3 py-2 max-sm:py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive(item.href) ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </header>
  )
}
