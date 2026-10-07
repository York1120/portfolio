#!/bin/bash
# 数据库定期备份：导出三个 D1 库的完整快照到 backups/<日期>/
# 用法：bash scripts/backup-dbs.sh
# 建议：每周手动跑一次，或用系统计划任务（Windows 任务计划程序）定时执行。
# 保留策略：保留最近 12 份，更旧的自动清理。

set -e
BASE="C:/Users/user/Desktop/个人网站"
OUT_ROOT="$BASE/backups"
DATE=$(date +%Y%m%d-%H%M%S)
KEEP=12
LOG="$OUT_ROOT/backup.log"

mkdir -p "$OUT_ROOT"
echo "=== D1 备份开始 $(date '+%F %T') ===" >> "$LOG"

declare -A DB_DIR=(
  ["class-seating-db"]="class-seating"
  ["rollcall-db"]="roll-call"
  ["grade-analysis-db"]="grade-analysis"
)

for db in "class-seating-db" "rollcall-db" "grade-analysis-db"; do
  dir="${DB_DIR[$db]}"
  out="$OUT_ROOT/$DATE"
  mkdir -p "$out"
  if (cd "$BASE/$dir" && npx wrangler d1 export "$db" --remote --output="$out/$db.sql" >> "$LOG" 2>&1); then
    size=$(du -k "$out/$db.sql" | cut -f1)
    echo "[$db] OK (${size}KB) -> $out/$db.sql" >> "$LOG"
  else
    echo "[$db] 失败" >> "$LOG"
    ok=0
  fi
done

# 保留最近 $KEEP 个日期目录
cd "$OUT_ROOT"
ls -d 2*/ 2>/dev/null | sort -r | tail -n +$((KEEP + 1)) | while read -r old; do
  rm -rf "$old"
  echo "清理旧备份: $old" >> "$LOG"
done

echo "=== 备份完成 $(date '+%F %T') ===" >> "$LOG"
