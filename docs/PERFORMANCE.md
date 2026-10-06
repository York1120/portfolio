# 性能审计报告（2026-10-05，P2 轮）

> 方法：浏览器 Performance API 实测本地全栈（清缓存冷启动），非猜测。
> 结论：**四站点均已处于优秀水平，本轮未发现值得动手的瓶颈**——
> 不做无意义改动正是"不降低质量"约束下的正确决策。

## 实测数据（传输总量 = HTML + 全部资源 gzip 后）

| 站点 | 首屏总传输 | DOMContentLoaded | Load | 主要构成 |
|---|---|---|---|---|
| roll（点名器） | 167 KB | 400ms | 484ms | React runtime 100KB（框架固有）+ logo 39KB + page 9KB |
| grade（成绩分析） | 163 KB | 404ms | 470ms | 同构 |
| portfolio 首页 | 847 KB | 83ms | 332ms | **Noto Sans SC 字体分片 ~490KB**（8 个 woff2）|
| physics 首页 | **10 KB** | 75ms | 176ms | 极瘦（CSS 3.7KB + JS 0.6KB）|

## 逐项审计结论

1. **字体（portfolio 最大项）**：Noto Sans SC 4.6MB 部署产物按 unicode-range 分片，
   用户侧只下载页面命中分片（首页 8 片 ~490KB）。机制已最优（`display: swap` ✓、
   按需下载 ✓）。preload 关键分片收益 < 50ms 且与字符集耦合，不做。
2. **roll/grade**：React/Next 框架开销 100KB 为固有；页面代码 9-13KB 精瘦；
   logo 已用 192px 版（39KB 传输）。无未用依赖。
3. **physics**：10KB 首屏为理论最优；html2canvas/exceljs 动态按需加载 ✓。
4. **class-seating**：xlsx 881KB 死依赖已移除（P1）；剩余 vendor（exceljs 948KB /
   html2canvas 199KB）均动态按需 ✓；seatingLogic.js 单文件 ✓。
5. **AI 平台**：单文件 Worker，HTML+CSS+JS 内嵌，无外部资源，已最优。
6. **缓存策略**：portfolio `_headers`（/_next/static immutable 长缓存 ✓、
   physics 图片周缓存 ✓）；Workers assets 自带 etag 校验缓存 ✓。

## 记录未做（收益/风险评估后放弃）

- physics favicon.ico（104KB）：现代浏览器实际优先使用页面声明的 PNG icon；
  优化需图像处理工具且 ICO 是老浏览器兜底——保留现状。
- 字体 preload：与字符集强耦合，每次内容变更需重新计算——维护成本 > 收益。
- roll/grade logo preload：logo 仅 39KB 且位于加载队列第 3 位，preload 收益 < 50ms。

## 历史优化（P1 已上线）

- class-seating 移除同步 xlsx 死依赖（-881KB 首屏）
- roll/grade logo 512→192（各省 129KB）
