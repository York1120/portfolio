# 给成绩分析系统与课堂随机点名器接入账号体系（与排座位共用账号库）

## 一、架构决策：共用 `class-seating-db`，不单独建库（你的核心问题的答案）

**结论：两个工具直接绑定班级排座位系统现有的 D1 数据库 `class-seating-db`（users 表）和会话 KV，不新建账号库。**

| 方案 | 结论 | 理由 |
|---|---|---|
| **A. 共用 class-seating-db**（选定） | ✅ | 一套账号三处登录，老师只记一套密码；Cloudflare 官方支持多 Worker 绑定同一 D1/KV；users 表 schema 极简稳定（username/password_hash/salt），**零改动接入**（不改 class-seating 任何代码和迁移） |
| B. 各工具独立建 users 表 | ❌ | 三套账号记三套密码，与"加入账号"的初衷相悖；认证代码三份维护 |
| C. 新建统一"账号中心"库 | ❌ | 需迁移 class-seating 生产账号数据并改动其代码绑定，动生产系统风险大、收益不成比例 |

**风险与缓解**（选 A 需要接受的）：
- users 表 schema 由 class-seating 仓库的 migrations 唯一管理，两个新工具**只读不改**；users 表只有用户名+密码三个字段，变动概率极低
- 账号库故障会影响三处登录——但业务数据（座位/名单/成绩）分属各自数据库，D1 高可用，风险可接受
- **会话共享同一 KV**（SESSIONS）：登录凭证全站互通，一处登录的 token 三处有效（7 天 TTL 不变）；token 存各子域自己的 localStorage，各站需各登录一次（子域隔离所致，无法免登录直达）

## 二、实施内容

### A. 共用认证模块（从 class-seating/src/index.js 提取复制）
PBKDF2-SHA512 十万次迭代哈希、动态注册码（HMAC 6 位码，**REGISTER_CODE_LABEL 保持一致 → 一个注册码三处通用**）、KV 会话（sess: 前缀，7 天）、内存限流——复制到两个工具的 worker，接口路径与排座位完全一致：`/api/auth/register|login|logout|me|register-status`。

### B. roll-call 账号化改造
1. wrangler.toml 增加绑定：`class-seating-db`（binding AUTH_DB）+ SESSIONS KV（id b5bee…）
2. migration 0002：rollcall-db 的 classes 表**加 user_id 列**（数据隔离）
3. worker：auth 接口五件套；classes 的 GET/PUT 改为 **Bearer token 鉴权 + WHERE user_id = 当前用户**；**收养逻辑**——首个登录的教师自动归属现有无主班级（单教师场景，现有数据无感迁移）；移除旧 x-admin-pw 密码体系
4. 前端：未登录显示登录/注册页（含注册码输入位）；登录后正常使用；`/admin` 预设页改用账号登录
5. 注册码查询沿用排座位 /admin 页（不重复建设）

### C. grade-analysis Worker 化 + 成绩上云（按用户既有的 roll-call 模式）
1. 新建 worker/index.js（静态资源 + auth + 数据 API）；wrangler.toml 加 main、新建 D1 库 `grade-analysis-db`（业务独立）、AUTH_DB、SESSIONS 同上
2. migration：`grade_data (user_id INTEGER PRIMARY KEY, data TEXT, updated_at)`——成绩整体 JSON 存取（同 roll-call 名单的整体同步模式，避免复杂关系表）
3. API：GET/PUT `/api/grade-data`（Bearer 鉴权，按用户隔离）
4. 前端：登录/注册页；登录后成绩数据云端为主、localStorage 作离线缓存；导出/导入备份功能保留（导出的就是云端数据）

### D. Secrets 配置
`wrangler secret put REGISTER_SECRET` 配置到两个新 Worker（值与 class-seating 相同 → 注册码三处通用；从 class-seating/说明.md 提取，不在对话中明文展示）。**顺带提醒**：说明.md 里明文存着 REGISTER_SECRET 和 ADMIN_PASSWORD，建议你确认是否要把它移出仓库。

### E. 部署与验证
1. `wrangler d1 migrations apply`（rollcall-db 加列、grade-analysis-db 建表）
2. 三个站点部署：grade（首次 Worker 化）、roll-call（更新）、**class-seating 不动**
3. 本地 wrangler dev 全流程测试：注册→登录→名单按用户隔离→收养→成绩云同步→admin 预设
4. 线上验收（本机网络对 eu.cc 阻断，用手机流量）

## 三、明确不做
- 不改 class-seating 的任何代码/迁移/部署（纯只读接入）
- 不做改密码/找回密码（与现有系统一致）、不做角色权限（users 表无 role，所有账号三处通用，单教师场景够用）
- 不做"一次登录全站免登"（跨子域 SSO 需要主域 Cookie 改造，收益低）

## 四、注册方式说明
你未选择注册方式，按推荐采用**动态注册码**（与排座位一致：配 REGISTER_SECRET 即启用；若你想开放注册，不配 Secret 即自动开放，随时可切换）。