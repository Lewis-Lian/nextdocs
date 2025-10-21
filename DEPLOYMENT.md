# GitHub Pages 部署指南

此项目已配置为自动部署到 GitHub Pages。

## 🚀 部署步骤

### 1. 推送代码到 GitHub

```bash
# 添加远程仓库（如果还没有的话）
git remote add origin https://github.com/Lewis-Lian/fumapress.git

# 推送到主分支
git push -u origin master
```

### 2. 启用 GitHub Pages

1. 进入您的 GitHub 仓库
2. 点击 **Settings** 标签页
3. 在左侧导航中找到 **Pages**
4. 在 **Source** 下选择 **GitHub Actions**

### 3. 自动部署

一旦推送代码，GitHub Actions 将会自动：

- 🔧 安装依赖
- 📦 构建所有包
- 🏗️ 生成静态站点
- 🚀 部署到 GitHub Pages

部署完成后，您的文档站点将在以下地址可用：
`https://lewis-lian.github.io/fumapress/`

## ⚙️ 技术配置

### 静态导出配置

项目配置为 Next.js 静态导出模式：

```typescript
// next.config.ts
{
  output: 'export',
  trailingSlash: true,
  basePath: '/fumapress', // 仅在 GitHub Pages 环境中
  assetPrefix: '/fumapress', // 仅在 GitHub Pages 环境中
}
```

### GitHub Actions 工作流

`.github/workflows/deploy.yml` 配置了完整的 CI/CD 流程：

- **触发条件**: 推送到 `master` 分支
- **构建环境**: Node.js 22 + pnpm
- **缓存策略**: pnpm 依赖缓存
- **构建顺序**: packages → docs
- **部署目标**: GitHub Pages

### 环境变量

构建过程中设置的环境变量：

- `GITHUB_PAGES=true`: 启用 GitHub Pages 模式
- `GITHUB_REPOSITORY`: 自动设置的仓库名称

## 🔍 故障排除

### CSS 样式未加载

如果 CSS 样式未正确加载，可能的原因：

1. **路径配置问题**: 确保 `basePath` 和 `assetPrefix` 正确配置
2. **缓存问题**: 清除浏览器缓存并强制刷新
3. **构建错误**: 检查 GitHub Actions 构建日志

### 本地测试

要本地测试静态导出：

```bash
# 构建静态站点
pnpm run build --filter=docs

# 启动本地服务器
cd apps/docs/out
python3 -m http.server 8080

# 访问 http://localhost:8080
```

### 验证部署

使用提供的验证脚本：

```bash
chmod +x scripts/verify-deployment.sh
./scripts/verify-deployment.sh https://lewis-lian.github.io/fumapress/
```

## 📋 功能特性

- ✅ **自动部署**: 推送即部署，无需手动干预
- ✅ **构建验证**: 包含验证脚本确保部署质量
- ✅ **依赖缓存**: pnpm 缓存加速构建过程
- ✅ **静态优化**: 专为 GitHub Pages 优化的配置
- ✅ **路径自适应**: 自动处理 GitHub Pages 子目录路径
- ✅ **错误处理**: 完善的错误检查和日志记录

## 🔄 更新部署

要更新已部署的站点，只需：

1. 提交您的更改
2. 推送到 `master` 分支
3. GitHub Actions 将自动重新部署

```bash
git add .
git commit -m "更新文档内容"
git push origin master
```

## 📝 注意事项

1. **首次部署**: 可能需要几分钟时间完成
2. **缓存**: GitHub Pages 可能有缓存延迟
3. **HTTPS**: GitHub Pages 自动提供 HTTPS 支持
4. **自定义域名**: 可在 Pages 设置中配置自定义域名

---

🎉 您的 Fumadocs 站点现在已准备好部署到 GitHub Pages！