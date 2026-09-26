# 全站 Bug 审查报告 · portfolio（周老师教学园地）

- 审查日期：2026-09-26
- 审查范围：`app/**`、`components/**`、`lib/**`、`public/physics/**`、构建与部署配置
- 审查方式：**只读审查，未改动任何源码**。所有结论均给出证据位置或命令输出。
- 代码体量：Next.js 侧 2,940 行 TSX/TS/CSS（24 个路由）；`public/physics/` 独立静态站 11,138 行（17 个 HTML + style.css + 1 个脚本）
- **先说结论：没有发现 P0（无密钥泄露、无数据丢失、无崩溃级缺陷）。发现 4 个 P1、8 个 P2、13 个 P3。**

---

## 修复状态（本节于 2026-09-26 追加，原报告正文未改动）

### 已修 15 项
`#1` `#2` `#3` `#4` `#5` `#6` `#7` `#8` `#11` `#12` `#13` `#14` `#15` `#17` `#19`

全部经真实构建产物校验（`✓ Compiled successfully` + `Generating static pages (26/26)`，36 个 HTML / 101 个 woff2 / 34 条 sitemap / `_headers` 就位）。

### 本报告中被实测推翻的两条建议（不要再照做）
- **P3-17 建议「显式写 `subsets: ["chinese-simplified", "latin"]`」—— 不可执行。**
  实测 `next build` 直接报 `Unknown subset 'chinese-simplified' for font 'Noto Sans SC'`，
  可用子集只有 `cyrillic / latin / latin-ext / vietnamese`。CJK 部分**无法声明**。
  另实测 303 条 `@font-face` 只对应 101 个 woff2（400/500/700 复用同一批可变字体文件），
  所以「减少字重」也省不下任何字节。配置已保留 `["latin"]` 并把结论写进代码注释。
- **P2-6 建议「85 处硬编码域名全改相对路径」—— 会坏事。**
  `og:image` / `twitter:image` / `itemprop="image"` 按 Open Graph 规范必须是绝对 URL，
  爬虫会丢弃相对路径，改了等于**搞坏微信/QQ 分享缩略图**。
  实际只把浏览器解析的 `rel="icon"` 与 `apple-touch-icon` 改成 `images/logo.png`（34 处），
  其余 51 处保持绝对（且已是生产域名的正确值）。

### 仍未修复（源码保持原样）
`#9` `#10` `#16` `#18` `#20` `#21` `#22` `#23` `#24` `#25`

### 上线状态：构建产物已就绪，部署需人工执行
本机沙箱对 Next 导出阶段写 `out/404.html` 的调用返回 `EPERM`（编译/预渲染/资源拷贝均成功），
且本机无 Cloudflare 凭据、沙箱到 Cloudflare API 网络不通。产物已用等价脚本复刻完成，部署请执行：

```bash
npx wrangler login    # 首次
npm run deploy        # 已含 next build
```

---

## 0. 架构事实

| 项 | 事实 |
|---|---|
| 框架 | Next.js 15.5.9，`output: "export"` 纯静态导出 |
| 部署 | Cloudflare **Workers Static Assets**（`wrangler.toml` → `[assets] directory = "out"`），**不是** Pages |
| 仓库 | https://github.com/York1120/portfolio.git（`git remote -v`） |
| 测试 | **项目内没有任何测试文件**（无 `tests/`、无 `*.test.*`、`package.json` 无 test 脚本） |
| 双实现并存 | 主站 React 路由 `/physics/course/*` 与独立静态站 `public/physics/*.html` **同时存在**，两套导航互相不感知。这是下面多条问题的根源，请优先注意。 |
| 构建产物 | `out/` 被 `.gitignore` 忽略，本地不存在（尚未构建或已清理） |

---

## 1. 速览表

| # | 级别 | 问题 | 触发条件（用户视角） | 证据 |
|---|---|---|---|---|
| 1 | **P1** | 首页照片原图 1.67 MB 直出 | 打开首页（尤其手机流量） | `public/photo.jpg` 1792×1792/1.67MB；`next.config.mjs:8` `unoptimized:true` |
| 2 | **P1** | 导航「AI 教学平台」锚点 `/tools#ai` 无落点 | 点导航 →在线工具→AI 教学平台 | `app/tools/page.tsx:18,41` vs JSX 无 `id` |
| 3 | **P1** | 自定义 404 页在线上**永不生效** | 访问任意错误 URL | `wrangler.toml` 未设 `not_found_handling`（默认 `none`） |
| 4 | **P1** | 站内锚点被固定导航条遮挡 | 点任意下拉子项，如「教案分享」 | `app/globals.css:127` 无 `scroll-padding-top` |
| 5 | **P2** | 全站 16 个页面共用同一个 `<title>` | 开多个标签页 / 搜索结果 | 仅 `app/layout.tsx:14` 定义 metadata |
| 6 | **P2** | 物理站 85 处硬编码生产域名 | 换域名 / 本地预览 | `public/physics/index.html:9-17` 等 |
| 7 | **P2** | `05-reflection.html` 是孤儿页 | 任何入口都进不去 | 全站仅该文件自身含 `05-reflection` |
| 8 | **P2** | 物理实验室**没有返回主站的链接** | 进入 `/physics/` 后 | 17 个 HTML 全无指向 `/` 的链接 |
| 9 | **P2** | 电阻实验页每秒重写 DOM 60 次 | 打开 `16-resistors.html` | `16-resistors.html:545,552-562` |
| 10 | **P2** | 全站禁用右键 + 拦截 Ctrl+S | 物理实验全站 | `disable-context-menu.js`（17 页引入） |
| 11 | **P2** | `deploy` 脚本不先构建，干净环境必失败 | `pnpm deploy` | `package.json:11`；实测报错见 §3.11 |
| 12 | **P2** | 页脚年份在构建期被固化 | 跨年后 | `components/footer.tsx:57` + 静态导出 |
| 13 | P3 | 根目录 `images/` 与 `public/photo.jpg` 完全重复 | — | md5 一致，1.8 MB 冗余 |
| 14 | P3 | `public/` 41 个模板遗留资源未使用 | — | 约 565 KB |
| 15 | P3 | 40 个依赖完全未被引用 | `pnpm install` | 见 §4.15 |
| 16 | P3 | 2 个死组件 | — | `components/ui/button.tsx`、`input.tsx` |
| 17 | P3 | 中文字体子集配置与实物不符（4.6 MB/381 KB） | 首次访问 | `.next/static/media` 101 个 woff2 |
| 18 | P3 | `01-length.html` 加载 MathJax 却无任何公式 | 打开该页（+约 1 MB） | `01-length.html:23-28` |
| 19 | P3 | 无 sitemap / robots / 安全响应头 | SEO / 安全审计 | 4 个文件均不存在 |
| 20 | P3 | 46 个文件带 UTF-8 BOM | — | 见 §4.20（已实测无害） |
| 21 | P3 | 导航 `isActive` 用前缀匹配，潜在误高亮 | 未来新增同类路径 | `components/navigation.tsx:109` |
| 22 | P3 | 锚点子项激活态永远为 false | 下拉子项 | `components/navigation.tsx:30-34` |
| 23 | P3 | 两处 `cn` 实现不一致 | — | `navigation.tsx:66` vs `lib/utils.ts` |
| 24 | P3 | 课程详情展示条数不一致（3 条 vs 全部） | 对比两个页面 | `it-education/page.tsx:191` |
| 25 | P3 | `.dark` 主题为死代码、`--font-mono` 指向未加载字体 | — | `globals.css:42-75,79` |

---

## 2. P1 详解

### P1-1 首页照片 1.67 MB 原图直出

- **触发条件**：任何人打开首页；手机 4G 或学校弱网下照片区长时间空白。
- **证据**：
  - `public/photo.jpg`：1792×1792，1,755,127 字节（1.67 MB）
  - `components/about-section.tsx:14-20`：`<Image src="/photo.jpg" fill sizes="(max-width: 768px) 256px, 320px" />`
  - `next.config.mjs:8`：`images: { unoptimized: true }` → 关闭了 Next 的图片优化，**`sizes` 属性完全失效**，浏览器只能下载原图。
- **影响**：实际显示尺寸 256–320 px，却下载 1792 px 原图，浪费约 30 倍字节。这是首屏最大的性能负担，且 `AboutSection` 就在首页。
- **建议方向（未实施）**：把 `public/photo.jpg` 压缩为 2 份（如 `photo-640.jpg` 约 80 KB、`photo-1280.jpg` 约 200 KB）并按屏宽切换；或改用 WebP；或重新开启图片优化（静态导出不支持 `next/image` 优化，可用 `sharp` 在构建期预生成）。

### P1-2 导航「AI 教学平台」的锚点 `/tools#ai` 没有落点

- **触发条件**：任意页面点「在线工具 ▾ → AI 教学平台」。页面会跳到 `/tools` 顶部，**不会**定位到 AI 工具卡片。
- **证据**：
  - `components/navigation.tsx:60`：`{ label: "AI 教学平台", href: "/tools#ai" }`
  - `app/tools/page.tsx:18`：接口声明了 `id?: string`；`:41`：AI 工具赋值 `id: "ai"`
  - 但整个 JSX（`:82-141`）**没有把 `tool.id` 渲染到任何元素上**。全项目搜索 `id="ai"` → 0 命中。
- **连带问题**：`Tool.id` 字段是彻底的死代码。
- **建议方向（未实施）**：在工具卡片容器上加 `id={tool.id}`，或把导航链接改为 `/tools`（去掉锚点）。

### P1-3 自定义 404 页面线上永不生效（部署配置缺陷）

- **触发条件**：访问任意不存在的路径，例如 `/about2`、`/physics/course/xxx`。
- **证据**：
  - `app/not-found.tsx` 已写好一个完整的中文 404（含「返回首页」按钮），静态导出会产出 `out/404.html`。
  - `wrangler.toml` 只有 `name` / `compatibility_date` / `[assets] directory`，**没有配置 `not_found_handling`**。
  - Cloudflare 官方文档明确：`not_found_handling` 的默认值是 `"none"`；要启用自定义 404 必须显式设为 `"404-page"`（原文：*"Configuring `assets.not_found_handling` to `404-page` overrides the default serving behavior"*；配置参考：*`not_found_handling`: optional, defaults to `"none"`*）。来源：developers.cloudflare.com/workers/wrangler/configuration/ 与 /workers/static-assets/routing/static-site-generation/
- **影响**：用户看到的是 Cloudflare 的英文裸 404，中文站精心做的 404 页（`app/not-found.tsx`）成为死代码。**这是一个"写了却没生效"的功能**。
- **建议方向（未实施）**：`wrangler.toml` 的 `[assets]` 下加一行 `not_found_handling = "404-page"`。

### P1-4 站内锚点被固定悬浮导航条遮挡

- **触发条件**：点导航下拉任意子项。例如首页 →「教学资源 ▾ → 教案分享」（`/resources#plans`）、或「信息技术 ▾ → 编程入门」（`/it-education#programming`）。滚动到位后，**区块标题被半透明玻璃导航条压住**。
- **证据**：
  - `components/navigation.tsx:119`：`<header className="fixed top-0 left-0 right-0 z-50 ...">`，高 64 px（`pt-2` + `h-14`）
  - `app/globals.css:127-130`：`html { scroll-behavior: smooth; }`
  - 全项目搜索 `scroll-margin` / `scroll-padding`：**Next 侧 0 命中**（对比：`public/physics/style.css:296,341` 明确写了 `scroll-margin-top: 96px/108px` —— 说明作者在物理站意识到过这个问题，但主站漏了）
  - `app/layout.tsx:28` 的 `main pt-16` 只影响页面初始位置，不影响锚点滚动定位。
- **影响**：所有 6 个带锚点的导航子项（`#programming`、`#basics`、`#courseware`、`#plans`、`#exams`、`#ai`）都受影响——点完之后用户需要手动往上滚一点才能看到标题。
- **建议方向（未实施）**：`globals.css` 加 `html { scroll-padding-top: 80px; }` 或给锚点目标加 `scroll-margin-top: 80px`。

---

## 3. P2 详解

### P2-5 全站 16 个页面共用同一个标题与描述

- **触发条件**：同时打开「关于我」「教学资源」「Python 入门」三个标签页 —— 标题完全相同，无法区分。
- **证据**：`grep -rn "export const metadata" app` → 只有 `app/layout.tsx:14` 一处。所有子页面（`about`、`tools`、`resources`、`it-education` + 6 个子页、`physics/course` + 5 个子页）都没有自己的 metadata。
- **影响**：浏览器标签页、分享卡片、搜索结果全部显示「周老师教学园地 | 初中物理 · 信息技术」。SEO 上是明显短板的。
- **建议方向（未实施）**：每个 `page.tsx` 加 `export const metadata = { title: "xxx | 周老师教学园地", description: "..." }`。

### P2-6 物理站 85 处硬编码生产域名

- **触发条件**：更换域名、换到预览环境、或在本地 `pnpm dev` 时打开 `/physics/`。
- **证据**：`grep -ohE 'https?://[^" >]*' public/physics/*.html | sort | uniq -c` → `85  https://yorkeducation.eu.cc/physics/images/logo.png`
  - 出现位置：每个 HTML 的 `<link rel="icon">`、`<link rel="apple-touch-icon">`、`og:image`、`twitter:image`、`itemprop="image"`（例：`public/physics/index.html:9-17`）
- **关键点**：`public/physics/images/logo.png` **本地文件是存在的**，本可以写成相对路径 `images/logo.png`。
- **影响**：站点已从独立域名迁到主站 `/physics/` 路径，但 favicon / 分享图仍指向旧域。旧域一旦下线或改指向，物理站 17 个页面的图标与微信/QQ 分享缩略图全部裂开；本地调试则跨域拉线上图片，改动看不到效果。
- **建议方向（未实施）**：批量替换为相对路径 `images/logo.png`（17 个文件共 85 处）。

### P2-7 `05-reflection.html` 是孤儿页

- **触发条件**：无法触发 —— 这正是问题。用户从任何入口都到不了这个页面。
- **证据**：
  - `grep -l "05-reflection" public/physics/*.html` → **只返回 `05-reflection.html` 自己**（它自己的导航里链接到自己）。
  - `public/physics/index.html:58`：「光的反射与折射定律」锚点 `#exp-refraction` 指向的是 **10-refraction.html**，不是 05。
  - `app/physics/course/optics/page.tsx:108-111` 的互动实验入口也只列了 `04 / 06 / 07 / 10`。
- **影响**：一个 420 行 / 23 KB 的完整实验页（且是**唯一正确处理全反射临界角**的实现，见 `05-reflection.html:283` 的 `Math.abs(sinR) > 1 ? null : Math.asin(...)`）被完全浪费，用户永远看不到。
- **建议方向（未实施，需你决策）**：是补进入口，还是确认它已被 10-refraction 取代后删除？两条路改法完全不同，**需要你先做产品决策**。

### P2-8 物理实验室没有返回主站的入口

- **触发条件**：从主站点「进入物理实验室」按钮或导航进入 `/physics/` 后，想回主站。
- **证据**：
  - 主站侧：`components/hero-section.tsx:36-42`、`components/navigation.tsx:26-37`、`services-section.tsx:9` 全部用原生 `<a href="/physics/">` 整页跳转（这是刻意的，代码注释有说明）。
  - 物理站侧：`grep -nE '返回主站|返回首页|href="/"' public/physics/*.html` → **0 命中**。物理站的 brand logo 指向 `index.html`（物理站自己的首页）。
- **影响**：物理实验室是一个"死胡同"，用户只能靠浏览器后退键或手改地址栏回主站。对初中生用户尤其不友好。
- **建议方向（未实施）**：在 17 个物理页的导航条里加一个「返回主站」链接指向 `/`。

### P2-9 电阻实验页每帧重写 DOM（60 次/秒）

- **触发条件**：打开 `/physics/16-resistors.html`，什么都不用做。
- **证据**：
  - `16-resistors.html:562`：`requestAnimationFrame(animateExperiment);` 启动一个**永不停止**的动画循环
  - `:559`：`animateExperiment` 内部再次 `requestAnimationFrame(animateExperiment)`
  - `:552` 调用的 `drawExperiment()` → `:545`：`box.innerHTML = '总电阻 R<sub>总</sub> = <strong id="totalResistance">' + total.toFixed(2) + '</strong> Ω ...'`
  - 即：**每秒 60 次销毁并重建 DOM 节点 + 重设 `box.className`**，而这个读数只在滑块变化时才需要更新。
- **影响**：持续 CPU 占用与无谓的布局重算，实验室老机器/平板上风扇狂转、掉电快；`#totalResistance` 节点被高频重建。功能「能用」，但这是明显的性能缺陷。
- **建议方向（未实施）**：把读数更新移出 rAF 循环，只挂在 `r1Slider/r2Slider` 的 `input` 事件上；或循环里做脏值判断。

### P2-10 全站禁用右键并拦截 Ctrl+S

- **触发条件**：物理实验全站任意页面，右键 / 长按 / 按 Ctrl+S。
- **证据**：
  - `public/physics/disable-context-menu.js`：`document.addEventListener('contextmenu', e => e.preventDefault())` + 拦截 `(ctrl|meta)+s`
  - 该脚本被 **17 个 HTML 全部引入**（`grep -l "disable-context-menu" *.html` → 17 个）
- **影响（分两面）**：
  1. **防护无效**：Ctrl+U 看源码、F12、Ctrl+P 打印、Ctrl+A/Ctrl+C 复制全部照常工作。真正的"防抄"目的达不到。
  2. **伤害可用性**：右键菜单、**移动端长按**都被拦截 → 在 `01-length.html`（有输入框的答题训练）和 `14-quiz.html` 这类页面，学生**无法通过右键/长按粘贴**；同时用户也用不了浏览器自带的「在新标签打开」「翻译此页」等能力。Ctrl+S 被禁还会影响部分用户的正常使用习惯。
- **建议方向（未实施）**：如果目的是防抄，这几行代码收益接近 0；建议移除，或至少改成只对特定的展示型元素（canvas）生效，而不是 `document` 全局。

### P2-11 `deploy` 脚本不会先构建

- **触发条件**：在干净环境（或 CI）执行 `pnpm deploy`。
- **证据**：
  - `package.json:11`：`"deploy": "npx wrangler deploy"`
  - `wrangler.toml`：`[assets] directory = "out"`
  - `.gitignore`：忽略 `out/` → 干净检出后 `out/` 不存在
  - **实测**（在临时目录复现，未触碰仓库）：
    ```
    X [ERROR] The directory specified by the "assets.directory" field in your configuration file does not exist:
      ...\out
    ```
- **影响**：部署脚本假设 `out/` 已经构建好。任何"换个机器部署 / 让别人帮你发一版"的场景都会直接失败，且报错信息指向配置而非"忘记 build"，容易误导排查方向。
- **建议方向（未实施）**：改为 `"deploy": "next build && npx wrangler deploy"`（或加 `predeploy` 钩子）。

### P2-12 页脚版权年份在构建期被固化

- **触发条件**：跨年后（例如 2027-01-01 之后）访问站点，而站点没有重新部署。
- **证据**：
  - `components/footer.tsx` 没有 `"use client"`，是**服务端组件**；`:57` 使用 `new Date().getFullYear()`
  - `next.config.mjs:4`：`output: "export"` → 页面在 `next build` 时预渲染成静态 HTML
- **影响**：年份是构建那一刻的常量，写死在 HTML 里。2027 年用户会看到「© 2026」。`public/physics/*.html` 里则是硬编码 `&copy; 2026`（例 `10-refraction.html:500`），同理会过期。
- **建议方向（未实施）**：改为客户端组件动态取年份，或接受"每次部署更新"并在发布流程里注明。

---

## 4. P3 详解（不影响主流程，但建议清理）

### 4.13 根目录 `images/` 是重复的冗余目录
`images/photo.jpg` 与 `public/photo.jpg` **md5 完全相同**（`1c4704968e2cefbb53bebb257eeb1628`），`images/logo.png` 同理。`images/` 不在 `public/` 下，构建时既不会被打包也不会被服务，纯粹占用 1.8 MB 仓库体积。全项目代码对它 0 引用。

### 4.14 `public/` 中 41 个文件从未被引用（约 565 KB）
Paperfolio 模板遗留物：`public/images/*`（模板插画、quote-icon、newsletter-icon、agency/startup/company.png…）、`public/logos/*.svg`（6 个）、`public/placeholder*`（5 个）、`public/cartoon-avatar-man-with-beard-yellow-shirt.jpg`、`public/icon.svg`、`public/images/design-mode/*`、`footer-logo.jpeg` 与 `footer-logo.jpg`（同一图两格式）。这些会原样进 `out/` 并部署，白白增加部署体积与产物文件数。
（注：`public/icons/logo-192.png`、`logo-512.png` **在用**，被 `app/manifest.ts:15-16` 以 `src:` 字段引用，不属此类。）

### 4.15 40 个依赖完全未被任何代码引用
`grep -rl "<pkg>" app components lib` 结果为 0 的包：
`recharts`、`react-markdown`、`remark-gfm`、`embla-carousel-react`、`vaul`、`cmdk`、`date-fns`、`react-day-picker`、`sonner`、`zod`、`react-hook-form`、`@hookform/resolvers`、`next-themes`、`input-otp`、`react-resizable-panels`、`@vercel/analytics`，以及 24 个 `@radix-ui/react-*` 中除 `react-slot` 外的全部（accordion / dialog / select / tabs / toast / tooltip … 计 24 个）。
影响：安装体积与时间、供应链攻击面与未来的 CVE 波及面（装而不用仍会被扫描告警）。另外 `@vercel/analytics` 装了但站点部署在 Cloudflare —— **站点目前没有任何访问统计**。

### 4.16 两个死组件
`components/ui/button.tsx`、`components/ui/input.tsx` 没有任何页面引用（`grep -rn "@/components/ui" app components` → 0 命中）。`button.tsx` 里的 `cva` 变体、`input.tsx` 里的所有样式都是死代码。

### 4.17 中文字体子集配置与实际打包不符
- `app/layout.tsx:8-12` 声明 `subsets: ["latin"]` —— 对一个全中文站点来说这个声明是错的。
- 实测产物：`.next/static/css/app/layout.css` 里 **304 条 `@font-face`**，包含大量 CJK `unicode-range`（`U+4e00` 段）；`.next/static/media/` 有 **101 个 woff2，共 4.6 MB**；`layout.css` 单文件 **381 KB**。
- 结论：`subsets: ["latin"]` 并没有真正起到限制作用，实际把全套 CJK 子集都打进去了（好在靠 `unicode-range` 分片，浏览器只下载需要的分片，所以**用户侧不算灾难**，但部署产物 +4.6 MB、首屏 CSS +381 KB）。
- 建议：显式写成 `subsets: ["chinese-simplified", "latin"]` 让意图与产物一致；若要极致优化可考虑 `display` + 只保留实际用到的权重。

### 4.18 `01-length.html` 加载了 MathJax，但页面上没有任何公式
- `01-length.html:23-28`：`window.MathJax = { tex: { inlineMath: [['\\(','\\)'], ['$','$']] } }` + `<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">`
- 实测：`\(` 唯一出现位置就是这行配置本身；`$$` **0 处**；全文唯一的 `$` 出现在 `:864` 的正则 `/^\d+(?:\.\d+)?$/` 里。
- 影响：这一页白白多下载约 1 MB 的 `tex-svg.js`（国内 CDN 可达性还会影响教室网络）；`@3` 未锁版本；并且把 `'$'` 配成行内公式定界符后，将来任何内容里出现一个 `$` 都会被 MathJax 吃掉渲染成公式。
- 建议：该页若无公式需求，直接删掉这两行。

### 4.19 缺少 sitemap / robots / 安全响应头
`app/sitemap.ts`、`app/robots.ts`、`public/robots.txt`、`public/_headers`、`public/_redirects` **均不存在**。对一个面向学生/同行的公开教学站，缺 sitemap 与 robots 影响收录；缺 `_headers` 意味着没有任何 `X-Frame-Options` / `Referrer-Policy` / CSP 等响应头加固（Cloudflare Workers 支持用 `_headers` 文件配置）。

### 4.20 46 个文件带 UTF-8 BOM —— 已实测"能跑"，但仍建议清理
`wrangler.toml`、`next.config.mjs`、`.gitignore`、`.npmrc`、`.node-version`、`app/globals.css`、几乎所有 `page.tsx`、以及全部 17 个物理站 HTML 都以 `EF BB BF` 开头。
- **已实测澄清（避免误报）**：我用 `wrangler 4.104.0 deploy --dry-run` 在临时目录复现了带 BOM 的 `wrangler.toml`，**部署成功**；`next build` 产物已存在也说明 Node 能正常加载带 BOM 的 `next.config.mjs`。所以这**不是** P0/P1。
- 但仍有两处值得顺手清掉：`.gitignore` 首行 `\ufeff# v0 runtime files` 因为 BOM 不再被识别为注释而变成一条无效规则；`.npmrc` 首行 `\ufeffonlyBuiltDependencies[]=@tailwindcss/oxide` 键名可能不被 pnpm 识别，导致 `@tailwindcss/oxide` 的构建脚本被跳过。**这一条我无法实测（本机没有 pnpm），标记为待验证。**
- 建议：用编辑器统一存为「UTF-8（无 BOM）」。

### 4.21 导航 `isActive` 使用前缀匹配，存在潜在误高亮
`components/navigation.tsx:109`：`return pathname.startsWith(href)`。例如 `href="/tools"` 会同时匹配 `/tools-old`。当前路由表里没有这种冲突路径，所以**现在不产生可见问题**，但将来新增 `/it-education-pro` 之类的路径时会静默误高亮。建议改为 `pathname === href || pathname.startsWith(href + "/")`。

### 4.22 下拉子项的激活高亮永远不生效
`components/navigation.tsx:30-34` 的子项 href 形如 `/physics/#acoustics`；`isActive` 执行 `pathname.startsWith("/physics/#acoustics")`，而 `usePathname()` 不含 hash，**永远返回 false**。同理 `/resources#plans`、`/tools#ai` 的子项高亮都不工作（`/resources#courseware` 等也一样）。属于"写了但不会亮"的死逻辑。

### 4.23 两套 `cn` 实现并存
`components/navigation.tsx:66-68` 自定义了一个 `cn(...classes) { return classes.filter(Boolean).join(" ") }`，而项目里已有 `lib/utils.ts` 的 `cn`（`clsx` + `tailwind-merge`）。导航组件用的是没有 tailwind-merge 的那个 —— 意味着在导航里写互相冲突的 Tailwind 类不会被正确合并，依赖"最后写入的类恰好是想要的那个"。当前没出问题，但是个隐患。

### 4.24 课程详情展示条数不一致
`app/it-education/page.tsx:191` 用 `item.details.slice(0, 3)` 只展示 5 条中的 3 条，且没有任何"还有 2 条"的提示；而 `app/physics/course/page.tsx:194` 的同类展开区展示**全部**条目。两处交互不一致，用户会以为信息丢了。

### 4.25 其他死代码与配置气味
- `app/globals.css:42-75` 定义了完整的 `.dark` 变量组，但全站没有任何主题切换入口（`next-themes` 装了没用）→ 暗色样式是死代码。
- `app/globals.css:79` `--font-mono: "JetBrains Mono", ...` 指向一个**从未加载**的字体；`font-mono` 全项目也未被使用 → 双重死代码。
- `app/layout.tsx` 未导出 `viewport.themeColor`（`app/manifest.ts:13` 有 `theme_color`，但 HTML `<meta name="theme-color">` 缺失）；对比物理站是有的（`public/physics/index.html:7`）。
- 无障碍：导航汉堡按钮（`navigation.tsx:185-191`）与移动端子菜单展开按钮（`:213-219`）都**没有 `aria-expanded`**；移动菜单展开时**没有锁定背景滚动**。
- `components/navigation.tsx:126` 的 `hidden sm:block max-sm:block` 是"三选二互相抵消"的写法（两个断点都显示，等于永远显示），依赖 Tailwind 生成顺序才不出错。这也是历史提交 `1d78107（修复手机竖屏时浮动条不显示站名）` 的产物 —— 修好了，但方式很脆。

---

## 5. 已核对为正常 / 排除误报的点

这一节是为了防止后续重复排查，也说明我确实逐项验证过。

| 排查项 | 结论 |
|---|---|
| **密钥泄露** | **干净**。`git ls-files` 无 `说明/secret/key/env/password` 类文件；全库硬编码 URL 只有 `yorkeducation.eu.cc` 与 3 个公开 CDN；邮箱 `mynameisyork@163.com` 是站内公开联系方式。 |
| **TypeScript 类型** | `tsc --noEmit` **0 错误**（尽管 `next.config.mjs` 设了 `typescript.ignoreBuildErrors: true`，当前并没有被它掩盖的真实错误）。 |
| **内联 JS 语法** | 抽取 `public/physics/*.html` 全部 **20 个内联 `<script>`** 用 `vm.Script` 编译 → **0 语法错误**。 |
| **引用完整性** | 主站 49 处内部 `href/src` 全部可解析到路由或 `public/` 文件；导航全部 href（含 6 个锚点）目标页与 `id` 均存在（**唯一例外是 P1-2 的 `/tools#ai`**）。 |
| **物理站 id 一致性** | 交叉比对 `getElementById` / `querySelector('#x')` / `href="#x"` 与已定义 `id`。发现 3 处可疑，**逐一追查后全部排除**：<br>① `10-refraction.html:859` 取 `medium-label-style` → 代码写了 `if (oldStyle) oldStyle.remove()`，是"存在才删"的创建模式，不是空引用错误（见 `:855-865`）。<br>② `10-refraction.html:381/647` `arrowhead-*` 重复 id → `drawLightRays()`（`:645`）用 `lightRays.innerHTML = ...` **整体替换**了静态 `<defs>`，运行时只有一组。源文件重复属冗余，不影响渲染。<br>③ `16-resistors.html:129/545` `totalResistance` 重复 → 同上，`:545` 重写的是 `#resultBox` 的 `innerHTML`，会移除 `:129` 那一份。<br>④ `11-review.html:411` 的 `getElementById('feedback-'+qName)` 是字符串拼接，非错误。 |
| **NaN / 除零风险** | `10-refraction.html:519,602,642` 的 `Math.asin(...)`：入射光始终从空气射入介质，参数恒 ≤ 1，不会产生 `NaN`。`16-resistors.html` 的并联计算 `1/((1/r1)+(1/r2))` 中 r1、r2 由 `min="1"` 的滑块提供，不会除零。同一功能在 `05-reflection.html:283` 还额外做了 `Math.abs(sinR) > 1` 的临界角保护。 |
| **外链可达性** | `123pan` 课件/教案/试题链接抽查返回 **200**；`yorkeducation.eu.cc` 及其子域 DNS 正确解析到 Cloudflare（172.67.168.234 / 104.21.27.48），沙箱内 HTTPS 握手失败是本机代理问题，**不是域名失效**（已按"先验证再断言"复核，避免误报）。 |
| **`wrangler.toml` BOM** | 实测 `wrangler 4.104.0 deploy --dry-run` **成功**，BOM 不影响部署。 |
| **`out/` 与 `public/physics/` 产物冲突** | **无冲突**。`public/physics/` 只有 `index.html` 与 `01`~`16-*.html` 平铺文件，Next 侧 `/physics/course/*` 产出的是 `out/physics/course*`，`out/physics/index.html` 由 `public/` 单独提供，两者不重叠。 |
| **`target="_blank"` 安全** | 所有外链都带了 `rel="noopener noreferrer"`（`tools/page.tsx:133`、`resources/page.tsx:209`、`services-section.tsx:64`），无标签劫持风险。 |
| **XSS** | `14-quiz.html` 大量使用 `innerHTML` 拼接，但数据源是文件内硬编码的题库；实测题库字符串中**不含单引号**（0 处转义引号），不会破坏 `onclick="checkAnswer('${key}', this)"` 的拼接。当前无注入风险。 |

---

## 6. 测试覆盖现状

| 项 | 状态 |
|---|---|
| 单元测试 / 集成测试 / E2E | **全部为零**。项目内没有任何测试文件，`package.json` 也没有 `test` 脚本。 |
| 类型检查 | 可运行（`tsc --noEmit`），但**构建时被 `ignoreBuildErrors: true` 关掉**，所以 CI 不会有红灯。 |
| Lint | 可运行（`pnpm lint` → `eslint .`），但同样被 `eslint.ignoreDuringBuilds: true` 关掉。 |
| 我的补充静态检查 | 内联脚本语法校验、`id` 引用交叉比对、引用完整性、BOM 扫描、`wrangler deploy --dry-run` —— 脚本写在系统临时目录，**未向项目写入任何文件**（除本报告）。 |
| 盲区（本次未能覆盖） | ① 浏览器真实渲染效果（需 `pnpm dev` + 移动端视口逐页比对）；② `public/physics` 16 个实验的**交互正确性**（拖拽、物理公式数值是否算对）—— 只能靠人工逐页试；③ Cloudflare 线上实际响应头与缓存行为；④ 123pan 全部 12 条链接需逐个点开确认分享未过期。 |

---

## 7. 建议的确认顺序

**第 1 批（改一行、收益最大、零风险，建议优先）**
1. P1-3：`wrangler.toml` 补 `not_found_handling = "404-page"`（让已写好的 404 页生效）
2. P1-4：`globals.css` 补 `scroll-padding-top: 80px`
3. P1-2：`app/tools/page.tsx` 卡片加 `id={tool.id}`
4. P2-11：`package.json` 的 `deploy` 改为先 `next build`

**第 2 批（需要一点工作量）**
5. P1-1：压缩 `public/photo.jpg`（首屏性能，用户体感最明显）
6. P2-6：物理站 85 处域名改相对路径
7. P2-9：`16-resistors.html` 把 DOM 更新移出 rAF 循环
8. P2-10：重新评估 `disable-context-menu.js` 是否值得保留

**第 3 批（需要你先做产品决策，方向不同改法完全不同）**
9. **P2-7**：`05-reflection.html` —— 补进入口，还是确认被 `10-refraction` 取代后删除？
10. **P2-8**：物理站是否要加「返回主站」入口？（若加了，是 17 个 HTML 都加，还是只在 index 加？）
11. **P2-5**：是否为 16 个页面逐个补独立 `title`/`description`？
12. **P2-12**：页脚年份 —— 接受"随部署更新"还是改成动态？

**第 4 批（清理类，可攒着一次做完）**
13. P3-13 ~ P3-25：删冗余资源/依赖/死组件、修 BOM、补 sitemap/robots、清 `.dark` 与 `--font-mono`、统一 `cn`、对齐字体子集声明。

---

*本报告仅为问题清单。按你的要求，**代码一行未改**。等你确认要修哪些，我再动手。*
