import fs from "fs"
import path from "path"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  content: string
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const lines = raw.split("\n")
  if (lines[0]?.trim() !== "---") {
    // No frontmatter, treat whole file as content, title from first heading
    const titleMatch = raw.match(/^#\s+(.+)/m)
    return {
      data: { title: titleMatch?.[1] || "无标题" },
      content: raw,
    }
  }

  const endIndex = lines.indexOf("---", 1)
  if (endIndex === -1) {
    return { data: {}, content: raw }
  }

  const frontmatterLines = lines.slice(1, endIndex)
  const data: Record<string, string> = {}
  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(":")
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      const value = line.slice(colonIndex + 1).trim().replace(/^"(.*)"$/, "")
      data[key] = value
    }
  }

  const content = lines.slice(endIndex + 1).join("\n").trim()
  return { data, content }
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))
  const posts: BlogPost[] = []

  for (const file of files) {
    const slug = file.replace(/\.md$/, "")
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8")
    const { data, content } = parseFrontmatter(raw)

    posts.push({
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date || "",
      category: data.category || "未分类",
      content,
    })
  }

  posts.sort((a, b) => b.date.localeCompare(a.date))
  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug) || null
}
