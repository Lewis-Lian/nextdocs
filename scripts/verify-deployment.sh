#!/bin/bash

# GitHub Pages 部署验证脚本

echo "🔍 验证 GitHub Pages 部署配置..."

# 检查必要的文件
files_to_check=(
    ".github/workflows/deploy.yml"
    "apps/docs/next.config.ts"
    "apps/docs/package.json"
)

echo "✅ 检查必要文件..."
for file in "${files_to_check[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file 存在"
    else
        echo "  ✗ $file 缺失"
        exit 1
    fi
done

# 检查 Next.js 配置
echo "✅ 检查 Next.js 配置..."
if grep -q "output: 'export'" apps/docs/next.config.ts; then
    echo "  ✓ 静态导出已启用"
else
    echo "  ✗ 静态导出未启用"
    exit 1
fi

if grep -q "trailingSlash: true" apps/docs/next.config.ts; then
    echo "  ✓ trailingSlash 已启用"
else
    echo "  ⚠ trailingSlash 未启用（推荐启用）"
fi

if grep -q "unoptimized: true" apps/docs/next.config.ts; then
    echo "  ✓ 图像优化已禁用（适合静态导出）"
else
    echo "  ⚠ 图像优化未禁用（可能影响静态导出）"
fi

# 测试本地构建
echo "✅ 测试构建..."
echo "正在运行: pnpm run build --filter=./packages/*"
if pnpm run build --filter=./packages/* > /dev/null 2>&1; then
    echo "  ✓ 包构建成功"
else
    echo "  ✗ 包构建失败"
    exit 1
fi

echo "正在运行: pnpm run build --filter=docs"
if pnpm run build --filter=docs > /dev/null 2>&1; then
    echo "  ✓ 文档网站构建成功"
    
    # 检查输出目录
    if [ -d "apps/docs/out" ]; then
        echo "  ✓ 输出目录 apps/docs/out 已生成"
        file_count=$(find apps/docs/out -type f | wc -l)
        echo "  ℹ 生成了 $file_count 个文件"
    else
        echo "  ✗ 输出目录 apps/docs/out 不存在"
        exit 1
    fi
else
    echo "  ✗ 文档网站构建失败"
    echo "  💡 请检查构建日志以获取详细错误信息"
    exit 1
fi

echo ""
echo "🎉 所有检查通过！"
echo ""
echo "📋 下一步操作："
echo "1. 提交并推送你的更改到 GitHub"
echo "2. 在 GitHub 仓库设置中启用 GitHub Pages"
echo "3. 选择 'GitHub Actions' 作为部署源"
echo "4. 推送到 main 分支将触发自动部署"
echo ""
echo "📖 详细说明请参考: GITHUB_PAGES_DEPLOYMENT.md"