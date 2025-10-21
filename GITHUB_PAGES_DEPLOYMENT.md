# GitHub Pages 部署指南

这个项目已经配置好了 GitHub Actions 工作流，可以自动将网站部署到 GitHub Pages。

## 设置步骤

### 1. 启用 GitHub Pages

1. 打开你的 GitHub 仓库
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分，选择 **GitHub Actions**

### 2. 自动部署

部署工作流会在以下情况触发：

- 当代码推送到 `main` 分支时
- 手动触发（通过 GitHub Actions 页面）

### 3. 工作流说明

部署工作流 (`.github/workflows/deploy.yml`) 包含以下步骤：

1. **构建阶段**：
   - 检出代码
   - 设置 Node.js 和 pnpm
   - 安装依赖
   - 构建所有包
   - 构建文档网站
   - 上传构建产物

2. **部署阶段**：
   - 将构建的静态文件部署到 GitHub Pages

### 4. Next.js 配置优化

为了确保在 GitHub Pages 上正常运行，Next.js 配置已经包含：

```typescript
const config: NextConfig = {
  output: 'export', // 启用静态导出
  trailingSlash: true, // 添加尾部斜杠，确保路由正常
  images: {
    unoptimized: true, // 禁用图像优化，因为静态导出不支持
  },
  // ... 其他配置
};
```

### 5. 访问网站

部署成功后，你的网站将在以下地址可用：

```
https://<username>.github.io/<repository-name>
```

例如：`https://lewis.github.io/fumapress`

### 6. 自定义域名（可选）

如果你想使用自定义域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中输入你的域名（例如：`docs.mydomain.com`）
3. 在你的 DNS 提供商处设置 CNAME 记录指向 `<username>.github.io`

### 7. 监控部署

你可以在 **Actions** 标签下查看部署进度和日志。如果部署失败，检查日志来排除问题。

## 其他工作流

项目还包含以下工作流：

- **Lint** (`.github/workflows/lint.yml`): 代码风格检查
- **Test** (`.github/workflows/test.yml`): 运行单元测试
- **Release** (`.github/workflows/release.yml`): 发布到 NPM

## 故障排除

### 常见问题

1. **构建失败**: 检查 Actions 日志，通常是依赖安装或构建错误
2. **页面无法访问**: 确认 GitHub Pages 已启用且源设置为 GitHub Actions
3. **CSS/JS 文件 404**: 检查 `trailingSlash` 和 `assetPrefix` 配置

### 本地测试

在推送之前，你可以本地测试静态导出：

```bash
# 构建静态站点
pnpm run build --filter=docs

# 预览构建结果
cd apps/docs/out
python -m http.server 8000
# 或使用其他静态服务器
```

然后在浏览器中访问 `http://localhost:8000` 来预览网站。
