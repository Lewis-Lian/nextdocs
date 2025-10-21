## 贡献指南

非常感谢您愿意为本项目贡献代码！在提交拉取请求（Pull Request）之前，请先阅读并遵守以下指南。

### 指南

本项目为 monorepo，使用 Turborepo、pnpm 和 [Changesets](https://github.com/changesets/changesets)。

#### 提交前

- 请先检查是否已有类似的 PR。
- 使用 `pnpm run prettier` 格式化代码。
- 使用 `pnpm changeset` 添加 changeset 来记录您所做的更改。
- 使用 `pnpm test` 运行单元测试，如有需要请更新快照。

#### 新功能

在提交新功能之前，请先打开一个 issue（Feature Request），说明功能的细节与设计理由。功能请求获得批准后，再提交拉取请求。

#### 修复 Bug

请提供尽可能详细的 bug 描述（如可行，请提供可复现的在线演示）。您也可以先打开一个 bug 报告，并在 PR 中链接该报告。

#### 文档

贡献文档相对简单，但请在提交前仔细检查拼写和语法错误。

### 不熟悉贡献流程？

您可以从贡献文档开始，文档位于 `/apps/docs/content/docs`。

在开发模式下运行 docs 站点：
先运行以下命令构建依赖，然后启动开发服务器：

```
pnpm run build --filter=./packages/*
pnpm run dev --filter=docs
```

运行本项目不需要额外的环境变量。
[## 贡献指南

非常感谢您愿意为本项目做出贡献！在提交拉取请求（Pull Request）之前，请注意以下几点指南。

### 指南

本项目为 monorepo，使用 Turborepo、pnpm 和 [Changesets](https://github.com/changesets/changesets)。

#### 提交前

- 检查是否已有类似的 PR。
- 使用 `pnpm run prettier` 格式化您的代码。
- 使用 `pnpm changeset` 添加 changeset 来记录您所做的更改。
- 使用 `pnpm test` 运行单元测试，并在必要时更新快照。

#### 新功能

在提交新功能之前，请先打开一个 issue（Feature Request），提供足够的信息和新增功能的理由。功能请求获得批准后，您再提交拉取请求。

#### 修复 Bug

请提供对该 bug 的详细描述（如可能，附上可运行的演示）。
或者先打开一个 bug 报告，并在您的 PR 中链接该报告。

#### 文档

贡献文档相对简单，请在提交前检查拼写和语法错误。

### 新手入门？

您可以从贡献文档开始，文档位于 `/apps/docs/content/docs`。

在开发模式下运行 docs 站点：
先使用 `pnpm run build --filter=./packages/*` 构建依赖，然后运行 `pnpm run dev --filter=docs` 启动开发服务器。

运行本项目不需要额外的环境变量。
]