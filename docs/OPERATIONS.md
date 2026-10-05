# 站点运维手册

> 适用范围：yorkeducation.eu.cc 下的全部五个站点。更新于 2026-10-05（全站 bug 检测 R6）。

## 一、站点与仓库总览

| 站点 | 域名 | 仓库 | 部署方式 | 数据库（D1） |
|---|---|---|---|---|
| 主站（教学园地） | yorkeducation.eu.cc | York1120/portfolio | 手动 `npm run deploy` | 无（纯静态） |
| 物理实验室 | yorkeducation.eu.cc/physics/ | 同上（public/physics/） | 随主站 | 无（纯静态） |
| 班级排座位 | seating.yorkeducation.eu.cc | York1120/class-seating | **Git 自动部署**（push 即上线） | class-seating-db + KV 会话 |
| 成绩分析 | grade.yorkeducation.eu.cc | York1120/grade-analysis | 手动 `npm run deploy` | grade-analysis-db + 共用账号库 |
| 课堂点名器 | roll.yorkeducation.eu.cc | York1120/roll-call | 手动 `npm run deploy` | rollcall-db + 共用账号库 |
| AI 教学平台 | ai.yorkeducation.eu.cc | York1120/AI-transfer-station | 手动 `npx wrangler deploy` | 无（KV 限流） |

**共用账号体系**：排座位 / 成绩分析 / 点名器三个工具共用 `class-seating-db` 的 users 表
（PBKDF2-SHA512 哈希）与同一个会话 KV（token 7 天有效，全站互通，各子域需各登录一次）。

## 二、监控入口（Cloudflare 控制台）

1. **Workers 用量与错误率**：dash.cloudflare.com → Workers & Pages → 点项目 → Metrics
   - 查看 Requests / Errors / CPU Time 曲线
2. **D1 用量**：Storage & Databases → D1 → 点数据库 → Metrics（rows read / rows written / 存储大小）
3. **KV 用量**：Storage & Databases → KV → 点命名空间 → Metrics
4. **建议开启的告警**：Workers & Pages → 项目 → Settings → Alerts（错误率突增邮件通知）

## 三、常用运维命令（在各项目目录下执行）

```bash
# 部署（grade/roll-call/AI 平台；class-seating 用 git push 自动部署）
npm run deploy

# 应用数据库迁移（有新 migrations 文件时；class-seating 远端已在 0002）
npx wrangler d1 migrations apply <库名> --remote

# 查线上数据（示例：看用户数）
npx wrangler d1 execute class-seating-db --remote --json --command "SELECT COUNT(*) FROM users"

# 查看线上 Worker 实时日志（排查线上错误）
npx wrangler tail <项目名>

# 配置 Secret（如注册码种子）
echo "<值>" | npx wrangler secret put REGISTER_SECRET
```

## 四、注册码流程（三工具通用）

1. 配置了 `REGISTER_SECRET` 的站点启用「6 位动态注册码」门槛（每 5 分钟一换，实际有效期约 10 分钟）
2. 查当前码：打开 https://seating.yorkeducation.eu.cc/admin → 输入 ADMIN_PASSWORD → 显示当前 6 位码
3. 把码念给需要注册的老师；该码在排座位 / 成绩分析 / 点名器三处通用
4. **若想开放注册**：删除对应 Worker 的 REGISTER_SECRET Secret 即可，随时可切回

## 五、账号与密码管理

- **改管理密码（查码页用）**：Cloudflare 控制台 → Workers → class-seating → Settings → Variables → 更新 `ADMIN_PASSWORD`
- **换注册码种子**：更新三个 Worker 的 `REGISTER_SECRET` Secret（排座位 / 成绩分析 / 点名器）
- **用户忘记密码**：当前无自助找回。可在 D1 控制台删除该 users 行让用户重新注册，或手动 UPDATE 其 password_hash/salt
- **登录失败锁定**：同一用户名连续失败 5 次锁定 15 分钟（KV 计数）；AI 平台为同 IP 失败 10 次锁 15 分钟。误锁等待即恢复，或在 KV 控制台删对应 `loginfail:*` / `chatfail:*` 键

## 六、数据备份

- **排座位**：前端「导出数据」生成 JSON 备份（含座位/学生/过道/备注）；D1 自动有 Time Travel（可回溯 30 天）
- **成绩分析**：前端「导出备份」；云端 grade_data 表随账号存
- **点名器**：前端「导出备份」；名单在 rollcall-db（按用户隔离）
- 紧急恢复：`npx wrangler d1 time-travel info <库名> --remote` 查看可恢复点

## 七、已知限制与后续建议（按优先级）

1. **建议在 Cloudflare 控制台给 `ai.yorkeducation.eu.cc/api/chat` 加 WAF Rate Limiting 规则**（按 IP 每分钟 10 次 POST）——代码层已有失败锁定，WAF 是第二道防线（零代码，控制台两分钟）
2. `class-seating/说明.md` 明文记录 REGISTER_SECRET / ADMIN_PASSWORD 且已进 git 历史——建议尽快轮换这两个 Secret（换完更新说明.md 或将其移出仓库）
3. 注册密码最短 4 位（历史设计）——如需提升到 8 位需改动三个工具的注册校验（功能变更，待拍板）
4. 排座位登录会话 KV 每请求读 1 次（免费额度 10 万读/天）——单校规模足够，无需优化

## 八、故障排查速查

| 现象 | 排查 |
|---|---|
| 某站点 522/530 | Workers 状态：dash → 项目 → Deployments 看最近部署是否失败 |
| 登录报"尝试过于频繁" | 内存限流（5 分钟窗口）或失败锁定（15 分钟），等待或清 KV 键 |
| 点名器/成绩显示"云端连接失败" | 该浏览器离线或 API 异常——`npx wrangler tail roll-call` 看实时日志 |
| 成绩/名单不同步 | 确认已登录（页面右上角显示用户名）；token 过期重新登录即可 |
| 排座位保存提示"数据量过大" | 班级规模超 30×30 全占的极端场景，缩小规模（单 batch 原子性保护） |
